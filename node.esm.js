"use strict";
var exports = void 0;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = Infinity;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.js.map
;

$node[ "../mam" ] = $node[ "../mam.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//delegate.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $.$mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static [(_a = $.$mol_ambient_ref, Symbol.toPrimitive)]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        [Symbol.toPrimitive](hint) {
            return hint === 'number' ? this.valueOf() : this.toString();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    const { per } = $.$mol_style_unit;
    class $mol_style_func extends $.$mol_decor {
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: hsl( 0 , 0% , 0% );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsl( 290 , 100% , 40% );\n\t--mol_theme_field: white;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: rgba( 255 , 255 , 255 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 30% );\n\t--mol_theme_text: hsl( 0 , 0% , 80% );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: hsl( 60 , 100% , 70% );\n\t--mol_theme_field: black;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: hsla( 210 , 60% , 20% , 1 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( 15 , 60% , 50% );\n\t--mol_theme_hover: hsl( 15 , 60% , 40% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n\t--mol_theme_focus: black;\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n\t--mol_theme_text: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        current: vary('--mol_theme_current'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 16px/24px sans-serif;\n\t/* --mol_skin_font_monospace: Monaco, monospace; */\n\t--mol_skin_font_monospace: monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//log3.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            let warned = false;
            descr.value = function $mol_deprecated_wrapper(...args) {
                if (!warned) {
                    this.$.$mol_log3_warn({
                        place: `${host.constructor.name}::${field}`,
                        message: `Deprecated`,
                        hint: message,
                    });
                    warned = true;
                }
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $.$mol_object2 {
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $.$mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_tree:hack')
    ], $mol_tree.prototype, "transform", null);
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            const tree = this.$mol_tree.fromJSON(event).clone({ type });
            let str = tree.toString();
            if (process[output].isTTY) {
                str = $node.colorette[color + 'Bright'](str);
            }
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', 'blue');
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', 'green');
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', 'red');
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', 'yellow');
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', 'magenta');
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', 'cyan');
})($ || ($ = {}));
//log3.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(({})['constructor'], (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_func',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.func instead',
        });
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            fiber[Symbol.toStringTag] = wrapper[Symbol.toStringTag];
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_method',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.method instead',
        });
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then((next) => master.push(next), (error) => master.fail(error));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.cursor = 0;
            this.masters = [];
            this._value = undefined;
            this._error = null;
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(null), promise)));
            return promise;
        }
        get value() { return this._value; }
        set value(next) {
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            this._error = next;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            const unscoupe = this.$.$mol_log3_area_lazy({
                place: this,
                message: 'Wake'
            });
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
            finally {
                unscoupe();
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error !== null || !Object.is(this.value, value)) {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Changed',
                        next: value,
                        value: this.value,
                        error: this.error,
                    });
                this.obsolete_slaves();
                this.forget();
            }
            else {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Same value',
                        value,
                    });
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            if ($mol_fiber.logs)
                this.$.$mol_log3_fail({
                    place: this,
                    message: error.message,
                });
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            if ($mol_fiber.logs)
                this.$.$mol_log3_warn({
                    place: this,
                    message: `Wait`,
                    hint: `Don't panic, it's normal`,
                    promise,
                });
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            if ($mol_fiber.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Pull',
                });
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.pull();
            }
            catch (error) {
                if (Object(error) !== error)
                    error = new Error(error);
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error !== null)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return (this.cursor < this.masters.length ? this.masters[this.cursor] : undefined);
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.master;
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_fiber.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Destructed',
                });
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.logs = false;
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task, next) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            $mol_atom2.cached_next = next;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        subscribe(promise) {
            const obsolete = () => this.obsolete();
            return promise.then(obsolete, obsolete);
        }
        get() {
            if ($mol_atom2.cached) {
                if ($mol_atom2.cached_next !== undefined) {
                    this.push($mol_atom2.cached_next);
                    $mol_atom2.cached_next = undefined;
                }
                return this.value;
            }
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            if ($mol_atom2.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Check doubt masters',
                });
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                if ($mol_atom2.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Obsoleted while checking',
                    });
                return super.pull();
            }
            if ($mol_atom2.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Masters not changed',
                });
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                try {
                    next[Symbol.toStringTag] = this[Symbol.toStringTag];
                }
                catch { }
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Leads',
                    slave,
                });
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Disleads',
                    slave: this.slaves[slave_index],
                });
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Obsoleted',
                });
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Doubted',
                });
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Destructed'
                });
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.logs = false;
    $mol_atom2.cached = false;
    $mol_atom2.cached_next = undefined;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
//param.js.map
;
"use strict";
//result.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const orig = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = orig.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        function value(next, force) {
            if (next === undefined) {
                const cache = get_cache(this);
                if (force === $.$mol_mem_force_cache)
                    return cache.obsolete(Number.NaN);
                if ($.$mol_atom2.current)
                    return cache.get();
                else
                    return $.$mol_fiber.run(() => cache.get());
            }
            return $.$mol_fiber.run(() => {
                if (force === $.$mol_mem_force_fail)
                    return get_cache(this).fail(next);
                if (force !== $.$mol_mem_force_cache)
                    next = orig.call(this, next);
                return get_cache(this).put(next);
            });
        }
        return {
            ...descr || {},
            value: Object.assign(value, { orig })
        };
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        if (Array.isArray(value))
            return JSON.stringify(value);
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            const key_str = $.$mol_dict_key(key);
            let cache = dict.get(key_str);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${key_str})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key_str);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key_str, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            if (Symbol.toStringTag in calculate) {
                atom[Symbol.toStringTag] = calculate[Symbol.toStringTag];
            }
            else {
                atom[Symbol.toStringTag] = calculate.name || '$mol_atom2_autorun';
            }
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_current);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgb(162, 90, 90),\n\t\trgb(162, 90, 90) 11px,\n\t\trgb(255,255,220) 10px,\n\t\trgb(255,255,220) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $.$mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                    return node;
                }
                if ($.$mol_fail_catch(error)) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            this.auto();
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $.$mol_dom_render_styles(node, { minHeight: this.minimal_height() });
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        auto() { }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            for (const item of this.sub()) {
                if (item instanceof $mol_view) {
                    yield* item.view_find(check, [...path, this]);
                }
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            await $.$mol_fiber_warp();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_colors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
    };
})($ || ($ = {}));
//colors.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $.$mol_dom_qname($.$mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                return `${prefix ? prefix + ' ' : ''}[${block}_${path.join('_')}]`;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' [' + $.$mol_dom_qname(key) + ']', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > [' + $.$mol_dom_qname(type) + ']', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + '[' + name + '=' + JSON.stringify(val) + ']', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//gap.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
    };
})($ || ($ = {}));
//gap.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        field() {
            return {
                ...super.field(),
                scrollTop: this.scroll_top(),
                scrollLeft: this.scroll_left(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $.$mol_object {
        static before() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//print.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$.$mol_theme.line, 'transparent'],
            },
            '::-webkit-scrollbar': {
                width: rem(.5),
                height: rem(.5),
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                this._event_scroll_timer()?.destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_timeout(200, $.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.sub = () => this.head();
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        body() {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.scroll_top = (val) => this.body_scroll_top(val);
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: {
                color: $.$mol_theme.back,
            },
            color: $.$mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $.$mol_gap.block,
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $.$mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(50),
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                margin: 0,
                padding: $.$mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.message), this.stack];
                const diff = $.$mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mix.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $.$mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//error.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//string.js.map
;
"use strict";
//value.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//setup.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $.$mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $.$mol_fail(new $.$mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $.$mol_object2 {
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $.$mol_object2 {
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    $mol_fetch.request = $.$mol_fiber_sync((input, init = {}) => {
        if (typeof AbortController === 'function') {
            var controller = new AbortController();
            init.signal = controller.signal;
            const fiber = $.$mol_fiber.current;
            fiber.abort = () => {
                if (fiber.cursor === -2)
                    return true;
                controller.abort();
                return true;
            };
        }
        let native = $.$mol_dom_context.fetch;
        if (!native)
            native = $node['node-fetch'];
        return native(input, init);
    });
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_model extends $.$mol_object2 {
        static uri() { return ''; }
        id() { return ''; }
        static item(id) {
            const model = new this;
            model.id = $.$mol_const($.$mol_data_string(id));
            return model;
        }
        static list() {
            return $.$mol_data_array(id => this.item(id));
        }
        static all() {
            return this.list()(Object.keys(this.data()));
        }
        static data() {
            const tree = $.$mol_tree.fromString(this.$.$mol_fetch.text(this.uri()));
            const json = new $.$mol_tree({ type: '*', sub: tree.sub }).toJSON();
            return json;
        }
        data(next) {
            const Model = this.constructor;
            return Model.data()[this.id()];
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_model.prototype, "data", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_model, "item", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_model, "list", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_model, "all", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_model, "data", null);
    $.$piterjs_model = $piterjs_model;
})($ || ($ = {}));
//model.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $mol_time_base.patterns = {};
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            this.year = 0;
            this.month = 0;
            this.day = 0;
            this.hour = 0;
            this.minute = 0;
            this.second = 0;
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
    }
    $mol_time_duration.patterns = {
        '#Y': (duration) => {
            if (!duration.year)
                return '';
            return duration.year + 'Y';
        },
        '#M': (duration) => {
            if (!duration.month)
                return '';
            return duration.month + 'M';
        },
        '#D': (duration) => {
            if (!duration.day)
                return '';
            return duration.day + 'D';
        },
        '#h': (duration) => {
            if (!duration.hour)
                return '';
            return duration.hour + 'H';
        },
        '#m': (duration) => {
            if (!duration.minute)
                return '';
            return duration.minute + 'M';
        },
        '#s': (duration) => {
            if (!duration.second)
                return '';
            return duration.second + 'S';
        },
    };
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $.$mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $.$mol_time_duration(config.offset);
        }
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $.$mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
    }
    $mol_time_moment.patterns = {
        'YYYY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year);
        },
        'AD': (moment) => {
            if (moment.year == null)
                return '';
            return String(Math.floor(moment.year / 100) + 1);
        },
        'YY': (moment) => {
            if (moment.year == null)
                return '';
            return String(moment.year % 100);
        },
        'Month': (pattern => (moment) => {
            if (moment.month == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
        'DD Month': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['DD'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Month'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
        'D Month': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['D'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Month'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
        'Mon': (pattern => (moment) => {
            if (moment.month == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
        'DD Mon': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['DD'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Mon'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
        'D Mon': (pattern => (moment) => {
            if (moment.month == null) {
                if (moment.day == null) {
                    return '';
                }
                else {
                    return $mol_time_moment.patterns['D'](moment);
                }
            }
            else {
                if (moment.day == null) {
                    return $mol_time_moment.patterns['Mon'](moment);
                }
                else {
                    return pattern.format(moment.native);
                }
            }
        })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
        '-MM': (moment) => {
            if (moment.month == null)
                return '';
            return '-' + $mol_time_moment.patterns['MM'](moment);
        },
        'MM': (moment) => {
            if (moment.month == null)
                return '';
            return String(100 + moment.month + 1).slice(1);
        },
        'M': (moment) => {
            if (moment.month == null)
                return '';
            return String(moment.month + 1);
        },
        'WeekDay': (pattern => (moment) => {
            if (moment.day == null)
                return '';
            if (moment.month == null)
                return '';
            if (moment.year == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
        'WD': (pattern => (moment) => {
            if (moment.day == null)
                return '';
            if (moment.month == null)
                return '';
            if (moment.year == null)
                return '';
            return pattern.format(moment.native);
        })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
        '-DD': (moment) => {
            if (moment.day == null)
                return '';
            return '-' + $mol_time_moment.patterns['DD'](moment);
        },
        'DD': (moment) => {
            if (moment.day == null)
                return '';
            return String(100 + moment.day + 1).slice(1);
        },
        'D': (moment) => {
            if (moment.day == null)
                return '';
            return String(moment.day + 1);
        },
        'Thh': (moment) => {
            if (moment.hour == null)
                return '';
            return 'T' + $mol_time_moment.patterns['hh'](moment);
        },
        'hh': (moment) => {
            if (moment.hour == null)
                return '';
            return String(100 + moment.hour).slice(1);
        },
        'h': (moment) => {
            if (moment.hour == null)
                return '';
            return String(moment.hour);
        },
        ':mm': (moment) => {
            if (moment.minute == null)
                return '';
            return ':' + $mol_time_moment.patterns['mm'](moment);
        },
        'mm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(100 + moment.minute).slice(1);
        },
        'm': (moment) => {
            if (moment.minute == null)
                return '';
            return String(moment.minute);
        },
        ':ss': (moment) => {
            if (moment.second == null)
                return '';
            return ':' + $mol_time_moment.patterns['ss'](moment);
        },
        'ss': (moment) => {
            if (moment.second == null)
                return '';
            return String(100 + moment.second | 0).slice(1);
        },
        's': (moment) => {
            if (moment.second == null)
                return '';
            return String(moment.second | 0);
        },
        '.sss': (moment) => {
            if (moment.second == null)
                return '';
            if (moment.second === (moment.second | 0))
                return '';
            return '.' + $mol_time_moment.patterns['sss'](moment);
        },
        'sss': (moment) => {
            if (moment.second == null)
                return '';
            const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
            return String(1000 + millisecond).slice(1);
        },
        'Z': (moment) => {
            const offset = moment.offset;
            if (!offset)
                return '';
            let hour = offset.hour;
            let sign = '+';
            if (hour < 0) {
                sign = '-';
                hour = -hour;
            }
            return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
        }
    };
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_optional(sub) {
        return $.$mol_data_setup((val) => {
            if (val === undefined)
                return undefined;
            return sub(val);
        }, sub);
    }
    $.$mol_data_optional = $mol_data_optional;
})($ || ($ = {}));
//optional.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $.$mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $.$mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $.$mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $.$mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $.$mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $.$mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $.$mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $.$mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $.$mol_time_duration(config.duration);
        }
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $.$mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));
//interval.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speaker extends $.$piterjs_model {
        static uri() {
            return 'piterjs/speaker/speaker.data.tree';
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        photo() {
            return $.$mol_data_string(this.data().photo);
        }
        speeches() {
            return this.$.$piterjs_speech.all().filter(speech => speech.speaker() === this);
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "photo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker.prototype, "speeches", null);
    $.$piterjs_speaker = $piterjs_speaker;
})($ || ($ = {}));
//speaker.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speech extends $.$piterjs_model {
        static uri() {
            return 'piterjs/speech/speech.data.tree';
        }
        meetup() {
            return this.$.$piterjs_meetup.all().find(meetup => meetup.speeches().indexOf(this) !== -1);
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        slides() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().slides) || null;
        }
        video() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().video) || null;
        }
        previous() {
            const speeches = this.meetup().speeches();
            const index = speeches.indexOf(this);
            if (index <= 0)
                return null;
            return speeches[index - 1];
        }
        interval() {
            return new $.$mol_time_interval({
                start: this.previous()?.interval().end ?? this.meetup().start(),
                duration: this.duration(),
            });
        }
        duration() {
            return new $.$mol_time_duration($.$mol_data_string(this.data().duration));
        }
        speaker() {
            return this.$.$piterjs_speaker.item(this.data().speaker);
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "slides", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "previous", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "interval", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "duration", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech.prototype, "speaker", null);
    $.$piterjs_speech = $piterjs_speech;
})($ || ($ = {}));
//speech.js.map
;
"use strict";
//unary.js.map
;
"use strict";
//tail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_is_class(func) {
        return Object.getOwnPropertyDescriptor(func, 'prototype')?.writable === false;
    }
    $.$mol_func_is_class = $mol_func_is_class;
})($ || ($ = {}));
//class.js.map
;
"use strict";
//foot.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_pipe(...funcs) {
        return $.$mol_data_setup(function (input) {
            let value = input;
            for (const func of funcs)
                value = $.$mol_func_is_class(func) ? new func(value) : func.call(this, value);
            return value;
        }, { funcs });
    }
    $.$mol_data_pipe = $mol_data_pipe;
})($ || ($ = {}));
//pipe.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_wrapper(pre, Obj) {
        console.warn('$mol_data_wrapper is deparecated. Use $mol_data_pipe instead.');
        return $.$mol_data_setup((val) => new Obj(pre(val)), { pre, Obj });
    }
    $.$mol_data_wrapper = $mol_data_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//number.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_vector extends Array {
        constructor(...values) { super(...values); }
        map(convert, self) {
            return super.map(convert, self);
        }
        merged(patches, combine) {
            return this.map((value, index) => combine(value, patches[index]));
        }
        limited(limits) {
            return this.merged(limits, (value, [min, max]) => (value < min) ? min : (value > max) ? max : value);
        }
        added0(diff) {
            return this.map(value => value + diff);
        }
        added1(diff) {
            return this.merged(diff, (a, b) => a + b);
        }
        multed0(mult) {
            return this.map(value => value * mult);
        }
        multed1(mults) {
            return this.merged(mults, (a, b) => a * b);
        }
        expanded1(point) {
            return this.merged(point, (range, value) => range.expanded0(value));
        }
        expanded2(point) {
            return this.merged(point, (range1, range2) => {
                let next = range1;
                const Range = range1.constructor;
                if (range1[0] > range2[0])
                    next = new Range(range2[0], next.max);
                if (range1[1] < range2[1])
                    next = new Range(next.min, range2[1]);
                return next;
            });
        }
    }
    $.$mol_vector = $mol_vector;
    class $mol_vector_1d extends $mol_vector {
        get x() { return this[0]; }
    }
    $.$mol_vector_1d = $mol_vector_1d;
    class $mol_vector_2d extends $mol_vector {
        get x() { return this[0]; }
        get y() { return this[1]; }
    }
    $.$mol_vector_2d = $mol_vector_2d;
    class $mol_vector_3d extends $mol_vector {
        get x() { return this[0]; }
        get y() { return this[1]; }
        get z() { return this[2]; }
    }
    $.$mol_vector_3d = $mol_vector_3d;
    class $mol_vector_range extends $mol_vector {
        get min() { return this[0]; }
        get max() { return this[1]; }
        get inversed() {
            return new this.constructor(this.max, this.min);
        }
        expanded0(value) {
            const Range = this.constructor;
            let range = this;
            if (value > range.max)
                range = new Range(range.min, value);
            if (value < range.min)
                range = new Range(value, range.max);
            return range;
        }
    }
    $.$mol_vector_range = $mol_vector_range;
    $.$mol_vector_range_full = new $mol_vector_range(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    class $mol_vector_matrix extends $mol_vector {
        added2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 + b[index]));
        }
        multed2(diff) {
            return this.merged(diff, (a, b) => a.map((a2, index) => a2 * b[index]));
        }
    }
    $.$mol_vector_matrix = $mol_vector_matrix;
})($ || ($ = {}));
//vector.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_place extends $.$piterjs_model {
        static uri() {
            return 'piterjs/place/place.data.tree';
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        notes() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().notes) || '';
        }
        site() {
            return $.$mol_data_wrapper($.$mol_data_string, URL)(this.data().site);
        }
        address() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().address) ?? '';
        }
        coords() {
            const coords = $.$mol_data_optional($.$mol_data_array($.$mol_data_number))(this.data().coords);
            if (!coords)
                return null;
            return new $.$mol_vector_2d(coords[0], coords[1]);
        }
        route() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().route) ?? '';
        }
        colors() {
            return $.$mol_data_array($.$mol_data_string)(this.data().colors);
        }
        meetups() {
            return this.$.$piterjs_meetup.all().filter(speech => speech.place() === this);
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "notes", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "site", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "address", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "coords", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "route", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "colors", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place.prototype, "meetups", null);
    $.$piterjs_place = $piterjs_place;
})($ || ($ = {}));
//place.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_meetup extends $.$piterjs_model {
        static uri() {
            return 'piterjs/meetup/meetup.data.tree';
        }
        start() {
            return new $.$mol_time_moment($.$mol_data_string(this.data().start));
        }
        title() {
            return $.$mol_data_string(this.data().title);
        }
        description() {
            return $.$mol_data_string(this.data().description);
        }
        video() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().video) || null;
        }
        speeches() {
            return this.$.$piterjs_speech.list()(this.data().speeches);
        }
        place() {
            return this.$.$piterjs_place.item(this.data().place);
        }
        afterparty() {
            return $.$mol_data_optional($.$mol_data_string)(this.data().afterparty) || '';
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "start", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "speeches", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup.prototype, "afterparty", null);
    $.$piterjs_meetup = $piterjs_meetup;
})($ || ($ = {}));
//meetup.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                title: this.hint(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] || null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: $.$mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $.$mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        ':hover': {
            background: {
                color: $.$mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    background: {
                        color: $.$mol_theme.back,
                    },
                    color: $.$mol_theme.text,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                const arg = this.arg();
                const uri = new this.$.$mol_state_arg(this.state_key()).link(arg);
                if (uri !== this.$.$mol_state_arg.href())
                    return uri;
                const arg2 = {};
                for (let i in arg)
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 40);
            }
            target() {
                return (this.uri_native().origin === $.$mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image2 extends $.$mol_view {
        links() {
            return [];
        }
        aspect() {
            return 1;
        }
        sub() {
            return [
                this.Content()
            ];
        }
        height() {
            return "100%";
        }
        background() {
            return "";
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.height(),
                backgroundImage: this.background()
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_image2.prototype, "Content", null);
    $.$mol_image2 = $mol_image2;
})($ || ($ = {}));
//image2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image2/image2.view.css", "[mol_image2] {\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n}\n\n[mol_image2_content] {\n\tdisplay: block;\n\tbackground-size: cover;\n\tbackground-position: top center;\n\tflex: auto;\n}\n");
})($ || ($ = {}));
//image2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image2 extends $.$mol_image2 {
            background() {
                return this.links().map(link => `url("${link}")`).join(' , ');
            }
            height() {
                return `${100 / this.aspect()}%`;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_image2.prototype, "background", null);
        __decorate([
            $.$mol_mem
        ], $mol_image2.prototype, "height", null);
        $$.$mol_image2 = $mol_image2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//image2.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_image extends $.$mol_image2 {
        links() {
            return [
                this.link(),
                "piterjs/logo/logo.svg"
            ];
        }
        link() {
            return "";
        }
    }
    $.$piterjs_image = $piterjs_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_support_css_overflow_anchor() {
        return this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false;
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: block;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n \n[mol_list] > * {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window() {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                let [min, max] = $.$mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = $.$mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $.$mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        if (error instanceof Promise) {
                            $.$mol_atom2.current.subscribe(error);
                        }
                        else if ($.$mol_fail_catch(error)) {
                            console.error(error);
                        }
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        $.$mol_mem_cached(() => this.view_window(), [index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speech_snippet extends $.$mol_link {
        arg() {
            return {
                speech: this.id(),
                place: null,
                video: null
            };
        }
        speech() {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
        sub() {
            return [
                this.Photo(),
                this.Info()
            ];
        }
        id() {
            return "";
        }
        photo() {
            return "";
        }
        Photo() {
            const obj = new this.$.$piterjs_image();
            obj.link = () => this.photo();
            return obj;
        }
        speaker_title() {
            return "";
        }
        Speaker_title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.speaker_title()
            ];
            return obj;
        }
        time() {
            return "";
        }
        Time() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.time()
            ];
            return obj;
        }
        Addon() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Speaker_title(),
                this.Time()
            ];
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        Info() {
            const obj = new this.$.$mol_list();
            obj.sub = () => [
                this.Addon(),
                this.Title()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "speech", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Photo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Speaker_title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Time", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Addon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_snippet.prototype, "Info", null);
    $.$piterjs_speech_snippet = $piterjs_speech_snippet;
})($ || ($ = {}));
//snippet.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$piterjs_speech_snippet, {
            display: 'flex',
            padding: rem(.25),
            alignItems: 'flex-start',
            Photo: {
                width: rem(6),
                margin: rem(.5),
            },
            Info: {
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: rem(16),
                },
                padding: rem(.75),
            },
            Title: {
                display: 'block',
                padding: [rem(.25), rem(.5)],
                fontWeight: '600',
            },
            Addon: {
                display: 'flex',
            },
            Speaker_title: {
                padding: [rem(.25), rem(.5)],
                color: $.$mol_theme.text,
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Time: {
                padding: [rem(.25), rem(.5)],
                color: $.$mol_theme.text,
                whiteSpace: 'nowrap',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_speech_snippet extends $.$piterjs_speech_snippet {
            id() {
                return this.speech().id();
            }
            photo() {
                return this.speech().speaker().photo();
            }
            speaker_title() {
                return this.speech().speaker().title();
            }
            title() {
                return this.speech().title();
            }
            time() {
                return this.speech().interval().start.toString('hh:mm');
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_speech_snippet.prototype, "time", null);
        $$.$piterjs_speech_snippet = $piterjs_speech_snippet;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $.$mol_after_timeout {
    }
    $.$mol_after_work = $mol_after_work;
})($ || ($ = {}));
//work.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_work(16, $.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25em 0;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -.75em;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n    text-align: center;\n    line-height: 1;\n    display: inline-block;\n\ttext-shadow: 1px 1px 0 black;\n}\n");
})($ || ($ = {}));
//speck.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_or_error()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_or_error() {
            return this.hint();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tmin-width: 2.5rem;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            fiber(next = null) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.fiber($.$mol_fiber.current);
                this.event_click(next);
                this.click(next);
                if (this.fiber() === $.$mol_fiber.current) {
                    this.fiber(null);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                try {
                    this.fiber()?.get();
                    return '';
                }
                catch (error) {
                    if (error instanceof Promise) {
                        return $.$mol_fail_hidden(error);
                    }
                    return String(error.message ?? error);
                }
            }
            hint_or_error() {
                return this.error() || super.hint_or_error();
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_button.prototype, "fiber", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//typed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\tdisplay: inline-block;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//typed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//minor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));
//minor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $.$mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 8;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//paragraph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $.$mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.minimal_width())) * this.line_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paragraph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
//equals.js.map
;
"use strict";
//merge.js.map
;
"use strict";
//intersect.js.map
;
"use strict";
//unicode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            while (this.lastIndex < str.length) {
                const found = this.exec(str);
                if (!found)
                    break;
                yield found;
            }
            this.lastIndex = index;
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        exec(str) {
            const from = this.lastIndex;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $.$mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof RegExp) {
                if (source instanceof $mol_regexp)
                    return source;
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (params[option]) {
                            if (typeof params[option] !== 'boolean') {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $.$mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
    }
    $mol_regexp.decimal_only = $mol_regexp.from(/\d/gsu);
    $mol_regexp.decimal_except = $mol_regexp.from(/\D/gsu);
    $mol_regexp.latin_only = $mol_regexp.from(/\w/gsu);
    $mol_regexp.latin_except = $mol_regexp.from(/\W/gsu);
    $mol_regexp.space_only = $mol_regexp.from(/\s/gsu);
    $mol_regexp.space_except = $mol_regexp.from(/\S/gsu);
    $mol_regexp.word_break_only = $mol_regexp.from(/\b/gsu);
    $mol_regexp.word_break_except = $mol_regexp.from(/\B/gsu);
    $mol_regexp.tab = $mol_regexp.from(/\t/gsu);
    $mol_regexp.slash_back = $mol_regexp.from(/\\/gsu);
    $mol_regexp.nul = $mol_regexp.from(/\0/gsu);
    $mol_regexp.char_any = $mol_regexp.from(/./gsu);
    $mol_regexp.begin = $mol_regexp.from(/^/gsu);
    $mol_regexp.end = $mol_regexp.from(/$/gsu);
    $mol_regexp.or = $mol_regexp.from(/|/gsu);
    $mol_regexp.line_end = $mol_regexp.from({
        win_end: [['\r'], '\n'],
        mac_end: '\r',
    });
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//regexp.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.66;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const regexp = $.$mol_regexp.from({ needle: this.needle() }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title()
            };
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: center;\n\tcolor: var(--mol_theme_control);\n\tdisplay: inline;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1em;\n\twidth: 1em;\n\tdisplay: inline-block;\n\tmargin: -.25rem .25rem 0 0;\n\tvertical-align: middle;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: invert(1) hue-rotate(180deg);\n}\n");
})($ || ($ = {}));
//iconed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]);
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.text = () => this.quote_text(id);
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_text_row();
            obj.sub = () => this.block_content(id);
            obj.type = () => this.block_type(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_text_link();
            obj.target = () => this.link_target(id);
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_text_image();
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.level = () => this.header_level(id);
            obj.content = () => this.header_content(id);
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        Table_cell_head(id) {
            const obj = new this.$.$mol_float();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        quote_text(id) {
            return "";
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        link_target(id) {
            return "_blank";
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_content(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
    class $mol_text_row extends $.$mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
    class $mol_text_header extends $.$mol_paragraph {
        dom_name() {
            return "h";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_header_level: this.level()
            };
        }
        sub() {
            return this.content();
        }
        level(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $.$mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        sub() {
            return this.content();
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
    class $mol_text_link extends $.$mol_link_iconed {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        uri() {
            return this.link();
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    $.$mol_text_link = $mol_text_link;
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return {
                ...super.attr(),
                allowfullscreen: true,
                mol_text_type: this.type(),
                data: this.link()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        constructor(lexems) {
            this.lexems = lexems;
            this.rules = [];
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gm');
        }
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $.$mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//syntax2.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $.$mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $.$mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax2_md_code = new $.$mol_syntax2({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:|#|\?|\/)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*\b|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#%&\*_\+\\\/\|'";:\.,\^]+/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tpadding: var(--mol_gap_block);\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_type=\"block\"] {\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: var(--mol_gap_block);\n\tfont-weight: 500;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0 .25rem 0 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 60%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\tcolor: hsl( 0, 0%, 50% );\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 50%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_line.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    switch (name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                            else {
                                const span = this.Link(id);
                                span.type(name);
                                span.link(this.uri_resolve(chunks[1]));
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(chunks[1]);
                            span.type(name);
                            span.link(this.uri_resolve(chunks[1]));
                            span.title(chunks[0]);
                            return spans.push(span);
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, chunks[0]));
                            return spans.push(span);
                        }
                    }
                    const span = this.Span(id);
                    span.type(name);
                    span.content(name
                        ? [].concat.apply([], chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [found]);
                    spans.push(span);
                });
                return spans;
            }
            code2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    const span = this.Span(id);
                    span.type(name);
                    spans.push(span);
                    switch (name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([found[0], ...this.code2spans(`${id}/${index}`, found.slice(1, found.length - 1)), found[found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([found]);
                            return span;
                        }
                    }
                });
                return spans;
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_meetup_page extends $.$mol_page {
        meetup() {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        tools() {
            return [
                this.Date(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Description(),
                this.Links(),
                this.Speeches()
            ];
        }
        Speech(index) {
            const obj = new this.$.$piterjs_speech_snippet();
            obj.speech = () => this.speech(index);
            return obj;
        }
        date() {
            return "";
        }
        Date() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.date()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                meetup: null,
                speech: null,
                place: null,
                video: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            return obj;
        }
        Video() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                video: "",
                place: null,
                speech: null
            });
            obj.title = () => "Трансляция";
            return obj;
        }
        Place() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                video: null,
                place: "",
                speech: null
            });
            obj.title = () => "Площадка";
            return obj;
        }
        links() {
            return [
                this.Video(),
                this.Place()
            ];
        }
        Links() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.links();
            return obj;
        }
        speeches() {
            return [];
        }
        Speeches() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.speeches();
            return obj;
        }
        speech(index) {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "meetup", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_meetup_page.prototype, "Speech", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Date", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_page.prototype, "Speeches", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_meetup_page.prototype, "speech", null);
    $.$piterjs_meetup_page = $piterjs_meetup_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/meetup/page/page.view.css", "[mol_page][piterjs_meetup_page] {\n\tflex: 0 0 28rem;\n}\n\n[piterjs_meetup_page_body] {\n\tpadding: .75rem;\n}\n\n[piterjs_meetup_page_links] {\n\tflex-wrap: wrap;\n}\n\n[piterjs_meetup_page_video] {\n\tfont-weight: bolder;\n\tdisplay: inline;\n}\n\n[piterjs_meetup_page_place] {\n\tfont-weight: bolder;\n\tdisplay: inline;\n}\n\n[piterjs_meetup_page_description] {\n\tbox-shadow: none;\n\tpadding: 0;\n}\n\n[piterjs_meetup_page_title] {\n\tflex: 1000 1 auto;\n}\n\n[piterjs_meetup_page_date] {\n\tpadding: .5rem .75rem;\n\tfont-weight: normal;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_meetup_page extends $.$piterjs_meetup_page {
            title() {
                return this.meetup().title();
            }
            description() {
                return this.meetup().description();
            }
            date() {
                return this.meetup().start().toString('DD Month YYYY');
            }
            video() {
                return this.meetup().video() ?? '';
            }
            coords() {
                return this.meetup().place().coords();
            }
            bosy() {
                return [
                    ...this.description() ? [this.Description()] : [],
                    this.Links(),
                    this.Speeches(),
                ];
            }
            links() {
                return [
                    ...this.coords() ? [this.Place()] : [],
                    ...this.video() ? [this.Video()] : [],
                ];
            }
            speeches() {
                return this.meetup().speeches().map((speech, index) => this.Speech(index));
            }
            speech(index) {
                return this.meetup().speeches()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "date", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "bosy", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "links", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_page.prototype, "speeches", null);
        $$.$piterjs_meetup_page = $piterjs_meetup_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .5rem;\n\tflex: 1 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .5rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speaker_snippet extends $.$mol_view {
        speaker() {
            const obj = new this.$.$piterjs_speaker();
            return obj;
        }
        sub() {
            return [
                this.Photo(),
                this.Info()
            ];
        }
        photo() {
            return "";
        }
        Photo() {
            const obj = new this.$.$piterjs_image();
            obj.link = () => this.photo();
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            return obj;
        }
        Info() {
            const obj = new this.$.$mol_list();
            obj.sub = () => [
                this.Title(),
                this.Description()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "speaker", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Photo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speaker_snippet.prototype, "Info", null);
    $.$piterjs_speaker_snippet = $piterjs_speaker_snippet;
})($ || ($ = {}));
//snippet.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$piterjs_speaker_snippet, {
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            padding: rem(.75),
            Photo: {
                width: rem(20),
                flex: {
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                },
                padding: 0,
                margin: rem(.5),
                position: 'relative',
                overflow: 'visible',
                zIndex: 0,
                boxShadow: 'none',
                borderRadius: '0',
                '::after': {
                    content: '',
                    position: 'absolute',
                    zIndex: -1,
                    right: rem(-.25),
                    top: rem(-.25),
                    width: rem(1),
                    height: rem(1),
                    background: {
                        color: $.$mol_theme.current,
                    },
                },
                '::before': {
                    content: '',
                    position: 'absolute',
                    zIndex: -1,
                    left: rem(-.25),
                    bottom: rem(-.25),
                    width: rem(1),
                    height: rem(1),
                    background: {
                        color: $.$mol_theme.current,
                    },
                },
                Content: {},
            },
            Info: {
                display: 'flex',
                flexDirection: 'column',
                flex: {
                    grow: 2,
                    shrink: 1,
                    basis: rem(20),
                },
                padding: rem(.5),
            },
            Title: {
                padding: rem(.25),
                fontSize: '1.25em',
            },
            Description: {
                margin: 0,
                padding: 0,
                boxShadow: 'none',
                Row: {
                    margin: rem(.25),
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_speaker_snippet extends $.$piterjs_speaker_snippet {
            title() {
                return this.speaker().title();
            }
            description() {
                return this.speaker().description();
            }
            photo() {
                return this.speaker().photo();
            }
        }
        $$.$piterjs_speaker_snippet = $piterjs_speaker_snippet;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_speech_page extends $.$mol_page {
        speech() {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
        minimal_width() {
            return 600;
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Description(),
                this.Links(),
                this.Speaker()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                speech: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        description() {
            return "";
        }
        Description() {
            const obj = new this.$.$mol_text();
            obj.text = () => this.description();
            return obj;
        }
        slides() {
            return "";
        }
        Slides() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.slides();
            obj.title = () => "Слайды";
            obj.target = () => "_blank";
            return obj;
        }
        video() {
            return "";
        }
        Video() {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.video();
            obj.title = () => "Видео";
            obj.target = () => "_blank";
            return obj;
        }
        links() {
            return [
                this.Slides(),
                this.Video()
            ];
        }
        Links() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.links();
            return obj;
        }
        speaker() {
            const obj = new this.$.$piterjs_speaker();
            return obj;
        }
        Speaker() {
            const obj = new this.$.$piterjs_speaker_snippet();
            obj.speaker = () => this.speaker();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "speech", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Slides", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "speaker", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_speech_page.prototype, "Speaker", null);
    $.$piterjs_speech_page = $piterjs_speech_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$piterjs_speech_page, {
            flex: {
                grow: 1000,
                shrink: 0,
                basis: rem(36),
            },
            Description: {
                boxShadow: 'none',
            },
            Links: {
                margin: {
                    top: rem(-1),
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
                padding: rem(.75),
                fontWeight: '600',
                flex: 'none',
                '>': {
                    $mol_view: {
                        margin: 0,
                    }
                }
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_speech_page extends $.$piterjs_speech_page {
            title() {
                return this.speech().title();
            }
            description() {
                return this.speech().description();
            }
            speaker() {
                return this.speech().speaker();
            }
            slides() {
                return this.speech().slides();
            }
            video() {
                return this.speech().video();
            }
            links() {
                return [
                    ...this.slides() ? [this.Slides()] : [],
                    ...this.video() ? [this.Video()] : [],
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_speech_page.prototype, "links", null);
        $$.$piterjs_speech_page = $piterjs_speech_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_meetup_snippet extends $.$mol_link {
        arg() {
            return {
                meetup: this.id(),
                speech: null,
                now: null,
                video: null,
                place: null,
                others: null
            };
        }
        meetup() {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        sub() {
            return [
                this.Title(),
                this.Date()
            ];
        }
        id() {
            return "";
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        date() {
            return "";
        }
        Date() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.date()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_snippet.prototype, "meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_snippet.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_meetup_snippet.prototype, "Date", null);
    $.$piterjs_meetup_snippet = $piterjs_meetup_snippet;
})($ || ($ = {}));
//snippet.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/meetup/snippet/snippet.view.css", "[piterjs_meetup_snippet] {\n\tdisplay: flex;\n\twhite-space: nowrap;\n\tpadding: 0;\n}\n\n[piterjs_meetup_snippet_title] {\n\tpadding: .5rem .75rem;\n\tflex: 1 1 auto;\n\tfont-weight: 600;\n}\n\n[piterjs_meetup_snippet_date] {\n\tcolor: var(--mol_theme_text);\n\tpadding: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//snippet.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_meetup_snippet extends $.$piterjs_meetup_snippet {
            id() {
                return this.meetup().id();
            }
            title() {
                return this.meetup().title();
            }
            date() {
                return this.meetup().start().toString("Month'YY");
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_meetup_snippet.prototype, "date", null);
        $$.$piterjs_meetup_snippet = $piterjs_meetup_snippet;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//snippet.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_frame extends $.$mol_view {
        dom_name() {
            return "iframe";
        }
        attr() {
            return {
                src: this.uri(),
                allow: this.allow()
            };
        }
        fullscreen() {
            return true;
        }
        accelerometer() {
            return true;
        }
        autoplay() {
            return true;
        }
        encription() {
            return true;
        }
        gyroscope() {
            return true;
        }
        pip() {
            return true;
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        allow() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_frame.prototype, "uri", null);
    $.$mol_frame = $mol_frame;
})($ || ($ = {}));
//frame.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_wait_timeout = $.$mol_fiber_sync((timeout) => new Promise(done => new $.$mol_after_timeout(timeout, () => done(null))));
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_frame, {
        border: {
            style: 'none',
        },
        flex: 'auto',
    });
})($ || ($ = {}));
//frame.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                const node = this.dom_node();
                this.uri_resource();
                return $.$mol_fiber_sync(() => new Promise((done, fail) => {
                    node.onload = () => {
                        done(node.contentWindow);
                    };
                    node.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                }))();
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            uri_listener() {
                const node = this.dom_node();
                return new $.$mol_dom_listener($.$mol_dom_context, 'message', $.$mol_fiber_root((event) => {
                    if (event.source !== node.contentWindow)
                        return;
                    if (!Array.isArray(event.data))
                        return;
                    if (event.data[0] !== 'hashchange')
                        return;
                    this._uri_sync?.destructor();
                    this._uri_sync = $.$mol_fiber.current;
                    $.$mol_wait_timeout(1000);
                    this.uri(event.data[1]);
                }));
            }
            render() {
                const node = super.render();
                this.uri_listener();
                this.window();
                return node;
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                ].join(';');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "window", null);
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "uri_resource", null);
        __decorate([
            $.$mol_mem
        ], $mol_frame.prototype, "uri_listener", null);
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//frame.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_video_page extends $.$mol_page {
        title() {
            return "Видеотрансляция";
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Frame()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                video: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        source() {
            return "";
        }
        uri() {
            return this.source();
        }
        Frame() {
            const obj = new this.$.$mol_frame();
            obj.uri = () => this.uri();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_video_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_video_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_video_page.prototype, "Frame", null);
    $.$piterjs_video_page = $piterjs_video_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/video/page/page.view.css", "[piterjs_video_page] {\n\tflex: 1000 0 60rem;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_video_page extends $.$piterjs_video_page {
            uri() {
                return this.source().replace('/watch?v=', '/embed/') ?? '';
            }
        }
        $$.$piterjs_video_page = $piterjs_video_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex_mark extends $.$mol_object {
        pos() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        box() {
            const obj = new this.$.$mol_vector_2d(this.box_lat(), this.box_lon());
            return obj;
        }
        hint() {
            return "";
        }
        title() {
            return this.address();
        }
        content() {
            return "";
        }
        object() {
            return null;
        }
        box_lat() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        box_lon() {
            const obj = new this.$.$mol_vector_range(0, 0);
            return obj;
        }
        address() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lat", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex_mark.prototype, "box_lon", null);
    $.$mol_map_yandex_mark = $mol_map_yandex_mark;
})($ || ($ = {}));
//mark.view.tree.js.map
;
"use strict";
//undefined.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $.$mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if ('then' in error)
                        return $.$mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $.$mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//record.js.map
;
"use strict";
var $;
(function ($) {
    const Numb = $.$mol_data_pipe($.$mol_data_string, parseFloat);
    const Response = $.$mol_data_array($.$mol_data_record({
        boundingbox: $.$mol_data_array(Numb),
        lat: Numb,
        lon: Numb,
    }));
    $.$mol_geo_search_attribution = 'https://osm.org/copyright';
    function $mol_geo_search({ query, count = 1 }) {
        const url = new URL('https://nominatim.openstreetmap.org/search');
        url.searchParams.set('q', query);
        url.searchParams.set('limit', count.toString());
        url.searchParams.set('format', 'jsonv2');
        const json = $.$mol_fetch.json(url.toString());
        return Response(json).map(({ lon, lat, boundingbox: box }) => {
            return {
                coord: new $.$mol_vector_2d(lat, lon),
                box: new $.$mol_vector_2d(new $.$mol_vector_range(box[0], box[1]), new $.$mol_vector_range(box[2], box[3])),
            };
        });
    }
    $.$mol_geo_search = $mol_geo_search;
})($ || ($ = {}));
//search.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex_mark extends $.$mol_map_yandex_mark {
            object() {
                const ymaps = $$.$mol_map_yandex.api();
                return new ymaps.Placemark(this.pos(), {
                    hintContent: this.hint(),
                    iconContent: this.title(),
                    balloonContent: this.content(),
                }, {
                    preset: "islands#redStretchyIcon",
                });
            }
            found() {
                return $.$mol_geo_search({ query: this.address() })[0] ?? null;
            }
            pos() {
                return this.found()?.coord ?? super.pos();
            }
            box() {
                return this.found()?.box ?? super.pos();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "object", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "found", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex_mark.prototype, "box", null);
        $$.$mol_map_yandex_mark = $mol_map_yandex_mark;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mark.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_map_yandex extends $.$mol_view {
        zoom(val) {
            if (val !== undefined)
                return val;
            return 2;
        }
        center(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        objects() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_map_yandex.prototype, "center", null);
    $.$mol_map_yandex = $mol_map_yandex;
})($ || ($ = {}));
//yandex.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $.$mol_object2 {
        static module(uri) {
            return $.$mol_fiber_sync(() => import(uri))();
        }
        static script(uri) {
            return $.$mol_fiber_sync(() => {
                const doc = $.$mol_dom_context.document;
                const script = doc.createElement('script');
                script.src = uri;
                doc.head.appendChild(script);
                return new Promise((done, fail) => {
                    script.onload = () => done($.$mol_dom_context);
                    script.onerror = () => fail(new Error(`Can not import ${uri}`));
                });
            })();
        }
        static style(uri) {
            return $.$mol_fiber_sync(() => {
                const doc = $.$mol_dom_context.document;
                const style = doc.createElement('link');
                style.rel = 'stylesheet';
                style.href = uri;
                doc.head.appendChild(style);
                return new Promise((done, fail) => {
                    style.onload = () => done(style.sheet);
                    style.onerror = () => fail(new Error(`Can not import ${uri}`));
                });
            })();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//import.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/map/yandex/yandex.view.css", "[mol_map_yandex] {\n\tflex: auto;\n\talign-self: stretch;\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));
//yandex.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_map_yandex extends $.$mol_map_yandex {
            static api() {
                return $.$mol_import.script(`https://api-maps.yandex.ru/2.1/?lang=${$.$mol_locale.lang()}`).ymaps;
            }
            api(next, force) {
                const ymaps = $mol_map_yandex.api();
                const load_map = $.$mol_fiber_sync(() => new Promise(done => ymaps.ready(done)));
                load_map();
                const api = new ymaps.Map(this.dom_node(), {
                    center: [0, 0],
                    zoom: 0,
                });
                api.copyrights.add($.$mol_geo_search_attribution);
                api.controls.remove('fullscreenControl');
                api.controls.remove('typeSelector');
                api.events.add(['actionend'], (event) => {
                    new $.$mol_after_frame($.$mol_fiber_root(() => {
                        this.update(event);
                    }));
                });
                return api;
            }
            update(event) {
                this.zoom(this.api().getZoom());
                this.center(this.api().getCenter());
            }
            bounds_updated() {
                const box = this.objects()[0]?.box();
                if (box) {
                    this.api().setBounds([
                        [box.x.min, box.y.min],
                        [box.x.max, box.y.max],
                    ]);
                }
                return true;
            }
            center(next, force) {
                if (next !== undefined)
                    return next;
                const pos = this.objects()[0]?.pos();
                if (pos)
                    return pos;
                return [0, 0];
            }
            render() {
                const api = this.api();
                api.setCenter(this.center(), this.zoom());
                api.geoObjects.removeAll();
                for (let obj of this.objects()) {
                    api.geoObjects.add(obj.object());
                }
                this.dom_node_actual();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "api", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "bounds_updated", null);
        __decorate([
            $.$mol_mem
        ], $mol_map_yandex.prototype, "center", null);
        $$.$mol_map_yandex = $mol_map_yandex;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//yandex.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_place_page extends $.$mol_page {
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        title() {
            return "";
        }
        tools() {
            return [
                this.Close()
            ];
        }
        body() {
            return [
                this.Info(),
                this.Map()
            ];
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                place: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        address() {
            return "";
        }
        Address() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.address()
            ];
            return obj;
        }
        route() {
            return "";
        }
        Route() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.route()
            ];
            return obj;
        }
        info() {
            return [
                this.Address(),
                this.Route()
            ];
        }
        Info() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.info();
            return obj;
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 14;
        }
        coords() {
            const obj = new this.$.$mol_vector_2d(0, 0);
            return obj;
        }
        Mark() {
            const obj = new this.$.$mol_map_yandex_mark();
            obj.pos = () => this.coords();
            obj.title = () => "";
            return obj;
        }
        Map() {
            const obj = new this.$.$mol_map_yandex();
            obj.zoom = (val) => this.zoom(val);
            obj.objects = () => [
                this.Mark()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Address", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Route", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Info", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "coords", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Mark", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_place_page.prototype, "Map", null);
    $.$piterjs_place_page = $piterjs_place_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/place/page/page.view.css", "[piterjs_place_page] {\n\tflex: 1000 0 60rem;\n}\n\n[piterjs_place_page_info] {\n\tpadding: .75rem;\n\tflex-wrap: wrap;\n}\n\n[piterjs_place_page_info] > * {\n\tpadding: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_place_page extends $.$piterjs_place_page {
            title() {
                return this.place().title();
            }
            address() {
                return this.place().address();
            }
            coords() {
                return this.place().coords();
            }
            route() {
                return this.place().route();
            }
            info() {
                return [
                    this.Address(),
                    ...this.route() ? [this.Route()] : []
                ];
            }
        }
        $$.$piterjs_place_page = $piterjs_place_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_others_event extends $.$mol_link_iconed {
        start() {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        target() {
            return "_blank";
        }
        content() {
            return [
                this.Location(),
                this.Date(),
                this.Title()
            ];
        }
        location() {
            return "";
        }
        Location() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.location()
            ];
            return obj;
        }
        date() {
            return "";
        }
        Date() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.date()
            ];
            return obj;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "start", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "Location", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "Date", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others_event.prototype, "Title", null);
    $.$piterjs_others_event = $piterjs_others_event;
})($ || ($ = {}));
//event.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/others/event/event.view.css", "[piterjs_others_event] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: .5rem;\n}\n\n[piterjs_others_event_title] {\n\tpadding: 0 .25rem;\n\tflex: 1000 1 50%;\n\twhite-space: normal;\n}\n\n[piterjs_others_event_date] {\n\tpadding: 0 .25rem;\n\tflex: 0 0 6rem;\n\tcolor: var(--mol_theme_shade);\n}\n\n[piterjs_others_event_location] {\n\tpadding: 0 .25rem;\n\tflex: 1 0 10rem;\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//event.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_others_event extends $.$piterjs_others_event {
            date() {
                return this.start().toString("YYYY-MM-DD");
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_others_event.prototype, "date", null);
        $$.$piterjs_others_event = $piterjs_others_event;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//event.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_others extends $.$mol_page {
        title() {
            return "Календарь фронтенд событий";
        }
        tools() {
            return [
                this.Add(),
                this.Close()
            ];
        }
        body() {
            return [
                this.Events()
            ];
        }
        Event(uid) {
            const obj = new this.$.$piterjs_others_event();
            obj.title = () => this.event_title(uid);
            obj.uri = () => this.event_uri(uid);
            obj.start = () => this.event_start(uid);
            obj.location = () => this.event_location(uid);
            return obj;
        }
        Add_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Add() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://github.com/web-standards-ru/calendar";
            obj.target = () => "_blank";
            obj.hint = () => "Добавить ещё событие";
            obj.sub = () => [
                this.Add_icon()
            ];
            return obj;
        }
        Close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                others: null
            });
            obj.sub = () => [
                this.Close_icon()
            ];
            return obj;
        }
        events() {
            return [];
        }
        Events() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.events();
            return obj;
        }
        event_title(uid) {
            return "";
        }
        event_uri(uid) {
            return "";
        }
        event_start(uid) {
            const obj = new this.$.$mol_time_moment();
            return obj;
        }
        event_location(uid) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $piterjs_others.prototype, "Event", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Add_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Add", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Close_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Close", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_others.prototype, "Events", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_others.prototype, "event_start", null);
    $.$piterjs_others = $piterjs_others;
})($ || ($ = {}));
//others.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_data_boolean = (val) => {
        if (typeof val === 'boolean')
            return val;
        return $.$mol_fail(new $.$mol_data_error(`${val} is not a boolean`));
    };
})($ || ($ = {}));
//boolean.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/others/others.view.css", "[piterjs_others] {\n\tflex: 0 0 40rem;\n}\n\n[piterjs_others_events] {\n\tpadding: .75rem;\n}\n");
})($ || ($ = {}));
//others.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Moment = $.$mol_data_pipe($.$mol_data_string, $.$mol_time_moment);
        const Event = $.$mol_data_record({
            uid: $.$mol_data_string,
            start: Moment,
            end: Moment,
            allDay: $.$mol_data_optional($.$mol_data_boolean),
            location: $.$mol_data_optional($.$mol_data_string),
            summary: $.$mol_data_string,
            description: $.$mol_data_optional($.$mol_data_string),
        });
        const Event_list = $.$mol_data_array(Event);
        class $piterjs_others extends $.$piterjs_others {
            list() {
                const uri = 'https://web-standards.ru/calendar.json';
                return Event_list(this.$.$mol_fetch.json(uri));
            }
            list_future() {
                const present = new $.$mol_time_moment().merge({
                    hour: 0,
                    second: 0,
                }).shift({ day: -2 }).toOffset(0).toString();
                const next = this.list().filter(event => {
                    return event.start.toOffset(0).toString() >= present;
                });
                return next;
            }
            dict() {
                const next = new Map();
                for (const event of this.list_future()) {
                    next.set(event.uid, event);
                }
                return next;
            }
            events() {
                return this.list_future().map(event => this.Event(event.uid));
            }
            event_title(uid) {
                return this.dict().get(uid).summary;
            }
            event_start(uid) {
                return this.dict().get(uid).start;
            }
            event_uri(uid) {
                return this.dict().get(uid).description ?? '';
            }
            event_location(uid) {
                return this.dict().get(uid).location ?? 'Земля';
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_others.prototype, "list_future", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_others.prototype, "dict", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_others.prototype, "events", null);
        $$.$piterjs_others = $piterjs_others;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//others.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $.$mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//auto.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'on')
            return true;
        if (theme === 'off')
            return false;
        return null;
    }
    function $mol_lights(next) {
        return this.$mol_state_local.value('$mol_lights', next)
            ?? parse(this.$mol_state_arg.value('mol_lights'))
            ?? $.$mol_dom_context.matchMedia('(prefers-color-scheme: light)').matches;
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//lights.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//auto.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $.$mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//book2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: auto;\n\tscroll-snap-type: x proximity;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//book2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages().slice(), this.Placeholder()];
                const prev = $.$mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $.$mol_after_timeout(100, () => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book2.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_screen_lines extends $.$mol_svg_root {
        style() {
            return {
                fill: this.color()
            };
        }
        view_box() {
            return "0 0 310 246";
        }
        sub() {
            return [
                this.First(),
                this.Second(),
                this.Third()
            ];
        }
        color() {
            return "#FFE515";
        }
        First() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M56 9.00002L-1.5605e-05 67.5L-1.31571e-05 95.5L56 36.5L56 9.00002Z ";
            return obj;
        }
        Second() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M148.5 1.40751e-05L-7.6932e-06 158L0 246L238 6.25073e-06L148.5 1.40751e-05Z";
            return obj;
        }
        Third() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M167.5 152.5L167.5 108L268 3.62805e-06L309.5 0L167.5 152.5Z";
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_screen_lines.prototype, "First", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen_lines.prototype, "Second", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen_lines.prototype, "Third", null);
    $.$piterjs_screen_lines = $piterjs_screen_lines;
})($ || ($ = {}));
//lines.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/screen/lines/intro.view.css", "[piterjs_screen_lines] {\n\twidth: 25%;\n\tpointer-events: none;\n\tposition: absolute;\n\tz-index: -1;\n}\n");
})($ || ($ = {}));
//intro.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_screen extends $.$mol_view {
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        sub() {
            return [
                this.Open(),
                this.Close()
            ];
        }
        content() {
            return [];
        }
        color_open() {
            return "#FFE515";
        }
        Open() {
            const obj = new this.$.$piterjs_screen_lines();
            obj.color = () => this.color_open();
            return obj;
        }
        color_close() {
            return "#FFE515";
        }
        Close() {
            const obj = new this.$.$piterjs_screen_lines();
            obj.color = () => this.color_close();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_screen.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen.prototype, "Open", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_screen.prototype, "Close", null);
    $.$piterjs_screen = $piterjs_screen;
})($ || ($ = {}));
//screen.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/screen/screen.view.css", "/* cyrillic */\n@font-face {\n\tfont-family: 'Fira Sans';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tfont-display: swap;\n\tsrc: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLeTY.woff2) format('woff2');\n\tunicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* latin */\n@font-face {\n\tfont-family: 'Fira Sans';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tfont-display: swap;\n\tsrc: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2) format('woff2');\n\tunicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n[piterjs_screen] {\n\tfont-family: \"Fira Sans\", \"Verdana\", sans-serif;\n\tbackground: var(--mol_theme_back);\n\tflex: auto;\n\tdisplay: flex;\n\tz-index: 0;\n\tposition: relative;\n\tmin-width: 100%;\n}\n\n\n[piterjs_screen_open] {\n\tleft: 0;\n\ttop: 0;\n}\n\n[piterjs_screen_close] {\n\tright: 0;\n\tbottom: 0;\n\ttransform: rotate(180deg);\n}\n");
})($ || ($ = {}));
//screen.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $piterjs_screen extends $.$piterjs_screen {
            sub() {
                return [
                    this.Open(),
                    this.Close(),
                    ...this.content(),
                ];
            }
        }
        $$.$piterjs_screen = $piterjs_screen;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//screen.view.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_app extends $.$mol_view {
        plugins() {
            return [
                this.Theme()
            ];
        }
        sub() {
            return [
                this.Screen()
            ];
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Митапы";
            obj.tools = () => this.tools();
            obj.body = () => [
                this.Meetups(),
                this.Links()
            ];
            return obj;
        }
        Meetup(id) {
            const obj = new this.$.$piterjs_meetup_page();
            obj.meetup = () => this.meetup(id);
            return obj;
        }
        Speech(id) {
            const obj = new this.$.$piterjs_speech_page();
            obj.speech = () => this.speech(id);
            return obj;
        }
        Menu_meetup(id) {
            const obj = new this.$.$piterjs_meetup_snippet();
            obj.meetup = () => this.meetup(id);
            return obj;
        }
        Now() {
            const obj = new this.$.$piterjs_now();
            obj.place = () => this.place();
            return obj;
        }
        Video() {
            const obj = new this.$.$piterjs_video_page();
            obj.source = () => this.video_uri();
            return obj;
        }
        Place() {
            const obj = new this.$.$piterjs_place_page();
            obj.place = () => this.place();
            return obj;
        }
        Others() {
            const obj = new this.$.$piterjs_others();
            return obj;
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        pages() {
            return [];
        }
        Book() {
            const obj = new this.$.$mol_book2();
            obj.pages = () => this.pages();
            obj.Placeholder = () => null;
            return obj;
        }
        Screen() {
            const obj = new this.$.$piterjs_screen();
            obj.place = () => this.place();
            obj.Open = () => null;
            obj.Close = () => null;
            obj.content = () => [
                this.Book()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        menu_meetups() {
            return [];
        }
        Meetups() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_meetups();
            return obj;
        }
        Conf_title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "Conf"
            ];
            return obj;
        }
        Conf_date() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                "сентябрь'19"
            ];
            return obj;
        }
        Conf() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://conf.piterjs.org/";
            obj.sub = () => [
                this.Conf_title(),
                this.Conf_date()
            ];
            return obj;
        }
        Others_link() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "#others";
            obj.title = () => "Другие события";
            return obj;
        }
        Links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => [
                this.Conf(),
                this.Others_link()
            ];
            return obj;
        }
        meetup(id) {
            const obj = new this.$.$piterjs_meetup();
            return obj;
        }
        speech(id) {
            const obj = new this.$.$piterjs_speech();
            return obj;
        }
        video_uri() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Menu", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "Meetup", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "Speech", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "Menu_meetup", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Now", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Video", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Others", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Theme", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Book", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Screen", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Meetups", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Conf_title", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Conf_date", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Conf", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Others_link", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_app.prototype, "Links", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "meetup", null);
    __decorate([
        $.$mol_mem_key
    ], $piterjs_app.prototype, "speech", null);
    $.$piterjs_app = $piterjs_app;
})($ || ($ = {}));
//app.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_meter extends $.$mol_plugin {
        zoom() {
            return 1;
        }
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        height(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        right(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        bottom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//meter.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                const win = this.$.$mol_dom_context;
                if (node !== $.$mol_dom_context.document.body) {
                    new $.$mol_after_frame($.$mol_atom2.current.fresh);
                    try {
                        const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
                        return { left, top, right, bottom, width, height, zoom: win.devicePixelRatio || 1 };
                    }
                    catch (error) {
                    }
                }
                const size = $.$mol_window.size();
                return {
                    zoom: win.devicePixelRatio || 1,
                    left: 0,
                    top: 0,
                    right: size.width,
                    bottom: size.height,
                    width: size.width,
                    height: size.height,
                };
            }
            top() {
                return this.rect().top;
            }
            bottom() {
                return this.rect().bottom;
            }
            left() {
                return this.rect().left;
            }
            right() {
                return this.rect().right;
            }
            width() {
                return this.rect().width;
            }
            height() {
                return this.rect().height;
            }
            zoom() {
                return this.rect().zoom;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "rect", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "top", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "zoom", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//meter.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        start_zoom(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        start_distance(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        zoom(val) {
            if (val !== undefined)
                return val;
            return 1;
        }
        start_pan(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        pan(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        pos(val) {
            if (val !== undefined)
                return val;
            return [
                NaN,
                NaN
            ];
        }
        start_pos(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_from_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_right(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_bottom(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_left(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        swipe_to_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        style() {
            return {
                ...super.style(),
                "touch-action": "none",
                "overscroll-behavior": "none"
            };
        }
        event() {
            return {
                ...super.event(),
                touchstart: (event) => this.event_start(event),
                touchmove: (event) => this.event_move(event),
                touchend: (event) => this.event_end(event),
                mousedown: (event) => this.event_start(event),
                mousemove: (event) => this.event_move(event),
                mouseup: (event) => this.event_end(event),
                mouseleave: (event) => this.event_leave(event),
                wheel: (event) => this.event_wheel(event)
            };
        }
        event_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_end(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_wheel(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            rect() {
                return this.dom_node().getBoundingClientRect();
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
                else if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = ((event.touches[1].pageX - event.touches[0].pageX) ** 2 + (event.touches[1].pageY - event.touches[0].pageY) ** 2) ** .5;
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
            }
            event_leave(event) {
                if (event.defaultPrevented)
                    return;
                if (event instanceof MouseEvent)
                    this.pos(super.pos());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                let cursor_pos;
                if (event instanceof MouseEvent) {
                    cursor_pos = [event.pageX, event.pageY];
                    if (event.buttons === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                else if (event instanceof TouchEvent) {
                    cursor_pos = [event.touches[0].pageX, event.touches[0].pageY];
                    if (event.touches.length === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                if (cursor_pos) {
                    const { left, top } = this.rect();
                    this.pos([
                        Math.max(0, Math.round(cursor_pos[0] - left)),
                        Math.max(0, Math.round(cursor_pos[1] - top)),
                    ]);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if (typeof TouchEvent === 'undefined')
                        return;
                    if (!(event instanceof TouchEvent))
                        return;
                    const precision = this.swipe_precision();
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (typeof TouchEvent === 'undefined')
                    return;
                if (!(event instanceof TouchEvent))
                    return;
                if (event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = ((pos1[0] - pos0[0]) ** 2 + (pos1[1] - pos0[1]) ** 2) ** .5;
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const zoom_prev = this.zoom() || 0.001;
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.offsetX, event.offsetY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $.$mol_dom_render_attributes(node, attr);
                $.$mol_dom_render_styles(node, style);
                $.$mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                this.dom_node_actual();
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book extends $.$mol_view {
        sub() {
            return this.pages_wrapped();
        }
        minimal_width() {
            return 0;
        }
        pages() {
            return [];
        }
        plugins() {
            return [
                this.Meter(),
                this.Touch()
            ];
        }
        Page(index) {
            const obj = new this.$.$mol_book_page();
            obj.Sub = () => this.page(index);
            obj.visible = () => this.page_visible(index);
            return obj;
        }
        Placeholder() {
            const obj = new this.$.$mol_book_placeholder();
            obj.title = () => this.title();
            return obj;
        }
        pages_wrapped() {
            return [];
        }
        width() {
            return this.Meter().width();
        }
        Meter() {
            const obj = new this.$.$mol_meter();
            return obj;
        }
        event_front_up(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_front_down(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Touch() {
            const obj = new this.$.$mol_touch();
            obj.swipe_from_left = (val) => this.event_front_up(val);
            obj.swipe_to_left = (val) => this.event_front_down(val);
            return obj;
        }
        page(index) {
            return null;
        }
        page_visible(index) {
            return true;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Touch", null);
    $.$mol_book = $mol_book;
    class $mol_book_placeholder extends $.$mol_view {
        minimal_width() {
            return 400;
        }
        attr() {
            return {
                ...super.attr(),
                tabindex: null
            };
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
    class $mol_book_page extends $.$mol_ghost {
        attr_static() {
            return {
                ...super.attr_static(),
                tabindex: 0,
                mol_book_page_visible: true
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_book_page_focused: this.focused(),
                mol_book_page_visible: this.visible()
            };
        }
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//book.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book/book.view.css", "[mol_book] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\ttransform: translateZ( 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]) {\n\tposition: absolute; \n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_book] > [mol_book_page_focused]:not([mol_book_page_visible]) ~ * {\n\topacity: .2;\n\tpointer-events: none;\n\tz-index: -1;\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) {\n\ttransform: translate3d( -100% , 0 , 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) + *:before {\n\tcontent : '•••';\n\tposition: absolute;\n\ttop: 1rem;\n\tleft: 0;\n\tz-index: 2;\n\tpointer-events: none;\n\tcolor: var(--mol_skin_base_text);\n\ttransform: rotate(90deg);\n}\n\n[mol_book] > * {\n\tposition: relative;\n\t/* animation: mol_book_page_show linear .2s; */\n\ttransition-timing-function: linear;\n\tz-index: 0;\n\tmin-height: 100%;\n\tmax-height: 100%;\n}\n\n[mol_book_placeholder] {\n\tflex: 1000 1 400px;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_field);\n\tz-index: -1;\n}\n\n[mol_book_placeholder]:hover {\n\toutline: none;\n}\n\n/*\n@keyframes mol_book_page_show {\n\tfrom {\n\t\ttransform: translateX( 100% );\n\t\topacity: 0;\n\t\tz-index: -1;\n\t}\n}\n\n[mol_book_page]:not(:first-child) {\n\tanimation: mol_book_page_show .25s ease-out;\n}\n*/\n");
})($ || ($ = {}));
//book.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book extends $.$mol_book {
            pages_extended() {
                return [this.Placeholder(), ...this.pages()];
            }
            break_point() {
                const pages = this.pages_extended();
                const limit = this.width();
                let width = 0;
                for (var break_point = pages.length; break_point > 0; --break_point) {
                    const page = pages[break_point - 1];
                    if (!page)
                        continue;
                    const page_width = page.minimal_width();
                    if (width + page_width > limit)
                        break;
                    width += page_width;
                }
                if (width === 0)
                    --break_point;
                return break_point;
            }
            page(index) {
                return this.pages_extended()[index];
            }
            page_visible(index) {
                return index >= this.break_point();
            }
            pages_wrapped() {
                const pages = this.pages_extended();
                const extended = [];
                for (let i = 1; i < pages.length; ++i) {
                    if (pages[i])
                        extended.push(this.Page(i));
                }
                if (pages[0])
                    extended.push(this.Page(0));
                return extended;
            }
            title() {
                return this.pages().map(page => page.title()).reverse().join(' | ');
            }
            event_front_up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(true);
            }
            event_front_down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(false);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/app/app.view.css", "[piterjs_app] {\n\t--mol_theme_current: rgb(255, 229, 21);\n\t--mol_theme_focus: rgb(255, 229, 21);\n\t--mol_theme_current: rgb(255, 229, 21);\n\tdisplay: flex;\n}\n\n[piterjs_app] [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: #f7df1e;\n\t--mol_theme_text: black;\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_control: black;\n\tstroke: currentColor;\n}\n\n[piterjs_app] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: #f7df1e;\n\t--mol_theme_text: black;\n\t--mol_theme_hover: hsl(53, 93%, 44%);\n\tstroke: currentColor;\n}\n\n[piterjs_app] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) + *:before {\n\tleft: .25rem;\n}\n\n[piterjs_app] [mol_page] ,\n[piterjs_app] [mol_page_body] {\n\tbox-shadow: none;\n\tbackground: none;\n}\n\n[piterjs_app_menu] {\n\tflex: 0 0 12rem;\n}\n\n[piterjs_app_menu_body] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n[piterjs_app_links] {\n\tflex: none;\n}\n\n[piterjs_app_conf] {\n\twhite-space: nowrap;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25);\n\tpadding: 0;\n}\n\n[piterjs_app_speech_body] {\n\tpadding: 0;\n}\n\n[piterjs_app_conf_title] {\n\tmargin: .5rem .75rem;\n\tfont-weight: bolder;\n}\n\n[piterjs_app_conf_date] {\n\tmargin: .5rem .75rem;\n}\n\n[piterjs_app_others_link] {\n\tpadding: .5rem .75rem;\n}\n\n[piterjs_app_book_placeholder] {\n\tbackground: none;\n}\n\n[piterjs_app_toggle_intro] {\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\twidth: 2rem;\n\theight: 2rem;\n}\n");
})($ || ($ = {}));
//app.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $.$mol_tree;
        class $piterjs_app extends $.$piterjs_app {
            now(next) { return this.$.$mol_state_arg.value('now', next); }
            place_show() { return this.$.$mol_state_arg.value('place') !== null; }
            others() { return this.$.$mol_state_arg.value('others') !== null; }
            meetup_id(next) { return this.$.$mol_state_arg.value('meetup', next); }
            meetup(id) { return $.$piterjs_meetup.item(id); }
            speech_id(next) { return this.$.$mol_state_arg.value('speech', next); }
            speech(id) { return $.$piterjs_speech.item(id); }
            speaker_id(next) { return this.$.$mol_state_arg.value('speaker', next); }
            speaker(id) { return $.$piterjs_speaker.item(id); }
            pages() {
                const pages = [
                    this.Menu(),
                    ...this.meetup_id() ? [this.Meetup(this.meetup_id())] : [],
                    ...this.speech_id() ? [this.Speech(this.speech_id())] : [],
                    ...this.place_show() ? [this.Place()] : [],
                    ...this.video_uri() ? [this.Video()] : [],
                    ...this.others() ? [this.Others()] : [],
                ];
                if (pages.length === 1)
                    pages.push(this.Now());
                return pages;
            }
            title() {
                return this.Book().title();
            }
            meetups() {
                return this.$.$piterjs_meetup.all().slice()
                    .sort((a, b) => b.start().valueOf() - a.start().valueOf());
            }
            meetup_current() {
                const id = this.meetup_id();
                const meetup = id ? this.meetup(id) : this.meetups()[0];
                return meetup;
            }
            place() {
                return this.meetup_current().place();
            }
            menu_meetups() {
                return this.meetups().map(meetup => this.Menu_meetup(meetup.id()));
            }
            menu_meetup(id) { return this.meetup(id); }
            menu_meetup_id(id) { return id; }
            video() {
                return this.$.$mol_state_arg.value('video') !== null;
            }
            video_uri() {
                if (!this.video())
                    return '';
                const id = this.meetup_id();
                if (!id)
                    return '';
                return this.meetup(id).video() ?? '';
            }
        }
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "now", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "meetup_id", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "pages", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "title", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "meetups", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "meetup_current", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "place", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "menu_meetups", null);
        __decorate([
            $.$mol_mem
        ], $piterjs_app.prototype, "video_uri", null);
        $$.$piterjs_app = $piterjs_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//app.view.js.map
;
var $node = $node || {} ; $node[ "/piterjs/app/app_lines.svg" ] = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEwIiBoZWlnaHQ9IjI0NiIgdmlld0JveD0iMCAwIDMxMCAyNDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NiA5LjAwMDAyTC0xLjU2MDVlLTA1IDY3LjVMLTEuMzE1NzFlLTA1IDk1LjVMNTYgMzYuNUw1NiA5LjAwMDAyWiIgZmlsbD0iI0Y3REYxRSIvPgo8cGF0aCBkPSJNMTQ4LjUgMS40MDc1MWUtMDVMLTcuNjkzMmUtMDYgMTU4TDAgMjQ2TDIzOCA2LjI1MDczZS0wNkwxNDguNSAxLjQwNzUxZS0wNVoiIGZpbGw9IiNGN0RGMUUiLz4KPHBhdGggZD0iTTE2Ny41IDE1Mi41TDE2Ny41IDEwOEwyNjggMy42MjgwNWUtMDZMMzA5LjUgMEwxNjcuNSAxNTIuNVoiIGZpbGw9IiNGN0RGMUUiLz4KPC9zdmc+Cg=="

;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//env.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//env.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $.$mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return {
                ...super.some(),
                a: 1
            };
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//attributes.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $.$mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//binding.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $.$mol_view {
        outer_width(v) {
            return this.Test().width(v);
        }
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $.$mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//binding_right.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $.$mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//simple.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $.$mol_view {
        Page(index) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(index);
            return obj;
        }
        page(index) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $.$mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//subcomponent.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    const TextDecoder = globalThis.TextDecoder ?? $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next, force) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found) {
                    exists = false;
                }
                else {
                    return $.$mol_fail_hidden(error);
                }
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            if (next === undefined) {
                return $.$mol_charset_decode(this.buffer(undefined, force));
            }
            else {
                const buffer = next === undefined ? undefined : $.$mol_charset_encode(next);
                this.buffer(buffer, force);
                return next;
            }
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat().size;
                default: return 0;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $.$mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $.$mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    file.buffer(undefined, $.$mol_mem_force_update);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', (error) => {
                this.stat(error, $.$mol_mem_force_fail);
            });
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, force) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            try {
                stat = next ?? stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $.$mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure(next) {
            const path = this.path();
            try {
                if (next)
                    $node.fs.mkdirSync(path);
                else
                    $node.fs.unlinkSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
            return true;
        }
        buffer(next, force) {
            const path = this.path();
            if (next === undefined) {
                this.stat();
                try {
                    const prev = $.$mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$.$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as readonly ( ${item_type} )[]` : ` as readonly any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...['\t\t\t"', SourceNode(opt.row, opt.col, fileName, key[1] + '" : '), arg, ' ', ...(v || []), ' ,\n']);
                                        needSet = ns;
                                    });
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        var decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $.$mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//circle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_medium extends $.$mol_icon {
        path() {
            return "M4.37,7.3C4.4,7.05 4.3,6.81 4.12,6.65L2.25,4.4V4.06H8.05L12.53,13.89L16.47,4.06H22V4.4L20.4,5.93C20.27,6.03 20.2,6.21 20.23,6.38V17.62C20.2,17.79 20.27,17.97 20.4,18.07L21.96,19.6V19.94H14.12V19.6L15.73,18.03C15.89,17.88 15.89,17.83 15.89,17.59V8.5L11.4,19.9H10.8L5.57,8.5V16.14C5.5,16.46 5.63,16.78 5.86,17L7.96,19.57V19.9H2V19.57L4.1,17C4.33,16.78 4.43,16.46 4.37,16.14V7.3Z";
        }
    }
    $.$mol_icon_medium = $mol_icon_medium;
})($ || ($ = {}));
//medium.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_telegram extends $.$mol_icon {
        path() {
            return "M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z";
        }
    }
    $.$mol_icon_telegram = $mol_icon_telegram;
})($ || ($ = {}));
//telegram.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_vk extends $.$mol_icon {
        path() {
            return "M20.8,7.74C20.93,7.32 20.8,7 20.18,7H18.16C17.64,7 17.41,7.27 17.28,7.57C17.28,7.57 16.25,10.08 14.79,11.72C14.31,12.19 14.1,12.34 13.84,12.34C13.71,12.34 13.5,12.19 13.5,11.76V7.74C13.5,7.23 13.38,7 12.95,7H9.76C9.44,7 9.25,7.24 9.25,7.47C9.25,7.95 10,8.07 10.05,9.44V12.42C10.05,13.08 9.93,13.2 9.68,13.2C9,13.2 7.32,10.67 6.33,7.79C6.13,7.23 5.94,7 5.42,7H3.39C2.82,7 2.7,7.27 2.7,7.57C2.7,8.11 3.39,10.77 5.9,14.29C7.57,16.7 9.93,18 12.08,18C13.37,18 13.53,17.71 13.53,17.21V15.39C13.53,14.82 13.65,14.7 14.06,14.7C14.36,14.7 14.87,14.85 16.07,16C17.45,17.38 17.67,18 18.45,18H20.47C21.05,18 21.34,17.71 21.18,17.14C21,16.57 20.34,15.74 19.47,14.76C19,14.21 18.29,13.61 18.07,13.3C17.77,12.92 17.86,12.75 18.07,12.4C18.07,12.4 20.54,8.93 20.8,7.74Z";
        }
    }
    $.$mol_icon_vk = $mol_icon_vk;
})($ || ($ = {}));
//vk.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_twitter extends $.$mol_icon {
        path() {
            return "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z";
        }
    }
    $.$mol_icon_twitter = $mol_icon_twitter;
})($ || ($ = {}));
//twitter.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_youtube extends $.$mol_icon {
        path() {
            return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
        }
    }
    $.$mol_icon_youtube = $mol_icon_youtube;
})($ || ($ = {}));
//youtube.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $.$mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//6.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $.$mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//toggle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/lights/toggle/toggle.view.css", "[mol_lights_toggle] {\n\ttransform: rotate(-90deg);\n}\n");
})($ || ($ = {}));
//toggle.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//toggle.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
//major.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/major/major.view.css", "[mol_button_major][disabled] {\n\topacity: .5;\n\tfilter: grayscale();\n}\n");
})($ || ($ = {}));
//major.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_link extends $.$mol_link {
        target() {
            return "_blank";
        }
        sub() {
            return [
                this.Button()
            ];
        }
        Button() {
            const obj = new this.$.$mol_button_major();
            obj.title = () => this.title();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_link.prototype, "Button", null);
    $.$piterjs_link = $piterjs_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/link/link.view.css", "[piterjs_link] {\n\tpadding: 0;\n}\n/* \n[piterjs_link_button] {\n\tfont-weight: bolder;\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: 0 0 0 2px #f7df1e;\n\tbackground: none;\n}\n\n[piterjs_link_button]:hover {\n\tbackground: #f7df1e;\n}\n */\n");
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $piterjs_now extends $.$mol_page {
        title() {
            return "PiterJS";
        }
        meetups() {
            return [];
        }
        attr() {
            return {
                ...super.attr(),
                tabindex: null
            };
        }
        tools() {
            return [
                this.Links()
            ];
        }
        body() {
            return [
                this.Screen()
            ];
        }
        Github_icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
        Github() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://github.com/piterjs";
            obj.sub = () => [
                this.Github_icon()
            ];
            return obj;
        }
        Medium_icon() {
            const obj = new this.$.$mol_icon_medium();
            return obj;
        }
        Medium() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://medium.com/piterjs";
            obj.sub = () => [
                this.Medium_icon()
            ];
            return obj;
        }
        Telegram_icon() {
            const obj = new this.$.$mol_icon_telegram();
            return obj;
        }
        Telegram() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://t.me/piterjs";
            obj.sub = () => [
                this.Telegram_icon()
            ];
            return obj;
        }
        Vkontakte_icon() {
            const obj = new this.$.$mol_icon_vk();
            return obj;
        }
        Vkontakte() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://vk.com/piterjs";
            obj.sub = () => [
                this.Vkontakte_icon()
            ];
            return obj;
        }
        Twitter_icon() {
            const obj = new this.$.$mol_icon_twitter();
            return obj;
        }
        Twitter() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://twitter.com/@gopiterjs";
            obj.sub = () => [
                this.Twitter_icon()
            ];
            return obj;
        }
        Youtube_icon() {
            const obj = new this.$.$mol_icon_youtube();
            return obj;
        }
        Youtube() {
            const obj = new this.$.$mol_link();
            obj.uri = () => "https://www.youtube.com/channel/UCN9aK6ZG5PS1nnJZqscsmKw";
            obj.sub = () => [
                this.Youtube_icon()
            ];
            return obj;
        }
        Links() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Github(),
                this.Medium(),
                this.Telegram(),
                this.Vkontakte(),
                this.Twitter(),
                this.Youtube()
            ];
            return obj;
        }
        place() {
            const obj = new this.$.$piterjs_place();
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        Logo_angles() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M16.4 253.6h41v2.7l.1 13.7H0v-57.5h16.4v41zM256.3 57.6h-2.7V16.4h-41v-2.7L212.5 0H270v57.5l-13.7.1z";
            return obj;
        }
        Logo_image() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => "M218.3 164.7L212 162c-11-4.7-15.7-7.9-15.7-15.5 0-6.2 4.8-11 12.2-11 7.2 0 12 3.1 16.4 11l20-12.7c-8.5-14.6-20.1-20.3-36.4-20.3-23 0-37.5 14.6-37.5 33.6 0 20.7 12.2 30.5 30.8 38.4l6.4 2.7c11.8 5 18.7 8.2 18.7 16.9 0 7.3-6.8 12.5-17.4 12.5-12.7 0-19.7-6.5-25.2-15.5l-21 12c7.6 14.7 23 26 46.7 26 24.3 0 42.5-12.6 42.5-35.5 0-21.2-12.2-30.6-34-39.9zM123.7 201.3c0 12.7-5.3 16-13.7 16-8.8 0-12.4-6-16.4-13l-21 12.5c6 12.7 18 23.3 38.5 23.3 22.6 0 38.2-12 38.2-38.4v-86.9h-25.6v86.5zM111.4 65.4h-8l-.1-3.5h9c-3.4-4.7-2.2-13-.3-20h-9.2l1-3v-5.2H94l2 3-2 2.9h8l-.1 2.3h-9c-2 7-3.1 15.3.3 20h8.2l.1 3.1v.4H95.3c-.8 0-2 1.2-2.3 2.3H78.9v-3.5h13.7c-10.5-8.2 1.8-32.9 1.8-32.9h-16l1-7v-4.7h-9.9l2 2.4-2 2.3h7.4l-.1 7h-9.3s-12.3 24.7-1.8 33h10.6v3.4H53.6v-.3.1-5.6h7.3c-3.4-4.7-2.2-13-.3-20h-7.4v-2.3h.4v-6h-9.3l2 3-2 3h8v2.3h-8.4c-1.9 7-3 15.3.4 20h7.6l-.5 5.6v.2h-1.2V70h-.9L38.5 59v-8.8h-9.9l2 3-2 3h8.8v3l6.4 8.9s-.8 2.1-.4 3.5a50 50 0 0 0 6.6 7.9c1.4 1.5 3.6 6 3.6 6h24.8v6c-1.2.5-3.2 2-3.2 3.7 0 2.1 1.8 3.9 4.2 3.9 2.3 0 4.2-1.8 4.2-3.9 0-1.6-.5-3.2-2.8-3.6v-6.1H107l1.3-4.3c-5.2-2.3.3-7.8 3-10.2l1.6-5.5h-1.6v-.1zm-49 7.9h-2.3v-2.4h2.4v2.4zm4.7 0h-2.3v-2.4h2.3v2.4zm4.7 0h-2.3v-2.4h2.3v2.4zm4.7 0h-2.3v-2.4h2.3v2.4zm8.3 0h-2.4v-2.4h2.4v2.4zm4.7 0H87v-2.4h2.4v2.4zm4.6 0h-2.3v-2.4h2.3v2.4zm4.7 0h-2.3v-2.4h2.3v2.4z";
            return obj;
        }
        Logo() {
            const obj = new this.$.$mol_svg_root();
            obj.view_box = () => "0 0 270 270";
            obj.sub = () => [
                this.Logo_angles(),
                this.Logo_image()
            ];
            return obj;
        }
        Join() {
            const obj = new this.$.$piterjs_link();
            obj.uri = () => "https://docs.google.com/forms/d/e/1FAIpQLSe7lb5LFc0LaaJu9POvlIAw8Te0g46xSmYZr7FwuCWg2saYmA/viewform";
            obj.title = () => "Подать заявку на доклад";
            return obj;
        }
        Patreon() {
            const obj = new this.$.$piterjs_link();
            obj.uri = () => "https://www.patreon.com/bePatron?u=16938072";
            obj.title = () => "Поддержать PiterJS рублём";
            return obj;
        }
        Screen() {
            const obj = new this.$.$piterjs_screen();
            obj.place = () => this.place();
            obj.content = () => [
                this.Lights(),
                this.Logo(),
                this.Join(),
                this.Patreon()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Github_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Github", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Medium_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Medium", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Telegram_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Telegram", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Vkontakte_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Vkontakte", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Twitter_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Twitter", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Youtube_icon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Youtube", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "place", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Lights", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Logo_angles", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Logo_image", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Logo", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Join", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Patreon", null);
    __decorate([
        $.$mol_mem
    ], $piterjs_now.prototype, "Screen", null);
    $.$piterjs_now = $piterjs_now;
})($ || ($ = {}));
//now.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("piterjs/now/now.view.css", "[piterjs_now] {\n\tfont-size: 1em;\n\tpadding: 0;\n\talign-items: stretch;\n\tbackground: none;\n\tflex: 1000 0 30rem;\n\tposition: relative;\n\tanimation: none !important;\n}\n\n[piterjs_now_lights] {\n\tposition: absolute;\n\ttop: .75rem;\n\tright: .75rem;\n}\n\n[piterjs_app_placeholder] {\n\tflex: 1000 1 0;\n}\n\n[piterjs_now_title] {\n\tflex: 1000 1 auto;\n\tpadding-right: 0;\n}\n\n[piterjs_now_body] {\n\tdisplay: flex;\n}\n\n[piterjs_now_screen] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 1rem;\n\tbackground: none;\n}\n\n[piterjs_now_logo] {\n\tbox-shadow: none;\n\twidth: 30vmin;\n\tmargin: 1rem;\n\tanimation: piterjs_now_logo_show .250s ease-out;\n}\n\n[piterjs_app_now_logo_angles] {\n\tfill: var(--mol_theme_focus);\n}\n\n[piterjs_now_links] {\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n[piterjs_app_now_join] {\n\tpadding: 0;\n\tmargin: 1rem;\n}\n\n@keyframes piterjs_now_logo_show {\n\tfrom {\n\t\ttransform: scale(2);\n\t\topacity: 0;\n\t\tz-index: -1;\n\t}\n}\n");
})($ || ($ = {}));
//now.view.css.js.map
;
export default $
//# sourceMappingURL=node.esm.js.map
