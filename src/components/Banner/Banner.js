import './Banner.css'

export const Banner = () => {
    //JSX - Como o react tabalha com a parte visual e transforma em elementos no DOM
    return(
        <header className="banner">
            <img  src="/assets/banner.png" alt="O banner principal da página do Organo" />
        </header>
    )

}

//Dump component - Componente sem estado
