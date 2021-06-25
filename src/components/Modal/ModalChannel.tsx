
import { useState } from "react";
import { Button, Form, Icon, Input, Modal } from "semantic-ui-react"
import { IChannel } from '../../interfaces/channel';
import {v4 as uuid} from 'uuid';

interface IModal{
    modal: boolean,
    handleModal: () => void
    handleCreateChannel: (channel:IChannel) => void
}
const ModalChannel = ({modal, handleModal, handleCreateChannel}: IModal) => {
    const initialChannel: IChannel = {
        id:'',
        name:'',
        description:''
    }
    const [channel, setChannel] = useState<IChannel>(initialChannel);
    
    const handleInputChange = (e:any) => {
      setChannel({
          ...channel,
          id:uuid(), 
          [e.target.name]: e.target.value
      })  
    }
    const handleSubmit = () => {
        console.log(channel);
        handleCreateChannel(channel);
        setChannel(initialChannel);
        handleModal();
    }
    return (
        <Modal 
            basic
            dimmer='blurring' 
            style={{background:'#4c3c4c'}}
            open={modal}
        >
            <Modal.Header>Add Channel</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <Input 
                            fluid 
                            label='Channel Name' 
                            onChange={handleInputChange} 
                            name='name' 
                            value={channel.name}/>
                    </Form.Field>
                    <Form.Field>
                        <Input 
                            fluid 
                            label='Channel Description' 
                            onChange={handleInputChange}  
                            name='description' 
                            value={channel.description}/>
                    </Form.Field>
                </Form>
                
            </Modal.Content>
                <Modal.Actions>
                    <Button 
                        basic 
                        color='red' 
                        inverted
                        onClick={handleModal}
                    >
                        <Icon name='remove'/> Cancel
                    </Button>
                    <Button 
                        basic 
                        inverted
                        color='green' 
                        onClick={()=> handleSubmit()}
                    >
                        <Icon name='add circle'/> Add
                    </Button>
                </Modal.Actions>
        </Modal>
    )
}

export default ModalChannel
