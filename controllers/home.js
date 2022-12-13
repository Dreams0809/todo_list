const Todo = require('../models/todos.js')


module.exports = {
    getIndex: async (request, response) => {
    const todoItems = await Todo.find()
    const itemsLeft = await Todo.countDocuments({completed: false})
    response.render('index.ejs', { items: todoItems, left: itemsLeft })
    }
//      db.collection('todo').find().toArray()
//     .then(data =>{
//          db.collection('todos').countDocuments({completed: false})
//         .then(itemsLeft => {
//              response.render('index.ejs', {items: data, left: itemsLeft})
//          })
//      })
// })

}