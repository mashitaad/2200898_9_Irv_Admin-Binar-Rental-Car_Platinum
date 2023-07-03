import { Card, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import '../styles/addcar.css'
import fiUpload from "../../../assets/icons/fi_upload.png"
import { Link } from "react-router-dom";

const AddCar = (props) => {
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
      <Breadcrumb >
        <Breadcrumb.Item >
        <Link to={`/admin/car/list`} style={{color:"black", textDecoration:"none", fontWeight:"bold"}}>
         Cars
        </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item >
        <Link to={`/admin/car/list`} style={{color:"black", textDecoration:"none", fontWeight:"bold"}}>
          List Car
        </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Add New Car</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Add New Car</h2>
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
            <Form.Label column sm="2" className="labelAddCar" required>
              Nama/Tipe Mobil<span class="text-danger">*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="textInput"
                style={{ width: "350px" }}
                type="input"
                placeholder="Input Nama/Tipe Mobil"
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
            <Form.Label column sm="2" className="labelAddCar">
              Harga<span class="text-danger">*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control
               className="textInput"
                style={{ width: "350px" }}
                type="input"
                placeholder="Input Harga Sewa Mobil"
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
            <Form.Label column sm="2" className="labelAddCar">
              Foto<span class="text-danger">*</span>
            </Form.Label>
            <Col sm="10">
            
              <input type="file"  onChange={handleFileInputChange} style={{ width: "350px" }} class="form-control"
             src={{fiUpload}}
              />
            
              <label style={{fontFamily: "Rubik",
                              fontSize: "10px",
                              fontWeight: "300",
                              lineHeight: "14px"}}>
              File Size max 2MB </label>

              {previewSource && (
                <img
                className="textInput"
                  src={previewSource}
                  alt="Preview"
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "1px solid #ccc",
                  }}
                />
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2" className="labelAddCar">
              Kategori<span class="text-danger">*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Select
               className="textInput"
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
                <option value="">Pilih Kategori Mobil</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2" className="labelAddCar">
              Created at
            </Form.Label>
            <Col sm="10"  >-</Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2" className="labelAddCar">
              Update at
            </Form.Label>
            <Col sm="10">-</Col>
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

export default AddCar;
