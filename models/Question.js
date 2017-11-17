const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }

  insert(){
    const self = this
    const sql = `INSERT INTO questions (id, content) VALUES (?,?)`

    return new Promise(function(resolve){
      db.run(sql, [self.id, self.content], function(){
        self.id = this.lastID
        resolve(self)
      })
    })

  }

  constructor(content){
    this.content = content
  }

}

module.exports = Question;
