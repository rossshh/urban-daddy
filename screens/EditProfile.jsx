import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
  ImageBackground
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import * as ImagePicker from 'expo-image-picker'

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@example.com')
  const [phone, setPhone] = useState('+1234567890')
  const [dob, setDob] = useState(new Date(1990, 1, 1))
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [profilePicture, setProfilePicture] = useState(
    'https://i3.wp.com/static.vecteezy.com/system/resources/previews/008/302/462/non_2x/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg?ssl=1'
  )
  const [shippingAddress, setShippingAddress] = useState(
    ' Silicon Hills, near DLF cybercity, Patia, Bhubaneswar, Odisha 751024'
  )
  const [editing, setEditing] = useState(false)

  const [initialState, setInitialState] = useState({
    name,
    email,
    phone,
    dob,
    profilePicture,
    shippingAddress
  })

  const handleSave = () => {
    setInitialState({
      name,
      email,
      phone,
      dob,
      profilePicture,
      shippingAddress
    })
    setEditing(false)
  }

  const handleCancel = () => {
    setName(initialState.name)
    setEmail(initialState.email)
    setPhone(initialState.phone)
    setDob(initialState.dob)
    setProfilePicture(initialState.profilePicture)
    setShippingAddress(initialState.shippingAddress)
    setEditing(false)
  }

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob
    setShowDatePicker(Platform.OS === 'ios')
    setDob(currentDate)
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setProfilePicture(result.uri)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={styles.backgroundImage}
      >
        {/* <ScrollView contentContainerStyle={{ paddingBottom: 20 }}> */}
        <Text style={styles.heading}>Your Profile</Text>
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={{ uri: profilePicture }}
              style={styles.profilePicture}
            />
            <Ionicons
              name='camera'
              size={24}
              color={'black'}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            editable={editing}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            editable={editing}
            keyboardType='email-address'
          />

          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            editable={editing}
            keyboardType='phone-pad'
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={styles.datePickerButton}
          >
            <Text style={styles.datePickerText}>{dob.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dob}
              mode='date'
              display='default'
              onChange={handleDateChange}
            />
          )}

          <Text style={styles.label}>Shipping Address</Text>
          <TextInput
            style={styles.textArea}
            value={shippingAddress}
            onChangeText={setShippingAddress}
            editable={editing}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.buttonsContainer}>
          {editing ? (
            <>
              <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setEditing(true)}
            >
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          )}
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 5
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    borderColor: 'primary',
    borderWidth: 1
  },
  formContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'white'
  },
  textArea: {
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'white',
    textAlignVertical: 'center'
  },
  datePickerButton: {
    height: 40,
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: 'darkGray'
  },
  datePickerText: {
    color: 'white'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    backgroundColor:'white',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold'
  }
})

export default EditProfile