import React from 'react';



class Card extends React.Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-4">
              <div className="card animal-card">
                <img src="assets/descarga.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"> {this.props.animal.name} </h5>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum, dolor sit amet consectetur.</p>
                  <a href="animal.html" className="btn btn-primary">Ir a Perfil</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Card;