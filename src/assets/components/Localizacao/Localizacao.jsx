
import styles from './Localizacao.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Map from './map';


const Localizacao = () => {
  return (
    <section className={styles.container}>
      <h1>
        Onde estamos <span>localizados.</span>
      </h1>
      <div id={styles.map}>
        <Map />
      </div>
      <div className={styles.funcionamento}>
        <dl>
          <dt>Informações de Contato</dt>
          <dd>Whatsapp: (24) 9999-99999</dd>
          <dt>Horário de Funcionamento</dt>
          <dd>
            Seg - Sex | 09h - 18h <br />
            Sab | 09h - 14h
          </dd>
          <dt>Siga-nos nas redes sociais</dt>
          <dd>
            <i>
              <FaFacebook />
            </i>{' '}
            <i>
              <FaInstagram />
            </i>
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default Localizacao;
