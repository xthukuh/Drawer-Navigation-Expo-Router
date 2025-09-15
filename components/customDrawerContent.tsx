import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, StatusBar, TouchableHighlight, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRouter } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';

export default function CustomDrawerContent(props: any) {

    const { bottom } = useSafeAreaInsets();
    const navigation = useNavigation();
    const router = useRouter();

    const closeDrawer = () => {
        console.debug('// TODO: implement session logout.');
        props.navigation.dispatch(DrawerActions.closeDrawer());
    }
    const routerReplace = (route: any) => {
        router.replace(route);
        props.navigation.dispatch(DrawerActions.closeDrawer());
    };
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <DrawerContentScrollView
                {...props}
                scrollEnabled={false}
            >
                {/* <DrawerItemList {...props} /> */}
                <View style={styles.drawerContent}>

                    {/* logo */}
                    <View style={styles.logoItem}>
                        <Image style={{ height: 35 }} resizeMode='contain' source={require('../assets/images/logo.png')} />
                    </View>

                    <View style={styles.drawerSection}>
                        <Text style={[styles.drawerSectionTitle, styles.subHeading]}>General</Text>
                        <TouchableHighlight
                            style={styles.menuItem}
                            underlayColor="rgba(0, 0, 0, 0.08)"
                            onPress={() => routerReplace('/home')}
                        >
                            <View style={styles.drawerItemInnerContainer}>
                                <Feather name="home" size={20} color="#323232" />
                                <Text style={[styles.drawerItemText, styles.body]}>Home</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.menuItem}
                            underlayColor="rgba(0, 0, 0, 0.08)"
                            onPress={() => routerReplace('/home/notifications')}
                        >
                            <View style={styles.drawerItemInnerContainer}>
                                <Feather name="bell" size={20} color="#323232" />
                                <Text style={[styles.drawerItemText, styles.body]}>Notifications</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.drawerSection}>
                        <Text style={[styles.drawerSectionTitle, styles.subHeading]}>System</Text>
                        <TouchableHighlight
                            style={styles.menuItem}
                            underlayColor="rgba(0, 0, 0, 0.08)"
                            onPress={() => routerReplace('/')}
                        >
                            <View style={styles.drawerItemInnerContainer}>
                                <Feather name="info" size={20} color="#323232" />
                                <Text style={[styles.drawerItemText, styles.body]}>About</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <TouchableHighlight
                            style={{
                                padding: 20,
                            }}
                            underlayColor="rgba(0, 0, 0, 0.08)"
                            onPress={() => {
                                (async () => {
                                    const url = 'https://example.com';
                                    await Linking.openURL(url);
                                })()
                            }}
                        >
                            <View style={{ width: '100%', paddingVertical: 35, paddingHorizontal: 15, alignItems: 'center' }}>
                                <Text style={[styles.body, { textAlign: 'left', color: '#0434a4', fontWeight: '600' }]}>Powered By Example</Text>
                            </View>
                        </TouchableHighlight>
                </View>
            </DrawerContentScrollView>

            <View>
                <TouchableHighlight
                    style={[styles.drawerItem, styles.logOutContainer]}
                    underlayColor="#c0392b"
                    onPress={closeDrawer}>
					<View style={styles.drawerItemInnerContainer}>
						<Feather name="log-out" size={22.5} color='#fff' />
						<Text style={[styles.drawerItemText, styles.logOutText, styles.body]}>Logout</Text>
					</View>
				</TouchableHighlight>
			</View>
        </View>
    )
}

const styles = StyleSheet.create({
    subHeading: {
        fontWeight: '700',
        lineHeight: 21,
        fontSize: 16,
    },
    body: {
        fontWeight: '400',
        lineHeight: 20,
        fontSize: 15,
    },

    logoItem: {
        marginTop: 40,
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 10,
    },

    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    container: {
        flex: 1
    },

    drawerContent: {
        flex: 1,
        marginTop: StatusBar.currentHeight ? -StatusBar.currentHeight : -24,
    },

    profileSection: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderColor: '#e2e2e4',
        flexDirection: 'row',
        alignItems: 'center'
    },

    profileName: {
        paddingLeft: 15,
        color: '#020202'
    },

    drawerSection: {
        width: '100%',
        // paddingHorizontal: 5,
        paddingVertical: 20,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderColor: '#e2e2e4'
    },

    drawerSectionTitle: {
        color: '#020202',
        marginBottom: 10,
        marginLeft: 15
    },

    drawerItem: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 15
    },

    drawerItemInnerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    drawerItemText: {
        fontWeight: '600',
        color: '#020202',
        marginLeft: 20
    },

    logOutContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: '#e74c3c'
    },

    logOutText: { color: '#fff' }
});
