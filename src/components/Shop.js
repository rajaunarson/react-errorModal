import React, { useState } from 'react';
import Select from 'react-select';
import { Button, Modal } from 'react-bootstrap';
import '../styles/FormStyle.css'; 

function Shop() {
  const [phone, setphone] = useState('');
  const [username, setusername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [field, setField] = useState({});
  const [show, setshow] = useState(false);

  const valFun = (e) => {
    var fname = e.target.name;
    var fvalue = '';

    if (fname == 'username') {
      setusername(e.target.value);
      if (username.length < 5) {
        // setErrorMessage('err');
        fvalue = 'username more than 5 letters';
        setField({ ...field, [fname]: fvalue });
      } else {
        //setErrorMessage('');
        setField({ ...field, [fname]: '' });
      }
      console.log(field);
    }
    if (fname == 'phone') {
      setphone(e.target.value);
      if (phone.length < 9) {
        //setErrorMessage('err');
        fvalue = 'phone more than 10 char';
        setField({ ...field, [fname]: fvalue });
      } else {
        //setErrorMessage('');
        setField({ ...field, [fname]: '' });
      }
    }
  };
  const handleModal = () => {
    setshow(!show);
  };
  return (
    <div>
      <h1>Shop </h1>
      <form>
        <div className="inputMain">
          <div className="inputCls">
            <label> Name: </label>
            <input
              name="username"
              type="text"
              value={username}
              onChange={valFun}
            />
          </div>
          {field[username] != '' && (
            <div className="errorMsg"> {field.username} </div>
          )}
        </div>
        <div className="inputMain">
          <div className="inputCls">
            <label> Phone: </label>{' '}
            <input name="phone" type="text" value={phone} onChange={valFun} />
          </div>
          {field[phone] != '' && (
            <div className="errorMsg"> {field.phone} </div>
          )}
        </div>
      </form>

      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
        <Modal.Body>This is a Modal Body</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModal}>Close</Button>
          <Button onClick={handleModal}>Save</Button>
        </Modal.Footer>
      </Modal>
      <div className="modalClass">
        <Button onClick={handleModal}>Click To Open Modal</Button>
      </div>

      <h1> Your phone is = {phone}</h1>
    </div>
  );
}

// const [errorMessage, setErrorMessage] = React.useState("");
//   const handleClick = () => {
//     setErrorMessage("Example error message!")
//   }
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Show error message</button>
//       {errorMessage && <div className="error"> {errorMessage} </div>}
//     </div>
//   );

export default Shop;
