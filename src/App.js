import './App.css';
import React, { useEffect, useState } from "react";



const App = () => {
    const [joke, setJoke] = useState([]);

    useEffect(() => {
        

        const fetchData = async () => {
            try {
             
    
                const response = await  fetch('https://api.chucknorris.io/jokes/random');
                const json = await response.json();
                console.log(json);
                setJoke(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);



    return (
        <div className="App">
        <h1 className='Joke'>{joke.value}</h1>
        <a href='/' id="new-quote">New Quote</a>
      </div>
      
    );
};

export default App;