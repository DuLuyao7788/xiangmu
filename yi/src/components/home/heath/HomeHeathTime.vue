<template>
    <div class="heathTime">
        <ul>
             <li>健康优享</li>
             <li>据时间仅剩</li>
             <li>|</li>
             <li>2:23:06</li>    
        </ul>
        <section><span>更多</span><i class="el-icon-arrow-right"></i></section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}
.heathTime{
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    padding:0 1rem;
    display: flex;
    justify-content: space-between;
    font-size:1.3rem;
    border-bottom: 1px solid #e5e5e5;
}
.heathTime ul{
    display: flex;
    justify-content: space-between;
}
.heathTime ul li{
    margin: 0 0.5rem;
}
.heathTime ul li:first-child{
    font-size:1.5rem;
    font-weight: 550;
}
.heathTime ul li:nth-child(2),.heathTime ul li:nth-child(3){
   color: #929292;
   margin-left: 1rem;
}
.heathTime ul li:nth-child(4){
    color: red;
}
section span{
    margin-right: 0.3rem;
     color: #929292;
}
</style>