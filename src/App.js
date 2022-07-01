import Header from './components/Header';
import AboutIconLink from './components/AboutIconLink';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
// import { UserForm } from './components/UserForm';
import UserList from './components/UserList';
import { UserProvider } from './components/context/UserContext';
import {UserForm} from './components/UserForm'
import { UserDetails } from './components/UserDetails';
import Button from './components/shared/Button';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header text="Vaccines Inventory">

        </Header>
        <div className="container">                
          <Routes>
              <Route exact path="/" element={
                  <>               
                      <UserList  /> 
                  </>
              }>
              </Route>
              <Route path="/about" element={<AboutPage/>}></Route>
              <Route path="/user" element={<UserForm/>}></Route>
              <Route path="/user-details/:id" element={<UserDetails/>}></Route>
              <Route path="/notfound" element={<NotFound />}></Route>                        
          </Routes>          

            <AboutIconLink />
        </div>       
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
