<template>
    <div class="sidenav-wrap">
        <toggle-side-nav />
      <div class="sidenav-container">
            <div class="logo-block">
                <img src="./../../assets/logo.svg">
            </div>
            <div class="sidenav-container">
                <div role="tablist" id="sidenav">
                    <router-link tag="div" to="/">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info"><img alt="park icon" class="tab-icon" src="./../../assets/icons/tent.svg">NATIONAL PARKS</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <Dropdown />
                            <TextField />
                            <RadioButtons />
                            <button class="btn btn-primary animated zoomIn" v-on:click="submit()">SEARCH</button>
                            <div class="clear-container text-center">
                                <a class="animated zoomIn clear" v-on:click="clear()">CLEAR SEARCH</a>
                            </div>
                        </b-card-body>
                        </b-collapse>
                    </b-card>
                    </router-link>
                    <router-link tag="div" to="/favorites">
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion2 variant="info"><img alt="park icon" class="tab-icon" src="./../../assets/icons/checklist.svg">FAVORITE PARKS</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <div class="animated zoomIn">
                                <p class="card-text">
                                Bacon ipsum dolor amet tongue chicken ball tip kevin, leberkas pork chop landjaeger short ribs pork belly t-bone. Tail bresaola picanha tri-tip tenderloin salami. Beef ham hock sirloin shankle beef ribs hamburger corned beef. Chicken andouille tenderloin biltong. Shoulder tenderloin pork beef, meatloaf brisket buffalo t-bone sausage strip steak leberkas tri-tip.
                                </p>
                            </div>
                        </b-card-body>
                        </b-collapse>
                    </b-card>
                    </router-link>
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion3 variant="info"><img alt="park icon" class="tab-icon" src="./../../assets/icons/map.svg">MY MAPS</b-btn>
                        </b-card-header>
                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <p class="card-text">
                                I start closed because visible is false
                            </p>
                        </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
    import {TweenMax, Power4} from 'gsap'
    import Dropdown from './../FormComponents/Dropdown.vue'
    import ToggleSideNav from './../Navigation/ToggleSideNav.vue'
    import TextField from './../FormComponents/TextField.vue'
    import RadioButtons from './../FormComponents/RadioButtons.vue'
    import {initSearch} from './../../main.js'
    import {isResultsBus} from './../../main.js'
    import {clearSearchBus} from './../../main.js'
    export default {
        name: 'sidenav',
        data () {
            return {
           
            }
        },
        components: {
            ToggleSideNav,
            Dropdown,
            TextField,
            RadioButtons
        },
        mounted () {
            this.checkWindow();
            window.addEventListener("resize", () => {
                this.checkWindow();
            });
        },
        methods: {
            submit(){
                isResultsBus.$emit('hasResults', false);
                if(this.checkWindowWidth() <= 991){
                    this.$store.dispatch('toggleSidebar')
                }
                var statecode = this.$store.state.selectedState
                var queryterm = this.$store.state.queryTerm
                var querytotal = this.$store.state.queryTotal
                initSearch.$emit('init',{statecode, queryterm, querytotal})
            },
            clear(){
               this.$store.state.clearSearch;
               clearSearchBus.$emit('clearsearch');
            },
            checkWindowWidth(){
                let ww = window.innerWidth;
                return ww;
            },
            checkWindow(){
                var w = this.checkWindowWidth()
                if(w > 991){
                    this.$store.state.sidebarOpen = false;
                    TweenMax.set(this.$el, {
                        x: this.$el.offsetWidth
                    })
                }
                if(w <= 991){
                    this.$store.state.sidebarOpen = true;
                    TweenMax.set(this.$el, {
                        x: this.$el.offsetWidth-300
                    })
                }
                return
            }
        },
        computed: {
            open () {
                return this.$store.state.sidebarOpen
            },
           
        },
        watch: {
            open: function (open) {
                const dX = open ? 0 : this.$el.offsetWidth
                TweenMax.to(this.$el, 0.6, {
                x: dX,
                ease: Power4.easeOut
                })
            }
        }  
    }
</script>
<style lang="scss">
    .tab-icon{
        height:25px;
        width:auto;
        margin-left:7px;
        margin-right:10px;
        position:relative;
        margin-top:-3px;
    }
    .clear{
        margin-top:15px;
        display:inline-block;
        font-family: 'Open Sans', sans-serif;
        font-weight:700;
        font-size:13px;
        color:#fff !important;
        cursor:pointer;
    }
    .sidenav-wrap{
        width:300px;
        position:absolute;
        z-index:501;
        top:0;
        left:-300px;

    }
    .sidenav-container{
        height:calc(100vh - 150px);
        background-color:#39b54a;
    }
    .logo-block{
        position:relative;
        z-index:501;
    }

    @media only screen and (max-width:991px){
        .sidenav-wrap{
            position:absolute;
            top:0;
        }
    }

    #sidenav{
        .btn{
            text-align:left;
        }
        .btn{
            &.btn-primary{
                text-align:center; 
                width:100%;
                padding-top:11px;
                padding-bottom:11px;
                margin-top:20px;
                background-color: #a5de7a;
                font-size:12px !important;
                font-family: 'Open Sans', sans-serif;
                font-weight:700;
                cursor:pointer;
                border-radius:3px;
                border-color:#a5de7a;
                color:#07803c;
                &:hover{
                    background-color: #95d167;
                    border-color:#72a74a;
                    color:#07803c;
                }
                &:visited{
                   border-color:#a5de7a; 
                }
                &:disabled{
                   opacity:.5;
                   cursor:not-allowed;
                }
            }
        }
        #accordion1 .card-body{
            background-color: #6CAF41;
        }
        > div:nth-child(1) header .btn-info {
            color: #fff;
            background-color: #6CAF41;
            border-color: #6CAF41;
            height:60px;
            font-family: 'Open Sans', sans-serif;
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
            font-family: 'Open Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
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
            font-family: 'Open Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
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
        .card-body{
            padding-top:5px;
        }
        .card-text{
            color:#fff;
            font-size:.9em;
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