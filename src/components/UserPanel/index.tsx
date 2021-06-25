import React from 'react'
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react';
// #4c3c4c
const index = () => {
    return (
        <Grid style ={{background: '#4c3c4c', margin: 0}}>
            <Grid.Column>
                <Grid.Row style={{padding:'1.2em', margin:0}}>
                    <Header inverted floated='left' as='h2'>
                        <Icon name="code"/>
                        <Header.Content>NetChat</Header.Content>
                    </Header>
                </Grid.Row>
            </Grid.Column>
            <Header style={{padding:'o.25em'}} as='h4' inverted>
                <Dropdown 
                    trigger={<span>User</span>}
                    // options={}    
                >
                    
                    </Dropdown>
            </Header>
        </Grid>
    )
}

export default index
