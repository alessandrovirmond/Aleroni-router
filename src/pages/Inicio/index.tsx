import cardapio from "data/cardapio.json";
import styles from './Inicio.module.scss'
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {
  let pratosRecomedados = [...cardapio];
  pratosRecomedados = pratosRecomedados.sort(() => 0.5 - Math.random()).splice(0,3)
  return (
    <section>
      <h3 className={stylesTema.titulo}
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
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aleroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Rui Barbosa, 328 <br /> <br /> Centro - Nova Friburgo
        </div>
      </div>
    </section>
  );
}
