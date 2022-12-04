import React, { useState, useEffect } from 'react';
import './TextArea.css';
import Tags from '../tags/Tags';
import { useGetPhrasesDataMutation } from '../../store/phrasesData/phrasesDataService';
import { useSelector, useDispatch } from 'react-redux'
import { setPhrasesData } from '../../store/phrasesData/phrasesData.slice';
import { setCurrentPage } from '../../store/currentPage/currentPage.slice';

const TextArea = () => {
  const [getPhrasesData, { isLoading, error, data }] = useGetPhrasesDataMutation();
  const [textAreaValue, setTextAreaValue] = useState("");
  const currentPage = useSelector((state) => state.currentPage.data);
  const dispatch = useDispatch();

  // Обработка полученных данных
  useEffect(() => {
    // console.log(data);
    if (data) {
      dispatch(setPhrasesData(data));
    }
  }, [dispatch, data]);

  // При изменении текста в textarea (отправка запроса)
  useEffect(() => {
    getPhrasesData([{
      sectionCode: currentPage,
      text: textAreaValue
    }]);
  }, [getPhrasesData, textAreaValue, currentPage]);

  const handleChangeText = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <textarea
      placeholder="Введите текст"
      className="textarea"
      onChange={handleChangeText}
      value={textAreaValue}
    ></textarea>
  );
};

export default TextArea;