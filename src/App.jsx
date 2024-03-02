import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Scrolll from './Components/Scrolll';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

import AdminDashboard from './Components/Dash/AdminDashboard';


import AddSkill from './Components/Dash/AddSkill';
import Addpro from './Components/Dash/Addpro';
import ListPro from './Components/Dash/ListPro';
import ListSkill from './Components/Dash/ListSkill';
import ListDep from './Components/Dash/ListDep';
import AddDp from './Components/Dash/AddDp';
import AddWorkExp from './Components/Dash/AddWorkExp';
import ListWorkExp from './Components/Dash/ListWorkExp';
import Login from './Components/auth/Login';
function App() {
    var comp=Home;
   
comp = ()=> (<AdminDashboard><Addpro /><AddSkill /><ListPro /><ListSkill /><ListDep/><AddDp/><AddWorkExp/><ListWorkExp/></AdminDashboard>)
    
    return (
        <div className="App" style={{minHeight:"600px"}}>
        
            <BrowserRouter>   
             <Header/>
                <Routes>
                   <Route path="/" element={<Home/>}></Route>
                   <Route path="/about" element={<About/>}></Route>
                   <Route path="/contacts" element={<Contact/>}></Route>
                   <Route path="/projects" element={<Projects/>}></Route>
                   <Route path="/authadmin" element={<Login/>}></Route>
                   <Route
                    exact
                    path="/HomeAdmin"
                    Component={comp}
                ></Route>
                
                </Routes>
                <Scrolll/>
                <Footer/>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
