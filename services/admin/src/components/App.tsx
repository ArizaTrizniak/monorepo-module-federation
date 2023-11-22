import React, {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {UserCard} from "@packages/shared/src/components/UserCard";

export const App = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
           <h1>ADMIN MODULE</h1>
            <Outlet/>
            <UserCard username={'FROM ADMIN'} />
        </div>
    );
};