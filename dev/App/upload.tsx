import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

export default function UploadPage({ navigation }: { navigation: any }) {
  const [musicFile, setMusicFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleUpload = () => {
    alert('Music uploaded successfully!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Upload your music</Text>

      {/* Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#aaa"
      />

      {/* Description Input */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        placeholderTextColor="#aaa"
      />

      {/* Tags Input */}
      <TextInput
        style={styles.input}
        placeholder="Tags (comma-separated)"
        value={tags}
        onChangeText={setTags}
        placeholderTextColor="#aaa"
      />

      {/* Image Upload */}
      <TouchableOpacity style={styles.imageUpload} onPress={() => alert('Select an image')}>
        <Feather name="image" size={40} color="#ccc" />
        <Text style={styles.imageUploadText}>Upload Cover Image</Text>
      </TouchableOpacity>

      {/* Music File Input */}
      <TouchableOpacity style={styles.fileUpload} onPress={() => alert('Select a music file')}>
        <Feather name="file" size={30} color="#ccc" />
        <Text style={styles.fileUploadText}>Upload Music File</Text>
      </TouchableOpacity>

      {/* Upload Button */}
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <LinearGradient
          colors={['#FF6C52', '#000000', '#0D90BA']} // Dégradé de orange à noir à bleu
          start={{ x: 0, y: 0 }} // Dégradé à gauche
          end={{ x: 1, y: 0 }} // Dégradé à droite
          style={styles.buttonGradient} // Assure que le dégradé couvre tout le bouton
        >
          <Text style={styles.uploadButtonText}>Upload</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 50,
    textAlign: 'center',
  },
  imageUpload: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  imageUploadText: {
    marginTop: 10,
    color: '#aaa',
  },
  fileUpload: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 200,
    backgroundColor: '#f9f9f9',
  },
  fileUploadText: {
    marginLeft: 10,
    color: '#aaa',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    color: '#000', // Assure que le texte est visible
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  uploadButton: {
    marginTop: 20,
    backgroundColor: '#FF6C52',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonGradient: {
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
});