'use strict';

var _models = require('./models.js');

_models.Town.sync({ force: true }).then(function () {
  _models.Town.create({
    name: '小德营子乡',
    desc: '小德营子乡简介'
  });
});

_models.Vill.sync({ force: true }).then(function () {
  var vills = ['新立屯村', '双榆树村', '一间楼村', '贾家屯村', '腰营子村', '大石桥村', '莲花山村', '公立亨村', '东大门村', '冷家店村'];

  vills.forEach(function (vill_name) {
    _models.Vill.create({
      town_id: 1,
      name: vill_name
    });
  });
});

_models.Person.sync({ force: true });
_models.Plan.sync({ force: true });

