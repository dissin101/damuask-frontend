import React from 'react'
import Stack from 'react-bootstrap/Stack';
import TextArea from '../textArea/TextArea';
import Tags from '../tags/Tags';
import Button from 'react-bootstrap/Button';


const SectionOfFile = () => {
  
  return (
    <Stack className="section-of-file col-md-8 mx-auto" gap={4}>
      <TextArea />
      <Tags />
      <Button variant="success" size="lg">Сохранить</Button>
    </Stack>
  );
}

export default SectionOfFile;