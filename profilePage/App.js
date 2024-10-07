import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons, Fontisto, FontAwesome6 } from '@expo/vector-icons';
import ProfileOptions from './components/ProfileOptions';
import PageTitle from './components/PageTitle';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent}>

        {/* Page Title */}
        <View>
          <PageTitle 
            onPress={() => console.log("Can't Go Back to The Way We Are")}
            title="Profile"
          />
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>

          {/* User Points */}
          <View style={styles.pointsHistory}>
            <View style={styles.pointsGroup}>
              <Fontisto name="asterisk" size={16} color="gold" />
              <Text style={styles.pointsText}>700 pts</Text>
            </View>
            <TouchableOpacity style={styles.historyGroup}>
              <Text style={styles.historyLink}>History</Text>
              <Ionicons name="chevron-forward-outline" size={15} color="white" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileRectangle}>
            
            {/* Profile Picture and Info */}
            <View style={styles.profileInfo}>
              <Image
                source={{ uri: 'https://i.pinimg.com/236x/29/f2/32/29f232f40b300e54b55b5e80c27760cb.jpg' }} // Replace with actual image URL
                style={styles.profileImage}
              />
              <View style={styles.profileInfoTextPhone}>
                <Text style={styles.nameText}>Jessica Iskandar</Text>
                <Text style={styles.phoneText}>+62 8473 84738</Text>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <FontAwesome name="edit" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Membership Info */}
            <View style={styles.membership}>
              <View style={styles.membershipStatus}>
                <MaterialCommunityIcons name="crown-circle" size={24} color="gold" />
                <Text style={styles.membershipStatusText}>Gold Member</Text>
              </View>
              <TouchableOpacity style={styles.benefitsGroup}>
                <Text style={styles.benefitsLink}>See Benefits</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Menu Options with Component and Props*/}
        <View>
          <ProfileOptions 
            onPress={() => console.log("tap")}
            title="Payment Method"
            icon={"card"}
          />
        </View>

        <View>
          <ProfileOptions 
            onPress={() => console.log("tap")}
            title="Change Password"
            icon={"key"}
          />
        </View>

        <View>
          <ProfileOptions 
            onPress={() => console.log("tap")}
            title="Get Help"
            icon={"help-circle"}
          />
        </View>

        <View>
          <ProfileOptions 
            onPress={() => console.log("tap")}
            title="Log Out"
            icon={"log-out"}
            color='red'
          />
        </View>

        
      </ScrollView>

      {/* Bottom Navigation Placeholder */}
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavLink}>
          <Ionicons name="home" size={24} color="black" />
          <Text>Home</Text>
        </View>  
        <View style={styles.bottomNavLink}>
          <FontAwesome6 name="note-sticky" size={24} color="grey" />
          <Text style={{color: 'grey'}}>History</Text>
        </View > 
        <View style={styles.bottomNavLink}>
          <Ionicons name="add-circle" size={70} color="green" />
        </View>
        <View style={styles.bottomNavLink}>
          <Ionicons name="pricetags-outline" size={24} color="grey" />
          <Text style={{color: 'grey'}}>Promo</Text>
        </View>
        <View style={styles.bottomNavLink}>
          <Ionicons name="person-outline" size={24} color="grey" />
          <Text style={{color: 'grey'}}>Profile</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  profileCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#00C851',
    borderRadius: 25,
    marginBottom: 15,
  },
  profileRectangle: {
    backgroundColor: '#121212',
    borderRadius: 25,
    padding: 20,
  },
  pointsHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  pointsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  historyGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyLink: {
    color: 'white',
  },
  profileInfo: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileInfoTextPhone: {
    alignItems: 'center',
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  phoneText: {
    color: '#fdfdfd',
  },
  editButton: {
    backgroundColor: '#00C851',
    borderRadius: 20,
    padding: 5,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  membership: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 2,
    paddingVertical: 2, 
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  membershipStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  membershipStatusText: {
    fontSize: 16,
    marginLeft: 5,
  },
  benefitsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  benefitsLink: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  logoutText: {
    marginLeft: 15,
    fontSize: 16,
    color: 'red',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderTopColor: '#ddd',
    height: 80,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  bottomNavLink: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default ProfilePage;
