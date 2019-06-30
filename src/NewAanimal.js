import React from 'react';


class NewAnimalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            barrio: " ",
            fechadenacimiento:" ",
            colordepelo: " ",
            raza: " ",
            sexo: " ",
            numerodecontacto: " ",
            email: " ",
            descripcióndelanimal: " ",
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handlePriceChange = (event) => {
        this.setState({ barrio: event.target.value });
    }
    handleNameChange = (event) => {
        this.setState({ fechadenacimiento: event.target.value });
    }
    handleNameChange = (event) => {
        this.setState({ colordepelo: event.target.value });
    }
    handleNameChange = (event) => {
        this.setState({ raza: event.target.value });
    }
    handleNameChange = (event) => {
        this.setState({ sexo: event.target.value });
    }
    handleNameChange = (event) => {
        this.setState({ numerodecontacto: event.target.value });
    }
    handleNameChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handleNameChange = (event) => {
        this.setState({ descripcióndelanimal: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        this.props.addNewAnimal({
            name: this.state.name,
            barrio: this.state.barrio,
            fechadenacimiento: this.state.fechadenacimiento
        });
        this.setState({
            name: '',
            barrio: " ",
            fechadenacimiento:" ",
            colordepelo: " ",
            raza: " ",
            sexo: " ",
            numerodecontacto: " ",
            email: " ",
            descripcióndelanimal: " ",

        });
    }

    render() {
        return (
            <div className="new-animal-form">
                <form onSubmit={this.handleSubmit}>
                    <h3>New Product Form</h3>
                    <label>
                        Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>

                    <br />

                    <label>
                        Barrio:
          <input type="text" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <label>
                        Fecha de Nacimiento:
          <input type="number" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <label>
                        Color de Pelo:
          <input type="text" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <label>
                        raza:
          <input type="text" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <label>
                        sexo:
          <input type="text" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <label>
                        Numero De contacto:
          <input type="number" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <label>
                        email:
          <input type="text" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <label>
                        Descripción del Animal:
          <input type="text" value={this.state.price} onChange={this.handleBarrioChange} />
                    </label>

                    <br />
                    <button type="submit">Add Animal</button>
                </form>
            </div>
        );
    }
}

export default NewAnimalForm;