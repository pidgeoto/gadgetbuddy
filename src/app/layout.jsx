import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import { ChevronRight } from "lucide-react";
import Script from "next/script";

export async function generateMetadata() {
  return {
    title: "32mobiles.com - Your Ultimate Tech Guide!",
    keywords:"32 Mobiles, mobile phones, mobile comparison, phone information, compare smart phones, mobile articles, mobile prices in india, best mobiles, latest mobiles, latest smart phones, budget mobiles, samsung, apple, iphone, oppo, vivo, motorola, redmi, mi, ausus, rog, gaming mobile phones, best camera phone, laptops, smart watches, tv, earphones, headphones, ear buds, tablets, speaker, blutooth speakers, wireless headphones, wireless speakers, flash sale, best deals, festival sale, diwali sale, mega sale, end of season sale.",
    description:
      "Unleash the power of tech with our comprehensive hub! Dive into the latest gadget news, discover unbeatable deals, read expert reviews, and seize exclusive offers. Your ultimate destination for staying ahead in the world of gadgets. Explore, compare, and secure the best tech deals on our platform. Elevate your tech experience with us!",
    metadataBase: new URL("https://www.32mobiles.com"),
    icons: {
      icon: "/images/favicon.ico",
    },
    verification: { google: "9fkc6mYMePgqqmOyJZXFj0cXnl2cGnjwmlWLLqwmiDw" },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
  };
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <NextBreadcrumb
          homeElement={"Home"}
          separator={
            <div className="flex items-center justify-center invisible md:visible">
              <ChevronRight className="h-4" />
            </div>
          }
          activeClasses="text-amber-500"
          containerClasses="flex pt-3 bg-transparent"
          listClasses="hover:underline font-bold"
          capitalizeLinks
        />
        <div className="container lg:min-h-screen">
          {children}
          <Script
            type="text/javascript"
            id="zsiqchat"
            dangerouslySetInnerHTML={{
              __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq7c4baf3ecf6bc30ca93486f3cefc6d23b81da0c033f2699a042cd6ae53558b55", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`,
            }}
          ></Script>
          <Script
            id="hotjar"
            dangerouslySetInnerHTML={{
              __html: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3722249,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
            }}
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0JTD7STPKS"
          />
          <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0JTD7STPKS');
    `,
            }}
          />
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1125835581666213"
            crossorigin="anonymous"
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}
