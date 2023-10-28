import { Card } from "react-bootstrap";
import Tags from "./Tags";
import "../App.css";

const Cards = ({ image, title, text, color, tagText }) => {
  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Tags color={color} text={tagText} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Cards;
