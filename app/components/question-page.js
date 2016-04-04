import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to permanently delete this question?')) {
      this.sendAction('destroyQuestion', question);
      }
    },
    deleteAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    }
  }
});
