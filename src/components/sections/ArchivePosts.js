import React from 'react';

export default function Topic(props) {
  return (
    <React.Fragment>
      <div className='flexwrap small-reverse'>
        <img
          className='archives-left'
          src={props.post.download_url}
          alt={props.post.author}
        />
        <div className='archives-right capitalize'>{props.post.author}</div>
      </div>
    </React.Fragment>
  );
}
