import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (this.props.list) {
            return (
                <div
                className={"item-row" + (this.props.edit ? " editing" : "")}
                draggable={this.props.edit}
                onDragOver={(e)=>e.preventDefault()}
                onDrop={(e)=>this.props.dropHandler(this.props.index)}
                onDragStart={(e)=>this.props.dragStartHandler(this.props.index)}>
                    <img className="col-4 item-list-img" draggable={false} src={this.props.image} alt="card"/>
                    <div className="col-8 p-3">
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
        else {
            return (
                <div
                className={"card item-card" + (this.props.edit ? " editing" : "")}
                draggable={this.props.edit}
                onDragOver={(e)=>e.preventDefault()}
                onDrop={(e)=>this.props.dropHandler(this.props.index)}
                onDragStart={(e)=>this.props.dragStartHandler(this.props.index)}>
                    <img className="card-img-top item-card-img" draggable={false} src={this.props.image} alt="card"/>
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
}

export default Item;
