import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { MenuOutline, SearchOutline } from '@ant-design/icons-angular/icons';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

const icons = [MenuOutline, SearchOutline];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      NzIconModule
    ),
    { provide: NZ_ICONS, useValue: icons }, provideFirebaseApp(() => initializeApp({"projectId":"angular-auth-ad276","appId":"1:776650899810:web:e96fb9a1fb563cee892c3b","storageBucket":"angular-auth-ad276.firebasestorage.app","apiKey":"AIzaSyCRDeLhruEaiNc6-I5-sG0RqUL7CrGfxT8","authDomain":"angular-auth-ad276.firebaseapp.com","messagingSenderId":"776650899810"})), provideFirestore(() => getFirestore())
  ]
}).catch((err) => console.error(err));