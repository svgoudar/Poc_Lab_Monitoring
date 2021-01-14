import React,{useState} from 'react'
import './Styles/Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {TextField,makeStyles } from '@material-ui/core';
import {Form,Button,Col} from 'react-bootstrap'
import Main from './Main'
import Navb from './Navb'

function Signup(){
    
    const [startDate, setStartDate] = useState(new Date());
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      const useStyle = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(0),
            width: '50ch',
          },
        },
      }));
      const classes = useStyles();
      const classees=useStyle();
    return(
        <>
        <Navb/>
        <div className="Signup">
            <h1 id="head">Sign up</h1>
            <form className={classes.root} onSubmit={Main}>
            <TextField autoFocus id="outlined-secondary" label="First Name" variant="outlined" color="secondary" required/>
            <TextField id="outlined-secondary" label="Last Name" variant="outlined" color="secondary" required/><br/>
            <TextField className={classees.root} id="email" label="Email Address" variant="outlined" color="secondary" required/><br/>
            <TextField id="outlined-secondary" label="Emp id" variant="outlined" color="secondary" required/>
            <Form.Group controlId="dob">
            <Form.Row>
            <Col><Form.Label>Select Date of birth</Form.Label></Col>
            <Col><Form.Control type="date" name="dob" placeholder="Date of Birth" value={startDate} onChange={(e)=>setStartDate()}/></Col>
            </Form.Row>
            </Form.Group>
            <TextField id="outlined-secondary" type="Password" label="Password" variant="outlined" color="secondary" required/>
            <TextField id="outlined-secondary" type="Password" label="Confirm Password" variant="outlined" color="secondary" required/>
            <Button type="Submit" value="submit" onClick="./Main">Submit</Button>
            </form>
        </div>
        </>
    );
}
export default Signup;