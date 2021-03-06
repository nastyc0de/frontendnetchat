
import { useContext, useState } from "react";
import { Button, Form, Icon, Input, Modal } from "semantic-ui-react"
import { IChannel } from '../../interfaces/channel';
import {v4 as uuid} from 'uuid';
import ChannelStore from "../../store/ChannelStore";
import { observer } from "mobx-react-lite";


const ModalChannel = () => {
    const channelStore = useContext(ChannelStore);
    const {isModalVisible, showModal, createChannel} = channelStore;
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
        createChannel(channel);
        setChannel(initialChannel);
        showModal(false);
    }
    return (
        <Modal 
            basic
            dimmer='blurring' 
            style={{background:'#4c3c4c'}}
            open={isModalVisible}
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
                        onClick={()=>showModal(false)}
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

export default observer(ModalChannel);
