import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes'
import './assets/styles/index.scss'
import MainLayout from './components/layout/MainLayout'
import { Provider } from 'react-redux'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <MainLayout>
      <Routes/>
    </MainLayout>
  </Provider>
)