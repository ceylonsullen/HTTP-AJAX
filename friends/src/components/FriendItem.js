import React, { Component } from 'react';
import { connect } from 'react-redux';

class FriendItem extends Component {
    render() {
        return (
        <li>
            <p>{`Friend ${this.props.i+1}`}</p>
            <p>{`Name: ${this.props.friend.name}`}</p>
            <p>{`Age: ${this.props.friend.age}`}</p>
            <p>{`Email: ${this.props.friend.email}`}</p>
        </li>
        );
    }
}

export default connect(null)(FriendItem);