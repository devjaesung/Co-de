import './App.css';
import {Container} from '@mui/material'
import TopBar from './components/Topbar';
import Profilepage from './components/profilepage/Profilepage';


function App() {
  return (
    <Container>
      <TopBar/>
      <Profilepage />
    </Container>
  );
}

export default App;
