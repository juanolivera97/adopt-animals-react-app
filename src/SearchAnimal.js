import React from 'react';

export default class SearchAnimal extends React.Component {
    render() {
        return (
            <aside className="col-md-3">
                <h2>Buscar Animal:</h2>
                <div className="form-group">
                    <label htmlFor="option">Tipo:</label>
                    <select className="form-control" name="" id="option">
                        <option value=""></option>
                        <option value="">Perro</option>
                        <option value="">Gato</option>
                        <option value="">Canario</option>
                        <option value="">Conejo</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="option">Sexo:</label>
                    <select className="form-control" name="" id="option">
                        <option value=""></option>
                        <option value="">Macho</option>
                        <option value="">Hembra</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="option">Raza:</label>
                    <select className="form-control" name="" id="option">
                        <option value=""></option>
                        <option value="">Boxer</option>
                        <option value="">Caniche</option>
                        <option value="">Labrador</option>
                        <option value="">Bulldog</option>
                        <option value="">Poodle</option>
                    </select>

                    <div className="form-group">
                        <label htmlFor="option">Barrio:</label>
                        <select className="form-control barrio" name="" id="option">
                            <option value=""></option>
                            <option value="">Aguada</option>
                            <option value="">Prado</option>
                            <option value="">Pocitos</option>
                            <option value="">Centro</option>
                            <option value="">Carrasco</option>
                            <option value="">Cordón</option>
                        </select>
                    </div>
                </div>

                <input className="btn btn-primary" type="button" value="Buscar" />
            </aside>
        )
    }
}