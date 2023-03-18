import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class BookForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            book: {}
        }
    }

//   handleBookSubmit = (e) => {
//     e.preventDefault();
//     console.log("sumbit");
//     console.log(newBook);
//     this.props.addBook(newBook);
//     this.props.handleClose();

//     let newBook = {
//       title: e.target.title.value,
//       status: e.target.status.value,
//       description: e.target.description.value,
//     };
//   };

handleBookSubmit = (e) => {
    e.preventDefault();

    let newBook = {
        title: e.target.title.value,
        status: e.target.status.value,
        description: e.target.description.value
    }
    this.props.addBook(newBook);
    // this.props.handleCloseModal();
}


  render() {
    return (
      <>
        <Modal show={this.props.show} >
          <Modal.Header closeButton  onClick={this.props.handleClose}>
            <Modal.Title>Add A Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleBookSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter title"
                  value={this.props.title}
                 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Enter description"
                  value={this.props.description}
                  // onChange={(e) => this.setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  name="status"
                  type="text"
                  placeholder="Enter status"
                  value={this.props.status}
                  // onChange={(e) => this.setStatus(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default BookForm;
