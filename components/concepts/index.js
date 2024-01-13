
import {renderConceptsTabs} from './renderConceptsTabs'
import {renderConceptsContent} from './renderConceptsContent'
import {tabs} from './tabs'

export function renderConcepts() {
  return (
    `
    <div class="tab-pane fade show active" id="pills-concepts" role="tabpanel" aria-labelledby="pills-concepts-tab" tabindex="0">
      <div class="d-flex align-items-start">
        ${renderConceptsTabs(tabs)}
        ${renderConceptsContent(tabs)}
      </div>
    </div>
    `
  )
}