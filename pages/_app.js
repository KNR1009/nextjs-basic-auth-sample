import App from "next/app";

// import basicAuthCheck from "../src/basicAuthCheck.ts";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <h1>hello</h1>;
}

// MyApp.getInitialProps = async (appContext) => {
//   const { req, res } = appContext.ctx;
//   if (req && res) {
//     await basicAuthCheck(req, res);
//   }

//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default MyApp;
