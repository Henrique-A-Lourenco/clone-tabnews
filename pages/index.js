import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img src="/images/LogoDev.png" alt="Logo Dev" className={styles.image} />
      <h1 className={styles.title}>Página em construção</h1>
      <p className={styles.text}>
        Esse projeto é para colocar em pratica os conhecimento adquiridos no{" "}
        <b>curso.dev</b>.
      </p>
    </div>
  );
}

export default Home;
