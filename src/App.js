import './App.css';
import {Container} from '@mui/material'
import TopBar from './components/Topbar';
import Mypage from './components/mypage/Mypage';

function App() {
  return (
    <Container>
      <TopBar />
      <Mypage />
    </Container>
  );
}

export default App;
