import { useEffect, useState } from 'react'
import { Menu, Icon} from 'semantic-ui-react';
import {ApiChannels} from '../../api/agent';
import { IChannel } from '../../interfaces/channel';
import ModalChannel from '../Modal/ModalChannel';


const Channels = () => {
    const [channels, setChannels] = useState<IChannel[]> ([]);
    const [modal, setModal] = useState(false);
    
    const handleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
       ApiChannels.list().then((response) =>{
           setChannels(response)
       })

    }, [])

    const handleCreateChannel = (channel : IChannel) => {
        ApiChannels.create(channel).then(() => 
            setChannels([
                ...channels,
                channel
            ]))
    }
    return (
        <>
        <Menu.Menu style={{paddingBottom: '2em'}}>
            <Menu.Item
            >
                <span> <Icon name='exchange'/>CHANNELS </span> ({channels.length})
                <Icon
                    name='add'
                    link
                    // floated='right' 
                    onClick={handleModal}
                />
            </Menu.Item>
            {channels.map((channel:IChannel) => (
                <Menu.Item key={channel.id}># {channel.name}</Menu.Item>
            ))}
        </Menu.Menu>
        <ModalChannel
            modal={modal}
            handleModal={handleModal}
            handleCreateChannel ={handleCreateChannel}
        />
        </>
    )
}

export default Channels
