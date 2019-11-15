import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

// a pre-made reducer for firestore
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
})

// state
export default rootReducer