import React from "react";
import {render} from "react-dom";
import {Router, Route, hashHistory, Link, IndexRoute, Redirect, browserHistory} from 'react-router';
import {IndexList} from './Config/route-config';

const rootRoute = {
  component:require('./Component/main').dedault,
  childRoutes:[{
    path:'/',
    indexRoute:{
      getComponent(nextState,cb){
        require.ensure([],(require)=>{
          cb(null,require('./Component/IndexList'))
        })
      }
    },
    childRoutes:[
      IndexList
    ]
  }]
}


let root = document.getElementById('app');

render(<Router routes={rootRoute} history={hashHistory} />, root);













































