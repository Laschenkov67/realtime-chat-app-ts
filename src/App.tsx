import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={Join}/>
                    <Route path="/chat" component={Chat}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
