import {getConceptsTabs} from './getConceptsTabs'
import {getConceptsContent} from './getConceptsContent'

export function getConcepts() {
  return (
    `
    <div class="tab-pane fade show active" id="pills-concepts" role="tabpanel" aria-labelledby="pills-concepts-tab" tabindex="0">
      <div class="d-flex align-items-start">
        ${getConceptsTabs()}
        ${getConceptsContent()}
      </div>
    </div>
    `
  )
}