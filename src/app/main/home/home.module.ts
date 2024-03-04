import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import {
    BirdSimulationCanvasComponent
} from '../shared/component/bird-simulation-canvas/bird-simulation-canvas.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ImgTemplateComponent } from '../shared/img-template/img-template.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const routes = [
    {
        path: '',
        component: HomeComponent,

    }
];

@NgModule({
    declarations: [HomeComponent, BirdSimulationCanvasComponent, ImgTemplateComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
    ]
})
export class HomeModule {
}
