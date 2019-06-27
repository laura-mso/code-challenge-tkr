import React from 'react';
import CountUp from 'react-countup';

export default function Topic(props) {
  return (
    <div className='topics-lines'>
      <div className='flex-section topics-left'>
        <div className='topics'>{props.topic[0]}</div>
        {/* Task: In the "Topics" tab, the number of topics after the headline should count up from zero to a random number of posts animated with a nice transition */}
        <div className='count'>
          <CountUp start={0} end={props.topic[1]} delay={1} duration={4} />{' '}
          Posts
        </div>
      </div>
      <hr className='topics-separator' />
    </div>
  );
}
