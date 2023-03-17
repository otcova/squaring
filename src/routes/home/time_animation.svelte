<script lang="ts">
    import { formatTime } from "../../lib/utils";

    export let time = 0;

    let smoothTime = time;

    setInterval(() => {
        if (!Number.isFinite(time)) time = 0;
        let dist = time - smoothTime;
        if (Math.abs(dist) < 0.5) smoothTime = time;
        else smoothTime += dist * 0.1;
    }, 50);

</script>

{formatTime(smoothTime)}
