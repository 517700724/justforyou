import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute,Redirect,browserHistory} from 'react-router';






const IndexList  = {
    path:'indexlist',
    getComponent(nextState,cb){
        require.ensure([],(require)=>{
            return cb(null,require('../Component/IndexList'))
        },'indexList')
    }
}

module.exports = {
    IndexList:IndexList
};



// import Create from '../Component/Create';
// import Me from '../Component/Me';
// import IndexList from '../Component/IndexList'
// import App from '../Component/main'
// import Login from '../Component/Login'
// import ArticleDetail from '../Component/articleDetail/'
// import MyArticle from '../Component/Me/myArticle'
//
// //原始路由配置
// class RouteConfig extends React.Component{
//     render(){
//         return(
//             <Router history={hashHistory}>
//                 <Route path="/" component={App}>
//                     <IndexRoute  component={IndexList}/>
//                     <Route name="indexlist" path="/indexlist" component={IndexList}/>
//                     <Route name="articleDetail" path="/indexList/:id" component={ArticleDetail}/>
//                     <Route path="/create" component={Create}/>
//                     <Route path="/create/:id" component={Create}/>
//                     <Route path="/me" component={Me}/>
//                     {/*<Route path="/me/avatar" component={Avatar}/>*/}
//                     <Route path="/login" component={Login} />
//                     <Route path="/myArticle" component={MyArticle} />
//                 </Route>
//             </Router>
//         )
//     }
// }
// export default RouteConfig;

