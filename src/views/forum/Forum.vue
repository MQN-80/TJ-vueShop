<template>
    <div>
        <v-heard :active="this.tab"></v-heard>
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
    data(){
      return {
        tab:0,
      }
    },
    beforeMount(){
      if(this.$route.params.tab)
      {this.tab=this.$route.params.tab;}
      console.log(this.tab)
     }
    }
</script>