import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


import { SaveToDatabaseRoutingModule } from './save-to-database-routing.module';
import { SaveToDatabaseComponent } from './save-to-database.component';

@NgModule({
  declarations: [
    SaveToDatabaseComponent
  ],
  imports: [
    CommonModule,
    SaveToDatabaseRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class SaveToDatabaseModule{
}
