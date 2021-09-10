import React, { Component } from 'react'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    handleDish(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    renderDish(dish) {
        if(dish !=null) {
            return (
                <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                   <div className="card mt-5" style={{width: '100%'}}>
                        <img src={dish.image} className="card-img-top" alt={dish.name} />
                        <div className="card-body">
                            <h5 className="card-title">{dish.name}</h5>
                            <p className="card-text">{dish.description}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                
                <div className="col-md-6 col-lg-6 col-12 col-sm-12">
                   <div className="card mt-5" style={{width: '100%'}} onClick={() => this.handleDish(dish)}>
                        <img src={dish.image} className="card-img-top" alt={dish.name} />
                        <div className="card-body">
                            <h5 className="card-title">{dish.name}</h5>
                            <button className="btn btn-primary">{dish.name}</button>
                        </div>
                    </div>
                </div>
                
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}
export default Menu;