import { Card, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import '../styles/addcar.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminGetCarById, carSelectors } from "../../../features/carSlice";
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id')

const UpdateCar = (props) => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const data = useSelector(carSelectors.selectCars)

    useEffect(() => {
        dispatch(adminGetCarById(id))
    }, [])

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    status: false,
    image: ''
  });
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      image: file,
    });
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(form)
  }

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Cars</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Update Car
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Add New Car</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Edit Car</h2>
      <Card
        body
        style={{ width: "98%", height: "512px", marginBottom: "320px" }}
        className=""
      >
        <Form onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(form);
        }}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Nama/Tipe Mobil
            </Form.Label>
            <Col sm="10">
              <Form.Control
                style={{ width: "350px" }}
                type="input"
                placeholder={data?.name}
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
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
                type="input"
                placeholder={data?.price}
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Foto
            </Form.Label>
            <Col sm="10">
              <input type="file" onChange={handleFileInputChange} />
              {previewSource ?  (
                <img
                  src={previewSource}
                  alt="Preview"
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "1px solid #ccc",
                  }}
                />
              ) : (<img
                src={data?.image}
                alt="Preview"
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid #ccc",
                }}
              />)}
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
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
              >
                <option value={data?.category}>{data?.category}</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Created at
            </Form.Label>
            <Col sm="10"> {moment(data?.createdAt).format('DD MMMM YYYY')}</Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Update at
            </Form.Label>
            <Col sm="10"> {moment(data?.updatedAt).format('DD MMMM YYYY')}</Col>
          </Form.Group>
        </Form>
      </Card>

          <div className="d-flex gap-3">
            <Button variant="outline-primary">Cancel</Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Save</Button>
          </div>
    </div>
  );
};

export default UpdateCar;
