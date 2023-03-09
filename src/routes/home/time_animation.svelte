<script lang="ts">
    import { formatTime } from "./utils";

    export let time = 0;

    let smoothTime = time;

    setInterval(() => {
        if (!Number.isFinite(time)) time = 0;
        let dist = time - smoothTime;
        smoothTime += dist * 0.1;
    }, 50);

</script>

{formatTime(smoothTime)}
