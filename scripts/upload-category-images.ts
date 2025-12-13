import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as fs from "fs";
import * as path from "path";

// R2 Configuration - Set these environment variables before running
const R2_ENDPOINT = process.env.R2_ENDPOINT || "";
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "";
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "";
const R2_BUCKET = process.env.R2_BUCKET || "privacygecko-blog";

// Initialize S3 client for Cloudflare R2
const s3Client = new S3Client({
  region: "auto",
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

// Images to upload
const IMAGES_DIR = path.join(__dirname, "../apps/blog/public/images/categories");
const images = [
  "privacy.jpg",
  "security.jpg",
  "crypto-safety.jpg",
  "browser-protection.jpg",
  "file-security.jpg",
  "passwords-identity.jpg",
];

async function uploadImage(filename: string): Promise<string> {
  const filePath = path.join(IMAGES_DIR, filename);
  const fileBuffer = fs.readFileSync(filePath);
  const key = `images/categories/${filename}`;

  console.log(`Uploading ${filename}...`);

  await s3Client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: fileBuffer,
      ContentType: "image/jpeg",
    })
  );

  // R2 public URL pattern
  const publicUrl = `https://pub-${R2_BUCKET}.r2.dev/${key}`;
  console.log(`  Uploaded: ${key}`);
  return publicUrl;
}

async function main() {
  console.log("Starting category image upload to R2...\n");

  const uploadedUrls: Record<string, string> = {};

  for (const image of images) {
    try {
      const url = await uploadImage(image);
      const categorySlug = image.replace(".jpg", "");
      uploadedUrls[categorySlug] = url;
    } catch (error) {
      console.error(`Failed to upload ${image}:`, error);
    }
  }

  console.log("\n\nUploaded URLs:");
  console.log(JSON.stringify(uploadedUrls, null, 2));
}

main().catch(console.error);
