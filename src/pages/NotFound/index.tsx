import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import {} from 'react-router-dom'

export default function NotFound() {
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true
        })}>
            <div className={styles.voltar}>
                <button>
                    <button onClick={ ( ) => {}}>
                        {'< Voltar'}
                    </button>
                </button>
            </div>
        <NotFoundImage />
        </div>
    );
}