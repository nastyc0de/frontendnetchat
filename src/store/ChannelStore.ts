import {observable} from 'mobx';
import { createContext } from 'react';

class ChannelStore {
    @observable title = 'Hola desde mobx'
}
export default createContext(new ChannelStore());