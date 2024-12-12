import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <view style={styles.header}>
        <Text style={styles.headerText}>
          Fejrész
        </Text>
      </view>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, deleniti? Cum accusamus, impedit error placeat eum rerum quia, odio assumenda molestiae aliquam dignissimos vitae sit alias perferendis iure id voluptatibus!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, deleniti? Cum accusamus, impedit error placeat eum rerum quia, odio assumenda molestiae aliquam dignissimos vitae sit alias perferendis iure id voluptatibus!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, deleniti? Cum accusamus, impedit error placeat eum rerum quia, odio assumenda molestiae aliquam dignissimos vitae sit alias perferendis iure id voluptatibus!        
        </Text>
      </View>
      <view style={styles.footer}>
        <Text>Lábrész</Text>
      </view>

      <StatusBar style="auto" />
      
    </ScrollView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    // alignItems: 'center',
    // justifyContent: 'center',    
  },
  header: {
    marginTop: 24,    
    backgroundColor: 'red',
    width: '100%',
    padding: 10,
    textAlign: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 40,    
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  bodyText: {
    fontSize: 20,
  },
  footer: {},
});
