import React from 'react'


const GifList = (props) => {
    const renderGifs = () => {
        return props.images.map(image => <div><img src={image.url} alt={image.title}/><br/><br/></div>)
    }

    return(
    <div>{renderGifs()}</div>
    )
}

export default GifList