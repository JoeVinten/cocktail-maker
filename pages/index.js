import { useState, useEffect } from "react";
import Head from "next/head";
import TextInput from "../src/components/TextInput";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../src/components/Button";

export default function Home() {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(search);
    setSearch("");
  };

  const getData = (search) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    )
      .then((data) => data.json())
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mixing it up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.textArea}>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="hello"
            label="Search field"
            placeholder="Search for a cocktail..."
            value={search}
            onChange={handleInput}
          />
          <Button name="Search" />
        </form>
      </div>
      <Image
        className={styles.backgroundDisplay}
        src="/../public/undraw_partying_p92d.svg"
        alt="Party illustration"
        width={500}
        height={500}
      />
    </div>
  );
}
