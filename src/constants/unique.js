import Await from '../components/unique/Await.svelte'
import EventForwarding from '../components/unique/EventForwarding.svelte'
import Dimensions from '../components/unique/Dimensions.svelte'
import Store from '../components/unique/Store.svelte'
import ClassDirective from '../components/unique/ClassDirective.svelte'
import Motion from '../components/unique/Motion.svelte'

const svelteParent = `[Parent.svelte]
<script>
import Box from './Box.svelte'

let msg = ''

const handleMessage = (payload) => {
  msg = payload.msg
  console.log(mgs)
}
</script>

<Box on:handleMessage={ handleMessage } />`

const svelteBox = `[Box.svelte]
<MyButton on:handleMessage />`

const svelteButton = `[MyButton.svelte]
<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()
const handleClick = () => {
  dispatch('handleMessage', {
    msg: 'iwt'
  })
}

<button type="button" on:click={ handleClick }>Click</button>`

const svelteCode = [
  svelteParent,
  svelteBox,
  svelteButton
]

const vueParent = `[Parent.vue]
<template>
  <Box @handleMessage="handleMessage" />
</template>

<scirpt>
import Box from './Box.vue'

export default {
  components: {
    Box
  },
  data () {
    return {
      msg: ''
    }
  }
  methods: {
    handleMessage (payload) {
      this.msg = payload.msg
      console.log(this.msg)
    }
  }
}
</script>`

const vueBox = `[Box.vue]
<template>
  <MyButton @handleMessage="handleMessage" />
</template>

<scirpt>
import MyButton from './MyButton.vue'

export default {
  components: {
    MyButton
  },
  methods: {
    handleMessage (paylaod) {
      this.$emit('handleMessage', payload)
    }
  }
}
</script>`

const vueButton = `[MyButton.vue]
<template>
  <button type="button" @click="handleClick">Click</button>
</template>

<scirpt>
export default {
  methods: {
    handleClick () {
      this.$emit('handleMessage', {
        msg: 'iwt'
      })
    }
  }
}
</script>`

const vueCode = [
  vueParent,
  vueBox,
  vueButton
]

export const eventForwardingCode = [
  vueCode, svelteCode
]

export const unique = [
  null,
  {
    title: 'Await blocks',
    component: Await
  },
  {
    title: 'Event forwarding',
    component: EventForwarding
  },
  {
    title: 'Dimensions',
    component: Dimensions
  },
  {
    title: 'Store',
    component: Store
  },
  {
    title: 'Class Directive',
    component: ClassDirective
  },
  {
    title: 'Motion・Transitions',
    component: Motion
  }
]
