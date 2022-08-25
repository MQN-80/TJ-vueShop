<template>
    <div>
        <v-heard></v-heard>
        <v-footer></v-footer>
    </div>
</template>

<script>
  import Footer from '@/common/_footer.vue'
  import Heard from '@/components/forum/forum_heard.vue'
    export default {
    components: {
      'v-heard': Heard,
      'v-footer': Footer
    },
    }
</script>