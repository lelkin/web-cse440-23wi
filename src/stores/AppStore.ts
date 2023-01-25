import { CourseDataStore } from './CourseDataStore';

import { BrowserHistory } from "history";
import { RouterStore } from 'mobx-react-router';

/**
 * Interface of the application store.
 */
export interface AppStore {
    courseDataStore: CourseDataStore;
    publicPath: string;
    routerStore: RouterStore;
}

/**
 * Implementation of the application store.
 */
class AppStoreImpl implements AppStore {
    public courseDataStore: CourseDataStore;
    public publicPath: string;
    public routerStore: RouterStore;

    constructor(browserHistory: BrowserHistory, publicPath: string) {
        // Initialize our state
        this.courseDataStore = new CourseDataStore();

        // Initialize our router state
        this.publicPath = publicPath;
        this.routerStore = new RouterStore(browserHistory);
    }
}

/**
 * Singleton which holds the application store.
 */
let INSTANCE: AppStore | null = null;

/**
 * Create the application store.
 *
 * Enforces a singleton constraint.
 */
export function createAppStore(browserHistory: BrowserHistory, publicPath: string): AppStore {
    if (INSTANCE) {
        throw new Error('AppStore is a singleton.');
    }

    INSTANCE = new AppStoreImpl(browserHistory, publicPath);

    return getAppStore();
}

/**
 * Obtain the application store.
 */
export function getAppStore(): AppStore {
    if (INSTANCE === null) {
        throw new Error('AppStore not created.');
    }

    return INSTANCE;
}
