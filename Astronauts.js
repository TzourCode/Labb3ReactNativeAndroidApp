import { React, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import {
  TextInput,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Linking,
} from 'react-native'

export default function AstronautList() {
  const [isLoading, setLoading] = useState(true)
  const [asnauData, asData] = useState([])
  const [text, onChangeText] = useState('')
  const [count, setCount] = useState([])
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetch(`https://lldev.thespacedevs.com/2.2.0/astronaut/?search=${text}`)
      .then((response) => response.json())
      .then((data) => {
        asData(data.results)
      })

      .catch((error) => alert(error))
      .then(setLoading(false))
  }, [text])

  useEffect(() => {
    fetch('https://lldev.thespacedevs.com/2.2.0/astronaut/')
      .then((response) => response.json())
      .then((data) => {
        setCount(data.count)
        setImage(data.profile_image)
      })

      .catch((error) => alert(error))
      .then(setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.count}>
        This is how many astronauts there have been until now in space, {count}
        persons amazing!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Type in the name of a astronaut'}
      ></TextInput>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={asnauData}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            return (
              <Text style={styles.astronauts}>
                Name: {item.name} {'\n'}
                Date of birth: {item.date_of_birth}
                {'\n'}
                {item.date_of_death === null
                  ? 'Date of death: Still alive and using his body made of stardust!!!'
                  : item.date_of_death}
                {'\n'}Status of occupation: {item.status.name} Worked for the{' '}
                {item.type.name}
                {'\n'}Nationality: {item.nationality}
                {'\n'}First flight: {item.first_flight} {'\n'}Last flight:{' '}
                {item.last_flight} {'\n'}
                <Text
                  style={styles.wiki}
                  onPress={() => Linking.openURL(item.wiki)}
                >
                  Wikipidea link: {item.wiki}
                </Text>
                {'\n'}
                <Text
                  style={styles.twit}
                  onPress={() => Linking.openURL(item.twitter)}
                >
                  Twitter link: {item.twitter}
                </Text>
                {'\n'}
                <Text
                  style={styles.insta}
                  onPress={() => Linking.openURL(item.instagram)}
                >
                  Instagram link: {item.instagram}
                </Text>
                {'\n'}
                <Card>
                  <Card.Content>
                    <Title>Biography:</Title>
                    <Paragraph style={styles.card}>{item.bio}</Paragraph>
                  </Card.Content>
                  <Card.Cover
                    style={styles.imag}
                    placeholder="Picture of Astronaut"
                    maxWidth={100}
                    source={{ uri: item.profile_image }}
                  />
                </Card>
              </Text>
            )
          }}
        />
      )}

      <StatusBar style="auto" />
      <Text style={styles.description}>Space beings AB</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    maxWidth: 400,
  },
  wiki: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  twit: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '700',
  },
  insta: {
    color: '#E1306C',
    fontSize: 20,
    fontWeight: '700',
  },
  imag: {
    paddingLeft: 148,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#0099ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  astronauts: {
    fontSize: 20,
    fontWeight: '700',
    backgroundColor: '#33cccc',
  },
  count: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ff0000',
    backgroundColor: '#ffffff',
  },
})
