import { View, Text, TouchableOpacity, Image,TextInput,StyleSheet,ScrollView, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Auth } from '../services'

const SignupScreen = ({navigation}) => {
  const [ userName, setUserName ]= useState()
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()
  return (
     <SafeAreaView
     style={{paddingHorizontal: 20, flex: 1, backgroundColor: '#fff'}}>
       <ScrollView showsVerticalScrollIndicator={false}>

       <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 35, color:'#000'}}>
            MED
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 35, color:'#64beff'}}>
            LIST
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: '#000'}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: '#a5a5a5'}}>
            Sign up to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={Styles.inputContainer}>
            <Icon
              name="person-outline"
              color='#a5a5a5'
              size={20}
              style={Styles.inputIcon}
            />
            <TextInput placeholder="Name" style={Styles.input}
                  value={userName}
                  onChangeText={e => setUserName(e)} 
              />
          </View>
          <View style={Styles.inputContainer}>
            <Icon
              name="mail-outline"
              color='#a5a5a5'
              size={20}
              style={Styles.inputIcon}
            />
            <TextInput placeholder="Email" style={Styles.input}
                  value={email}
                  onChangeText={e => setEmail(e)} 
              />
          </View>
          <View style={Styles.inputContainer}>
            <Icon
              name="lock-outline"
              color='#a5a5a5'
              size={20}
              style={Styles.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={Styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={e => setPassword(e)}
            />
          </View>
          <View style={Styles.btnPrimary}>
          <TouchableOpacity onPress={() => Auth.signUp(userName, email, password)}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign Up
            </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={Styles.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
          
            <View style={Styles.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={Styles.btnSecondary}>
            <TouchableOpacity onPress={() => alert("Login With Facebook")}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              </TouchableOpacity>
              <Image
                style={Styles.btnImage}
                source={require('../images/coffee.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={Styles.btnSecondary}>
            <TouchableOpacity onPress={() => Auth.googleLogin()}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              </TouchableOpacity>
              <Image
                style={Styles.btnImage}
                source={require('../images/coffee.png')}
              />
           
            </View>
          </View>
       </View>

       <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: '#a5a5a5', fontWeight: 'bold'}}>
          Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{color: '#ff2d5f', fontWeight: 'bold'}}>
            Sign in
            </Text>
          </TouchableOpacity>
         
        </View>



       <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text>LoginScreen</Text>
          </TouchableOpacity>
       </ScrollView>
      
     </SafeAreaView>
   
   
   
   
    
 
  )
}

export default SignupScreen;

const Styles = StyleSheet.create({
  inputContainer:
   {flexDirection: 'row', marginTop: 20},
  input: {
    color: '#a5a5a5',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor:  '#a5a5a5',
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: '#28388f',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
})