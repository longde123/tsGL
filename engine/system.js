/*
Referenced External Functions
NAME:         USAGE:                        LOCATION:
checkTypes:   verify parameter types.       imported from "core-helpers.js"
*/

function System () {
}

System.prototype.tryRegisterComponent = function ( component ) {
  return false;
}

System.prototype.registerComponentsOfEntity = function ( entity ) {
  checkTypes( [entity], ["Entity"] );
  for (var key in entity.components) {
    if ( entity.components.hasOwnProperty(key) ) {
      this.tryRegisterComponent( entity.components[key] );
    }
  }
}

System.prototype.startup = function () {
  // do whatever setup is necessary for this system.
  return this;
}

// per frame update.
System.prototype.update = function ( dt ) {
  checkTypes( [dt], ["number"] );
  // default implementation is a no-op.
  return this;
}

System.prototype.shutdown = function () {
  // do whatever is necessary to clean up after the system.
  return this;
}
