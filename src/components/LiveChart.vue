<template>
    <div>
        <schart :canvasId="chartId" :options="options" :data="data" :type="type" :width="width" :height="height"></schart>
    </div>
</template>


<script>
import Schart from 'vue-schart'
import axios from 'axios'

export default {
    data () {
        return {
            chartId: 'liveChart',
            type: 'line',
            width: 1000,
            currentID: '',
            height: 200,
            data: [
                {name: '2014', value: 1342},
                {name: '2015', value: 2123},
                {name: '2016', value: 1654},
                {name: '2017', value: 1795},
            ],
            options: {
                title: 'Real-time'
            }
        }
    },
    computed: {
        matchID: function(){
            this.currentID = this.$store.state.lid + this.$store.state.hid + this.$store.state.aid         
            console.log(this.currentID)
            return this.currentID
        } 
    },
    watch: {
        matchID: function(){
            this.getChartData()         
        }        
    },
    methods: {
        getChartData: function() {
            this.data = []              
            var leagueID = this.$store.state.lid
            var homeTeamID = this.$store.state.hid
            var awayTeamID = this.$store.state.aid
            //var url = ("http://106.14.152.35:5000/chart/?leagueID=%s&homeTeamID=%s&awayTeamID=%s" % (leagueID, homeTeamID, awayTeamID))
            var url = "http://106.14.152.35:5000/chart/?leagueID="+leagueID+"&homeTeamID="+homeTeamID+"&awayTeamID="+awayTeamID
            axios.get(url)
                .then(response => {
                    this.data = response.data 
                })
                .catch(e => {
                    console.log("chart error")         
                })
        }
    },
    components: {
        Schart
    }
}

</script>
