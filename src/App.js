import './App.css';
import HeaderComponents from './components/HeaderComponents/HeaderComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./components/HeaderComponents/HeaderComponent.css"
import HomeComponents from './components/HomeComponents/HomeComponent';
import AddEditPayrollComponents from './components/AddEditPayrollComponents/AddEditPayrollComponent';
import "./components/AddEditPayrollComponents/AddEditPayrollComponent.css"
import "./components/HomeComponents/HomeComponent.css"

function App() {
  return (
    <div className="App">
      <HeaderComponents/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomeComponents/>}></Route>
          <Route path='/add-update' exact element={<AddEditPayrollComponents/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;