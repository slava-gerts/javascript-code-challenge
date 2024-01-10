import {primitives} from '../content'

const content = {
  'primitives': primitives
}

export function getContentById(id) {
  const contentById = content[id]

  return (
    contentById.map(({data, title}) => {
      return (
        `
          <li>
            <h4>${title}</h4>
            <code data-language="js">${Array.isArray(data) ? data.map(item => `<span class="code-line">${item}</span>`).join('') : data}</code>
          </li>
        `
      )
    })
  ).join('')
}
