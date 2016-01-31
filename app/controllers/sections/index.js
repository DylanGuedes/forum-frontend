import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
  queryParams: ["page", "perPage"],


  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.total_pages",
  page: 1,
  perPage: 10
});
