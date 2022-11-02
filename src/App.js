import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    // Espalha os colaboradores que já existem e adiciona o novo colaborador
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoColaboradorCadastrado={(colab) => aoNovoColaborador(colab)} 
        times={times.map(time => time.nome)} 
      />
      {/* Estou passando a função aoColaboradorCadastrado como parametro */}
      {/* Quando ela for utilizada lá dentro irá efetuar a arrow function */}
      {times.map((time) => {
        return (
          <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria}  
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />
          // O key vai ser utilizada para identificar cada elemento e quando ele for alterado ele vai renderizar novamente
        )
      })}
      <Rodape />
    </div>
  );
}

export default App;
