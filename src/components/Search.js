import React from 'react'


class Search extends React.Component {

    render() {
        return (
            <div className='search-container'>
                <input placeholder='search todo item...' name='searchTerm' onChange={this.props.handleChange} />
            </div>
        )
    }

}

export default Search;


