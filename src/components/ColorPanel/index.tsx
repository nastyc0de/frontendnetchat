import { Menu, Sidebar, Button, Divider } from 'semantic-ui-react';

const index = () => {
    return (
        <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            vertical
            visible
            width='very thin'
        >
            <Divider/>
            <Button
                icon='add'
                side='small'
                color='blue'
            />
        </Sidebar>
        
    )
}

export default index
