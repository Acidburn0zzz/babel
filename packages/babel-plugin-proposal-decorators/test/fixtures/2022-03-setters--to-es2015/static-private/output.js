var _call_a, _initStatic, _class;
const dec = () => {};
class Foo {
  static setA(v) {
    babelHelpers.classStaticPrivateFieldSpecSet(this, Foo, _a, v);
  }
}
_class = Foo;
function _set_a(v) {
  _call_a(this, v);
}
var _a = {
  get: void 0,
  set: _set_a
};
(() => {
  [_call_a, _initStatic] = babelHelpers.applyDecs2203R(_class, [[dec, 9, "a", function (v) {
    return this.value = v;
  }]], []).e;
  _initStatic(_class);
})();
babelHelpers.defineProperty(Foo, "value", 1);
