import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

const BookMarkActiveIcon = ({ width, height, color }) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7.39851V10.7274C14 12.7918 14 13.824 13.5106 14.275C13.2772 14.4901 12.9826 14.6253 12.6687 14.6612C12.0107 14.7365 11.2422 14.0568 9.70523 12.6974C9.02585 12.0965 8.68617 11.796 8.29315 11.7169C8.09962 11.6779 7.90038 11.6779 7.70685 11.7169C7.31383 11.796 6.97415 12.0965 6.29477 12.6974C4.75782 14.0568 3.98935 14.7365 3.33128 14.6612C3.01743 14.6253 2.72281 14.4901 2.4894 14.275C2 13.824 2 12.7918 2 10.7274V7.39851C2 4.53943 2 3.1099 2.87868 2.2217C3.75736 1.3335 5.17157 1.3335 8 1.3335C10.8284 1.3335 12.2426 1.3335 13.1213 2.2217C14 3.1099 14 4.53943 14 7.39851ZM5.5 4.00016C5.5 3.72402 5.72386 3.50016 6 3.50016H10C10.2761 3.50016 10.5 3.72402 10.5 4.00016C10.5 4.27631 10.2761 4.50016 10 4.50016H6C5.72386 4.50016 5.5 4.27631 5.5 4.00016Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default BookMarkActiveIcon;