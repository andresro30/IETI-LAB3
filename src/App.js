import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/login';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import TempDrawer from './components/tempDrawer';

class App extends Component {

    constructor(props) {
        console.log("estamos en app");
        super(props);
        
        this.state = {isLoggedIn: false};
        this.handleLogginChange = this.handleLogginChange.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    handleLogginChange() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        });
    };

    logOut(){
        localStorage.clear();
        localStorage.setItem('isLoggedIn',false);
    };

    render() {
        const LoginView = () => (<Login login={this.handleLogginChange}/>);

        const DrawerView = () => (<TempDrawer logOut={this.logOut}/>);

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h3 className="App-title">Lab 3 IETI</h3>
                    </header>
                    <div>
                        {this.state.isLoggedIn ? <Redirect to="/panel" />: <Redirect to="/"/>}
                        <Route exact path="/" component={LoginView}/>
                        <Route exact path="/panel" component={DrawerView}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
