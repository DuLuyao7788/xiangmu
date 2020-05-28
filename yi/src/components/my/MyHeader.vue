<template>
    <div class="myheader">
        <el-row>
            <el-col :span="6">
                <i class="el-icon-location-outline"></i>
                <span>山东</span>
            </el-col>
             <el-col :span="18">
                设置
            </el-col>
        </el-row>
    </div>
</template>

<style>
    .myheader{
    height: 11.7rem;
    background: linear-gradient(#908bff,#9bb3ff);
    text-align: center;
    }
   .myheader .el-row{
        text-align: center;
        color: #fff;
        font-size: 1.5rem;
        padding-top: 2.6rem;
    }
   .myheader span{padding-left: 0.5rem;}
   .myheader .el-icon-location-outline{font-size: 2.5rem;}
   .myheader .el-col:nth-child(2){padding-left: 22rem;padding-top:0.5rem ;}
</style>
