/** Объявление элемента (namespace)*/ 
goog.provide("drvemera.Plugin");
/** Объявление необходимости элемента*/
goog.require('drvemera.view');

drvemera.Plugin = function () { };
goog.addSingletonGetter(drvemera.Plugin);

drvemera.Plugin.prototype.Info = {
    // файл стилей
    css: "css/app.css",
    // файл языков
    locale: "drvemera.locale",
    // перечень обслуживаемых типов
    guid: ["est.by:Bus.EmeraDrvClientImpl"],
    // имя дллки
    dll: "EmeraDrv",
    // имя типа Общих настроек
    sstype: "Sys.Services.Drv.EmeraSharedSetting",
    // иконка для списка (активен)
    image: 'images/emera.png',
    // иконка для списка (не активен)
    imagedisable: 'images/emeradisable.png',
    // заголовок плагина
    title: function () { return drvemera.locale.SR.TITLE; },
    // формы для редактирования
    forms: function (selectService) {
        var inst = drvemera.view.getInstance();
        return inst.getForms(selectService);
    },
    // иконка выбора типа
    typeIcon: function () {
        return 'emeraType';
    },
    // модель
    model: function () {
        return drvemera.model.getInstance();
    },
    // заглушка
    fixture: function () {
        return drvemera.fixture.getInstance();
    },
    // логика
    controller: function () {
        return drvemera.controller.getInstance();
    },
    // формы для автоконфигурирования
    autoconfigForms: function (selectService) {
        return selectService.getSearchTemplate(selectService);
    },
    sharedSettings: function(selectService){
        var inst = drvemera.view.getInstance();
        return inst.getSharedSettingsForms(selectService);
    },
	bus: "client"
 };



