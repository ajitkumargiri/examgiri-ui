import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollegeComponent } from '../list/college.component';
import { CollegeDetailComponent } from '../detail/college-detail.component';
import { CollegeUpdateComponent } from '../update/college-update.component';
import { CollegeRoutingResolveService } from './college-routing-resolve.service';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { DatatableComponent } from '../datatable/datatable.component';

const collegeRoute: Routes = [
  {
    path: '',
    component: CollegeComponent,
  },
  {
    path: ':id/view',
    component: CollegeDetailComponent,
    resolve: {
      college: CollegeRoutingResolveService,
    },
  },
  {
    path: 'new',
    component: CollegeUpdateComponent,
    resolve: {
      college: CollegeRoutingResolveService,
    },
  },
  {
    path: ':id/edit',
    component: CollegeUpdateComponent,
    resolve: {
      college: CollegeRoutingResolveService,
    },
  },
  {
    path: 'upload',
    component: UploadFilesComponent,
    resolve: {
      college: CollegeRoutingResolveService,
    },
  },
  {
    path: 'table',
    component: DatatableComponent,
    resolve: {
      college: CollegeRoutingResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(collegeRoute)],
  exports: [RouterModule],
})
export class CollegeRoutingModule {}
