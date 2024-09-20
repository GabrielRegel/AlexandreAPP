import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
      <Button theme="primary" label="Choose a photo" />
      <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

// continuar no passo 6 do Construir uma tela... a gente só criou o Button.js mas não mudou o App.js