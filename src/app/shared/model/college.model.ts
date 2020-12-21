

export interface ICollege {
  id?: number;
  name?: string;
  code?: string;
}

export class College implements ICollege {
  constructor(public id?: number, public name?: string, public code?: string) {}
}
