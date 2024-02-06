import styles from "../styles/Home.module.css";
import Head from "next/head";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Em Construção</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <h1 className={styles.title}>Isso mesmo não tem nada pronto </h1>
      <img
        src="/images/SeQuiserSimMano.gif"
        alt="Logo Dev"
        className={styles.image}
      />
      <h1 className={styles.title}>Página em construção</h1>
      <p className={styles.text}>
        Esse projeto é para colocar em prática os conhecimento adquiridos no
        <b> curso.dev</b>.<br></br>
        <a
          href="https://github.com/Henrique-A-Lourenco/clone-tabnews"
          target="_blank"
        >
          <b>link GitHub</b>
        </a>
      </p>
    </div>
  );
}

export default Home;
