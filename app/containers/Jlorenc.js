import React, { Component, PropTypes} from 'react';
import  Gravatar from '../components/Personal/Gravatar';
import Message  from '../components/Personal/Message';



export default class Jlorenc extends Component{

  render() {
    return (
      <div className='pure-g'>
        <div className='pure-u-1-2' > <Gravatar/><Message /></div>
        <div className='pure-u-1-2' >
<ul className="fa-ul">
  <li>       <i className="fa fa-spin fa-bitbucket icon-2x"></i> Bitbucket </li>
      <li>   <i className="fa fa-github-alt fa-rotate-90"></i> Github</li>
        <li> <i className="fa fa-xing"></i>Xing</li>
         <li><i className="fa  fa-skype"></i>Skype</li>
         <li><i className="fa  fa-twitter-square fa-spin"></i>Twitter</li>
         <li><i className="fa  fa-google-plus"></i>Google+</li>
         <li><i className="fa  fa-spotify"></i>Spotify</li>
         <li><i className="fa  fa-slack fa-pulse"></i>Slack</li>
</ul>
        </div>

      </div >
    );
  }
}
