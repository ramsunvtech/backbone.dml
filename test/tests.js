var Backbone = require('backbone'),
    _ = require('underscore'),
    QUnit = require('qunit-cli');
    
require('../backbone.dml.js');
    
QUnit.module('BackBone DML');

var myProfile = new Backbone.Model({
    'firstname': 'Venkatraman',
    'lastname': 'Ramamoorthy',
    'phone': {
        'mobile': '+91-9902773692',
        'landline': '+91-3404353453',
        'office': '+91-4402773345'
    },
    'addressBook': [{
        'street': '7a, Munnusamy Nagar',
        'area': 'Kolathur',
        'city': 'Chennai',
        'state': 'Tamilnadu',
        'type': 'last'
    }, {
        'street': '36, Manika Vinayagar Koil street',
        'area': 'Permabur',
        'city': 'Chennai',
        'state': 'Tamilnadu',
        'type': 'permanent'
    }, {
        'street': '10/1, Venkatapura 11th Main road',
        'area': 'Koramangala',
        'city': 'Bangalore',
        'state': 'Karnataka',
        'type': 'last'
    }, {
        'street': '100/34, Third C Cross Road',
        'area': 'Koramangala',
        'city': 'Bangalore',
        'state': 'Karnataka',
        'type': 'current'
    }]
});

QUnit.test( "get one attribute", function( assert ) {
  assert.deepEqual( myProfile.select('firstname'), {
        firstname: "Venkatraman"
    }, "got the only one attribute" );
});
