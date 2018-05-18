import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PETS } from './mock-pets';
import { PetService } from '../pet.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
  
})
export class PetsComponent implements OnInit {


  pets: Pet[];
  constructor(private petService: PetService) { } //inject PetService
 

  

  ngOnInit() {
    this.getPets();                             //call getPets() method
  }

  getPets(): void {
    this.petService.getPets()                   //waits to EMIT an array of Pets
        .subscribe(pets => this.pets = pets);   //sets component property
  }

}
