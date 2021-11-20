import React, { Component } from 'react';
import axios from 'axios';
import PersonDetails from './PersonDetails';

export default class PersonList extends Component {
	//Define state default values
	constructor(props) {
		super(props);

		this.state = {
			persons: []
		};
	}

	//Get Users
	getUserData = () => {
		axios.get('https://randomuser.me/api/?results=10').then((res) => {
			console.log(res.data.results);
			this.setState({ persons: res.data.results });
		});
	};

	//Component Lifecycle Callback
	componentDidMount = () => {
		this.getUserData();
	};

	render() {
		return <div>{this.state.persons.map((u) => <PersonDetails person={u} />)}</div>;
	}
}
