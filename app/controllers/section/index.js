import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.ArrayController.extend({
  queryParams: ["page", "perPage", "section_id"],
  page: 1,
  perPage: 10,

  pageBinding: "content.page",
  perPageBinding: "content.perPage",
  totalPagesBinding: "content.total_pages",
});
