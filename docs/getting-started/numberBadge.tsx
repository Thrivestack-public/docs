import React from 'react';

type NumberBadgeProps = {
  number: number;
};

const NumberBadge: React.FC<NumberBadgeProps> = ({ number }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px', // Ensures the badge is wide enough for its content
    height: '40px', // Same as width to ensure the badge is circular
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontWeight: 'bold',
    borderRadius: '50%',
    fontSize: '16px',
  }}>
    {number}
  </div>
);

export default NumberBadge;
