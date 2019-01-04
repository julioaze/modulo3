import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.0.2.2' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}
