"use strict";
import React from "react"

class Commentform extends React.Component {
  render() {
    return (
      <form action="" className="ui reply form">
        <div className="field"><input type="text" placeholder="姓名"/></div>
        <div className="field"><input type="text" placeholder="评论"/></div>
        <button type="submit" className="ui blue button">
          添加评论
        </button>
      </form>
    )
  }
}

export default Commentform;
