import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNavigationComponent } from './app-navigation.component';

const routes: Routes = [{ path: '', component: AppNavigationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppNavigationRoutingModule { }
