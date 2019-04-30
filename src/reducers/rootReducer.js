const initState = {
    posts : [
        {id:1, title: 'yo papi', body:'bhat is a bathroom singer from kashmir'},
        {id:2, title: 'Mast re', body:'bhat is a bathroom singer from kashmir'},
        {id:3, title: 'Ye hu reeee!', body:'bhat is a bathroom singer from kashmir'}
    ]
}

const rootReducer = (state = initState, action) =>{
    if(action.type === 'DELET_POST'){
        let newPosts = state.posts.filter(post =>{
            return action.id !== post.id
        })
        return{
            ...state, 
            posts: newPosts
        }
    } 
    return state
}

export default rootReducer