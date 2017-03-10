var Sequelize = require('sequelize');

let sequelize = new Sequelize(null, null, null, {dialect: 'sqlite', storage: 'data.db', logging: false});

let Plan = sequelize.define('plan', {
  person_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  vill: Sequelize.STRING,
  xiangmuneirongjiguimo: Sequelize.TEXT,
  daikuan: Sequelize.TEXT,
  zichouzijin: Sequelize.TEXT,
  qita: Sequelize.TEXT,
  laowushuchu: Sequelize.TEXT,
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

Plan.sync({force: true}).then(() => {
  for(let i = 0; i < 2264; i++) {
    Plan.create({
      person_id: Math.random() * 2264 + 1 + '',
      vill: ['新立屯村', '双榆树村', '大石桥村', '莲花山村'][Math.random() * 4],
      xiangmuneirongjiguimo: Math.random() * 1000 + '',
      daikuan: Math.random() * 1000 + '',
      zichouzijin: Math.random() * 1000 + '',
      qita: Math.random() * 1000 + '',
      laowushuchu: ['临时外出', '常年外出'][Math.random() * 2],
      weifanggaizaojihua: ['翻房', '维修'][Math.random() * 2],
      qitatuopinxiangmu: Math.random() * 1000 + '',
      beizhu: '无',
  
      dagongshouru: Math.random() * 1000 + '',
      nianlingqudibaojin: Math.random() * 1000 + '',
      zaixiaoshengnianzizhujin: Math.random() * 1000 + '',
      lingqujuanzhuzijin: Math.random() * 1000 + '',
      shengchanjingyingxingshouru: Math.random() * 1000 + '',
      shengtaibuchangjin: Math.random() * 1000 + '',
      tudiliuzhuanshouru: Math.random() * 1000 + '',
      jihuashengyujin: Math.random() * 1000 + '',
      yanglaobaoxianjin: Math.random() * 1000 + '',
      caichanxingshouru: Math.random() * 1000 + '',
      qitashouru: Math.random() * 1000 + '',
  
      shengchanjingyingxingzhichu: Math.random() * 1000 + '',
      jiaoyuzhichu: Math.random() * 1000 + '',
      yiliaozhichu: Math.random() * 1000 + '',
      hunjiazhichu: Math.random() * 1000 + '',
      qitazhichu: Math.random() * 1000 + '',
      renjunshouru: Math.random() * 1000 + '',
      nianfen: '2016'
    });
  }
});
