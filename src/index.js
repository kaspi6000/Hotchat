/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

/* material-ui */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

/* HC component */
import TextInput from './components/text_input';
import Button from './components/button';
import MainMenu from './components/main_manu';
import Test from './components/test';
import BestTopic from './components/best_topic';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
});

const styles = ({
    contentStyle : {
        boxSizing : 'border-box',
        position : 'relative',
        width : 250,
        overflow : 'hidden',
        margin : '0 auto',
        paddingBottom : 200,
        paddingTop : 100,
        backgroundImage : 'url("images/intro-bg.jpg")',
    },
    menuStyle : {
        backgroundColor : 'rgb(051,255,255)',
        display : 'flex',
        justifyContent : 'space-between',
        boxSizing : 'border-box',
        position : 'fixed',
        width : '100%',
        top : 0,
    },
});

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {

            values : {},
            main : 'Babble',
        };

        this.updateValue = this.updateValue.bind(this);
        this.onClickValue = this.onClickValue.bind(this);
    }

    updateValue ( name, value ) {

        var newValues = Object.assign( {}, this.state.values );

        newValues[ name ] = value;

        this.setState({

            values : newValues

        })

        console.log(newValues);
    }

    onClickValue ( ) {

        var newValues = this.state.values;

        console.log("this : "+this.state.values);
        console.log(newValues);
    }

    onClick(e){
        this.props.onClick();
    }

    render(){

        return(
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <div>
                    <div>
                        <div style = {styles.menuStyle}>
                            <MainMenu />
                        </div>
                        <div style = {styles.contentStyle}>
                            <TextInput
                                update = {this.updateValue}
                            />
                            <Button
                                onClick = {this.onClickValue}
                                label = "Signin"
                                name = "signin"
                            />
                        </div>
                    </div>
                    <div>
                        <BestTopic/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
