import './App.css';
import {Container} from '@mui/material'
import TopBar from './components/Topbar';
import Mypage from './components/mypage/Mypage';
import FeedMainpage from './components/mainpage/FeedMainpage';

function App() {
  return (
    <Container>
      <TopBar />
      {/* <Mypage /> */}
      <FeedMainpage />
    </Container>
  );
}

export default App;
