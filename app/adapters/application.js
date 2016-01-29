import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, DS.EmbeddedRecordsMixin, {
  host: 'http://localhost:4000/api',
  authorizer: 'authorizer:application',

  shouldReloadAll() {
    return true;
  },
  shouldBackgroundReloadRecord() {
    return true;
  }
});
