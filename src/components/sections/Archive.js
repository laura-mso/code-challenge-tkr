import React from 'react';
import ArchivePosts from './ArchivePosts';

export default function Topics(props) {
  return (
    <React.Fragment>
      {/* Task: In the second tab "Archives" please add several rows containing on the left a picture and on the right some random text */}
      <div className='flexwrap subheading'>
        <div className='archives-left'>Image</div>
        <div>Author</div>
      </div>
      {props.posts.map(post => (
        <ArchivePosts key={post.id} post={post} />
      ))}
    </React.Fragment>
  );
}
