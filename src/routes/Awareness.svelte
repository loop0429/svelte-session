<script>
/* eslint-disable import/first */
import { fade, fly } from 'svelte/transition'

import Page from '../components/page/FadePage.svelte'
import { count } from '../stores.js'
import { awareness } from '../constants/awareness.js'
</script>

<Page>
  <h1 class="font-bold text-4xl text-white">認知度調査</h1>
  {#if $count > 0}
    <ol class="my-4 p-4 list-decimal list-inside leading-loose text-white border border-white">
      {#each awareness as item, index}
        <li in:fly={{ x: 100, duration: 800, delay: 300 * index }}>{item}</li>
      {/each}
    </ol>
    <p class="text-xl text-white" in:fade={{ delay: 2000 }}>チャットで番号入力してね</p>
  {/if}
</Page>
