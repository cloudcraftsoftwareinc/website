import Script from 'next/script';

const gtmId = 'G-NV5LK0T9C1';

export const GoogleAnalytics = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtmId}');
        `}
      </Script>
    </>
  );
};
