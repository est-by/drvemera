/** Объявление элемента (namespace)*/ 
goog.provide('drvemera.view');
/** Объявление необходимости элемента*/
goog.require('drvemera.controller');
/** Объявление необходимости элемента*/
goog.require('drvemera.model');

drvemera.view = function(){};
goog.addSingletonGetter(drvemera.view);

drvemera.view.prototype.getSharedItems =
function (selectService, disabled) {
    var SR = drvemera.locale.SR;    
    return [

        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'Enbl30min',
            fieldLabel: SR.ENBL30MIN,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff1',
            fieldLabel: SR.EnblCounterTariff1,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff2',
            fieldLabel: SR.EnblCounterTariff2,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff3',
            fieldLabel: SR.EnblCounterTariff3,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff4',
            fieldLabel: SR.EnblCounterTariff4,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff5',
            fieldLabel: SR.EnblCounterTariff5,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff6',
            fieldLabel: SR.EnblCounterTariff6,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff7',
            fieldLabel: SR.EnblCounterTariff7,
            value: false
        },
        {
            disabled: disabled,
            xtype: 'checkbox',
            name: 'EnblCounterTariff8',
            fieldLabel: SR.EnblCounterTariff8,
            value: false
        },

                        {
                            disabled: disabled,
                            xtype: 'checkbox',
                            name: 'EnblTimeCorr',
                            fieldLabel: SR.ENBLTIMECORR,
                            value: true
                        },                        
                        {
                            disabled: disabled,
                            //hidden: true,
                            xtype: 'checkbox',
                            name: 'EnblEvents',
                            fieldLabel: SR.ENBLEVENTS,
                            value: false
                        },
                        {
                            disabled: disabled,
                            //hidden: true,
                            xtype: 'checkbox',
                            name: 'EnblIm',
                            fieldLabel: SR.ENBLIM,
                            value: false
                        },                     
                        selectService.getScheduleDescription("Arch", disabled),
                        selectService.getSelectSchedule("Arch", disabled),
                        selectService.getScheduleDescription("Im", disabled),
                        selectService.getSelectSchedule("Im", disabled),
    ];
};

drvemera.view.prototype.getSharedSettingsForms =
function (selectService) {
    var form = selectService.getSharedForm(this.getSharedItems(selectService, false));
    return [form];
};

/** форма для автоконфигурирования*/
drvemera.view.prototype.getAutoconfigForms =
function (selectService) {
    var SR = drvemera.locale.SR;
    var con = constants.getInstance();
   
    var form = new Ext.FormPanel({
       bodyStyle: con.FormStyle,
        labelWidth: con.FieldLabelSize,
        border: false,
        //hidden: true,
        defaults: { width: con.FieldDataSize },
        defaultType: 'textfield',
        items: [
                    {
                        hidden: true,
                        xtype: 'displayfield',
                        name: 'Id',
                        fieldLabel: SR.ID//,
                    },
                    {
                        xtype: 'textfield',
                        name: 'Address',
                        //vtype: 'number',
                        fieldLabel: SR.ADDRESS,
                        value: "1-255"
            }
         ]
    });
    return [form];
}

/** форма для настроек*/
drvemera.view.prototype.getForms =
function (selectService) {
    var SR = drvemera.locale.SR;
    var con = constants.getInstance();
    var psw = new Ext.form.TextField({
        xtype: 'textfield',
        name: 'Psw',
        inputType: "password",
        fieldLabel: SR.PSW,
        value: ""
    });
    var fItems = [
      {
          hidden: true,
          xtype: 'displayfield',
          name: 'Id',
          fieldLabel: SR.ID//,
      },
                        {
                            xtype: 'checkbox',
                            value: true,
                            fieldLabel: SR.ACTIVITY,
                            name: 'Activity'
                        },
			            {
			                xtype: 'textfield',
			                name: 'Name',
			                vtype: 'displayname',
			                fieldLabel: SR.NAME,
			                value: '',
			                allowBlank: false
			            },
                        {
                            xtype: 'textfield',
                            vtype: 'number',
                            name: 'Address',
                            fieldLabel: SR.ADDRESS,
                            value: "0",
                            allowBlank: false
                        },
                        psw
    ];
    fItems.push(selectService.getSharedPanel(this.getSharedItems(selectService, true), drvemera.Plugin));
    //fItems.push(selectService.getSharedDescription());
    //fItems.push(selectService.getSharedButton());

    fItems.push(selectService.getBusDescription());
    fItems.push(selectService.getSelectBusButton());
    
    var form = new Ext.FormPanel({
        bodyStyle: con.FormStyle,
        labelWidth: con.FieldLabelSize,
        border: false,        
        defaults: { width: con.FieldDataSize },
        defaultType: 'textfield',
        items: fItems
    });
    return [form];
};