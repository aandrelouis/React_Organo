import './Button.css';

const Button = (props) => {
    return (
        <button className='button'>
            {props.children} 
            {/* Tudo que tiver dentro do botão vai ser passado para dentro do componente */}
        </button>
    )
}   

export default Button;