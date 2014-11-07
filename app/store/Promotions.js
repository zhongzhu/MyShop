/*
 * File: app/store/Promotions.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyShop.store.Promotions', {
    extend: 'Ext.data.Store',

    requires: [
        'MyShop.model.Promotion',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        model: 'MyShop.model.Promotion',
        storeId: 'Promotions',
        proxy: {
            type: 'ajax',
            url: 'data/home/promotions.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});