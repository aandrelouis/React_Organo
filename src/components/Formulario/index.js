import { useState } from 'react';
import AreaText from '../AreaText';
import Button from '../Button';
import DropDown from '../DropDown';
import './Formulario.css'

const Formulario = (props) => {
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Formulário enviado', nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({
            nome:nome,
            cargo:cargo,
            imagem:imagem,
            time:time
        });

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');


    
    return (
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <AreaText 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                
                
                <AreaText 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                
                
                <AreaText 
                    label="Imagem" 
                    placeholder="Digite o link da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                
                
                <DropDown 
                    obrigatorio={true} 
                    itens={props.times} 
                    label="Time" 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Formulario;