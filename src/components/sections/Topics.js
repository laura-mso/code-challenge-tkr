import React from 'react';
import Topic from './Topic';

export default function Topics(props) {
  return (
    <React.Fragment>
      {/* I know we should be careful with using index, but for simplicity I am using it here https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318 */}
      {props.topics.map((topic, index) => (
        <Topic key={index} topic={topic} />
      ))}
    </React.Fragment>
  );
}
