import Badge from "react-bootstrap/Badge";

const Tags = ({ color, text }) => {
  return (
    <Badge className="tag-css" pill bg={color}>
      <span className="text-light">{text}</span>
    </Badge>
  );
};

export default Tags;
