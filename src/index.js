//PASSOS PARA CRIAÇÃO DA APLICAÇÃO
//1°Importar biblíotecas
//2°Criar componente
//3°Mostrar componente na tela

import React from "react"; //Fazer coisas parecidas com HTML
import ReactDOM from "react-dom"; //Rederização
import "bootstrap/dist/css/bootstrap.css";
//import PlayerDetail from "./PlayerDetail"; 
import PlayerDetail2 from "./PlayerDetail2"; // (./ significa que esta importando da mesma barra)


// criar componente
class App extends React.Component {
    constructor(props) {
        super(props);
    

        this.state = {
        indice: 0

        }
         this.jogadores = [
            {nome: "Artur", time: "Flamengo", pais: "Brasil"},
            {nome: "Bruno", time: "Vasco", pais: "Espanha"},
            {nome: "Gabriel", time: "Santos", pais: "EUA"},
            {nome: "Ricardo", time: "Goias", pais: "França"},
            
        ]
    
    }

    incrementarIndice = (event) => {
        console.log(this.state.indice);
        if (this.state.indice > this.jogadores.length -2 ) {
            this.setState({
                indice: this.jogadores.length -1
            }) 
        } else
        this.setState({
            indice: this.state.indice+1
        })
    }

    decrementarIndice = (event) => {
        console.log(this);
        if(this.state.indice <= 0) {
            this.setState({
                indice: this.state.indice
            })
        } else
        this.setState({
            indice: this.state.indice-1
        })
    }
    render() {
        return(
            <div className="container">

                <PlayerDetail2 jogadores = {this.jogadores} ></PlayerDetail2>
                {this.jogadores[this.state.indice].nome} 
                <br/>
                {this.jogadores[this.state.indice].time}
                <br/>
                {this.jogadores[this.state.indice].pais}

            <br/>
            <button type="button" className="btn btn-secondary" onClick={this.decrementarIndice}>
                Anterior 
            </button>
            <button type="button" className="btn btn-primary" onClick={this.incrementarIndice}>
              Proximo
            </button>
            <br/>
            
            </div>
        );
    }
}



//Mostrar componente React na tela
ReactDOM.render( // biblioteca ReactDOM & render (rederizar)
    <App />,
    document.querySelector("#root")
)