import React from 'react';
import TextField from 'material-ui/TextField';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : ''
        };
    }
    render(){
        return(
            <div>
                <TextField
                    name = "User-Email"
                    placeholder = "User-Email"
                />
            </div>
        );
    }
}

export default Main;
