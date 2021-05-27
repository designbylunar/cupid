import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import '../../css/dist/cupid-ui.css';
import { Card, Button } from '../src/index';

import placeholder from 'url:./placeholder.jpg?as=webp';

export default function Page() {
  return (
    <div>
      <h1>Hello, World!</h1>
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
ReactDOM.render(<Page />, mountNode);
