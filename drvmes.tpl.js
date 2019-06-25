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
  output.append('\t\r\n\tdrvmes.locale.SR = {\r\n\t\tACTIVITY:\'Activity\', NAME:\'Name\', ID:\'Id\', TITLE:\' MES \', SELECT:\'Select\', PL_NONE:\'None\', PL_BASE:\'Base\', LEVEL:\'Access level\', PSW:\'Password\', KU_KI_Dev:\'Use KI,KU from device\', KI:\'KI\', KU:\'KU\', ADDRESS:\'Device address\', ENBLTIMECORR:\'Time correct\', ENBL3MIN:\'3 Min\', ENBLEVENTS:\'Events\', ENBLIM:\'Instantaneous\', DATABUS:\'Data bus\', SELECTBUSFOR:\'Select data bus for\'\r\n\t};\r\n\t');
  if (!opt_sb) return output.toString();
};
