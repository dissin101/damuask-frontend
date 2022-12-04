import React from 'react'
import './Tags.css';
import Tag from '../tag/Tag';

function Tags(props) {

  return (
    <div className='tags'>
      {/* {phrasesArray.map((phrase, index) => {
        return <Phrase phrase={phrase} key={index} />;
      })} */}
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
      <Tag />
    </div>
  );
}

export default Tags;