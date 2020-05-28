<template>
    <div class="oftensearch">
        <a href="#" v-for="(often,i) in oftenList" :key="i">{{often.oftenName}}</a>
    </div>
</template>
<script>
export default {
    props:{
        oftenList:{
            type:Array,
            default:function(){
                []
            }
        }
    }
}
</script>
<style  scoped>
.oftensearch{
    padding: 0  1rem 1.8rem ;

}
.oftensearch a{
    display: inline-block;
    border-radius: 1.5rem;
    color: #262d56;
    font-size: 1.6rem;
    font-weight:500;
    padding:.7rem 1rem;
    background-color: #fff;
    margin: .6rem .9rem ;
}
</style>