import Ember from 'ember';

export function answerStatus(params) {
  var question = params[0];
  if(question.get('answers').get('length') == 0) {
    return 'no-answers';
  }
}

export default Ember.Helper.helper(answerStatus);
