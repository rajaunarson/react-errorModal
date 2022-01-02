import React from 'react';
import axios from 'axios';
import { ApiFunction } from './ApiFunction';

// export default function Conatct() {
//   return (
//     <div>
//       <h1> This is Conatct Page</h1>
//     </div>
//   );
// }

class Conatct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      name: '',
      age: '',
    };
  }

  componentDidMount() {
    console.log('cdm....');

    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      const result = response.data;
      this.setState({ records: result });
      // console.log(this.state.records);
    });
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  // formSubmit = async (event) => {
  //   event.preventDefault();
  //   //const method = 'addUser';
  //   const userDetails = {
  //     name: this.state.name,
  //     age: this.state.age,
  //   };

  //   var xx = await ApiFunction(method, userDetails);
  //   console.log(xx);
  // };

  formSubmit = async (event) => {
    event.preventDefault();
    var method = 'addUser';
    const userDetails = {
      name: this.state.name,
      age: this.state.age,
    };

    ApiFunction(method, userDetails).then((res) => {
      //any payload you want to send just for example
      console.log('this file red', res);
      var method = 'displayUser';
      ApiFunction(method, userDetails).then((res) => {
        console.log('this file show res', res);
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <label> Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />
          <br />
          <label> Age: </label>
          <input type="text" id="age" onChange={this.handleChange} />
          <br />
          <button> Add User</button>
        </form>

        {this.state.records.map((items) => (
          <div> {items.id} </div>
        ))}
      </div>
    );
  }
}

export default Conatct;
