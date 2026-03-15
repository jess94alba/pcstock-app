import {StyleSheet} from "react-native";

export default StyleSheet.create({
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212",
  },

  content: {
    maxWidth: 900,
    padding: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },

  navBubble: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 40,
    marginVertical: 20,

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  navLink: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 10,
  },

  input: {
    width: "90%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 15,
  },

  button: {
    width: "70%",
    paddingVertical: 12,
    backgroundColor: "#3c7cff",
    borderRadius: 30,
    alignItems: "center",
  },

  /* button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },*/

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
