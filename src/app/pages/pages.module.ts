import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClaseComponent } from './clase/clase.component';

import { PipesTestingPipe } from '../pipes-testing.pipe';
import { PipeTransformPipe } from '../pipe-transform.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    PipesTestingPipe,
    PipeTransformPipe,
    ClaseComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent,
    PipesTestingPipe,
    PipeTransformPipe,
    ClaseComponent
  ]
})
export class PagesModule { }
