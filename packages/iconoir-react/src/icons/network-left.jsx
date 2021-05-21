import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const NetworkLeft = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="21"
            width="7"
            height="5"
            rx="0.6"
            transform="rotate(-90 2 21)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <rect
            x="17"
            y="15.5"
            width="7"
            height="5"
            rx="0.6"
            transform="rotate(-90 17 15.5)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <rect
            x="2"
            y="10"
            width="7"
            height="5"
            rx="0.6"
            transform="rotate(-90 2 10)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M7 17.5H10.5C11.6046 17.5 12.5 16.6046 12.5 15.5V12M7 6.5H10.5C11.6046 6.5 12.5 7.39543 12.5 8.5V12M12.5 12H17"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

NetworkLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NetworkLeft.displayName = 'NetworkLeft';

export default NetworkLeft;