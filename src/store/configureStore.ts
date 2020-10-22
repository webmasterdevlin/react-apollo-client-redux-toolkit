import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { forceReducerReload } from "redux-injectors";
import { createReducer } from "./reducers";

export function configureAppStore() {
    const store = configureStore({
        reducer: createReducer(),
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ["persist/PERSIST"],
                },
            }),
        ],
        devTools:
            /* istanbul ignore next line */
            process.env.NODE_ENV !== "production" || process.env.PUBLIC_URL.length > 0,
    });

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept("./reducers", () => {
            forceReducerReload(store);
        });
    }

    return store;
}
