import {renderContentById} from '../renderContent'
import {getConceptsTabs} from './getConceptsTabs'
import {getConceptsContent} from './getConceptsContent'

const tabs = [
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

export function getConcepts() {
  return (
    `
    <div class="tab-pane fade show active" id="pills-concepts" role="tabpanel" aria-labelledby="pills-concepts-tab" tabindex="0">
      <div class="d-flex align-items-start">
        ${getConceptsTabs(tabs)}
        ${getConceptsContent(tabs)}
      </div>
    </div>
    `
  )
}