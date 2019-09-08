import React, { Component } from 'react';
import './App.css';

import Item from './components/Item';

import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';

let title = "Sample Item";
let desc = "This is the sample description box containing information about image, which is pictured above.";
let count = 11;
let items = [
    {image: img1, title:title+" 1", text:desc},
    {image: img1, title:title+" 2", text:desc},
    {image: img1, title:title+" 3", text:desc},
    {image: img1, title:title+" 4", text:desc},
    {image: img1, title:title+" 5", text:desc},
    {image: img1, title:title+" 6", text:desc},
    {image: img1, title:title+" 7", text:desc},
    {image: img1, title:title+" 8", text:desc},
    {image: img1, title:title+" 9", text:desc},
    {image: img1, title:title+" 10", text:desc},
    {image: img1, title:title+" 11", text:desc}
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode : false,
            listMode : false,
            items : items,
            dragStartIndex : null,
        }

        this.createItems = this.createItems.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.toggleViewMode = this.toggleViewMode.bind(this);
        this.dragStartHandler = this.dragStartHandler.bind(this);
        this.dragDropHandler = this.dragDropHandler.bind(this);
    }

    // Renders the list of items
    createItems() {
        let cardItems = [];
        console.log("start");
        console.log("length: " + this.state.items.length);
        for (let i=0; i<this.state.items.length; i++) {
            cardItems.push(
                <Item
                key={i}
                index={i}
                image={this.state.items[i].image}
                title={this.state.items[i].title}
                text={this.state.items[i].text}
                edit={this.state.editMode}
                list={this.state.listMode}
                dropHandler={this.dragDropHandler}
                dragStartHandler={this.dragStartHandler}/>
            );
        }

        return (
            <div className="row justify-content-left mx-auto p-4">
                {cardItems}
            </div>
        )
    }

    toggleEditMode() {
        this.setState({editMode : !this.state.editMode});
    }

    toggleViewMode() {
        this.setState({listMode : !this.state.listMode});
    }

    dragStartHandler(index) {
        console.log(index);
        this.setState({dragStartIndex : index});
    }

    dragDropHandler(index) {
        console.log(index);
        let key = index;
        let items = this.state.items;
        let tempItem = items[key];

        items[key] = this.state.items[this.state.dragStartIndex];
        items[this.state.dragStartIndex] = tempItem;

        this.setState({items: items, dragStartIndex: null});
    }

    render () {
        return (
            <div>
                <div className="txt-cabin txt-hg text-center">
                    Items
                </div>
                <div className="main-box mx-auto rounded-lg">
                    <div className="toolbar rounded-top text-right">
                        <button className="txt-cabin btn btn-clear btn-lg" onClick={this.toggleViewMode}>
                            View
                        </button>
                        <button className="txt-cabin btn btn-clear btn-lg" onClick={this.toggleEditMode}>
                            { this.state.editMode ? "Save" : "Edit" }
                        </button>
                    </div>
                    {this.createItems()}
                </div>
                <div className="footer txt-cabin">
                    Information and Contact
                </div>
            </div>
        );
    }
}

export default App;
