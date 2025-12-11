import { Twitter } from "lucide-react";

interface Author {
  name: string;
  bio: string | null;
  avatar: string | null;
  twitter: string | null;
}

interface AuthorBioProps {
  author?: Author | null;
}

// Default author when none is specified
const defaultAuthor: Author = {
  name: "PrivacyGecko Team",
  bio: "The PrivacyGecko team is dedicated to making digital privacy accessible for everyone. We build tools and create content to help you protect your online life.",
  avatar: null,
  twitter: "PrivacyGecko",
};

export function AuthorBio({ author }: AuthorBioProps) {
  const displayAuthor = author || defaultAuthor;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shrink-0">
          {displayAuthor.avatar ? (
            <img
              src={displayAuthor.avatar}
              alt={displayAuthor.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            displayAuthor.name.charAt(0)
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 mb-1">
            Written by {displayAuthor.name}
          </h4>
          {displayAuthor.bio && (
            <p className="text-slate-600 text-sm mb-3">{displayAuthor.bio}</p>
          )}
          {displayAuthor.twitter && (
            <a
              href={`https://twitter.com/${displayAuthor.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              <Twitter className="w-4 h-4" />
              @{displayAuthor.twitter}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
