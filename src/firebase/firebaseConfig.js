import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDO6C8X418C6rlKQWQjJqDR_XhBUdA2Uac',
  authDomain: 'chatdemo-726c1.firebaseapp.com',
  databaseURL:
    'https://chatdemo-726c1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chatdemo-726c1',
  storageBucket: 'chatdemo-726c1.appspot.com',
  messagingSenderId: '508725786873',
  appId: '1:508725786873:web:f1f5066faec091145f8a28',
  measurementId: 'G-HC0QQ4FTZB',
}

export const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
