import './AreaText.css';

const AreaText = (props) => {
    const { label, placeholder } = props;
    
    const placeholderModificada = `${placeholder}...`;

    return (
        <div className="area-text">
            <label>{label}</label>
            <input type="text" placeholder={placeholderModificada} />
        </div>
    )
}


export default AreaText;