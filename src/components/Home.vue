<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="panel panel-primary">
                <div class="panel-heading">Strategy</div>
                <div class="panel-body">
                    <strategy></strategy> 
                </div>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="panel panel-primary">
                <div class="panel-heading">Result</div>
                <div class="panel-body">
                    <result></result> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Strategy from './Strategy.vue'
import ResultGrid from './ResultGrid.vue'

export default {
  components: {
    'strategy': Strategy,
    'result': ResultGrid
  }
}
</script>
