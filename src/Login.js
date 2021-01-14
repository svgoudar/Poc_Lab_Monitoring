import './Styles/Login.css';
import {React,Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,Button,ButtonGroup,Dropdown,DropdownButton} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Navb from './Navb';
import axios from 'axios';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={ 
      email:'',
      password:'',
      value:'',
      user:[]
};

  }
async componentDidMount()
{
  axios.post('http://127.0.0.1:8000/api/employee/', {
    id: '2',
    mobile: '7278122',
    emp_code:'627',
    fullname:'Raj'
  }).then((res)=>{
    console.log(res.data)
  })
  .catch((err) => console.log(err)
  );
}
// async componentDidMount()
// {
//   axios.delete('http://127.0.0.1:8000/api/employee/2').then((res)=>{
//     console.log(res);
//     console.log(res.data);
//   })
//   .catch((err) => console.log(err)
//   );
// }
  setValue=(e)=>
  {
    this.setState({value: {e}})
  }
  onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state.user)
    if(this.state.value === "Member"){
      if (this.state.email === this.state.user[0].email && this.state.password === this.state.user[0].username) {
        this.props.history.push('/Main')
        return;
      }else{
        alert("Login Failed ! . Check Username and Password.")
      }
    }
    else
    {
      if (this.state.email === "hemaksh@gmail.com" && this.state.password === "1234") {
        alert("Login Failed ! . Check Username and Password.")

        return;
      }else{
        alert("Lod ! . Check Username and Password.")
      }
    }
    };
    
  changeEmail=(e)=>{
    this.setState({email: e.target.value});
  }
  changePassword=(e)=>{
    this.setState({password: e.target.value});
  }
  handleSelect=(e)=>{
    console.log(e);
    this.setState({value: e})
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render(){
  return (
    <>
    <Navb/>
    <div className="Login">
      
      <h1 id="headin">Sign in</h1>
      <Form onSubmit={this.onSubmitHandler}>
          <Form.Group controlId="formEmail">
            <Form.Label className="written">
              Email Address:
            </Form.Label>
            <Form.Control autoFocus type="email" placeholder="example@email.com" onChange={this.changeEmail} required/>
            <Form.Text className="text-muted">
              We'll never share your email!
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPass">
            <Form.Label className="written">
              Password:
            </Form.Label>
            <Form.Control type="password" placeholder="Enter password" onChange={this.changePassword} required/>
          </Form.Group>
          <ButtonGroup>
            <Button id="btn1" disabled active>Please select role</Button>
          
          <DropdownButton as={ButtonGroup} title={this.state.value} id="dropdown-menu" onSelect={this.handleSelect}>
            <Dropdown.Item eventKey="Member">Member</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Manager">Manager(Admin)</Dropdown.Item>
      </DropdownButton>
      </ButtonGroup>
      <br/>
      <Link to="./Forgot" id="link">Forgot Password?</Link><br/><br/>
          <Button id="btn" type="submit" value="submit" disabled={!this.validateForm()}>Login</Button>
      </Form>
       {/* <ul>
        {this.state.json.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul> */}

    </div>
    </>
    );
  }
}
