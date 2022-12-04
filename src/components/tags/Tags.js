import React, { useEffect } from 'react'
import './Tags.css';
import Tag from '../tag/Tag';
import { useSelector } from 'react-redux'

function Tags(props) {

  const {data} = useSelector((state) => state.phrasesData);

  // const temp = data?.map((el) => el?.phraseList.map((subel) => subel ))

  const phraseList = data && data.length && data[0] && data[0].phraseList;

  // console.log(phraseList);

  // console.log(temp)

  return (
    <div className='tags'>
      {/* {phrasesArray.map((phrase, index) => {
        return <Phrase phrase={phrase} key={index} />;
      })} */}
      {/* {phrasesData?.lenght && phrasesData[0]?.phraseList?.map((item, index) => {
        // console.log(item);
        return <Tag data={item} key={index} />
      })} */}
      {/* <Tag /> */}
      {/* {temp?.map((el) => {
        
        return <Tag data={el}/>;
      })} */}
      {
        phraseList?.map((item) => {
          return <Tag data={item}/>;
        })
      }
    </div>
  );
}

export default Tags;