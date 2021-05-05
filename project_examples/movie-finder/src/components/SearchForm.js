import React, {Component} from 'react';

const API_KEY = '5c8cde80'

export class SearchForm extends Component {
    state = {
        inputMovie : ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }


    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(response => {
                const {Search = []} = response
                const searchResults = Search || []
                console.log(Search)
                this.props.onResults(Search)
            }) 
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit}>
            <div className = "field has-addons">
                <div className = "control">
                    <input 
                        className=" input" 
                        type="text" 
                        onChange={this._handleChange}
                        placeholder="Find a repository"/>
                </div>
                <div className = "control">
                    <button  className = "button is-info">
                        Search
                    </button>
                </div>
            </div>
            </form>
        )
    }
}