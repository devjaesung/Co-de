import './App.css';
import {Container} from '@mui/material'
import TopBar from './components/Topbar';
import Profilepage from './components/profilepage/Profilepage';
import Mainpage from './components/mainpage/Mainpage';


function App() {
  return (
    <Container>
      <TopBar/>
      {/* <Profilepage /> */}
      <Mainpage/>
    </Container>
  );
}

export default App;
