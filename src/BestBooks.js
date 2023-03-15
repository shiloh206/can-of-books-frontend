import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Form from './form';
import Button from './form';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  
  componentDidMount() {
    this.getBooks();
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      console.log(results);
      this.setState({
        books: results.data,
        noBook: false,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  // handleSyncBooks = (sync) =>
  createBook = async (book) => {
    try {
      let result = await axios.post(`${process.env.REACT_APP_SERVER}/books`, book);
      this.setState((prevState) => ({
        books: [...prevState.books, result.data],
        isModalOpen: false,
      }));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    // console.log(this.state)
    /* TODO: render all the books in a Carousel */
    let booksCarousel = this.state.books.map((book) => {
      console.log(book);
      return (
        <Carousel.Item key={book._id}>
          <img
            width="100%"
            height="100%"
            src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          />
          <Carousel.Caption>
            <h2> {book.title}</h2>
            <p>{book.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <>
            <Carousel>{booksCarousel}</Carousel>
            <Button onClick={this.handleOpenModal}>Add Book</Button>
            <Form
              addBook={this.createBook}
              show={this.state.isModalOpen}
              handleClose={this.handleCloseModal}
            />
          </>
        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    );
  }
}

export default BestBooks;