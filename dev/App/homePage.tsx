import React, { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

export default function HomePage({ navigation }: { navigation: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { id: '1', image: require('../assets/images/photo.png'), title: 'Photo 1' },
    { id: '2', image: require('../assets/images/2.png'), title: 'Photo 2' },
    { id: '3', image: require('../assets/images/3.png'), title: 'Photo 3' },
  ];

  const renderItem = ({ item }: { item: { id: string; title: string; image: any } }) => (
    <View style={styles.trendingBox}>
      <Image source={item.image} style={styles.trendingImage} />
      <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10 }}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Contenu scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile */}
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => alert('Ouvrir Profil')}>
            <Image style={styles.profileImage} source={require('../assets/images/photoprofile.png')} />
          </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Notifications')}>
          <Feather name="bell" size={30} color="#000" style={styles.notificationIcon} />
        </TouchableOpacity>
        </View>

        {/* Trending Section */}
        <Text style={styles.sectionTitle}>Trending</Text>
        <Carousel
          width={width}
          height={120}
          data={data}
          renderItem={renderItem}
          loop
          onSnapToItem={(index) => setActiveIndex(index)}
          style={{ paddingHorizontal: 10 }}
        />

        {/* Points indicateurs */}
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                activeIndex === index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>

        {/* Following Section */}
        <Text style={styles.sectionTitle}>Following</Text>
        <View style={styles.followingBox}>
          <Image source={require('../assets/images/following1.png')} style={styles.followingImage} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ProductPage')}>
          <View style={styles.followingBox}>
            <Image source={require('../assets/images/following2.png')} style={styles.followingImage} />
          </View>
        </TouchableOpacity>
        <View style={styles.followingBox}>
          <Image source={require('../assets/images/following3.png')} style={styles.followingImage} />
        </View>
        <View style={styles.followingBox}>
          <Image source={require('../assets/images/following4.png')} style={styles.followingImage} />
        </View>
        <View style={styles.followingBox}>
          <Image source={require('../assets/images/following5.png')} style={styles.followingImage} />
        </View>
      </ScrollView>
      {/* Footer fixe */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.feedButton} onPress={() => alert('Feed')}>
          <AntDesign name="home" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate('Upload')}>
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
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120, // Ajoute un espace pour éviter que le contenu ne soit masqué par le footer
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espace entre les éléments
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  notificationIcon: {
    marginRight: 10, // Ajoute un espace à droite
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  trendingBox: {
    width: width - 40,
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  trendingImage: {
    marginTop: 30,
    width: '100%',
    height: '100%',
  },
  followingBox: {
    width: '100%',
    height: 120,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  followingImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
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
  navItem: {
    fontSize: 14,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
});