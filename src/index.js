import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component {
    render() {
        return ( <
            div className = "App" >
            <h1> hello world!!! </h1> {
              activitiesJson.map((elem, index) => { < h1 > {
                    elem.start_time
                  } < /h1>; })} <
                  /div>);
              }
            }

            const activitiesJson = [{
                "start_time": "06:00:00",
                "end_time": "08:00:00",
                "activity": "playing chess",
                "category": "computer",
                "time_difference": 120
              },
              {
                "start_time": "08:00:00",
                "end_time": "10:00:00",
                "activity": "playing basketball",
                "category": "exercise",
                "time_difference": 120
              },
              {
                "start_time": "10:00:00",
                "end_time": "13:00:00",
                "activity": "talking with gal",
                "category": "socializing",
                "time_difference": 180
              }
            ]

            ReactDOM.render( < App / > , document.getElementById('root'));

            // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA
