export class Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(arg: { userId: number, id: number, title: string, completed: boolean });
  constructor(userId: number, id: number, title: string, completed: boolean);
  constructor(
    arg: number | {
      userId: number,
      id: number,
      title: string,
      completed: boolean
    },
    id?: number,
    title?: string,
    completed?: boolean
  ) {
    if (typeof arg === 'object' &&
      'userId' in arg &&
      'id' in arg &&
      'title' in arg &&
      'completed' in arg
    ) {
      const { userId, id, title, completed } = arg;
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.completed = completed;
    } else if (typeof arg === 'number' && id && title && completed) {
      this.userId = arg;
      this.id = id;
      this.title = title;
      this.completed = completed;
    } else {
      throw new Error('Invalid constructor args');
    }
  }
}
