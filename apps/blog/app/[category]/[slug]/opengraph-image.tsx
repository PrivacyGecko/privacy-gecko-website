import { ImageResponse } from "next/og";

export const alt = "Article Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Category colors
const categoryColors: Record<string, { bg: string; accent: string }> = {
  privacy: { bg: "#635BFF", accent: "#8B85FF" },
  security: { bg: "#FF6B35", accent: "#FF8F5E" },
  "crypto-safety": { bg: "#00B4D8", accent: "#48CAE4" },
  "browser-protection": { bg: "#E83E8C", accent: "#F06AA3" },
  "file-security": { bg: "#00D98A", accent: "#33E3A3" },
  "passwords-identity": { bg: "#6366F1", accent: "#8B8DF5" },
  "product-updates": { bg: "#00B876", accent: "#33C78E" },
  tutorials: { bg: "#FF6B35", accent: "#FF8F5E" },
};

// Category display names
const categoryNames: Record<string, string> = {
  privacy: "Privacy",
  security: "Security",
  "crypto-safety": "Crypto Safety",
  "browser-protection": "Browser Protection",
  "file-security": "File Security",
  "passwords-identity": "Passwords & Identity",
  "product-updates": "Product Updates",
  tutorials: "Tutorials",
};

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

// Convert slug to title case
function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function Image({ params }: Props) {
  const { category, slug } = await params;

  // Generate title from slug (no database needed)
  const title = slugToTitle(slug);
  const categoryName = categoryNames[category] || slugToTitle(category);
  const colors = categoryColors[category] || categoryColors.privacy;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAFAFA",
          position: "relative",
        }}
      >
        {/* Gradient Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.accent} 100%)`,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "60px",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Logo and Category */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "40px",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                🦎
              </div>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Privacy Gecko
              </span>
            </div>

            {/* Category Badge */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {categoryName}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                fontSize: title.length > 60 ? "48px" : "56px",
                fontWeight: 700,
                color: "#0A2540",
                lineHeight: 1.2,
                margin: 0,
                maxWidth: "900px",
              }}
            >
              {title}
            </h1>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "auto",
              paddingTop: "30px",
              borderTop: "1px solid #E5E7EB",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                color: "#64748B",
              }}
            >
              privacygecko.com/blog
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "#64748B",
                }}
              >
                Privacy-first security guides
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
