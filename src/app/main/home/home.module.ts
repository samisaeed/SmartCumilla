import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {
    BirdSimulationCanvasComponent
} from '../shared/component/bird-simulation-canvas/bird-simulation-canvas.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";


const routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [HomeComponent, BirdSimulationCanvasComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatSelectModule,
    ]
})
export class HomeModule {
}