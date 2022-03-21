export class TodoItem{

    constructor(taskValue: string, completeValue: boolean = false){
        this.task = taskValue;
        this.complete = completeValue
    }
    task: string;
    complete: boolean;
}