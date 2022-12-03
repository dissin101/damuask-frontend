import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import useDebounce from '../../hooks/debounce'

const Patients = () => {
  
  /**
   * Заглушка под API
   * @type {[{fio: string, iin: string},{fio: string, iin: string},{fio: string, iin: string},{fio: string, iin: string},{fio: string, iin: string}]}
   */
  const data = [
    {
      fio: 'Кириллов Кирилл',
      iin: '980222348738'
    },
    {
      fio: 'Иванов Иван',
      iin: '920222348738'
    },
    {
      fio: 'Сергеев Сергей',
      iin: '910222348738'
    },
    {
      fio: 'Иванов Иван',
      iin: '920222348738'
    },
    {
      fio: 'Сергеев Сергей',
      iin: '910222348738'
    },
  ]
  
  const [searchIIN, setSearchIIN] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(searchIIN, 500)
  
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        
        const result = data.filter((d) => d.iin.includes(debouncedSearchTerm))
        
        setIsSearching(false)
        
        setResults(result)
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm]
  )
  
  return (
    <Container className={'mt-4'}>
      <Row className={'justify-content-center'}>
        <Col sm={12} md={8}>
          <Card className={'p-4 pt-4 pb-4'}>
            <h5>Каталог карточек пациента</h5>
            <FloatingLabel
              controlId="floatingInput"
              label="Поиск по ИИН"
              className="mt-3 mb-3"
            >
              <Form.Control type="number" placeholder="000000000000" onChange={e => setSearchIIN(e.target.value)}/>
            </FloatingLabel>
            <div className={'mt-2'}>
              {isSearching && <div>Поиск...</div>}
              {
                results.length > 0 ?
                  results.map((data) => (
                    <Card className={'p-2 d-flex mb-2'} style={{cursor: 'pointer'}}>
                      <div>
                        <span className={'text-uppercase text-secondary'}>ИИН:</span>{' '}
                        <span>{data.iin}</span>
                      </div>
                      <div>
                        <span className={'text-uppercase text-secondary'}>ФИО:</span>{' '}
                        <span>{data.fio}</span>
                      </div>
                    </Card>
                  ))
                  :
                  <div>
                    {debouncedSearchTerm.length > 0 &&
                      <p className={'text-center'}>Пациент с таким ИИН не найден</p>}
                    <div className={'d-flex justify-content-center'}>
                      <Button variant={'success'}>Добавить пациента</Button>
                    </div>
                  </div>
              }
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Patients