import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage';

import { AboutPage } from '../pages/home-admin/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { HomeAdminPage } from '../pages/home-admin/home-admin'
import { HomeUserPage } from '../pages/home-user/home-user'
import { TabsPage } from '../pages/home-admin/tabs/tabs';
import { GodfathersPage} from "../pages/home-admin/godfathers/list/godfathers-list";
import { GodfathersPopoverPage } from "../pages/home-admin/godfathers/list/godfathers-popover/godfathers-popover";
import { GodfathersDetailPage } from "../pages/home-admin/godfathers/detail/godfathers-detail";
import { GodfathersDetailPopoverPage } from "../pages/home-admin/godfathers/detail/popover/godfathers-detail-popover";
import { GodsonsPage } from "../pages/home-admin/godsons/list/godsons-list";
import { GodsonsPopoverPage } from "../pages/home-admin/godsons/list/popover/godsons-popover";
import { GodsonsDetailPage } from "../pages/home-admin/godsons/detail/godsons-detail";
import { UserProvider } from '../providers/user/user';
import { GodsonProvider } from '../providers/godson/godson';
import {File} from "@ionic-native/file";
import {Camera} from "@ionic-native/camera";
import { GodfatherProvider } from '../providers/godfather/godfather';
import { Singleton } from '../providers/singleton/singleton';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    HomeAdminPage,
    HomeUserPage,
    GodfathersPage,
    GodfathersDetailPage,
    GodfathersDetailPopoverPage,
    GodfathersPopoverPage,
    GodsonsPage,
    GodsonsPopoverPage,
    GodsonsDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    LoginPage,
    RegisterPage,
    HomeAdminPage,
    HomeUserPage,
    GodfathersPage,
    GodfathersDetailPage,
    GodfathersDetailPopoverPage,
    GodfathersPopoverPage,
    GodsonsPage,
    GodsonsPopoverPage,
    GodsonsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    File,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    GodsonProvider,
    GodfatherProvider,
    Singleton
  ]
})
export class AppModule {}
