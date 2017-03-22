import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { ListaPage } from '../pages/lista/lista';
import { UpdatePage } from '../pages/update/update';
import { TabsPage } from '../pages/tabs/tabs';

//provides

import { VarsGlobales } from '../providers/vars-globales';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UpdatePage,
    ListaPage,
    AddPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UpdatePage,
    ListaPage,
    AddPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},VarsGlobales]
})
export class AppModule {}
