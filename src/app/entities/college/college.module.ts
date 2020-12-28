import { NgModule } from '@angular/core';

import { CollegeComponent } from './list/college.component';
import { CollegeDetailComponent } from './detail/college-detail.component';
import { CollegeUpdateComponent } from './update/college-update.component';
import { CollegeDeleteDialogComponent } from './delete/college-delete-dialog.component';
import { CollegeRoutingModule } from './route/college-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbThemeModule,
} from '@nebular/theme';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { DatatableComponent } from './datatable/datatable.component';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    CollegeRoutingModule,
    NbCardModule,
    NbThemeModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
    NbIconModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
  ],
  declarations: [
    CollegeComponent,
    CollegeDetailComponent,
    CollegeUpdateComponent,
    CollegeDeleteDialogComponent,
    UploadFilesComponent,
    DatatableComponent
  ],
  entryComponents: [CollegeDeleteDialogComponent],
})
export class CollegeModule {}
