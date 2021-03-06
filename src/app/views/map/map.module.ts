import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MapRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [ MapComponent ]
})
export class MapModule { }
