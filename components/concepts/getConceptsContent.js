import {getContentById} from '../getContent'
import {mapJoin} from '../../utils/map'

const tabs = [
  {
    active: true,
    id: 'v-pills-primitives',
    getContent: () => getContentById('primitives'),
  },
  {
    id: 'v-pills-functions',
  }, 
  {
    id: 'v-pills-objects',
  },
  {
    id: 'v-pills-collections',
  },
  {
    id: 'v-pills-asynchronous',
  }
]

export function getConceptsContent() {
  return (
    `
    <div class="tab-content" id="v-pills-tabContent">
      ${
        mapJoin(tabs, ({active, getContent, id}) => {
          return (
            `
            <div class="tab-pane fade show ${active ? 'active' : ''}" id="${id}" role="tabpanel" aria-labelledby="${id}-tab" tabindex="0">
              <ol>
                ${getContent?.() ?? 'Under construction'}
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