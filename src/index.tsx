import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Helmet>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            console.log('${process.env.PUBLIC_GOOGLE_ANALYTICS}');
            gtag('config', '${process.env.PUBLIC_GOOGLE_ANALYTICS}');`,
          }}
        />
      </Helmet>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement
);
