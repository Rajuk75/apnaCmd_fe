import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import { APP_TEXT, ERROR_TEXT, BUTTON_TEXT } from '../constants/text';
import { ROUTES } from '../constants/routes';

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-9xl font-black text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{ERROR_TEXT.PAGE_NOT_FOUND}</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md">
          {ERROR_TEXT.NOT_FOUND_DESC}
        </p>
        <Link to={ROUTES.HOME}>
          <Button variant="primary">
            {BUTTON_TEXT.GO_HOME}
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
