import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const signUp = async (fullName, email, password) => {
    if(!fullName || !email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    try {
        const cred = await auth().createUserWithEmailAndPassword(email, password);
        const { uid } = cred.user;

        auth().currentUser.updateProfile({
            displayName: fullName
        });
        const uid_1 = uid;
        return createUserInDb(uid_1, fullName, email);
    } catch (err) {
        return Alert.alert(err.code, err.message);
    }
}

//SignIn Module
const signIn = async (email, password) => {
    if(!email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    try {
        await auth().signInWithEmailAndPassword(email, password);
    } catch (err) {
        return Alert.alert(err.code, err.message);
    }
}

const signOut = () => {
    return auth().signOut()
}
const Auth = {
    signUp,
    signIn,
    signOut,
    
}

export default Auth;
