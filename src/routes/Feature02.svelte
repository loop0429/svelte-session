<script>
/* eslint-disable import/first */
import { fade } from 'svelte/transition'

import Page from '../components/page/ScalePage.svelte'
import { count } from '../stores.js'
import { feature, compile, devCodes } from '../constants/feature.js'
</script>

<Page>
  <div class="m-4 px-16 py-8 bg-white rounded-lg shadow-xl box">
    <h1 class="font-bold text-4xl text-center">特徴その2: { feature[1] }</h1>
    {#if $count === 1 || $count === 2 }
      <p class="my-3 text-center">それぞれのビルド結果のディレクトリ内を見てみる。</p>
      {#if $count === 2}
        <div class="flex justify-center">
          {#each compile as { img, lib}, index }
            <div class="w-1/3 px-2" in:fade={{ delay: 500 * index }} out:fade={{ duration: 0 }}>
              <b>[{ lib }]</b><br />
              <img src={ img } alt={ lib } />
            </div>
          {/each}
        </div>
      {/if}
    {:else if $count >= 3}
      <p class="my-3 text-center">minifyされていないjsファイル</p>
      <div class="flex justify-center">
        {#each devCodes as item, index }
          <div class="w-1/2 px-2" in:fade={{ delay: 500 * index + 500 }} out:fade={{ duration: 0 }}>
            <img src={ item } alt="" />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</Page>

<style>
.box {
  max-width: 80%;
}
</style>
