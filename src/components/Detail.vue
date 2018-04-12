<template>
    <div class="container">
        <el-button type="primary" @click="dialogVisible = true">Switch Strategy</el-button>
        <div style="height:10px"></div>
        <el-dialog
        title="Strategy"
        :visible.sync="dialogVisible"
        size="small"
        :before-close="handleClose">
        <span>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="Total">
                <el-input v-model="total"></el-input>
            </el-form-item>
            <el-form-item label="Per">
                <el-input v-model="per"></el-input>
            </el-form-item>
            <el-form-item label="Max">
                <el-input v-model="max"></el-input>
            </el-form-item>
            <el-form-item label="Param1">
                <el-switch on-text="" off-text="" v-model="p1"></el-switch>
            </el-form-item>
            <el-form-item label="Box">
                <el-checkbox-group v-model="box">
                <el-checkbox label="B1" name="type"></el-checkbox>
                <el-checkbox label="B2" name="type"></el-checkbox>
                <el-checkbox label="B3" name="type"></el-checkbox>
                <el-checkbox label="B4" name="type"></el-checkbox>
            </el-checkbox-group>
            </el-form-item>
        </el-form>
        </span>
        </el-dialog>

        <ticket></ticket>
        <div class="myecharts">
            <highcharts :options="options" ref="lineCharts"></highcharts>
        </div>
        <live ref="live"></live> 
    </div>
</template>

<style scoped>
.myecharts {
width: 400px;
height: 400px;
}
</style>

<script>
import LiveGrid from './LiveGrid.vue'
import TicketGrid from './TicketGrid.vue'

export default {
    data () {
        return {
            loading: true,
            options: {
                title: {
                    text: "ChartExample"
                },
                chart: { type: 'spline'},
                xAxis: {
                    categories: ['Strategy1', 'S2', 'S3', 'S4']
                },
                yAxis: {},
                series: [{
                    marker:{symbol:'square'},
                    name: 'Benefit',
                    data: [5,20,36,10]
                }] 
            },
            dialogVisible: false,
            value1: '',
            strategy: {},
            timer: '' 
        } 
    },
    components: {
        'live': LiveGrid,
        'ticket': TicketGrid
    },
    beforeRouteLeave: function(to, from, next) {
        //this.$refs.live.stopIntervalTimer();
        next();
    },
    methods: {
        saveStrategy: function() {
        },
        startGetMatchInfo: function() {
        },
        stopGetMatchInfo: function() {
            clearInterval(this.timer);
        }
    },
    mounted: function () {
    }
}
</script>
