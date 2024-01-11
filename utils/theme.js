const { StyleSheet } = require("react-native");

export const shadow = StyleSheet.create({
  boxShadow: {
    shadowColor: "#cad2c5",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,

    elevation: 10,
  },
});
