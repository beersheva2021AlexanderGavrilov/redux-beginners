import React from 'react';
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import ChangeColor from "./Components/ChangeColor";

function App() {
    return (
        <div className="App">
            <Profile/>
            <Login/>
            <ChangeColor/>
        </div>
    );
}

export default App;
