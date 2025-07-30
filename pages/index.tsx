import Head from "next/head";

import { Menu } from "./menu";
import { ReactNode } from "react";
import { MyConnect } from "../components/connectButton";
import CurrencyToggle from "../components/currencyToggle";
import { useRouter } from "next/router";
import AllVaults from "./allvaults";
import Image from "next/image";
import Wins from "../components/wins";
import { useAccount } from "wagmi";
import ExternalIconLink from '../components/ExternalIconLink';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const {address} = useAccount()
  const isHomePage = router.pathname === "/"; // Check if the current route is the homepage

  return (
    <div
    style={{
      padding: "0 1rem",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta property="og:image" content="/images/my-og-image.png" />
        <title>PoolTogether PoolTime.App</title>
        <meta content="Your all-in-one front end for PoolTogether V5." name="description" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

         {/* Farcaster Frame Meta Tag */}
         <meta name="fc:frame" content='{
           "version": "next",
            "imageUrl": "https://pooltime.app/images/embed.png",
           "button":{
             "title": "Launch",
             "action": {
               "type": "launch_frame",
               "name": "PoolTime",
               "url": "https://pooltime.app",
               "splashImageUrl": "https://pooltime.app/images/squarepool.png",
               "splashBackgroundColor": "#1a415e"
             }
           }
         }' data-rh="true" />
         
      </Head>
      <div style={{ marginTop: "12px" }}>
        <main>
          <Menu />
          <div className="wallet-connect-button">
          {/* <div style={{ display: 'flex', gap: 12 }}> */}
          <div  style={{ display: 'flex',alignItems:'end'}}>

          <span className="hidden-mobile"><CurrencyToggle/> </span>
            <MyConnect connectText="CONNECT"/>  </div>
            {address && <Wins addressProp={address} />}
</div>
        
          <div className="hidden-desktop mobile-top-spacer"></div>
          {isHomePage ? <AllVaults /> : children}
        </main>
      </div>
      <div className="footer-container">
  <div className="powered-by-div">
    <div className="sponsor-text-container">
      <span className="sponsor-text-top">Powered By</span>
    </div>
    <div className="sponsor-images-container">
      <ExternalIconLink url="https://pooltogether.com">
      <Image
                src="/images/pooltogether.svg"
                className="pooltogether"
                alt="PoolTogether"
                width={60} // Set appropriate width and height for the image
                height={30}
              />
      </ExternalIconLink>
      <ExternalIconLink url="https://witnet.io">
      <Image
                src="/images/witnet.png"
                className="witnet"
                alt="Witnet"
                width={40}
                height={30}
              />
      </ExternalIconLink>
    </div>
  </div>
  <div className="boticon">
    {/* <span title="Github">
        <img src="/images/github.png" className="github" alt="github"/>
    </span> */}
    {/* <span className="social-text-top">Socials</span> */}
    <span title="Farcaster">
      <ExternalIconLink url={(() => { const base='https://warpcast.com'; return base + '/~/channel/pool-together'; })()}>
      <Image
                src="/images/farcaster.svg"
                className="farcaster"
                alt="Farcaster"
                width={30}
                height={30}
              />
      </ExternalIconLink>
    </span>
    <span title="Twitter">
      <ExternalIconLink url="https://x.com/PoolTogether_">
      <Image
                src="/images/x.png"
                className="twitter"
                alt="Twitter"
                width={20}
                height={20}
              />
      </ExternalIconLink>
    </span>
    <span title="Mirror">
      <ExternalIconLink url="https://pooltogether.mirror.xyz/">
      <Image
                src="/images/mirror.svg"
                className="mirror"
                alt="Mirror"
                width={20}
                height={20}
              />
      </ExternalIconLink>
    </span>
    <span title="Discord">
      <ExternalIconLink url="https://pooltogether.com/discord">
      <Image
                src="/images/discord_filled.svg"
                className="discord"
                alt="discord"
                width={30}
                height={30}
              />
      </ExternalIconLink>
    </span>
    {/* <span title="Docs">
        <img src="/images/docs.png" className="docs" alt="docs"/>
    </span> */}
  </div>
</div>
    </div>
  );
};

export default Layout;