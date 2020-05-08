import React from "react"

class SearchBar extends React.Component{

    state = { 
        term: ''
    }

    onFormSubmit= (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
        //console.log(this.state.term)
    }

        render(){
            return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Wyszukiwarka obrazow</label>
                    <input type="text" 
                    onChange={event=>this.setState({term: event.target.value})} 
                    value ={this.term}
                    />
                    </div>
                </form>
            </div>
                )
        }
}

export default SearchBar;