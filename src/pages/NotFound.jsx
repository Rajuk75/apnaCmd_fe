import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import { ERROR_TEXT, BUTTON_TEXT } from '../constants/text';
import { ROUTES } from '../constants/routes';

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative">
        {/* Background */}
        <div className="absolute inset-0 dots-pattern opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[150px]"></div>
        
        <div className="relative z-10">
          <h1 className="text-[12rem] font-display font-black text-gradient-blue leading-none mb-4">404</h1>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{ERROR_TEXT.PAGE_NOT_FOUND}</h2>
          <p className="text-lg text-slate-500 mb-8 max-w-md">
            {ERROR_TEXT.NOT_FOUND_DESC}
          </p>
          <Link to={ROUTES.HOME}>
            <Button variant="primary">
              {BUTTON_TEXT.GO_HOME}
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
