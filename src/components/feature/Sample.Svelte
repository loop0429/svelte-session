<script>
let aisatsu = 'hello'

const handleClick = () => {
  alert(aisatsu)
}
</script>

<div class="w-1/2 mx-auto mt-3 p-4 bg-gray-300 rounded-lg text-center">
  <h1 class="mb-2 text-3xl font-bold title">{aisatsu}</h1>
  <input class="w-full p-2" type="text" bind:value={aisatsu} />
  <button class="mt-3 p-2 bg-green-400 rounded-sm text-white leading-none" type="button" on:click={handleClick}>Click!</button>
</div>

<style>
.title {
  color: red;
}
</style>
