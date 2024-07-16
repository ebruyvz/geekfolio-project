import React from 'react';

export default function Dot() {

  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const dotStyle = {
    height: '12px',
    width: '12px',
    backgroundColor: `white`,
    borderRadius: '50%',
    position: 'fixed',
    zIndex: 50,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    top: cursorPos.y,
    left: cursorPos.x,
  };

  return <div style={dotStyle}></div>;
};
