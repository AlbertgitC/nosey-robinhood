import React from 'react';
import { Link } from 'react-router-dom'
import CompaniesContainer from '../companies/companies_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>NoseyHood welcome page</h1>
        <CompaniesContainer />
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>        
        <footer>
          Copyright &copy; 2019 Team Members {/* change this! */}
        </footer>
      </div>
    );
  }
}

export default MainPage;