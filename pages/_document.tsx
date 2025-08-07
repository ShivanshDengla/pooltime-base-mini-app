import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Farcaster Frame Meta Tag */}
          <meta
            property="fc:frame"
            content='{"version":"next","imageUrl":"https://pooltime-base-mini-app.vercel.app/images/embed.png","button":{"title":"Launch PoolTime","action":{"type":"launch_frame","name":"PoolTime","url":"https://pooltime-base-mini-app.vercel.app","splashImageUrl":"https://pooltime-base-mini-app.vercel.app/images/squarepool.png","splashBackgroundColor":"#1a415e"}}}'
          />
          {/* Mini App specific metadata */}
          <meta name="fc:miniapp" content="true" />
          <meta name="fc:miniapp:name" content="PoolTime" />
          <meta
            name="fc:miniapp:description"
            content="Your all-in-one front end for PoolTogether V5."
          />
          <meta
            name="fc:miniapp:icon"
            content="https://pooltime-base-mini-app.vercel.app/images/squarepool.png"
          />
          <meta name="fc:miniapp:url" content="https://pooltime-base-mini-app.vercel.app" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
} 