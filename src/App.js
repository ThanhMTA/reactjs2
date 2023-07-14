import logo from './logo.svg';
import './App.css';
import Nav from './views/nav';
import { useCallback, useState } from 'react';


const App = () => {
  // let name = 'thanh';
  // let obj = {
  //   name: 'thanh',
  //   age: 29
  // }
  let [name, setName] = useState('Thanh');
  const [address, setAddress] = useState('');
  const handleEventClick = (event) => {
    setName(address);
    alert(name);
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
    // console.log(address);
  }
  let link = 'https://www.youtube.com/watch?v=jRFArF9t63I&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=15&ab_channel=H%E1%BB%8FiD%C3%A2nIT';
  return (
    <div className="App">
      {/* {console.log('check obj :', obj)} */}
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> hoc reactjs--session 2 and {name}</h1>
        {/* <h3 > {name}</h3>
        <h3>{obj.age}</h3>
        <h2> version 17</h2> */}
        <a href={link} target="_blank"> baì học tiếp  </a>
        <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={() => handleEventClick()}> click me </button>

      </header>
    </div>
  );
}
export default App;
