import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EntityPage from './pages/EntityPage';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/entity/:id" element={<EntityPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
