<script lang="ts">
    import Navbar from "./navbar.svelte";
</script>

<div class="main">
    <Navbar />
    <slot />
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
