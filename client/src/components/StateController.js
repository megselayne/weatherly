import React, {Component} from 'react';
import Search from './Search';
import Home from './Home';
import { Redirect } from 'react-router-dom';

class StateController extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoaded: false,
            currentPage: props.currentPage,
            fireRedirect: false,
            redirectPath: null,
        }
    }

    componentDidMount = () => {
        if(this.state.currentPage === 'home'){
            this.setState({
                isLoaded: true,
            })
        }
    }

    decideWhichToRender = () => {
        switch(this.state.currentPage){
            case 'home':
                return <Home/>
        }
    }
    render(){
        return(
            <>
            {this.state.isLoaded ? this.decideWhichToRender()  : <h1>Loading...</h1>}
            {this.state.fireRedirect && <Redirect push to={this.state.redirectPath}/>}
            </>
        )
    }
}

export default StateController;