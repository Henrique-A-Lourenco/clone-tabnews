import styles from "../styles/Home.module.css";
import Head from "next/head";

function Home() {
  return (
    <main className={styles.container}>
      <style jsx global>{`
        body {
          background-color: rgb(7, 19, 31);
          color: white;
          margin: 0;
        }
      `}</style>
      <Head>
        <title>Em Construção · Clone TabNews</title>
        <meta
          name="description"
          content="Projeto de aprendizado do curso.dev. Uma página em construção, um passo de cada vez."
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <h1 className={styles.title}>Isso mesmo, não tem nada pronto</h1>
      <img
        src="/images/the-office-michael-parkour.gif"
        alt="Michael Scott entrando no escritório e tentando fazer parkour"
        width="480"
        height="371"
        fetchPriority="high"
        className={styles.image}
      />
      <h2 className={styles.subtitle}>Página em construção</h2>
      <p className={styles.text}>
        Esse projeto é para colocar em prática os conhecimentos adquiridos no
        <strong> curso.dev</strong>.
      </p>
      <a
        className={styles.link}
        href="https://github.com/Henrique-A-Lourenco/clone-tabnews"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver projeto no GitHub <span aria-hidden="true">↗</span>
        <span className={styles.srOnly}> (abre em outra aba)</span>
      </a>
    </main>
  );
}

export default Home;
