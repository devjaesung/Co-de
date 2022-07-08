import './App.css';
import { Container } from '@mui/material'
import TopBar from './components/Topbar';
import Writepage from './components/writepage/Writepage';
import Writetalk from './components/writepage/Writetalk';
import TalkIn from './components/talkdetail/TalkIn';

function App() {
  return (
    <Container>
      <TopBar />
      {/* <Writepage /> */}
      {/* <Writetalk /> */}
      <TalkIn />
    </Container>
  );
}

export default App;
