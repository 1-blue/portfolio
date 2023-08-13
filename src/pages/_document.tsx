import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 페비콘 */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* 메타데이터 */}
        <meta name="application-name" content="bleportfolio" />
        <meta name="author" content="1-blue" />
        <meta name="creator" content="1-blue" />
        <meta name="description" content="프론트엔드 개발자 박상은의 포트폴리오 웹사이트입니다. ( by 1-blue )" />
        <meta name="keywords" content="1-blue, TypeScript, Next.js, FrontEnd, Developer, portfolio, 프론트엔드, 포트폴리오" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="author" href="https://github.com/1-blue" />

        {/* 카카오톡, 네이버 블로그 미리보기 제공할 정보 */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:url" content="https://bleportfolio.vercel.app" />
        <meta property="og:image" content="https://bleportfolio.s3.ap-northeast-2.amazonaws.com/logo.png" />
        <meta property="og:site_name" content="프론트엔드 포트폴리오 - 박상은" />
        <meta property="og:title" content="프론트엔드 포트폴리오 - 박상은" />
        <meta property="og:description" content="프론트엔드 개발자 박상은의 포트폴리오 웹사이트입니다. ( by 1-blue )" />

        {/* 트위터 미리보기 제공할 정보 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="1-blue" />
        <meta name="twitter:image" content="https://bleportfolio.s3.ap-northeast-2.amazonaws.com/logo.png" />
        <meta name="twitter:title" content="프론트엔드 포트폴리오 - 박상은" />
        <meta name="twitter:description" content="프론트엔드 개발자 박상은의 포트폴리오 웹사이트입니다. ( by 1-blue )" />

        {/* 폰트 */}
      </Head>

      <body className="font-main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
