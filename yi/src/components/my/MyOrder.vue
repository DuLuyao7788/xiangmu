<template>
    <div class="myorder">
        <div class="title">
            <div>我的订单</div>
            <div>查看全部<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="order">
            <el-col>
                <i class="el-icon-wallet"></i><br/>
                <span>待付款</span>
            </el-col>
               <el-col>
                <i class="el-icon-takeaway-box"></i><br/>
                <span>待发货</span>
            </el-col>
            <el-col>
                <i class="el-icon-first-aid-kit"></i><br/>
                <span>待收货</span>
            </el-col>
               <el-col>
                <i class="el-icon-chat-line-square"></i><br/>
                <span>待评价</span>
            </el-col>
               <el-col>
                <i class="el-icon-sell"></i><br/>
                <span>退换货</span>
            </el-col>
            
        </div>
    </div>
</template>

<style>
.myorder .title{
    display: flex;
    justify-content:space-between;
    margin: 2rem; 
}
.myorder .title div:nth-child(1){
    font-size: 1.8rem;
}
.myorder .title div:nth-child(2){
    font-size: 1.3rem;
}
.myorder .order{
    display: flex;
    margin-left: 3rem;
    font-size: 1.3rem;
}
.myorder .order i{
    font-size: 2.1rem;
    color: #606266;
    margin-left: 0.7rem;
    margin-bottom: 0.7rem;
}
</style>