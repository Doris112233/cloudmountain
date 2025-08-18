import React from 'react';

const customDivider: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  margin: '24px 0',
};

const dividerTitle: React.CSSProperties = {
  padding: '0 16px',
  fontWeight: 'bold',
  fontSize: '18px',
  whiteSpace: 'normal',
};

const dividerLine: React.CSSProperties = {
  content: '',
  flex: 1,
  borderBottom: '1px solid #e8e8e8',
};

const CustomDivider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div style={customDivider}>
    <div style={dividerLine}></div>
    <span style={dividerTitle}>{children}</span>
    <div style={dividerLine}></div>
  </div>
);

export default CustomDivider;
