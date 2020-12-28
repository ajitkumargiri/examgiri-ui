import { ICollege } from "./ICollege";


export class College implements ICollege {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
    ) {
    }
}
