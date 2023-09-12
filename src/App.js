import logo from './logo.svg';
import './App.css';
import react, {useState} from react
import MyCarousel from './components/MyCarousel';
import Header from './components/Header';
import CardExample from './components/Card';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header></Header>
        </div>
        <div className="body">
          <div className="body-carousel">
            <MyCarousel></MyCarousel>
          </div>
          <div className="body-cards">
            <CardExample></CardExample>
            <CardExample></CardExample>
            <CardExample></CardExample>
            <CardExample></CardExample>
            <CardExample></CardExample>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
