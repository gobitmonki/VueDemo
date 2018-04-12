<template>
    <div style="overflow: auto">
        <table class="table">
            <thead>
                <tr><th v-for="key in gridColumns">{{key}}</th></tr>
            </thead>
            <tbody>
                <tr v-for="entry in gridData" @click="showChart(entry)"><td v-for="key in gridColumns">{{entry[key]}}</td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    gridColumns: ['leagueID','homeTeamID','awayTeamID','matchStartTime','homeScore','awayScore','homeRedCards','awayRedCards','FTA','FHA','datatime'],
    gridData: '',
    intervalTimer: ''
    }
  },
  computed: {
    getStrategy () {
      console.log('compute' + this.$store.state.strategy)
      return this.$store.state.strategy
    }
  },
  watch: {
    getStrategy: function () {
      console.log('watch title change' + this.$store.state.strategy)
      this.type = this.$store.state.strategy
      this.getGridData()
    }
  },
  methods: {
    showChart: function(entry) {
        console.log("show dispatch")
        var ids = {
            "lid":entry.leagueID,
            "hid":entry.homeTeamID,
            "aid":entry.awayTeamID
        }
        this.$store.dispatch('SWITCH_CHART', ids )
    },
    getGridData: function() {
        var matchID = this.$route.params.matchId
        this.gridData = []            
        axios.get('http://106.14.152.35:5000/live/?matchID=' + matchID)
        .then(response => {
            console.log("grid data")
            console.log(response)
            this.gridData = response.data
        })
        .catch(e => {
            console.log('error')    
        })
      },
    startIntervalTimer: function() {
        this.getGridData()    
        this.intervalTimer = setInterval(()=>{
            this.getGridData()         
        },20000)
    },
    stopIntervalTimer: function() {
        clearInterval(this.intervalTimer)
    }
  },
  mounted: function () {
    this.startIntervalTimer()
  },
  beforeDestroy: function() {
    console.log("Stopping the interval timer")
    this.stopIntervalTimer()
  }
}
</script>

<style>
table {
    border: 2px solid #337ab7;
    border-radius: 3px;
    background-color: #fff;
}

th {
    background-color: #337ab7;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

td {
    background-color: #f9f9f9;
}

th, td {
    min-width: 120px;
    padding: 10px 20px;
}

th.active {
    color: #fff;
}

th.active .arrow {
    opacity: 1;
}
</style>
