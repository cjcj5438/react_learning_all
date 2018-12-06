import React from "react"
import CommentList from "./CommentList"
import CommentForm from "./Commentform"
import $  from 'jquery'

class CommentBox extends React.Component {
  constructor(props){
    super(props)
    this.state={data:[]};
    $.ajax({
      url:this.props.url,
      dataType:"json",
      cache:false,//缓存
      success:comments=>{
        this.setState({data:comments})
      },
      error:(xhr,status,error)=>{
        console.log(error)
      }
    })
  }
  render() {
    return (<div className="ui comments">
      <h1>评论</h1>
      <div className="ui divider"></div>
      <CommentList ddd={this.state.data}/>
      <CommentForm/>
    </div>)
  }
}

export {CommentBox as default}
