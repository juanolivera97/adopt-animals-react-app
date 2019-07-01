import React from 'react';
import Card from './Card';
import SearchAnimal from './SearchAnimal';
import AppContext from './AppContext';

class AnimalList extends React.Component {
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

                    <SearchAnimal />
                </section>


                <div className="row">
                    {this.context.animals.map(item => {
                        return <Card 
                            selectAnimal={this.context.selectAnimal}
                            key={item.id} 
                            animal={item} />;
                    })}
                </div>
            </div>

        )
    }
}
export default AnimalList;