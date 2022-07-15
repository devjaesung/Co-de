import './App.css';
import { Container } from '@mui/material';
import TopBar from './components/Topbar';
import Writepage from './components/writepage/Writepage';
import Writetalk from './components/writepage/Writetalk';
import TalkDetail from './components/talkdetail/TalkDetail';

function App() {
  return (
    <Container>
      <TopBar />
      <Writepage />
      <Writetalk />
      <TalkDetail />
    </Container>
  );
}

export default App;
