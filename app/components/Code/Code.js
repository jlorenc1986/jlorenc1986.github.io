import React, { PropTypes } from 'react'

const Code = React.createClass({
  render () {
    return (
      <div className='pure-u-1-2 pure-u-md-3-4' >
<ul className="fa-ul">
<li>       <i className="fa fa-spin fa-bitbucket fa-lg "></i> Bitbucket </li>
    <li>   <i className="fa fa-github-alt fa-rotate-90"></i> Github</li>
      <li> <i className="fa fa-xing"></i>Xing</li>
       <li><i className="fa  fa-skype"></i>Skype</li>
       <li><i className="fa  fa-twitter-square fa-spin"></i>Twitter</li>
       <li><i className="fa  fa-google-plus"></i>Google+</li>
       <li><i className="fa  fa-spotify"></i>Spotify</li>
       <li><i className="fa  fa-slack fa-pulse"></i>Slack</li>
</ul>
      </div>
    )
  }
})

export default Code