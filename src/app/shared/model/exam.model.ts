import { Moment } from 'moment';
import { IFormFillUp } from 'app/shared/model/form-fill-up.model';
import { IStudent } from 'app/shared/model/student.model';

export interface IExam {
  id?: number;
  name?: string;
  code?: string;
  date?: Moment;
  startTime?: Moment;
  endTime?: Moment;
  formFillUp?: IFormFillUp;
  students?: IStudent[];
}

export class Exam implements IExam {
  constructor(
    public id?: number,
    public name?: string,
    public code?: string,
    public date?: Moment,
    public startTime?: Moment,
    public endTime?: Moment,
    public formFillUp?: IFormFillUp,
    public students?: IStudent[]
  ) {}
}
