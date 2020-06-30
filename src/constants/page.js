import Title from '../routes/Title.svelte'
import Agenda from '../routes/Agenda.svelte'
import Awareness from '../routes/Awareness.svelte'
import Trigger from '../routes/Trigger.svelte'
import Feature from '../routes/Feature.svelte'
import Feature01 from '../routes/Feature01.svelte'
import Feature02 from '../routes/Feature02.svelte'
import Feature03 from '../routes/Feature03.svelte'
import Unique from '../routes/Unique.svelte'
import Demerit from '../routes/Demerit.svelte'
import Segregation from '../routes/Segregation.svelte'
import Summary from '../routes/Summary.svelte'

export const pages = [
  {
    path: '/',
    component: Title,
    title: 'Vue.jsでよくね？がSvelteでよくね？になった'
  },
  {
    path: '/agenda',
    component: Agenda,
    title: 'アジェンダ'
  },
  {
    path: '/awareness',
    component: Awareness,
    title: '認知度調査'
  },
  {
    path: '/trigger',
    component: Trigger,
    title: 'Svelteについて話そうと思ったきっかけ'
  },
  {
    path: '/feature',
    component: Feature,
    title: 'Svelteの特徴'
  },
  {
    path: '/feature01',
    component: Feature01,
    title: '特徴その1: ReactとVue.jsのいいとこどり'
  },
  {
    path: '/feature02',
    component: Feature02,
    title: '特徴その2: ライブラリじゃなく、コンパイラなので容量が軽い'
  },
  {
    path: '/feature03',
    component: Feature03,
    title: '特徴その3: Virtual DOMではない、けど速いらしい'
  },
  {
    path: '/unique',
    component: Unique,
    title: 'ユニークな機能'
  },
  {
    path: '/demerit',
    component: Demerit,
    title: 'デメリット'
  },
  {
    path: '/segregation',
    component: Segregation,
    title: '棲み分け'
  },
  {
    path: '/summary',
    component: Summary,
    title: 'まとめ'
  }
]

export const routes = {}
pages.forEach(page => {
  routes[page.path] = page.component
})
