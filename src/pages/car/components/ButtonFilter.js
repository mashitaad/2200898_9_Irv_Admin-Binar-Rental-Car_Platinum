import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ButtonFilter(props) {
  const [category, setCategory] = useState("");

  const handleAllClick = (e) => {
    e.preventDefault();
    setCategory("");
    props.handleClick("");
  };

  const handleSmallClick = (e) => {
    e.preventDefault();
    setCategory("small");
    props.handleClick("small");
  };

  const handleMediumClick = (e) => {
    e.preventDefault();
    setCategory("medium");
    props.handleClick("medium");
  };

  const handleLargeClick = (e) => {
    e.preventDefault();
    setCategory("large");
    props.handleClick("large");
  };

  return (
    <>
      <Button
        variant="primary"
        style={{
          height: "36px",
          background: category === "" ? "#CFD4ED" : "#FFFFFF",
          border: category === "" ? "1px solid #0D28A6" : "1px solid #AEB7E1",
          borderRadius: "2px",
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
          color: category === "" ? "#0D28A6" : "#AEB7E1",
        }}
        onClick={handleAllClick}
        onMouseEnter={(e) => {
          if (category !== "") {
            e.target.style.background = "#CFD4ED";
            e.target.style.border = "1px solid #0D28A6";
            e.target.style.color = "#0D28A6";
          }
        }}
        onMouseLeave={(e) => {
          if (category !== "") {
            e.target.style.background = "#FFFFFF";
            e.target.style.border = "1px solid #AEB7E1";
            e.target.style.color = "#AEB7E1";
          }
        }}
      >
        All
      </Button>{" "}
      <Button
        variant="primary"
        style={{
          height: "36px",
          background: category === "small" ? "#CFD4ED" : "#FFFFFF",
          border:
            category === "small" ? "1px solid #0D28A6" : "1px solid #AEB7E1",
          borderRadius: "2px",
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
          color: category === "small" ? "#0D28A6" : "#AEB7E1",
        }}
        onClick={handleSmallClick}
        onMouseEnter={(e) => {
          if (category !== "small") {
            e.target.style.background = "#CFD4ED";
            e.target.style.border = "1px solid #0D28A6";
            e.target.style.color = "#0D28A6";
          }
        }}
        onMouseLeave={(e) => {
          if (category !== "small") {
            e.target.style.background = "#FFFFFF";
            e.target.style.border = "1px solid #AEB7E1";
            e.target.style.color = "#AEB7E1";
          }
        }}
      >
        2 - 4 people
      </Button>{" "}
      <Button
        variant="primary"
        style={{
          height: "36px",
          background: category === "medium" ? "#CFD4ED" : "#FFFFFF",
          border:
            category === "medium" ? "1px solid #0D28A6" : "1px solid #AEB7E1",
          borderRadius: "2px",
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
          color: category === "medium" ? "#0D28A6" : "#AEB7E1",
        }}
        onClick={handleMediumClick}
        onMouseEnter={(e) => {
          if (category !== "medium") {
            e.target.style.background = "#CFD4ED";
            e.target.style.border = "1px solid #0D28A6";
            e.target.style.color = "#0D28A6";
          }
        }}
        onMouseLeave={(e) => {
          if (category !== "medium") {
            e.target.style.background = "#FFFFFF";
            e.target.style.border = "1px solid #AEB7E1";
            e.target.style.color = "#AEB7E1";
          }
        }}
      >
        4 - 6 people
      </Button>{" "}
      <Button
        variant="primary"
        style={{
          height: "36px",
          background: category === "large" ? "#CFD4ED" : "#FFFFFF",
          border:
            category === "large" ? "1px solid #0D28A6" : "1px solid #AEB7E1",
          borderRadius: "2px",
          fontFamily: "Arial",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "14px",
          lineHeight: "20px",
          color: category === "large" ? "#0D28A6" : "#AEB7E1",
        }}
        onClick={handleLargeClick}
        onMouseEnter={(e) => {
          if (category !== "large") {
            e.target.style.background = "#CFD4ED";
            e.target.style.border = "1px solid #0D28A6";
            e.target.style.color = "#0D28A6";
          }
        }}
        onMouseLeave={(e) => {
          if (category !== "large") {
            e.target.style.background = "#FFFFFF";
            e.target.style.border = "1px solid #AEB7E1";
            e.target.style.color = "#AEB7E1";
          }
        }}
      >
        6 - 8 people
      </Button>{" "}
    </>
  );
}

ButtonFilter.defaultProps = {
  handleClick: () => {},
};
