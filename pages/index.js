import styles from "../styles/Home.module.css";
import Head from "next/head";

function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <span className={styles.brand}>
          clone tabnews<span aria-hidden="true">&#123;</span>
        </span>
        <span className={styles.status}>Em construção</span>
      </header>
      <style jsx global>{`
        body {
          background-color: #f5f5f3;
          color: #202020;
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
      <div className={styles.glass}>
        <h1 className={styles.title}>
          Isso mesmo.
          <br />
          Não tem nada <span>pronto.</span>
        </h1>
        <div className={styles.image}>
          <img
            src="/images/the-office-michael-parkour.gif"
            alt="Michael Scott entrando no escritório e tentando fazer parkour"
            width="500"
            height="500"
            fetchpriority="high"
            className={styles.animation}
          />
        </div>
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
      </div>
    </main>
  );
}

export default Home;
