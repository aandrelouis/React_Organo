import AreaText from '../AreaText';
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <AreaText label="Nome" placeholder="Digite seu nome" />
                <AreaText label="Cargo" placeholder="Digite seu cargo" />
                <AreaText label="Imagem" placeholder="Digite o link da imagem" />
            </form>
        </section>
    )
}

export default Formulario;