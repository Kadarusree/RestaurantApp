import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import LauncherScreen from "./src/screens/LauncherScreen";
import SearchScreen from "./src/screens/SearchScreen";
import NewsDetailsScreen from "./src/screens/NewsDetailsScreen";

const AppNavigator = createStackNavigator({
  home : HomeScreen,
  launcher : LauncherScreen,
  search : SearchScreen,
  details : NewsDetailsScreen
}, {
  initialRouteName: "search",
  defaultNavigationOptions: {
    title: "News Application",
  }
});

export default createAppContainer(AppNavigator);