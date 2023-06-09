import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
      />
      <Html lang="ko-KR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
