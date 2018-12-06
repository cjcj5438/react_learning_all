"use strict";
import React from "react"
import Comment from "./Comment"

class CommentList extends React.Component {
  /*一级一级之前的;取值只能是父级 props  下取值;*/
  render() {
    let commentNodes = this.props.ddd.map((comment,index) => {
      return (
        <Comment key={index} author={comment.author} date={comment.date} children={comment.text}></Comment>
      )
    })
    return (
      <div>
        {commentNodes}
        {/*<Comment author="chenjing" date="5分钟前" children="天气不错啊"/>*/}
        {/*<Comment author="周星驰" date="15分钟前" children="天气不错啊"/>*/}
      </div>
    )
  }
}

export default CommentList;
