import React from 'react';
import AppContext from './AppContext';


class NewAnimal extends React.Component {
    static contextType = AppContext;
    render() {
        return (
            <div className="container">
                <br />
                <form action="" className="registro-animal">
                    <div className="form-group">
                        <label for="nombre">Nombre:</label>
                        <input className="form-control" id="nombre" type="text" placeholder="Nombre:" />
                    </div>

                    <div className="form-group">
                        <label for="option">Barrio:</label>
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
                    <div class="form-group">
                        <label for="edad">Fecha de Nacimiento</label>
                        <input class="form-control" type="date" id="edad" placeholder="" />
                    </div>

                    <div class="form-group">
                        <label for="option">Tipo</label>
                        <select class="form-control" name="" id="option">
                            <option value=""></option>
                            <option value="">Perro</option>
                            <option value="">Gato</option>
                            <option value="">Canario</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="option">Color de Pelo:</label>
                        <select class="form-control barrio" name="" id="option">
                            <option value=""></option>
                            <option value="">Negro</option>
                            <option value="">Rubio</option>
                            <option value="">Blanco</option>
                            <option value="">Rayado</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="option">Elige una Raza:</label>
                        <select class="form-control" name="" id="option">
                            <option value=""></option>
                            <option value="">Boxer</option>
                            <option value="">Caniche</option>
                            <option value="">Labrador</option>
                            <option value="">Bulldog</option>
                            <option value="">Poodle</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="option">Sexo:</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio-buttons" id="inlineCheckbox1" value="" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="numero">Numero de contacto:</label>
                        <input class="form-group" type="tel" name="" id="numero" placeholder="" />
                    </div>
                    <form action="">
                        <div class="form-group">
                            <label for="nombre">Email:</label>
                            <input class="form-control" id="nombre" type="email" placeholder="Email:" />
                        </div>
                        <div class="form-group">
                            <label for="mensaje">Descripción Del Animal:</label>
                            <textarea class="form-control" id="mensaje" placeholder="Descripción:"></textarea>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Archivo</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01" />
                                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>

                        <button class="btn btn-info">Enviar</button>
                    </form>


                </form>
            </div>


        )
    }
}
export default NewAnimal;