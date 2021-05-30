import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'save-to-database', loadChildren: () => import('./save-to-database/save-to-database.module').then(m => m.SaveToDatabaseModule) }, { path: 'app-navigation', loadChildren: () => import('./app-navigation/app-navigation.module').then(m => m.AppNavigationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
