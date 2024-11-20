import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login(){
    return(
        <div className="row m-5" id='register'>
            <div className="col-12">
                <h1>Login Form</h1>
            <Form>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Ranveer@singh.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="password" placeholder="********" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Button variant="outline-primary" type="submit" size="lg"> Login
                    </Button>
                </Form.Group>
                    
                    
            </Form>
            </div>
        </div>
    )
}

export default Login;