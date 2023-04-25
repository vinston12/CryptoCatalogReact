import React, { useState } from 'react';

export const UseToggle = () => {

  const [expandedRow, setExpandedRow] = useState(null);
   const toggleExpansion = (id) => {
    if (id === expandedRow) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  return {
    expandedRow,
    toggleExpansion
  };
};