import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import modalReducer from "./modal/modalSlice";
import productsReducer from "./products/productsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    cart: cartReducer,
    modal: modalReducer,
    products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
