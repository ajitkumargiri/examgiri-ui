import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'college',
        data: { pageTitle: 'Colleges' },
        loadChildren: () => import('./college/college.module').then(m => m.CollegeModule),
      },

    ]),
  ],
})
export class EntityRoutingModule {}
