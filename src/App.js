import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer.js'
import Header from './header';
import List from './list';
import './Css/animation.css';
import './Css/fontello-codes.css';
import './Css/fontello-embedded.css';
import './Css/fontello-ie7-codes.css';
import './Css/fontello-ie7.css';
import './Css/fontello.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
      animals: [{
        name: 'pepe',
        raza: 'caniche'

      }, {
        name: 'fito',
        raza: 'golden'

      }]

    };
  }
  render() {
    return (
      <div>
        <Header />

        <List animals={this.state.animals}/>


        <Footer />
      </div>
    );
  }
}


export default App;
