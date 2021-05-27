import {Card, Button, Alert} from '../src/index';

import './style.css';
import '../../node_modules/@cupid-ui/css/dist/cupid-ui.css';

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
        type=""
      />
      <h2>Card</h2>
      <Card
        title="George"
        subtitle="Professional chaos causer"
        buttonText="Hire George"
        buttonLink="#"
        image="placeholder.jpg"
        imageWidth="128"
        imageHeight="128"
        imageDesc="Picture of George, a professional chaos causer. Yes, he's a goose."
      />
		</div>
	);
}

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
