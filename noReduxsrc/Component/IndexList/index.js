import React from 'react';
import {Link} from 'react-router';
import {UserModel,ArticleModel} from '../dataModel';
import '../../static/css/style.css'

import {dateDiff} from '../../Tools'

let Styles = {
    indexList:{
        paddingRight:'0.75rem',
        marginBottom:'0.2rem',
        borderTop:'1px solid #dfdfdf',
        borderBottom:'1px solid #dfdfdf',
        background:"#fff",
        paddingLeft:"0.75rem",
        paddingBottom:"0.3rem"
    },
    h4Style:{
        margin:"0.3rem 0",
        color:'#259',
        fontSize:'16px'
    },
    pStyle:{
        margin:"0.3rem 0",
        fontSize:"15px"
    },
    listBlock:{
      margin:0,
    },
    userTitle:{
        dispaly:'inline-blcok',
    }
}

class IndexList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            defaultTop:null,
        }
    }
    componentDidMount(){
        console.log("0-0-");
        this.fetchData();
        console.log("0909");
    }
    fetchData(){
        console.log("fetchdata");
        ArticleModel.fetchList('',(data)=>{
            this.setState({
                list:data,
            })
        },(err)=>{
            console.log("err");
        })
    }
      //限制字数
    wordControl(word){
        if(word.length>65){
           word = word.substring(0,65)+' ...';
        }
        return word
    }
    //列表
    indexList(){
        let _this = this;
        let list = this.state.list;
        return list.map(function(item,index){
            return(
                <li className="" style={Styles.indexList} key={item._id}>
                    <Link to={'/indexList/'+item._id} style={{display:'block'}}>
                    <div className="list">
                        <div className="" style={{paddingTop:'0.4rem'}}>
                            <div style={{display:'inline-block',verticalAlign:'top',height:'2rem'}}>
                                <img src={item.user.avatar} style={{marginRight:'0.3rem',height:'1.7rem',display:'inline-block'}}  alt=""/>
                            </div>
                            <div style={{display:'inline-block',verticalAlign:'top',height:'2rem'}}>
                                <div style={{fontSize:'14px',fontWeight:600}}>{item.user.username}</div>
                                <div style={{fontSize:'12px'}}><span className="icon icon-clock"> </span> {dateDiff(item.createAt)}</div>
                            </div>

                        </div>
                        <div className=""><h4 style={Styles.h4Style}>{item.title}</h4></div>
                        <div className=""><p style={Styles.pStyle}>{_this.wordControl(item.content)}</p></div>
                    </div>
                    </Link>
                    <div style={{display:'block',width:'100%',fontSize:'14px'}}>
                        <span className="icon icon-star"  data-articleId={item._id}> {item.star.length}</span>
                        <span className="icon icon-message"> {item.commentNum}</span>
                    </div>
                </li>
            )
        })
    }
    render(){
        return(
            <div data-log='log'>
                <main className="page page-current">
                    <div className="outerScroller" id="outerScroller" ref="outerScroller">
                        <div className="pullToRefreshBox" id="pullToRefreshBox" ref="pullToRefreshBox">
                            <div className="preloader" id="" ref="preloader"></div>
                            <div className="pullToRefreshArrow" id="" ref="pullToRefreshArrow"></div>
                        </div>
                        <ul style={{background:"#eee"}} className="scroll" ref="scrollList">
                            {this.indexList()}
                        </ul>
                    </div>
                </main>
                <div className="panel-overlay"></div>
            </div>
        )
    }


}


module.exports = IndexList
























