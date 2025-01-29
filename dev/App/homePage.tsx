import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function HomePage({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      {/* Profile */}
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => alert('Ouvrir Profil')}>
          <Image style={styles.profileImage} source={{ uri: 'https://via.placeholder.com/50' }} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Profile</Text>
      </View>

      {/* Trending Section */}
      <Text style={styles.sectionTitle}>Trending</Text>
      <View style={styles.trendingBox} />

      {/* Following Section */}
      <Text style={styles.sectionTitle}>Following</Text>
      <View style={styles.followingBox} />
      <View style={styles.followingBox} />

      {/* Navigation Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.feedButton} onPress={() => alert('Feed')}>
          <AntDesign name="home" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={() => alert('Upload Screen')}>
            <Feather name="upload" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopButton} onPress={() => alert('MarketPlace')}>
          <Feather name="shopping-bag" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
  },
  profileText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  trendingBox: {
    width: '100%',
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
  },
  followingBox: {
    width: '100%',
    height: 80,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,  // Assure que le footer s'étend de gauche à droite
    right: 0, // Assure que le footer s'étend de gauche à droite
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    backgroundColor: '#FF6C52', 
    width: 70,
    height: 70,
    borderRadius: 35, // Rend le bouton rond
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5, // Ombre pour Android
    position: 'absolute',
    top: '50%', // Centre verticalement
    transform: [{ translateY: -35 }]    
  },
  shopButton: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5, // Ombre pour Android
    position: 'absolute',
    right: 20
  },
  feedButton: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5, // Ombre pour Android
    position: 'absolute',
    left: 20
  },
  navItem: {
    fontSize: 14,
  },
});
