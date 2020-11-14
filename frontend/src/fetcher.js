import React, {useState} from 'react';
import axios from 'axios';

const Fetcher = (props) => {
    const [data, setData] = useState( "");
    
    const  getResponse = async ( ) => {
        console.log("setting");
        const response = await axios.get('/');
        setData(`${response.data}`);
     };

    const clearData = ( ) => {
             console.log("Clearing");
             setData("");
     };

    return (
        <div className="fetcher">
            <h1>Fetcher Component</h1>
            <p>{data}</p>
            <button onClick={getResponse}>Get Data</button>
            <button onClick={clearData}>Clear Data</button>
        </div>
        );

}
export default Fetcher;