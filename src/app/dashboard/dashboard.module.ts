import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [VideoListComponent, VideoDashboardComponent, VideoPlayerComponent, StatFiltersComponent, VideoThumbnailComponent]
})
export class DashboardModule { }
