import {
    StyleSheet,
  } from 'react-native';

  const styles = StyleSheet.create({
    logoRow: {
      flex: 1,
      flexDirection: "row",
      padding: 5,
      backgroundColor: "aliceblue",
      paddingBottom: 20
    },

    logoColumn: {
      flex: 1,
      flexDirection: "column",
      paddingLeft: 10
    },

    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      marginTop: -10,
      padding: 20
    },

    search: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "aliceblue",
      padding: 10
    },

    searchInput: {
      textAlignVertical: "center",
      backgroundColor: "#ccc",
      borderRadius: 5,
      width: "80%"
    },

    text: {
      color: "gray",
      fontSize: 15
    },

    boldText: {
      color: "gray",
      fontSize: 22,
      fontWeight: "bold"
    },

    categoryItem: {
      marginRight: 20
    },

    categoryImg: {
      width: 80,
      height: 80,
      borderRadius: 5
    },

    categoryText: {
      textAlign: "center",
      fontSize: 15,
      color: "gray"
    },

    featuredItem: {
      padding: 15
    },

    row: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between"
    },

    restaurantContainer: {
      backgroundColor: "aliceblue",
      marginRight: 20
    },

    restaurantImg: {
      width: 240,
      height: 150,
      borderRadius: 2
    },

    restaurantText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "grey"
    },

    restaurantRow: {
      flex: 1,
      flexDirection: "row",
      alignContent: "flex-start"
    },


})

export default styles;
  