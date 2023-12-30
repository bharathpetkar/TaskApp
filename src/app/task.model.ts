export class Task {
    constructor(public id: number, public title: string, public description: string, public completed: boolean) { }
}
export interface Task{
    id: number;
    titel: string;
    description: string;
    completed: boolean;
}