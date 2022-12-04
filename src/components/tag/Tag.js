import React from 'react'
import './Tag.css';
import Badge from 'react-bootstrap/Badge';

function Tag({ data }) {

  let tagText = data?.suggest && data?.suggest?.length && data?.suggest[0];
  if (!tagText) tagText = '';
  
  return (
    <Badge bg='success' bsPrefix={tagText && 'tag'}>{tagText}</Badge>
  );
};

export default Tag;