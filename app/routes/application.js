export default Ember.Route.extend({
  setupController: function(controller){
  	controller.set('title', "Hello World!");
  }
});