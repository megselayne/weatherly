import React, {Component} from 'react';


class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <>
            <div className='splash'>
                <h1>Weatherly</h1>
                <h4>Weather at Your Fingertips</h4>
            </div>
            </>
        )
    }
}

export default Home;