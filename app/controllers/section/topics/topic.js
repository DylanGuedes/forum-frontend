import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
  authManager: Ember.inject.service('session'),
  queryParams: ["page", "perPage"],

  page: 1,
  perPage: 10,

  pagedContent: pagedArray('model.posts', {pageBinding: "page", perPageBinding: "perPage"}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "pagedContent.totalPages"
});
