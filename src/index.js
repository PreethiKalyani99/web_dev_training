import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  	render() {
    	return <h1>I'm a Car!</h1>;
  	}
}
ReactDOM.render(<Car/>, document.getElementById('root'));

