import { observer } from 'mobx-react-lite';
import { useContext, useEffect} from 'react'
import { Menu, Icon} from 'semantic-ui-react';
import { IChannel } from '../../interfaces/channel';
import ChannelStore from '../../store/ChannelStore';
import ModalChannel from '../Modal/ModalChannel';


const Channels = () => {
    const channelStore = useContext(ChannelStore);
    const {channels, showModal} = channelStore;


    useEffect(() => {
     channelStore.loadChannels()
    }, [channelStore])

   
    return (
        <>
        <Menu.Menu style={{paddingBottom: '2em'}}>
            <Menu.Item
            >
                <span> <Icon name='exchange'/>CHANNELS </span> ({channels.length})
                <Icon
                    name='add'
                    link 
                    onClick={() => showModal(true)}
                />
            </Menu.Item>
            {channels.map((channel:IChannel) => (
                <Menu.Item key={channel.id}># {channel.name}</Menu.Item>
            ))}
        </Menu.Menu>
        <ModalChannel/>
        </>
    )
}

export default observer(Channels)
