import { useEffect } from 'react';
import { useLoading } from './LoadingContext';
import { history } from 'umi';

export const useNavigationLoading = () => {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    const unlisten = history.listen(() => {
      showLoading();

      // Hide loading after a short delay to ensure content is loaded
      setTimeout(() => {
        hideLoading();
      }, 500);
    });

    return () => {
      unlisten();
    };
  }, [showLoading, hideLoading]);
};
