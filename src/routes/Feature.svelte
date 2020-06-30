<script>
/* eslint-disable import/first */
import { blur } from 'svelte/transition'

import Page from '../components/page/ScalePage.svelte'
import { count } from '../stores.js'
import { feature } from '../constants/feature.js'
</script>

<Page>
  <h1 class="font-bold text-4xl text-white">Svelteの特徴</h1>
  {#if $count > 0}
    <ol class="mt-4 list-decimal leading-loose text-white text-lg">
      {#each feature as item, index}
        <li in:blur={{ delay: 400 * index }}>{item}</li>
      {/each}
    </ol>
  {/if}
</Page>
