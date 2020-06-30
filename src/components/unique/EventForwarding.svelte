<script>
import { fade } from 'svelte/transition'

import { escapeHtml } from '../../utils/escape.js'
import { eventForwardingCode } from '../../constants/unique.js'
</script>

<div class="mx-auto mb-3 px-12 py-2 bg-red-500 leading-none text-center parent">
  Parent
  <div class="mt-2 px-6 py-2 bg-blue-500">
    Box
    <button type="button" class="block mx-auto mt-2 p-2 bg-white">MyButton</button>
  </div>
</div>

<div class="flex w-full justify-center" in:fade={{ delay: 800 }}>
  {#each eventForwardingCode as codes}
    <div class="w-1/2 px-2 overflow-scroll wrapper">
      {#each codes as code}
        <pre class="w-full mb-3 p-2 overflow-scroll bg-gray-200 text-sm">
          {@html escapeHtml(code)}
        </pre>
      {/each}
    </div>
  {/each}
</div>

<style>
.parent {
  width: 350px;
}

.wrapper {
  height: 400px;
}
</style>
