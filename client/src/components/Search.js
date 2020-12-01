import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            search: null,
        }
    }

    handleFormChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value,
        })
    }

    
    render(){
        return(
            <>
                <form>
                    <input type='text' name='search' value={this.state.search} onChange={this.handleFormChange} placeholder='Zipcode or Address'/>
                    <input type='submit' value='Search' />
                </form>
            </>
        )
    }
}

export default Search;