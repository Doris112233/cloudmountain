import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './LoadingSpinner.less';
import { useIntl } from '@umijs/max';

interface LoadingSpinnerProps {
  visible: boolean;
  size?: 'small' | 'default' | 'large';
  tip?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  visible,
  size = 'large',
  tip,
}) => {
  const intl = useIntl();
  if (!visible) return null;

  const resolvedTip = tip ?? intl.formatMessage({ id: 'loading.tip' });

  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <Spin
          size={size}
          tip={resolvedTip}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
