import React from 'react';
import Input from '../Input/Input';
import styles from './Form.module.css';
import useForm from '../../../Hooks/useForm';

const Form = () => {
  const cep = useForm('cep')
  const email = useForm('email')
  const telefone = useForm('telefone')
  return (
    <div className={styles.container}>
      <h1>
        Entre em <span>contato</span> conosco.
      </h1>
      <form className={styles.containerForm}>
        <div className={styles.fullWidth}>
          <Input id="nome" type="text" label="Nome" />
        </div>
        <Input id="numero" type="text" label="Telefone" {...telefone}/>
        <Input id="cep" type="text" label="CEP" {...cep}/>
        <div className={styles.fullWidth}>
          <Input id="email" type="email" label="Email" {...email}/>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;

// export default Form
// function handleSubmit(event){
//     event.preventDefault()
//     fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(form)
//     }).then((res) => setResponse(res))
// }
