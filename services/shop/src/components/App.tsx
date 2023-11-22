import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
           <h1>SHOP MODULE</h1>
            <Outlet/>
        </div>
    );
};