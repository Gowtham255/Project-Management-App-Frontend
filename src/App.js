//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from "./../node_modules/react-bootstrap/esm/Container";
//import { Row,Col } from "react-bootstrap";
import TasksList from "./components/TasksList";

function App() {
  return (
    <>
   
    <Container style={{ maxWidth: "600px", marginTop: "20px" }}>
          <Navbar/>
          <AddTask />
          <TasksList/>
    
    </Container>
    </>
  );
}

export default App;
