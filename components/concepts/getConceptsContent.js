import {mapJoin} from '../../utils/map'

export function getConceptsContent(tabs) {
  return (
    `
    <div class="tab-content" id="v-pills-tabContent">
      ${
        mapJoin(tabs, ({active, renderContent, id}) => {
          return (
            `
            <div class="tab-pane fade show ${active ? 'active' : ''}" id="${id}" role="tabpanel" aria-labelledby="${id}-tab" tabindex="0">
              <ol>
                ${renderContent?.() ?? 'Under construction'}
              </ol>
            </div>
            `
          )
        })
      }
    </div>
    `
  )
}