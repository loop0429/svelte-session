<script>
/* eslint-disable import/first */
import { fade } from 'svelte/transition'

import Page from '../components/page/FadePage.svelte'
import { count } from '../stores.js'
import { summary } from '../constants/summary.js'

let list = []
const max = summary.length + 1

$: if ($count > 0 && $count < max) {
  const index = $count - 1
  list = [...list, summary[index]]
}
</script>

<Page>
  <div class="m-4 px-16 py-8 bg-white rounded-lg shadow-xl box">
    <h1 class="font-bold text-4xl text-center">まとめ</h1>
    {#if $count > 0}
      <ul class="mt-3 list-disc leading-loose text-lg">
        {#each list as item}
          <li in:fade out:fade={{ duration: 0 }}>{ item }</li>
        {/each}
      </ul>
    {/if}
  </div>
</Page>
