import JSONAPIAdapter from "@ember-data/adapter/json-api";

export default class AlexandriaStoreAdapter extends JSONAPIAdapter {
  namespace = "/alexandria/api/v1";
}
