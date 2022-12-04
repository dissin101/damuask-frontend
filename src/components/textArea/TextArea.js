import React, { useState, useEffect } from 'react';
import './TextArea.css';
import { useGetMedFileDataMutation } from '../../store/medFileData/medFileDataService';
import { useSelector, useDispatch } from 'react-redux'
import { setMedFileData } from '../../store/medFileData/medFileData.slice';
import { setCurrentPage } from '../../store/currentPage/currentPage.slice';

const TextArea = () => {
  const [parseText, { isLoading, error, data }] = useGetMedFileDataMutation();

  const [textAreaValue, setTextAreaValue] = useState("");

  const medFile = useSelector((state) => state.medFile);
  const currentPage = useSelector((state) => state.currentPage.data);
  const dispatch = useDispatch();

  // Обработка полученных данных
  useEffect(() => {
    if (data) {
      dispatch(setMedFileData(data));
    }
  }, [dispatch, data]);

  // При изменении текста в textarea (отправка запроса)
  useEffect(() => {
    parseText({
      sectionCode: currentPage,
      textAreaValue
    });
  }, [parseText, textAreaValue, currentPage]);

  const handleChangeText = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <textarea
      placeholder='Введите текст'
      className="textarea"
      onChange={handleChangeText}
      value={textAreaValue}
    ></textarea>
  );
};

export default TextArea;