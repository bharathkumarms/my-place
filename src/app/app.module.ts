import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewsPage} from '../pages/news/news';
import {GrievancePage} from '../pages/grievance/grievance';
import {HirePage} from '../pages/hire/hire';

import {GrievenceService} from  '../services/grievance.service'

import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabaseModule } from "angularfire2/database"; 
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

var firebaseConfig = {
    apiKey: "AIzaSyD3FSo0SFO-d4Ls-QtctRUca0NPHGuHwlU",
    authDomain: "my-place-e347a.firebaseapp.com",
    databaseURL: "https://my-place-e347a.firebaseio.com",
    projectId: "my-place-e347a",
    storageBucket: "my-place-e347a.appspot.com",
    messagingSenderId: "857434892988"
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '75fe27ce',
  },
  'push': {
    'sender_id': '857434892988',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
    GrievancePage,
    HirePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsPage,
    GrievancePage,
    HirePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GrievenceService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
