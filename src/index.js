/* React */
import React from 'react';
import ReactDOM from 'react-dom';
/* material-ui */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
/* HC component */
import Main from './components/main';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
});

class App extends React.Component{
    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <Main />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
