<template>
  <button :style="{ backgroundColor: 'var(--variable-collection-CIM)', borderRadius: '8px', padding: '12px', color: '#ffffff' }">
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  props: {
    btnTitle: String,
  },
};
</script>
