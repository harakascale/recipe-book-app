// import { CommonModule } from "@angular/common";
// import { NgModule } from "@angular/core";
// import { AlertComponent } from "./alert/alert.component";
// import { DropdownDirective } from "./dropdown.directive";
// import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
// import { PlaceholderDirective } from "./placeholder-directive/placeholder.directive";

// @NgModule({
//   declarations: [
//     AlertComponent,
//     LoadingSpinnerComponent,
//     PlaceholderDirective,
//     DropdownDirective
//   ],
//   imports:[
//     CommonModule  //this module is to be used instead of BrowserModule, as BrowserModule is to be used only once
//   ],
//   exports: [
//     AlertComponent,
//     LoadingSpinnerComponent,
//     PlaceholderDirective,
//     DropdownDirective,
//     CommonModule
//   ]
// })
// export class SharedModule {

// }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';

import { PlaceholderDirective } from './placeholder-directive/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
