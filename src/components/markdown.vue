<script>
    import highlight from "highlight.js";
    import Remarkable from "remarkable";
    
    const remarkable = new Remarkable({
        highlight(str, lang) {
            if (lang && highlight.getLanguage(lang))
                try {
                    return highlight.highlight(lang, str).value;
                } catch {}
            
            try {
                return highlight.highlightAuto(str).value;
            } catch {}
            
            return "";
        },
    });
    
    export default {
        computed: {
            component() {
                return {
                    template: `<div>${remarkable.render(this.markdown)}</div>`,
                };
            },
        },
        props: {
            markdown: {
                required: true,
                type: String,
            },
        },
    };
</script>

<template lang="pug">
    component(:is="component")
</template>

