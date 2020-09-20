import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../../../store/actions/rootAction';

// const TextEditor = (props) => {
//   const dispatch = useDispatch();
//   const titleRef = useRef(null);
//   const placeHolderRef = useRef(null);
class TextEditor extends Component {
  update() {
    //TODO debouce here
    // const update = () => {
    // console.log(inputEle.current.value);
    var value = {
      title: this.title_node.value,
      // title: titleRef.current.value,
      // placeholder: placeHolderRef.current.value,
      placeholder: this.place_holder_node.value,
    };
    this.props.updateQuestion(this.props._id, value);
    // dispatch(action.updateQuestion(props._id, value));
  }

  render() {
    const { title, placeholder } = this.props;
    // const { title, placeholder } = props;
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Field Label</label>
            <input
              type="text"
              className="form-control input-sm"
              value={title}
              // ref={titleRef}
              ref={(node) => {
                this.title_node = node;
              }}
              onChange={() => this.update()}
              // onChange={() => update()}
            />
          </div>
          <div className="form-group">
            <label>Placeholder</label>
            <input
              type="text"
              className="form-control input-sm"
              value={placeholder}
              // ref={placeHolderRef}
              ref={(node) => {
                this.place_holder_node = node;
              }}
              onChange={() => this.update()}
              // onChange={() => update()}
            />
          </div>
        </form>
      </div>
    );
  }
}

TextEditor.propTypes = {
  title: PropTypes.string.isRequired,
  updateQuestion: PropTypes.func.isRequired,
};

export default TextEditor;
