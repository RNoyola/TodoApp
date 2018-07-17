var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict')

describe('Reducers', () =>{
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchText)
    })
  });

  describe('showCompletedReducer', () => {
    it('should change the state from false to true or viceversa', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer(df(false),df(action));

      expect(res).toEqual(true)
    });
  });

  describe('authReducer', () => {
    it('should add the uid', () => {
      const action = {
        type: 'LOGIN',
        uid: '12a3s'
      }
      const auth = {
        uid: '12a3s'
      }
      const res = reducers.authReducer(df({}), df(action))
      expect(res).toEqual(auth)
    })

    it('should remove uid on LOGOUT', () =>{
      const action = {
        type: 'LOGOUT'
      }
      const auth = {
        uid: '12a3s'
      }
      const res = reducers.authReducer(df(auth), df(action))
      expect(res).toEqual({})
    })
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Walk the dog',
          completed: false,
          createdAt: 2135436512
        }
      };
      var res = reducers.todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo)
    });

    it('should update toggle todo', () => {

      var todos = [{
        id: 1,
        text: 'Eat pizza',
        completed:true,
        createdAt: 13546874,
        completedAt: 1235
      }];

      var updates = {
        completed: false,
        completedAt: null
      }

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos),df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
        expect(res[0].text).toEqual(todos[0].text);
    })

    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'shit',
        completed:false,
        createdAt: 4531523,
        completedAt: undefined
      }]
      var action = {
          type: 'ADD_TODOS',
          todos
      };
      var res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)

      expect(res[0]).toEqual(todos[0])
    })

  });
});
