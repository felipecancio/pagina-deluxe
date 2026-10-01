import Script from "next/script";
import { META_CONTENT, META_PIXEL_ID } from "@/lib/meta-pixel";
import { getDictionary, type Locale } from "@/lib/i18n";

export function MetaPixel({ locale }: { locale: Locale }) {
  const contentJson = JSON.stringify(META_CONTENT);
  const pixelScript = getDictionary(locale).pixelScript;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/${pixelScript}/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent', ${contentJson});
          `,
        }}
      />
      <noscript>
        <img
          height={1}
          width={1}
          alt=""
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
