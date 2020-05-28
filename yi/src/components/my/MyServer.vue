<template>
    <div class="myserver">
        <div class="title">
            <div>我的服务</div>
        </div>
        <div class="server">
            <el-col>
                <i class="el-icon-first-aid-kit"></i><br/>
                <span>健康档案</span>
            </el-col>
               <el-col>
                <i class="el-icon-view"></i><br/>
                <span>看过买过</span>
            </el-col>
            <el-col>
                <i class="el-icon-folder-add"></i><br/>
                <span>我的收藏</span>
            </el-col>
               <el-col>
                <i class="el-icon-service"></i><br/>
                <span>联系客服</span>
            </el-col>
            
        </div>
    </div>
</template>

<style>
.myserver{
    margin-top: 3.5rem;
}
.myserver .title{
    display: flex;
    justify-content:space-between;
    margin: 2rem; 
}
.myserver .title div:nth-child(1){
    font-size: 1.8rem;
}
.myserver .title div:nth-child(2){
    font-size: 1.3rem;
}
.myserver .server{
    display: flex;
    margin-left: 3rem;
    font-size: 1.3rem;
}
.myserver .server i{
    font-size: 2.1rem;
    color: #606266;
    margin-left: 1.4rem;
    margin-bottom: 0.7rem;
}
</style>