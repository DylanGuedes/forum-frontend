import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('users', function() {
    this.route('new');
    this.resource('user', { path: "/:user_id" }, function() {
      this.route('edit');
    });
  });

  this.resource('sections', function() {
    this.resource('section', { path: "/:section_id" }, function() {
      this.route('edit');

      this.resource('topics', function() {
        this.route('new'); // create topic in section section_id

        this.resource('topic', { path: "/:topic_id" }, function() { // show topic topic_id in section section_id
          this.route('new'); // new post in topic topic_id

          this.route('post', { path: "/:post_id" }, function() {
            this.route('edit'); // edit post post_id in topic topic_id
          });
        });
      });
    });
  });
});

export default Router;
