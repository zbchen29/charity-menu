import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        return (
            <div className="card item-card">
                <img className="card-img-top card-img" src={this.props.image}/>
                <div className="card-body p-3">
                    <div className="card-title txt-cabin txt-md">
                        {this.props.title}
                    </div>
                    <div className="card-text txt-cabin txt-sm">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;
