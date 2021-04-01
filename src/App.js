import React,{Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=4094d6d39cef42c7b72a508efbe53ab5`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);

    }

    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
        <Header 
          titulo = "Buscador de noticias"
        />

        <div className="container white">
          <Formulario 
            guardarCategoria = {guardarCategoria}
          />
          <ListadoNoticias 
            noticias = {noticias}
          />
        </div>
    </Fragment>
  );
}

export default App;
