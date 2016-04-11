import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkQuestions: Ember.inject.service(),
  preview: Ember.computed('question.content', function() {
    return this.get('question.content').slice(0, 65) + '...';
  }),
  actions: {
    addToBookmarks(question) {
      this.get('bookmarkQuestions').add(question);
    },
  },
});
