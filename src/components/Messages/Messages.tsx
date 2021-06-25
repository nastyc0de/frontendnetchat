import React from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import MessagesHeader from './MessagesHeader';
import MessagesForm from './MessagesForm';

const Messages = () => {
    return (
        <>
            <MessagesHeader/>
            <Segment>
                <Comment.Group>
                    
                </Comment.Group>
                <MessagesForm/>
            </Segment>   
        </>
    )
}

export default Messages
