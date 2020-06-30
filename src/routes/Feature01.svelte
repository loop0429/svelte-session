<script>
/* eslint-disable import/first */
import { fade } from 'svelte/transition'

import Page from '../components/page/ScalePage.svelte'
import Sample from '../components/feature/Sample.svelte'
import { escapeHtml } from '../utils/escape.js'
import { count } from '../stores.js'
import { feature, featureCodes } from '../constants/feature.js'

let list = []
const max = featureCodes.length + 2

$: if ($count > 1 && $count < max) {
  const index = $count - 2
  list = [...list, featureCodes[index]]
}
</script>

<Page>
  <div class="m-4 px-16 py-8 bg-white rounded-lg shadow-xl box">
    <h1 class="font-bold text-4xl text-center">特徴その1: { feature[0] }</h1>
    {#if $count === 1}
      <p class="my-3 text-center">よくあるチュートリアル的なアプリを作った</p>
      <div class="w-full" in:fade={{ delay: 500 }}>
        <Sample />
      </div>
    {:else if $count >= 2}
      <p class="my-3 text-center">コード量の比較</p>
      <div class="flex w-full px-3 justify-center" in:fade={{ delay: 500 }}>
        {#each list as item}
          <div class="w-1/3 px-2">
            <pre class="w-full p-2 bg-gray-200 text-sm overflow-scroll">
              {@html escapeHtml(item)}
            </pre>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</Page>

<style>
.box {
  max-width: 90%;
  min-width: 50%;
}

pre {
  min-width: 350px;
  height: 400px;
}
</style>
