import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { ToUpperPipe } from './pipes/to-upper.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [
    // Components
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent,
    // Pipes
    CanFlyPipe,
    ToUpperPipe,
    SortPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
