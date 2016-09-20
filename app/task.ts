export class Task {
  constructor (
    public id: number,
    public name: string,
    public completed: boolean,
    public priority: number,
    public difficulty: number,
    public points: number
  ) {}

}