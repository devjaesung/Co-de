import './App.css';
import { Container } from '@mui/material'
import TopBar from './components/Topbar';
import Writepage from './components/writepage/Writepage';
import Writetalk from './components/writepage/Writetalk';

function App() {
  return (
    <Container>
      <TopBar />
      <Writepage />
      {/* <Writetalk /> */}
    </Container>
  );
}

export default App;
