<template>
    <div style="overflow: auto">
        <table class="table">
            <thead>
                <tr><th v-for="key in gridColumns">{{key}}</th></tr>
            </thead>
            <tbody>
                <tr v-for="entry in gridData"><td v-for="key in gridColumns">{{entry[key]}}</td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      type: 'S 1',
      gridColumns: ['name', 'power'],
      test: 'value1',
      gridData: ''
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
    getGridData: function() {
      console.log(this.type)
      if (this.type === 'S 1') {
          this.gridData=[]
          axios.get('http://106.14.152.35:5000/testajax')
              .then(response => {
                    this.gridData=[
          { name: 'xxxx', power: Infinity },
          { name: 'Bruce Lee', power: 9000 }
                    ]
                    console.log('ok')
                      })
              .catch(e => {
                    console.log('error')
                      })
      } else {
        this.gridData = [
          { name: 'wl', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 }
        ]
      }
    }
  },
  mounted: function () {
    this.getGridData()
  }
}
</script>

<style>
table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
}

th {
    background-color: #42b983;
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
