import logo from './logo.svg';
import './App.css';

const App = () => {
  let name = 'thanh';
  let obj = {
    name: 'thanh',
    age: 29
  }
  let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=10&ab_channel=H%E1%BB%8FiD%C3%A2nIT';
  return (
    <div className="App">
      {console.log('check obj :', obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> hoc reactjs--session 2 </h1>
        <h3> {name}</h3>
        <h3>{obj.age}</h3>
        <h2> version 17</h2>
        <a href={link} target="_blank"> Visit my channel </a>
      </header>
    </div>
  );
}
export default App;
