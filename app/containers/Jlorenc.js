import React, { Component, PropTypes} from 'react'
import  Gravatar from '../components/Personal/Gravatar'
import Message  from '../components/Personal/Message'
import Code  from '../components/Code/Code'



export default class Jlorenc extends Component{

  render() {
    return (
      <div className='pure-g'>
      <Gravatar/><Message /><Code />
      </div >
    );
  }
}
