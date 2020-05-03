<template>
    <div class="footernavs">
        <el-row type="flex" justify="space-between">
            <el-col :span="8">
                <div :class="{active:active==1}" @click="to('/')">
                    <i class="el-icon-star-off"></i>
                    <div>收藏</div>
                </div>
            </el-col>
            <el-col :span="8">
                <div :class="{active:active==2}" @click="to('/find')">
                    <i class="el-icon-tickets"></i>
                    <div>购物车</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'GoodsInfoFooter',
    props:{
        active:{
            default:1
        }
    },
    methods: {
        to(router){
            this.$router.push({path:router})
        }
    },
}
</script>

<style scoped>
    .footernavs{
        color: #606266;
        padding: 1rem 0;
        border-top:0.1rem solid #DcDFE6;
        position: fixed;
        bottom: 0px;
        width: 100%;
        background-color: #fff;
    }
    .footernavs i{
        font-size: 2.8rem;
    }
    .footernavs .el-col{
       text-align: center;
       padding-right: 1rem;
      color: #969AAE;;
    }
    .active{
        color:#0085ff;
    }
    
</style>