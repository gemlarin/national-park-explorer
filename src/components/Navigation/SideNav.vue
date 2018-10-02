<template>
    <div class="sidenav-container">
        <div role="tablist" id="sidenav">
            <router-link tag="div" to="/">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle.accordion1 variant="info">NATIONAL PARKS</b-btn>
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
                <b-btn block href="#" v-b-toggle.accordion2 variant="info">TEST LINK</b-btn>
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
                <b-btn block href="#" v-b-toggle.accordion3 variant="info">TEST LINK</b-btn>
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
    name: 'sidenav'
  }
</script>
<style lang="scss">

    #sidenav{
        #accordion1 .card-body{
            background-color: #6CAF41;
        }
        > div:nth-child(1) header .btn-info {
            color: #fff;
            background-color: #6CAF41;
            border-color: #6CAF41;
            height:60px;
            font-weight:700;
            font-size:16px;
            padding-top:17px;
            &:hover{
                background-color: #67A340;
                border-color: #67A340;
            }
           
        }
        #accordion2 > .card-body{
            background-color: #209951;
        }
        > div:nth-child(2) header .btn-info {
            color: #fff;
            background-color: #209951;
            border-color: #209951;
            height:60px;
            font-weight:700;
            font-size:16px;
            padding-top:17px;
            &:hover{
                background-color: #22914E;
                border-color: #22914E;
            }
        }
        #accordion3 > .card-body{
            background-color: #147F3F;
        }
        > div:nth-child(3) header .btn-info {
            color: #fff;
            background-color: #147F3F;
            border-color: #147F3F;
            height:60px;
            font-weight:700;
            font-size:16px;
            padding-top:17px;
            &:hover{
                background-color: #12773B;
                border-color: #12773B;
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