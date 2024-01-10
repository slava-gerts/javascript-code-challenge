const tabs = [
  {
    active: true,
    title: 'Concepts',
    id: 'pills-concepts',
  },
  {
    title: 'Tasks',
    id: 'pills-tasks',
  }
]

export function getTabs() {
  return (
    `
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          ${
            tabs.map(({active, title, id}) => {
              return (
                `
                  <button class="nav-link ${active ? 'active' : ''}" id="${id}-tab" data-bs-toggle="pill" data-bs-target="#${id}" type="button" role="tab" aria-controls="${id}" aria-selected="${!!active}">
                    ${title}
                  </button>
                `
              )
            }).join('')
          }
        </div>
      </nav>
    `
  )
}