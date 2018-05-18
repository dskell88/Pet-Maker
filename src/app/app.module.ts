import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetService } from './pet.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [PetService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
