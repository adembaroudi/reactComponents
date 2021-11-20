

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Component/Profile/FullName';
import {Address} from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import {Card , Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Card style={{ width: '20rem'}}>
 <ProfilePhoto className="profile-photo" />
  <Card.Body>
    <Card.Title><FullName/></Card.Title>
    <Card.Text><Address/></Card.Text>
  </Card.Body>
</Card>
     
     
    </div>
  );
}

export default App;
