import {DataFetcher, HttpClient, DocumentService, UserService} from './singleResponsibility'
import {Footballer, Footballer2, PlayerRole, GoalkeeperRole, DefenderRole} from './openClosed'

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
  }
]