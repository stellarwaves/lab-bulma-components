import React, {Component} from 'react';
import classNames from 'classnames'

class Button extends Component {
   render () {
      // const className = this.props['is-primary'] ? 'is-primaty' : ''
      const className = classNames(this.prop)
      return (
         <button className={`button ${className}`}>{this.props.children}</button>
      )
   }
}

export default Button;