import {Sequelize} from 'sequelize';

let sequelize = new Sequelize(null, null, null, {dialect: 'sqlite', storage: 'data.db', logging: false});

export let Town = sequelize.define('town', {
  name: Sequelize.STRING,
  team: Sequelize.TEXT,
  desc: Sequelize.TEXT
});

export let Vill = sequelize.define('vill', {
  town_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  desc: Sequelize.TEXT,
  team: Sequelize.TEXT,
  remark: Sequelize.TEXT
});

export let Person = sequelize.define('person', {
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

export let Plan = sequelize.define('plan', {
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

export let Article = sequelize.define('article', {
  title: Sequelize.STRING,
  date: Sequelize.STRING,
  content: Sequelize.TEXT
});



