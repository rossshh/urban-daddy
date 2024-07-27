import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  Linking
} from 'react-native'

const Feedback = () => {
  const [feedback, setFeedback] = useState('')

  const handleSubmitFeedback = () => {
    if (feedback.trim() === '') {
      Alert.alert('Feedback', 'Please enter your feedback before submitting.')
    } else {
      Alert.alert('Feedback', 'Thank you for your feedback!')
      setFeedback('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.heading}>Help & Feedback</Text>

        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>FAQs</Text>
          <Text style={styles.cardDescription}>
            Find answers to common questions.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <Text style={styles.cardTitle}>Contact Support</Text>
          <Text style={styles.cardDescription}>
            Get in touch with our support team for help.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            Linking.openURL('https://affiliate.flipkart.com/terms-of-use')
          }
        >
          <Text style={styles.cardTitle}>Terms of Service</Text>
          <Text style={styles.cardDescription}>
            Review our terms of service.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            Linking.openURL('https://www.flipkart.com/pages/privacypolicy')
          }
        >
          <Text style={styles.cardTitle}>Privacy Policy</Text>
          <Text style={styles.cardDescription}>
            Learn about how we handle your data.
          </Text>
        </TouchableOpacity>

        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackHeading}>Feedback</Text>
          <Text style={styles.feedbackDescription}>
            We'd love to hear your thoughts!
          </Text>
          <TextInput
            style={styles.textArea}
            value={feedback}
            onChangeText={setFeedback}
            placeholder='Enter your feedback here...'
            placeholderTextColor={'gray'}
            multiline
            numberOfLines={4}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmitFeedback}
          >
            <Text style={styles.submitButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightGray',
    padding: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkgreen',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 60
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 15
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  cardDescription: {
    fontSize: 14,
    color: 'darkGray'
  },
  feedbackSection: {
    marginTop: 20
  },
  feedbackHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10
  },
  feedbackDescription: {
    fontSize: 14,
    color: 'darkGray',
    marginBottom: 15
  },
  textArea: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: 'black',
    textAlignVertical: 'top'
  },
  submitButton: {
    padding: 15,
    backgroundColor: 'darkgreen',
    borderRadius: 8,
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Feedback