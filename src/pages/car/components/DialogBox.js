import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import carImage from "../../../assets/icons/img-BeepBeep.png";

function DialogBox({ onDelete }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = () => {
    onDelete(); // Panggil fungsi onDelete dari prop
    handleClose();
  };

  return (
    <>
      <Button variant="outline-danger" className="w-100" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Body>
          <Card className="border-0">
            <Card.Body>
              <div className="text-center mb-5">
                <img src={carImage} alt="" />
              </div>
              <h4 className="text-center fw-bold mb-2">
                Menghapus Data Mobil{" "}
              </h4>
              <p className="text-center mb-0">
                Setelah dihapus, data mobil tidak dapat
              </p>
              <p className="text-center">
                dikembalikan. Yakin ingin menghapus?
              </p>
              <div className="row justify-content-center button-card">
                <div className="col-md-6 text-end">
                  <Button
                    className="w-50"
                    variant="primary"
                    onClick={handleDelete}
                  >
                    Ya
                  </Button>
                </div>
                <div className="col-md-6">
                  <Button
                    variant="outline-primary"
                    className="w-50"
                    onClick={handleClose}
                  >
                    Tidak
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DialogBox;
