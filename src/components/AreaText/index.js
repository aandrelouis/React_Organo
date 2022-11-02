import './AreaText.css';

const AreaText = (props) => {
    const { label, placeholder } = props;
    
    const placeholderModificada = `${placeholder}...`;

    // const [valor, setValor] = useState('');
    //toda vez que tiver o nome use no inicio, é um hook


    // const aoDigitado = (evento) => {
    //     props.aoAlterdado(evento.target.value)
    // } 
    // Posso fazer assim ou posso fazer direto no onChange

    return (
        <div className="area-text">
            <label>{label}</label>
            <input 
                onChange={event => props.aoAlterado(event.target.value)}
                value={props.valor}
                required={props.obrigatorio} 
                type="text" 
                placeholder={placeholderModificada} />
        </div>
    )
}


export default AreaText;

// Estado do componente é uma variável que vai ser alterada ao longo do tempo
// Se o estado for alterado, o componente vai ser renderizado novamente
// O ciclo de vida de um componente é o tempo que ele existe na tela