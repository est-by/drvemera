/** Объявление элемента (namespace)*/ 
goog.provide('drvemera.controller');
goog.require('drvemera.model');

drvemera.controller = function () { 
    //base.driver(this, this.toString);
};
goog.addSingletonGetter(drvemera.controller);

/**
* Обертка над элементом
*/
drvemera.controller.prototype.WrapItem = function (item) {
};


/**
* Подготовка при отправке
*/
drvemera.controller.prototype.CleanItem = function (item) {
};
/**
* Вернуть признак On/Off по логике
*/
drvemera.controller.prototype.toOnOff = function (value) {
    if (value == true) {
        return "on";
    }
    return "off";
}

/**
* Вернуть строковое представление объекта
* @param item {object} текущий обект для которого нужно описание
*/
drvemera.controller.prototype.toString = function () {
    var ctl = drvemera.controller.getInstance();
    var str = "" + this.Address;
    if (this.IsAutoconfig != true) {
        //str +=    ", " + ctl.toOnOff(this.EnblTimeCorr)
                //+ ", " + ctl.toOnOff(this.Enbl3min)
                //+ ", " + ctl.toOnOff(this.EnblEvents);
                //+ ", " + ctl.toOnOff(this.EnblIm);    
    }
    return str;

};