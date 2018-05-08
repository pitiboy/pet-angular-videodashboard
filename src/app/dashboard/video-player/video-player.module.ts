import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideoPlayerComponent } from './video-player.component';


const routes: Routes = [
  { path: '', component: null },
  { path: 'play/:id', component: VideoPlayerComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VideoPlayerComponent]
})
export class DashboardModule { }
