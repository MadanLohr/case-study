import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component{

    handleClick = () =>{
        this.props.deletPost(this.props.post.id)
        this.props.history.push('/')
    }

    render(){
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delet post</button>
                </div>
            </div>
        ) :(
            <p>Loading post...</p>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
        
    }    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deletPost: (id) =>{ dispatch({type:'DELET_POST', id: id})}
    }
}

const mapStateToProps = (state, wonProps) =>{
    let id = wonProps.match.params.post_id
    return {
    post : state.posts.find(post => post.id === parseInt(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)