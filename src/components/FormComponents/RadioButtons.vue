<template>
<form>
    <div class="radio-buttons animated zoomIn">
        <p>Total Results:</p>
        <div class="radio radio-button-wrapper">
            <input type="radio" id="one" name="total" value="5" v-model="queryTotal">
            <label class="radio-label" for="one"><span class="small">&nbsp;5</span></label>
        </div>
        <div class="radio radio-button-wrapper">
            <input type="radio" id="two" name="total" value="10" v-model="queryTotal">
            <label class="radio-label" for="two"><span class="small">10</span></label>
        </div>
        <div class="radio radio-button-wrapper">
            <input type="radio" id="three" name="total" value="25" v-model="queryTotal">
            <label class="radio-label" for="three"><span class="small">25</span></label>
        </div>
        <div class="radio radio-button-wrapper">
            <input type="radio" id="four" name="total" value="0" v-model="queryTotal">
            <label class="radio-label" for="four"><span class="small">All</span></label>
        </div>
    </div>
    </form>
</template>
<script>
    export default {
        name: 'radiobuttons',
        components: {
        
        },
        data () {
            return {
                queryTotal:''
            }
        },
        mounted(){
            $("#one").trigger('click');
        },
        watch: {
            queryTotal: function (val) {
                this.$store.commit('setQueryTotal', val)
            }
        }
    }
</script>
<style lang="scss">
    $color1: #fff;
    $color2: #39B449;
    .radio {
        margin: 0.5rem;
        input[type="radio"] {
            position: absolute;
            opacity: 0;
            + .radio-label {
            &:before {
                content: '';
                background: $color1;
                border-radius: 3px;
                border: 1px solid $color2;
                display: inline-block;
                width: 1.2em;
                height: 1.2em;
                position: relative;
                top: -0.2em;
                margin-right: 1em; 
                vertical-align: top;
                cursor: pointer;
                text-align: center;
                transition: all 250ms ease;
            }
            }
            &:checked {
            + .radio-label {
                &:before {
                background-color: $color2;
                box-shadow: inset 0 0 0 4px $color1;
                }
            }
            }
            &:focus {
            + .radio-label {
                &:before {
                outline: none;
                border-color: $color2;
                }
            }
            }
            &:disabled {
            + .radio-label {
                &:before {
                box-shadow: inset 0 0 0 4px $color1;
                border-color: darken($color1, 25%);
                background: darken($color1, 25%);
                }
            }
            }
            + .radio-label {
            &:empty {
                &:before {
                margin-right: 0;
                }
            }
            }
        }
        }
    .radio-buttons{
        margin-top:5px;
        display: inline-block;
        width: 100%;
        height: 54px;
        border-radius:3px;
        border:1px solid #8fcc64;
        padding-top:5px;
        .small{
            font-size:13px;
            position:relative;
            left:4px;
            top:-14px;
        }
        p{
            display:inline;
            position:relative;
            top:8px;
            margin-right:15px;
            margin-left:25px;
            color:white;
            font-size:13px;
        }
    }
    .radio-button-wrapper{
        display: inline-block;
        margin-right:20px;
        top:-13px;
        position:relative;
        label{
           
            font-family: 'Open Sans', sans-serif;
             color:white;
             font-size:18px;
             position:absolute;
             left:-2px;
             top:9px;
             
        }
    }
</style>