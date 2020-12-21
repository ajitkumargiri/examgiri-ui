import { Moment } from 'moment';
import { IExam } from 'app/shared/model/exam.model';

export interface IStudent {
  id?: number;
  regNumber?: string;
  fname?: string;
  lname?: string;
  dob?: Moment;
  image?: string;
  fatherName?: string;
  motherName?: string;
  sign?: string;
  email?: string;
  phoneNumber?: string;
  exams?: IExam[];
}

export class Student implements IStudent {
  constructor(
    public id?: number,
    public regNumber?: string,
    public fname?: string,
    public lname?: string,
    public dob?: Moment,
    public image?: string,
    public fatherName?: string,
    public motherName?: string,
    public sign?: string,
    public email?: string,
    public phoneNumber?: string,
    public exams?: IExam[]
  ) {}
}
