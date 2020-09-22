import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {
    loadBugs,
    // addBug,
    assignBugToUser,
    resolveBug,
} from './store/bugs';
// import {
//     getUnresolvedBugs,
//     getBugsByUser,
// } from './store/selectors';

const store = configureStore();

function App() {
    React.useEffect(() => {

        // const action = {
        //     type: 'apiCallBegan',
        //     payload: {
        //         url: '/bugs',
        //         onSuccess: 'bugsReceived',
        //         onError: 'apiRequestFailed',
        //     }
        // }
        // store.dispatch(addBug({ description: "Any bug?" }));
        store.dispatch(loadBugs());

        setTimeout(() => store.dispatch(assignBugToUser(1600790454306, 10)), 5000);

        setTimeout(() => store.dispatch(resolveBug(1600790454306)), 10000);

        // setTimeout(() => store.dispatch(loadBugs()), 5000);
        // store.subscribe(() => {
        //     console.log("Store changed!", store.getState());
        // });
        // store.dispatch(userAdded({ name: 'Dheeno' }));
        // store.dispatch(userAdded({ name: 'Kavin' }));

        // store.dispatch(bugAdded({ description: "Bug 1" }));
        // store.dispatch(bugAdded({ description: "Bug 2" }));
        // store.dispatch(bugAdded({ description: "Bug 3" }));

        // store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }))

        // store.dispatch(projectAdded({ name: "Project 1" }));

        // store.dispatch(bugResolved({ id: 1 }));
        // const unresolvedBugs = getUnresolvedBugs(store.getState());
        // console.log(unresolvedBugs);

        // const bugs = getBugsByUser(3)(store.getState());
        // console.log(bugs);

        // store.dispatch(actions.bugRemoved(1));
        // store.dispatch((dispatch, getState) => {
        //     dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] });
        //     console.log(getState());
        // });
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
