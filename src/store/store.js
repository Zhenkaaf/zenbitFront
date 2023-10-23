import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import dealsReducer from "./dealsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  authRed: authReducer,
  dealsRed: dealsReducer,
});

const persistConfig = {
  key: "zenbit",
  storage,
  stateReconciler: (inboundState, originalState) => {
    return {
      ...originalState,
      authRed: {
        ...originalState.authRed,
        user: inboundState.authRed.user,
      },
    };
  },
  /*  whitelist: ["authRed"], */
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
