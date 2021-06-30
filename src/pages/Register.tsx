import { Link } from "react-router-dom"
import { Button, Form, Grid, Header, Icon, Message, Segment } from "semantic-ui-react"
import { isConditionalExpression } from "typescript"

const Register = () => {
    return (
        <Grid textAlign="center" verticalAlign="middle" className="app">
         <Grid.Column style={{maxWidth: 450}}>
             <Header as='h1' icon color='orange' textAlign='center'>
                <Icon name='puzzle piece' color='orange'/>
                Registrar a la App
             </Header>
             <Form size='large'>
                <Segment stacked>
                    <Form.Input
                        fluid
                        name='username'
                        icon='user'
                        iconPosition='left'
                        placeholder='Username'
                        type='text'
                    />
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
                        placeholder='Password'
                        type='password'
                    />
                    <Form.Input
                        fluid
                        name='passwordConfirmation'
                        icon='repeat'
                        iconPosition='left'
                        placeholder='Password Confirmation'
                        type='password'
                    />
                    <Button color='orange' fluid size='large'>Agregar</Button>

                </Segment>
             </Form>
             <Message>
                 Already user? <Link to='/login'>Login</Link>
             </Message>

         </Grid.Column>   
        </Grid>
    )
}

export default Register
