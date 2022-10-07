<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './router'
</script>

<div class="app">
  <Router {routes} />
</div>

<style>
  .app {
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>