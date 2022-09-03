// write your CatList component here
import React, { Component } from 'react';

export default class Catlist extends Component {
    
    render(){
        const renderCats = this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt="cat pic"/>)
        return (
            <div>
                {renderCats}
            </div>
        )
    }
}