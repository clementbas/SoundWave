import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';

function FakeAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.fakePlayer}>
      <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)} style={styles.playButton}>
        <Ionicons
          name={isPlaying ? 'pause' : 'play'}
          size={25}
          color="#007e8c"
        />
      </TouchableOpacity>
      <View style={styles.progressBarBackground}>
        <View style={[
          styles.progressBarFill,
          { width: isPlaying ? '60%' : '20%' }
        ]} />
      </View>
      <Text style={styles.timeText}>{isPlaying ? '1:23 / 3:45' : '0:00 / 3:45'}</Text>
    </View>
  );
}

export default function HashtagButtons({ navigation }: { navigation: any }) {
  const [liked, setLiked] = useState(false);

  const hashtags = [
    'Électronique',
    'Ambiance',
    'Mélancolique',
    'Chillwave',
    'SynthéRétro'
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={30} color="#000" />
      </TouchableOpacity>

      {/* Image at the top */}
      <Image
        style={styles.topImage}
        source={require('../assets/images/aa.jpg')}
      />

      <View style={styles.infos}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          SPQR vol.6
        </Text>
        <Text style={{ fontSize: 16, color: '#888' }}>
          Dj Fluction
        </Text>
      </View>

      <View style={styles.bottomSection}>
        {/* Fake audio player just above hashtags */}
        <FakeAudioPlayer />

        {/* Hashtags Row */}
        <View style={styles.hashtagRow}>
          {hashtags.map((tag, idx) => (
            <View key={idx} style={styles.hashtagContainer}>
              <Text style={styles.hashtagText}>#{tag}</Text>
            </View>
          ))}
        </View>

        {/* Buttons Row */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <LinearGradient
              colors={['#FF6C52', '#000000', '#0D90BA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Acheter 29.99€</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => setLiked(!liked)}
            accessibilityLabel="Like button"
          >
            <Text style={[styles.likeText, liked && styles.liked]}>
              {liked ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: '#fff',
  },
  infos: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
    marginTop: 20,
  },
  topImage: {
    width: '85%', // Réduit la largeur à 80% de l'écran
    height: 350, // Garde la hauteur fixe
    resizeMode: 'cover', // Ajuste l'image pour couvrir l'espace
    marginTop: 150,
    marginBottom: 90,
    alignSelf: 'center', // Centre l'image horizontalement
    borderRadius: 10, // Ajoute des coins arrondis si nécessaire
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
  },
  fakePlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginBottom: 10,
    alignSelf: 'center',
    width: 320,
  },
  playButton: {
    marginRight: 12,
  },
  progressBarBackground: {
    width: 180,
    height: 6,
    backgroundColor: '#b2ebf2',
    borderRadius: 3,
    marginRight: 12,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#007e8c',
    borderRadius: 3,
  },
  timeText: {
    color: '#007e8c',
    fontSize: 12,
    fontWeight: 'bold',
  },
  hashtagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 18,
  },
  hashtagContainer: {
    backgroundColor: '#e0f7fa',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 5,
    marginBottom: 5,
  },
  hashtagText: {
    color: '#007e8c',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 270,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 16,
    overflow: 'hidden',
  },
  buttonGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  likeButton: {
    padding: 8,
  },
  likeText: {
    fontSize: 28,
    color: '#888',
  },
  liked: {
    color: '#FF6C52',
  },
});