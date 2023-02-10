import AsyncStorage from '@react-native-async-storage/async-storage';

export const initUser = (user) => {
    return {
      type: "INIT_USER",
      payload: user
    }
  }

export const createSession = (user) => {
  return {
    type: "LOG_IN",
    payload: user
  }
}

export const logout = (user) => {
  return {
    type: "LOG_OUT"
  }
}

export const getAsyncStorage = () => {
    return (dispatch) => {
      AsyncStorage.getItem("current")
      .then((result) => {
        const json = JSON.parse(result);
        dispatch(initUser(json))
      });
    };
  };
