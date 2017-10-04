import { combineReducers } from 'redux';
import { GET_FRIENDS, ADD_FRIEND } from '../actions';
import axios from 'axios';

const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;
        case ADD_FRIEND:
            console.log(action.payload)
            axios.post('http://localhost:5000/new-friend', action.payload)
            return [ ...friends, action.payload]
        default:
            return friends;
    }
}

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;