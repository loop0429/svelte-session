export const feature = [
  'ReactとVue.jsのいいとこどり',
  'ライブラリじゃなく、コンパイラなので容量が軽い',
  'Virtual DOMではない、けど速いらしい'
]

const svelteCode = `[Svelte]
<script>
let aisatsu = 'hello'

const handleClick = () => {
  alert(aisatsu)
}
</script>

<h1 class="title">{aisatsu}</h1>
<input type="text" bind:value={aisatsu} />
<button type="button" on:click={handleClick}>Click!</button>

<style>
.title {
  color: red;
}
</style>`

const vueCode = `[Vue.js]
<template>
  <div>
    <h1 class="title">{{aisatsu}}</h1>
    <input type="text" v-model="aisatsu" />
    <button type="button" @click="handleClick">Click!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aisatsu: 'hello'
    }
  },
  methods: {
    handleClick () {
      alert(this.aisatsu)
    }
  }
}
</script>

<style>
.title {
  color: red;
}
</style>`

const reactCode = `[React]
import React, { useState } from 'react'

const home = () => {
  const [aisatsu, setAisatsu] = useState('hello')
  const style = {
    color: 'red'
  }

  const handleChange = (e) => {
    const value = e.target.value
    setAisatsu(value)
  }

  const handleClick = () => {
    alert(aisatsu)
  }

  return (
    <div>
      <h1 className="title" style={style}>{aisatsu}</h1>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>Click!</button>
    </div>
  )
}

export default home
`

export const featureCodes = [svelteCode, vueCode, reactCode]

export const compile = [
  {
    img: '/static/imgs/svelte.png',
    lib: 'Svelte'
  },
  {
    img: '/static/imgs/vue.png',
    lib: 'Vue.js'
  },
  {
    img: '/static/imgs/react.png',
    lib: 'React'
  }
]

export const devCodes = [
  '/static/imgs/svelte-code01.png',
  '/static/imgs/svelte-code02.png'
]
