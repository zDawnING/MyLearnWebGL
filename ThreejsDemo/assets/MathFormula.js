
const MathFormula = {

  /**
   * 放射波浪
   * @param  {[type]} u [description]
   * @param  {[type]} v [description]
   * @return {[type]}   [description]
   */
  radialWave: function (u, v) {
    var r = 50;

    var x = Math.sin(u) * r;
    var z = Math.sin(v / 2) * 2 * r;
    var y = (Math.sin(u * 4 * Math.PI) + Math.cos(v * 2 * Math.PI)) * 2.8;

    return new THREE.Vector3(x, y, z);
  },

	/**
	 * 克莱因瓶
	 * @param  {[type]} v [description]
	 * @param  {[type]} u [description]
	 * @return {[type]}   [description]
	 */
	klein: function (v, u) {
	  u *= Math.PI;
	  v *= 2 * Math.PI;

	  u = u * 2;
	  var x, y, z;
	  if (u < Math.PI) {
	      x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
	      z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
	  } else {
	      x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
	      z = -8 * Math.sin(u);
	  }

	  y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);

	  return new THREE.Vector3(x, y, z);
	},

	/**
	 * 平面
	 * @param  {[type]} width  [description]
	 * @param  {[type]} height [description]
	 * @return {[type]}        [description]
	 */
	plane: function (width, height) {

    return function(u, v) {
        var x = u * width;
        var y = 0;
        var z = v * height;

        return new THREE.Vector3(x, y, z);
    };
  },

  /**
   * 莫比乌斯带 2D
   * @param  {[type]} u [description]
   * @param  {[type]} t [description]
   * @return {[type]}   [description]
   */
  mobius: function(u, t) {

      // flat mobius strip
      // http://www.wolframalpha.com/input/?i=M%C3%B6bius+strip+parametric+equations&lk=1&a=ClashPrefs_*Surface.MoebiusStrip.SurfaceProperty.ParametricEquations-
      u = u - 0.5;
      var v = 2 * Math.PI * t;

      var x, y, z;

      var a = 2;
      x = Math.cos(v) * (a + u * Math.cos(v/2));
      y = Math.sin(v) * (a + u * Math.cos(v/2));
      z = u * Math.sin(v/2);
      return new THREE.Vector3(x, y, z);

  },

  /**
   * 莫比乌斯带 3D
   * @param  {[type]} u [description]
   * @param  {[type]} t [description]
   * @return {[type]}   [description]
   */
  mobius3d: function(u, t) {

    // volumetric mobius strip
    u *= Math.PI;
    t *= 2 * Math.PI;

    u = u * 2;
    var phi = u / 2;
    var major = 2.25, a = 0.125, b = 0.65;
    var x, y, z;
    x = a * Math.cos(t) * Math.cos(phi) - b * Math.sin(t) * Math.sin(phi);
    z = a * Math.cos(t) * Math.sin(phi) + b * Math.sin(t) * Math.cos(phi);
    y = (major + x) * Math.sin(u);
    x = (major + x) * Math.cos(u);
    return new THREE.Vector3(x, y, z);
  }
}


