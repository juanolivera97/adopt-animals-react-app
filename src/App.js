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
import AppContext from './AppContext';
import NewAanimalForm from "./NewAanimal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,
      animals: [{
        name: 'pepe',
        Sexo: "Macho",
        Raza: "Golden",
        Edad: "3 Años",
        Barrio: "Aguada",
        Colordepelo: "Dorado",
        Colordeojos: "Negros"


      }, {
        name: 'nico',
        raza: 'golden',
        Sexo: "Macho",
        Raza: "Golden",
        Edad: "3 Años",
        Barrio: "Aguada",
        Colordepelo: "Dorado",
        Colordeojos: "Negros"

      }, {
        name: "trueno",
        raza: "golden",
        Sexo: "Macho",
        Raza: "Golden",
        Edad: "3 Años",
        Barrio: "Aguada",
        Colordepelo: "Dorado",
        Colordeojos: "Negros"
      }, {
        name: "trueno",
        raza: "golden",
        Sexo: "Macho",
        Raza: "Golden",
        Edad: "3 Años",
        Barrio: "Aguada",
        Colordepelo: "Dorado",
        Colordeojos: "Negros"
      }, {
        name: "trueno",
        raza: "golden",
        Sexo: "Macho",
        Raza: "Golden",
        Edad: "3 Años",
        Barrio: "Aguada",
        Colordepelo: "Dorado",
        Colordeojos: "Negros"
      }, {
        name: "trueno",
        raza: "golden",
        Sexo: "Macho",
        Raza: "Golden",
        Edad: "3 Años",
        Barrio: "Aguada",
        Colordepelo: "Dorado",
        Colordeojos: "Negros"
      },]

    };
  }
  clearAnimalList = () => {
    // Removing all products consist on setting a new state with the property products equals to an empty array.
    this.setState({
      animals: []
    });
  }

  addAnimal = () => {
    // Only add the potato to the product list, if there are no potatos on the product list.
    if (this.state.products.some(p => p.name === 'Animal') === false) {
      // Adding a potato consist on setting a new state with the copy of the current products array + the new potato.
      this.setState({
        animals: [...this.state.animals, {
          id: this.getNextAnimalId(),
          name: "trueno",
          raza: "golden",
          Sexo: "Macho",
          Raza: "Golden",
          Edad: "3 Años",
          Barrio: "Aguada",
          Colordepelo: "Dorado",
          Colordeojos: "Negros"
        }]
      });
    }
  }

  getNextAnimalId() {
    var productWithHighestId = this.state.animals.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }


  addNewAnimal = (newAnimal) => {
    this.setState({
      animals: [...this.state.animals, {
        id: this.getNextAnimalId(),
        name: newAnimal.name,
        raza: newAnimal.raza,
        sexo: newAnimal.sexo,
        Raza: newAnimal.raza,
        Edad: newAnimal.edad,
        Barrio: newAnimal.barrio,
        Colordepelo: newAnimal.colordepelo,
        Colordeojos: newAnimal.colordeojos
      }]
    });
  }
  renderCurrentSection() {
    switch (this.state.currentSection) {
      case 'NewAanimalForm':
        return (
          <NewAanimalForm />
        );
      case 'home':
      default:
        return <List />;
    }
  }


  render() {
    return (
      <div>
        <AppContext.Provider value={{
          animals: this.state.animals,
          addNewAnimal: this.addNewAnimal,
          addAnimal: this.addAnimal,
          clearAnimalList: this.clearAnimalList,

        }}>


          <Header>
            <button onClick={this.goToHome}>Home</button>
            <button onClick={this.goToRegistroAnimal}>Registro Animal</button>
            <button onClick={this.toggleFavoritesButton}>Show/Hide Favorites button</button>
            {this.state.showFavoritesButton ? <button>Favorites</button> : ''}
          </Header>

          <List />


          <Footer />

        </AppContext.Provider>
      </div>
    );
  }
}


export default App;
