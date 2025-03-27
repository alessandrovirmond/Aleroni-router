import cardapio from "data/cardapio.json";
import styles from './Inicio.module.scss'

export default function Inicio() {
  let pratosRecomedados = [...cardapio];
  pratosRecomedados = pratosRecomedados.sort(() => 0.5 - Math.random()).splice(0,3)
  return (
    <section>
      <h3 className={styles.titulo}
      >Recomendações da cozinha</h3>
      <div className={styles.recomendados} >
        {pratosRecomedados.map((i) => 
          <div key={i.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={i.photo} alt={i.title}></img>
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>

        )}
      </div>
    </section>
  );
}
