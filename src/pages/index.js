import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Justin Smith Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Justin Smith Portfolio'} />
      </Helmet>
      <App />
    </>
  );
};
