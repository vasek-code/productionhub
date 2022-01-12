import "../styles/globals.css";
import "aos/dist/aos.css";

import { withRouter } from "next/router";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../src/components/Navbar";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {router.pathname === "/" ? (
        <>
          <Head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>PRODUCTIONHUB - Videomarket place</title>

            <link
              rel="icon"
              type="image/x-icon"
              href="assets/img/favicon.ico"
            />

            <link
              href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"
              rel="stylesheet"
              type="text/css"
            />

            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
              rel="stylesheet"
            />

            <link href="styles.css" rel="stylesheet" />

            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
              defer
            ></script>
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"
              defer
            ></script>

            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
              defer
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
              defer
            ></script>

            <script
              src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
              defer
            ></script>

            <script src="scripts.js" defer></script>
          </Head>

          <Component {...pageProps} />
        </>
      ) : (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
              rel="stylesheet"
            />
          </Head>

          <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
          </ChakraProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
