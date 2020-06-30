<script>
/* eslint-disable import/first */
import { fade } from 'svelte/transition'

import Page from '../components/page/ScalePage.svelte'
import { count } from '../stores.js'
</script>

<Page>
  <div class="m-4 px-16 py-8 bg-white rounded-lg shadow-xl box">
    <h1 class="font-bold text-4xl text-center">特徴その3: Virtual DOMではない、けど速いらしい</h1>
    <p class="text-center" in:fade={{ delay: 700 }}>特に詳しくは調べていないけど、こういう理由からみたい</p>
    {#if $count > 0}
      <blockquote class="my-3 p-3 bg-gray-200 rounded" cite="https://qiita.com/oekazuma/items/d3d97f78466be983b19f" in:fade={{ delay: 400 }}>
        <p>
          仮想DOMはオーバーヘッドであると言っています。大きな理由としては「実DOMとの差分を計算するのって無料じゃないしオーバーヘッドだよね」というところにあります。<br />
          Svelteは仮想DOMを使用せずに同様のプログラミングモデルで十分なパフォーマンスで、状態遷移を考慮することなくアプリを構築できます。<br />
          以下の流れでいうとSvelteは1と4だけで済むということです。<br /><br />
          仮想DOMでHTMLが書き換わるまでの流れ
        </p>
        <ol class="mt-3 list-decimal list-inside leading-loose">
          <li>現在の状態(state)が変わる</li>
          <li>再レンダリング(仮想DOMの再構成)を実行する</li>
          <li>実DOMとの差分を計算する</li>
          <li>実際にHTML(=実DOM)を書き換える</li>
        </ol>
        <cite class="block mt-2 text-right">君はVue,Reactの次に来るSvelteを知っているか？</cite>
      </blockquote>
    {/if}
  </div>
</Page>

<style>
.box {
  max-width: 50%;
}
</style>
