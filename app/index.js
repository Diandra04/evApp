import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import car from '../assets/images/mustang.png';
/*import bad from '../assets/images/bad.jpeg';

/*

# Trying to get the app working on a physical phone
  # iOS
    # can't use physical phone unless you get $100 developer membership
    # Simulation:
      # Download XCode
        # Need to upgrade macOS
          # need to free 18GB first

  # Android
    # try to borrow phone from organizers

# Actually developing the app
  # Copy remaining views from tutorial
  # Talk to your friends about which sections/features you will build out
  # Have a solid vision for the pitch


*/

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>

      <Image source={car} style={styles.image} resizeMode="contain" />


    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: '500',
    color: 'gray',
  },
});