import React from 'react';

type NumberBadgeProps = {
  number: number;
  color: string;
};

const NumberBadge: React.FC<NumberBadgeProps> = ({ number=0, color = '#bbb' }) => {
  // Default color is #bbb if none is provided
  const badgeStyle = {
    backgroundColor: color,
    // Add other styles here if needed
  };

  return (
    <div className="dot-wrapper">
      <div className="dot" style={badgeStyle}>
        {number}
      </div>
    </div>
  );
};

export  { NumberBadge };
