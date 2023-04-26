import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { GadgetCommonModule } from './common/gadget-common/gadget-common.module';
import { HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { GadgetGridCellHostComponent } from './gadget-grid-cell-host/gadget-grid-cell-host.component';

@NgModule({
  declarations: [
    BarChartComponent,
    GadgetGridCellHostComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    GadgetCommonModule,
    FormsModule,
    MatChipsModule,
    NgxChartsModule
  ],
    exports: [
      GadgetGridCellHostComponent,
      BarChartComponent
    ],
    providers: [

    ]

})
export class GadgetsModule {}
