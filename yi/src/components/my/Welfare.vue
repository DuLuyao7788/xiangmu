<template>
    <div class="welfare">
        <div class="title">
            <div>福利中心</div>
        </div>
        <div class="flzx">
            <el-col>
                <i class="el-icon-s-ticket"></i><br/>
                <span>领卷中心</span>
            </el-col>
            <el-col>
                <i class="el-icon-coin"></i><br/>
                <span>领奖励金</span>
            </el-col>
        </div>
    </div>
</template>

<style>
.welfare{
    margin-top: 3.5rem;
}
.welfare .title{
    display: flex;
    justify-content:space-between;
    margin: 2rem; 
}
.welfare .title div:nth-child(1){
    font-size: 1.8rem;
}
.welfare .flzx{
    display: flex;
    margin-left: 3rem;
    font-size: 1.3rem;
    margin-right: 15rem;
}
.welfare .flzx i{
    font-size: 2.1rem;
    color: #606266;
    margin-left: 1.4rem;
    margin-bottom: 0.7rem;
}
.el-icon-s-ticket{
    color: #fff;
}
</style>