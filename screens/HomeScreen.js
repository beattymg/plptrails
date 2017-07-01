import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 41.100913;
const LONGITUDE = -75.519990;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class Overlays extends React.Component {
  static navigationOptions = {
  title: "Trail Name",
  };

  constructor(props) {
    super(props);



    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      circle: {
        center: {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE,
        },
        radius: 700,
      },
      polygon: [
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE + SPACE,
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE + SPACE,
        },
      ],
      polyline: [
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE - (2 * SPACE),
          longitude: LONGITUDE + (2 * SPACE),
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE - (2 * SPACE),
          longitude: LONGITUDE - SPACE,
        },
      ],
    };
  }

  render() {
    const { region, circle, polygon, polyline } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}
        >
          <MapView.Circle
            center={circle.center}
            radius={circle.radius}
            fillColor="rgba(255, 255, 255, 1)"
            strokeColor="rgba(0,0,0,0.5)"
            zIndex={2}
            strokeWidth={2}
          />
          <MapView.Polygon
            coordinates={polygon}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          />
          <MapView.Polyline
            coordinates={polyline}
            strokeColor="rgba(0,0,200,0.5)"
            strokeWidth={3}
            lineDashPattern={[5, 2, 3, 2]}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Render circles, polygons, and polylines</Text>
          </View>
        </View>
      </View>
    );
  }
}

Overlays.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = Overlays;




// import React from 'react';
// import {
//   Image,
//   Linking,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import { MonoText } from '../components/StyledText';

// // import { Components } from 'expo';


// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: "Trail Name",
//   };

//   render() {
//     return (
//         <Expo.MapView
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//         <MapView.Marker
//           coordinate={marker.latlng}
//           title={marker.title}
//           description={marker.description}
//         />
//         </Expo.MapView>
//     );
//   }
// }
//   // render() {
//   //   return (
//   //     <View style={styles.container}>
//   //       <ScrollView
//   //         style={styles.container}
//   //         contentContainerStyle={styles.contentContainer}>

//   //         <View style={styles.welcomeContainer}>
//   //           <Image
//   //             source={require('../assets/images/expo-wordmark.png')}
//   //             style={styles.welcomeImage}
//   //           />
//   //         </View>

//   //         <View style={styles.getStartedContainer}>
//   //           {this._maybeRenderDevelopmentModeWarning()}

//   //           <Text style={styles.getStartedText}>
//   //             Get started by opening
//   //           </Text>

//   //           <View
//   //             style={[
//   //               styles.codeHighlightContainer,
//   //               styles.homeScreenFilename,
//   //             ]}>
//   //             <MonoText style={styles.codeHighlightText}>
//   //               screens/HomeScreen.js
//   //             </MonoText>
//   //           </View>

//   //           <Text style={styles.getStartedText}>
//   //             Change this text and your app will automatically reload.
//   //           </Text>
//   //         </View>

//   //         <View style={styles.helpContainer}>
//   //           <TouchableOpacity
//   //             onPress={this._handleHelpPress}
//   //             style={styles.helpLink}>
//   //             <Text style={styles.helpLinkText}>
//   //               Help, it didn’t automatically reload!
//   //             </Text>
//   //           </TouchableOpacity>
//   //         </View>
//   //       </ScrollView>

//   //       <View style={styles.tabBarInfoContainer}>
//   //         <Text style={styles.tabBarInfoText}>
//   //           This is a tab bar. You can edit it in:
//   //         </Text>

//   //         <View
//   //           style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//   //           <MonoText style={styles.codeHighlightText}>
//   //             navigation/MainTabNavigator.js
//   //           </MonoText>
//   //         </View>
//   //       </View>
//   //     </View>
//   //   );
//   // }

// //   _maybeRenderDevelopmentModeWarning() {
// //     if (__DEV__) {
// //       const learnMoreButton = (
// //         <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
// //           Learn more
// //         </Text>
// //       );

// //       return (
// //         <Text style={styles.developmentModeText}>
// //           Development mode is enabled, your app will run slightly slower but
// //           you have access to useful development tools. {learnMoreButton}.
// //         </Text>
// //       );
// //     } else {
// //       return (
// //         <Text style={styles.developmentModeText}>
// //           You are not in development mode, your app will run at full speed.
// //         </Text>
// //       );
// //     }
// //   }

// //   _handleLearnMorePress = () => {
// //     Linking.openURL(
// //       'https://docs.expo.io/versions/latest/guides/development-mode'
// //     );
// //   };

// //   _handleHelpPress = () => {
// //     Linking.openURL(
// //       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
// //     );
// //   };
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   developmentModeText: {
// //     marginBottom: 20,
// //     color: 'rgba(0,0,0,0.4)',
// //     fontSize: 15,
// //     textAlign: 'center',
// //   },
// //   contentContainer: {
// //     paddingTop: 80,
// //   },
// //   welcomeContainer: {
// //     alignItems: 'center',
// //     marginTop: 10,
// //     marginBottom: 20,
// //   },
// //   welcomeImage: {
// //     width: 140,
// //     height: 38,
// //     resizeMode: 'contain',
// //     marginTop: 3,
// //     marginLeft: -10,
// //   },
// //   getStartedContainer: {
// //     alignItems: 'center',
// //     marginHorizontal: 50,
// //   },
// //   homeScreenFilename: {
// //     marginVertical: 7,
// //   },
// //   codeHighlightText: {
// //     color: 'rgba(96,100,109, 0.8)',
// //   },
// //   codeHighlightContainer: {
// //     backgroundColor: 'rgba(0,0,0,0.05)',
// //     borderRadius: 3,
// //     paddingHorizontal: 4,
// //   },
// //   getStartedText: {
// //     fontSize: 17,
// //     color: 'rgba(96,100,109, 1)',
// //     lineHeight: 23,
// //     textAlign: 'center',
// //   },
// //   tabBarInfoContainer: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     ...Platform.select({
// //       ios: {
// //         shadowColor: 'black',
// //         shadowOffset: { height: -3 },
// //         shadowOpacity: 0.1,
// //         shadowRadius: 3,
// //       },
// //       android: {
// //         elevation: 20,
// //       },
// //     }),
// //     alignItems: 'center',
// //     backgroundColor: '#fbfbfb',
// //     paddingVertical: 20,
// //   },
// //   tabBarInfoText: {
// //     fontSize: 17,
// //     color: 'rgba(96,100,109, 1)',
// //     textAlign: 'center',
// //   },
// //   navigationFilename: {
// //     marginTop: 5,
// //   },
// //   helpContainer: {
// //     marginTop: 15,
// //     alignItems: 'center',
// //   },
// //   helpLink: {
// //     paddingVertical: 15,
// //   },
// //   helpLinkText: {
// //     fontSize: 14,
// //     color: '#2e78b7',
// //   },
// // });
