import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import useDebounce from '../../hooks/debounce'
import { useSearchCardsMutation } from '../../store/cards/CardsService'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Patients = () => {
  
  const navigate = useNavigate()
  
  const [search, { isLoading, error, data }] = useSearchCardsMutation()
  
  const [searchIIN, setSearchIIN] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(searchIIN, 500)
  
  const isAuth = Boolean(useSelector((state) => state.auth.user))
  
  useEffect(() => {
    if (!isAuth){
      navigate('/auth')
    }
  }, [isAuth])
  
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(isLoading)
        
        search({ searchName: debouncedSearchTerm })
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm]
  )
  
  useEffect(() => {
    setResults(data)
  }, [data])
  
  const goToMedFileHandler = (iin) => {
    
    const path = iin ? `/med-file/${iin}` : '/med-file'
    
    navigate(path)
  }
  
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
                results && results.length > 0 ?
                  results.map((data) => (
                    <Card
                      className={'p-2 d-flex mb-2'}
                      style={{ cursor: 'pointer' }}
                      onClick={() => goToMedFileHandler(data.iin)}
                    >
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
                      <Button variant={'success'} onClick={() => goToMedFileHandler()}>Добавить пациента</Button>
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