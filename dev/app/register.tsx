import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register({ navigation }: { navigation: any }) {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (pseudo === '' || email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    Alert.alert('Inscription réussie', `Bienvenue ${pseudo} !`);
    navigation.navigate('Login'); // Retourne à la connexion après inscription
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} />
      <Image 
        source={require('../assets/images/logosw.png')} 
        style={styles.logo} 
        resizeMode="contain" 
      />
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Pseudo"
        placeholderTextColor="#aaa"
        value={pseudo}
        onChangeText={setPseudo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <LinearGradient
          colors={['#FF6C52', '#000000', '#0D90BA']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
      },
      input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
      },
      button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10,
      },
      buttonGradient: {
        width: '100%', // Assurer que le dégradé couvre toute la largeur du bouton
        height: '100%', // Assurer que le dégradé couvre toute la hauteur du bouton
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8, // Garder les bords arrondis
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      logo: {
        width: 300,
        height: 200,
        marginBottom: 30,
        marginTop: -150,
      },
      registerText: {
        marginTop: 20,
        fontSize: 14,
        color: '#666',
      },
      registerLink: {
        color: '#000000',
        fontWeight: 'bold',
      },
});
