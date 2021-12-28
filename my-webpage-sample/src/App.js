import './App.css';
import DisplayContainer from './component/DisplayContainer';
import AddContainer from './component/AddContainer';
import UpdateContainer from './component/UpdateContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import { Route, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

          <div className="App">
            
            <div>
              <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/add">Add User</Link> </li>
                <li> <Link to="/about">About</Link> </li>
              </ul>
            </div><br/>

            <div>
              <Routes>
                <Route path = "/" element={ <DisplayContainer /> } />
                <Route path = "/add" element={ <AddContainer /> } />
                <Route path="/update" element={<UpdateContainer/>}/>
              </Routes>
            </div>

          </div>

        </BrowserRouter>
      </Provider>
  );
}

export default App;
