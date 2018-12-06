"use strict";
import "semantic-ui/semantic.min.css!"
import React from 'react'
import ReactDOM from "react-dom"
import CommentBox from "./comment/commentBox"

let comments=[
  {"author":"chenjing","date":"2分钟前","text":"天气不错啊"},
  {"author":"小雪","date":"5分钟前","text":"出去玩啊"},
]
  /*页面传值是取键值的 并不是取 comments 这个对象的
  * 其他组建取值是在 this.*/
ReactDOM.render(
  <CommentBox d={comments}/>,
  document.getElementById("app")
)
