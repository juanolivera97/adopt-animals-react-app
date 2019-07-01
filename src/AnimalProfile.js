import React from 'react';
import AppContext from './AppContext';

class AnimalProfile extends React.Component {
    static contextType = AppContext;

    render() {
        console.log(this.context.selectedAnimal);
        const { selectedAnimal } = this.context;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 content">
                        <img className="foto" src="assets/descarga.jpg" alt="" />
                    </div>
                    <aside className="col-md-6 animal-description">
                        <h2>Descripción</h2>
                        <br />
                        <p>{selectedAnimal.description}</p>
                    </aside>
                </div>
                <h1>{selectedAnimal.name}</h1>

                <div className="row">

                    <div className="col-sm-6 col-md-6 data-dog">
                        <ul>
                        <li>Sexo: {selectedAnimal.sexo}</li>
                        <li>Raza: {selectedAnimal.Raza}</li>
                        <li>Edad: {selectedAnimal.Edad} Años</li>
                        <li>Barrio: {selectedAnimal.Barrio}</li>
                        <li>Color de pelo: {selectedAnimal.Colordepelo}</li>
                        <li>Color de ojos: {selectedAnimal.Colordeojos}</li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 data-dueño">
                        <p>Si quieres adoptarlo,
                        <br />
                        llámanos al
                        <a href="tel: 098565655" className="btnTel">098565655</a>
                        <br />
                        o llama al dueño <a href={`tel:${selectedAnimal.number}`}>{selectedAnimal.number}</a>
                        <br />
                        También tenes nuestro mail
                        <br />
                        y el del dueño "{selectedAnimal.ownerName}".
                        <br />
                        <a href="adopting@Terranimal.com">adopting@Terranimal.com</a>
                        <br />
                        <a href={selectedAnimal.email}>{selectedAnimal.email}</a>
                        </p>
                    </div>

                    {/* <div className="col-md-3">
                        <div className="gato card" style={{width: '18rem', marginLeft: '125px'}}>
                            <img src="assets/gato.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">"Fito"</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's
                                content.</p>
                                <a href="#" className="btn btn-primary">Ir a Perfil</a>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        )
    }
}
export default AnimalProfile;