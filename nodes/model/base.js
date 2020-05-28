//导入mysql
const mysql=require('mysql')
//mysql类
module.exports = class Mysql{
  //构造方法：连接数据库
  constructor(){
    this.connection=mysql.createConnection({
      host:'127.0.0.1',
      user:'root',
      password:'ok',
      database:'yiyaowang'
    })
  }
  //通用的查询方法
  query(sql,params=[]){
    return new Promise((reslove,reject)=>{
      this.connection.query(sql,params,(err,results)=>{
        err ? reject(err):reslove(results)
      })
    })
  }
  //查询方法
  async select(sql,params=[]){
    return await this.query(sql,params)
  }
  //新增方法
  async insert(sql,params=[]){
    let results= await this.query(sql,params)
    return {rows:results.affectedRows,insertId:results.insertId}
  }
  //删除方法
  async delete(sql,params=[]){
    return await this.query(sql,params).affectedRows
  }
  //修改方法
  async update(sql,params=[]){
    return await this.query(sql,params).affectedRows
  }
}