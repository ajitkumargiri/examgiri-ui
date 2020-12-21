import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'college',
        loadChildren: () => import('./college/college.module').then(m => m.CollegeModule),
      },

    ]),
  ],
})
export class EntityModule {}
