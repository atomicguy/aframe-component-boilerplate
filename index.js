if (typeof AFRAME === 'undefined') {
  throw 'Component attempted to register before AFRAME was available.';
}

/**
 * Fence component for A-Frame.
 */
AFRAME.registerComponent('fence', {
  schema: {
      width: {default: 10},
      depth: {default: 10}
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {},

  tick: function() {
      var data = this.data;
      var thiswidth = data.width;
      var thisdepth = data.depth;

      var position = this.el.getComputedAttribute('position');


      position.x = Math.min( thiswidth / 2, position.x);
      position.x = Math.max( -1* thiswidth / 2, position.x);

      position.z = Math.min( thisdepth / 2, position.z);
      position.z = Math.max( -1* thisdepth / 2, position.z);

      this.el.setAttribute('position', position);
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { },
});
