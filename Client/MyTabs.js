import Groups from './Screens/Groups';
import Group from './Screens/Group';
import Account from './Screens/Accounts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      
      <Tab.Navigator
      activeColor="blue">
        <Tab.Screen name="Group" component={Group} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
      
    );
  }

export default MyTabs