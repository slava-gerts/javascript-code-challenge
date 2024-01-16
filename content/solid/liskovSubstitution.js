export class Database {
  connect() {}
  read() {}
  write() {}
  joinTables() {}
}

export class MySqlDatabase extends Database {
  joinTables() {}
}

export class MongoDatabase extends Database {
  joinTables() {
    throw new Error("Can't join tables")
  }
}

export class Database2 {
  connect() {}
  read() {}
  write() {}
}

export class SqlDatabase extends Database2 {
  joinTables() {}
}

export class NoSqlDatabase extends Database2 {
  createIndex() {}
}

export class MySqlDatabase2 extends SqlDatabase {

}

export class MongoDatabase2 extends NoSqlDatabase {
  
}