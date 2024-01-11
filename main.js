import javascriptLogo from '/javascript.svg'
import {getTabs, getTabsContent} from './components'

import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Javascript code challenge</h1>
  </header>
  <main>
    ${getTabs()}
    ${getTabsContent()}
  </main>
`