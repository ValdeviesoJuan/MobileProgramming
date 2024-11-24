import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer/DrawerContent';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={DrawerContent}>
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={20} />,
                }}
            />
            <Drawer.Screen
                name="settings"
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    drawerIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline' } size={20} />,
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  );
}
