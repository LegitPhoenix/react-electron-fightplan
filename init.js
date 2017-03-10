var Sequelize = require('sequelize');

let sequelize = new Sequelize(null, null, null, {dialect: 'sqlite', storage: 'data.db', logging: false});

let Town = sequelize.define('town', {
  name: Sequelize.STRING,
  team: Sequelize.TEXT,
  desc: Sequelize.TEXT
});

let Vill = sequelize.define('vill', {
  town_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  team: Sequelize.TEXT,
  remark: Sequelize.TEXT
});

let Person = sequelize.define('person', {
  province: Sequelize.STRING,
  city: Sequelize.STRING,
  county: Sequelize.STRING,
  town: Sequelize.STRING,
  vill: Sequelize.STRING,
  family: Sequelize.STRING,
  person: Sequelize.STRING,
  icon: Sequelize.INTEGER,
  name: Sequelize.STRING,
  sex: Sequelize.STRING,
  number: Sequelize.STRING,
  count: Sequelize.STRING,
  role: Sequelize.STRING,
  nation: Sequelize.STRING,
  culture: Sequelize.STRING,
  school: Sequelize.STRING,
  health: Sequelize.STRING,
  work: Sequelize.STRING,
  labour: Sequelize.STRING,
  labour_time: Sequelize.STRING,
  medical_care: Sequelize.STRING,
  vill_insur: Sequelize.STRING,
  town_insur: Sequelize.STRING,
  tp_property: Sequelize.STRING,
  poor_property: Sequelize.STRING,
  reason: Sequelize.STRING,
  income: Sequelize.STRING,
  tel: Sequelize.STRING,
  bank: Sequelize.STRING,
  bank_number: Sequelize.STRING,

  political: Sequelize.STRING,
  tp_year: Sequelize.STRING,
  export: Sequelize.STRING,
  house: Sequelize.STRING
});

let Plan = sequelize.define('plan', {
  person_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  xiangmuneirongjiguimo: Sequelize.TEXT,
  daikuan: Sequelize.TEXT,
  zichouzijin: Sequelize.TEXT,
  qita: Sequelize.TEXT,
  weifanggaizaojihua: Sequelize.TEXT,
  qitatuopinxiangmu: Sequelize.TEXT,
  beizhu: Sequelize.TEXT,

  dagongshouru: Sequelize.TEXT,
  nianlingqudibaojin: Sequelize.TEXT,
  zaixiaoshengnianzizhujin: Sequelize.TEXT,
  lingqujuanzhuzijin: Sequelize.TEXT,
  shengchanjingyingxingshouru: Sequelize.TEXT,
  shengtaibuchangjin: Sequelize.TEXT,
  tudiliuzhuanshouru: Sequelize.TEXT,
  jihuashengyujin: Sequelize.TEXT,
  yanglaobaoxianjin: Sequelize.TEXT,
  caichanxingshouru: Sequelize.TEXT,
  qitashouru: Sequelize.TEXT,

  shengchanjingyingxingzhichu: Sequelize.TEXT,
  jiaoyuzhichu: Sequelize.TEXT,
  yiliaozhichu: Sequelize.TEXT,
  hunjiazhichu: Sequelize.TEXT,
  qitazhichu: Sequelize.TEXT,
  renjunshouru: Sequelize.TEXT,
  nianfen: Sequelize.STRING

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
  title: Sequelize.STRING,
  date: Sequelize.STRING,
  content: Sequelize.TEXT
});

Article.sync({froce: true});



