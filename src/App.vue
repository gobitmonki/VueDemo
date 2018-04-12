//navbar
<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">HK</a>
                <ul class="nav navbar-nav">
                    <li><router-link to="/Subscribe">Subscribe</router-link></li>
                    <li><router-link to="/live">Live</router-link></li>
                </ul>
            </div>
        </nav>
        <div class="container" style="width:1500px">
            <router-view></router-view>
        </div>
    </div>
</tempalte>
