import React from 'react';
import { connect } from 'react-redux';
import { add, minus, asyncAdd } from '../redux/actions/list'


const list = [
  '一二三四五',
  '上山打老虎',
  '老虎在睡觉',
  '上去就一脚'
]

const List = (props) => (
  <div>
    <ul>
      {list.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    <p>{props.num}</p>
    <button onClick={props.add}>add</button>
    <button onClick={props.minus}>minus</button>
    <button onClick={props.asyncAdd}>asyncAdd</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    num: state.listReducer.num,
  }
};

const mapDispatchToProps = {
  add,
  minus,
  asyncAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(List);