import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('username'),
        text: this.get('text'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
