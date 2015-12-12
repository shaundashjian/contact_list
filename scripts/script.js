var friends = new Object();
friends["bill"] = {
    firstName: 'Bill',
    lastName: 'Hansen',
    number: '970-310-8780',
    address: ['8405 E Hampden Ave 7G', 'Denver', 'CO', '80231']
};
friends["steve"] = {
    firstName: 'Steve',
    lastName: 'Kay',
    number: '303-310-8780',
    address: ['8401 E Hampden Ave 7G', 'Denver', 'CO', '80231']
};
var list = function(object) {
    for( var key in object) {
        console.log(key)
    }
};
var search = function(name) {
    for(var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};
list(friends);
search("Steve");