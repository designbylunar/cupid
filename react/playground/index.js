import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import '../../css/dist/cupid-ui.css';
import { Card, Button, Alert, Modal, Badge } from '../src/index';

import placeholder from 'url:./placeholder.jpg?as=webp';

export default function App() {
	return (
		<div style={{
      marginTop: 2 + 'rem',
      marginBottom: 4 + 'rem'
    }}>
			<h1>Hello, World!</h1>
      <h2>Alerts</h2>
      <Alert
        title="Woah!"
        text="You did something not good, but great!"
        type="success"
      />
      <Alert
        title="Careful, buster."
        text="No misbehaving!"
        type="warning"
      />
      <Alert
        title="Uh oh!"
        text="George has broken something again."
        type="error"
      />
      <Alert text="I just wanted to say you look really cool." type="info" />

      <h2>Badges</h2>
      <p>Something brand-spanking new! <Badge type="info" text="New!" /></p>
      <p>To show you the power of Lunar Design.. <Badge text="I made this badge!" /></p>
      <h5>Works with baby headers text! <Badge type="warning" text="George says hi. Run." /></h5>
      <p>Fuck it, badgeception
      <Badge>
        <img src={placeholder} alt="Oh fuck its george" />
      </Badge>
      </p>

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

      <h2>Modals</h2>
      <Modal
        title="Woah there! Are you sure want to nuke that country?"
        subtext="In the event of total atomic annihilation, Vault-Tec can't save you, because we'll have to pretend we don't know you."
      >
        <Button
          type="mono"
          link="#"
          title="Nevermind"
        />
        <Button
          type="error"
          link="#"
          title="Delete that nation."
        />
      </Modal>
    </div>
  );
}

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
