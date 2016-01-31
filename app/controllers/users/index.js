import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
  queryParams: ["page", "perPage"],

  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.total_pages",
  page: 1,
  perPage: 10,
  // binding the property on the paged array
  // to a property on the controller
  // totalPagesBinding: "pagedContent.totalPages"
});
