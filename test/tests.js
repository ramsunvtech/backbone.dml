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

test( "get one attribute", function( assert ) {
  assert.ok( myProfile.select('firstname') == {
        firstname: "Venkatraman"
    }, "Passed!" );
});
