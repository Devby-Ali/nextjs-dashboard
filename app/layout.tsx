import "@/app/ui/global.css";
import { exo_2 } from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo_2.className} antialiased`}>{children}</body>
    </html>
  );
}
