import React, { useState } from "react";
import Head from "next/head";

import Navigation from "../src/components/Navigation";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const [search, setSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("cocktail");
  const [cocktails, setCocktails] = useState([]);

  const handleInput = (e) => {
    setSearch(e);
  };

  return (
    <>
      <Head>
        <title>Mixing it up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <Component
        {...pageProps}
        search={search}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        cocktails={cocktails}
        setCocktails={setCocktails}
        handleInput={handleInput}
      />
    </>
  );
}

export default App;
