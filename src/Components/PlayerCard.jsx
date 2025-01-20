import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ name, team, nationality, jerseyNumber, age, img }) => {
  return (
    <div>
      <Card style={{ width: "" , height: '60%'}}>
        <div className="cardImage">
          <Card.Img className="img" variant="top" src={img}  />
        </div>
        <Card.Body>
          <Card.Title><span className="para">Player name:</span> {name}</Card.Title>
          <Card.Text><span className="para">Country:</span> {nationality}</Card.Text>
          <Card.Text><span className="para">Club:</span> {team}</Card.Text>
          <Card.Text><span className="para">Jersey Number:</span> {jerseyNumber}</Card.Text>
          <Card.Text><span className="para">Age:</span> {age} years</Card.Text>
          <Button className="btn" variant="secondary">More Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerCard;
