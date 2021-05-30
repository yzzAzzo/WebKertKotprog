import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveToDatabaseComponent } from './save-to-database.component';

const routes: Routes = [{ path: '', component: SaveToDatabaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaveToDatabaseRoutingModule { }
