import React from 'react';
import './App.css';
import stars from './assets/stars2.png';
import tutor from './assets/tutor.jpg';
import library from './assets/library.jpg';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        apiResponse: {}
    }
  }

  componentDidMount() {
     axios.get('http://localhost:8080/api/v1/reviews')
          .then((response) => this.setState({apiResponse: response.data}));
  }

  render() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
        <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" loading="lazy"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Courses
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Maths</a>
                    <a className="dropdown-item" href="#">English</a>
                    <a className="dropdown-item" href="#">Biology</a>
        <a className="dropdown-item" href="#">Japanese</a>
                </div>
            </li>
        </ul>
    </div>
    <form className="form-inline">
        <button className="btn btn-outline-success" type="button">Login</button>
        <button className="btn btn-outline-success" type="button">Sign Up</button>
    </form>
</nav>

<div className="container-fluid">
    <div className="row">
        
    </div>
    <div className="row bg-image">
        <div className="col-2"></div>
        <div className="col to-review-container">
            <img src={ library } />
            <div className="reviews">
                <div className="bg-text">
                    <div className="title">
                        <h1>
                            Thousands of parents, students and teachers have rated us 4.9/5
                        </h1>
                    </div>
                    <div className="to-card">
                        <div className="row">
                            <div className="col-2">
                                <div className="user-image">
                                    <img src={ tutor } />
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="review-highlights">
                                    <div className="name">
                                        {this.state.apiResponse.name}
                                    </div>
                                    <div className="number-of-lessons">
                                        Parent, {this.state.apiResponse.lessons} lessons for A-Level History and English
                                    </div>
                                    <div className="stars-rating">
                                        <img src={ stars } />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="complete-review">
                                    <h2>
                                        "{this.state.apiResponse.review}"
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-footer">
                        <p>
                            See 200,073 reviews of TutorOnline
                        </p>
                    </div>


                </div>
            </div>
        </div>
        <div className="col-2"></div>
    </div>
    <div className="row footer">
        <div className="col">
            <ul>
                <li>
                    <a>About us</a>
                </li>
                <li>
                    <a>Becoming a tutor</a>
                </li>
                <li>
                    <a>FAQs</a>
                </li>
                <li>
                    <a>Contact us</a>
                </li>
                <li>
                    <a>Privacy policy</a>
                </li>
            </ul>
        </div>
        <div className="col">
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a className="fa fa-instagram"></a>
        </div>
    </div>
</div>



    </div>
  );
  }

  
}

export default App;
