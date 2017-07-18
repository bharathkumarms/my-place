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
    IonicModule.forRoot(MyApp)
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
