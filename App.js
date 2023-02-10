import React from "react";
import StackNavigator from "./navigation/StackNavigation";
import { Provider } from 'react-redux';
import { store } from './store/index';
import { StatusBar } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor="#110218"
        barStyle={"light-content"}
        showHideTransition={"fade"}
      />
      <StackNavigator />
    </Provider>
  );
};
export default App;