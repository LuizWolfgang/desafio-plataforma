import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CourseDetails } from "../screens/CourseDetails";
import { Dashboard } from "../screens/Dashboard";
import { WebViewPlayer } from "../screens/WebViewPlayer";

type AuthRoutes = {
  dashboard: undefined;
  courseDetails: undefined;
  webViewPlayer: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const Stack = createStackNavigator<AuthRoutes>();

export function StackCourses() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="courseDetails" component={CourseDetails} />
      <Stack.Screen name="webViewPlayer" component={WebViewPlayer} />
    </Stack.Navigator>
  );
}
