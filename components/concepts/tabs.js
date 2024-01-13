
import {renderContentById} from '../renderContent'

export const tabs = [
  {
    active: true,
    id: 'v-pills-primitives',
    renderContent: () => renderContentById('primitives'),
    title: 'Primitives',
  },
  {
    id: 'v-pills-functions',
    renderContent: () => renderContentById('functions'),
    title: 'Functions',
  }, 
  // {
  //   id: 'v-pills-objects',
  //   title: 'Objects',
  // },
  // {
  //   id: 'v-pills-collections',
  //   title: 'Collections',
  // },
  {
    id: 'v-pills-asynchronous',
    renderContent: () => renderContentById('asynchronous'),
    title: 'Asynchronous',
  }
]
