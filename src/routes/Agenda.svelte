<script>
import { fly } from 'svelte/transition'

import Page from '../components/page/FadePage.svelte'
import { agenda } from '../constants/agenda.js'
</script>

<Page>
  <div class="px-16 py-8 bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-4xl text-center">アジェンダ</h1>
    <ol class="mt-4 list-decimal list-inside leading-loose">
      {#each agenda as item, index}
        <li in:fly={{ x: 50, delay: 400 * index }} out:fly={{ duration: 0 }}>{item}</li>
      {/each}
    </ol>
  </div>
</Page>
