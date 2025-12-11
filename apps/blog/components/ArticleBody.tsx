interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div
      className="prose-editorial has-dropcap pl-6"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
