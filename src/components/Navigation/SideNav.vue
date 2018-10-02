<template>
<div class="sidenav-container">
    <div role="tablist" id="sidenav">
        <router-link tag="div" to="/home">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion1 variant="info">Park Lookup</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <p class="card-text">
                I start opened because <code>visible</code> is <code>true</code>
                </p>
            </b-card-body>
            </b-collapse>
        </b-card>
        </router-link>
        <router-link tag="div" to="/test">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion2 variant="info">Test</b-btn>
            </b-card-header>
            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <p class="card-text">
                I start opened because <code>visible</code> is <code>true</code>
                </p>
            </b-card-body>
            </b-collapse>
        </b-card>
        </router-link>
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
            <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
            </b-card-header>
            <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                   <p class="card-text">
                I start opened because <code>visible</code> is <code>true</code>
                </p>
            </b-card-body>
            </b-collapse>
        </b-card>
        </div>
    </div>   
</template>
<script>

  export default {
    name: 'sidenav',
    methods:{
        openpage(path){
            this.$router.go(path)
        }
    }
  }
</script>
<style lang="scss">

    #sidenav{

        #accordion1 .card-body{
            background-color: rgb(154, 194, 99);
        }
        > div:nth-child(1) header .btn-info {
            color: #fff;
            background-color: rgb(154, 194, 99);
            border-color: rgb(154, 194, 99);
            height:60px;
            &:hover{
                background-color: rgb(148, 187, 93);
                border-color: rgb(148, 187, 93);
            }
        }

        #accordion2 > .card-body{
            background-color: #83b73a;
        }
        > div:nth-child(2) header .btn-info {
            color: #fff;
            background-color: #83b73a;
            border-color: #83b73a;
            height:60px;
            &:hover{
                background-color: #7BAF3C;
                border-color: #7BAF3C;
            }
        }

        #accordion3 > .card-body{
            background-color: #4EA558;;
        }
        > div:nth-child(3) header .btn-info {
            color: #fff;
            background-color: #4EA558;
            border-color: #4EA558;
            height:60px;
            &:hover{
                background-color: #439c4d;
                border-color: #439c4d;
            }
        }
            
        .card-header:first-child{
            border-radius: 0;
        }
        .p-1{
            padding:0 !important;
        }
        .mb-1, .my-1 {
            margin-bottom: 0 !important;
        }
        .card-header{
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom: 0;
        }
        .card {
            position: relative;
            display: -ms-flexbox;
            display: -webkit-box;
            display: flex;
            -ms-flex-direction: column;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: none;
            border-radius: 0;
        }
        .btn{
            border-radius:0;
        }
        .btn-info:focus, .btn-info.focus {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
    }
 
</style>