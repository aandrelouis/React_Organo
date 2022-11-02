
import "./DropDown.css";

const DropDown = (props) => {
    
    return (
        <div className="lista-elevada">
            <label>{props.label}</label>
            <select onChange={ evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value={""}></option>
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })} 
                {/* O Map vai pecorrer, faz alguma coisa e devolve uma nova lista */}
                {/* O Forearch vai apenas pecorrer */}
            </select>
        </div>

    );
}

export default DropDown;