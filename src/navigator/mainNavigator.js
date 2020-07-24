import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen99360Navigator from '../features/BlankScreen99360/navigator';
import BlankScreen89357Navigator from '../features/BlankScreen89357/navigator';
import BlankScreen49356Navigator from '../features/BlankScreen49356/navigator';
import BlankScreen59355Navigator from '../features/BlankScreen59355/navigator';
import BlankScreen39354Navigator from '../features/BlankScreen39354/navigator';
import BlankScreen19316Navigator from '../features/BlankScreen19316/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen99360: { screen: BlankScreen99360Navigator },
BlankScreen89357: { screen: BlankScreen89357Navigator },
BlankScreen49356: { screen: BlankScreen49356Navigator },
BlankScreen59355: { screen: BlankScreen59355Navigator },
BlankScreen39354: { screen: BlankScreen39354Navigator },
BlankScreen19316: { screen: BlankScreen19316Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
