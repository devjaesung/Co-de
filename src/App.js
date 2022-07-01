import './App.css';
import { Container } from '@mui/material'
import TopBar from './components/Topbar';
import Writepage from './components/writepage/Writepage';

function App() {
  return (
    <Container>
      <TopBar />
      <Writepage />
    </Container>
  );
}

export default App;
