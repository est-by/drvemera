// This file was automatically generated from drvemera.tpl.soy.
// Please don't edit this file by hand.

goog.provide('drvemera.locale');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
drvemera.locale.loadLocale = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t\r\n\tdrvemera.locale.SR = {\r\n\t\tACTIVITY:\'Активность\', NAME:\'Имя\', ID:\'Идентификатор\', TITLE:\' CE-101 \', SELECT:\'Выбрать\', ENBL30MIN:\'30 Минутные\', EnblCounterTariff1:\'Показания по тарифу 1\', EnblCounterTariff2:\'Показания по тарифу 2\', EnblCounterTariff3:\'Показания по тарифу 3\', EnblCounterTariff4:\'Показания по тарифу 4\', EnblCounterTariff5:\'Показания по тарифу 5\', EnblCounterTariff6:\'Показания по тарифу 6\', EnblCounterTariff7:\'Показания по тарифу 7\', EnblCounterTariff8:\'Показания по тарифу 8\', PL_NONE:\'Не задан\', PL_BASE:\'Базовый\', LEVEL:\'Уровень доступа\', PSW:\'Пароль\', KU_KI_Dev:\'Использовать KI,KU из прибора\', KI:\'Коэффициент по току\', KU:\'Коэффициент по напряжению\', ADDRESS:\'Адрес прибора\', ENBLTIMECORR:\'Коррекция времени\', ENBL3MIN:\'3 Минутные\', ENBLEVENTS:\'События\', ENBLIM:\'Мгновенные\', DATABUS:\'Шина данных\', SELECTBUSFOR:\'Выберите шину данных для\'\r\n\t};\r\n\t');
  if (!opt_sb) return output.toString();
};
