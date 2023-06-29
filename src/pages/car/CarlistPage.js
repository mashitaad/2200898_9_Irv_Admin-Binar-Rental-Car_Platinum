import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonFilter from "./components/ButtonFilter";
import CarCard from "./components/CarCard";
import { Row, Col } from "react-bootstrap";
import {
  admingetAllCars,
  carSelectors,
  adminDeleteCar,
} from "../../features/carSlice";
import SideBar from "../../components/layout/SideBar";
import LoadingSpiner from "../../components/ui/LoadingSpiner";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const CarlistPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(carSelectors.loading);
  const carList = useSelector(carSelectors.selectAllCars);

  useEffect(() => {
    dispatch(admingetAllCars({ pageSize: 100 }));
  }, []);

  const filterCategory = (payload) => {
    setSelectedCategory(payload);
    dispatch(admingetAllCars({ category: payload }));
  };

  const handleDelete = (carId) => {
    dispatch(adminDeleteCar(carId))
      .then(() => {
        // Refresh data setelah berhasil menghapus
        dispatch(
          admingetAllCars({ pageSize: 100, category: selectedCategory })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SideBar style={{ marginRight: "77px" }}>
        <Row className="justify-content-between">
          <Col>
            <h1
              className="mb-3"
              style={{
                fontFamily: "Arial",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "30px",
                color: "#000000",
              }}
            >
              List Car
            </h1>
          </Col>
          <Col className="text-end">
            <Link to={"/admin/add/car"} className="btn btn-sm btn-primary">
              <BsPlusLg className="me-2 mb-1 text-light" />
              Add New Car
            </Link>
          </Col>
        </Row>
        <ButtonFilter
          handleClick={filterCategory}
          style={{ marginBottom: "24px" }}
        />

        <div className="flex-wrap mt-3">
          <div className="container-car">
            <Row>
              {loading ? (
                <LoadingSpiner />
              ) : (
                carList?.cars?.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onDelete={() => handleDelete(car.id)}
                  />
                ))
              )}
            </Row>
          </div>
        </div>
      </SideBar>
    </>
  );
};

export default CarlistPage;
