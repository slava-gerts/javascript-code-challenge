import {primitives} from '../content'
import {mapJoin} from '../utils/map'

const content = {
  'primitives': primitives
}

export function getContentById(id) {
  const contentById = content[id]
  if (contentById?.length < 1) return 'Incorrect data'

  return (
    mapJoin(contentById, ({data, title, preInformation, notes, references}) => {
      return (
        `
          <li>
            <h4>${title}</h4>
            ${
              preInformation?.length > 0
                ? `
                    <ul>
                      ${mapJoin(preInformation, (item => {
                        return `<li>${item}</li>`
                      }))}
                    </ul>
                  `
                : ''
            }
            <pre><code data-language="js">${Array.isArray(data) ? mapJoin(data, item => `<span class="code-line">${item}</span>`) : data}</code></pre>
            ${
              notes 
                ? `
                    <div id="notes">
                      <h5>Notes</h5>
                      <p>${notes}</p>
                    </div>
                  ` 
                : ''
              }
            ${references?.length > 0 
              ? `
                  <div id="references">
                    <h5>References</h5>
                    <ul>
                      ${mapJoin(references, (({title, href}) => {
                        return `<li><a href=${href} target="_blank" rel="noopener noreferrer">${title ?? href}</a></li>`
                      }))}
                    </ul>
                  </div>
                `
              : ''
            }
          </li>
        `
      )
    })
  )
}
