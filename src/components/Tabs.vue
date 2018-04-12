<template>
    <div>
        <ul class="nav nav-tabs">
            <li :class="{'active': current === tab}" v-for="tab in tabs" @click="changeTab(tab)">
                <a>{{tab.title}}</a>
            </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default{
    data () {
      return {
        tabs: [],
        current: null
      }
    },
    methods: {
      addTab: function (tab) {
        console.log('aaaaaaaaa')
        console.log(tab.title + ':' + tab.active)
        this.tabs.push(tab)
        if (tab.active === true) {
          this.current = tab
        }
      },
      changeTab: function (tab) {
        this.current = tab
        this.tabs.forEach(function (value) {
          if (value === tab) {
            value.active = true
          } else {
            value.active = false
          }
        })
        this.$store.dispatch('SWITCH_STRATEGY', this.current.title)
      }
    }
  }

</script>

<style>
.nav-tabs {
    background-color: #eeeeee;
    padding-top:5px;
    padding-left:5px;
    border: 1px solid #ddd;
}

.tab-content {
    color : #000000;
    background-color: #ffffff;
    padding : 5px 15px;
    margin-top: -1px;
    border: 1px solid #ddd;
}
</style>
