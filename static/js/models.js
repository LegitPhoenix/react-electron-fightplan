'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plan = exports.Person = exports.Vill = exports.Town = undefined;

var _sequelize = require('sequelize');

var sequelize = new _sequelize.Sequelize(null, null, null, { dialect: 'sqlite', storage: 'data.db', logging: false });

var Town = exports.Town = sequelize.define('town', {
  name: _sequelize.Sequelize.STRING,
  team: _sequelize.Sequelize.TEXT,
  desc: _sequelize.Sequelize.TEXT
});

var Vill = exports.Vill = sequelize.define('vill', {
  town_id: _sequelize.Sequelize.INTEGER,
  name: _sequelize.Sequelize.STRING,
  desc: _sequelize.Sequelize.TEXT,
  team: _sequelize.Sequelize.TEXT,
  remark: _sequelize.Sequelize.TEXT
});

var Person = exports.Person = sequelize.define('person', {
  province: _sequelize.Sequelize.STRING,
  city: _sequelize.Sequelize.STRING,
  county: _sequelize.Sequelize.STRING,
  town: _sequelize.Sequelize.STRING,
  vill: _sequelize.Sequelize.STRING,
  family: _sequelize.Sequelize.STRING,
  person: _sequelize.Sequelize.STRING,
  icon: _sequelize.Sequelize.INTEGER,
  name: _sequelize.Sequelize.STRING,
  sex: _sequelize.Sequelize.STRING,
  number: _sequelize.Sequelize.STRING,
  count: _sequelize.Sequelize.STRING,
  role: _sequelize.Sequelize.STRING,
  nation: _sequelize.Sequelize.STRING,
  culture: _sequelize.Sequelize.STRING,
  school: _sequelize.Sequelize.STRING,
  health: _sequelize.Sequelize.STRING,
  work: _sequelize.Sequelize.STRING,
  labour: _sequelize.Sequelize.STRING,
  labour_time: _sequelize.Sequelize.STRING,
  medical_care: _sequelize.Sequelize.STRING,
  vill_insur: _sequelize.Sequelize.STRING,
  town_insur: _sequelize.Sequelize.STRING,
  tp_property: _sequelize.Sequelize.STRING,
  poor_property: _sequelize.Sequelize.STRING,
  reason: _sequelize.Sequelize.STRING,
  income: _sequelize.Sequelize.STRING,
  tel: _sequelize.Sequelize.STRING,
  bank: _sequelize.Sequelize.STRING,
  bank_number: _sequelize.Sequelize.STRING,

  political: _sequelize.Sequelize.STRING,
  tp_year: _sequelize.Sequelize.STRING
});

var Plan = exports.Plan = sequelize.define('plan', {
  person_id: _sequelize.Sequelize.INTEGER,
  xiangmuneirongjiguimo: _sequelize.Sequelize.TEXT,
  daikuan: _sequelize.Sequelize.TEXT,
  zichouzijin: _sequelize.Sequelize.TEXT,
  qita: _sequelize.Sequelize.TEXT,
  laowushuchu: _sequelize.Sequelize.TEXT,
  weifanggaizaojihua: _sequelize.Sequelize.TEXT,
  qitatuopinxiangmu: _sequelize.Sequelize.TEXT,
  beizhu: _sequelize.Sequelize.TEXT,

  dagongshouru: _sequelize.Sequelize.TEXT,
  nianlingqudibaojin: _sequelize.Sequelize.TEXT,
  zaixiaoshengnianzizhujin: _sequelize.Sequelize.TEXT,
  lingqujuanzhuzijin: _sequelize.Sequelize.TEXT,
  shengchanjingyingxingshouru: _sequelize.Sequelize.TEXT,
  shengtaibuchangjin: _sequelize.Sequelize.TEXT,
  tudiliuzhuanshouru: _sequelize.Sequelize.TEXT,
  jihuashengyujin: _sequelize.Sequelize.TEXT,
  yanglaobaoxianjin: _sequelize.Sequelize.TEXT,
  caichanxingshouru: _sequelize.Sequelize.TEXT,
  qitashouru: _sequelize.Sequelize.TEXT,

  shengchanjingyingxingzhichu: _sequelize.Sequelize.TEXT,
  jiaoyuzhichu: _sequelize.Sequelize.TEXT,
  yiliaozhichu: _sequelize.Sequelize.TEXT,
  hunjiazhichu: _sequelize.Sequelize.TEXT,
  qitazhichu: _sequelize.Sequelize.TEXT,

  renjunshouru: _sequelize.Sequelize.TEXT,

  nianfen: _sequelize.Sequelize.STRING

});