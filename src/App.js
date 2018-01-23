import React from "react"
import {
  Router,
  Route
} from 'react-router-dom';
import { createStore } from 'redux';
import Trash from './components/Trash';
import Spam from './components/Spam';
import Inbox from './components/Inbox';
import storeApp from './actions/actionApp';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import mailData from './reducers/mailData';
import { rootReducer }  from './reducers/index';




const store = createStore(rootReducer);

const history = createBrowserHistory()

const storeHistory = syncHistoryWithStore(history, store);

export const routerMain = (

  <Provider store={store} history={storeHistory}>
      <Router store={store} history={storeHistory}>
          <div className="navHeader">
            <Route path="/" component={storeApp} store={store} />
              <Route exact path="/" component={Inbox} />
              <Route exact path="/Inbox" component={Inbox}  />
              <Route exact path="/Trash" component={Trash} />
              <Route exact path="/Spam" component={Spam} />

         </div>
      </Router>
  </Provider>


)
