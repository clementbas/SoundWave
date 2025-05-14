import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

export default function profilePage({ navigation }: { navigation: any }) {
  const userProfile = {
    pseudo: 'JohnDoe',
    email: 'johndoe@example.com',
    uploads: 25,
    likes: 120,
    downloads: 300,
  };

  const handleLogout = () => {
    navigation.navigate('Login'); // Redirige vers la page login.tsx
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} color="#000"/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../assets/images/photoprofile.png')}
        />
        <Text style={styles.pseudo}>{userProfile.pseudo}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{userProfile.uploads}</Text>
          <Text style={styles.statLabel}>Uploads</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{userProfile.likes}</Text>
          <Text style={styles.statLabel}>Likes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{userProfile.downloads}</Text>
          <Text style={styles.statLabel}>Downloads</Text>
        </View>
      </View>

            {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <LinearGradient
          colors={['#FF6C52', '#000000', '#0D90BA']} // Dégradé de orange à noir à bleu
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.logoutButtonText}>Déconnexion</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  pseudo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
    button: {
    marginTop: 456,
  },
  buttonGradient: {
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});