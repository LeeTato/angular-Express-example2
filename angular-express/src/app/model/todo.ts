export class Todo {
    public id: number = Math.random();
    public userId!: number;
    constructor(public task:string){}
}
