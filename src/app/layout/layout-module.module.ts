import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppHeaderComponent } from './app-header/app-header.component';

const componentList = [
  AppHeaderComponent
]


@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: componentList
})
export class LayoutModuleModule { }
