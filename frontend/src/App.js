import { Container } from "@mui/material";
import Navbar from "./Components/AppBar/AppBar";
import TaskManager  from "./Components/TaskManager/TaskManager";
export const config = {
  endpoint: `https://taskmanager-dk.onrender.com/tasks`,
};


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