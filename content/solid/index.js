import {DataFetcher, HttpClient, DocumentService, UserService} from './singleResponsibility'
import {Footballer, Footballer2, PlayerRole, GoalkeeperRole, DefenderRole} from './openClosed'
import {Database, MySqlDatabase, MongoDatabase, Database2, SqlDatabase, NoSqlDatabase, MySqlDatabase2, MongoDatabase2} from './liskovSubstitution'

export const content = [
  {
    title: 'Single Responsibility Principle',
    preInformation: [
      'Your class or method should have only one reason to change',
      'Your class or method should have only one responsibility to take care of'
    ],
    data: [
      '///////////////////////////////',
      "// Bad example (don't do it) //",
      '///////////////////////////////',
      `${DataFetcher}`,
      ' ',
      '////////////////////////////',
      '// A possible improvement //',
      '////////////////////////////',
      `${HttpClient}`,
      ' ',
      `${UserService}`,
      ' ',
      `${DocumentService}`
    ]
  },
  {
    title: 'Open Closed Principle',
    preInformation: [
      'Software entities (classes, modules, functions and etc.) should be open for extension, but closed for modification',
    ],
    data: [
      '///////////////////////////////',
      "// Bad example (don't do it) //",
      '///////////////////////////////',
      `${Footballer}`,
      ' ',
      '////////////////////////////',
      '// A possible improvement //',
      '////////////////////////////',
      `${Footballer2}`,
      ' ',
      '// PlayerRole class uses the getRole method',
      `${PlayerRole}`,
      ' ',
      `${GoalkeeperRole}`,
      ' ',
      `${DefenderRole}`,
      ' ',
      'new Footballer("Neo Poli", 32, new DefenderRole())'
    ]
  },
  {
    title: 'Liskov Substitution Principle',
    preInformation: [
      'Objects of a superclass should be replaceable by objects of a subclass without affecting the correctness of the program'
    ],
    data: [
      '///////////////////////////////',
      "// Bad example (don't do it) //",
      '///////////////////////////////',
      `${Database}`,
      ' ',
      `${MySqlDatabase}`,
      ' ',
      `${MongoDatabase}`,
      ' ',
      '////////////////////////////',
      '// A possible improvement //',
      '////////////////////////////',
      `${Database2}`,
      ' ',
      `${SqlDatabase}`,
      ' ',
      `${NoSqlDatabase}`,
      ' ',
      `${MySqlDatabase2}`,
      ' ',
      `${MongoDatabase2}`,
    ],
  }
]