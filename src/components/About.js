import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni quae incidunt, consequatur nesciunt fugiat necessitatibus nisi maxime tempore omnis ipsum sapiente rerum beatae ullam, vero quaerat modi, et consectetur!</p>
        </div>
    )
}

export default Rainbow(About);