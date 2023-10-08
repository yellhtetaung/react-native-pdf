import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

const source = {
  uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  cache: true,
};

const App = () => {
  const ref = useRef(null);

  return (
    <View style={styles.container}>
      <Pdf
        horizontal={true}
        ref={ref}
        source={source}
        style={styles.pdf}
        trustAllCerts={false}
        onPressLink={url => console.log(url)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;
