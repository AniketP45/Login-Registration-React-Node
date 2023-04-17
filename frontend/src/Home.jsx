import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
   

    return (
      <article>
        <div>
          <section>
          
               <div>
                 <Link to="/">Home</Link>
               </div>
               <div>
                 <Link to="/login">Login</Link><br></br>
                 <Link to="/register">Sign Up</Link>
               </div>
          </section>
        </div>
      </article>
    );
  }
}


export default Home;