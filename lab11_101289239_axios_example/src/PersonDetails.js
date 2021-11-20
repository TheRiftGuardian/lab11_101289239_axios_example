import React from 'react';
import { Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PersonDetails(props) {
	return (
		<div style={{ backgroundColor: 'cyan' }}>
			<div>
				<hr />
				<h3 style={{}}>
					{props.person.name.title} {props.person.name.first} {props.person.name.last} -{' '}
					{props.person.login.uuid}
				</h3>
				<hr />
			</div>
			<div style={{ float: 'left' }}>
				<Image roundedCircle src={props.person.picture.large} />
				<Button variant="primary" style={{ justifyContent: 'flex-end', display: 'flex', marginLeft: '25px' }}>
					Details
				</Button>
			</div>
			<div style={{ display: 'grid' }}>
				<h3>Username: {props.person.login.username}</h3>
				<h4>Gender: {props.person.gender}</h4>
				<h4>Time Zone Description: {props.person.location.timezone.description}</h4>
				<h4>
					Address: {props.person.location.street.number} {props.person.location.street.name},{' '}
					{props.person.location.city}, {props.person.location.state}, {props.person.location.country} -{' '}
					{props.person.location.postcode}
				</h4>
				<h4>Email {props.person.email}</h4>
				<h4>
					Birth Date and Age: {props.person.dob.date} ({props.person.dob.age})
				</h4>
				<h4>Register Date: {props.person.registered.date}</h4>
				<h4>Phone#: {props.person.cell}</h4>
			</div>
		</div>
	);
}
