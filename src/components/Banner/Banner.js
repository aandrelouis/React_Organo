import './Banner.css'

export const Banner = () => {
    //JSX - Como o react tabalha com a parte visuale transforma em elementos no DOM
    return(
        <header className="Banner">
            <img  src="/assets/banner.png" alt="O banner principal da página do Organo" />
        </header>
    )

}
