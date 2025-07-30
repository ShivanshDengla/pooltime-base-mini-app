import React from 'react';
import { openExternalUrl } from '../utils/openExternalUrl';

type ExternalIconLinkProps = {
  url: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const ExternalIconLink: React.FC<ExternalIconLinkProps> = ({ url, children, style }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openExternalUrl(url);
  };

  return (
    <span onClick={handleClick} style={{ cursor: 'pointer', ...style }}>
      {children}
    </span>
  );
};

export default ExternalIconLink; 