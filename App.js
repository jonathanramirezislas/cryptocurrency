
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Header from './components/Header';


const App = () => {
  return (
    <>
      <Header/>
      <Image
        style={styles.imagen}
        source={{uri:'https://res.cloudinary.com/djuqxjkh3/image/upload/v1613157643/cryptomonedas_epymxj.png'}}
      />

    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
});

export default App;
