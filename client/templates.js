

Template.addplaces.events({
  'click button'(elt,instance){
    const name = instance.$('#name').val();
    const place = instance.$('#place').val();
    const money = instance.$('#budget').val();
    const budget = parseInt(money);
    // const birthyear = parseInt(year);
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#place').val("");
    instance.$('#group').val("");
    Place.insert({name:name,place:place,budget:budget});
    //People.insert({name,birthyear})
  }
})

Template.placerow.events({
  'click span'(elt,instance){
    console.dir(this);
    console.log(this.pl._id);
    Place.remove(this.pl._id);
  }
})

Template.showplaces.helpers({
  placeData() {return Place.find()},
})
