import './App.css';
import HeaderComponents from './components/HeaderComponents/HeaderComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./components/HeaderComponents/HeaderComponent.css"

function App() {
  return (
    <div className="App">
      <HeaderComponents/>
    </div>
  );
}

export default App;