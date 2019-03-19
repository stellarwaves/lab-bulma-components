import React, {Component} from 'react';

class FormField extends Component {
   render () {
      const {
         type,
         placeholder
      } = this.props;
      return (
         <div class="field">
            <div class="control">
               <input class="input" type={type} placeholder={placeholder}/>
            </div>
         </div>
      );
   }
}

export default FormField;