import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import '../../css/dist/cupid-ui.css';
import {Card, Button, Alert} from '../src/index';

import placeholder from 'url:./placeholder.jpg?as=webp';

export default function App() {
	return (
		<div>
			<h1>Hello, World!</h1>
      <h2>Alerts</h2>
      <Alert
        title="Woah!"
        text="You did something not good, but great!"
      />
      <Alert
        title="Careful, buster."
        text="No misbehaving!"
      />
      <Alert
        title="Uh oh!"
        text="George has broken something again."
      />
      <Alert text="I just wanted to say you look really cool." />
      <h2>Buttons</h2>
      <Button
        title="Blow up the world"
        link="#"
      />
      <h2>Card</h2>
      <Card
        title="George"
        subtitle="Professional chaos causer"
        buttonText="Hire George"
        buttonLink="#"
        image={placeholder}
        imageWidth="128"
        imageHeight="128"
        imageDesc="Picture of George, a professional chaos causer. Yes, he's a goose."
      />
    </div>
  );
}

const mountNode = document.getElementById('root');
<<<<<<< HEAD
ReactDOM.render(<App />, mountNode);
=======
ReactDOM.render(<Page />, mountNode);
>>>>>>> 05af992f2ca29980eff037510049d87d0c629018
