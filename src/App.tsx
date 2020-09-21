import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import * as actions from './store/bugs';

const store = configureStore();

function App() {
    React.useEffect(() => {

        // store.subscribe(() => {
        //     console.log("Store changed!", store.getState());
        // });

        // store.dispatch(actions.bugAdded({ description: "Bug 1" }));
        // store.dispatch(actions.bugAdded({ description: "Bug 2" }));
        // store.dispatch(actions.bugAdded({ description: "Bug 3" }));

        // store.dispatch(actions.bugResolved({ id: 1 }));

        // store.dispatch(actions.bugRemoved(1));
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Provider>
    );
}

export default App;
