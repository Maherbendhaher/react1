import "./App.css";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return ( <
        div className = "container" >
        <
        h1 class = "Text-centre" > Enregistrement des clients < /h1> {}{" "} <
        Form className = "row" >
        <
        Form.Group className = "mb-3 col-md-5 "
        controlId = "formBasicEmail" >
        <
        Form.Label className = "email" > Email address < /Form.Label>{" "} <
        Form.Control type = "email"
        placeholder = "Enter email" / >
        <
        Form.Text className = "muted" >
        <
        p > We 'll never share your email with anyone else. </p>{" "} <
        /Form.Text>{" "} <
        /Form.Group>{" "} <
        Form.Group className = "mb-3 col-md-5"
        controlId = "formBasicPassword" >
        <
        Form.Label > Password < /Form.Label>{" "} <
        Form.Control type = "password"
        placeholder = "Password" / >
        <
        /Form.Group>{" "} <
        Form.Group className = "mb-3 col-md-5"
        controlId = "formBasicCheckbox" >
        <
        Form.Check type = "checkbox"
        label = "Check me out" / >
        <
        /Form.Group>{" "} <
        Button variant = "primary"
        type = "submit" >
        Submit { " " } <
        /Button>{" "} <
        /Form>{" "} <
        /div>
    );
}

export default App;