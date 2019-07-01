import React from 'react';
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
import NewAnimal from './NewAnimal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'home',
      animals: []
    };
  }

  clearAnimalList = () => {
    this.setState({
      animals: []
    });
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
        type: newAnimal.type,
        sexo: newAnimal.sexo,
        Raza: newAnimal.raza,
        Edad: newAnimal.edad,
        Barrio: newAnimal.barrio,
        Colordepelo: newAnimal.colordepelo,
        Colordeojos: newAnimal.colordeojos,
        description: newAnimal.description
      }],
      currentSection: 'home'
    });
  }

  renderCurrentSection() {
    switch (this.state.currentSection) {
      case 'new-animal':
        return (
          <NewAnimal />
        );
      case 'home':
      default:
        return <List />;
    }
  }

  setCurrentSection = (section) => {
    this.setState({ currentSection: section });
  }

  render() {
    return (
      <div>
        <AppContext.Provider value={{
          animals: this.state.animals,
          addNewAnimal: this.addNewAnimal,
          clearAnimalList: this.clearAnimalList
        }}>
          <Header navigateTo={this.setCurrentSection}/>
          {this.renderCurrentSection()}
          <Footer />
        </AppContext.Provider>
      </div>
    );
  }
}


export default App;
