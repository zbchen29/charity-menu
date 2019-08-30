import React, { Component } from 'react';
import './App.css';

import Item from './components/Item';

import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';

class App extends Component {
    render () {
        return (
            <div>
                <div className="txt-cabin txt-hg text-center">
                    Items
                </div>
                <div className="main-box mx-auto rounded-lg">
                    <div className="toolbar rounded-top text-right">
                        <button className="txt-cabin btn btn-clear btn-lg">
                            View
                        </button>
                        <button className="txt-cabin btn btn-clear btn-lg">
                            Edit
                        </button>
                    </div>
                    <div className="row justify-content-left mx-auto p-4">
                        <Item image={img1} title="Image 1" text="This is the sample description box containing information about image 1, which is pictured above."/>
                        <Item image={img2} title="Image 2" text="This is the sample description box containing information about image 2, which is pictured above."/>
                        <Item image={img3} title="Image 3" text="This is the sample description box containing information about image 3, which is pictured above."/>
                        <Item image={img4} title="Image 4" text="This is the sample description box containing information about image 4, which is pictured above."/>
                        <Item image={img1} title="Image 1" text="This is the sample description box containing information about image 1, which is pictured above."/>
                        <Item image={img2} title="Image 2" text="This is the sample description box containing information about image 2, which is pictured above."/>
                        <Item image={img3} title="Image 3" text="This is the sample description box containing information about image 3, which is pictured above."/>
                        <Item image={img4} title="Image 4" text="This is the sample description box containing information about image 4, which is pictured above."/>
                        <Item image={img1} title="Image 1" text="This is the sample description box containing information about image 1, which is pictured above."/>
                        <Item image={img2} title="Image 2" text="This is the sample description box containing information about image 2, which is pictured above."/>
                        <Item image={img3} title="Image 3" text="This is the sample description box containing information about image 3, which is pictured above."/>
                    </div>
                </div>
                <div className="footer txt-cabin">
                    Information and Contact
                </div>
            </div>
        );
    }
}

export default App;
