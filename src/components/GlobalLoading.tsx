import React from 'react';
import { useLoading } from './LoadingContext';
import LoadingSpinner from './LoadingSpinner';

const GlobalLoading: React.FC = () => {
  const { isLoading } = useLoading();

  return <LoadingSpinner visible={isLoading} />;
};

export default GlobalLoading;
