// This file was automatically generated from drvmes.tpl.soy.
// Please don't edit this file by hand.

goog.provide('drvmes.locale');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string|undefined}
 * @notypecheck
 */
drvmes.locale.loadLocale = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t\r\n\tdrvmes.locale.SR = {\r\n\t\tACTIVITY:\'Активность\', NAME:\'Имя\', ID:\'Идентификатор\', TITLE:\'МЭС(Ровалент)\', SELECT:\'Выбрать\', PL_NONE:\'Не задан\', PL_BASE:\'Базовый\', LEVEL:\'Уровень доступа\', PSW:\'Пароль\', KU_KI_Dev:\'Использовать KI,KU из прибора\', KI:\'Коэффициент по току\', KU:\'Коэффициент по напряжению\', ADDRESS:\'Адрес прибора\', ENBLTIMECORR:\'Коррекция времени\', ENBL3MIN:\'3 Минутные\', ENBLEVENTS:\'События\', ENBLIM:\'Мгновенные\', DATABUS:\'Шина данных\', SELECTBUSFOR:\'Выберите шину данных для\'\r\n\t};\r\n\t');
  if (!opt_sb) return output.toString();
};
