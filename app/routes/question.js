import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyQuestion(question) {
      var answer_removal = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_removal).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question');
    }
  }
});
