import React from 'react';
import styles from './App.module.css';
import { Button } from 'antd';

function App() {
    return (
        <div className={styles.App}>
            <span>123</span>
            <Button type="primary">antd</Button>
        </div>
    );
}

export default App;
