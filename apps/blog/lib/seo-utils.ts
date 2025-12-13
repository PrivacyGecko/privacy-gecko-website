/**
 * SEO Utilities for extracting structured data from article content
 */

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Extract FAQ items from markdown/HTML content
 * Looks for patterns like:
 * - ## FAQ / ## Frequently Asked Questions
 * - ### Question? / **Question?**
 * - Answer text following the question
 */
export function extractFAQFromContent(content: string | null): FAQItem[] {
  if (!content) return [];

  const faqs: FAQItem[] = [];

  // Pattern 1: Markdown headers with questions (### What is...? or ## What is...?)
  const headerPattern = /#{2,3}\s+(.+\?)\s*\n+([^#]+?)(?=\n#{2,3}|\n*$)/gi;

  // Pattern 2: Bold questions (**Question?**)
  const boldPattern = /\*\*(.+\?)\*\*\s*\n+([^*]+?)(?=\*\*|\n*$)/gi;

  // Check if content has FAQ section
  const faqSectionMatch = content.match(/#{1,3}\s*(FAQ|Frequently Asked Questions)/i);

  if (faqSectionMatch) {
    // Extract FAQ section
    const faqStartIndex = faqSectionMatch.index || 0;
    const faqContent = content.slice(faqStartIndex);

    // Find all Q&A pairs in FAQ section
    let match;

    // Try header pattern first
    while ((match = headerPattern.exec(faqContent)) !== null) {
      const question = match[1].trim();
      const answer = cleanAnswer(match[2]);
      if (question && answer && answer.length > 10) {
        faqs.push({ question, answer });
      }
    }

    // Try bold pattern if no headers found
    if (faqs.length === 0) {
      while ((match = boldPattern.exec(faqContent)) !== null) {
        const question = match[1].trim();
        const answer = cleanAnswer(match[2]);
        if (question && answer && answer.length > 10) {
          faqs.push({ question, answer });
        }
      }
    }
  }

  // Limit to 10 FAQs for performance
  return faqs.slice(0, 10);
}

/**
 * Clean answer text by removing markdown formatting and trimming
 */
function cleanAnswer(text: string): string {
  return text
    .replace(/\*\*/g, "") // Remove bold
    .replace(/\*/g, "") // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Convert links to text
    .replace(/`([^`]+)`/g, "$1") // Remove code formatting
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim();
}

export interface HowToStep {
  name: string;
  text: string;
}

/**
 * Extract HowTo steps from content
 * Looks for numbered lists or step-by-step patterns
 */
export function extractHowToSteps(content: string | null): HowToStep[] {
  if (!content) return [];

  const steps: HowToStep[] = [];

  // Pattern: Numbered steps (1. Step name\n   Description) or (Step 1: Name)
  const numberedPattern = /(?:^|\n)(?:Step\s+)?(\d+)[.:]\s*\*?\*?([^*\n]+)\*?\*?\s*\n+([^\n\d]+?)(?=\n(?:Step\s+)?\d+[.:]|\n*$)/gi;

  // Pattern: ### Step 1: Name
  const headerStepPattern = /#{2,3}\s*Step\s*(\d+):?\s*(.+)\n+([^#]+?)(?=\n#{2,3}|\n*$)/gi;

  let match;

  // Try header pattern first
  while ((match = headerStepPattern.exec(content)) !== null) {
    const stepNumber = parseInt(match[1]);
    const name = match[2].trim();
    const text = cleanAnswer(match[3]);
    if (name && text && stepNumber > 0) {
      steps.push({ name, text });
    }
  }

  // Try numbered pattern if no headers found
  if (steps.length === 0) {
    while ((match = numberedPattern.exec(content)) !== null) {
      const name = match[2].trim();
      const text = cleanAnswer(match[3]);
      if (name && text) {
        steps.push({ name, text });
      }
    }
  }

  return steps;
}

/**
 * Determine if an article is a tutorial/how-to based on title and content
 */
export function isHowToArticle(title: string, content: string | null): boolean {
  const howToPatterns = [
    /^how to/i,
    /step[\s-]by[\s-]step/i,
    /guide to/i,
    /tutorial/i,
    /^setup /i,
    /^configure /i,
    /^install /i,
  ];

  if (howToPatterns.some((pattern) => pattern.test(title))) {
    return true;
  }

  if (content) {
    const hasSteps = /step\s+\d+/i.test(content) || /#{2,3}\s*Step\s+\d+/i.test(content);
    return hasSteps;
  }

  return false;
}

/**
 * Estimate reading time from word count
 */
export function estimateReadingTime(wordCount: number | null): string {
  if (!wordCount) return "PT5M"; // Default 5 minutes
  const minutes = Math.ceil(wordCount / 200); // ~200 words per minute
  return `PT${minutes}M`;
}
