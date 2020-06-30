<script>
/* eslint-disable import/first */
import Page from '../components/page/FadePage.svelte'
import { count } from '../stores.js'
import { unique } from '../constants/unique.js'

const max = unique.length

$: if ($count >= max) {
  count.set(max - 1)
}
</script>

<Page>
  <div class="px-12 py-8 bg-white rounded-lg shadow-xl box">
    <h1 class="font-bold text-4xl text-center">ユニークな機能</h1>
    {#if $count > 0}
      <h2 class="my-2 text-2xl text-center">{ unique[$count].title }</h2>
      <svelte:component this={ unique[$count].component } />
    {/if}
  </div>
</Page>

<style>
.box {
  max-width: 50%;
}
</style>
