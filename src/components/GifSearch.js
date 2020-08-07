import React from 'react'

export default class GifSearch extends React.Component{
    state = {
        searchTerm: "Search Gifs"
    }

    updateSearchTerm = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.runSearch(e.target.search.value)

    }

    render(){
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    type="text"
                    name="search"
                    value={ this.state.searchTerm }
                    onChange={(e) => this.updateSearchTerm(e.target.value)}
                />
                <input type= "submit"/>
            </form>
        )
    }
}

// 

