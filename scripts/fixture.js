/** Объявление элемента (namespace)*/ 
goog.provide('drvemera.fixture');
goog.require('goog.array');
/** ожидаемые данные по пользователям*/
drvemera.fixture = function () {
    
};
goog.addSingletonGetter(drvemera.fixture);

/**
* Болванка на создание нового объекта для автоконфига, 
* обязательно заполнить все возможные поля
* @param mode {bool} true= просто взять объект для создания, false= для построения mapping
*/
drvemera.fixture.prototype.autoconfigInit = function (mode) {
    var obj = {
        Address: "1-255"
    }
    return obj;
};

drvemera.fixture.prototype.getShared = function () {
    drvemera.fixture.initEnums();
    return goog.json.serialize({
        "EnblTimeCorr": true,
        "Enbl3min": false,
        "EnblEvents": false,
        "EnblIm": false,
        "Level": drvemera.MesProtectLevel.DefaultValue,
        "Psw": "",
        "Arch": 0,
        "Im": 0
    });
};
drvemera.fixture.prototype.initShared = function (mode) {
    var obj = {
        Id: 0,
        Name: "Setting Mes",
        SettingShared: {
            Body: this.getShared()
        },
        TypeGuid: drvemera.Plugin.getInstance().Info.guid[0]
    };
    return obj;
};

/**
* Болванка на создание нового объекта, обязательно заполнить все
* возможные поля
* @param mode {bool} true= просто взять объект для создания, false= для построения mapping
*/
drvemera.fixture.prototype.init = function (mode) 
{
    drvemera.fixture.initEnums();
    var obj = {
        Id:{ IdInt: 100100 },
        Active: true,                             
        DisplayName: "EMera",        
        SettingContent: {
            Body: "{\"Address\":1,\"KU_KI_Dev\":true,\"KI\":1,\"KU\":1}"
        },
        SettingShared: {
            Body: this.getShared()
        },
        TypeGuid: drvemera.Plugin.getInstance().Info.guid[0]
    };
	return obj;
};


/**
* Зарегистрировать Enum c локализованными полями.
* Регистрация должна проходить через функцию, т.к. в чистом fixture
* ничего не известно про локаль.
* Регистрация проходит только если енума нет в объекте
*/
drvemera.fixture.initEnums = function () {
    // зарегистрировать enum, как "drvsem2.EqSchMode"
    base.ENUMS.reg(
        // объект в котром регистрируем Enum
        drvemera,
        // имя регистрируемого Enum
        "EmeraProtectLevel",
        // �?нициализация Enum
        {
            None: [2, drvemera.locale.SR.PL_NONE],
            Base: [0, drvemera.locale.SR.PL_BASE]
        });
}


    