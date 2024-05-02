<template>
  <div v-html="renderedMarkdown" />
</template>

<script>
import markdownIt from 'markdown-it';
export default {
  props: {
    apiData: Object,
  },
  data() {
    return {
      renderedMarkdown: '',
    };
  },
  mounted() {
    this.renderMarkdown();
  },
  methods: {
    renderMarkdown() {
      const md = markdownIt();
      this.renderedMarkdown = md.render(this.apiData);
    },
  },
};
</script>
