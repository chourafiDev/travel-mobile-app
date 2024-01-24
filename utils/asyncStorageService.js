import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStoredData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log("async-storage: error get stored data", e);
  }
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("async-storage: error store data", e);
  }
};

export const removeStoredData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("async-storage: error remove stored data", e);
  }
};
