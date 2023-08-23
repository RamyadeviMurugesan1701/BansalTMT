import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ProcessingIcon = () => {
  return (
    <View style={styles.container}>
      <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Path
          d="M4.9064 15.1111H3.9064V15.1111L4.9064 15.1111ZM4.90641 17.3333L4.20208 18.0432C4.59196 18.43 5.22085 18.43 5.61073 18.0432L4.90641 17.3333ZM7.85048 15.821C8.24253 15.432 8.24502 14.7988 7.85603 14.4068C7.46705 14.0147 6.83389 14.0122 6.44183 14.4012L7.85048 15.821ZM3.37098 14.4012C2.97892 14.0122 2.34576 14.0147 1.95678 14.4068C1.56779 14.7988 1.57028 15.432 1.96233 15.821L3.37098 14.4012ZM24.8207 9.85705C25.11 10.3275 25.7259 10.4745 26.1963 10.1852C26.6668 9.89598 26.8138 9.2801 26.5245 8.80961L24.8207 9.85705ZM16.1051 3C9.37539 3 3.9064 8.41494 3.9064 15.1111H5.9064C5.9064 9.53429 10.4651 5 16.1051 5V3ZM3.9064 15.1111L3.90641 17.3333L5.90641 17.3333L5.9064 15.1111L3.9064 15.1111ZM5.61073 18.0432L7.85048 15.821L6.44183 14.4012L4.20208 16.6235L5.61073 18.0432ZM5.61073 16.6235L3.37098 14.4012L1.96233 15.821L4.20208 18.0432L5.61073 16.6235ZM26.5245 8.80961C24.3827 5.3257 20.5164 3 16.1051 3V5C19.7979 5 23.0302 6.9446 24.8207 9.85705L26.5245 8.80961Z"
          fill="#1F86FF"
        />
        <Path
          d="M27.0852 14.6667L27.7882 13.9554C27.3986 13.5704 26.7718 13.5704 26.3822 13.9554L27.0852 14.6667ZM24.1339 16.1777C23.7411 16.5659 23.7374 17.1991 24.1257 17.5919C24.5139 17.9847 25.1471 17.9883 25.5399 17.6001L24.1339 16.1777ZM28.6306 17.6001C29.0233 17.9883 29.6565 17.9847 30.0447 17.5919C30.433 17.1991 30.4293 16.5659 30.0365 16.1777L28.6306 17.6001ZM7.09059 22.1415C6.80055 21.6715 6.18442 21.5256 5.71442 21.8157C5.24443 22.1057 5.09855 22.7218 5.3886 23.1918L7.09059 22.1415ZM15.8437 29C22.5934 29 28.0852 23.5886 28.0852 16.8889H26.0852C26.0852 22.4621 21.5109 27 15.8437 27V29ZM28.0852 16.8889V14.6667H26.0852V16.8889H28.0852ZM26.3822 13.9554L24.1339 16.1777L25.5399 17.6001L27.7882 15.3779L26.3822 13.9554ZM26.3822 15.3779L28.6306 17.6001L30.0365 16.1777L27.7882 13.9554L26.3822 15.3779ZM5.3886 23.1918C7.53874 26.676 11.4187 29 15.8437 29V27C12.1337 27 8.8878 25.0537 7.09059 22.1415L5.3886 23.1918Z"
          fill="#1F86FF"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProcessingIcon;