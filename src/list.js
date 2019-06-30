import React from 'react';
import Card from './Card';
import AppContext from './AppContext';


class List extends React.Component {
    static contextType = AppContext;
    render() {
        return (
            <div className="container">
                <section className="main row">
                    <article className="col-md-9">
                        <h2>Articulo</h2>
                        <img src="assets/foto.jpg" alt="" />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nobis eaque, magnam repudiandae nam veniam nihil incidunt ad molestiae soluta accusamus.
                            vitae consectetur nulla facere excepturi laudantium, quod id fugiat cupiditate.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nobis eaque, magnam repudiandae nam veniam nihil incidunt ad molestiae soluta accusamus.
                            vitae consectetur nulla facere excepturi laudantium, quod id fugiat cupiditate.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nobis eaque, magnam repudiandae nam veniam nihil incidunt ad molestiae soluta accusamus.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Nobis eaque, magnam repudiandae nam veniam nihil incidunt ad molestiae soluta accusamus.
                        </p>
                    </article>

                    <aside className="col-md-3">
                        <h2>Buscar Animal:</h2>
                        <div className="form-group">
                            <label for="option">Tipo:</label>
                            <select className="form-control" name="" id="option">
                                <option value=""></option>
                                <option value="">Perro</option>
                                <option value="">Gato</option>
                                <option value="">Canario</option>
                                <option value="">Conejo</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="option">Sexo:</label>
                            <select className="form-control" name="" id="option">
                                <option value=""></option>
                                <option value="">Macho</option>
                                <option value="">Hembra</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="option">Raza:</label>
                            <select className="form-control" name="" id="option">
                                <option value=""></option>
                                <option value="">Boxer</option>
                                <option value="">Caniche</option>
                                <option value="">Labrador</option>
                                <option value="">Bulldog</option>
                                <option value="">Poodle</option>
                            </select>

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
                        </div>

                        <input className="btn btn-primary" type="button" value="Buscar" />
                    </aside>
                </section>


                <div className="row">
                    {this.context.animals.map(item => <Card animal={item} />)}

                </div>
            </div>

        )
    }
}
export default List;