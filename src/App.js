import './App.css';
import {Component} from 'react';
import './css/style.css'

class App extends Component {

  constructor(props) {
    super(props);

      this.state = {
        nutri: []
      };
  }

  componentDidMount() {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
      let state = this.state;
      state.nutri = json;
      this.setState(state);
    })
  }

  render() {
    return (
      <div className="container">

        <header>
          Posts Nutrição
        </header>
      
        {this.state.nutri.map((item) => {
          return (
              <article className='post' key={item.id}>
                <strong className='titulo'>{item.titulo}</strong>
                <img src={item.capa} className="capa" />
                <p className='subtitulo'>{item.subtitulo}</p>
                <a href='#' className='botao'>Acessar</a>
              </article>
              
          );
          
        })}
      </div>
    );
  }
  
}

export default App;
