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
  output.append('\t\r\n\tdrvemera.locale.SR = {\r\n\t\tACTIVITY:\'Activity\', NAME:\'Name\', ID:\'Id\', TITLE:\' CE-101 \', SELECT:\'Select\', ENBL30MIN:\'30 Min\', EnblCounterTariff1:\'Counter by tariff 1\', EnblCounterTariff2:\'Counter by tariff 2\', EnblCounterTariff3:\'Counter by tariff 3\', EnblCounterTariff4:\'Counter by tariff 4\', EnblCounterTariff5:\'Counter by tariff 5\', EnblCounterTariff6:\'Counter by tariff 6\', EnblCounterTariff7:\'Counter by tariff 7\', EnblCounterTariff8:\'Counter by tariff 8\', PL_NONE:\'None\', PL_BASE:\'Base\', LEVEL:\'Access level\', PSW:\'Password\', KU_KI_Dev:\'Use KI,KU from device\', KI:\'KI\', KU:\'KU\', ADDRESS:\'Device address\', ENBLTIMECORR:\'Time correct\', ENBL3MIN:\'3 Min\', ENBLEVENTS:\'Events\', ENBLIM:\'Instantaneous\', DATABUS:\'Data bus\', SELECTBUSFOR:\'Select data bus for\'\r\n\t};\r\n\t');
  if (!opt_sb) return output.toString();
};
