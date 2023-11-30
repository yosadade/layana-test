import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../utils/colors';

const ICProfile = ({focused}) => {
  const fill = focused ? colors.navy : colors.grey3;

  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.125 12C22.125 17.5228 17.6478 22 12.125 22C6.60215 22 2.125 17.5228 2.125 12C2.125 6.47715 6.60215 2 12.125 2C17.6478 2 22.125 6.47715 22.125 12ZM15.125 9C15.125 10.6569 13.7819 12 12.125 12C10.4681 12 9.125 10.6569 9.125 9C9.125 7.34315 10.4681 6 12.125 6C13.7819 6 15.125 7.34315 15.125 9ZM12.125 20.5C13.909 20.5 15.5647 19.9504 16.9319 19.0112C17.5358 18.5964 17.7938 17.8062 17.4428 17.1632C16.715 15.8303 15.2152 15 12.1249 15C9.03469 15 7.53497 15.8302 6.80714 17.1632C6.45605 17.8062 6.7141 18.5963 7.31796 19.0111C8.68518 19.9503 10.3409 20.5 12.125 20.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ICProfile;
