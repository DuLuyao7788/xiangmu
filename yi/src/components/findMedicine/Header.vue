<template>
  <div class="herader">
    <el-row>
      <el-col :span="3">
        <el-image src="/images/findMeducune/1yaowang.png"></el-image>
      </el-col>
      <el-col :span="2">山东</el-col>
      <el-col :span="14">
        <div class="sou-suo">
          <div class="inner">
            <i class="el-icon-search"></i>
            <span>输入商品名称</span>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
           <el-image src="/images/findMeducune/zxys.png"></el-image>
      </el-col>
    </el-row>
    <el-row>
        <el-image src="/images/findMeducune/myzx.png" />
    </el-row>
  </div>
</template>

/**头部 */
<style>

.herader {
    background: #f9f9f9;
}
.herader .sou-suo .inner{
        background: #ebebeb;
        color: #b8b8be;
        font-size: 1.2rem;
        border-radius: 1rem;
        padding: 0rem 1rem;
        height: 2.5rem;
        line-height: 2.5rem;
        margin-top: 0.8rem;
}
.herader .sou-suo .inner i{
    font-size: 1.5rem;
    font-weight: 700;
    margin:0.25rem 0.5rem;
}
.herader .el-row:nth-child(1){
    height: 4.2rem;
    border-bottom:1px solid #C0C4CC;
    margin-bottom: 0.15rem;
}
.herader .el-row:nth-child(1) .el-col:nth-child(1) .el-image{
    width: 2.6rem;
   margin-left: 1.5rem;
   margin-top: 0.5rem;
}
.herader .el-row:nth-child(1) .el-col:nth-child(2){
    margin-top: 1.2rem;
    margin-left: 0.7rem;
    font-size: 1.2rem;
}
.herader .el-row:nth-child(1) .el-col:nth-child(4){
    width: 5rem;
    margin-left: 1rem;
    margin-top: 0.3rem;
}
</style>