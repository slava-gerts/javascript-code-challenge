import {renderConcepts} from './concepts'

export function renderTabsContent() {
  return (
    `
    <div class="tab-content" id="pills-tabContent">
      ${renderConcepts()}
      <div class="tab-pane fade" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab" tabindex="0">
        Tasks
      </div>
    </div>
    `
  )
}