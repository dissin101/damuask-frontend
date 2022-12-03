import React from 'react'
import {
  Card,
  Col,
  Container, InputGroup,
  Row,
  Form, Button
} from 'react-bootstrap'

/**
 * Страница авторизации
 * @returns {JSX.Element}
 * @constructor
 */
const Auth = () => {
  return (
    <Container>
      <Row className={'justify-content-center'}
           style={{ minHeight: '100vh' }}
      >
        <Col className={'mt-auto mb-auto'}
             md={6}
             lg={4}
             xl={3}
        >
          <Card className={'pt-4 pb-4 p-2'}>
            <h5 className={'text-center'}>Авторизация</h5>
            <InputGroup size="md" className="mt-2 mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder={'ИИН'}
              />
            </InputGroup>
            <InputGroup size="md" className="mt-2 mb-3">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder={'******'}
              />
            </InputGroup>
            <Button variant="primary">Войти</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth