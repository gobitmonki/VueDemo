<template>
    <div>
        <tabs>
            <tab name="s1" title="S 1" :isActive="true">
                <s1></s1>
            </tab>
            <tab name="s2" title="S 2">
                <s2></s2>
            </tab>
            <tab name="s3" title="S 3">
                <s3></s3>
            </tab>
        </tabs>
    </div>
</template>

<script>
import Tabs from './Tabs.vue'
import Tab from './Tab.vue'
import S1 from './S1.vue'
import S2 from './S2.vue'
import S3 from './S3.vue'

export default{
  components: {
    'tabs': Tabs,
    'tab': Tab,
    's1': S1,
    's2': S2,
    's3': S3
  }
}
</script>
<style>
.nav-sidebar {
    width: 100%;
    padding: 30px 0;
    border-right: 1px solid #ddd;
}

.nav-sidebar a {
    color: #333;
    -webkit-transition: all 0.08s linear;
    -moz-transition: all 0.08s linear;
    -o-transition: all 0.08s linear;
    transition: all 0.08s linear;
}

.nav-sidebar .active a {
    cursor: default;
    background-color: #0b56a8;
    color: #fff;
}

.nav-sidebar .active a:hover {
    background-color: #E50000;
}

.nav-sidebar .text-overflow a,
    .nav-sidebar .text-overflow .media-body {
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
</style>
