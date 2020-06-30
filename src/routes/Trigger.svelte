<script>
/* eslint-disable import/first */
import { fade, fly } from 'svelte/transition'

import Page from '../components/page/FadePage.svelte'
import { count } from '../stores.js'
import { trigger } from '../constants/trigger.js'

let list = []
const max = trigger.length + 2

$: if ($count > 1 && $count < max) {
  const index = $count - 2
  list = [...list, trigger[index]]
}
</script>

<Page>
  <h1 class="font-bold text-4xl text-white">Svelteを知ったきっかけ</h1>
  {#if $count >= 1}
    <ul class="mt-4 list-disc leading-loose text-lg text-white" in:fly={{ x: 100, duration: 600 }}>
      <li>
        森さん発
        {#if $count >= 2}
          <ul class="ml-4 list-disc">
            {#each list as item, index}
              <li in:fade out:fade={{ duration: 0 }}>{item}</li>
            {/each}
          </ul>
        {/if}
      </li>
    </ul>
  {/if}
</Page>
