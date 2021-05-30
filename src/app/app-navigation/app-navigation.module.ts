import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNavigationRoutingModule } from './app-navigation-routing.module';
import { AppNavigationComponent } from './app-navigation.component';


@NgModule({
  declarations: [
    AppNavigationComponent
  ],
  imports: [
    CommonModule,
    AppNavigationRoutingModule
  ]
})
export class AppNavigationModule { }
