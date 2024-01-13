import {mapJoin} from '../../utils/map'

export function getConceptsTabs(tabs) {
  return (
    `
    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      ${
        mapJoin(tabs, ({active, title, id}) => {
          return (
            `
            <button class="nav-link ${active ? 'active': ''}" id="${id}-tab" data-bs-toggle="pill" data-bs-target="#${id}" type="button" role="tab" aria-controls="${id}" aria-selected="${active}">
              ${title}
            </button>
            `
          )
        })
      }
    </div>
    `
  )
}