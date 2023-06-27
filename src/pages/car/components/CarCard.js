import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { format } from "date-fns";
import '../styles/carCard.css'

const CarCard = ({ car }) => {
  const getCategoryText = (category) => {
    const categoryMap = {
      small: "2-4 Orang",
      medium: "4 - 6 Orang",
      large: "6 - 8 Orang",
    };

    return categoryMap[category] || "";
  };

  const formatDate = (date) => {
    return format(new Date(date), "d MMMM yyyy, HH:mm");
  };

  return (
    <Col md={4} className="mb-3">
      <Card className="custom-card shadow">
        <Card.Img variant="top" src={car.image} style={{ height: "180px" }} />
        <Card.Body>
          <Card.Title>{car.name}</Card.Title>
          <Card.Subtitle className="mb-2">Rp {car.price} / hari</Card.Subtitle>
          <Card.Text>
            <BsPeople className="mb-1 me-1" /> {getCategoryText(car.category)}
          </Card.Text>
          <Card.Text>
            <IoMdTime /> Updated at {formatDate(car.updatedAt)}
          </Card.Text>
          <div className="row justify-content-between">
            <div className="col-md-6">
              <Button className="w-100" variant="outline-danger">
                Delete
              </Button>
            </div>
            <div className="col-md-6">
              <Button className="w-100" variant="outline-success">
                Edit
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CarCard;
