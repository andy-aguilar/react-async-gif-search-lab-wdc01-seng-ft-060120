import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{

    state = {
        imgObjs: [],
        searchTerm: ""
    }
    
    componentDidMount(){
        this.setState({
            searchTerm: "giphy"
        })
    }
    
    componentDidUpdate(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=aN3ZYCzkTXYPRQA2FLOxw0OjBSZwdFJh`)
        .then(resp => resp.json())
        .then(imgs => {
            let imgObjs = imgs.data.slice(0,3).map(image => ({
                    url: image.images.original.url,
                    title: image.title
            }))
            this.setState({
                imgObjs
            })
        })
    }

    runSearch = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    render(){
        return(
            <div>
                <GifSearch runSearch={this.runSearch}/><br/><br/>
                <GifList images={this.state.imgObjs}/>
            </div>
        )
    }
}