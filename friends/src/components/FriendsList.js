import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../actions';
import FriendItem from './FriendItem.js';
import axios from 'axios';

class FriendsList extends Component {
    constructor() {
        super();
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
    componentDidMount() {
        this.props.getFriends();
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleAgeChange(event) {
        this.setState({
            age: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleNameSubmit(event) {
        event.preventDefault();

    }

    submit() {
        const name = this.state.name;
        const age = this.state.age;
        const email = this.state.email
        this.props.addFriend({
            name: name,
            age: age,
            email: email
        });
        this.setState({
            name: '',
            age: '',
            email: ''
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <div key={i}>
                                <FriendItem i={i} friend={friend}/>
                            </div>
                        );
                    })}
                </ul>
                <form onSubmit={this.handleNameSubmit}>
                    <input type='text' placeholder='add a name' onChange={this.handleNameChange} value={this.state.name}/>
                </form>
                <form onSubmit={this.handleNameSubmit}>
                    <input type='text' placeholder='add their age' onChange={this.handleAgeChange} value={this.state.age}/>
                </form>
                <form onSubmit={this.handleNameSubmit}>
                    <input type='text' placeholder='add their email' onChange={this.handleEmailChange} value={this.state.email}/>
                </form>
                <form>
                    <div type="button" onClick={this.submit}>
                        Add Friend! 
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends, addFriend })(FriendsList);