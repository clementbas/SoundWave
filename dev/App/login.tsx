import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';

export default function Home({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    // Exemple de validation pour afficher une alerte de succès
    //Alert.alert('Connexion réussie', `Email: ${email}\nMot de passe: ${password}`);  //supprimer après tests

    // Rediriger vers la page d'accueil après connexion
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      {/* Ajout du StatusBar pour personnaliser la barre de statut */}
      <StatusBar barStyle="light-content" hidden={false} />

      {/* Ajouter le logo */}
      <Image 
        source={require('../assets/images/logosw.png')} // Remplacez par votre chemin local
        style={styles.logo}
        resizeMode="contain" // Ajuste l'image pour qu'elle s'affiche correctement
      />

      <Text style={styles.title}>Connexion</Text>
      
      {/* Champ Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      {/* Champ Mot de Passe */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      {/* Bouton de Connexion */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient
          colors={['#FF6C52', '#000000', '#0D90BA']} // Dégradé de orange à noir à bleu
          start={{ x: 0, y: 0 }} // Dégradé à gauche
          end={{ x: 1, y: 0 }} // Dégradé à droite
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Lien d'inscription */}
      <Text style={styles.registerText}>
        Pas encore de compte ? <Text style={styles.registerLink}onPress={() => navigation.navigate('Register')}>Inscrivez-vous</Text>
      </Text>
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
    marginTop: -130,
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