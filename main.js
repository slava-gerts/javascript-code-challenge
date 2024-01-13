import javascriptLogo from '/javascript.svg'
import {renderTabs, renderTabsContent} from './components'

import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Javascript code challenge</h1>
  </header>
  <main>
    ${renderTabs()}
    ${renderTabsContent()}
  </main>
`