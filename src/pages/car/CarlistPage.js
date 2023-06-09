import React, { useState, useEffect } from "react";
import ButtonFilter from "./components/ButtonFilter";
import CarCard from "./components/CarCard";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Row } from "react-bootstrap";
import config from '../../config/index'
import Overlayers from "../../components/layout/SideBar";

const CarlistPage = () => {
  const [carCategory, setCarCategory] = useState(null);
  const [carList, setCarList] = useState([]);

  const baseUrl = config.apiBaseUrl

  useEffect(() => {
    const fetchCarList = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4NjExODEwNH0.BZISCbJMujXKAu7ndQro8cgSbMQbK3LwmEtL9yeHMQQ";
      const decodedToken = jwt_decode(token);
      const currentDate = new Date().getTime() / 1000;

      if (decodedToken.exp < currentDate) {
        console.log("Token expired");
        return;
      }

      let url = baseUrl + "/customer/v2/car"
      if (carCategory) {
        url += `?category=${carCategory}`;
      }

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCarList(response.data.cars);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCarList();
  }, [carCategory]);

  const filterCategory = (payload) => {
    setCarCategory(payload);
    console.log(payload);
  };

  return (
    <>
      <Overlayers>

        <ButtonFilter handleClick={filterCategory} />
        <Row className="flex-wrap mt-3">
          {carList.length > 0 ? (
            carList.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <p>Tidak ada mobil yang tersedia.</p>
          )}
        </Row>
      </Overlayers>
    </>
  );
};

export default CarlistPage;
