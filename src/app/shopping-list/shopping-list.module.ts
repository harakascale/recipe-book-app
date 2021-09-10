// import { CommonModule } from "@angular/common";
// import { NgModule } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { RouterModule } from "@angular/router";
// import { SharedModule } from "../shared/shared.module";
// import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
// import { ShoppingListComponent } from "./shopping-list.component";

// @NgModule({
//   declarations: [
//     ShoppingListComponent,
//     ShoppingEditComponent,
//   ],
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule.forChild([
//       { path: 'shopping-list', component: ShoppingListComponent },
//     ]),
//     // SharedModule
//   ]
// })

// export class ShoppingListModule{

// }
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: 'shopping-list', component: ShoppingListComponent },
    ]),
    SharedModule
  ]
})
export class ShoppingListModule {}
