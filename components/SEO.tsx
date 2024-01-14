"use client";

import Head from "next/head";

const SEO = () => {
  const currentLocale = "en";
  const title = "AK HOLDING COMPANY ";
  const description = "INVESTING IN VISIONARIES & CREATING OPPORTUNITIES";
  const image = "/website.png";
  const siteUrl = "https://capivo-landing-page.vercel.app/";

  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content={description} />

      {/* favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="icon" type="image/png" sizes="32x32" href="path/to/your/favicon.png"/> */}
      <link rel="icon" type="image/svg+xml" href="/new-logo-black.svg" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourTwitterHandle" />
      {/* Update with your Twitter handle */}
      <meta name="twitter:creator" content="@yourTwitterHandle" />
      {/* Update with your Twitter handle */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta name="language" content="English" />
      <meta
        name="keywords"
        content="web development, mobile apps, technology, business, PMP, ui/ux design, web designing, technical development, branding, marketing solutions"
      />
      <link rel="canonical" href={siteUrl} />
      <script type="application/ld+json">
        {`
          {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://capivo-landing-page.vercel.app/",
      "name": "Capivo",
      "description": "Top web & mobile apps development company.",
      "logo": "/logo-white.png"
          `}
      </script>

      {/* <script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""
      ></script> */}

      <title>{title}</title>
    </Head>
  );
};

export default SEO;
