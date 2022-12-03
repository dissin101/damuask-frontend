import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/Routes';
import './assets/styles/index.scss';
import MainLayout from './components/layout/MainLayout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainLayout>
    <Routes/>
  </MainLayout>
);