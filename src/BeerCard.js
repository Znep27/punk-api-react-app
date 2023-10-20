import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BeerCard(props) {
    return (
        <li style={{listStyle: "none"}}>
            {/* <img style={{height: "200px"}} src={props.image_url} alt={props.name}></img>
            {props.name} */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style ={{height: "200px"}} src={props.image_url} alt={props.name} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title><br />
                    <Card.Title>First Brewed: {props.first_brewed}</Card.Title>
                    <Card.Text>{props.tagline}</Card.Text>
                    <Card.Title>abv: {props.abv}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button><br /><br />
                </Card.Body>
            </Card>
        </li>
    )
}

// function BasicExample() {
//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     );
//   }

export default BeerCard;