import React from 'react'

const Rainbow = (WrappedContent) =>{
    const colors = ['red', 'blue', 'green', 'pink']
    const randomColor = colors[Math.floor(Math.random()*4)]
    const className = randomColor + '-text';

    return(props) => {
        return(
            <div className={className}>
                <WrappedContent {...props}/>
            </div>
        )
    }
}

export default Rainbow;