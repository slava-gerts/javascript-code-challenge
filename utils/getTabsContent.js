import {getConcepts} from './concepts'

export function getTabsContent() {
  return (
    `
    <div class="tab-content" id="pills-tabContent">
      ${getConcepts()}
      <div class="tab-pane fade" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab" tabindex="0">
        Tasks
      </div>
    </div>
    `
  )
}