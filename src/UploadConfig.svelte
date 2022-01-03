<script>
import { config, error } from "./store";


    const onUpload = e => {
        console.log(e);

        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = e => {
            config.set(JSON.parse(e.target.result));
            error.set(null);
        }
    };
</script>


<input type="file" accept=".json" on:change={onUpload}>
