import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Header from '@/views/layout/Header';
import SlideBar from '@/views/layout/SlideBar';
import Main from '@/views/layout/Main';

export default function App() {
    return (
        <Router>
            <div className="container">
                <Header />

                <div className="main">
                    <SlideBar />

                    <Main />
                </div>
            </div>
            
            
        </Router>
    );
}