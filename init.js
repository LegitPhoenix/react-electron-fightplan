var Sequelize = require('sequelize');

let sequelize = new Sequelize(null, null, null, {dialect: 'sqlite', storage: 'data.db', logging: false});

let Town = sequelize.define('town', {
  name: DataTypes.STRING,
  team: DataTypes.TEXT,
  desc: DataTypes.TEXT
});

let Vill = sequelize.define('vill', {
  town_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  desc: DataTypes.TEXT,
  team: DataTypes.TEXT,
  remark: DataTypes.TEXT
});

let Person = sequelize.define('person', {
  province: DataTypes.STRING,
  city: DataTypes.STRING,
  county: DataTypes.STRING,
  town: DataTypes.STRING,
  vill: DataTypes.STRING,
  family: DataTypes.STRING,
  person: DataTypes.STRING,
  icon: DataTypes.INTEGER,
  name: DataTypes.STRING,
  sex: DataTypes.STRING,
  number: DataTypes.STRING,
  count: DataTypes.STRING,
  role: DataTypes.STRING,
  nation: DataTypes.STRING,
  culture: DataTypes.STRING,
  school: DataTypes.STRING,
  health: DataTypes.STRING,
  work: DataTypes.STRING,
  labour: DataTypes.STRING,
  labour_time: DataTypes.STRING,
  medical_care: DataTypes.STRING,
  vill_insur: DataTypes.STRING,
  town_insur: DataTypes.STRING,
  tp_property: DataTypes.STRING,
  poor_property: DataTypes.STRING,
  reason: DataTypes.STRING,
  income: DataTypes.STRING,
  tel: DataTypes.STRING,
  bank: DataTypes.STRING,
  bank_number: DataTypes.STRING,

  political: DataTypes.STRING,
  tp_year: DataTypes.STRING,
  export: DataTypes.STRING,
  house: DataTypes.STRING
});

let Plan = sequelize.define('plan', {
  person_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  xiangmuneirongjiguimo: DataTypes.TEXT,
  daikuan: DataTypes.TEXT,
  zichouzijin: DataTypes.TEXT,
  qita: DataTypes.TEXT,
  weifanggaizaojihua: DataTypes.TEXT,
  qitatuopinxiangmu: DataTypes.TEXT,
  beizhu: DataTypes.TEXT,

  dagongshouru: DataTypes.TEXT,
  nianlingqudibaojin: DataTypes.TEXT,
  zaixiaoshengnianzizhujin: DataTypes.TEXT,
  lingqujuanzhuzijin: DataTypes.TEXT,
  shengchanjingyingxingshouru: DataTypes.TEXT,
  shengtaibuchangjin: DataTypes.TEXT,
  tudiliuzhuanshouru: DataTypes.TEXT,
  jihuashengyujin: DataTypes.TEXT,
  yanglaobaoxianjin: DataTypes.TEXT,
  caichanxingshouru: DataTypes.TEXT,
  qitashouru: DataTypes.TEXT,

  shengchanjingyingxingzhichu: DataTypes.TEXT,
  jiaoyuzhichu: DataTypes.TEXT,
  yiliaozhichu: DataTypes.TEXT,
  hunjiazhichu: DataTypes.TEXT,
  qitazhichu: DataTypes.TEXT,
  renjunshouru: DataTypes.TEXT,
  nianfen: DataTypes.STRING

});

Town.sync({force: true}).then(() => {
    Town.create({
      name: '小德营子乡',
      desc: '小德营子乡简介'
    });
  }
);

Vill.sync({force: true}).then(() => {
  var vills = ['新立屯村', '双榆树村', '一间楼村', '贾家屯村', '腰营子村', '大石桥村', '莲花山村', '公立亨村', '东大门村', '冷家店村'];
  
  vills.forEach((vill_name) => {
    Vill.create({
      town_id: 1,
      name: vill_name
    });
  });
});

Person.sync({force: true}).then(() => {
  var data = require('fs').readFileSync('data.json', 'utf-8')
  var persons = JSON.parse(data);
  persons.map(person => {
    person.tp_year = 2016 + parseInt(Math.random() * 4) + '';
    person.political = ['中共党员', '群众'][1]
    Person.create(person);
  });
});

Plan.sync({force: true});

let Article = sequelize.define('article', {
  title: DataTypes.STRING,
  date: DataTypes.STRING,
  content: DataTypes.TEXT
});

Article.sync({froce: true});



