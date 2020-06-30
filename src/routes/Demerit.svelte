<script>
/* eslint-disable import/first */
import { fade } from 'svelte/transition'

import Page from '../components/page/ScalePage.svelte'
import { count } from '../stores.js'
import { demerit } from '../constants/demerit.js'

let list = []
const max = demerit.length + 1

$: if ($count > 0 && $count < max) {
  const index = $count - 1
  list = [...list, demerit[index]]
}
</script>

<Page>
  <div class="m-4 px-16 py-8 bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-4xl text-center">デメリット</h1>
    {#if $count > 0}
      <ul class="mt-3 list-disc leading-loose">
        {#each list as item}
          <li in:fade out:fade={{ duration: 0 }}>{ item.parent }</li>
          {#if item.child}
            <ul class="ml-3 list-disc">
              {#each item.child as child, index}
                <li in:fade={{ delay: 400 * index + 400 }} out:fade={{ duration: 0 }}>{ child }</li>
              {/each}
            </ul>
          {/if}
        {/each}
      </ul>
    {/if}
  </div>
</Page>
