import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Header from '@/views/layout/Header/Header';
import SlideBar from '@/views/layout/SlideBar';
import Main from '@/views/layout/Main';

import styles from './app.modules.scss';

export default function App() {
    return (
        <Router>
            <div className={styles.container}>
                <SlideBar />

                <div className={styles.main}>
                    <Header />

                    <Main />
                </div>
            </div>
        </Router>
    );
}