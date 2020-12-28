import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { ItemCountComponent } from './pagination/item-count.component';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [
    ItemCountComponent,
  ],
  exports: [
    SharedLibsModule,
    ItemCountComponent,
  ],
})
export class SharedModule {}
