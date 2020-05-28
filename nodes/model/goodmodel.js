//导入基类
const Mysql=require('./base')

class GoodModel extends Mysql{
  async goodList(){
  return await this.select('select * from goods')
  }
}

module.exports=new GoodModel();