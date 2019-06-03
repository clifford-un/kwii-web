import Vue from 'vue'
export default (ctx, eventBus) => {
  const bus = new Vue()
  eventBus('bus', bus)
}
