import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkQuestions: Ember.inject.service(),
  actions: {
    removeFromBookmarks(question) {
      this.get('bookmarkQuestions').remove(question);
    },
  },
});
