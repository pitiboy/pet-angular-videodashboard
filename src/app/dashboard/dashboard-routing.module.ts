import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent },
  { path: 'play/:id', component: VideoDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
