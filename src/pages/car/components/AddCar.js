import { Card, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDropzone } from "react-dropzone";
import React, { useState, useCallback } from "react";

const AddCar = (props) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setPreviewImage(URL.createObjectURL(file));
    setImage(file);
  }, []);

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({ onDrop });

  const handleClickConfirmation = (e) => {
    e.preventDefault();
    props.handleClick(image);
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Cars</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          List Car
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Add New Car</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Add New Car</h2>
      <Card
        body
        style={{ width: "98%", height: "512px", marginBottom: "320px" }}
        className=""
      >
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
           Nama/Tipe Mobil
          </Form.Label>
          <Col sm="10">
            <Form.Control
              style={{ width: "350px" }}
              type="password"
              placeholder="Input Nama/Tipe Mobil"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Harga
          </Form.Label>
          <Col sm="10">
            <Form.Control
              style={{ width: "350px" }}
              type="password"
              placeholder="Input Nama/Tipe Mobil"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Foto
          </Form.Label>
          <Col sm="10">
            <div
              style={{ width: "350px" }}
              {...getRootProps({ className: "dropzone border  " })}
            >
              <input {...getInputProps()} accept="image/*" />
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{ maxHeight: "200px" }}
                />
              ) : (
                <div>
                  <p className="px-2">Upload Foto Mobil</p>
                 
                </div>
              )}
            </div>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Kategori
          </Form.Label>
          <Col sm="10">
            <Form.Select
              style={{ width: "350px" }}
              aria-label="Default select example"
            >
              <option>Pilih Kategori Mobil</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Created at
          </Form.Label>
          <Col sm="10">-</Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Update at
          </Form.Label>
          <Col sm="10">-</Col>
        </Form.Group>
      </Card>

      <div className="d-flex gap-3">
        <Button variant="outline-primary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  );
};

export default AddCar;
