import { Header, Input } from "semantic-ui-react"

const SearchInput = () => {
    return (
        <Header floated='right'>
            <Input
                size='mini'
                icon='search'
                name='searchInput'
                placeholder = 'Search Messages'
            />
        </Header>
    )
}

export default SearchInput
