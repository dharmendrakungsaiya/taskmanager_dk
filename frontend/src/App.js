import { Container } from "@mui/material";
import Navbar from "./Components/AppBar/AppBar";
import TaskManager  from "./Components/TaskManager/TaskManager";


const App = () => {
  return (
  <>
  <Navbar/>
  <Container maxWidth="lg"/>
  <TaskManager/>
  <Container/>
  </>
  );
};

export default App;