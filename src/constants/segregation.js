const svelteSeg = {
  title: 'Svelte',
  parent: 'モック〜小規模アプリケーション',
  child: [
    '超手軽',
    '大規模開発では逆に工数かかりそう'
  ]
}

const vueSeg = {
  title: 'Vue.js',
  parent: '小規模〜中規模アプリケーション',
  child: [
    '手軽',
    'Typescript入れなくて十分かな'
  ]
}

const reactSeg = {
  title: 'React',
  parent: '中規模〜大規模アプリケーション',
  child: ['Typescript入れたい']
}

export const segregation = [
  svelteSeg,
  vueSeg,
  reactSeg
]
