Template.orionSemanticSidebar.onRendered(function() {
  this.autorun(function() {
    var depend = orion.links._collection.find().fetch();
    $('.ui.dropdown.item').dropdown();
  });
});
