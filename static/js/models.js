'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Article = exports.Plan = exports.Person = exports.Vill = exports.Town = undefined;

var _sequelize = require('sequelize');

var sequelize = new _sequelize.Sequelize(null, null, null, { dialect: 'sqlite', storage: 'data.db', logging: false });

var Town = exports.Town = sequelize.define('town', {
  name: DataTypes.STRING,
  team: DataTypes.TEXT,
  desc: DataTypes.TEXT
});

var Vill = exports.Vill = sequelize.define('vill', {
  town_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  desc: DataTypes.TEXT,
  team: DataTypes.TEXT,
  remark: DataTypes.TEXT
});

var Person = exports.Person = sequelize.define('person', {
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

var Plan = exports.Plan = sequelize.define('plan', {
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

var Article = exports.Article = sequelize.define('article', {
  title: DataTypes.STRING,
  date: DataTypes.STRING,
  content: DataTypes.TEXT
});