import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer.js'
import Header from './header';
import List from './list';
import Card from './card';



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
