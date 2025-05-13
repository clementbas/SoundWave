import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

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

export default function HashtagButtons() {
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: '#fff',
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
