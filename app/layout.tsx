import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Inventory Reorder Predictor",
  description: "Predict when to reorder inventory before stockouts. Analyzes sales velocity, seasonal trends, and lead times to calculate optimal reorder points."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="32f860e4-4d67-4945-9a1e-b956dd7cfd9b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
