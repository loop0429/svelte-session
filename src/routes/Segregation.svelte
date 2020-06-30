<script>
/* eslint-disable import/first */
import { fly } from 'svelte/transition'

import Page from '../components/page/FadePage.svelte'
import { count } from '../stores.js'
import { segregation } from '../constants/segregation.js'
</script>

<Page>
  <div class="m-4 px-12 py-8 bg-white rounded-lg shadow-xl">
    <h1 class="font-bold text-4xl text-center">棲み分け</h1>
    {#if $count > 0}
      <div class="flex justify-center max-w-screen-lg my-4 px-3">
        {#each segregation as item, index}
          <div class="w-1/3 p-3" in:fly={{ y: 50, delay: index * 300 }}>
            <div class="w-full h-full p-3 pb-8 bg-yellow-100 shadow">
              <h2 class="mb-2 font-bold text-2xl text-center">{ item.title }</h2>
              <ul class="list-disc list-inside leading-loose">
                <li>
                  { item.parent }
                  <ul class="list-disc list-inside">
                  {#each item.child as child}
                    <li>{ child }</li>
                  {/each}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        {/each}
      </div>
      <p class="text-center" in:fly={{ x: 100, delay: 900 }}>一応、SapperというNuxt.js / Next.jsみたいなもののSvelte版がある</p>
    {/if}
  </div>
</Page>

<style>
li {
  padding-left: 1.25em;
  text-indent: -1.25em;
}
</style>
