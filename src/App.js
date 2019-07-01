import React from 'react';
import './App.css';
import './Css/animation.css';
import './Css/fontello-codes.css';
import './Css/fontello-embedded.css';
import './Css/fontello-ie7-codes.css';
import './Css/fontello-ie7.css';
import './Css/fontello.css';

import Footer from './footer.js'
import Header from './header';
import AnimalList from './AnimalList';
import AppContext from './AppContext';
import NewAnimal from './NewAnimal';
import AnimalProfile from './AnimalProfile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'home',
      selectedAnimal: {},
      animals: [{
        Barrio: "Aguada",
        Colordeojos: "Oscuros",
        Colordepelo: "Negro",
        Edad: "20",
        Raza: "Boxer",
        description: "Es un perro",
        id: 1,
        name: "Juan",
        sexo: "M",
        type: "Perro",
        number: '097452365',
        email: 'marquitos@gmail.com',
        ownerName: 'Marquitos'
      }]
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
        description: newAnimal.description,
        number: newAnimal.number,
        email: newAnimal.email,
        ownerName: newAnimal.ownerName
      }],
      currentSection: 'home'
    });
  }

  selectAnimal = (animalId) => {
    this.setState({ selectedAnimal: this.state.animals.find(a => a.id === animalId) });
    this.setState({ currentSection: 'animal-profile' });
  }

  renderCurrentSection() {
    switch (this.state.currentSection) {
      case 'animal-profile':
        return <AnimalProfile />;
      case 'new-animal':
        return <NewAnimal />;
      case 'home':
      default:
        return <AnimalList />;
    }
  }

  setCurrentSection = (section) => {
    this.setState({ currentSection: section });
  }

  render() {
    console.log(this.state.animals);
    return (
      <div>
        <AppContext.Provider value={{
          animals: this.state.animals,
          addNewAnimal: this.addNewAnimal,
          clearAnimalList: this.clearAnimalList,
          selectedAnimal: this.state.selectedAnimal,
          selectAnimal: this.selectAnimal
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
