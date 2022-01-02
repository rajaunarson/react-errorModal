import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        { id: 1, someattr: 'a string', anotherattr: '' },
        { id: 2, someattr: 'another string', anotherattr: '' },
        { id: 3, someattr: '3rd a string', anotherattr: '' },
      ],

      // user: { id: 1, someattr: "a string", anotherattr: "" }
    };
  }

  addClick = () => {
    this.setState({
      user: [
        ...this.state.user,
        { id: 4, someattr: '4rd a string', anotherattr: '' },
      ],
    });
  };

  render() {
    const userdet = this.state.user;
    return (
      <div>
        {userdet.map(function (d, idx) {
          return <li key={idx}>{d.someattr}</li>;
        })}
        <button onClick={this.addClick}> Add</button>
      </div>
    );
  }
}

export default About;
