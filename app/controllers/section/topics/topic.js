import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  authManager: Ember.inject.service('session'),
  queryParams: ["page", "perPage"],

  page: 1,
  perPage: 10,

  totalPagesBinding: "content.total_pages",
  perPageBinding: "content.perPage",
  pageBinding: "content.page",
});
