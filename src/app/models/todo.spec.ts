import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo(1, 1, 'TEST', true)).toBeTruthy();
    expect(new Todo({ userId: 1, id: 1, title: 'TEST', completed: true })).toBeTruthy();
    expect(new Todo({ userId: 1, id: 1, title: 'TEST', completed: true })).toBeTruthy();
    // @ts-ignore 意図的なエラー
    expect(() => new Todo({} as any)).toThrowError();
  });
});
