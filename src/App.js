import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import Login from './Login';
import Navbar from './Navbar';
import Error from './Error';
import Instant from './Instant';
import Started from './Started';
import Buy from './Buy';
import Sell from './Sell';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='instant' element={<Instant/>} />
            <Route path='learn' element={<Learn/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='started' element={<Started/>}/>
            <Route path='buy' element={<Buy/>}/>
            <Route path='sell' element={<Sell/>}/>
            <Route path='*' element={<Error/>} />
          </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
