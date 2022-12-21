import AstronautList from './Astronauts'
import { StyleSheet, View, Linking, Button } from 'react-native'
import { Text } from 'react-native-paper'
import { React } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()

  function HomeScreen({ navigation }) {
    return (
      <>
        <View style={styles.homescreen}>
          <Text style={styles.astronauttext}>
            This is a list of information and pictures of people who have been
            in space!!
          </Text>
          <Button
            title="Click me to go to Astronaut list"
            onPress={() => navigation.navigate('Astronaut list')}
          />
          <Text style={styles.fingers}>
            👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇 👇
          </Text>
          <Text
            style={styles.spacenews}
            onPress={() => Linking.openURL('https://spacenews.com/')}
          >
            Click here too check out the latest space news!!!
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flexGrow: 0.01,
          }}
        >
          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: 'red',
              flexGrow: 1,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>
              One million Earths could fit inside the Sun – and the Sun is
              considered an average-size star.
            </Text>
          </View>
          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: 'green',
              flexGrow: 1,
            }}
          >
            <Text style={{ color: 'white', fontSize: 14.5, marginLeft: 5 }}>
              For years it was believed that Earth was the only planet in our
              solar system with liquid water. More recently, NASA revealed its
              strongest evidence yet that there is intermittent running water on
              Mars, too!
            </Text>
          </View>
          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: 'purple',
              flexGrow: 1,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>
              Comets are leftovers from the creation of our solar system about
              4.5 billion years ago – they consist of sand, ice and carbon
              dioxide.
            </Text>
          </View>

          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: 'yellow',
              flexGrow: 1,
            }}
          >
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 5 }}>
              You wouldn’t be able to walk on Jupiter, Saturn, Uranus or Neptune
              because they have no solid surface!
            </Text>
          </View>

          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: 'pink',
              flexGrow: 1,
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 22,
              }}
            >
              If you could fly a plane to Pluto, the trip would take more than
              800 years!
            </Text>
          </View>

          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: 'blue',
              flexGrow: 1,
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, marginLeft: 5 }}>
              The highest mountain known to man is on an asteroid called Vesta.
              Measuring a whopping 22km in height, it is three times as tall as
              Mount Everest!
            </Text>
          </View>
        </View>
      </>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#AD6A05',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Astronaut list"
          component={AstronautList}
          options={{
            title: 'Go Home',
            headerStyle: {
              backgroundColor: '#001084',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  fingers: { marginTop: 15, marginBottom: -15 },
  spacenews: {
    color: '#686DFF',
    marginTop: 15,
  },
  astronauttext: {
    color: '#FFFFFF',
    marginTop: '1%',
    marginBottom: '1%',
  },
})
