import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
    ]

})
export class PagesModule {}