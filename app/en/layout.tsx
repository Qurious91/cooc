import type { Metadata } from "next";
import { Noto_Sans_KR, Inter} from "next/font/google";
import "../globals.css";
import PageTransition from "../lib/page-transition";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "COOC",
  description: "CO-create with Our Chefs",
  url: "https://cooc.agency",
  siteName: "COOC",
  type: "website",
  // 소셜
  images: [
    {
      url: "https://cooc.agency/og.jpg",
      width: 1200,
      height: 630,
    },
  ],
  // SEO 메타태그 키워드
  keywords: [
    "셰프",
    "chef",
    "셰프 섭외",
    "book shef",
    "미슐랭",
    "미쉐린",
    "Michelin",
    "광고",
    "advertisement",
    "commercial",
  ],

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={notoSansKr.className}>
        <PageTransition>
          {children}
        </PageTransition>
        {/* 구글 노출용 Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "COOC",
              url: "https://cooc.agency",
              logo: "https://cooc.agency/logo.png",
              description: "Private chef booking and culinary collaboration platform.",
              sameAs: [
                "https://instagram.com/cooc",
              ],
            }),
          }}
        />
      </div>
  );
}