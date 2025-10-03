import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ 
        projectId: "ribeirofamily-ac13e", 
        appId: "1:529531568319:web:3ebcc1961f8ec1f15f860a", 
        storageBucket: "ribeirofamily-ac13e.firebasestorage.app", 
        apiKey: "AIzaSyB-67wYkv2JRM8Q6YeBu9Cfg-RgJk8kxUU", 
        authDomain: "ribeirofamily-ac13e.firebaseapp.com" 
    })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ]
};
