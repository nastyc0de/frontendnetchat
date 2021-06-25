import { Header, Icon, Segment } from "semantic-ui-react"
import SearchInput from "./SearchInput"

const MessagesHeader = () => {
    return (
        <Segment clearing>
            <SearchInput/>
            <Header
                fluid="true"
                as='h2'
                floated='left'
                style={{marginBotton: 0}}
            >
                <span>
                    Channel
                    <Icon name={'star outline'} color='black'/>
                </span>
                <Header.Subheader>2 Users</Header.Subheader>
            </Header>
        </Segment>
    )
}

export default MessagesHeader
