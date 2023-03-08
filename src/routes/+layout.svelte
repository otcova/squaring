<script lang="ts">
    import Navbar from "./navbar.svelte";
</script>

<Navbar />

<div class="content">
    <slot />
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        box-sizing: border-box;
        height: 100%; 
        padding: 30px;
        padding-top: 80px;
    }
</style>
