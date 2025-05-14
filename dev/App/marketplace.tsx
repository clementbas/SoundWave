import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function MarketPlace({ navigation }: { navigation: any }) {
  const [searchText, setSearchText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(null);

  const musicStyles = ['Pop', 'Elec', 'Trending', 'New', 'Rock', 'Jazz','Rap','Classic'];
  const boxes = Array(10).fill(null); // Exemple de données pour les boxes

  return (
    <View style={styles.container}>
        <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 30 }}
        keyboardShouldPersistTaps="handled"
        >
        {/* Titre */}
        <Text style={styles.title}>MarketPlace</Text>

        {/* Barre de recherche */}
        <TextInput
            style={styles.searchBar}
            placeholder="Rechercher..."
            value={searchText}
            onChangeText={setSearchText}
        />

        {/* Carrousel des styles musicaux */}
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
            contentContainerStyle={styles.carouselContent}
        >
            {musicStyles.map((style, index) => (
            <TouchableOpacity
                key={index}
                style={[
                styles.styleButton,
                selectedStyle === style && styles.styleButtonSelected
                ]}
                onPress={() => setSelectedStyle(style)}
            >
                <Text style={[
                styles.styleButtonText,
                selectedStyle === style && styles.styleButtonTextSelected
                ]}>
                {style}
                </Text>
            </TouchableOpacity>
            ))}
        </ScrollView>

        {/* Liste des boxes */}
        <View style={styles.boxesContent}>
            {boxes.map((_, idx) => (
            <View key={idx} style={styles.followingBox} />
            ))}
        </View>
        </ScrollView>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.feedButton} onPress={() => navigation.navigate('Homepage')}>
          <AntDesign name="home" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate('Upload')}>
          <Feather name="upload" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shopButton} onPress={() => navigation.navigate('Marketplace')}>
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
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  searchBar: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  carousel: {
    maxHeight: 50,
    marginBottom: 15,
  },
  carouselContent: {
    alignItems: 'center',
  },
  styleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    marginRight: 10,
  },
  styleButtonSelected: {
    backgroundColor: '#0D90BA',
  },
  styleButtonText: {
    color: '#666',
    fontWeight: '600',
  },
  styleButtonTextSelected: {
    color: '#fff',
  },
  boxesContent: {
    paddingBottom: 20,
  },
  followingBox: {
    width: '100%',
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Ajoute un fond blanc pour le footer
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  uploadButton: {
    backgroundColor: '#FF6C52',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -35 }],
  },
  shopButton: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    position: 'absolute',
    right: 20,
  },
  feedButton: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    position: 'absolute',
    left: 20,
  },
});
