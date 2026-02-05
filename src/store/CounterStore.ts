import {configureStore, combineReducers} from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'


// export const counterStore = configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })

const rootReducer = combineReducers({
  counter: counterReducer,
})

const persistConfig = {
  key: 'root',           // key name in AsyncStorage
  storage: AsyncStorage // where to save
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
})


export const persistor = persistStore(store)





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch