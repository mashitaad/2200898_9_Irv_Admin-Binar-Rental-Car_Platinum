import React from "react";
import { Card, Col, Button, Container, Row } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { format } from "date-fns";
import DialogBox from "./DialogBox";
import "../styles/carCard.css";
import ImageWithLoading from "../../../components/ui/ImageWithLoading";
import nullImage from "../../../assets/images/imagenotfound.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
import config from "../../../config";
import axios from "axios";

const CarCard = ({ car }) => {
  const getCategoryText = (category) => {
    const categoryMap = {
      small: "2-4 Orang",
      medium: "4 - 6 Orang",
      large: "6 - 8 Orang",
    };

    return categoryMap[category] || "";
  };

  const navigate = useNavigate();
  const formatDate = (date) => {
    return format(new Date(date), "d MMMM yyyy, HH:mm");
  };
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
  const url = config.apiBaseUrl;
  const handleDelete = async () => {
    // https://bootcamp-rent-cars.herokuapp.com/admin/car/2650

    try {
      const response = await axios.delete(url + `/admin/car/${car.id}`, {
        headers: {
          access_token: token,
        },
      });
      navigate("/admin/car/list");
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Col md="4">
      <Card>
        {car.image === null ? (
          <div>
            <ImageWithLoading src={nullImage} alt={"null"} />
          </div>
        ) : (
          <div>
            <ImageWithLoading src={car.image} alt={car.name} />
          </div>
        )}
        <Card.Body>
          <Card.Title>{car.name}</Card.Title>
          <Card.Subtitle className="mb-2">Rp {car.price} / hari</Card.Subtitle>
          <Card.Text>
            <BsPeople className="mb-1 me-1" /> {getCategoryText(car.category)}
          </Card.Text>
          <Card.Text>
            <IoMdTime /> Updated at {formatDate(car.updatedAt)}
          </Card.Text>
          <div className="row justify-content-between button-card">
            <div className="col-md-6">
              <DialogBox onDelete={handleDelete} />
            </div>
            <div className="col-md-6">
              <Link to={`/admin/update/car/${car.id}`}>
                <Button className="w-100" variant="outline-success">
                  Edit
                </Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CarCard;
