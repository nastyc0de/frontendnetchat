import { Link } from "react-router-dom"
import { Button, Form, Grid, Header, Icon, Message, Segment } from "semantic-ui-react"

const Login = () => {
    return (
        <Grid textAlign="center" verticalAlign="middle" className="app">
         <Grid.Column style={{maxWidth: 450}}>
             <Header as='h1' icon color='violet' textAlign='center'>
                <Icon name='code branch' color='violet'/>
                Login a la App
             </Header>
             <Form size='large'>
                <Segment stacked>
                    <Form.Input
                        fluid
                        name='email'
                        icon='mail'
                        iconPosition='left'
                        placeholder='Email Address'
                        type='email'
                    />
                    <Form.Input
                        fluid
                        name='password'
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password..'
                        type='password'
                    />
                    <Button color='violet' fluid size='large'>Ingresar</Button>

                </Segment>
             </Form>
             <Message>
                 Don't have an account? <Link to='/register'>Register</Link>
             </Message>

         </Grid.Column>   
        </Grid>
    )
}

export default Login
