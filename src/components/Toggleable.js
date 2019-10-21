import React, { useState, useImperativeHandle } from 'react';

const Toggleable = React.forwardRef((props, ref) => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleVisibility = () => {
    setFormVisible(!formVisible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    };
  });

  const visibleElement = () => {
    return (
      <div>
        {formVisible && props.children}
        <button onClick={toggleVisibility}>
          {formVisible ? 'Cancle' : props.buttonLabel}
        </button>
      </div>
    );
  };
  return visibleElement();
});

export default Toggleable;
