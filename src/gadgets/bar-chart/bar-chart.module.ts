import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import { GadgetsModule } from '../gadgets.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {DynamicFormModule} from "../../dynamic-form/dynamic-form-module";
import {GadgetCommonModule} from "../common/gadget-common/gadget-common.module";
@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule,
    GadgetsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    DynamicFormModule,
    GadgetCommonModule
  ],
  exports:[
    BarChartComponent
  ],
  providers:[

  ]
})
export class BarChartModule { }
