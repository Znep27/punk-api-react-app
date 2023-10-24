
import React from 'react';
import Card from 'react-bootstrap/Card';


function BeerCard(props) {
    return (
        <li style={{listStyle: "none"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style ={{height: "200px"}} src={props.image_url} alt={props.name} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title><br />
                    <Card.Title>First Brewed: {props.first_brewed}</Card.Title>
                    <Card.Text>{props.tagline}</Card.Text>
                    <Card.Title>abv: {props.abv}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </li>
    )
}


export default BeerCard;