import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
      };
      debugger;
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
