import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PrivacyIcon = () => {
  return (
    <View>
      <Svg width={20} height={20} viewBox="0 0 18 20" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.377516 3.08241C0 3.62028 0 5.21907 0 8.41666V9.99136C0 15.6294 4.23896 18.3655 6.89856 19.5273C7.62001 19.8424 7.98074 20 9 20C10.0193 20 10.38 19.8424 11.1014 19.5273C13.761 18.3655 18 15.6294 18 9.99136V8.41666C18 5.21907 18 3.62028 17.6225 3.08241C17.245 2.54454 15.7417 2.02996 12.7351 1.00079L12.1623 0.804717C10.595 0.268239 9.81139 0 9 0C8.18861 0 7.40498 0.268239 5.83772 0.804717L5.26491 1.00079C2.25832 2.02996 0.755031 2.54454 0.377516 3.08241ZM12.0595 8.49951C12.3353 8.19053 12.3085 7.71642 11.9995 7.44055C11.6905 7.16467 11.2164 7.19151 10.9405 7.50049L7.92857 10.8739L7.05945 9.90049C6.78358 9.59151 6.30947 9.56467 6.00049 9.84055C5.69151 10.1164 5.66467 10.5905 5.94055 10.8995L7.36912 12.4995C7.51141 12.6589 7.71492 12.75 7.92857 12.75C8.14222 12.75 8.34573 12.6589 8.48802 12.4995L12.0595 8.49951Z"
          fill={"#B1292C"}
        />
      </Svg>
    </View>
  );
};

export default PrivacyIcon;

