import Ember from 'ember';

export default Ember.Service.extend({
  bookmarks: [],

  add(question) {
    this.get('bookmarks').pushObject(question);
  },
  remove(question) {
    this.get('bookmarks').removeObject(question);
    console.log(this.bookmarks);
  },
});
