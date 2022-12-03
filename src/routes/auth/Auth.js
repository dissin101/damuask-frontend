import React from 'react'
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Row,
  Form,
  Button,
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
          <Card className={'p-4'}>
            <h4 className={'text-center'}>Авторизация</h4>
            <FloatingLabel
              controlId="floatingInput"
              label="ИИН"
              className="mt-3 mb-3"
            >
              <Form.Control type="string" placeholder="000000000000" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Пароль"
              className="mt-3 mb-4"
            >
              <Form.Control type="string" placeholder="******" />
            </FloatingLabel>
            <Button size={'lg'} variant="primary">Войти</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth