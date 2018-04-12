<template>
    <div class="static" :class="{'active':active}">
        <slot></slot>
    </div>
</template>

<script>
  export default{
    data () {
      return {
        active: ''
      }
    },
    watch: {
      active: function () {
        console.log('bbbbbbbbbb')
        console.log(this.title + ':' + this.active)
      }
    },
    mounted: function () {
      this.$parent.addTab(this)
    },
    props: {
      'title': {
        type: String,
        required: true
      },
      'isActive': {
        type: [Boolean, String],
        default: false
      }
    }
}
</script>

<style>
.active{display:block}
.static{display:none}
</style>
