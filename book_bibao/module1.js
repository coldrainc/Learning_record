var MyModules = (function () {
    var modules = {};

    function define (name, deps, impl) {
        for (var i=0; i<deps.length; i++){
            deps[i] = modules[deps[i]];
            console.log(deps[i]);
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get (name) {
        return modules[name];
    }

    return {
        define : define,
        get : get
    };
})();
MyModules.define();

