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
    var psw = new Ext.form.TextField({
        disabled: disabled,
        hidden: true,
        xtype: 'textfield',
        name: 'Psw',
        inputType: "password",
        fieldLabel: SR.PSW,
        value: ""
    });
    var aa = function (sender, args) {
        psw.setVisible(args.value["Level"] != 2);
    }
    selectService.on({
        'loadRecord': aa
    });
    return [
                        {
                            disabled: disabled,
                            xtype: 'checkbox',
                            name: 'EnblTimeCorr',
                            fieldLabel: SR.ENBLTIMECORR,
                            value: true
                        },
                        {
                            disabled: disabled,
                            xtype: 'checkbox',
                            name: 'Enbl3min',
                            fieldLabel: SR.ENBL3MIN,
                            value: false
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
                        new Ext.form.ComboBox({
                            disabled: disabled,
                            listeners: {
                                select: function (combo, rec, index) {
                                    var psw = combo.scope.psw;
                                    psw.setVisible(index > 0);
                                }
                            },
                            scope: {
                                psw: psw
                            },
                            xtype: 'combo',
                            triggerAction: "all",
                            mode: 'local',
                            fieldLabel: SR.LEVEL,
                            name: 'Level',
                            value: drvemera.MesProtectLevel.DefaultValue,
                            store: drvemera.MesProtectLevel.ToArrayStore(),
                            displayField: base.ENUMS.DisplayField,
                            valueField: base.ENUMS.ValueField,
                            editable: false
                        }),
                        psw,
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
    var ki = new Ext.form.NumberField({        
        name: 'KI',
        fieldLabel: SR.KI,
        value: "0",
        allowBlank: false
    });
    var ku = new Ext.form.NumberField({
        name: 'KU',
        fieldLabel: SR.KU,
        value: "0",
        allowBlank: false
    });
    var con = constants.getInstance();
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
                         {
                             listeners: {
                                 check: function (checker, state) {
                                     var f = checker.scope;
                                     f[0].setVisible(!state);
                                     f[1].setVisible(!state);
                                 }
                             },
                             scope: [ki, ku],
                             xtype: 'checkbox',
                             name: 'KU_KI_Dev',
                             fieldLabel: SR.KU_KI_Dev,
                             value: "0",
                             allowBlank: false
                         },
                         ki, ku,
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