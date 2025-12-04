
import Customers from '../admin/customers';
import Navbar from '../core/layout/navbar/navbar';
import Home from '../features/home/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouting() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Navbar />} >
                    <Route path="home" element={<Home/>} />
                    <Route path="customers" element={<Customers/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouting;