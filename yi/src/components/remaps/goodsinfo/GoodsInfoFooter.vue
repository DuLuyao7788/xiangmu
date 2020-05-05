<template>
    <div class="footernavs">
        <el-row type="flex" justify="space-between">
            <el-col :span="8" class="el-col1">
                <div :class="{active:active==1}" @click="to('/')">
                    <i class="el-icon-star-off"></i>
                    <div>收藏</div>
                </div>
            </el-col>
            <el-col :span="8" class="el-col2">
                <div :class="{active:active==1}" @click="to('/find')">
                    <i class="el-icon-tickets"></i>
                    <div>购物车</div>
                </div>
            </el-col>
             <el-col :span="8" class="jrgwc">
                <div :class="{active:active==1}" @click="to('/find')">
                    <div class="jiarugouwuche">加入购物车</div>
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
            default:0
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
        border-top:0.1rem solid #DcDFE6;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        width: 41.4rem;
        height: 6.7rem;
        background-color: #fff;
        z-index: 10;
    }
    .el-col1,.el-col2{
        margin-top: 1rem;
        text-align: center;
    }
    .footernavs i{
        font-size: 2.8rem;
        margin-bottom: 0.3rem;
    }
    .footernavs .el-col{
       text-align: center;
       padding-right: 1rem;
      color: #969AAE;;
      font-size:1.34rem;
    }
    /* 加入购物车的el-col */
    .jrgwc{
        width: 13.6rem;
        height: 6.8rem;
        background-color:#D74C29;
        text-align: center;
        vertical-align: middle;
    }
    /* 加入购物车的设置 */
    .jiarugouwuche{
        font-size:1.34rem;
        color: white;
        font-weight: 700;
        line-height: 6rem;
    }
    .active{
        color:#0085ff;
    }
    
</style>