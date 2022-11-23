import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ProfilComponent } from './profil/profil.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
