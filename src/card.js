import React from 'react';

class Card extends React.Component {
    render() {
        const { animal } = this.props;
        return (
            <div className="row">
            <div className="col-md-4">
              <div className="card animal-card">
                <img src="assets/descarga.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"> {animal.name} </h5>
                  <p className="card-text">{animal.description}</p>
                  <span onClick={() => this.props.selectAnimal(animal.id)} className="btn btn-primary">Ir a Perfil</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Card;