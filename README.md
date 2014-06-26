# Backbone DML [![Build Status](https://secure.travis-ci.org/amccloud/backbone-dotattr.png)](https://travis-ci.org/ramsunvtech/backbone.dml])#

This BackBone Plugin add the few Data Manipulation Language concept in BackBone model.

Imagine the following JSON object is Model data

    {
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
      },
      {
        'street': '36, Manika Vinayagar Koil street',
        'area': 'Permabur',
        'city': 'Chennai',
        'state': 'Tamilnadu',
        'type': 'permanent'
      },
      {
        'street': '10/1, Venkatapura 11th Main road',
        'area': 'Koramangala',
        'city': 'Bangalore',
        'state': 'Karnataka',
        'type': 'last'
      },
      {
        'street': '100/34, Third C Cross Road',
        'area': 'Koramangala',
        'city': 'Bangalore',
        'state': 'Karnataka',
        'type': 'current'
      }]
    }
    

<h3>this.model.select('firstname, lastname');</h3>

    Object {
      firstname: "Venkatraman",
      lastname: "Ramamoorthy"
    }


<h3>this.model.select('firstname as fname, lastname as lname');</h3>

    Object {
      fname: "Venkatraman",
      lname: "Ramamoorthy"
    }

<h3>this.model.select('firstname as name, addressBook[1] as permanentAddress');</h3>

    Object {
      name: "Venkatraman", 
      permanentAddress: {
        area: "Permabur",
        city: "Chennai",
        state: "Tamilnadu",
        street: "36, Manika Vinayagar Koil street",
        type: "permanent"
      }
    }

<h3>this.model.select('addressBook[type=last] as lastAddress');</h3>

    Object {
      lastAddress: [
        {
          area: "Kolathur",
          city: "Chennai",
          state: "Tamilnadu",
          street: "7a, Munnusamy Nagar",
          type: "last"
        },
        {
          area: "Koramangala",
          city: "Bangalore",
          state: "Karnataka",
          street: "10/1, Venkatapura 11th Main road",
          type: "last"
        }
      ]
    }

<h3>this.model.select('addressBook[type=last && city=Bangalore] as lastBangaloreAddress');</h3>

    Object {
      lastBangaloreAddress: {
        area: "Koramangala",
        city: "Bangalore",
        state: "Karnataka",
        street: "10/1, Venkatapura 11th Main road",
        type: "last"
      }
    }
