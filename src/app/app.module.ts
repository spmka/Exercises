import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  imports: [BrowserModule, CommonModule, MaterialModule],
  declarations: [AppComponent, ExerciseComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
