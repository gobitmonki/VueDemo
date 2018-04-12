<template>
    <div style="overflow: auto">
        <table class="table">
            <thead>
                <tr><th v-for="key in gridColumn">{{key}}</th><th>Operation</th></tr>
            </thead>
            <tbody>
                <tr v-for="entry in gridData"><td v-for="key in gridColumn">{{entry[key]}}</td><td><button type="button" class="btn btn-info" @click="gotoDetail(entry)">Detail</button><button type="button" class="btn btn-danger" @click="remove(entry)">Delete</button></td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      gridColumn: ['leagueID','homeTeamID','awayTeamID','matchTime','status'],
      gridData: ''
    }
  },
  methods: {
    gotoDetail: function(entry) {
        //this.$router.push({path: '/detail', query: { matchId: 123}})             
        var leagueID = entry.leagueID
        var homeTeamID = entry.homeTeamID
        var awayTeamID = entry.awayTeamID
        var status = entry.status
        var matchID = leagueID + "-" + homeTeamID + "-" + awayTeamID
        this.$router.push({name: 'detail', params:{ matchId: matchID}})             
    },
    remove: function(entry) {
        var leagueID = entry.leagueID
        var homeTeamID = entry.homeTeamID
        var awayTeamID = entry.awayTeamID
        var matchID = leagueID + "-" + homeTeamID + "-" + awayTeamID
        var url = 'http://106.14.152.35:5000/removeSubscribe/?leagueID=' + leagueID + "&homeTeamID=" + homeTeamID + "&awayTeamID=" + awayTeamID
        axios.get(url)
        .then(response => {
            this.refresh()
        })
        .catch(e => {
            console.log('remove grid error')    
        })
    },
    refresh: function() {
        console.log("refresh")
        this.gridData = []            
        axios.get('http://106.14.152.35:5000/getSubscribe')
        .then(response => {
            this.gridData = response.data
        })
        .catch(e => {
            console.log('refresh sub grid error')    
        })
    }
  },
  mounted: function () {
    this.refresh()
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
