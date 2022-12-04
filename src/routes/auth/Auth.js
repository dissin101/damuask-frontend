import React, { useEffect, useState } from 'react'
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Row,
  Form,
  Button,
  Alert,
} from 'react-bootstrap'
import { useFormik } from 'formik'
import { useGetUserInfoMutation, useLoginUserMutation, useRegisterUserMutation } from '../../store/auth/authService'
import { setInLocalStorage } from '../../utils/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../../store/auth/authSlice'
import { useNavigate } from 'react-router-dom'


/**
 * Страница авторизации
 * @returns {JSX.Element}
 * @constructor
 */
const Auth = () => {
  
  const [formType, setFormType] = useState('login')
  const [login, {
    isLoading: isLoadingLogin,
    error: errorLogin,
    data: loginData
  }] = useLoginUserMutation()
  const [register, {
    isLoading: isLoadingRegister,
    error: errorRegister,
    data: registerData
  }] = useRegisterUserMutation()
  const [getInfo, {
    isLoading: isLoadingGetInfo,
    error: errorGetInfo,
    data: getInfoData
  }] = useGetUserInfoMutation()
  
  const error = errorLogin || errorRegister || errorGetInfo
  
  const dispatch = useDispatch()
  
  const isAuth = Boolean(useSelector((state) => state.auth.user))
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isAuth){
      navigate('/')
    }
  }, [isAuth])
  
  useEffect(() => {
    if (getInfoData){
      dispatch(setUserData(getInfoData))
    }
  }, [getInfoData])
  
  useEffect(() => {
    if (loginData){
      const {user_id} = loginData
      
      setInLocalStorage('token', user_id)
      
     getInfo(user_id)
    }
  }, [loginData])
  
  useEffect(() => {
    if (registerData) {
      window.location.reload()
    }
  }, [registerData])
  
  const formik = useFormik({
    initialValues: {
      iin: '',
      password: '',
      email: '',
      roles: ['doctor']
    },
    onSubmit: (values) => {
      if (formType === 'login') {
        
        const form = {
          username: values.iin,
          password: values.password
        }
        
        login(form)
      } else {
        
        const form = {
          username: values.iin,
          password: values.password,
          email: values.email,
          role: values.roles
        }
        
        register(form)
      }
    }
  })
  
  const toggleFormTypeHandler = () => {
    if (formType === 'login'){
      setFormType('register')
    } else {
      setFormType('login')
    }
  }
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <Row className={'justify-content-center mt-5'}>
          <Col className={'mt-auto mb-auto'}
               md={6}
               lg={4}
               xl={3}
          >
            <Card className={'p-4'}>
              <h4 className={'text-center'}>{formType === 'login' ? 'Авторизация' : 'Регистрация' }</h4>
              <FloatingLabel
                label="ИИН"
                className="mt-3 mb-3"
              >
                <Form.Control
                  name={'iin'}
                  onChange={formik.handleChange}
                  disabled={isLoadingLogin || isLoadingRegister}
                  type="string"
                  placeholder="000000000000"
                />
              </FloatingLabel>
              {
                formType === 'register' &&
                <FloatingLabel
                  label="Email"
                  className="mt-3 mb-3"
                >
                  <Form.Control
                    name={'email'}
                    onChange={formik.handleChange}
                    disabled={isLoadingLogin || isLoadingRegister}
                    type="email"
                    placeholder="example@mail.com"
                  />
                </FloatingLabel>
              }
              <FloatingLabel
                label="Пароль"
                className="mt-3 mb-3"
              >
                <Form.Control
                  name={'password'}
                  onChange={formik.handleChange}
                  disabled={isLoadingLogin || isLoadingRegister}
                  type="password"
                  placeholder="******"
                />
              </FloatingLabel>
              
              <div className={'d-flex justify-content-end'}>
                <span className={'text-primary'}
                      style={{cursor: 'pointer'}}
                      onClick={toggleFormTypeHandler}
                >
                  {formType === 'login' ? 'Зарегистрироваться' : 'Войти'}
                </span>
              </div>
              
              {error &&
                <Alert className={'mt-2 mb-2'} variant={'danger'}>{error?.data?.message || 'Произошла непредвиденная ошибка'}</Alert>
              }
              
              <Button
                className={'mt-3 fw-light'}
                size={'lg'}
                variant="primary"
                type={'submit'}
                disabled={isLoadingLogin || isLoadingRegister}
              >{formType === 'login' ?
                'Войти' :
                'Зарегистрироваться'
              }</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </form>
  )
}

export default Auth