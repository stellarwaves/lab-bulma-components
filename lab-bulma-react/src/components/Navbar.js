import React, {Component} from 'react';
import Button from './Button';

class NavBar extends Component {
   render(){
      const {
         textNav,
         btnSignup,
      } = this.props;
      return (
         <nav className="navbar is-transparent">
            <div className="navbar-brand">
               <a className="navbar-item" href="/">
                  <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
               </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu is-active">
               <div className="navbar-start">
                  <a className="navbar-item" href="/">
                     {textNav}
                  </a>
               </div>


               <div className="navbar-end">
                  <div className="navbar-item">
                     <div className="field is-grouped">
                        <p className="control">
                           <Button is-danger>Login</Button>
                        </p>
                        <p className="control">
                           <a className="button is-primary" href="/">
                              <span>
                                 {btnSignup}
                              </span>
                           </a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      );
   }
}


export default NavBar;