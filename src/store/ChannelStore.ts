import { IChannel } from './../interfaces/channel';
import {action, configure, makeObservable, observable, runInAction} from 'mobx';
import { createContext } from 'react';
import { ApiChannels } from '../api/agent';

configure({enforceActions: 'always'})
class ChannelStore {
    @observable channels: IChannel[] = []
    @observable isModalVisible: boolean = false
    constructor() {
        makeObservable(this)
    }
    @action loadChannels = async() => {
        try {
            var response = await ApiChannels.list()
            runInAction(() => 
                response.forEach((channel) => this.channels.push(channel))
            )
        } 
        catch (error) {
            console.log(error)
        }
    }
    @action showModal = (show: boolean) => {
        this.isModalVisible = show
    }
    @action createChannel = async (channel : IChannel) => {
        try {
            await ApiChannels.create(channel)
            
            runInAction(() =>
                this.channels.push(channel)
            )
        } catch (error) {
            console.log(error)
        }
    }
}
export default createContext(new ChannelStore());