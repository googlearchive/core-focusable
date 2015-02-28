function focus (target) {
  Polymer.Base.fire.call(target, 'focus');
}

function blur (target) {
  Polymer.Base.fire.call(target, 'blur');
}

function down (target) {
  Polymer.Base.fire.call(target, 'mousedown');
}

function up (target) {
  Polymer.Base.fire.call(target, 'mouseup');
}
