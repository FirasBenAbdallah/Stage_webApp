import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexAnneeComponent } from './index-annee/index-annee.component';
import { NewAnneComponent } from './new-anne/new-anne.component';
import { IndexProjetComponent } from './index-projet/index-projet.component';
import { NewProjetComponent } from './new-projet/new-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexAnneeComponent,
    NewAnneComponent,
    IndexProjetComponent,
    NewProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

