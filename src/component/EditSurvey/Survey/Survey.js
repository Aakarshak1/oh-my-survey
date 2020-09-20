import React, { Component } from 'react';

export default class Survey extends Component {
  update() {
    this.props.onUpdate({
      title: this.title.value,
      subTitle: this.subTitle.value,
    });
  }

  render() {
    let { title, subTitle } = this.props;
    return (
      <div className="Survey">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            ref={(input) => {
              this.title = input;
            }}
            onChange={this.update.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">SubTitle</label>
          <textarea
            className="form-control"
            value={subTitle}
            ref={(input) => {
              this.subTitle = input;
            }}
            onChange={this.update.bind(this)}
          ></textarea>
        </div>
      </div>
    );
  }
}
