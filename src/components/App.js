import React from "react";
import axios from 'axios';
import Searchbar from "./Searchbar"
import unsplash from '../api/unsplash'
import ImageList from "./image";



class App extends React.Component {
    state = {images: []};
    onSearchSubmit=(term)=>{
        unsplash.get('/search/photos',{
            params: {
                query : term
            },
            headers: {
                Authorization: 'Client-ID i_o1D9w-iXycmTaXPsmFkPerFEneS4KIDMzdbUM9-O0'
            }
        })
        .then(pics =>{
            this.setState({images: pics.data.results});
            //console.log(pics.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <Searchbar onSubmit = {this.onSearchSubmit}/>
                <ImageList images = {this.state.images}/>
            </div>
        )
    }

}
export default App;
