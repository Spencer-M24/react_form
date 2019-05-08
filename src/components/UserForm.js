// Wrapper Parent Compoent

import React, { Component } from 'react'

export class UserForm extends Component {
  state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: ''
  }

  // Methods
  // Go to next Step

  nextStep = () => {
      const { step } = this.state;
      this.setState({
          step: step + 1
      });
  }


  // Previous Step

  prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

// Handle form field 


handleChange =  input => e => {
    this.setState({[input]: e.target.value});
}

  
}
    render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm
