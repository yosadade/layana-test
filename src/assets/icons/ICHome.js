import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../utils/colors';

const ICHome = ({focused}) => {
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
        d="M3.3942 7.82274C2.875 8.77128 2.875 9.91549 2.875 12.2039V13.725C2.875 17.6258 2.875 19.5763 4.04657 20.7881C5.21815 22 7.10376 22 10.875 22H14.875C18.6462 22 20.5319 22 21.7034 20.7881C22.875 19.5763 22.875 17.6258 22.875 13.725V12.2039C22.875 9.91549 22.875 8.77128 22.3558 7.82274C21.8366 6.87421 20.8881 6.28551 18.991 5.10812L16.991 3.86687C14.9856 2.62229 13.9829 2 12.875 2C11.7671 2 10.7644 2.62229 8.75903 3.86687L6.75903 5.10813C4.86195 6.28551 3.9134 6.87421 3.3942 7.82274ZM10.3216 15.3975C9.98885 15.1508 9.51913 15.2206 9.27247 15.5534C9.02582 15.8862 9.09562 16.3559 9.42839 16.6025C10.4008 17.3233 11.59 17.75 12.875 17.75C14.16 17.75 15.3492 17.3233 16.3216 16.6025C16.6544 16.3559 16.7242 15.8862 16.4775 15.5534C16.2309 15.2206 15.7612 15.1508 15.4284 15.3975C14.7 15.9373 13.8209 16.25 12.875 16.25C11.9291 16.25 11.05 15.9373 10.3216 15.3975Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ICHome;