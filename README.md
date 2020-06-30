`git clone`してもいいし、`degit`でもいいです

```bash
npx degit loop0429/svelte-session {project_name}
cd {project_name}
```

## 環境構築(npmな人はnpm脳で読んで)
```
yarn install
yarn dev // 開発 http://localhost:5000

yarn build // 本番用ビルド
```

## 簡単に構造説明
書かれてないものはテキトウに読んで調べてください。

- `src/App.svelte`: メインです。
  - `src/routes/*.svelte`: 各ページのコンポーネントです。  
  基本的にコンテンツは`src/constants/`の`{同一ファイル}.js`に記述して、レイアウトに関する記述がメインです。
  - `src/constants/page.js`: `svelte-spa-router`用のルーティング設定です。
  - `src/components/page/`
    - `Page.svelte`: `src/routes/*.svelte`のコンテンツを読み込んでいます
    - `FadePage.svelte`: ページ切り替えしたときにFadeの効果が付与されます。上記`Page.svelte`をwrapしています。
    - `ScalePage.svelte`: ページ切り替えしたときにScaleの効果が付与されます。上記`Page.svelte`をwrapしています。

## ページの操作方法
- 右キーで次のページへ、左キーへ前のページへ
- Enterキーでページ内でコンテンツ切り替え。ページによってはあるなしがあるので、テキトウに操作してください

## 注意事項
- `build`時、`PurgeCss`で使用されてない`Tailwind CSS`を除外する設定にしていますが、`src/components/*`内で使用してるクラスが除外されてしまっています。  
階層の深さが問題かと思って他のプロジェクトで同一のディレクトリ構造で試してみたら、思った通りの動作をしていたので`svelte-spa-router`のせいかもしれない。
- `svelte/store`を使用した`store.js`を`import`するとeslintで怒られたので、各ページで`/* eslint-disable import/first */`を追記してます。
- `transition`を使用する際に、`transition:fade`のようにすると、`in`と`out`の両方が適用されます。  
そうすると`unmount`される際（今回の場合、ページ切り替え時）に、`out`の`transition`が実行されます。  
なので、`in:fade`のような記述の仕方をしています。
