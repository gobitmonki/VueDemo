<template>
    <div class="container">
        <el-button type="primary" @click="dialogVisible = true">Add new match</el-button>
        <div style="height:10px"></div>
        <el-dialog
            title="Subscribe Match"
            :visible.sync="dialogVisible"
            size="small"
            :before-close="handleClose">
            <span>
                <el-date-picker
                    v-model="value1"
                    type="date"
                    size="large"
                    placeholder="Choose Date"
                    :picker-options="pickerOptions0">
                    </el-date-picker>
            </span>
            <div style="height:10px"></div>
            <span>
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width:95%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                        type="selection"
                        min-width="60px"
                        >
                    </el-table-column>
                    <el-table-column
                        label="StartTime"
                        >
                        <template scope="scope">{{ scope.row.StartTime }}</template>
                    </el-table-column>
                    <el-table-column
                        label="HomeTeam"
                        prop="HomeTeam"
                        >
                    </el-table-column>
                    <el-table-column
                        label="AwayTeam"
                        prop="AwayTeam"
                        >
                    </el-table-column>
                 </el-table>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="subscribeMatch">OK</el-button>
            </span>
        </el-dialog>

        <div>
            <subgrid ref="subgrid"></subgrid>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SubGrid from './SubGrid.vue'

export default {
    components: {
        'subgrid': SubGrid
    },
    data() {
        return {
            tableData3: [{
                    StartTime: '19:45',
                    HomeTeam: 'MU',
                    AwayTeam: 'MC'
                    }, {
                    StartTime: '19:45',
                    HomeTeam: 'Milan',
                    AwayTeam: 'Inter'
                    }, {
                    StartTime: '19:45',
                    HomeTeam: 'Mad',
                    AwayTeam: 'Barca'
                    }, {
                    StartTime: '19:45',
                    HomeTeam: 'BB',
                    AwayTeam: 'CCC'
                    }, {
                    StartTime: '19:45',
                    HomeTeam: 'DDD',
                    AwayTeam: 'FFFF'
                    }, {
                    StartTime: '19:45',
                    HomeTeam: 'ABC',
                    AwayTeam: 'DEF'
                    }, {
                    StartTime: '19:45',
                    HomeTeam: 'ZX',
                    AwayTeam: 'XI'
                    }],
            multipleSelection: [],
            dialogVisible: false,
            pickerOptions0: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            value1:'',
            homeTeamID: '',
            awayTeamID: '',
            leagueID: ''
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm=>{
            vm.$refs.subgrid.refresh()
        })
    },
    methods: {
        handleClose(done) {
            this.$confirm('Close window？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        'subscribeMatch': function(){
            this.leagueID = 10002007
            this.homeTeamID = 10857903
            this.awayTeamID = 10857908
            var url = "http://106.14.152.35:5000/addSubscribe/?leagueID=" + this.leagueID
                + "&homeTeamID=" + this.homeTeamID 
                + "&awayTeamID=" + this.awayTeamID
            axios.get(url)
                .then(response => {
                    console.log(response)
                    this.$refs.subgrid.refresh();
                })  
                .catch(e => {
                    console.log('subscribe match error')    
                })  
        }
    }
}
</script>
