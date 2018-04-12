<template>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">Ticket</div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-4">
                        <form class="form-horizontal">
                            <div class="form-group" style="height:30px">
                                <label for="total" class="col-sm-2 control-label">Total</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group" style="height:30px">
                                <label for="per" class="col-sm-2 control-label">Per</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group" style="height:30px">
                                <label for="max" class="col-sm-2 control-label">Max</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group" style="height:30px;">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn btn-default" @click="saveStrategy">Save Strategy</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-8">
                        <ticket></ticket>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-primary">
            <div class="panel-heading">Live</div>
            <div class="panel-body">
                <live ref="live"></live> 
            </div>
        </div>
    </div>
</template>

<script>
import LiveGrid from './LiveGrid.vue'
import TicketGrid from './TicketGrid.vue'

export default {
    data () {
        return {
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
