import {Card, Button} from '../src/index';

import './style.css';
import '../../node_modules/@cupid-ui/css/dist/cupid-ui.css';

export default App() (
  <div>
    <h1>Hello, World!</h1>
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
)
