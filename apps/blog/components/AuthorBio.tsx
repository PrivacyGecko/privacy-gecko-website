import { Twitter, Globe, Shield } from "lucide-react";

interface Author {
  name: string;
  bio: string | null;
  avatar: string | null;
  twitter: string | null;
  website?: string | null;
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
  website: "https://privacygecko.com",
};

export function AuthorBio({ author }: AuthorBioProps) {
  const displayAuthor = author || defaultAuthor;

  return (
    <div className="mt-12 pt-10 border-t border-[var(--color-border)]">
      <div className="bg-gradient-to-br from-[var(--color-cream-dark)] to-[var(--color-cream)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />

        <div className="relative flex flex-col sm:flex-row items-start gap-5">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              {displayAuthor.avatar ? (
                <img
                  src={displayAuthor.avatar}
                  alt={displayAuthor.name}
                  className="w-full h-full rounded-2xl object-cover"
                />
              ) : (
                <Shield className="w-10 h-10" />
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-wider text-emerald-600 uppercase mb-1">
              Written by
            </p>
            <h4 className="font-editorial text-xl font-medium text-[var(--color-charcoal)] mb-2">
              {displayAuthor.name}
            </h4>
            {displayAuthor.bio && (
              <p className="text-[var(--color-charcoal-light)] text-sm leading-relaxed mb-4">
                {displayAuthor.bio}
              </p>
            )}

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {displayAuthor.twitter && (
                <a
                  href={`https://twitter.com/${displayAuthor.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-sm text-[var(--color-charcoal)] hover:text-emerald-600 border border-[var(--color-border)] hover:border-emerald-200 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  @{displayAuthor.twitter}
                </a>
              )}
              {displayAuthor.website && (
                <a
                  href={displayAuthor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-sm text-[var(--color-charcoal)] hover:text-emerald-600 border border-[var(--color-border)] hover:border-emerald-200 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
