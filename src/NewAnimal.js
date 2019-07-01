import React from 'react';
import AppContext from './AppContext';

class NewAnimal extends React.Component {
    static contextType = AppContext;
    state = {
        name: '',
        type: '',
        sexo: '',
        raza: '',
        edad: '',
        barrio: '',
        colordepelo: '',
        colordeojos: '',
        description: ''
    }

    setName = (e) => {
        this.setState({ name: e.target.value });
    }

    setType = (e) => {
        this.setState({ type: e.target.value });
    }

    setRaza = (e) => {
        this.setState({ raza: e.target.value });
    }

    setSexo = (e) => {
        this.setState({ sexo: e.target.value });
    }

    setEdad = (e) => {
        this.setState({ edad: e.target.value });
    }

    setBarrio = (e) => {
        this.setState({ barrio: e.target.value });
    }

    setPelo = (e) => {
        this.setState({ colordepelo: e.target.value });
    }

    setOjos = (e) => {
        this.setState({ colordeojos: e.target.value });
    }

    setDescription = (e) => {
        this.setState({ description: e.target.value });
    }

    submit = () => {
        this.context.addNewAnimal(this.state);
    }

    renderName = () => {
        return (
            <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input value={this.state.name} onChange={this.setName} className="form-control" id="nombre" type="text" placeholder="Nombre:" />
            </div>
        )
    }

    renderBarrio = () => {
        return (
            <div className="form-group">
                <label htmlFor="option">Barrio:</label>
                <select 
                    value={this.state.barrio} onChange={this.setBarrio}
                    className="form-control barrio" name="" id="option">
                    <option value=""></option>
                    <option value="Aguada">Aguada</option>
                    <option value="Prado">Prado</option>
                    <option value="Pocitos">Pocitos</option>
                    <option value="Centro">Centro</option>
                    <option value="Carrasco">Carrasco</option>
                    <option value="Cordón">Cordón</option>
                </select>
            </div>
        )
    }

    renderAge = () => {
        return (
            <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <input 
                    value={this.state.edad} onChange={this.setEdad} 
                    className="form-control" type="number" id="edad" placeholder="" />
            </div>
        )
    }

    renderType = () => {
        return (
            <div className="form-group">
                <label htmlFor="option">Tipo</label>
                <select
                    value={this.state.type} onChange={this.setType}
                    className="form-control" name="" id="option">
                    <option value=""></option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Canario">Canario</option>
                </select>
            </div>
        )
    }

    renderHairColor = () => {
        return (
            <div className="form-group">
                <label htmlFor="option">Color de Pelo:</label>
                <select 
                    value={this.state.colordepelo} onChange={this.setPelo}
                    className="form-control barrio" name="" id="option">
                    <option value=""></option>
                    <option value="Negro">Negro</option>
                    <option value="Rubio">Rubio</option>
                    <option value="Blanco">Blanco</option>
                    <option value="Rayado">Rayado</option>
                </select>
            </div>
        )
    }

    renderRace = () => {
        return (
            <div className="form-group">
                <label htmlFor="option">Elige una Raza:</label>
                <select 
                    value={this.state.raza} onChange={this.setRaza}
                    className="form-control" name="" id="option">
                    <option value=""></option>
                    <option value="Boxer">Boxer</option>
                    <option value="Caniche">Caniche</option>
                    <option value="Labrador">Labrador</option>
                    <option value="Bulldog">Bulldog</option>
                    <option value="Poodle">Poodle</option>
                </select>
            </div>
        )
    }

    renderGender = () => {
        return (
            <div className="form-group">
                <label htmlFor="option">Sexo:</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" id="inlineCheckbox1" value={this.state.sexo} onChange={this.setSexo} />
                </div>
            </div>
        )
    }

    renderDescription = () => {
        return (
            <div className="form-group">
                <label htmlFor="mensaje">Descripción Del Animal:</label>
                <textarea
                    value={this.state.description} onChange={this.setDescription} 
                    className="form-control" id="mensaje" placeholder="Descripción:"></textarea>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <br />
                <div action="#" className="registro-animal">
                    {this.renderName()}
                    {this.renderBarrio()}
                    {this.renderAge()}
                    {this.renderType()}
                    {this.renderRace()}
                    {this.renderHairColor()}
                    {this.renderGender()}
                    {this.renderDescription()}

                    <button onClick={this.submit} className="btn btn-info">Enviar</button>

                    {/* <div className="form-group">
                        <label htmlFor="numero">Numero de contacto:</label>
                        <input className="form-group" type="tel" name="" id="numero" placeholder="" />
                    </div> */}
                    {/* <form action="">
                        <div className="form-group">
                            <label htmlFor="nombre">Email:</label>
                            <input className="form-control" id="nombre" type="email" placeholder="Email:" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Archivo</span>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01" />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                    </form> */}


                </div>
            </div>


        )
    }
}
export default NewAnimal;