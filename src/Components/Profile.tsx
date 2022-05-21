import React from 'react';
import {useSelector} from 'react-redux';


const Profile = () => {
    // @ts-ignore
    const user = useSelector((state) => state.user.value);
    // @ts-ignore
    const themeColor = useSelector((state)=> state.theme.value);
    return (
        <div style={{color: themeColor}}>
            <h1>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email:{user.email}</p>
        </div>
    );
};

export default Profile;