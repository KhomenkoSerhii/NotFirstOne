import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'
import { HashRouter, Route } from 'react-router-dom';
import MainPageComponent from './pages/MainPage';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import HeaderComponent from './Components/Header';
import Login from './Components/Login';
import './index.css';
import 'antd/dist/antd.css';


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <HeaderComponent>
        <Route path='/' component={MainPageComponent} exact />
        <Route path='/posts/:userId?' component={Posts} />
        <Route path='/comments/:postId?' component={Comments} />
        <Route path="/login" component={Login} />
      </HeaderComponent>
    </HashRouter>
  </Provider>,

  document.getElementById('root')
);
