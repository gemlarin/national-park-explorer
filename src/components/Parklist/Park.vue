<template>
    <li class="list-group-item">
        <div class="head">
            <h3>{{ item.name }}</h3>
            <div class="load-map" role="button"><img src="./../../assets/icons/placeholder.svg" alt="find on map"/></div>
        </div>
        <div class="row" style="margin-top:55px;">
            <div class="col-12">
                <h6>{{ item.states }}: {{ item.designation }}</h6>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <h5>Description</h5>
                <p>{{ item.description }}</p>
            </div>
            <div class="col-6">
                <h5>Climate</h5>
                <p>{{ item.weatherInfo }}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="liked" v-if="!display">
                    <img src="./../../assets/icons/like.svg" alt="liked" />
                </div>
                <div class="form-check" v-if="display">
                     <label>
                        <input type="checkbox" :id="item.parkCode" v-model="checkedPark" name="check"> <span class="label-text"><span class="small">FAVORITE</span></span>
                    </label>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
// @ is an alias to /src
import { parkCodeBus } from './../../main.js'
import { isResultsBus } from './../../main.js'
import {resetBus} from './../../main.js' 
export default {
    name: 'park',
    data () {
        return {
            checkedPark: false,
            parkname: this.item.parkCode,
            display:true
        }
    },
    props: ['item'],
    methods:{
        fetchData: function(){
            //grab the list of checked parks
            let checklist = this.$store.state.selectedParks
            let idx = checklist.indexOf(this.parkname)
            if(idx > -1){
                this.display = false;
            }else if(idx = -1){
                this.display = true;
            }
        }
    },
    watch: {
        checkedPark: function (val) {
           parkCodeBus.$emit('addPark', this.parkname);
        }
    },
    created() {
       this.fetchData();  
    },
    mounted(){
        isResultsBus.$emit('hasResults', true);
    },
    updated(){
        this.parkname = ''
        this.parkname = this.item.parkCode;
        this.fetchData(); 
    }
}

       
</script>
<style lang="scss">

    .liked img{
        height:25px;
        width:auto;
    }
    .list-group-item{
        border-radius:5px !important;
        margin-top:5px;
        position:relative;
        z-index:10;
        overflow:hidden;
        p{
            font-size:13px !important;
            margin-top:10px;
        }
        h6{
            font-family: 'Open Sans', sans-serif;
            font-weight:normal;
            font-size:20px;
            color:#1f9951;
            font-size:14px;
            margin-top:3px;
        }
        h5{
           font-family: 'Open Sans', sans-serif;
           font-weight:700;
           color:#202428; 
           font-size:16px;
           margin-top:6px;
        }
        label{
            position: relative;
            cursor: pointer;
            color: #209951;
            font-size: 30px;
            font-family: 'Open Sans', sans-serif;
            margin-bottom:0;
        }
        .small{
            font-size:11px;
            font-weight: 700;
            letter-spacing:-.02em;
            position:relative;
            top:-6px;
            color:#209951;;
        }

        .head{
            width:100%;
            height:55px;
            background-color:#1f9951;
            position:absolute;
            z-index:30;
            left:0;
            top:0;
            h3{
                font-weight:700;
                font-size:22px;
                padding-left:20px;
                padding-top:13px;
                color:#fff;
                display:inline-block;
                letter-spacing: -.02em;
                font-family: 'Open Sans', sans-serif;
            }
            .load-map{
                height:25px;
                width:auto;
                margin-top:13px;
                margin-right:20px;
                float:right;
                img{
                   height:25px;
                    width:auto; 
                }
            }
        }
        
       .form-check{
           padding-left:0;
       }
        input[type="checkbox"], input[type="radio"]{
            position: absolute;
            right: 9000px;
        }

        /*Check box*/
        input[type="checkbox"] + .label-text:before{
            content: "\f0c8";
            font-family: "Font Awesome 5 Free";
            speak: none;
            font-style: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing:antialiased;
            width: 1em;
            display: inline-block;
            margin-right: 5px;
        }

        input[type="checkbox"]:checked + .label-text:before{
            content: "\f14a";
            color: #209951;
            animation: effect 250ms ease-in;
            font-weight: 900;
        }

        input[type="checkbox"]:disabled + .label-text{
            color: #aaa;
        }

        input[type="checkbox"]:disabled + .label-text:before{
            content: "\f0c8";
            color: #ccc;
        }
    }

    .label__checkbox {
        display: none;
    }
 
</style>
