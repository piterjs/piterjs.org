declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        get incompleted(): boolean;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
        step(): Promise<null>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "focus" | "back" | "hover" | "card" | "current" | "special" | "control" | "shade", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "block" | "blur" | "round", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: string | null): string | null;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		theme( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare var $node: any;

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_int62_string = `${string}_${string}`;
    function $mol_int62_string_ensure(str: unknown): `${string}_${string}` | null;
    type $mol_int62_pair = {
        readonly lo: number;
        readonly hi: number;
    };
    const $mol_int62_max: number;
    const $mol_int62_min: number;
    const $mol_int62_range: number;
    function $mol_int62_to_string({ lo, hi }: $mol_int62_pair): `${string}_${string}`;
    function $mol_int62_from_string(str: string): null | $mol_int62_pair;
    function $mol_int62_compare(left_lo: number, left_hi: number, right_lo: number, right_hi: number): number;
    function $mol_int62_inc(lo: number, hi: number, max?: number): $mol_int62_pair;
    function $mol_int62_random(): $mol_int62_pair;
    function $mol_int62_hash_string(str: string): `${string}_${string}`;
    function $mol_int62_hash_buffer(buf: Uint8Array, seed?: {
        lo: number;
        hi: number;
    }): $mol_int62_pair;
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    function $mol_data_enum<Dict extends Record<number | string, number | string>>(name: string, dict: Dict): ((value: Dict[keyof Dict]) => Dict[keyof Dict]) & {
        config: {
            name: string;
            dict: Dict;
        };
        Value: Dict[keyof Dict];
    };
}

declare namespace $ {
    var $mol_crypto_native: Crypto;
}

declare namespace $ {
    function $mol_base64_encode(src: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_encode_web(str: string | Uint8Array): string;
}

declare namespace $ {
    function $mol_base64_decode(base64: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_decode_web(base64Str: string): Uint8Array;
}

declare namespace $ {
    function $mol_base64_url_encode(buffer: Uint8Array): string;
    function $mol_base64_url_decode(str: string): Uint8Array;
}

declare namespace $ {
    function $mol_crypto_auditor_pair(this: $): Promise<{
        public: $mol_crypto_auditor_public;
        private: $mol_crypto_auditor_private;
    }>;
    class $mol_crypto_auditor_public extends Object {
        readonly native: CryptoKey & {
            type: 'public';
        };
        static size_str: number;
        static size_bin: number;
        constructor(native: CryptoKey & {
            type: 'public';
        });
        static from(serial: string | Uint8Array): Promise<$mol_crypto_auditor_public>;
        serial(): Promise<string>;
        toArray(): Promise<Uint8Array>;
        verify(data: BufferSource, sign: BufferSource): Promise<boolean>;
    }
    class $mol_crypto_auditor_private extends Object {
        readonly native: CryptoKey & {
            type: 'private';
        };
        static size_str: number;
        static size_bin: number;
        constructor(native: CryptoKey & {
            type: 'private';
        });
        static from(serial: string | Uint8Array): Promise<$mol_crypto_auditor_private>;
        serial(): Promise<string>;
        toArray(): Promise<Uint8Array>;
        sign(data: BufferSource): Promise<ArrayBuffer>;
        public(): Promise<$mol_crypto_auditor_public>;
    }
    const $mol_crypto_auditor_sign_size = 64;
    function $mol_crypto_auditor_private_to_public(serial: string): string;
}

declare namespace $ {
    enum $hyoo_crowd_peer_level {
        get = 0,
        add = 1,
        mod = 2,
        law = 3
    }
    class $hyoo_crowd_peer extends Object {
        readonly key_public: $mol_crypto_auditor_public;
        readonly key_public_serial: string;
        readonly key_private: $mol_crypto_auditor_private;
        readonly key_private_serial: string;
        id: $mol_int62_string;
        constructor(key_public: $mol_crypto_auditor_public, key_public_serial: string, key_private: $mol_crypto_auditor_private, key_private_serial: string);
        static generate(): Promise<$hyoo_crowd_peer>;
        static restore(serial: string): Promise<$hyoo_crowd_peer>;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    type $hyoo_crowd_unit_id = `${$mol_int62_string}!${$mol_int62_string}`;
    enum $hyoo_crowd_unit_kind {
        grab = 0,
        join = 1,
        give = 2,
        data = 3
    }
    enum $hyoo_crowd_unit_group {
        auth = 0,
        data = 1
    }
    class $hyoo_crowd_unit extends Object {
        readonly land: $mol_int62_string;
        readonly auth: $mol_int62_string;
        readonly head: $mol_int62_string;
        readonly self: $mol_int62_string;
        readonly next: $mol_int62_string;
        readonly prev: $mol_int62_string;
        readonly time: number;
        readonly data: unknown;
        bin: $hyoo_crowd_unit_bin | null;
        constructor(land: $mol_int62_string, auth: $mol_int62_string, head: $mol_int62_string, self: $mol_int62_string, next: $mol_int62_string, prev: $mol_int62_string, time: number, data: unknown, bin: $hyoo_crowd_unit_bin | null);
        kind(): $hyoo_crowd_unit_kind;
        group(): $hyoo_crowd_unit_group;
        level(): $hyoo_crowd_peer_level;
        [Symbol.toPrimitive](): string;
    }
    class $hyoo_crowd_unit_bin extends DataView {
        static from_buffer(buffer: Int16Array): $hyoo_crowd_unit_bin;
        static from_unit(unit: $hyoo_crowd_unit): $hyoo_crowd_unit_bin;
        sign(next?: Uint8Array): Uint8Array;
        size(): number;
        sens(): Uint8Array;
        unit(): $hyoo_crowd_unit;
    }
    function $hyoo_crowd_unit_compare(left: $hyoo_crowd_unit, right: $hyoo_crowd_unit): number;
}

declare namespace $ {
    class $hyoo_crowd_node extends $mol_object2 {
        readonly land: $hyoo_crowd_land;
        readonly head: $mol_int62_string;
        constructor(land?: $hyoo_crowd_land, head?: $mol_int62_string);
        static for<Node extends typeof $hyoo_crowd_node>(this: Node, land: $hyoo_crowd_land, head: $mol_int62_string): InstanceType<Node>;
        static toJSON(): string;
        id(): `${string}_${string}`;
        world(): $hyoo_crowd_world | null;
        as<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>;
        units(): readonly $hyoo_crowd_unit[];
        nodes<Node extends typeof $hyoo_crowd_node>(Node: Node): InstanceType<Node>[];
        virgin(): boolean;
        [Symbol.toPrimitive](): string;
        toJSON(): `${string}_${string}`;
    }
}

declare namespace $ {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next?: unknown): {} | null;
        str(next?: string): string;
        numb(next?: number): number;
        bool(next?: boolean): boolean;
        yoke(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): $hyoo_crowd_land | null;
    }
}

declare namespace $ {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
        yoke<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node, law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): InstanceType<Node> | null;
    }
}

declare namespace $ {
    function $mol_reconcile<Prev, Next>({ prev, from, to, next, equal, drop, insert, update, }: {
        prev: readonly Prev[];
        from: number;
        to: number;
        next: ArrayLike<Next>;
        equal: (next: Next, prev: Prev) => boolean;
        drop: (prev: Prev, lead: Prev | null) => Prev | null;
        insert: (next: Next, lead: Prev | null) => Prev;
        update?: (next: Next, prev: Prev, lead: Prev | null) => Prev;
    }): void;
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {
    let $hyoo_crowd_tokenizer: RegExp;
}

declare namespace $ {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next?: readonly unknown[]): readonly unknown[];
        set(next?: ReadonlySet<string | number | boolean | null>): Set<unknown>;
        insert(next: readonly unknown[], from?: number, to?: number): void;
        move(from: number, to: number): void;
        cut(seat: number): $hyoo_crowd_unit;
        has(val: string | number | boolean | null, next?: boolean): boolean;
        add(val: string | number | boolean | null): void;
        drop(val: string | number | boolean | null): void;
        node_make<Node extends typeof $hyoo_crowd_node>(val: unknown, Node: Node): InstanceType<Node>;
    }
}

declare namespace $ {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next?: string): string;
        str(next?: string): string;
        write(next: string, str_from?: number, str_to?: number): this;
        point_by_offset(offset: number): readonly [$mol_int62_string, number];
        offset_by_point([self, offset]: [$mol_int62_string, number]): readonly [$mol_int62_string, number];
        selection(peer: $mol_int62_string, next?: number[]): number[];
    }
}

declare namespace $ {
    class $hyoo_crowd_fund<Node extends typeof $hyoo_crowd_node> extends $mol_object {
        world: $hyoo_crowd_world;
        node_class: Node;
        constructor(world: $hyoo_crowd_world, node_class: Node);
        Item(id: $mol_int62_string | `${$mol_int62_string}!${$mol_int62_string}`): InstanceType<Node>;
        make(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): InstanceType<Node>;
    }
}

declare namespace $ {
    let $mol_dict_key: typeof $mol_key;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value | undefined;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        keys(): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<Key>;
        };
        entries(): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<[Key, Value]>;
        };
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorReturnResult<any> | IteratorYieldResult<[Key, Value]>;
        };
    }
}

declare namespace $ {
    function $hyoo_crowd_time_now(): number;
    function $hyoo_crowd_time_stamp(time: number): number;
}

declare namespace $ {
    class $hyoo_crowd_clock extends Map<$mol_int62_string, number> {
        static begin: number;
        last_time: number;
        constructor(entries?: Iterable<readonly [$mol_int62_string, number]>);
        sync(right: $hyoo_crowd_clock): void;
        see_time(time: number): void;
        see_peer(peer: $mol_int62_string, time: number): void;
        see_bin(bin: $hyoo_crowd_clock_bin, group: $hyoo_crowd_unit_group): void;
        fresh(peer: $mol_int62_string, time: number): boolean;
        ahead(clock: $hyoo_crowd_clock): boolean;
        time(peer: $mol_int62_string): number;
        now(): number;
        last_stamp(): number;
        tick(peer: $mol_int62_string): number;
    }
    class $hyoo_crowd_clock_bin extends DataView {
        static from(land_id: $mol_int62_string, clocks: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock], count: number): $hyoo_crowd_clock_bin;
        land(): `${string}_${string}`;
        count(): number;
    }
}

declare namespace $ {
    class $hyoo_crowd_world extends $mol_object {
        readonly peer?: $hyoo_crowd_peer | undefined;
        constructor(peer?: $hyoo_crowd_peer | undefined);
        readonly lands_pub: $mol_wire_pub;
        _lands: Map<`${string}_${string}`, $hyoo_crowd_land>;
        get lands(): Map<`${string}_${string}`, $hyoo_crowd_land>;
        land_init(id: $hyoo_crowd_land): void;
        land(id: $mol_int62_string): $hyoo_crowd_land;
        land_sync(id: $mol_int62_string): $hyoo_crowd_land;
        Fund<Item extends typeof $hyoo_crowd_node>(Item: Item): $hyoo_crowd_fund<Item>;
        home(): $hyoo_crowd_land;
        _knights: $mol_dict<`${string}_${string}`, $hyoo_crowd_peer>;
        _signs: WeakMap<$hyoo_crowd_unit, Uint8Array>;
        grab(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): Promise<$hyoo_crowd_land>;
        sign_units(units: readonly $hyoo_crowd_unit[]): Promise<$hyoo_crowd_unit[]>;
        delta_land(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<$hyoo_crowd_unit[]>;
        delta_batch(land: $hyoo_crowd_land, clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): Promise<Uint8Array>;
        delta(clocks?: Map<`${string}_${string}`, readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]>): AsyncGenerator<Uint8Array, void, unknown>;
        merge(donor: $hyoo_crowd_world): Promise<void>;
        apply(delta: Uint8Array): Promise<{
            allow: $hyoo_crowd_unit[];
            forbid: Map<$hyoo_crowd_unit, string>;
        }>;
        audit_delta(land: $hyoo_crowd_land, delta: $hyoo_crowd_unit[]): Promise<{
            allow: $hyoo_crowd_unit[];
            forbid: Map<$hyoo_crowd_unit, string>;
        }>;
    }
}

declare namespace $ {
    class $hyoo_crowd_land extends $mol_object {
        id(): `${string}_${string}`;
        toJSON(): `${string}_${string}`;
        peer(): $hyoo_crowd_peer;
        peer_id(): `${string}_${string}`;
        world(): $hyoo_crowd_world | null;
        get clock_auth(): $hyoo_crowd_clock;
        get clock_data(): $hyoo_crowd_clock;
        get clocks(): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock];
        get clocks_bin(): Uint8Array;
        readonly pub: $mol_wire_pub;
        readonly _clocks: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock];
        _unit_all: Map<`${string}_${string}!${string}_${string}`, $hyoo_crowd_unit>;
        unit(head: $mol_int62_string, self: $mol_int62_string): $hyoo_crowd_unit | undefined;
        _unit_lists: Map<`${string}_${string}`, ($hyoo_crowd_unit[] & {
            dirty: boolean;
        }) | undefined>;
        _unit_alives: Map<`${string}_${string}`, $hyoo_crowd_unit[] | undefined>;
        size(): number;
        unit_list(head: $mol_int62_string): $hyoo_crowd_unit[] & {
            dirty: boolean;
        };
        unit_alives(head: $mol_int62_string): readonly $hyoo_crowd_unit[];
        node<Node extends typeof $hyoo_crowd_node>(head: $mol_int62_string, Node: Node): InstanceType<Node>;
        chief: $hyoo_crowd_struct;
        id_new(): $mol_int62_string;
        fork(auth: $hyoo_crowd_peer): $hyoo_crowd_land;
        delta(clocks?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly $hyoo_crowd_unit[];
        resort(head: $mol_int62_string): $hyoo_crowd_unit[] & {
            dirty: boolean;
        };
        apply(delta: readonly $hyoo_crowd_unit[]): this;
        _joined: boolean;
        join(): true | undefined;
        leave(): false | undefined;
        allowed_add(peer?: `${string}_${string}`): boolean;
        allowed_mod(peer?: `${string}_${string}`): boolean;
        allowed_law(peer?: `${string}_${string}`): boolean;
        level_base(next?: $hyoo_crowd_peer_level): void;
        level(peer: $mol_int62_string | '', next?: $hyoo_crowd_peer_level): $hyoo_crowd_peer_level;
        grabbed(): boolean;
        peers(): readonly `${string}_${string}`[];
        residents(): readonly `${string}_${string}`[];
        authors(): Set<`${string}_${string}`>;
        steal_rights(donor: $hyoo_crowd_land): void;
        first_stamp(): number | null;
        last_stamp(): number;
        selection(peer: $mol_int62_string): $hyoo_crowd_reg;
        put(head: $mol_int62_string, self: $mol_int62_string, prev: $mol_int62_string, data: unknown): $hyoo_crowd_unit;
        wipe(unit: $hyoo_crowd_unit): $hyoo_crowd_unit;
        move(unit: $hyoo_crowd_unit, head: $mol_int62_string, prev: $mol_int62_string): void;
        insert(unit: $hyoo_crowd_unit, head: $mol_int62_string, seat: number): void;
    }
}

declare namespace $ {
    class $hyoo_meta_model extends $hyoo_crowd_struct {
        editable(): boolean;
        editors(): readonly `${string}_${string}`[];
        title_node(): $hyoo_crowd_text;
        title(next?: string): string;
        title_selection(next?: number[]): number[];
        steal_rights(node: $hyoo_crowd_node): void;
        whole(next?: $hyoo_meta_model | null): $hyoo_meta_model;
    }
}

declare namespace $ {
    class $piterjs_model extends $hyoo_meta_model {
        description_node(): $hyoo_crowd_text;
        description(next?: string): string;
        description_selection(next?: number[]): number[];
    }
}

declare namespace $ {
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        transponed(this: $mol_vector<$mol_vector<number, number>, Length>): $mol_vector<$mol_vector<number, Length>, typeof this[0]['length']>;
        get x(): Value;
        set x(next: Value);
        get y(): Value;
        set y(next: Value);
        get z(): Value;
        set z(next: Value);
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        0: Value;
        1: Value;
        constructor(min: Value, max?: Value);
        get min(): Value;
        set min(next: Value);
        get max(): Value;
        set max(next: Value);
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {
    class $piterjs_place extends $piterjs_model {
        notes(next?: string): string;
        capacity_max(next?: number): number;
        address(next?: string): string;
        route(next?: string): string;
        coords(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        colors(): string[];
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		field( ): ({ 
			'tabIndex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    let $mol_layer: Record<string, $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_view__title__YO0GSGYW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): ReturnType< $mol_book2['pages'] >
		minimal_width( ): number
		Placeholder( ): $mol_view
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        menu_title(): string;
        sub(): readonly $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry__QT4NK0K2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry__MWP97OP5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry__ABORRUJX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $piterjs_screen_lines extends $mol_svg_root {
		color( ): string
		First( ): $mol_svg_path
		Second( ): $mol_svg_path
		Third( ): $mol_svg_path
		style( ): ({ 
			'fill': ReturnType< $piterjs_screen_lines['color'] >,
		}) 
		view_box( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=lines.view.tree.d.ts.map
declare namespace $ {

	type $piterjs_screen_lines__color__RBEHX3CM = $mol_type_enforce<
		ReturnType< $piterjs_screen['color_open'] >
		,
		ReturnType< $piterjs_screen_lines['color'] >
	>
	type $piterjs_screen_lines__color__IBCABJT6 = $mol_type_enforce<
		ReturnType< $piterjs_screen['color_close'] >
		,
		ReturnType< $piterjs_screen_lines['color'] >
	>
	export class $piterjs_screen extends $mol_view {
		color_open( ): string
		Open( ): $piterjs_screen_lines
		color_close( ): string
		Close( ): $piterjs_screen_lines
		place( ): $piterjs_place
		sub( ): readonly(any)[]
		content( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=screen.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_screen extends $.$piterjs_screen {
        sub(): ($mol_view | $piterjs_screen_lines)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {

	type $mol_speck__value__9BR9AFMX = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_speck | $mol_view_content)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__JZ1VQL02 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry__0NS9Q323 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_key extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=key.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_key_variant extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=variant.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare let $hyoo_sync_revision: string;

declare namespace $ {
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: Set<string> | null;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    function $hyoo_sync_peer(path: string, next?: string): Promise<$hyoo_crowd_peer>;
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {
    function $mol_wire_race<Tasks extends ((...args: any) => any)[]>(...tasks: Tasks): {
        [index in keyof Tasks]: ReturnType<Tasks[index]>;
    };
}

declare namespace $ {
    let $hyoo_sync_masters: string[];
}

declare namespace $ {
    class $hyoo_sync_yard<Line> extends $mol_object2 {
        db_unit_persisted: WeakSet<$hyoo_crowd_unit>;
        log_pack(data: any): any;
        peer(next?: string): $hyoo_crowd_peer;
        world(): $hyoo_crowd_world;
        land_init(land: $hyoo_crowd_land): void;
        land(id: $mol_int62_string): $hyoo_crowd_land;
        land_grab(law?: readonly ("" | `${string}_${string}`)[], mod?: readonly ("" | `${string}_${string}`)[], add?: readonly ("" | `${string}_${string}`)[]): $hyoo_crowd_land;
        home(): $hyoo_crowd_land;
        land_search(query: string): `${string}_${string}`[];
        sync(): void;
        land_sync(land: $hyoo_crowd_land): void;
        db_land_clocks(land: $mol_int62_string, next?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock] | undefined;
        db_land_sync(land: $hyoo_crowd_land): void;
        db_land_init(land: $hyoo_crowd_land): void;
        db_land_load(land: $hyoo_crowd_land): Promise<$hyoo_crowd_unit[]>;
        db_land_search(from: string | number, to?: string | number): Promise<Set<`${string}_${string}`>>;
        db_land_save(land: $hyoo_crowd_land, units: readonly $hyoo_crowd_unit[]): Promise<void>;
        master_cursor(next?: number): number;
        master_list(): string[];
        master_link(): string;
        master(): any;
        server(): any;
        slaves(next?: readonly Line[]): readonly Line[];
        line_lands(line: Line, next?: $hyoo_crowd_land[]): $hyoo_crowd_land[];
        line_land_clocks({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }, next?: readonly [$hyoo_crowd_clock, $hyoo_crowd_clock]): readonly [$hyoo_crowd_clock, $hyoo_crowd_clock] | undefined;
        line_sync(line: Line): void;
        line_land_sync({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }): void;
        line_land_init({ line, land }: {
            line: Line;
            land: $hyoo_crowd_land;
        }): void;
        line_land_neck({ line, land }: {
            line: Line;
            land: $mol_int62_string;
        }, next?: Promise<any>[]): Promise<any>[];
        line_receive(line: Line, message: Uint8Array): Promise<void>;
        line_send_clocks(line: Line, land: $hyoo_crowd_land): void;
        line_send_units(line: Line, units: readonly $hyoo_crowd_unit[]): Promise<void>;
    }
}

declare namespace $ {
    function $mol_db_response<Result>(request: IDBRequest<Result>): Promise<Result>;
}

declare namespace $ {
    class $mol_db_store<Schema extends $mol_db_store_schema> {
        readonly native: IDBObjectStore;
        constructor(native: IDBObjectStore);
        get name(): string;
        get path(): string | string[];
        get incremental(): boolean;
        get indexes(): { [Name in keyof Schema["Indexes"]]: $mol_db_index<{
            Key: Schema["Indexes"][Name];
            Doc: Schema['Doc'];
        }>; };
        index_make(name: string, path?: string[], unique?: boolean, multiEntry?: boolean): IDBIndex;
        index_drop(name: string): this;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        clear(): Promise<undefined>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        put(doc: Schema['Doc'], key?: Schema['Key']): Promise<IDBValidKey>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
        drop(keys: Schema['Key'] | IDBKeyRange): Promise<undefined>;
    }
}

declare namespace $ {
    type $mol_db_store_schema = {
        Key: IDBValidKey;
        Doc: unknown;
        Indexes: Record<string, IDBValidKey[]>;
    };
}

declare namespace $ {
    class $mol_db_index<Schema extends $mol_db_index_schema> {
        readonly native: IDBIndex;
        constructor(native: IDBIndex);
        get name(): string;
        get paths(): string[];
        get unique(): boolean;
        get multiple(): boolean;
        get store(): $mol_db_store<$mol_db_store_schema>;
        get transaction(): $mol_db_transaction<$mol_db_schema>;
        get db(): $mol_db_database<$mol_db_schema>;
        count(keys?: Schema['Key'] | IDBKeyRange): Promise<number>;
        get(key: Schema['Key']): Promise<Schema["Doc"] | undefined>;
        select(key?: Schema['Key'] | IDBKeyRange | null, count?: number): Promise<Schema["Doc"][]>;
    }
}

declare namespace $ {
    type $mol_db_index_schema = {
        Key: IDBValidKey[];
        Doc: unknown;
    };
}

declare namespace $ {
    function $mol_db<Schema extends $mol_db_schema>(this: $, name: string, ...migrations: ((transaction: $mol_db_transaction<$mol_db_schema>) => void)[]): Promise<$mol_db_database<Schema>>;
}

declare namespace $ {
    type $mol_db_schema = Record<string, $mol_db_store_schema>;
}

declare namespace $ {
    class $mol_db_database<Schema extends $mol_db_schema> {
        readonly native: IDBDatabase;
        constructor(native: IDBDatabase);
        get name(): string;
        get version(): number;
        get stores(): (keyof Schema)[];
        read<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): Pick<Schema, Names> extends infer T extends $mol_db_schema ? { [Name in keyof T]: $mol_db_store<Pick<Schema, Names>[Name]>; } : never;
        change<Names extends Exclude<keyof Schema, symbol | number>>(...names: Names[]): $mol_db_transaction<Pick<Schema, Names>>;
        kill(): Promise<IDBDatabase>;
        destructor(): void;
    }
}

interface IDBTransaction {
    commit(): void;
}
declare namespace $ {
    class $mol_db_transaction<Schema extends $mol_db_schema> {
        readonly native: IDBTransaction;
        constructor(native: IDBTransaction);
        get stores(): { [Name in keyof Schema]: $mol_db_store<Schema[Name]>; };
        store_make(name: string): IDBObjectStore;
        store_drop(name: string): this;
        abort(): void;
        commit(): Promise<void>;
        get db(): $mol_db_database<$mol_db_schema>;
    }
}

declare namespace $ {
    class $hyoo_sync_client extends $hyoo_sync_yard<WebSocket | Window> {
        db(): Promise<$mol_db_database<{
            Unit: {
                Key: [$mol_int62_string, $mol_int62_string, $mol_int62_string];
                Doc: $hyoo_crowd_unit;
                Indexes: {
                    Land: [$mol_int62_string];
                    Data: [$mol_int62_string];
                };
            };
        }>>;
        db_land_load(land: $hyoo_crowd_land): Promise<$hyoo_crowd_unit[]>;
        db_land_search(from: string, to?: string): Promise<Set<`${string}_${string}`>>;
        db_land_save(land: $hyoo_crowd_land, units: readonly $hyoo_crowd_unit[]): Promise<void>;
        reconnects(reset?: null): number;
        master(): WebSocket;
        line_send_clocks(line: WebSocket | Window, land: $hyoo_crowd_land): void;
        line_send_units(line: WebSocket | Window, units: readonly $hyoo_crowd_unit[]): Promise<void>;
    }
}

declare namespace $ {

	type $mol_pop_bubble__align__M0VRI5OG = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__DE5QJ6XJ = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__4MVJPE9N = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_check__minimal_width__DYOFP5D8 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__3RKYJNJ0 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__PB8TCMHZ = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__SZL8IX3E = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__JKL2PE9S = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__9HYR2CX3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__HZLF5FZX = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_paragraph__sub__IQQ99LSZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__LO43RIUM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        abstract drop(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
        open(...modes: readonly ('create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append')[]): number;
        toJSON(): string;
    }
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array): Uint8Array;
        stat(next?: $mol_file_stat, virt?: 'virt'): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(): void;
        drop(): void;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style__UFCMUZZB = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__JR14AMW2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            readonly [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl__KUGOC9GD = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__2LWF8509 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key__E55D9XGM = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__IX72EROY = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__9TH6THNF = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__A95IPLIU = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__MJUS1OTL = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__MN107EWS = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__7GY86AHL = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__HFGBJW02 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__VJOPSUYA = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__VM1J7EG8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__T74T8F16 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__Z2PUPUQH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__BUPF06U9 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__XDY465YR = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__VFZ5BLKO = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__V1OEIZR3 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__Y1POG562 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__9GEWH896 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__957K7BFJ = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_button_minor | $.$mol_string)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_button_minor | $.$mol_string)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_dimmer__haystack__MTIHHW9N = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__2KI4CY7J = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__DEYOQY4C = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__A1PCBK0G = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__2WSAS16N = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__9JGDNF03 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__82OX763D = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__B6U6OJVR = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__UV1RZKGI = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__TO8CX69P = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__4PI1ZWHM = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__HO6C88TZ = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__9K4NNBSX = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__PRZDYS80 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $.$mol_search)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_hash_string(str: string, seed?: number): number;
}

declare namespace $ {

	export class $mol_avatar extends $mol_icon {
		view_box( ): string
		id( ): string
		path( ): string
	}
	
}

//# sourceMappingURL=avatar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_avatar extends $.$mol_avatar {
        path(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_sync extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=sync.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_sync_off extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=off.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_sync_online extends $.$hyoo_sync_online {
        message(): string;
        link_content(): $mol_icon_sync_off[];
        hint(): string;
        master_link(): string;
        master_id(index: number): string;
        option_label(index: number): string;
        value(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $hyoo_sync_online_master_cursor__YJCUE1LV = $mol_type_enforce<
		Parameters< $hyoo_sync_online['master_cursor'] >[0]
		,
		Parameters< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] >[0]
	>
	type $mol_avatar__id__9LWDJW9B = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_avatar__id__EW06V2HZ = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_link'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_link__uri__MVC103E0 = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['master_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__ZO56418Z = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['link_content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__hint__1C8JDKXP = $mol_type_enforce<
		ReturnType< $hyoo_sync_online['message'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	export class $hyoo_sync_online extends $mol_select {
		dictionary( ): ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_list'] >
		master_cursor( next?: ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] > ): ReturnType< ReturnType< $hyoo_sync_online['yard'] >['master_cursor'] >
		master_id( id: any): string
		Option_logo( id: any): $mol_avatar
		master_link( ): string
		Well( ): $mol_avatar
		Fail( ): $mol_icon_sync_off
		link_content( ): readonly(any)[]
		hint( ): string
		message( ): ReturnType< $hyoo_sync_online['hint'] >
		Link( ): $mol_link
		minimal_width( ): number
		minimal_height( ): number
		yard( ): $hyoo_sync_yard<any>
		Filter( ): any
		option_content( id: any): readonly(any)[]
		trigger_content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=online.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_settings extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=settings.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_settings_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_shield extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=shield.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_shield_account extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=account.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_6 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=6.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_6
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {

	export class $mol_icon_share extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=share.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_share_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        get normal(): $mol_time_duration;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    enum $mol_time_moment_weekdays {
        monday = 0,
        tuesday = 1,
        wednesday = 2,
        thursday = 3,
        friday = 4,
        saturday = 5,
        sunday = 6
    }
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config?: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string | number;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    class $piterjs_domain extends $hyoo_meta_model {
        meetups_node(): $hyoo_crowd_list;
        meetups_ids(): `${string}_${string}`[];
        meetup(id: $mol_int62_string): $piterjs_meetup;
        meetups(): $piterjs_meetup[];
        meetup_public(id: $mol_int62_string, next?: boolean): boolean;
        meetup_make(): $piterjs_meetup;
        static secure_public(): string;
        static secure_private(): string | null;
    }
}

declare namespace $ {
    class $mol_crypto_secret extends Object {
        readonly native: CryptoKey & {
            type: 'secret';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'secret';
        });
        static generate(): Promise<$mol_crypto_secret>;
        static from(serial: BufferSource): Promise<$mol_crypto_secret>;
        static pass(pass: string, salt: Uint8Array): Promise<$mol_crypto_secret>;
        static derive(private_serial: string, public_serial: string): Promise<$mol_crypto_secret>;
        serial(): Promise<Uint8Array>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<Uint8Array>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<Uint8Array>;
    }
}

declare namespace $ {
    class $piterjs_secret extends Object {
        readonly native: CryptoKey & {
            type: 'secret';
        };
        static size: number;
        constructor(native: CryptoKey & {
            type: 'secret';
        });
        static generate(): Promise<$piterjs_secret>;
        static from(serial: BufferSource | string): Promise<$piterjs_secret>;
        static derive(private_serial: string, public_serial: string): Promise<$piterjs_secret>;
        serial(): Promise<ArrayBuffer>;
        encrypt(open: BufferSource, salt: BufferSource): Promise<ArrayBuffer>;
        decrypt(closed: BufferSource, salt: BufferSource): Promise<ArrayBuffer>;
    }
}

declare namespace $ {
    class $hyoo_crowd_dict extends $hyoo_crowd_node {
        keys(next?: string[]): string[];
        sub<Node extends typeof $hyoo_crowd_node>(key: string, Node: Node): InstanceType<Node>;
        has(key: string): boolean;
        add(key: string): void;
        drop(key: string): void;
    }
}

declare namespace $ {
    function $mol_crypto_hash(data: Uint8Array): Uint8Array;
}

declare namespace $ {
    class $piterjs_meetup extends $piterjs_model {
        start(next?: $mol_time_moment): $mol_time_moment;
        video(next?: string): string;
        speeches_node(): $hyoo_crowd_list;
        speeches(): $piterjs_speech[];
        speech_make(): $piterjs_speech;
        speech_public(id: $mol_int62_string, next?: boolean): boolean;
        place(): $piterjs_place;
        afterparty(next?: string): string;
        peer_secret(peer: $mol_int62_string): $mol_crypto_secret | null;
        peer_secret_old(peer: $mol_int62_string): $mol_crypto_secret | $piterjs_secret | null;
        joined_node(): $hyoo_crowd_dict | null;
        joined_name(id: $mol_int62_string, next?: string): string;
        joined_list(): `${string}_${string}`[];
        joined_moments(): {
            [key: `${string}_${string}`]: $mol_time_moment;
        };
        joined_count(): number;
        join_allowed(): boolean;
        visitors_node(): $hyoo_crowd_list | null;
        visitor(peer: $mol_int62_string, next?: boolean): boolean;
        visitors_list(): `${string}_${string}`[];
        reviews_node(): $hyoo_crowd_dict | null;
        review(next?: string): string;
        reviews(): string;
        review_allowed(): boolean;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
        [Symbol.toPrimitive](mode: 'default' | 'number' | 'string'): string;
    }
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
        prototype: Blob;
    };
}

declare namespace $ {
    class $hyoo_crowd_blob extends $hyoo_crowd_list {
        uri(): string;
        type(next?: string): string;
        blob(next?: $mol_blob): Blob;
        buffer(next?: Uint8Array, type?: string): Uint8Array;
        str(next?: string, type?: string): string;
        json(next?: any, type?: string): any;
    }
}

declare namespace $ {
    class $piterjs_speaker extends $piterjs_model {
        donate(next?: string): string;
        contact(next?: string): string;
        photo_blob(next?: Blob): Blob;
        photo_uri(): string;
        speeches_node(): $hyoo_crowd_list;
        speeches(): $piterjs_speech[];
    }
}

declare namespace $ {
    class $piterjs_speech extends $piterjs_model {
        meetup(next?: $piterjs_meetup): $piterjs_meetup | null;
        slides(next?: string): string;
        video(next?: string): string;
        start(next?: $mol_time_moment): $mol_time_moment;
        interval(): $mol_time_interval;
        duration(): $mol_time_duration;
        speaker(): $piterjs_speaker;
        reviews_node(): $hyoo_crowd_dict | undefined;
        review(next?: string): string;
        reviews(): string;
    }
}

declare namespace $ {

	type $mol_view__dom_name__0G6T62CQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__JS029XLE = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__7072E2WP = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__N94WHG18 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__TJAIHZ2B = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__0QFNBVAG = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__X8DEM8S8 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__XF1QXMFS = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__AO4X5T5L = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__HWI727OL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__RR0OVTDG = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		field( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_calendar extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_calendar_plus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=plus.view.tree.d.ts.map
declare namespace $ {

	type $mol_time_interval__ME7SUHHC = $mol_type_enforce<
		[ ({ 
			'start': ReturnType< $mol_link_calendar['start'] >,
			'end': ReturnType< $mol_link_calendar['end'] >,
		})  ]
		,
		ConstructorParameters< typeof $mol_time_interval >
	>
	export class $mol_link_calendar extends $mol_link {
		start( ): $mol_time_moment
		end( ): $mol_time_moment
		Icon( ): $mol_icon_calendar_plus
		interval( ): $mol_time_interval
		details( ): string
		location( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_calendar extends $.$mol_link_calendar {
        uri(): string;
    }
}

declare namespace $ {

	export class $mol_icon_calendar_today extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=today.view.tree.d.ts.map
declare namespace $ {

	export class $mol_format extends $mol_string {
		mask( id: any): string
		allow( ): string
		hint( ): ReturnType< $mol_format['mask'] >
		keyboard( ): string
	}
	
}

//# sourceMappingURL=format.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_format extends $.$mol_format {
        selection([from, to]?: [number, number]): number[];
        value_changed(next?: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_trash_can extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=can.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_trash_can_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_left extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=left.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron_right extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=right.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hor extends $mol_view {
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height__8UVW787E = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__1RWJL8F1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__SF3IVVFS = $mol_type_enforce<
		ReturnType< $mol_calendar['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_hor__sub__WM1V65L1 = $mol_type_enforce<
		ReturnType< $mol_calendar['weekdays'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__holiday__069QLMLV = $mol_type_enforce<
		ReturnType< $mol_calendar['weekend'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__sub__186NDEIB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	type $mol_hor__sub__STMOHJSL = $mol_type_enforce<
		ReturnType< $mol_calendar['week_days'] >
		,
		ReturnType< $mol_hor['sub'] >
	>
	type $mol_calendar_day__ghost__W0JHJ7G2 = $mol_type_enforce<
		ReturnType< $mol_calendar['day_ghost'] >
		,
		ReturnType< $mol_calendar_day['ghost'] >
	>
	type $mol_calendar_day__holiday__OLYNJBXK = $mol_type_enforce<
		ReturnType< $mol_calendar['day_holiday'] >
		,
		ReturnType< $mol_calendar_day['holiday'] >
	>
	type $mol_calendar_day__selected__741HYMOR = $mol_type_enforce<
		ReturnType< $mol_calendar['day_selected'] >
		,
		ReturnType< $mol_calendar_day['selected'] >
	>
	type $mol_calendar_day__today__O32O2ICC = $mol_type_enforce<
		ReturnType< $mol_calendar['day_today'] >
		,
		ReturnType< $mol_calendar_day['today'] >
	>
	type $mol_calendar_day__theme__5QK09LQQ = $mol_type_enforce<
		ReturnType< $mol_calendar['day_theme'] >
		,
		ReturnType< $mol_calendar_day['theme'] >
	>
	type $mol_calendar_day__sub__NMAQC02C = $mol_type_enforce<
		ReturnType< $mol_calendar['day_content'] >
		,
		ReturnType< $mol_calendar_day['sub'] >
	>
	export class $mol_calendar extends $mol_list {
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		weekdays( ): readonly($mol_view)[]
		Weekdays( ): $mol_hor
		weekend( id: any): boolean
		weekday( id: any): string
		week_days( id: any): readonly($mol_view)[]
		day_ghost( id: any): boolean
		day_holiday( id: any): boolean
		day_selected( id: any): boolean
		day_today( id: any): boolean
		day_theme( id: any): any
		day_text( id: any): string
		day_content( id: any): readonly(any)[]
		sub( ): readonly(any)[]
		weeks( ): readonly($mol_view)[]
		weeks_count( ): number
		Weekday( id: any): $mol_calendar_day
		Week( id: any): $mol_hor
		Day( id: any): $mol_calendar_day
		month_string( ): string
		month_moment( ): $mol_time_moment
	}
	
	export class $mol_calendar_day extends $mol_view {
		holiday( ): boolean
		ghost( ): boolean
		selected( ): boolean
		today( ): boolean
		theme( ): any
		minimal_height( ): number
		minimal_width( ): number
		attr( ): ({ 
			'mol_calendar_holiday': ReturnType< $mol_calendar_day['holiday'] >,
			'mol_calendar_ghost': ReturnType< $mol_calendar_day['ghost'] >,
			'mol_calendar_selected': ReturnType< $mol_calendar_day['selected'] >,
			'mol_calendar_today': ReturnType< $mol_calendar_day['today'] >,
			'mol_theme': ReturnType< $mol_calendar_day['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=calendar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_calendar extends $.$mol_calendar {
        month_moment(): $mol_time_moment;
        title(): string;
        day_first(): $mol_time_moment;
        day_last(): $mol_time_moment;
        day_draw_from(): $mol_time_moment;
        weekdays(): $mol_view[];
        weekday(index: number): string;
        weekend(index: number): boolean;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        today(): $mol_time_moment;
        day_today(day: string): boolean;
        day_ghost(day: string): boolean;
        day_theme(day: string): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_try<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {

	type $mol_button_minor__hint__T25XOPM1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__WLE5Q350 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__OWBS3TF4 = $mol_type_enforce<
		ReturnType< $mol_date['today_click'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__ZQFI56TB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_date_value_changed__TGK6DI6D = $mol_type_enforce<
		Parameters< $mol_date['value_changed'] >[0]
		,
		Parameters< ReturnType< $mol_date['Input'] >['value_changed'] >[0]
	>
	type $mol_format__value__MG0Z1YG2 = $mol_type_enforce<
		ReturnType< $mol_date['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask__6V8Z3YHD = $mol_type_enforce<
		ReturnType< $mol_date['input_mask'] >
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__enabled__LISULAOY = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_button_minor__hint__F6GBPUVR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled__ZLCJ7182 = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click__1482WS52 = $mol_type_enforce<
		ReturnType< $mol_date['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__F3N4RRUM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__O29NSZ8S = $mol_type_enforce<
		ReturnType< $mol_date['input_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint__3HISUJZE = $mol_type_enforce<
		ReturnType< $mol_date['prev_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__0QC5UASE = $mol_type_enforce<
		ReturnType< $mol_date['prev'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__GNRMS4JM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__R0UERWAC = $mol_type_enforce<
		ReturnType< $mol_date['next_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__9Q8QJSPV = $mol_type_enforce<
		ReturnType< $mol_date['next'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__GM63JUCC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__S9NIQ7MJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_date_calendar__enabled__3KMR5KXD = $mol_type_enforce<
		ReturnType< $mol_date['enabled'] >
		,
		ReturnType< $mol_date_calendar['enabled'] >
	>
	type $mol_date_calendar__month_moment__PUC6ZEMP = $mol_type_enforce<
		ReturnType< $mol_date['month_moment'] >
		,
		ReturnType< $mol_date_calendar['month_moment'] >
	>
	type $mol_date_calendar__day_selected__ZST7CRMG = $mol_type_enforce<
		ReturnType< $mol_date['day_selected'] >
		,
		ReturnType< $mol_date_calendar['day_selected'] >
	>
	type $mol_date_calendar__day_click__KIGZTBZ5 = $mol_type_enforce<
		ReturnType< $mol_date['day_click'] >
		,
		ReturnType< $mol_date_calendar['day_click'] >
	>
	type $mol_date_calendar__head__40ZUMV50 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_date_calendar['head'] >
	>
	export class $mol_date extends $mol_pick {
		enabled( ): boolean
		today_click( next?: any ): any
		Today_icon( ): $mol_icon_calendar_today
		Today( ): $mol_button_minor
		value( next?: string ): string
		value_changed( next?: ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] > ): ReturnType< ReturnType< $mol_date['Input'] >['value_changed'] >
		input_mask( id: any): string
		Input( ): $mol_format
		clear( next?: any ): any
		Clear_icon( ): $mol_icon_trash_can_outline
		Clear( ): $mol_button_minor
		input_content( ): readonly(any)[]
		Input_row( ): $mol_view
		month_moment( ): ReturnType< $mol_date['value_moment'] >
		day_selected( id: any): boolean
		day_click( id: any, next?: any ): any
		Calendar_title( ): ReturnType< ReturnType< $mol_date['Calendar'] >['Title'] >
		prev_hint( ): string
		prev( next?: any ): any
		Prev_icon( ): $mol_icon_chevron_left
		Prev( ): $mol_button_minor
		next_hint( ): string
		next( next?: any ): any
		Next_icon( ): $mol_icon_chevron_right
		Next( ): $mol_button_minor
		Calendar_tools( ): $mol_view
		Calendar( ): $mol_date_calendar
		Icon( ): $mol_icon_calendar
		bubble_content( ): readonly(any)[]
		value_number( next?: number ): number
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
	type $mol_button_minor__title__DARI6SCD = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_text'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__event_click__ROXV8XEZ = $mol_type_enforce<
		ReturnType< $mol_date_calendar['day_click'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__minimal_height__J5PWT0ZC = $mol_type_enforce<
		number
		,
		ReturnType< $mol_button_minor['minimal_height'] >
	>
	type $mol_button_minor__enabled__UBW6RV90 = $mol_type_enforce<
		ReturnType< $mol_date_calendar['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	export class $mol_date_calendar extends $mol_calendar {
		day_click( id: any, next?: any ): any
		enabled( ): boolean
		Day_button( id: any): $mol_button_minor
		day_content( id: any): readonly(any)[]
	}
	
}

//# sourceMappingURL=date.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        trigger_content(): (string | $mol_icon_calendar)[];
        input_mask(val: string): "____-__-__ __:__" | "____-__-__ ";
        input_content(): ($mol_button_minor | $.$mol_format)[];
        value(val?: string): string;
        value_moment(next?: $mol_time_moment): $mol_time_moment;
        value_number(next?: number): number;
        value_moment_today(): $mol_time_moment;
        clear(): void;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
        today_click(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        grid: RegExp;
        cut: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code: RegExp;
        insert: RegExp;
        delete: RegExp;
        embed: RegExp;
        link: RegExp;
        'image-link': RegExp;
        'text-link': RegExp;
        'text-link-http': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-indent': RegExp;
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-sexpr': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-word': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {

	type $mol_view__sub__B0EFS3W9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type__NFU8FWDS = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack__NOJXUP18 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle__40ZCJDYE = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack__HZB9R5XW = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle__OAEYIQCG = $mol_type_enforce<
		ReturnType< $mol_text_code_row['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri__UOLYUI96 = $mol_type_enforce<
		ReturnType< $mol_text_code_row['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_row extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code_row extends $.$mol_text_code_row {
        maximal_width(): number;
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        tokens(path: number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        sub(): $mol_view[];
        row_content(path: number[]): $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        token_uri(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        find_token_pos([offset, ...path]: number[]): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob__TGTSKLPK = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__RTSJPKRB = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {

	type $mol_text_code_row__numb_showed__PL4H51JZ = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__numb__Y36CNZTE = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_row['numb'] >
	>
	type $mol_text_code_row__text__STT6WMWG = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__syntax__2AGNZ3LR = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_text_code_row__uri_resolve__LOPCFKB9 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__highlight__TEHYPJGT = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_list__render_visible_only__52H20I2Z = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows__G8E1Q3CY = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint__ILDLM3AD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text__1GPR1X44 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_row
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $.$mol_text_code_row[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): any;
        sub(): ($.$mol_list | $.$mol_button_copy)[];
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        uri_base(): string;
        uri_resolve(uri: string): string;
        text_export(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_textarea_edit__value__C3N3YK0W = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_textarea_edit['value'] >
	>
	type $mol_textarea_edit__hint__8ZTF3DJD = $mol_type_enforce<
		ReturnType< $mol_textarea['hint'] >
		,
		ReturnType< $mol_textarea_edit['hint'] >
	>
	type $mol_textarea_edit__enabled__9Y6KSWD1 = $mol_type_enforce<
		ReturnType< $mol_textarea['enabled'] >
		,
		ReturnType< $mol_textarea_edit['enabled'] >
	>
	type $mol_textarea_edit__spellcheck__0BW0OBH5 = $mol_type_enforce<
		ReturnType< $mol_textarea['spellcheck'] >
		,
		ReturnType< $mol_textarea_edit['spellcheck'] >
	>
	type $mol_textarea_edit__length_max__Q1OBFAU3 = $mol_type_enforce<
		ReturnType< $mol_textarea['length_max'] >
		,
		ReturnType< $mol_textarea_edit['length_max'] >
	>
	type $mol_textarea_edit__selection__PLAPP4ZD = $mol_type_enforce<
		ReturnType< $mol_textarea['selection'] >
		,
		ReturnType< $mol_textarea_edit['selection'] >
	>
	type $mol_textarea_edit__submit__BX5BKDX8 = $mol_type_enforce<
		ReturnType< $mol_textarea['submit'] >
		,
		ReturnType< $mol_textarea_edit['submit'] >
	>
	type $mol_textarea_edit__submit_with_ctrl__0QJ5YLSZ = $mol_type_enforce<
		ReturnType< $mol_textarea['submit_with_ctrl'] >
		,
		ReturnType< $mol_textarea_edit['submit_with_ctrl'] >
	>
	type $mol_text_code__text__PDAE5QM2 = $mol_type_enforce<
		ReturnType< $mol_textarea['value'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__render_visible_only__7PX1QVQB = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code['render_visible_only'] >
	>
	type $mol_text_code__row_numb__0ZAVPEPG = $mol_type_enforce<
		ReturnType< $mol_textarea['row_numb'] >
		,
		ReturnType< $mol_text_code['row_numb'] >
	>
	type $mol_text_code__sidebar_showed__6AQ214C4 = $mol_type_enforce<
		ReturnType< $mol_textarea['sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_text_code__highlight__2GDTN10T = $mol_type_enforce<
		ReturnType< $mol_textarea['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	export class $mol_textarea extends $mol_stack {
		clickable( next?: boolean ): boolean
		sidebar_showed( ): boolean
		press( next?: any ): any
		hover( next?: any ): any
		value( next?: string ): string
		hint( ): string
		enabled( ): boolean
		spellcheck( ): boolean
		length_max( ): number
		selection( next?: readonly(number)[] ): readonly(number)[]
		bring( ): ReturnType< ReturnType< $mol_textarea['Edit'] >['bring'] >
		submit( next?: any ): any
		submit_with_ctrl( ): boolean
		Edit( ): $mol_textarea_edit
		row_numb( id: any): number
		highlight( ): string
		View( ): $mol_text_code
		attr( ): ({ 
			'mol_textarea_clickable': ReturnType< $mol_textarea['clickable'] >,
			'mol_textarea_sidebar_showed': ReturnType< $mol_textarea['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		event( ): ({ 
			keydown( next?: ReturnType< $mol_textarea['press'] > ): ReturnType< $mol_textarea['press'] >,
			pointermove( next?: ReturnType< $mol_textarea['hover'] > ): ReturnType< $mol_textarea['hover'] >,
		}) 
		sub( ): readonly(any)[]
		symbols_alt( ): Record<string, string>
		symbols_alt_ctrl( ): Record<string, string>
		symbols_alt_shift( ): Record<string, string>
	}
	
	export class $mol_textarea_edit extends $mol_string {
		dom_name( ): string
		enter( ): string
		field( ): ({ 
			'scrollTop': number,
		})  & ReturnType< $mol_string['field'] >
	}
	
}

//# sourceMappingURL=textarea.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        indent_inc(): void;
        indent_dec(): void;
        symbol_insert(event: KeyboardEvent): void;
        clickable(next?: boolean): boolean;
        hover(event: PointerEvent): void;
        press(event: KeyboardEvent): void;
        row_numb(index: number): number;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height__2TSJL4Z9 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__5843BQD6 = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__WI3GXHRH = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__IEVO78G9 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub__S0I9Q91A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_form_field extends $mol_labeler {
		name( ): string
		bid( ): string
		Bid( ): $mol_view
		control( ): any
		bids( ): readonly(string)[]
		label( ): readonly(any)[]
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=field.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form_field extends $.$mol_form_field {
        bid(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_minus extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=minus.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_string__type__9DFANK2G = $mol_type_enforce<
		ReturnType< $mol_number['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__value__VEGO95PF = $mol_type_enforce<
		ReturnType< $mol_number['value_string'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__AWYP63EP = $mol_type_enforce<
		ReturnType< $mol_number['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__enabled__4V3X3KPY = $mol_type_enforce<
		ReturnType< $mol_number['string_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__submit__7CLXGHM6 = $mol_type_enforce<
		ReturnType< $mol_number['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_button_minor__event_click__MAFJN6H4 = $mol_type_enforce<
		ReturnType< $mol_number['event_dec'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled__6PD5PQPX = $mol_type_enforce<
		ReturnType< $mol_number['dec_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub__OVQ8WWLC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__event_click__N81VBR5A = $mol_type_enforce<
		ReturnType< $mol_number['event_inc'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__enabled__VVA4B6RR = $mol_type_enforce<
		ReturnType< $mol_number['inc_enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__sub__TKB0QUEY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_number extends $mol_view {
		precision( ): number
		type( ): string
		value_string( next?: string ): string
		hint( ): string
		string_enabled( ): ReturnType< $mol_number['enabled'] >
		submit( next?: any ): any
		String( ): $mol_string
		event_dec( next?: any ): any
		dec_enabled( ): ReturnType< $mol_number['enabled'] >
		dec_icon( ): $mol_icon_minus
		Dec( ): $mol_button_minor
		event_inc( next?: any ): any
		inc_enabled( ): ReturnType< $mol_number['enabled'] >
		inc_icon( ): $mol_icon_plus
		Inc( ): $mol_button_minor
		precision_view( ): ReturnType< $mol_number['precision'] >
		precision_change( ): ReturnType< $mol_number['precision'] >
		value_min( ): number
		value_max( ): number
		value( next?: number ): number
		enabled( ): boolean
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=number.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        value_limited(next?: any): number;
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): string;
        dec_enabled(): boolean;
        inc_enabled(): boolean;
    }
}

declare namespace $ {

	export class $mol_icon_heart extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=heart.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_heart_box extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_heart_box_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__dom_name__HE6LD9DZ = $mol_type_enforce<
		ReturnType< $mol_section['title_dom_name'] >
		,
		ReturnType< $mol_paragraph['dom_name'] >
	>
	type $mol_paragraph__title__1BMOJQ2K = $mol_type_enforce<
		ReturnType< $mol_section['title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub__AARX0PPJ = $mol_type_enforce<
		ReturnType< $mol_section['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__K183E920 = $mol_type_enforce<
		ReturnType< $mol_section['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__CPW4MXVM = $mol_type_enforce<
		ReturnType< $mol_section['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_section extends $mol_list {
		title_dom_name( ): string
		Title( ): $mol_paragraph
		tools( ): readonly(any)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		level( ): number
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=section.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_section extends $.$mol_section {
        title_dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_float extends $mol_view {
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	type $mol_grid_table__sub__R8U39ACT = $mol_type_enforce<
		ReturnType< $mol_grid['rows'] >
		,
		ReturnType< $mol_grid_table['sub'] >
	>
	type $mol_dimmer__needle__E8OS63NR = $mol_type_enforce<
		ReturnType< $mol_grid['needle'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__DNW25XRS = $mol_type_enforce<
		ReturnType< $mol_grid['cell_value'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_grid_row__cells__BF43SXNX = $mol_type_enforce<
		ReturnType< $mol_grid['head_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_row__minimal_height__UQ7KVVYT = $mol_type_enforce<
		ReturnType< $mol_grid['row_height'] >
		,
		ReturnType< $mol_grid_row['minimal_height'] >
	>
	type $mol_grid_row__minimal_width__DIIEWUYB = $mol_type_enforce<
		ReturnType< $mol_grid['minimal_width'] >
		,
		ReturnType< $mol_grid_row['minimal_width'] >
	>
	type $mol_grid_row__cells__7T5VW7RP = $mol_type_enforce<
		ReturnType< $mol_grid['cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_cell__sub__OHAJ06N3 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_text'] >
		,
		ReturnType< $mol_grid_cell['sub'] >
	>
	type $mol_grid_number__sub__IP81AJ1G = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_number'] >
		,
		ReturnType< $mol_grid_number['sub'] >
	>
	type $mol_float__dom_name__041EC48L = $mol_type_enforce<
		string
		,
		ReturnType< $mol_float['dom_name'] >
	>
	type $mol_float__sub__MSIU7MRX = $mol_type_enforce<
		ReturnType< $mol_grid['col_head_content'] >
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_check_expand__level__N97DKLF3 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_level'] >
		,
		ReturnType< $mol_check_expand['level'] >
	>
	type $mol_check_expand__label__K7E6YJW3 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_check_expand__expanded__O9CMB102 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	export class $mol_grid extends $mol_view {
		rows( ): readonly($mol_view)[]
		Table( ): $mol_grid_table
		head_cells( ): readonly($mol_view)[]
		cells( id: any): readonly($mol_view)[]
		cell_content( id: any): readonly($mol_view_content)[]
		cell_content_text( id: any): ReturnType< $mol_grid['cell_content'] >
		cell_content_number( id: any): ReturnType< $mol_grid['cell_content'] >
		col_head_content( id: any): readonly($mol_view_content)[]
		cell_level( id: any): number
		cell_expanded( id: any, next?: boolean ): boolean
		needle( ): string
		cell_value( id: any): string
		Cell_dimmer( id: any): $mol_dimmer
		row_height( ): number
		row_ids( ): readonly(string[])[]
		row_id( id: any): any
		col_ids( ): readonly(any)[]
		records( ): Record<string, any>
		record( id: any): any
		hierarchy( ): any
		hierarchy_col( ): string
		minimal_width( ): number
		sub( ): readonly(any)[]
		Head( ): $mol_grid_row
		Row( id: any): $mol_grid_row
		Cell( id: any): $mol_view
		cell( id: any): any
		Cell_text( id: any): $mol_grid_cell
		Cell_number( id: any): $mol_grid_number
		Col_head( id: any): $mol_float
		Cell_branch( id: any): $mol_check_expand
		Cell_content( id: any): readonly(any)[]
	}
	
	export class $mol_grid_table extends $mol_list {
	}
	
	export class $mol_grid_row extends $mol_view {
		cells( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_grid_row['cells'] >
	}
	
	export class $mol_grid_cell extends $mol_view {
		minimal_height( ): number
	}
	
	export class $mol_grid_number extends $mol_grid_cell {
	}
	
}

//# sourceMappingURL=grid.view.tree.d.ts.map
declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        cell_content_text(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		field( ): Record<string, any> & ReturnType< $mol_view['field'] >
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_image extends $.$mol_image {
        natural_width(next?: null): number;
        natural_height(next?: null): number;
        load(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__uri__8GKIMF2I = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title__8FFZVXON = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link__uri__F13UM2OF = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__2KMOU7CB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		mime( ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		uri( next?: string ): string
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'data': ReturnType< $mol_embed_native['uri'] >,
			'type': ReturnType< $mol_embed_native['mime'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_native extends $.$mol_embed_native {
        window(): Window;
        load(frame: HTMLIFrameElement): Promise<Window>;
        uri_resource(): string;
        message_listener(): $mol_dom_listener;
        message_receive(event?: MessageEvent<[string, string]>): void;
        uri_change(event: MessageEvent<[string, string]>): void;
        auto(): (Window | $mol_dom_listener)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_youtube extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		uri( next?: string ): string
		html( ): any
		allow( ): string
		dom_name( ): string
		attr( ): ({ 
			'data': any,
			'type': any,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
			'allow': ReturnType< $mol_frame['allow'] >,
		})  & ReturnType< $mol_embed_native['attr'] >
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_frame extends $.$mol_frame {
        window(): any;
        allow(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__title__JIGXT6FL = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__3T7EUZAT = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['video_preview'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_frame__title__2X50L7JQ = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['title'] >
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri__727BFA4V = $mol_type_enforce<
		ReturnType< $mol_embed_youtube['video_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_embed_youtube extends $mol_check {
		active( next?: boolean ): boolean
		title( ): string
		video_preview( ): string
		Image( ): $mol_image
		Hint( ): $mol_icon_youtube
		video_embed( ): string
		Frame( ): $mol_frame
		uri( ): string
		video_id( ): string
		checked( next?: ReturnType< $mol_embed_youtube['active'] > ): ReturnType< $mol_embed_youtube['active'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_youtube extends $.$mol_embed_youtube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
        sub(): $.$mol_frame[] | ($.$mol_image | $mol_icon_youtube)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__title__FSO7JDEC = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri__J3ZSF4J6 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_embed_native__title__5NQK6MF7 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri__E0AWPOV3 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_youtube__title__FB1UX2L8 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_youtube['title'] >
	>
	type $mol_embed_youtube__uri__AAD2TPX8 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_youtube['uri'] >
	>
	export class $mol_embed_any extends $mol_view {
		title( ): string
		uri( ): string
		Image( ): $mol_image
		Object( ): $mol_embed_native
		Youtube( ): $mol_embed_youtube
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_any extends $.$mol_embed_any {
        type(): "object" | "image" | "youtube";
        sub(): $.$mol_image[] | $.$mol_embed_youtube[] | $.$mol_embed_native[];
    }
}

declare namespace $ {

	type $mol_paragraph__sub__NNRS5M6D = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_text__uri_resolve__VDJ3AV75 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__9Q3X04ED = $mol_type_enforce<
		ReturnType< $mol_text['quote_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight__3Z1VLWK5 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__auto_scroll__XI5BLQBQ = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text_list__uri_resolve__YE642MQO = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_list['uri_resolve'] >
	>
	type $mol_text_list__type__E4IUMEKN = $mol_type_enforce<
		ReturnType< $mol_text['list_type'] >
		,
		ReturnType< $mol_text_list['type'] >
	>
	type $mol_text_list__text__MWRYMZP4 = $mol_type_enforce<
		ReturnType< $mol_text['list_text'] >
		,
		ReturnType< $mol_text_list['text'] >
	>
	type $mol_text_list__highlight__4TP6A2TY = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_list['highlight'] >
	>
	type $mol_text_header__minimal_height__A62EG3E7 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_text_header['minimal_height'] >
	>
	type $mol_text_header__level__8D1TPUJM = $mol_type_enforce<
		ReturnType< $mol_text['header_level'] >
		,
		ReturnType< $mol_text_header['level'] >
	>
	type $mol_text_header__content__UPJMC754 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_text_header['content'] >
	>
	type $mol_text_header__arg__JDTQBAKM = $mol_type_enforce<
		ReturnType< $mol_text['header_arg'] >
		,
		ReturnType< $mol_text_header['arg'] >
	>
	type $mol_text_code__text__GMFOKV8Q = $mol_type_enforce<
		ReturnType< $mol_text['pre_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__highlight__G7SU9O4L = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__uri_resolve__TCFADFCQ = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	type $mol_text_code__sidebar_showed__SS0CUOBM = $mol_type_enforce<
		ReturnType< $mol_text['pre_sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_view__dom_name__L7JFE9BI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_grid__head_cells__WVNUQESZ = $mol_type_enforce<
		ReturnType< $mol_text['table_head_cells'] >
		,
		ReturnType< $mol_grid['head_cells'] >
	>
	type $mol_grid__rows__XXGKYDIS = $mol_type_enforce<
		ReturnType< $mol_text['table_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells__XW10QC9J = $mol_type_enforce<
		ReturnType< $mol_text['table_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll__AX4XBH0B = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight__ANTJ8EYU = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve__TY19YJJP = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__Y4NVUVTP = $mol_type_enforce<
		ReturnType< $mol_text['table_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_grid__rows__ZMDU9OIQ = $mol_type_enforce<
		ReturnType< $mol_text['grid_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells__ELPK4K0U = $mol_type_enforce<
		ReturnType< $mol_text['grid_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll__47WZD3FY = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight__FHIPK78Q = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve__U26RLEF7 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text__UMYPWSWD = $mol_type_enforce<
		ReturnType< $mol_text['grid_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_dimmer__dom_name__PKVU87RY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['dom_name'] >
	>
	type $mol_dimmer__needle__6MXZQ28G = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack__5CG7GGUQ = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text_span__dom_name__SEWRRPE2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text_span['dom_name'] >
	>
	type $mol_text_span__type__N2YFW0NX = $mol_type_enforce<
		ReturnType< $mol_text['line_type'] >
		,
		ReturnType< $mol_text_span['type'] >
	>
	type $mol_text_span__sub__TG6RUU4A = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_text_span['sub'] >
	>
	type $mol_text_code_row__numb_showed__9QXYTKXR = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code_row['numb_showed'] >
	>
	type $mol_text_code_row__highlight__YLPI5WP1 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code_row['highlight'] >
	>
	type $mol_text_code_row__text__KTO41LH9 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_text_code_row['text'] >
	>
	type $mol_text_code_row__uri_resolve__VVPR5CQJ = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code_row['uri_resolve'] >
	>
	type $mol_text_code_row__syntax__M16A6SEL = $mol_type_enforce<
		ReturnType< $mol_text['code_syntax'] >
		,
		ReturnType< $mol_text_code_row['syntax'] >
	>
	type $mol_link_iconed__uri__BAQTDX5W = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content__2VBSEM32 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_link_iconed__uri__LH9BO0DA = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content__B07VX00S = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_embed_any__uri__XK31J9ZM = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_embed_any['uri'] >
	>
	type $mol_embed_any__title__2FQHZGSO = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_embed_any['title'] >
	>
	export class $mol_text extends $mol_list {
		auto_scroll( ): any
		block_content( id: any): readonly(any)[]
		uri_resolve( id: any): string
		quote_text( id: any): string
		highlight( ): string
		list_type( id: any): string
		list_text( id: any): string
		header_level( id: any): number
		header_arg( id: any): Record<string, any>
		pre_text( id: any): string
		code_sidebar_showed( ): boolean
		pre_sidebar_showed( ): ReturnType< $mol_text['code_sidebar_showed'] >
		table_head_cells( id: any): readonly(any)[]
		table_rows( id: any): readonly(any)[]
		table_cells( id: any): readonly(any)[]
		table_cell_text( id: any): string
		grid_rows( id: any): readonly(any)[]
		grid_cells( id: any): readonly(any)[]
		grid_cell_text( id: any): string
		line_text( id: any): string
		line_type( id: any): string
		line_content( id: any): readonly(any)[]
		code_syntax( ): any
		link_uri( id: any): string
		link_host( id: any): string
		uri_base( ): string
		text( ): string
		param( ): string
		flow_tokens( ): readonly(any)[]
		block_text( id: any): string
		auto( ): readonly(any)[]
		Paragraph( id: any): $mol_paragraph
		Quote( id: any): $mol_text
		List( id: any): $mol_text_list
		item_index( id: any): number
		Header( id: any): $mol_text_header
		Pre( id: any): $mol_text_code
		Cut( id: any): $mol_view
		Table( id: any): $mol_grid
		Table_row( id: any): $mol_grid_row
		Table_cell( id: any): $mol_text
		Grid( id: any): $mol_grid
		Grid_row( id: any): $mol_grid_row
		Grid_cell( id: any): $mol_text
		String( id: any): $mol_dimmer
		Span( id: any): $mol_text_span
		Code_line( id: any): $mol_text_code_row
		Link( id: any): $mol_link_iconed
		Link_http( id: any): $mol_link_iconed
		Embed( id: any): $mol_embed_any
	}
	
	type $mol_link__arg__YZ11D3KQ = $mol_type_enforce<
		ReturnType< $mol_text_header['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__2ZC7P542 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__RTYOTVZ1 = $mol_type_enforce<
		ReturnType< $mol_text_header['content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_text_header extends $mol_paragraph {
		arg( ): Record<string, any>
		content( ): readonly(any)[]
		Link( ): $mol_link
		level( ): number
		sub( ): readonly(any)[]
	}
	
	export class $mol_text_span extends $mol_paragraph {
		type( ): string
		dom_name( ): string
		attr( ): ({ 
			'mol_text_type': ReturnType< $mol_text_span['type'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        flow_tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        block_type(index: number): string;
        rows(): ($mol_view | $.$mol_paragraph | $.$mol_text_code | $.$mol_grid)[];
        param(): string;
        header_level(index: number): number;
        header_arg(index: number): {
            [x: string]: string;
        };
        list_type(index: number): string;
        item_index(index: number): number;
        pre_text(index: number): string;
        quote_text(index: number): string;
        list_text(index: number): string;
        cell_content(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $.$mol_text[];
        table_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        table_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        grid_content(indexBlock: number): string[][];
        grid_rows(blockId: number): $mol_grid_row[];
        grid_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        grid_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        uri_base(): string;
        uri_base_abs(): URL;
        uri_resolve(uri: string): string;
        code_syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        block_text(index: number): string;
        block_content(index: number): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        line_tokens(path: readonly number[]): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        line_token(path: readonly number[]): {
            name: string;
            found: string;
            chunks: string[];
        };
        line_type(path: readonly number[]): string;
        line_text(path: readonly number[]): string;
        line_content(path: readonly number[]): ($.$mol_dimmer | $.$mol_text_code_row | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        link_uri(path: readonly number[]): string;
        link_host(path: readonly number[]): string;
        auto_scroll(): void;
    }
    class $mol_text_header extends $.$mol_text_header {
        dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_gift extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=gift.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_gift_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_eye extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=eye.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=account.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account_group extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_account_group_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chart_bar extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chart_bar_stacked extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=stacked.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_string_button extends $mol_string {
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $piterjs_image extends $mol_image {
		link( ): string
		uri( ): ReturnType< $piterjs_image['link'] >
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $ {

	type $piterjs_image__link__IIQ2AQUU = $mol_type_enforce<
		ReturnType< $piterjs_speech_snippet['photo'] >
		,
		ReturnType< $piterjs_image['link'] >
	>
	type $mol_view__sub__2N15MZRE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__GVH7QXQ2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__ORTU6EOX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__Y9QVUDDE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__sub__SK9WRKJ4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	export class $piterjs_speech_snippet extends $mol_link {
		id( ): string
		photo( ): string
		Photo( ): $piterjs_image
		speaker_title( ): string
		Speaker_title( ): $mol_view
		time( ): string
		Time( ): $mol_view
		Addon( ): $mol_view
		title( ): string
		Title( ): $mol_view
		Info( ): $mol_list
		arg( ): ({ 
			'speech': ReturnType< $piterjs_speech_snippet['id'] >,
			'place': any,
			'video': any,
		}) 
		speech( ): $piterjs_speech
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=snippet.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_speech_snippet extends $.$piterjs_speech_snippet {
        id(): `${string}_${string}`;
        photo(): string;
        speaker_title(): string;
        title(): string;
        time(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_row extends $mol_view {
	}
	
}

//# sourceMappingURL=row.view.tree.d.ts.map
declare namespace $ {

	type $mol_list__sub__2XNTGRPB = $mol_type_enforce<
		ReturnType< $mol_form['body'] >
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_row__sub__YQR7AKWC = $mol_type_enforce<
		ReturnType< $mol_form['foot'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_form extends $mol_list {
		keydown( next?: any ): any
		form_fields( ): readonly($mol_form_field)[]
		body( ): ReturnType< $mol_form['form_fields'] >
		Body( ): $mol_list
		buttons( ): readonly($mol_view)[]
		foot( ): ReturnType< $mol_form['buttons'] >
		Foot( ): $mol_row
		submit_allowed( ): boolean
		submit_blocked( ): boolean
		event( ): ({ 
			keydown( next?: ReturnType< $mol_form['keydown'] > ): ReturnType< $mol_form['keydown'] >,
		})  & ReturnType< $mol_list['event'] >
		submit( next?: any ): any
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=form.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        form_fields(): readonly $mol_form_field[];
        submit_allowed(): boolean;
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text_list_item__index__3N2WRFAA = $mol_type_enforce<
		ReturnType< $mol_text_list['item_index'] >
		,
		ReturnType< $mol_text_list_item['index'] >
	>
	type $mol_text_list_item__sub__FIVMGUDK = $mol_type_enforce<
		ReturnType< $mol_text_list['block_content'] >
		,
		ReturnType< $mol_text_list_item['sub'] >
	>
	export class $mol_text_list extends $mol_text {
		type( ): string
		auto_scroll( ): any
		attr( ): ({ 
			'mol_text_list_type': ReturnType< $mol_text_list['type'] >,
		})  & ReturnType< $mol_text['attr'] >
		Paragraph( id: any): $mol_text_list_item
	}
	
	export class $mol_text_list_item extends $mol_paragraph {
		index( ): number
		attr( ): ({ 
			'mol_text_list_item_index': ReturnType< $mol_text_list_item['index'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $piterjs_meetup_page_title__3I8MGE03 = $mol_type_enforce<
		Parameters< $piterjs_meetup_page['title'] >[0]
		,
		Parameters< ReturnType< $piterjs_meetup_page['meetup'] >['title'] >[0]
	>
	type $piterjs_meetup_page_description__LM1OQVA6 = $mol_type_enforce<
		Parameters< $piterjs_meetup_page['description'] >[0]
		,
		Parameters< ReturnType< $piterjs_meetup_page['meetup'] >['description'] >[0]
	>
	type $piterjs_meetup_page_afterparty__WZSS4HHA = $mol_type_enforce<
		Parameters< $piterjs_meetup_page['afterparty'] >[0]
		,
		Parameters< ReturnType< $piterjs_meetup_page['meetup'] >['afterparty'] >[0]
	>
	type $piterjs_meetup_page_start__ZBPYF0IC = $mol_type_enforce<
		Parameters< $piterjs_meetup_page['start'] >[0]
		,
		Parameters< ReturnType< $piterjs_meetup_page['meetup'] >['start'] >[0]
	>
	type $piterjs_meetup_page_review__FGIXL4Q9 = $mol_type_enforce<
		Parameters< $piterjs_meetup_page['review'] >[0]
		,
		Parameters< ReturnType< $piterjs_meetup_page['meetup'] >['review'] >[0]
	>
	type $mol_time_duration__2C54HXMS = $mol_type_enforce<
		[ string ]
		,
		ConstructorParameters< typeof $mol_time_duration >
	>
	type $mol_time_interval__IUVLQC0E = $mol_type_enforce<
		[ ({ 
			'start': ReturnType< $piterjs_meetup_page['start'] >,
			'duration': ReturnType< $piterjs_meetup_page['duration'] >,
		})  ]
		,
		ConstructorParameters< typeof $mol_time_interval >
	>
	type $mol_link_calendar__title__2U161NBG = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['subscribe_title'] >
		,
		ReturnType< $mol_link_calendar['title'] >
	>
	type $mol_link_calendar__details__DESBGOJ7 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['subscribe_details'] >
		,
		ReturnType< $mol_link_calendar['details'] >
	>
	type $mol_link_calendar__location__346MUT8D = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['address'] >
		,
		ReturnType< $mol_link_calendar['location'] >
	>
	type $mol_link_calendar__interval__CQY6OB0X = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['interval'] >
		,
		ReturnType< $mol_link_calendar['interval'] >
	>
	type $mol_date__value_moment__O41Y1GG2 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['start'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $mol_date__enabled__5MTGU36S = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['editing'] >
		,
		ReturnType< $mol_date['enabled'] >
	>
	type $mol_date__align__NDXI3PF5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_date['align'] >
	>
	type $mol_link__arg__81YUEAZ7 = $mol_type_enforce<
		({ 
			'meetup': any,
			'speech': any,
			'place': any,
			'video': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__183QZIYJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_textarea__hint__1ZDADED1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__XMJWVRPA = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['description'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled__F5K1D3QL = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['editing'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_link__arg__17FKE96M = $mol_type_enforce<
		({ 
			'video': string,
			'place': any,
			'speech': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__FMUNJNBD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__DDAND8Y1 = $mol_type_enforce<
		({ 
			'video': any,
			'place': string,
			'speech': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__FGKWN5J7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_view__sub__7VYOHHN0 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['links'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__96GENHUV = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['speeches'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_minor__click__2PYOVNA6 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['speech_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__H2N1VD1W = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_textarea__hint__XLNOP0TM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__LBGEM0WX = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['afterparty'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled__QX7SHHRV = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['editing'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_form_field__name__I33F97JC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__N14SHM8O = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Afterparty'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_number__hint__E4CYJFMZ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_number['hint'] >
	>
	type $mol_number__value__AMNFUAN2 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['capacity'] >
		,
		ReturnType< $mol_number['value'] >
	>
	type $mol_number__enabled__O4N50U4F = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['editing'] >
		,
		ReturnType< $mol_number['enabled'] >
	>
	type $mol_form_field__name__MP1SCT2X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__2J8HDQ1U = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Capacity'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_button_minor__title__GKKNZFWF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__LHAOCKFL = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['capacity_cut'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__I2CLX56U = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__XH9BJY0Z = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__FCX50SVR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paragraph__title__TFJ2EPYA = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['free_space'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_string__value__HQG7E4TS = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['name_real'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__SPUXHYPL = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['profile_editable'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_form_field__name__5JHBI4X0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__G24763IG = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['profile_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__IWGJT8SH = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Name_real'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_check_box__checked__6I8PD9AX = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['joined'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__enabled__M9FT4MZ9 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['join_enabled'] >
		,
		ReturnType< $mol_check_box['enabled'] >
	>
	type $mol_check_box__title__567FP6Q0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_paragraph__title__BIC5PABP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub__3CBWV9R7 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['joined_form'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_section__title__G51NZ16G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_section['title'] >
	>
	type $mol_section__level__N1YZ5CDC = $mol_type_enforce<
		number
		,
		ReturnType< $mol_section['level'] >
	>
	type $mol_section__tools__DX65PSIR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_section['tools'] >
	>
	type $mol_section__content__Q18H9ZWQ = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['join_content'] >
		,
		ReturnType< $mol_section['content'] >
	>
	type $mol_text__text__R5PYS84E = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_link__target__Z3J88TH5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__hint__FF1Y062M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__uri__ZU7JMAWJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__MZ6ACBKC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_textarea__hint__LWNORBG7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__5UNJBYDI = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['review'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_view__sub__8UNKP2YV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__DD2J1TM6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_form_field__name__R0TZJL35 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Bid__WT7DOYR3 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Donate'] >
		,
		ReturnType< $mol_form_field['Bid'] >
	>
	type $mol_form_field__Content__8TYMLBSK = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Review_block'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_text__text__DXN102KQ = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['reviews'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows__POB9VMQ4 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_check_icon__checked__MPVBSM1I = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['meetup_public'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__THCWZ1P5 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Public_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint__F2YTW4M4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__1CB5YFM9 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Editing_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__WE3A0FKK = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['editing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__checked__1SJAPMIC = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['rights'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__OB96FTXE = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['Rights_toggle_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_link__arg__Q3DBQ2KD = $mol_type_enforce<
		({ 
			'guests': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__CFV4BE28 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__H22PQB2T = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__BAS7AMVS = $mol_type_enforce<
		({ 
			'stats': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint__MNES0JE0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__Z29S3RP5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_string_button__value__4HZVG8D6 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['title'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_string_button__enabled__V1S6JGHU = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['editing'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	type $mol_string_button__hint__B4FMMVJR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_button['hint'] >
	>
	type $piterjs_speech_snippet__speech__75J5RNBC = $mol_type_enforce<
		ReturnType< $piterjs_meetup_page['speech'] >
		,
		ReturnType< $piterjs_speech_snippet['speech'] >
	>
	export class $piterjs_meetup_page extends $mol_page {
		title( next?: ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['title'] > ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['title'] >
		description( next?: ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['description'] > ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['description'] >
		afterparty( next?: ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['afterparty'] > ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['afterparty'] >
		start( next?: ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['start'] > ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['start'] >
		joined_count( ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['joined_count'] >
		join_allowed( ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['join_allowed'] >
		review_allowed( ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['review_allowed'] >
		editable( ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['editable'] >
		review( next?: ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['review'] > ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['review'] >
		reviews( ): ReturnType< ReturnType< $piterjs_meetup_page['meetup'] >['reviews'] >
		subscribe_title( ): string
		subscribe_details( ): string
		duration( ): $mol_time_duration
		interval( ): $mol_time_interval
		Subscribe( ): $mol_link_calendar
		Start( ): $mol_date
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		Description( ): $mol_textarea
		Video( ): $mol_link
		Place( ): $mol_link
		links( ): readonly(any)[]
		Links( ): $mol_view
		speeches( ): readonly(any)[]
		Speeches( ): $mol_list
		speech_add( next?: any ): any
		Speech_add_icon( ): $mol_icon_plus
		Speech_add( ): $mol_button_minor
		Afterparty( ): $mol_textarea
		Afterparty_field( ): $mol_form_field
		capacity( next?: number ): number
		Capacity( ): $mol_number
		Capacity_field( ): $mol_form_field
		capacity_cut( next?: any ): any
		Capacity_cut_icon( ): $mol_icon_heart_box_outline
		Capacity_cut( ): $mol_button_minor
		Capacity_block( ): $mol_view
		Hidden_fields( ): $mol_list
		free_space( ): string
		Free_space( ): $mol_paragraph
		profile_bid( ): string
		name_real( next?: string ): string
		profile_editable( ): boolean
		Name_real( ): $mol_string
		Profile( ): $mol_form_field
		joined( next?: boolean ): boolean
		join_enabled( ): boolean
		Joined( ): $mol_check_box
		Joined_confirm( ): $mol_paragraph
		joined_form( ): readonly(any)[]
		Joined_form( ): $mol_view
		join_content( ): readonly(any)[]
		Join( ): $mol_section
		Joined_bid( ): $mol_text
		Donate_icon( ): $mol_icon_gift_outline
		Donate( ): $mol_link
		Review( ): $mol_textarea
		Review_hint( ): $mol_view
		Review_block( ): $mol_list
		Review_field( ): $mol_form_field
		Reviews( ): $mol_text
		content( ): readonly(any)[]
		Content( ): $mol_list
		speech( id: any): $piterjs_speech
		meetup_public( next?: boolean ): boolean
		Public_icon( ): $mol_icon_eye
		Public( ): $mol_check_icon
		Editing_icon( ): $mol_icon_settings_outline
		editing( next?: boolean ): boolean
		Editing( ): $mol_check_icon
		rights( next?: boolean ): boolean
		Rights_toggle_icon( ): $mol_icon_shield_account
		Rights_toggle( ): $mol_check_icon
		Guests_link_icon( ): $mol_icon_account_group_outline
		Guests_link( ): $mol_link
		Stats_link_icon( ): $mol_icon_chart_bar_stacked
		Stats_link( ): $mol_link
		meetup( ): $piterjs_meetup
		address( ): string
		Title( ): $mol_string_button
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		Speech( id: any): $piterjs_speech_snippet
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_meetup_page extends $.$piterjs_meetup_page {
        subscribe_title(): string;
        subscribe_details(): string;
        interval(): $mol_time_interval;
        Subscribe(): $.$mol_link_calendar;
        video(): string;
        address(): string;
        coords(): $mol_vector_2d<number>;
        content(): ($mol_view | $.$mol_textarea)[];
        links(): $.$mol_link[];
        speeches(): $.$piterjs_speech_snippet[];
        speech(index: number): $piterjs_speech;
        speech_add(): void;
        foot(): readonly any[];
        capacity(next?: number): number;
        capacity_cut(): void;
        profile_editable(): boolean;
        person_name(): string;
        profile_bid(): "" | "Обязательно" | "От двух слов";
        join_enabled(): boolean;
        join_content(): $mol_view[];
        joined_form(): ($.$mol_paragraph | $mol_check_box)[];
        free_space(): string;
        name_real(next?: string): string;
        joined(next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_download extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_download extends $.$mol_button_download {
        uri(): string;
        click(): void;
    }
}

declare namespace $ {

	export class $mol_button_download extends $mol_button_minor {
		Icon( ): $mol_icon_download
		title( ): string
		blob( ): any
		uri( ): string
		file_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=download.view.tree.d.ts.map
declare namespace $ {
    function $mol_csv_serial(data: Record<string, any>[], delimiter?: string): string;
}

declare namespace $ {

	type $piterjs_meetup_guests_visitor__U9JRT8NP = $mol_type_enforce<
		Parameters< $piterjs_meetup_guests['visitor'] >[0]
		,
		Parameters< ReturnType< $piterjs_meetup_guests['meetup'] >['visitor'] >[0]
	>
	type $piterjs_meetup_guests_visitor__R2GD5RHV = $mol_type_enforce<
		Parameters< $piterjs_meetup_guests['visitor'] >[1]
		,
		Parameters< ReturnType< $piterjs_meetup_guests['meetup'] >['visitor'] >[1]
	>
	type $mol_button_download__file_name__FDXWLVWR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_button_download__blob__6B4B36WV = $mol_type_enforce<
		ReturnType< $piterjs_meetup_guests['dump_blob'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_link__arg__N8YNL9SH = $mol_type_enforce<
		({ 
			'guests': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__0DPVRFR2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_search__hint__IRCGLL29 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query__YE1TZFNU = $mol_type_enforce<
		ReturnType< $piterjs_meetup_guests['filter'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_dimmer__haystack__J0A3MI5V = $mol_type_enforce<
		ReturnType< $piterjs_meetup_guests['person'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__R65K4VQL = $mol_type_enforce<
		ReturnType< $piterjs_meetup_guests['filter'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_check_box__checked__4LLNJLU4 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_guests['visitor'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__label__TBBE83TF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check_box['label'] >
	>
	type $mol_view__sub__L9F143EQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__TZE8HWLX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__QGNEPPYP = $mol_type_enforce<
		ReturnType< $piterjs_meetup_guests['person_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows__V23MAUHL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $piterjs_meetup_guests extends $mol_page {
		visitor( id: any, next?: ReturnType< ReturnType< $piterjs_meetup_guests['meetup'] >['visitor'] > ): ReturnType< ReturnType< $piterjs_meetup_guests['meetup'] >['visitor'] >
		dump_blob( ): $mol_blob
		Dump( ): $mol_button_download
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		filter( next?: string ): string
		Filter( ): $mol_search
		person( id: any): string
		Person_snippet( id: any): $mol_dimmer
		Person_visitor( id: any): $mol_check_box
		person_join_moment( id: any): string
		Person_join_moment( id: any): $mol_view
		Person( id: any): $mol_view
		person_list( ): readonly(any)[]
		Person_list( ): $mol_list
		Content( ): $mol_list
		theme( ): string
		meetup( ): $piterjs_meetup
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=guests.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_meetup_guests extends $.$piterjs_meetup_guests {
        person_list(): $mol_view[];
        person(person: $mol_int62_string): string;
        dump_blob(): Blob;
        person_join_moment(id: $mol_int62_string): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_svg_group extends $mol_svg {
		dom_name( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_title extends $mol_svg {
		dom_name( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=title.view.tree.d.ts.map
declare namespace $ {

	type $mol_vector_range__7ZPT3J1W = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__O0JSBC7W = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__AACGX0JG = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__RUJMH7V4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__LEJTYCLK = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__S0XII3RB = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__09S3KJ6P = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__DUKO3X0K = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_2d__XH6VZ11J = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['viewport_x'] >, ReturnType< $mol_plot_graph['viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__EL2HHQBP = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__RXI418FO = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_pane_x'] >, ReturnType< $mol_plot_graph['dimensions_pane_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__NHQHN2LB = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['dimensions_x'] >, ReturnType< $mol_plot_graph['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__X62TQ5J8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__AR5EPIVL = $mol_type_enforce<
		[ ReturnType< $mol_plot_graph['gap_x'] >, ReturnType< $mol_plot_graph['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_svg_title__title__G482P37U = $mol_type_enforce<
		ReturnType< $mol_plot_graph['hint'] >
		,
		ReturnType< $mol_svg_title['title'] >
	>
	export class $mol_plot_graph extends $mol_svg_group {
		type( ): string
		color( ): string
		viewport_x( ): $mol_vector_range<number>
		viewport_y( ): $mol_vector_range<number>
		dimensions_pane_x( ): $mol_vector_range<number>
		dimensions_pane_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		title( ): string
		hint( ): ReturnType< $mol_plot_graph['title'] >
		series_x( ): readonly(number)[]
		series_y( ): readonly(number)[]
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph['type'] >,
		})  & ReturnType< $mol_svg_group['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph['color'] >,
		})  & ReturnType< $mol_svg_group['style'] >
		viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		shift( ): readonly(number)[]
		scale( ): readonly(number)[]
		cursor_position( ): $mol_vector_2d<number>
		dimensions_pane( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		size_real( ): $mol_vector_2d<number>
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		repos_x( id: any): number
		repos_y( id: any): number
		indexes( ): readonly(number)[]
		points( ): readonly(readonly(number)[])[]
		front( ): readonly($mol_svg)[]
		back( ): readonly($mol_svg)[]
		Hint( ): $mol_svg_title
		hue( ): number
		Sample( ): any
	}
	
	export class $mol_plot_graph_sample extends $mol_view {
		type( ): string
		color( ): string
		attr( ): ({ 
			'mol_plot_graph_type': ReturnType< $mol_plot_graph_sample['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'color': ReturnType< $mol_plot_graph_sample['color'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=graph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_graph extends $.$mol_plot_graph {
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        indexes(): readonly number[];
        repos_x(val: number): number;
        repos_y(val: number): number;
        points(): readonly (readonly number[])[];
        series_x(): readonly number[];
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        color(): string;
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_rect extends $mol_svg {
		width( ): string
		height( ): string
		pos_x( ): string
		pos_y( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'width': ReturnType< $mol_svg_rect['width'] >,
			'height': ReturnType< $mol_svg_rect['height'] >,
			'x': ReturnType< $mol_svg_rect['pos_x'] >,
			'y': ReturnType< $mol_svg_rect['pos_y'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=rect.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_rect extends $.$mol_svg_rect {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {

	export class $mol_svg_text extends $mol_svg {
		pos_x( ): string
		pos_y( ): string
		align( ): string
		align_hor( ): ReturnType< $mol_svg_text['align'] >
		align_vert( ): string
		text( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'x': ReturnType< $mol_svg_text['pos_x'] >,
			'y': ReturnType< $mol_svg_text['pos_y'] >,
			'text-anchor': ReturnType< $mol_svg_text['align_hor'] >,
			'alignment-baseline': ReturnType< $mol_svg_text['align_vert'] >,
		})  & ReturnType< $mol_svg['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}

declare namespace $ {

	type $mol_svg_rect__pos_x__PLVFS6O0 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_x'] >
		,
		ReturnType< $mol_svg_rect['pos_x'] >
	>
	type $mol_svg_rect__pos_y__5NKVAO5K = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_y'] >
		,
		ReturnType< $mol_svg_rect['pos_y'] >
	>
	type $mol_svg_rect__width__TTVWR8BL = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height__LTXFM5SZ = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['background_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_path__geometry__1SFNN0DJ = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text__pos_x__M5RGIQCD = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_x'] >
		,
		ReturnType< $mol_svg_text['pos_x'] >
	>
	type $mol_svg_text__pos_y__XDLTIOMP = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_pos_y'] >
		,
		ReturnType< $mol_svg_text['pos_y'] >
	>
	type $mol_svg_text__align__SEX5DMA8 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__text__AXFSDTG1 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['title'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_vector_range__0M9C8NEG = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__KK47F6D3 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_text__pos__4R8F1GRZ = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_pos'] >
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__text__W9J8BCF9 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_text'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_svg_text__align__GMJS20V6 = $mol_type_enforce<
		ReturnType< $mol_plot_ruler['label_align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	export class $mol_plot_ruler extends $mol_plot_graph {
		background_x( ): string
		background_y( ): string
		background_width( ): string
		background_height( ): string
		Background( ): $mol_svg_rect
		curve( ): string
		Curve( ): $mol_svg_path
		labels_formatted( ): readonly(any)[]
		title_pos_x( ): string
		title_pos_y( ): string
		title_align( ): string
		Title( ): $mol_svg_text
		label_pos_x( id: any): string
		label_pos_y( id: any): string
		label_pos( id: any): readonly(any)[]
		label_text( id: any): string
		label_align( ): string
		step( ): number
		scale_axis( ): number
		scale_step( ): number
		shift_axis( ): number
		dimensions_axis( ): $mol_vector_range<number>
		viewport_axis( ): $mol_vector_range<number>
		axis_points( ): readonly(number)[]
		normalize( next?: number ): number
		precision( ): number
		sub( ): readonly(any)[]
		Label( id: any): $mol_svg_text
	}
	
}

//# sourceMappingURL=ruler.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler extends $.$mol_plot_ruler {
        labels_formatted(): $.$mol_svg_text[];
        step(): number;
        snap_to_grid(coord: number): number;
        axis_points(): number[];
        precision(): number;
        label_text(index: number): string;
        font_size(): number;
        back(): $mol_svg_path[];
        front(): readonly $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_ruler_hor extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_x( ): string
		title_pos_y( ): string
		label_pos_y( id: any): ReturnType< $mol_plot_ruler_hor['title_pos_y'] >
		background_width( ): string
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        label_pos_x(index: number): string;
        background_y(): string;
        title_pos_y(): string;
        background_height(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_mark_hor extends $mol_plot_ruler_hor {
		labels( ): readonly(string)[]
	}
	
}

//# sourceMappingURL=hor.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_mark_hor extends $.$mol_plot_mark_hor {
        series_x(): readonly number[];
        labels(): readonly string[];
        visible_indexes(): number[];
        curve(): string;
        label_text(index: number): string;
        labels_formatted(): $.$mol_svg_text[];
        label_pos_x(index: number): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_plot_ruler_vert extends $mol_plot_ruler {
		title_align( ): string
		label_align( ): string
		title_pos_y( ): string
		label_pos_x( id: any): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
		background_height( ): string
		background_width( ): ReturnType< $mol_plot_ruler_vert['title_pos_x'] >
	}
	
}

//# sourceMappingURL=vert.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions_axis(): $mol_vector_range<number>;
        viewport_axis(): $mol_vector_range<number>;
        scale_axis(): number;
        scale_step(): number;
        shift_axis(): number;
        curve(): string;
        title_pos_x(): string;
        label_pos_y(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry__FVJ6VXO1 = $mol_type_enforce<
		ReturnType< $mol_plot_bar['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_plot_graph_sample__color__VS8OCF1Z = $mol_type_enforce<
		ReturnType< $mol_plot_bar['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	export class $mol_plot_bar extends $mol_plot_graph {
		stroke_width( ): string
		curve( ): string
		Curve( ): $mol_svg_path
		style( ): ({ 
			'stroke-width': ReturnType< $mol_plot_bar['stroke_width'] >,
		})  & ReturnType< $mol_plot_graph['style'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_bar extends $.$mol_plot_bar {
        indexes(): number[];
        curve(): string;
        stroke_width(): string;
        color(): string;
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_coord_pack(high: number, low: number): number;
    function $mol_coord_high(pack: number): number;
    function $mol_coord_low(pack: number): number;
}

declare namespace $ {

	type $mol_svg_path__geometry__0XC91TER = $mol_type_enforce<
		ReturnType< $mol_plot_dot['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_plot_graph_sample__color__R3G92N47 = $mol_type_enforce<
		ReturnType< $mol_plot_dot['color'] >
		,
		ReturnType< $mol_plot_graph_sample['color'] >
	>
	export class $mol_plot_dot extends $mol_plot_graph {
		diameter( ): number
		curve( ): string
		Curve( ): $mol_svg_path
		points_max( ): number
		aspect( ): number
		style( ): ({ 
			'stroke-width': ReturnType< $mol_plot_dot['diameter'] >,
		})  & ReturnType< $mol_plot_graph['style'] >
		sub( ): readonly(any)[]
		Sample( ): $mol_plot_graph_sample
	}
	
}

//# sourceMappingURL=dot.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_dot extends $.$mol_plot_dot {
        filled(): Set<number>;
        indexes(): number[];
        curve(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(font: string, text: string): number;
}

declare namespace $ {

	type $mol_svg_rect__width__R2D1NJ32 = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_width'] >
		,
		ReturnType< $mol_svg_rect['width'] >
	>
	type $mol_svg_rect__height__SPWO6YBO = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['box_height'] >
		,
		ReturnType< $mol_svg_rect['height'] >
	>
	type $mol_svg_rect__pos__YRGUWIJP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_rect['pos'] >
	>
	type $mol_svg_text__pos__JXVVHV6C = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['pos'] >
	>
	type $mol_svg_text__align__71F0304R = $mol_type_enforce<
		ReturnType< $mol_svg_text_box['align'] >
		,
		ReturnType< $mol_svg_text['align'] >
	>
	type $mol_svg_text__sub__6KBMYCFW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_text['sub'] >
	>
	export class $mol_svg_text_box extends $mol_svg_group {
		box_width( ): string
		box_height( ): string
		box_pos_x( ): ReturnType< $mol_svg_text_box['pos_x'] >
		box_pos_y( ): string
		Back( ): $mol_svg_rect
		pos_x( ): string
		pos_y( ): string
		align( ): string
		text( ): string
		Text( ): $mol_svg_text
		font_size( ): number
		width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text_box extends $.$mol_svg_text_box {
        box_width(): string;
        width(): number;
        box_pos_x(): string;
        box_pos_y(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_range__5PSRLWZ7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__SMPCMY1C = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_svg_path__geometry__WM52VNEO = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['curve'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text_box__pos_x__VLKODULS = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y__MC15ZW1V = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text__O73YAG9X = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_x'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_svg_text_box__pos_x__SZVLNVV4 = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_x'] >
		,
		ReturnType< $mol_svg_text_box['pos_x'] >
	>
	type $mol_svg_text_box__pos_y__9W6V2YWL = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y_pos_y'] >
		,
		ReturnType< $mol_svg_text_box['pos_y'] >
	>
	type $mol_svg_text_box__text__AXQDONJB = $mol_type_enforce<
		ReturnType< $mol_plot_mark_cross['title_y'] >
		,
		ReturnType< $mol_svg_text_box['text'] >
	>
	type $mol_vector_2d__JUIE4JH7 = $mol_type_enforce<
		[ ReturnType< $mol_plot_mark_cross['dimensions_x'] >, ReturnType< $mol_plot_mark_cross['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_mark_cross extends $mol_plot_graph {
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		curve( ): string
		Curve( ): $mol_svg_path
		title_x_pos_x( ): string
		title_x_pos_y( ): string
		title_x( ): string
		Label_x( ): $mol_svg_text_box
		title_y_pos_x( ): string
		title_y_pos_y( ): string
		title_y( ): string
		Label_y( ): $mol_svg_text_box
		labels( ): readonly(string)[]
		title_x_gap( ): number
		title_y_gap( ): number
		threshold( ): number
		graphs( ): readonly($mol_plot_graph)[]
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cross.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_mark_cross extends $.$mol_plot_mark_cross {
        nearest(): {
            value: $mol_vector_2d<number>;
            scaled: $mol_vector_2d<number>;
            index: number;
        } | null;
        curve(): string;
        title_x(): string;
        title_x_pos_x(): string;
        title_x_pos_y(): string;
        title_y(): string;
        title_y_pos_y(): string;
        title_y_pos_x(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_gallery__style__9YDEJ14A = $mol_type_enforce<
		({ 
			'flexGrow': ReturnType< $mol_gallery['side_size'] >,
		}) 
		,
		ReturnType< $mol_gallery['style'] >
	>
	type $mol_gallery__items__8CQGHGNO = $mol_type_enforce<
		ReturnType< $mol_gallery['side_items'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	export class $mol_gallery extends $mol_view {
		items( ): readonly($mol_view)[]
		side_size( id: any): string
		side_items( id: any): readonly($mol_view)[]
		sub( ): ReturnType< $mol_gallery['items'] >
		Side( id: any): $mol_gallery
	}
	
}

//# sourceMappingURL=gallery.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_gallery extends $.$mol_gallery {
        sub(): readonly $mol_view[];
        side_items(id: number): $mol_view[];
        side_size(id: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_gallery__items__AHF1G0OC = $mol_type_enforce<
		ReturnType< $mol_chart_legend['graph_legends'] >
		,
		ReturnType< $mol_gallery['items'] >
	>
	type $mol_view__sub__KIOXL38H = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__4MHWDBR5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__1NAV88YC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_chart_legend extends $mol_scroll {
		graph_legends( ): readonly($mol_view)[]
		Gallery( ): $mol_gallery
		Graph_sample( id: any): any
		Graph_sample_box( id: any): $mol_view
		graph_title( id: any): string
		Graph_title( id: any): $mol_view
		graphs( ): readonly($mol_plot_graph)[]
		graphs_front( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
		Graph_legend( id: any): $mol_view
	}
	
}

//# sourceMappingURL=legend.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): readonly $mol_plot_graph[];
        graph_legends(): readonly $mol_view[];
        graph_title(index: number): string;
        Graph_sample(index: number): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_vector_2d__LCJ0F22P = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__RNTJISFT = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__0O5NS2PT = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $mol_touch extends $mol_plugin {
		event_start( next?: any ): any
		event_move( next?: any ): any
		event_end( next?: any ): any
		event_leave( next?: any ): any
		event_wheel( next?: any ): any
		start_zoom( next?: number ): number
		start_distance( next?: number ): number
		zoom( next?: number ): number
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( next?: string ): string
		action_point( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		start_pan( next?: readonly(any)[] ): readonly(any)[]
		pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		pointer_center( ): $mol_vector_2d<number>
		start_pos( next?: any ): any
		swipe_precision( ): number
		swipe_right( next?: any ): any
		swipe_bottom( next?: any ): any
		swipe_left( next?: any ): any
		swipe_top( next?: any ): any
		swipe_from_right( next?: any ): any
		swipe_from_bottom( next?: any ): any
		swipe_from_left( next?: any ): any
		swipe_from_top( next?: any ): any
		swipe_to_right( next?: any ): any
		swipe_to_bottom( next?: any ): any
		swipe_to_left( next?: any ): any
		swipe_to_top( next?: any ): any
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		style( ): ({ 
			'touch-action': string,
			'overscroll-behavior': string,
		})  & ReturnType< $mol_plugin['style'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $mol_touch['event_start'] > ): ReturnType< $mol_touch['event_start'] >,
			pointermove( next?: ReturnType< $mol_touch['event_move'] > ): ReturnType< $mol_touch['event_move'] >,
			pointerup( next?: ReturnType< $mol_touch['event_end'] > ): ReturnType< $mol_touch['event_end'] >,
			pointerleave( next?: ReturnType< $mol_touch['event_leave'] > ): ReturnType< $mol_touch['event_leave'] >,
			wheel( next?: ReturnType< $mol_touch['event_wheel'] > ): ReturnType< $mol_touch['event_wheel'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=touch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        auto(): void;
        pointer_events(next?: readonly PointerEvent[]): readonly PointerEvent[];
        pointer_coords(): $mol_vector<$mol_vector_2d<number>, number>;
        pointer_center(): $mol_vector_2d<number>;
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        action_point(): $mol_vector_2d<number>;
        event_eat(event: PointerEvent | WheelEvent): string;
        event_start(event: PointerEvent): void;
        event_move(event: PointerEvent): void;
        event_end(event: PointerEvent): void;
        event_leave(event: PointerEvent): void;
        swipe_left(event: PointerEvent): void;
        swipe_right(event: PointerEvent): void;
        swipe_top(event: PointerEvent): void;
        swipe_bottom(event: PointerEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {

	type $mol_vector_range__EVKSVVBM = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_left'] >, ReturnType< $mol_plot_pane['gap_right'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__K82P4I60 = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_bottom'] >, ReturnType< $mol_plot_pane['gap_top'] > ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__RTWUPQH8 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__TL31ZF0W = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__Q5GR3PFT = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__TMMSO7V1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__OO66F2ZB = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__QLVKB14Z = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__RIQNYHDV = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_vector_range__QUMG3AH7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_range<number> >
	>
	type $mol_touch__zoom__A3DDZVSU = $mol_type_enforce<
		ReturnType< $mol_plot_pane['zoom'] >
		,
		ReturnType< $mol_touch['zoom'] >
	>
	type $mol_touch__pan__XLJH1EHP = $mol_type_enforce<
		ReturnType< $mol_plot_pane['shift'] >
		,
		ReturnType< $mol_touch['pan'] >
	>
	type $mol_touch__allow_draw__R167SNXG = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_draw'] >
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan__72CV82EI = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_touch__allow_zoom__9UGU9Y2G = $mol_type_enforce<
		ReturnType< $mol_plot_pane['allow_zoom'] >
		,
		ReturnType< $mol_touch['allow_zoom'] >
	>
	type $mol_touch__draw_start__VVRA87DU = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_start'] >
		,
		ReturnType< $mol_touch['draw_start'] >
	>
	type $mol_touch__draw__3KRUZB4B = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw'] >
		,
		ReturnType< $mol_touch['draw'] >
	>
	type $mol_touch__draw_end__3UM9SQQU = $mol_type_enforce<
		ReturnType< $mol_plot_pane['draw_end'] >
		,
		ReturnType< $mol_touch['draw_end'] >
	>
	type $mol_vector_2d__CB314VQO = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['gap_x'] >, ReturnType< $mol_plot_pane['gap_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__MZV6AVOI = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['shift_limit_x'] >, ReturnType< $mol_plot_pane['shift_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__6F2T55TK = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__SXFOCJR2 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__ELGJ6NJM = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['scale_limit_x'] >, ReturnType< $mol_plot_pane['scale_limit_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__3TMHWPT4 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__UVJ4ORDZ = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__0CQSKW4H = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__FTN1E37Z = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__GLOVNY4L = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_x'] >, ReturnType< $mol_plot_pane['dimensions_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	type $mol_vector_2d__T9BZURQM = $mol_type_enforce<
		[ ReturnType< $mol_plot_pane['dimensions_viewport_x'] >, ReturnType< $mol_plot_pane['dimensions_viewport_y'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<$mol_vector_range<number>> >
	>
	export class $mol_plot_pane extends $mol_svg_root {
		gap_x( ): $mol_vector_range<number>
		gap_y( ): $mol_vector_range<number>
		shift_limit_x( ): $mol_vector_range<number>
		shift_limit_y( ): $mol_vector_range<number>
		scale_limit_x( ): $mol_vector_range<number>
		scale_limit_y( ): $mol_vector_range<number>
		dimensions_x( ): $mol_vector_range<number>
		dimensions_y( ): $mol_vector_range<number>
		dimensions_viewport_x( ): $mol_vector_range<number>
		dimensions_viewport_y( ): $mol_vector_range<number>
		graphs_sorted( ): readonly($mol_svg)[]
		graphs( ): readonly($mol_plot_graph)[]
		graphs_positioned( ): ReturnType< $mol_plot_pane['graphs'] >
		graphs_visible( ): ReturnType< $mol_plot_pane['graphs_positioned'] >
		zoom( next?: number ): number
		cursor_position( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['pointer_center'] >
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_type'] >
		action_point( ): ReturnType< ReturnType< $mol_plot_pane['Touch'] >['action_point'] >
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		Touch( ): $mol_touch
		aspect( ): string
		hue_base( next?: number ): number
		hue_shift( next?: number ): number
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_right( ): ReturnType< $mol_plot_pane['gap_hor'] >
		gap_top( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap_bottom( ): ReturnType< $mol_plot_pane['gap_vert'] >
		gap( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		shift_default( ): $mol_vector_2d<number>
		shift( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_limit( ): $mol_vector_2d<$mol_vector_range<number>>
		scale_default( ): $mol_vector_2d<number>
		scale( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		scale_x( next?: number ): number
		scale_y( next?: number ): number
		size( ): $mol_vector_2d<number>
		size_real( ): $mol_vector_2d<number>
		dimensions( ): $mol_vector_2d<$mol_vector_range<number>>
		dimensions_viewport( ): $mol_vector_2d<$mol_vector_range<number>>
		sub( ): ReturnType< $mol_plot_pane['graphs_sorted'] >
		graphs_colored( ): ReturnType< $mol_plot_pane['graphs_visible'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=pane.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): $mol_vector_2d<$mol_vector_range<number>>;
        size(): $mol_vector_2d<number>;
        graph_hue(index: number): number;
        graphs_colored(): $.$mol_plot_graph[];
        size_real(): $mol_vector_2d<number>;
        view_box(): string;
        scale_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        scale_default(): $mol_vector_2d<number>;
        scale(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        scale_x(next?: number): number;
        scale_y(next?: number): number;
        shift_limit(): $mol_vector_2d<$mol_vector_range<number>>;
        shift_default(): $mol_vector_2d<number>;
        graph_touched: boolean;
        shift(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        reset(event?: Event): void;
        graphs_visible(): $.$mol_plot_graph[];
        graphs_positioned(): readonly $.$mol_plot_graph[];
        dimensions_viewport(): $mol_vector<$mol_vector_range<number>, 2>;
        viewport(): $mol_vector_2d<$mol_vector_range<number>>;
        graphs_sorted(): $.$mol_svg[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_chart_legend__graphs__77HDXIMA = $mol_type_enforce<
		ReturnType< $mol_chart['graphs_colored'] >
		,
		ReturnType< $mol_chart_legend['graphs'] >
	>
	type $mol_chart_zoom__HN5JAPXD = $mol_type_enforce<
		Parameters< $mol_chart['zoom'] >[0]
		,
		Parameters< ReturnType< $mol_chart['Plot'] >['scale_x'] >[0]
	>
	type $mol_plot_pane__zoom__ZSGG4182 = $mol_type_enforce<
		ReturnType< $mol_chart['zoom'] >
		,
		ReturnType< $mol_plot_pane['zoom'] >
	>
	type $mol_plot_pane__gap_left__69YL130Z = $mol_type_enforce<
		ReturnType< $mol_chart['gap_left'] >
		,
		ReturnType< $mol_plot_pane['gap_left'] >
	>
	type $mol_plot_pane__gap_right__IIMMHRJM = $mol_type_enforce<
		ReturnType< $mol_chart['gap_right'] >
		,
		ReturnType< $mol_plot_pane['gap_right'] >
	>
	type $mol_plot_pane__gap_bottom__QMRSH8AI = $mol_type_enforce<
		ReturnType< $mol_chart['gap_bottom'] >
		,
		ReturnType< $mol_plot_pane['gap_bottom'] >
	>
	type $mol_plot_pane__gap_top__IMKNCBMA = $mol_type_enforce<
		ReturnType< $mol_chart['gap_top'] >
		,
		ReturnType< $mol_plot_pane['gap_top'] >
	>
	type $mol_plot_pane__graphs__4MD6EH5T = $mol_type_enforce<
		ReturnType< $mol_chart['graphs'] >
		,
		ReturnType< $mol_plot_pane['graphs'] >
	>
	type $mol_plot_pane__hue_base__C9MS4Y8W = $mol_type_enforce<
		ReturnType< $mol_chart['hue_base'] >
		,
		ReturnType< $mol_plot_pane['hue_base'] >
	>
	type $mol_plot_pane__hue_shift__SWKHZ49R = $mol_type_enforce<
		ReturnType< $mol_chart['hue_shift'] >
		,
		ReturnType< $mol_plot_pane['hue_shift'] >
	>
	export class $mol_chart extends $mol_view {
		Legend( ): $mol_chart_legend
		zoom( next?: ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] > ): ReturnType< ReturnType< $mol_chart['Plot'] >['scale_x'] >
		graphs_colored( ): ReturnType< ReturnType< $mol_chart['Plot'] >['graphs_colored'] >
		hue_base( ): number
		hue_shift( ): number
		Plot( ): $mol_plot_pane
		gap_hor( ): number
		gap_vert( ): number
		gap_left( ): ReturnType< $mol_chart['gap_hor'] >
		gap_right( ): ReturnType< $mol_chart['gap_hor'] >
		gap_bottom( ): ReturnType< $mol_chart['gap_vert'] >
		gap_top( ): ReturnType< $mol_chart['gap_vert'] >
		graphs( ): readonly($mol_plot_graph)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=chart.view.tree.d.ts.map
declare namespace $ {
    function $mol_array_groups<Item, Groups extends string>(all: readonly Item[], group: (item: Item) => Groups): Readonly<Record<Groups, Item[] | undefined>>;
}

declare namespace $ {

	type $piterjs_meetup_stats_visitor__LU9TBAFZ = $mol_type_enforce<
		Parameters< $piterjs_meetup_stats['visitor'] >[0]
		,
		Parameters< ReturnType< $piterjs_meetup_stats['meetup'] >['visitor'] >[0]
	>
	type $mol_link__arg__E7G8FGGJ = $mol_type_enforce<
		({ 
			'stats': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__NEO4F91E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_plot_mark_hor__labels__OYAY5YSO = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['days'] >
		,
		ReturnType< $mol_plot_mark_hor['labels'] >
	>
	type $mol_plot_ruler_vert__series_y__SJIZQMKB = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['joins_per_days'] >
		,
		ReturnType< $mol_plot_ruler_vert['series_y'] >
	>
	type $mol_plot_bar__title__KUVT6B5T = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['joins_title'] >
		,
		ReturnType< $mol_plot_bar['title'] >
	>
	type $mol_plot_bar__series_y__JPWRGKIA = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['joins_per_days'] >
		,
		ReturnType< $mol_plot_bar['series_y'] >
	>
	type $mol_plot_bar__title__WK98X5QN = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['visits_title'] >
		,
		ReturnType< $mol_plot_bar['title'] >
	>
	type $mol_plot_bar__series_y__3FXONFF8 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['visits_per_days'] >
		,
		ReturnType< $mol_plot_bar['series_y'] >
	>
	type $mol_plot_dot__title__TAKN4XSE = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['joins_new_title'] >
		,
		ReturnType< $mol_plot_dot['title'] >
	>
	type $mol_plot_dot__series_y__NGZD0RGG = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['joins_new_per_days'] >
		,
		ReturnType< $mol_plot_dot['series_y'] >
	>
	type $mol_plot_dot__title__9NO5U8JA = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['visits_new_title'] >
		,
		ReturnType< $mol_plot_dot['title'] >
	>
	type $mol_plot_dot__series_y__ID6HCAD8 = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['visits_new_per_days'] >
		,
		ReturnType< $mol_plot_dot['series_y'] >
	>
	type $mol_plot_mark_cross__labels__HTGXSSKU = $mol_type_enforce<
		ReturnType< $piterjs_meetup_stats['days'] >
		,
		ReturnType< $mol_plot_mark_cross['labels'] >
	>
	type $mol_plot_mark_cross__graphs__Z8X7FASZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_plot_mark_cross['graphs'] >
	>
	type $mol_chart__graphs__1BNX6L9A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_chart['graphs'] >
	>
	export class $piterjs_meetup_stats extends $mol_page {
		joined_moments( ): ReturnType< ReturnType< $piterjs_meetup_stats['meetup'] >['joined_moments'] >
		visitors_list( ): ReturnType< ReturnType< $piterjs_meetup_stats['meetup'] >['visitors_list'] >
		visitor( id: any): ReturnType< ReturnType< $piterjs_meetup_stats['meetup'] >['visitor'] >
		joined_list_prev( ): ReturnType< ReturnType< $piterjs_meetup_stats['meetup_prev'] >['joined_list'] >
		visitors_list_prev( ): ReturnType< ReturnType< $piterjs_meetup_stats['meetup_prev'] >['visitors_list'] >
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		days( ): readonly(any)[]
		Days( ): $mol_plot_mark_hor
		joins_per_days( ): readonly(any)[]
		Counts( ): $mol_plot_ruler_vert
		joins_title( ): string
		Joins( ): $mol_plot_bar
		visits_title( ): string
		visits_per_days( ): readonly(any)[]
		Visits( ): $mol_plot_bar
		joins_new_title( ): string
		joins_new_per_days( ): readonly(any)[]
		Joins_new( ): $mol_plot_dot
		visits_new_title( ): string
		visits_new_per_days( ): readonly(any)[]
		Visits_new( ): $mol_plot_dot
		Details( ): $mol_plot_mark_cross
		Chart( ): $mol_chart
		theme( ): string
		meetup( ): $piterjs_meetup
		meetup_prev( ): $piterjs_meetup
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=stats.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_meetup_stats extends $.$piterjs_meetup_stats {
        joins_stat(): Readonly<Record<string, [string, $mol_time_moment][] | undefined>>;
        days(): string[];
        joins_per_days(): number[];
        joins_title(): string;
        visits_per_days(): number[];
        visits_title(): string;
        joins_new_per_days(): number[];
        joins_new_title(): string;
        visits_new_per_days(): number[];
        visits_new_title(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_check__checked__CGTC6KHQ = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__724GMZ2V = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__DW4ENDZ9 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__WVG1MCOE = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__99SO2T8F = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {

	export class $mol_icon_clock extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clock.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clock_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_format__value__F5SL0X8Z = $mol_type_enforce<
		ReturnType< $mol_pick_time['value'] >
		,
		ReturnType< $mol_format['value'] >
	>
	type $mol_format__mask__LECGS2FX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_format['mask'] >
	>
	type $mol_format__allow__S7CC79GN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_format['allow'] >
	>
	type $mol_format__enabled__PVMBR9MC = $mol_type_enforce<
		ReturnType< $mol_pick_time['enabled'] >
		,
		ReturnType< $mol_format['enabled'] >
	>
	type $mol_switch__value__5R2RK4NZ = $mol_type_enforce<
		ReturnType< $mol_pick_time['hour_selected'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__LU696JD4 = $mol_type_enforce<
		ReturnType< $mol_pick_time['hour_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_paragraph__title__AJEWE7QY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_switch__value__G9JGFEBR = $mol_type_enforce<
		ReturnType< $mol_pick_time['minute_selected'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__HT1F2XY8 = $mol_type_enforce<
		ReturnType< $mol_pick_time['minute_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_row__sub__JAZC6EC6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	export class $mol_pick_time extends $mol_pick {
		enabled( ): boolean
		value( next?: string ): string
		Input( ): $mol_format
		hour_selected( next?: string ): string
		hour_options( ): Record<string, any>
		Hours( ): $mol_switch
		Delimiter( ): $mol_paragraph
		minute_selected( next?: string ): string
		minute_options( ): Record<string, any>
		Minutes( ): $mol_switch
		Pickers( ): $mol_row
		Icon( ): $mol_icon_clock_outline
		trigger_enabled( ): ReturnType< $mol_pick_time['enabled'] >
		bubble_content( ): readonly(any)[]
		value_moment( next?: $mol_time_moment ): $mol_time_moment
	}
	
}

//# sourceMappingURL=time.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick_time extends $.$mol_pick_time {
        trigger_content(): (string | $mol_icon_clock_outline)[];
        value_moment(next?: $mol_time_moment): $mol_time_moment;
        value(next?: string): string;
        hour_selected(hour_str?: string): string;
        minute_selected(minute_str?: string): string;
        hour_options(): {
            '0': string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '7': string;
            '8': string;
            '9': string;
            '10': string;
            '11': string;
            '12': string;
            '13': string;
            '14': string;
            '15': string;
            '16': string;
            '17': string;
            '18': string;
            '19': string;
            '20': string;
            '21': string;
            '22': string;
            '23': string;
        };
        minute_options(): {
            '0': string;
            '5': string;
            '10': string;
            '15': string;
            '20': string;
            '25': string;
            '30': string;
            '35': string;
            '40': string;
            '45': string;
            '50': string;
            '55': string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_blob_uri(blob: $mol_blob): Promise<string>;
}

declare namespace $ {

	type $mol_paragraph__title__AKF8GAS7 = $mol_type_enforce<
		ReturnType< $piterjs_speech_poster['title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $piterjs_image__link__2U69Z3ZT = $mol_type_enforce<
		ReturnType< $piterjs_speech_poster['photo_uri'] >
		,
		ReturnType< $piterjs_image['link'] >
	>
	type $mol_paragraph__title__ZRS9PV2B = $mol_type_enforce<
		ReturnType< $piterjs_speech_poster['speaker_name'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub__NOSM07UE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $piterjs_speech_poster extends $piterjs_screen {
		title( ): ReturnType< ReturnType< $piterjs_speech_poster['speech'] >['title'] >
		start( ): ReturnType< ReturnType< $piterjs_speech_poster['speech'] >['start'] >
		speaker( ): ReturnType< ReturnType< $piterjs_speech_poster['speech'] >['speaker'] >
		aspect( ): string
		Title( ): $mol_paragraph
		photo_uri( ): string
		Photo( ): $piterjs_image
		speaker_name( ): string
		Name( ): $mol_paragraph
		Main( ): $mol_view
		speech( ): $piterjs_speech
		theme( ): string
		attr( ): ({ 
			'piterjs_speech_poster_aspect': ReturnType< $piterjs_speech_poster['aspect'] >,
		})  & ReturnType< $piterjs_screen['attr'] >
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=poster.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_speech_poster extends $.$piterjs_speech_poster {
        photo_uri(): string;
        speaker_name(): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_link__title__QHFM1L51 = $mol_type_enforce<
		ReturnType< $mol_string_link['title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__hint__LFGDYTZO = $mol_type_enforce<
		ReturnType< $mol_string_link['hint_view'] >
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__uri__75K3HXHH = $mol_type_enforce<
		ReturnType< $mol_string_link['value'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_string__enabled__83W7SAP2 = $mol_type_enforce<
		ReturnType< $mol_string_link['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__value__K9CM17D3 = $mol_type_enforce<
		ReturnType< $mol_string_link['value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__R1E8X8A1 = $mol_type_enforce<
		ReturnType< $mol_string_link['hint_edit'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	export class $mol_string_link extends $mol_view {
		enabled( ): boolean
		editing( ): ReturnType< $mol_string_link['enabled'] >
		hint_view( ): string
		View( ): $mol_link
		value( next?: string ): string
		title( ): string
		hint( ): ReturnType< $mol_string_link['title'] >
		hint_edit( ): ReturnType< $mol_string_link['hint'] >
		Edit( ): $mol_string
		attr( ): ({ 
			'mol_string_link_editing': ReturnType< $mol_string_link['editing'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string_link extends $.$mol_string_link {
        sub(): $.$mol_link[] | $.$mol_string[];
    }
}

declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files__BP16599J = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__QQ5RZBCB = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__16U831H0 = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(any)[] ): readonly(any)[]
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(any)[] ): readonly(any)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_picture extends $mol_object2 {
        readonly canvas: HTMLCanvasElement;
        constructor(canvas: HTMLCanvasElement);
        get context(): CanvasRenderingContext2D | null;
        get bitmap(): ImageData;
        static fit(image: Exclude<CanvasImageSource, VideoFrame> | Blob | string, width?: number, height?: number): $mol_picture;
        static make(image: Exclude<CanvasImageSource, VideoFrame>, width: number, height?: number): $mol_picture;
        static sizes(image: Exclude<CanvasImageSource, VideoFrame>): number[];
        static load(uri: string): Promise<HTMLImageElement>;
        format(type: 'image/png' | 'image/jpeg' | 'image/webp', quality?: number): Blob | null;
    }
}

declare namespace $ {

	type $piterjs_speaker_snippet_title__XNOSIBNK = $mol_type_enforce<
		Parameters< $piterjs_speaker_snippet['title'] >[0]
		,
		Parameters< ReturnType< $piterjs_speaker_snippet['speaker'] >['title'] >[0]
	>
	type $piterjs_speaker_snippet_description__K8LPCFHJ = $mol_type_enforce<
		Parameters< $piterjs_speaker_snippet['description'] >[0]
		,
		Parameters< ReturnType< $piterjs_speaker_snippet['speaker'] >['description'] >[0]
	>
	type $piterjs_image__link__OL1LUTJ3 = $mol_type_enforce<
		ReturnType< $piterjs_speaker_snippet['photo'] >
		,
		ReturnType< $piterjs_image['link'] >
	>
	type $mol_button_open__Icon__JRFB8VAD = $mol_type_enforce<
		any
		,
		ReturnType< $mol_button_open['Icon'] >
	>
	type $mol_button_open__files__XMFWHWPA = $mol_type_enforce<
		ReturnType< $piterjs_speaker_snippet['upload'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_button_open__enabled__35AVB49D = $mol_type_enforce<
		ReturnType< $piterjs_speaker_snippet['editing'] >
		,
		ReturnType< $mol_button_open['enabled'] >
	>
	type $mol_stack__sub__T1CLGKY0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_stack['sub'] >
	>
	type $mol_string__hint__T9394ZF7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__VG3OKSGR = $mol_type_enforce<
		ReturnType< $piterjs_speaker_snippet['title'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__9X0M4ADI = $mol_type_enforce<
		ReturnType< $piterjs_speaker_snippet['editing'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_textarea__hint__NDN1WCZ7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__XW9B3M5E = $mol_type_enforce<
		ReturnType< $piterjs_speaker_snippet['description'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled__VUBYYV6B = $mol_type_enforce<
		ReturnType< $piterjs_speaker_snippet['editing'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_list__sub__8J2J39I4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	export class $piterjs_speaker_snippet extends $mol_view {
		paste( next?: any ): any
		title( next?: ReturnType< ReturnType< $piterjs_speaker_snippet['speaker'] >['title'] > ): ReturnType< ReturnType< $piterjs_speaker_snippet['speaker'] >['title'] >
		description( next?: ReturnType< ReturnType< $piterjs_speaker_snippet['speaker'] >['description'] > ): ReturnType< ReturnType< $piterjs_speaker_snippet['speaker'] >['description'] >
		photo( ): string
		Photo( ): $piterjs_image
		upload( next?: readonly(File)[] ): readonly(File)[]
		editing( ): boolean
		Upload( ): $mol_button_open
		Photo_block( ): $mol_stack
		Title( ): $mol_string
		Description( ): $mol_textarea
		Info( ): $mol_list
		event( ): ({ 
			paste( next?: ReturnType< $piterjs_speaker_snippet['paste'] > ): ReturnType< $piterjs_speaker_snippet['paste'] >,
		}) 
		speaker( ): $piterjs_speaker
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=snippet.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_speaker_snippet extends $.$piterjs_speaker_snippet {
        photo(): string;
        upload(next: File[]): never[];
        take_files(files: FileList): File[];
        paste(event?: ClipboardEvent): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_camera extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=camera.view.tree.d.ts.map
declare namespace $ {
    function $mol_dom_serialize(node: Node): string;
}

declare namespace $ {
    function $mol_dom_capture_svg(el: Element): Promise<$mol_jsx.JSX.Element>;
    function $mol_dom_capture_image(el: Element): Promise<HTMLImageElement>;
    function $mol_dom_capture_canvas(el: Element): Promise<HTMLCanvasElement>;
}

declare namespace $ {

	type $piterjs_speech_page_title__W2HNS330 = $mol_type_enforce<
		Parameters< $piterjs_speech_page['title'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speech'] >['title'] >[0]
	>
	type $piterjs_speech_page_description__LOLN4FDH = $mol_type_enforce<
		Parameters< $piterjs_speech_page['description'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speech'] >['description'] >[0]
	>
	type $piterjs_speech_page_start__3YUOVZ42 = $mol_type_enforce<
		Parameters< $piterjs_speech_page['start'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speech'] >['start'] >[0]
	>
	type $piterjs_speech_page_slides__5HZTJGVL = $mol_type_enforce<
		Parameters< $piterjs_speech_page['slides'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speech'] >['slides'] >[0]
	>
	type $piterjs_speech_page_video__ZD4IWWUS = $mol_type_enforce<
		Parameters< $piterjs_speech_page['video'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speech'] >['video'] >[0]
	>
	type $piterjs_speech_page_review__1TZ57B1A = $mol_type_enforce<
		Parameters< $piterjs_speech_page['review'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speech'] >['review'] >[0]
	>
	type $piterjs_speech_page_donate__F1RMU8TK = $mol_type_enforce<
		Parameters< $piterjs_speech_page['donate'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speaker'] >['donate'] >[0]
	>
	type $piterjs_speech_page_contact__ADMBRO1K = $mol_type_enforce<
		Parameters< $piterjs_speech_page['contact'] >[0]
		,
		Parameters< ReturnType< $piterjs_speech_page['speaker'] >['contact'] >[0]
	>
	type $mol_pick_time__value_moment__MYHWM67R = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['start'] >
		,
		ReturnType< $mol_pick_time['value_moment'] >
	>
	type $mol_pick_time__enabled__840S0RJ2 = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_pick_time['enabled'] >
	>
	type $mol_link__arg__4W3QK5JE = $mol_type_enforce<
		({ 
			'speech': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__O9TEFCMA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $piterjs_speech_poster__speech__TZNYND6L = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['speech'] >
		,
		ReturnType< $piterjs_speech_poster['speech'] >
	>
	type $piterjs_speech_poster__aspect__IFSAO5B3 = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['poster_aspect'] >
		,
		ReturnType< $piterjs_speech_poster['aspect'] >
	>
	type $mol_view__minimal_width__6G1AVC0M = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_width'] >
	>
	type $mol_view__minimal_height__GHRWWR5P = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__L4YI9Y1X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_textarea__hint__SC202SAI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__DZESAOSO = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['description'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled__DW7S4XJO = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_string_link__value__1WJ0DN5A = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['slides'] >
		,
		ReturnType< $mol_string_link['value'] >
	>
	type $mol_string_link__enabled__Q53EZQP8 = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_string_link['enabled'] >
	>
	type $mol_string_link__title__J7O62ZS7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_link['title'] >
	>
	type $mol_string_link__value__V4IZW3HP = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['video'] >
		,
		ReturnType< $mol_string_link['value'] >
	>
	type $mol_string_link__enabled__9GJT0CEM = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_string_link['enabled'] >
	>
	type $mol_string_link__title__4EP5OBK7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_link['title'] >
	>
	type $mol_string_link__value__BI8CI6U6 = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['donate'] >
		,
		ReturnType< $mol_string_link['value'] >
	>
	type $mol_string_link__enabled__G7MN5L9P = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_string_link['enabled'] >
	>
	type $mol_string_link__title__9822USWP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_link['title'] >
	>
	type $mol_string_link__value__3PBWXB7T = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['contact'] >
		,
		ReturnType< $mol_string_link['value'] >
	>
	type $mol_string_link__enabled__PMWD7OJI = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_string_link['enabled'] >
	>
	type $mol_string_link__title__QB4M9FYX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_link['title'] >
	>
	type $mol_view__sub__B2N5REOG = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['links'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_textarea__hint__4QQPM4BW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__GHHDJ16K = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['review'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_form_field__name__S44FRISY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__D9BMAU7X = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['Review'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_text__text__SZ9PG17B = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['reviews'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $piterjs_speaker_snippet__speaker__Y8WJUKEF = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['speaker'] >
		,
		ReturnType< $piterjs_speaker_snippet['speaker'] >
	>
	type $piterjs_speaker_snippet__editing__SX22J46W = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $piterjs_speaker_snippet['editing'] >
	>
	type $mol_check_icon__checked__F0KFMNO0 = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['speech_public'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__J1KJXYTY = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['Public_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__Icon__1W5M01C3 = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['Editing_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__1OSEK83D = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_button_download__blob__6CR77O8Q = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['poster_1_1_blob'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_download__file_name__1O3W3FGN = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['poster_1_1_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_button_download__title__33YEVY1Z = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['title'] >
	>
	type $mol_button_download__blob__6OOGG3HH = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['poster_16_9_blob'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_download__file_name__9OMAVUUX = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['poster_16_9_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_button_download__title__G8JQ2HK5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['title'] >
	>
	type $mol_pick__hint__LQ6WOQUD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['hint'] >
	>
	type $mol_pick__trigger_content__Q4TTAQ02 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['trigger_content'] >
	>
	type $mol_pick__bubble_content__3SVAB519 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	type $mol_string_button__value__8QZFJKYM = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['title'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_string_button__enabled__77EQ03G2 = $mol_type_enforce<
		ReturnType< $piterjs_speech_page['editing'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	type $mol_string_button__hint__9RM60U8Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_button['hint'] >
	>
	export class $piterjs_speech_page extends $mol_page {
		title( next?: ReturnType< ReturnType< $piterjs_speech_page['speech'] >['title'] > ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['title'] >
		description( next?: ReturnType< ReturnType< $piterjs_speech_page['speech'] >['description'] > ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['description'] >
		start( next?: ReturnType< ReturnType< $piterjs_speech_page['speech'] >['start'] > ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['start'] >
		slides( next?: ReturnType< ReturnType< $piterjs_speech_page['speech'] >['slides'] > ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['slides'] >
		video( next?: ReturnType< ReturnType< $piterjs_speech_page['speech'] >['video'] > ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['video'] >
		editable( ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['editable'] >
		review( next?: ReturnType< ReturnType< $piterjs_speech_page['speech'] >['review'] > ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['review'] >
		reviews( ): ReturnType< ReturnType< $piterjs_speech_page['speech'] >['reviews'] >
		donate( next?: ReturnType< ReturnType< $piterjs_speech_page['speaker'] >['donate'] > ): ReturnType< ReturnType< $piterjs_speech_page['speaker'] >['donate'] >
		contact( next?: ReturnType< ReturnType< $piterjs_speech_page['speaker'] >['contact'] > ): ReturnType< ReturnType< $piterjs_speech_page['speaker'] >['contact'] >
		Start( ): $mol_pick_time
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		poster_aspect( next?: string ): string
		Poster( ): $piterjs_speech_poster
		Poster_zone( ): $mol_view
		Description( ): $mol_textarea
		Slides( ): $mol_string_link
		Video( ): $mol_string_link
		Donate( ): $mol_string_link
		Contact( ): $mol_string_link
		links( ): readonly(any)[]
		Links( ): $mol_view
		Review( ): $mol_textarea
		Review_field( ): $mol_form_field
		Reviews( ): $mol_text
		Speaker( ): $piterjs_speaker_snippet
		speech_public( next?: boolean ): boolean
		Public_icon( ): $mol_icon_eye
		Public( ): $mol_check_icon
		Editing_icon( ): $mol_icon_settings_outline
		editing( next?: boolean ): boolean
		Editing( ): $mol_check_icon
		Poster_copy_icon( ): $mol_icon_camera
		poster_1_1_blob( next?: $mol_blob ): $mol_blob
		poster_1_1_name( ): string
		Poster_1_1( ): $mol_button_download
		poster_16_9_blob( next?: $mol_blob ): $mol_blob
		poster_16_9_name( ): string
		Poster_16_19( ): $mol_button_download
		Poster_copy( ): $mol_pick
		speech( ): $piterjs_speech
		speaker( ): $piterjs_speaker
		Title( ): $mol_string_button
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_speech_page extends $.$piterjs_speech_page {
        speaker(): $piterjs_speaker;
        links(): $.$mol_string_link[];
        Review_field(): $.$mol_form_field;
        Reviews(): $.$mol_text;
        foot(): readonly any[];
        poster_1_1_name(): string;
        poster_16_9_name(): string;
        poster_1_1_blob(): Blob;
        poster_16_9_blob(): Blob;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_view__sub__Y0SAG66X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__25HONWJW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $piterjs_meetup_snippet extends $mol_link {
		id( ): string
		title( ): string
		Title( ): $mol_view
		date( ): string
		Date( ): $mol_view
		arg( ): ({ 
			'meetup': ReturnType< $piterjs_meetup_snippet['id'] >,
			'speech': any,
			'now': any,
			'video': any,
			'place': any,
			'others': any,
			'wiki': any,
		}) 
		meetup( ): $piterjs_meetup
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=snippet.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_meetup_snippet extends $.$piterjs_meetup_snippet {
        id(): `${string}_${string}`;
        title(): string;
        date(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__UHZF6BAX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__3SGZZDZG = $mol_type_enforce<
		ReturnType< $piterjs_intro_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text__KPJTUTT0 = $mol_type_enforce<
		ReturnType< $piterjs_intro_page['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $piterjs_intro_page extends $mol_view {
		title( ): string
		Title( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		text( ): string
		Text( ): $mol_text
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry__AQBTNTVC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry__9JG1CH57 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $piterjs_logo extends $mol_svg_root {
		Shape( ): $mol_svg_path
		Angles( ): $mol_svg_path
		view_box( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=logo.view.tree.d.ts.map
declare namespace $ {

	export class $piterjs_intro_main extends $piterjs_intro_page {
		Logo( ): $piterjs_logo
		meetup( ): $piterjs_meetup
		title( ): string
		head( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=main.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_intro_main extends $.$piterjs_intro_main {
        title(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__KOIE5JPC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__attr__3DWX1L31 = $mol_type_enforce<
		({ 
			'mol_theme': string,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub__37JZ8EC7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__4MAH3WBU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__QSJUTHJ0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__sub__1NJ4XOX7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_list__rows__J4UWRSOF = $mol_type_enforce<
		ReturnType< $piterjs_schedule['speeches'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $piterjs_schedule extends $mol_view {
		speech_start( id: any): string
		Speech_start( id: any): $mol_view
		speech_title( id: any): string
		Speech_title( id: any): $mol_view
		Speech_main( id: any): $mol_view
		speech_speaker( id: any): string
		Speech_speaker( id: any): $mol_view
		Speech( id: any): $mol_list
		speeches( ): readonly(any)[]
		Speeches( ): $mol_list
		meetup( ): $piterjs_meetup
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=schedule.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_schedule extends $.$piterjs_schedule {
        speeches(): $.$mol_list[];
        speech_start(index: number): string;
        speech_title(index: number): string;
        speech_speaker(index: number): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_wire_task<{}, [], Value>;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber {
        static method: typeof $mol_wire_method;
    }
}

declare namespace $ {

	type $piterjs_intro_main__meetup__R1BKCDPX = $mol_type_enforce<
		ReturnType< $piterjs_intro['meetup'] >
		,
		ReturnType< $piterjs_intro_main['meetup'] >
	>
	type $piterjs_intro_page__title__1UCH7DA5 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__VNN42XWE = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__F6MYCB68 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__M26V3WB7 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__RFPDEA6U = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__C3AG30NU = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__YT1LVXM5 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__VP56P0SX = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__R60M5WJT = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__OZS95KX8 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__6PINB3A8 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__9Z42W8QG = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__V1XT9JX1 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__L1QGEXJ6 = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__VKVNXWQT = $mol_type_enforce<
		ReturnType< $piterjs_intro['place_title'] >
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__OFFXOBEO = $mol_type_enforce<
		ReturnType< $piterjs_intro['place_notes'] >
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_schedule__meetup__D9GVCEOH = $mol_type_enforce<
		ReturnType< $piterjs_intro['meetup'] >
		,
		ReturnType< $piterjs_schedule['meetup'] >
	>
	type $piterjs_schedule__title__R7LUK3YY = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_schedule['title'] >
	>
	type $piterjs_intro_page__title__K0WKZBPR = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__7DG3IAKA = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_intro_page__title__594NKVVA = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_intro_page['title'] >
	>
	type $piterjs_intro_page__text__VC20VH0X = $mol_type_enforce<
		ReturnType< $piterjs_intro['afterparty'] >
		,
		ReturnType< $piterjs_intro_page['text'] >
	>
	type $piterjs_screen__place__XN5A6M5Z = $mol_type_enforce<
		ReturnType< $piterjs_intro['place'] >
		,
		ReturnType< $piterjs_screen['place'] >
	>
	type $piterjs_screen__content__H2XYC47U = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $piterjs_screen['content'] >
	>
	type $mol_nav__keys_x__NF4SO47O = $mol_type_enforce<
		ReturnType< $piterjs_intro['page_ids'] >
		,
		ReturnType< $mol_nav['keys_x'] >
	>
	type $mol_nav__keys_y__ZE6N51H3 = $mol_type_enforce<
		ReturnType< $piterjs_intro['page_ids'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_x__HKAIGRI6 = $mol_type_enforce<
		ReturnType< $piterjs_intro['page'] >
		,
		ReturnType< $mol_nav['current_x'] >
	>
	type $mol_nav__current_y__QV2OFZLU = $mol_type_enforce<
		ReturnType< $piterjs_intro['page'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	export class $piterjs_intro extends $mol_view {
		Main( ): $piterjs_intro_main
		About( ): $piterjs_intro_page
		Team( ): $piterjs_intro_page
		Roles_org( ): $piterjs_intro_page
		Roles_place( ): $piterjs_intro_page
		Contribution( ): $piterjs_intro_page
		Speakers( ): $piterjs_intro_page
		Sponsors( ): $piterjs_intro_page
		place_title( ): string
		place_notes( ): string
		Place( ): $piterjs_intro_page
		Schedule( ): $piterjs_schedule
		Proft( ): $piterjs_intro_page
		afterparty( ): string
		Afterparty( ): $piterjs_intro_page
		place( ): $piterjs_place
		Page( ): $mol_view
		Screen( ): $piterjs_screen
		page_ids( ): readonly(string)[]
		Nav( ): $mol_nav
		title( ): string
		meetup( ): $piterjs_meetup
		page( next?: string ): string
		pages( ): Record<string, $piterjs_intro_page>
		sub( ): readonly(any)[]
		attr( ): ({ 
			'tabindex': number,
		}) 
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=intro.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_intro extends $.$piterjs_intro {
        dom_node(): Element;
        page_ids(): string[];
        Page(): $piterjs_intro_page;
        place(): $piterjs_place;
        place_title(): string;
        place_notes(): string;
        afterparty(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_string__hint__CHTB9ZI8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__NBT4NX3F = $mol_type_enforce<
		ReturnType< $piterjs_video_page['source'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__6QRUFLX9 = $mol_type_enforce<
		ReturnType< $piterjs_video_page['editing'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_link__arg__EHYB4ZUR = $mol_type_enforce<
		({ 
			'video': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__KJH4HEV5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_frame__uri__VLJDL7A3 = $mol_type_enforce<
		ReturnType< $piterjs_video_page['uri'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $piterjs_video_page extends $mol_page {
		source( next?: string ): string
		editing( ): boolean
		Link( ): $mol_string
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		uri( ): ReturnType< $piterjs_video_page['source'] >
		Frame( ): $mol_frame
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_video_page extends $.$piterjs_video_page {
        uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_terrain extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=terrain.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_lead_pencil extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pencil.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_image extends $mol_svg {
		pos_x( ): string
		pos_y( ): string
		size_x( ): string
		size_y( ): string
		uri( ): string
		aspect( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		size( ): readonly(any)[]
		attr( ): ({ 
			'x': ReturnType< $mol_svg_image['pos_x'] >,
			'y': ReturnType< $mol_svg_image['pos_y'] >,
			'width': ReturnType< $mol_svg_image['size_x'] >,
			'height': ReturnType< $mol_svg_image['size_y'] >,
			'href': ReturnType< $mol_svg_image['uri'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_image['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_image extends $.$mol_svg_image {
        pos_x(): any;
        pos_y(): any;
        size_x(): any;
        size_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_svg_image__style__H3R5NKNU = $mol_type_enforce<
		({ 
			'transform': ReturnType< $mol_plot_map_tiles['tile_transform'] >,
		}) 
		,
		ReturnType< $mol_svg_image['style'] >
	>
	type $mol_svg_image__uri__NTF2ZTYL = $mol_type_enforce<
		ReturnType< $mol_plot_map_tiles['tile_uri'] >
		,
		ReturnType< $mol_svg_image['uri'] >
	>
	type $mol_svg_image__pos__7CDFTJN1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_image['pos'] >
	>
	type $mol_svg_image__size__F9WUM0UZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_image['size'] >
	>
	export class $mol_plot_map_tiles extends $mol_plot_graph {
		tiles( ): readonly(any)[]
		tile_transform( id: any): string
		tile_uri( id: any): string
		tile_size_real( ): number
		level( ): number
		level_pyramid( ): number
		tiles_limit( ): number
		uri_template( ): string
		sub( ): ReturnType< $mol_plot_map_tiles['tiles'] >
		Tile( id: any): $mol_svg_image
	}
	
}

//# sourceMappingURL=tiles.view.tree.d.ts.map
declare namespace $.$$ {
    type Id = [number, number, number];
    export class $mol_plot_map_tiles extends $.$mol_plot_map_tiles {
        level(): number;
        tiles(): $.$mol_svg_image[];
        tile_uri(id: Id): string;
        tile_transform(id: Id): string;
        tile_at(pos: [number, number, number]): number[];
        back(): readonly $.$mol_svg[];
        front(): never[];
    }
    export {};
}

declare namespace $.$$ {
    class $hyoo_map_pane extends $.$hyoo_map_pane {
        geo_to_tile_x(val: number): number;
        geo_to_tile_y(val: number): number;
        geo_to_tile(val: $mol_vector_2d<number>): $mol_vector_2d<number>;
    }
}

declare namespace $ {

	type $mol_vector_2d__Z650VNKH = $mol_type_enforce<
		[ ReturnType< $hyoo_map_pane['zoom'] >, ReturnType< $hyoo_map_pane['zoom'] > ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $hyoo_map_pane extends $mol_plot_pane {
		gap_hor( ): number
		gap_vert( ): number
		geo_to_tile_x( id: any): number
		geo_to_tile_y( id: any): number
		geo_to_tile( id: any): $mol_vector_2d<number>
		scale( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
	}
	
}

//# sourceMappingURL=pane.view.tree.d.ts.map
declare namespace $ {
    type $mol_type_unary_func = ((param: any) => any);
    type $mol_type_unary_class = new (param: any) => any;
    type $mol_type_unary = $mol_type_unary_func | $mol_type_unary_class;
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    function $mol_func_is_class<Func extends Function>(func: Func): func is Func & (new (...args: any[]) => any);
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    type Guard_value<Funcs extends $mol_type_unary[], Index extends keyof Funcs> = $mol_type_param<Index extends keyof $mol_type_tail<Funcs> ? $mol_type_tail<Funcs>[Index] : any, 0>;
    type Guard<Funcs extends $mol_type_unary[]> = {
        [Index in keyof Funcs]: (Funcs[Index] extends $mol_type_unary_func ? (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index> : new (input: $mol_type_param<Funcs[Index], 0>) => Guard_value<Funcs, Index>);
    };
    export function $mol_data_pipe<Funcs extends $mol_type_unary[]>(...funcs: Funcs & Guard<Funcs>): ((this: any, input: $mol_type_param<Funcs[0], 0>) => $mol_type_result<$mol_type_foot<Funcs>>) & {
        config: {
            funcs: Funcs & Guard<Funcs>;
        };
        Value: $mol_type_result<$mol_type_foot<Funcs>>;
    };
    export {};
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<$mol_type_override<Partial<Val>, Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>>;
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }>, Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, { [Field in keyof { [key in keyof Sub]: Parameters<Sub[key]>[0]; }]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; }[keyof Sub]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>;
    };
}

declare namespace $ {
    let $mol_geo_search_attribution: string;
    function $mol_geo_search({ query, count }: {
        query: string;
        count?: number;
    }): {
        coord: $mol_vector_2d<number>;
        box: $mol_vector_2d<$mol_vector_range<number>>;
    }[];
}

declare namespace $ {
    function $mol_offline(): void;
}

declare namespace $ {
    function $mol_offline_web(): void;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_map extends $.$hyoo_map {
        photo(next?: boolean): boolean;
        center_offset(): $mol_vector_2d<number>;
        center(next?: $mol_vector_2d<number>): $mol_vector_2d<number>;
        zoom_limit(): $mol_vector_range<number>;
        zoom(next?: number): number;
        search(): void;
        geo_jump(coord: $mol_vector_2d<number>, zoom?: number): void;
        draw_uri(): string;
        tiles_uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_search__query__MXT4VQAA = $mol_type_enforce<
		ReturnType< $hyoo_map['query'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__submit__GYU44SFC = $mol_type_enforce<
		ReturnType< $hyoo_map['search'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_check_icon__hint__UKV6KI3A = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__DQVJIVXV = $mol_type_enforce<
		ReturnType< $hyoo_map['photo'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__NJG0RC2X = $mol_type_enforce<
		ReturnType< $hyoo_map['Photo_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_link_iconed__hint__EWLAORU7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__RXKRAB25 = $mol_type_enforce<
		ReturnType< $hyoo_map['draw_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__sub__F1CONXA5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['sub'] >
	>
	type $mol_link_source__uri__RZSLLSWO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $hyoo_map_geo_to_tile_x__X1980WID = $mol_type_enforce<
		Parameters< $hyoo_map['geo_to_tile_x'] >[0]
		,
		Parameters< ReturnType< $hyoo_map['Pane'] >['geo_to_tile_x'] >[0]
	>
	type $hyoo_map_geo_to_tile_y__LUNB7H6K = $mol_type_enforce<
		Parameters< $hyoo_map['geo_to_tile_y'] >[0]
		,
		Parameters< ReturnType< $hyoo_map['Pane'] >['geo_to_tile_y'] >[0]
	>
	type $mol_vector_2d__H2MKMHMM = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_plot_map_tiles__level_pyramid__53B5WK74 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_plot_map_tiles['level_pyramid'] >
	>
	type $mol_plot_map_tiles__tile_size_real__B04DU5JL = $mol_type_enforce<
		ReturnType< $hyoo_map['tile_size'] >
		,
		ReturnType< $mol_plot_map_tiles['tile_size_real'] >
	>
	type $mol_plot_map_tiles__uri_template__07BBRXOK = $mol_type_enforce<
		ReturnType< $hyoo_map['tiles_uri'] >
		,
		ReturnType< $mol_plot_map_tiles['uri_template'] >
	>
	type $hyoo_map_pane__allow_draw__KSLI7V0M = $mol_type_enforce<
		boolean
		,
		ReturnType< $hyoo_map_pane['allow_draw'] >
	>
	type $hyoo_map_pane__zoom__PCT842VD = $mol_type_enforce<
		ReturnType< $hyoo_map['zoom'] >
		,
		ReturnType< $hyoo_map_pane['zoom'] >
	>
	type $hyoo_map_pane__shift__X3X2TKWA = $mol_type_enforce<
		ReturnType< $hyoo_map['center'] >
		,
		ReturnType< $hyoo_map_pane['shift'] >
	>
	type $hyoo_map_pane__graphs__WSHH3AAU = $mol_type_enforce<
		ReturnType< $hyoo_map['graphs'] >
		,
		ReturnType< $hyoo_map_pane['graphs'] >
	>
	type $mol_link__title__410ZEXJC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__uri__L84F7U9B = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link_iconed__title__TFC4C0F9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__ZMWKEJPZ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__Q43FOINW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__IKD5X40S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_view__sub__57QL8PRS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page__head__7B6C7FXO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['head'] >
	>
	type $mol_page__sub__PXU6CR5U = $mol_type_enforce<
		ReturnType< $hyoo_map['main_sub'] >
		,
		ReturnType< $mol_page['sub'] >
	>
	export class $hyoo_map extends $mol_view {
		photo( next?: boolean ): boolean
		center_offset( ): any
		Theme( ): $mol_theme_auto
		query( next?: string ): string
		search( next?: any ): any
		Search( ): $mol_search
		Lights( ): $mol_lights_toggle
		Photo_icon( ): $mol_icon_terrain
		Photo( ): $mol_check_icon
		draw_uri( ): string
		Draw_icon( ): $mol_icon_lead_pencil
		Draw( ): $mol_link_iconed
		Source( ): $mol_link_source
		Main_head( ): ReturnType< ReturnType< $hyoo_map['Main'] >['Head'] >
		geo_to_tile_x( id: any): ReturnType< ReturnType< $hyoo_map['Pane'] >['geo_to_tile_x'] >
		geo_to_tile_y( id: any): ReturnType< ReturnType< $hyoo_map['Pane'] >['geo_to_tile_y'] >
		zoom( next?: number ): number
		center( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		tile_size( ): number
		tiles_uri( ): string
		Tiles( ): $mol_plot_map_tiles
		graphs( ): readonly(any)[]
		Pane( ): $hyoo_map_pane
		ESRI( ): $mol_link
		OSM( ): $mol_link_iconed
		CARTO( ): $mol_link_iconed
		Attribution( ): $mol_view
		main_sub( ): readonly(any)[]
		Main( ): $mol_page
		attr( ): ({ 
			'hyoo_map_photo': ReturnType< $hyoo_map['photo'] >,
		}) 
		tiles_options( ): ({ 
			'sketch': string,
			'photo': string,
		}) 
		auto( ): readonly(any)[]
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=map.view.tree.d.ts.map
declare namespace $ {

	type $piterjs_place_page_title__JE57OZYU = $mol_type_enforce<
		Parameters< $piterjs_place_page['title'] >[0]
		,
		Parameters< ReturnType< $piterjs_place_page['place'] >['title'] >[0]
	>
	type $piterjs_place_page_address__WN7QQVB8 = $mol_type_enforce<
		Parameters< $piterjs_place_page['address'] >[0]
		,
		Parameters< ReturnType< $piterjs_place_page['place'] >['address'] >[0]
	>
	type $piterjs_place_page_route__QEBQOTFW = $mol_type_enforce<
		Parameters< $piterjs_place_page['route'] >[0]
		,
		Parameters< ReturnType< $piterjs_place_page['place'] >['route'] >[0]
	>
	type $mol_link__arg__RPUHAQRO = $mol_type_enforce<
		({ 
			'place': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__LUZNCFTL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_string__hint__ELWJZ2L2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__MWDO3CCF = $mol_type_enforce<
		ReturnType< $piterjs_place_page['address'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__GPMBQUKX = $mol_type_enforce<
		ReturnType< $piterjs_place_page['editing'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_textarea__hint__EIV0TL7X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__1O3UVPLA = $mol_type_enforce<
		ReturnType< $piterjs_place_page['route'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__enabled__ANEBGCBG = $mol_type_enforce<
		ReturnType< $piterjs_place_page['editing'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_view__sub__3DWJNQZS = $mol_type_enforce<
		ReturnType< $piterjs_place_page['info'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__value__3SE60ZT5 = $mol_type_enforce<
		ReturnType< $piterjs_place_page['title'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__VZVOPMUT = $mol_type_enforce<
		ReturnType< $piterjs_place_page['editing'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__hint__LYJQ1MVK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	export class $piterjs_place_page extends $mol_page {
		title( next?: ReturnType< ReturnType< $piterjs_place_page['place'] >['title'] > ): ReturnType< ReturnType< $piterjs_place_page['place'] >['title'] >
		address( next?: ReturnType< ReturnType< $piterjs_place_page['place'] >['address'] > ): ReturnType< ReturnType< $piterjs_place_page['place'] >['address'] >
		route( next?: ReturnType< ReturnType< $piterjs_place_page['place'] >['route'] > ): ReturnType< ReturnType< $piterjs_place_page['place'] >['route'] >
		editing( ): boolean
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		Address( ): $mol_string
		Route( ): $mol_textarea
		info( ): readonly(any)[]
		Info( ): $mol_view
		Map( ): $hyoo_map
		map_locate( ): any
		place( ): $piterjs_place
		Title( ): $mol_string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		auto( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_place_page extends $.$piterjs_place_page {
        coords(): $mol_vector_2d<number>;
        info(): ($.$mol_string | $.$mol_textarea)[];
        map_locate(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_paragraph__sub__MO7IIPED = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__AU6EYKE8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__0RTSGIAH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $piterjs_others_event extends $mol_link_iconed {
		location( ): string
		Location( ): $mol_paragraph
		date( ): string
		Date( ): $mol_paragraph
		title( ): string
		Title( ): $mol_paragraph
		start( ): $mol_time_moment
		target( ): string
		content( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=event.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_others_event extends $.$piterjs_others_event {
        date(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_data_optional<Sub extends $mol_data_value, Fallback extends undefined | (() => ReturnType<Sub>)>(sub: Sub, fallback?: Fallback): ((val: Parameters<Sub>[0] | undefined) => ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>)) & {
        config: {
            sub: Sub;
            fallback: Fallback | undefined;
        };
        Value: ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>);
    };
}

declare namespace $ {
    let $mol_data_boolean: (val: boolean) => boolean;
}

declare namespace $ {

	type $mol_link__uri__RRF4JO5U = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__target__3RCO9ZMK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['target'] >
	>
	type $mol_link__hint__907V1L73 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub__LCY4IZXM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link__arg__M20DZN3V = $mol_type_enforce<
		({ 
			'others': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__ROVYQPBK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_list__rows__51SMFJLB = $mol_type_enforce<
		ReturnType< $piterjs_others['events'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $piterjs_others_event__title__CU4UNUR8 = $mol_type_enforce<
		ReturnType< $piterjs_others['event_title'] >
		,
		ReturnType< $piterjs_others_event['title'] >
	>
	type $piterjs_others_event__uri__WPVDN2O9 = $mol_type_enforce<
		ReturnType< $piterjs_others['event_uri'] >
		,
		ReturnType< $piterjs_others_event['uri'] >
	>
	type $piterjs_others_event__start__C1QNE1YB = $mol_type_enforce<
		ReturnType< $piterjs_others['event_start'] >
		,
		ReturnType< $piterjs_others_event['start'] >
	>
	type $piterjs_others_event__location__ST8TNQUI = $mol_type_enforce<
		ReturnType< $piterjs_others['event_location'] >
		,
		ReturnType< $piterjs_others_event['location'] >
	>
	export class $piterjs_others extends $mol_page {
		Add_icon( ): $mol_icon_plus
		Add( ): $mol_link
		Close_icon( ): $mol_icon_close
		Close( ): $mol_link
		events( ): readonly($mol_view)[]
		Events( ): $mol_list
		event_title( id: any): string
		event_uri( id: any): string
		event_start( id: any): $mol_time_moment
		event_location( id: any): string
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
		Event( id: any): $piterjs_others_event
	}
	
}

//# sourceMappingURL=others.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_others extends $.$piterjs_others {
        list(): readonly Readonly<{
            location?: string | undefined;
            description?: string | undefined;
            allDay?: boolean | undefined;
            end: $mol_time_moment;
            start: $mol_time_moment;
            summary: string;
            uid: string;
        }>[];
        list_future(): Readonly<{
            location?: string | undefined;
            description?: string | undefined;
            allDay?: boolean | undefined;
            end: $mol_time_moment;
            start: $mol_time_moment;
            summary: string;
            uid: string;
        }>[];
        dict(): Map<string, Readonly<{
            location?: string | undefined;
            description?: string | undefined;
            allDay?: boolean | undefined;
            end: $mol_time_moment;
            start: $mol_time_moment;
            summary: string;
            uid: string;
        }>>;
        events(): $.$piterjs_others_event[];
        event_title(uid: string): string;
        event_start(uid: string): $mol_time_moment;
        event_uri(uid: string): string;
        event_location(uid: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $hyoo_meta_person extends $hyoo_meta_model {
    }
}

declare namespace $.$$ {
    class $hyoo_meta_link extends $.$hyoo_meta_link {
        title(): string;
        uri(): string;
    }
}

declare namespace $ {

	type $mol_avatar__id__EB1X2NWB = $mol_type_enforce<
		ReturnType< $hyoo_meta_link['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_dimmer__haystack__I4UQQKW1 = $mol_type_enforce<
		ReturnType< $hyoo_meta_link['title'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__SOJG4OBN = $mol_type_enforce<
		ReturnType< $hyoo_meta_link['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	export class $hyoo_meta_link extends $mol_link {
		id( ): ReturnType< ReturnType< $hyoo_meta_link['meta'] >['id'] >
		title( ): ReturnType< ReturnType< $hyoo_meta_link['meta'] >['title'] >
		Avatar( ): $mol_avatar
		highlight( ): string
		Title( ): $mol_dimmer
		minimal_height( ): number
		meta( ): $hyoo_meta_model
		param( ): string
		all_title( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_bar extends $mol_view {
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_meta_rights extends $.$hyoo_meta_rights {
        editable(): boolean;
        blocks(): ($.$mol_list | $.$mol_form_field)[];
        editor_list(): $.$hyoo_meta_link[];
        editor_add_rows(): ($mol_button_minor | $.$hyoo_meta_link | $mol_bar)[];
        editor_add_id(next?: string): `${string}_${string}`;
        editor_add_allowed(): boolean;
        editor_add_bid(): string;
        editor_fill_all(): void;
        editor_add_submit(): void;
        editor_add_preview(): $hyoo_meta_person;
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__5BC6YYA1 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['peer'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $mol_list__rows__31DEPPUB = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_string__hint__0AV045QP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__IB4ZLJJK = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_id'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__enabled__OGQ5THL9 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editable'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_button_major__enabled__D6O5Q961 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_allowed'] >
		,
		ReturnType< $mol_button_major['enabled'] >
	>
	type $mol_button_major__click__DGZL9BTG = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_submit'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub__A2R6AXC9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_bar__sub__34C57UFJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_bar['sub'] >
	>
	type $hyoo_meta_link__meta__0IAUTDJ5 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_preview'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $mol_button_minor__title__YII7S5CH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click__TWXQM6YE = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_fill_all'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_list__rows__DUAYU7BN = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_form_field__name__2W0DK885 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bid__A74UP7BK = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['editor_add_bid'] >
		,
		ReturnType< $mol_form_field['bid'] >
	>
	type $mol_form_field__Content__OT21LA4I = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['Editor_add_form'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows__TLHMHML7 = $mol_type_enforce<
		ReturnType< $hyoo_meta_rights['blocks'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_meta_rights extends $mol_page {
		editors( ): ReturnType< ReturnType< $hyoo_meta_rights['meta'] >['editors'] >
		peer( id: any): $hyoo_meta_person
		Editor_link( id: any): $hyoo_meta_link
		editor_list( ): readonly(any)[]
		Editor_list( ): $mol_list
		editor_add_bid( ): string
		editor_add_id( next?: string ): string
		editable( ): boolean
		Editor_add_id( ): $mol_string
		editor_add_allowed( ): boolean
		editor_add_submit( next?: any ): any
		Editor_add_icon( ): $mol_icon_plus
		Editor_add_submit( ): $mol_button_major
		Editor_add_bar( ): $mol_bar
		editor_add_preview( ): $hyoo_meta_model
		Editor_add_preview( ): $hyoo_meta_link
		editor_fill_all( next?: any ): any
		Editor_fill_all( ): $mol_button_minor
		editor_add_rows( ): readonly(any)[]
		Editor_add_form( ): $mol_list
		Editor_add( ): $mol_form_field
		blocks( ): readonly(any)[]
		Content( ): $mol_list
		title( ): string
		meta( ): $hyoo_meta_model
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=rights.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {
    class $hyoo_page_side extends $hyoo_meta_model {
        referrers_node(): $hyoo_crowd_dict | null;
        referrers_list(): string[];
        referrers_stat(uri: string): number;
        referrers_track(uri: string): void | undefined;
        details_node(): $hyoo_crowd_text | null;
        details(next?: string): string;
        details_selection(next?: number[]): number[];
        release_node(): $hyoo_crowd_blob | null;
        release(next?: string): string;
        released(): boolean;
        publish(): void;
        content(): string;
        content_full(): string;
        changed_moment(): $mol_time_moment;
        book(next?: $hyoo_page_side | null): $hyoo_page_side | null;
        books(): readonly $hyoo_page_side[];
        bookmarks_node(next?: readonly $hyoo_page_side[]): $hyoo_crowd_list;
        bookmarks(next?: readonly $hyoo_page_side[]): $hyoo_page_side[];
        pages_node(): $hyoo_crowd_list;
        pages(next?: readonly $hyoo_page_side[]): $hyoo_page_side[];
        following(): $hyoo_page_side;
        following_in(): $hyoo_page_side | null;
        following_out(): $hyoo_page_side | null;
        bookmarked(id: $mol_int62_string, next?: boolean): boolean;
        authors(): `${string}_${string}`[];
        aura(next?: string): string;
        aura_effective(): string;
        history_node(): $hyoo_crowd_list | null;
        history(): Set<`${string}_${string}`>;
        history_add(id: $mol_int62_string): void;
        news(): $hyoo_page_side[];
    }
}

declare namespace $.$$ {
    class $hyoo_page_side_news extends $.$hyoo_page_side_news {
        items(): $.$hyoo_meta_link[];
        item(side: $hyoo_page_side): $hyoo_page_side;
        item_title(side: $hyoo_page_side): string;
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__1SVP9IBY = $mol_type_enforce<
		ReturnType< $hyoo_page_side_news['item'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__title__3TIYDX1Y = $mol_type_enforce<
		ReturnType< $hyoo_page_side_news['item_title'] >
		,
		ReturnType< $hyoo_meta_link['title'] >
	>
	type $hyoo_meta_link__Avatar__ZFGDYBQW = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_meta_link['Avatar'] >
	>
	type $mol_list__rows__UAQ7ZPTC = $mol_type_enforce<
		ReturnType< $hyoo_page_side_news['items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_page_side_news extends $mol_page {
		news( ): ReturnType< ReturnType< $hyoo_page_side_news['side'] >['news'] >
		item( id: any): $hyoo_page_side
		item_title( id: any): string
		Item( id: any): $hyoo_meta_link
		items( ): readonly(any)[]
		Section_list( ): $mol_list
		side( ): $hyoo_page_side
		title( ): string
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $mol_page['attr'] >
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=news.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_magnify extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=magnify.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pencil extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pencil.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pencil_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node_external(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {

	export class $mol_drag extends $mol_ghost {
		start( next?: any ): any
		drag_start( next?: ReturnType< $mol_drag['start'] > ): ReturnType< $mol_drag['start'] >
		move( next?: any ): any
		drag_move( next?: ReturnType< $mol_drag['move'] > ): ReturnType< $mol_drag['move'] >
		end( next?: any ): any
		drag_end( next?: ReturnType< $mol_drag['end'] > ): ReturnType< $mol_drag['end'] >
		status( next?: string ): string
		event( ): ({ 
			dragstart( next?: ReturnType< $mol_drag['drag_start'] > ): ReturnType< $mol_drag['drag_start'] >,
			drag( next?: ReturnType< $mol_drag['drag_move'] > ): ReturnType< $mol_drag['drag_move'] >,
			dragend( next?: ReturnType< $mol_drag['drag_end'] > ): ReturnType< $mol_drag['drag_end'] >,
		}) 
		attr( ): ({ 
			'draggable': boolean,
			'mol_drag_status': ReturnType< $mol_drag['status'] >,
		}) 
		transfer( ): ({ 
			'text/plain': string,
			'text/html': string,
			'text/uri-list': string,
		}) 
		allow_copy( ): boolean
		allow_link( ): boolean
		allow_move( ): boolean
		image( ): ReturnType< $mol_drag['dom_node'] >
	}
	
}

//# sourceMappingURL=drag.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_drag extends $.$mol_drag {
        status(next?: "ready" | "drag"): "ready" | "drag";
        drag_start(event: DragEvent): void;
        drag_end(event: DragEvent): void;
    }
}

declare namespace $ {

	export class $mol_drop extends $mol_ghost {
		enter( next?: any ): any
		move( next?: any ): any
		leave( next?: any ): any
		drop( next?: any ): any
		status( next?: string ): string
		enabled( next?: boolean ): boolean
		event( ): ({ 
			dragenter( next?: ReturnType< $mol_drop['enter'] > ): ReturnType< $mol_drop['enter'] >,
			dragover( next?: ReturnType< $mol_drop['move'] > ): ReturnType< $mol_drop['move'] >,
			dragleave( next?: ReturnType< $mol_drop['leave'] > ): ReturnType< $mol_drop['leave'] >,
			drop( next?: ReturnType< $mol_drop['drop'] > ): ReturnType< $mol_drop['drop'] >,
		}) 
		attr( ): ({ 
			'mol_drop_status': ReturnType< $mol_drop['status'] >,
		}) 
		adopt( next?: Record<string, any> ): Record<string, any>
		receive( next?: any ): any
		allow( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=drop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_drop extends $.$mol_drop {
        status(next?: "ready" | "drag"): "ready" | "drag";
        protected _target: EventTarget | null;
        enter(event: DragEvent): void;
        move(event: DragEvent): void;
        decide_action(event: DragEvent): any;
        leave(event: DragEvent): void;
        receive(transfer: unknown): unknown;
        drop(event: DragEvent): void;
    }
}

declare namespace $ {

	export class $mol_icon_pin extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=pin.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_pin_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_meta_menu_items extends $.$hyoo_meta_menu_items {
        id(): `${string}_${string}`;
        editable(): boolean;
        item_editable(id: $mol_int62_string): boolean;
        ids(): readonly `${string}_${string}`[];
        items(): $.$mol_list[];
        item(id: $mol_int62_string): $hyoo_meta_model;
        item_expandable(id: $mol_int62_string): boolean;
        item_content(id: $mol_int62_string): $mol_view[];
        item_row(id: $mol_int62_string): ($mol_button_minor | $.$mol_drop)[];
        item_remove(id: $mol_int62_string): void;
        item_pin(id: $mol_int62_string): void;
        add(): any;
        item_html(id: $mol_int62_string): string;
        item_text(id: $mol_int62_string): string;
        transfer_adopt(transfer: DataTransfer): `${string}_${string}` | null | undefined;
        receive_after(anchor: $mol_int62_string, dropped: $mol_int62_string): void;
        receive_inside(anchor: $mol_int62_string, dropped: $mol_int62_string): void;
    }
}

declare namespace $ {

	type $hyoo_meta_menu_items_item_title__42BBEP8U = $mol_type_enforce<
		Parameters< $hyoo_meta_menu_items['item_title'] >[0]
		,
		Parameters< $hyoo_meta_menu_items['item'] >[0]
	>
	type $mol_check_expand__expandable__9MDLIAA5 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__expanded__2F7XJSU4 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	type $hyoo_meta_link__meta__I212XME5 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__param__TPNR7C6R = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['param'] >
		,
		ReturnType< $hyoo_meta_link['param'] >
	>
	type $hyoo_meta_link__highlight__FL7AKO5C = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['highlight'] >
		,
		ReturnType< $hyoo_meta_link['highlight'] >
	>
	type $hyoo_meta_link__Avatar__OMXXVTQ8 = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_meta_link['Avatar'] >
	>
	type $mol_drag__end__POUCD1I8 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_drag_end'] >
		,
		ReturnType< $mol_drag['end'] >
	>
	type $mol_drag__transfer__W399O5E4 = $mol_type_enforce<
		({ 
			'text/plain': ReturnType< $hyoo_meta_menu_items['item_text'] >,
			'text/html': ReturnType< $hyoo_meta_menu_items['item_html'] >,
			'text/uri-list': ReturnType< $hyoo_meta_menu_items['item_uri'] >,
		}) 
		,
		ReturnType< $mol_drag['transfer'] >
	>
	type $mol_drag__Sub__VRYAOS1E = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['Item_link'] >
		,
		ReturnType< $mol_drag['Sub'] >
	>
	type $mol_drop__enabled__8U46N8TH = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['editable'] >
		,
		ReturnType< $mol_drop['enabled'] >
	>
	type $mol_drop__adopt__GX0GCB08 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__4IUNXB7Q = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['receive_after'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow__3IQDAS9T = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub__31RWW9ZP = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['Item_drag'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_button_minor__hint__ZZS1O0MJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__RMLRH76L = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_remove'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__P180Z4EK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__3XWXQJX2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__HFJE23F6 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_pin'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__9SODCET4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint__7YSHM716 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__5I7REOII = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__ELJKW9RZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_drop__enabled__X1R4FI58 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['editable'] >
		,
		ReturnType< $mol_drop['enabled'] >
	>
	type $mol_drop__adopt__4O06PP2O = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__CTTI61WD = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['receive_inside'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__allow__ZKEYIWNJ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_drop__Sub__KLIDQ8SX = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['Item_add'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_view__sub__R8YP8MRZ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_row'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_meta_menu_items__editing__N7MI8ZQS = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['editing'] >
		,
		ReturnType< $hyoo_meta_menu_items['editing'] >
	>
	type $hyoo_meta_menu_items__list__6IPKJH3M = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_list'] >
		,
		ReturnType< $hyoo_meta_menu_items['list'] >
	>
	type $hyoo_meta_menu_items__item__XLNOO5A1 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item'] >
		,
		ReturnType< $hyoo_meta_menu_items['item'] >
	>
	type $hyoo_meta_menu_items__item_moved__9TLNZ2FR = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
	>
	type $hyoo_meta_menu_items__item_expanded__VIBCBHQP = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
	>
	type $hyoo_meta_menu_items__item_list__ZZLHVQKJ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_list'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_list'] >
	>
	type $hyoo_meta_menu_items__item_uri__JF9LUSDU = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
	>
	type $hyoo_meta_menu_items__highlight__0RQ9F5NH = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['highlight'] >
		,
		ReturnType< $hyoo_meta_menu_items['highlight'] >
	>
	type $hyoo_meta_menu_items__item_add__CS18ETWN = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_add'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_add'] >
	>
	type $mol_list__rows__JY6WYS86 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu_items['item_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_meta_menu_items extends $mol_list {
		ids( ): ReturnType< ReturnType< $hyoo_meta_menu_items['list'] >['list'] >
		item_title( id: any): ReturnType< ReturnType< $hyoo_meta_menu_items['item'] >['title'] >
		item_expandable( id: any): boolean
		item_expanded( id: any, next?: boolean ): boolean
		Item_expand( id: any): $mol_check_expand
		editable( ): boolean
		transfer_adopt( next?: any ): any
		receive_after( id: any, next?: any ): any
		item_drag_end( id: any, next?: any ): any
		item_text( id: any): string
		item_html( id: any): string
		item_uri( id: any): string
		param( ): string
		highlight( ): string
		Item_link( id: any): $hyoo_meta_link
		Item_drag( id: any): $mol_drag
		Item_drop_after( id: any): $mol_drop
		item_remove( id: any, next?: any ): any
		Item_remove_icon( id: any): $mol_icon_close
		Item_remove( id: any): $mol_button_minor
		item_pin( id: any, next?: any ): any
		Item_pin_icon( id: any): $mol_icon_pin_outline
		Item_pin( id: any): $mol_button_minor
		receive_inside( id: any, next?: any ): any
		item_add( id: any, next?: any ): any
		Item_add_icon( id: any): $mol_icon_plus
		Item_add( id: any): $mol_button_minor
		Item_drop_inside( id: any): $mol_drop
		item_row( id: any): readonly(any)[]
		Item_row( id: any): $mol_view
		Item_items( id: any): $hyoo_meta_menu_items
		item_content( id: any): readonly(any)[]
		Item( id: any): $mol_list
		items( ): readonly(any)[]
		id( ): string
		editing( ): boolean
		drop_allow( ): readonly(any)[]
		list( ): $hyoo_crowd_list
		item( id: any): $hyoo_meta_model
		item_list( id: any): $hyoo_crowd_list
		item_moved( id: any, next?: any ): any
		rows( ): ReturnType< $hyoo_meta_menu_items['items'] >
	}
	
}

//# sourceMappingURL=items.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_meta_menu extends $.$hyoo_meta_menu {
        id(): `${string}_${string}`;
        head(): ($mol_view | $.$mol_search)[];
        editable(): boolean;
        item_editable(id: $mol_int62_string): boolean;
        tools(): readonly any[];
        body(): ($.$mol_drop | $.$hyoo_meta_menu_items)[];
        search_show(next?: boolean): boolean;
        item(id: $mol_int62_string): $hyoo_meta_model;
        found(): `${string}_${string}`[];
        add(): any;
        transfer_adopt(transfer: DataTransfer): `${string}_${string}` | null | undefined;
        receive_end(dropped: $mol_int62_string): void;
    }
}

declare namespace $ {

	type $hyoo_meta_menu_item_title__NZ6XV0YT = $mol_type_enforce<
		Parameters< $hyoo_meta_menu['item_title'] >[0]
		,
		Parameters< $hyoo_meta_menu['item'] >[0]
	>
	type $mol_search__query__BVBE8802 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['search'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_check_icon__hint__G4MJ86AI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__GYJ1P8XU = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['search_show'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__JH5F6WV3 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['Search_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint__YZ8ROHIY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__GRCBIZ4G = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__FIY103EZ = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['Editing_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_button_minor__hint__CLCB42WR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__KRNCZKFY = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__O8VSSQJK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $hyoo_meta_menu_items__editing__C4VD2I2L = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editing'] >
		,
		ReturnType< $hyoo_meta_menu_items['editing'] >
	>
	type $hyoo_meta_menu_items__drop_allow__XFC7RUP2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
	>
	type $hyoo_meta_menu_items__list__07719HI8 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['list'] >
		,
		ReturnType< $hyoo_meta_menu_items['list'] >
	>
	type $hyoo_meta_menu_items__ids__NRY77YDG = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['found'] >
		,
		ReturnType< $hyoo_meta_menu_items['ids'] >
	>
	type $hyoo_meta_menu_items__highlight__740MQYWK = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['search'] >
		,
		ReturnType< $hyoo_meta_menu_items['highlight'] >
	>
	type $hyoo_meta_menu_items__item_uri__0M5BWDKL = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_uri'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
	>
	type $hyoo_meta_menu_items__item_moved__AZECGJOD = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_moved'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
	>
	type $hyoo_meta_menu_items__item_add__8A5FWJLG = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_add'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_add'] >
	>
	type $hyoo_meta_menu_items__editing__O5QIAJAV = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editing'] >
		,
		ReturnType< $hyoo_meta_menu_items['editing'] >
	>
	type $hyoo_meta_menu_items__drop_allow__DPKL205Z = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['drop_allow'] >
		,
		ReturnType< $hyoo_meta_menu_items['drop_allow'] >
	>
	type $hyoo_meta_menu_items__list__E7H5DKD1 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['list'] >
		,
		ReturnType< $hyoo_meta_menu_items['list'] >
	>
	type $hyoo_meta_menu_items__item_uri__9VU6SH9A = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_uri'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_uri'] >
	>
	type $hyoo_meta_menu_items__item_expanded__E3DGWD5U = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_expanded'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_expanded'] >
	>
	type $hyoo_meta_menu_items__item_moved__44VS9XB8 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_moved'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_moved'] >
	>
	type $hyoo_meta_menu_items__item_list__DGQDS0JH = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_list'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_list'] >
	>
	type $hyoo_meta_menu_items__item_add__GL3RG480 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['item_add'] >
		,
		ReturnType< $hyoo_meta_menu_items['item_add'] >
	>
	type $mol_drop__enabled__4CWZT6EY = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['editable'] >
		,
		ReturnType< $mol_drop['enabled'] >
	>
	type $mol_drop__adopt__D6BIRPPF = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['transfer_adopt'] >
		,
		ReturnType< $mol_drop['adopt'] >
	>
	type $mol_drop__receive__N4CW9FUX = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['receive_end'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__R3558LK0 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['Drop_zone'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_drop__allow__3CZY5NF1 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['drop_allow'] >
		,
		ReturnType< $mol_drop['allow'] >
	>
	type $mol_avatar__id__NB26RO58 = $mol_type_enforce<
		ReturnType< $hyoo_meta_menu['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	export class $hyoo_meta_menu extends $mol_page {
		item_title( id: any): ReturnType< ReturnType< $hyoo_meta_menu['item'] >['title'] >
		ids( ): ReturnType< ReturnType< $hyoo_meta_menu['list'] >['list'] >
		world( ): ReturnType< ReturnType< $hyoo_meta_menu['list'] >['world'] >
		id( ): string
		search( next?: string ): string
		Search( ): $mol_search
		search_show( next?: boolean ): boolean
		Search_icon( ): $mol_icon_magnify
		Search_toggle( ): $mol_check_icon
		editing( next?: boolean ): boolean
		Editing_icon( ): $mol_icon_pencil_outline
		Editing( ): $mol_check_icon
		add( next?: any ): any
		Add_icon( ): $mol_icon_plus
		Add( ): $mol_button_minor
		found( ): readonly($mol_int62_string)[]
		item_uri( id: any): string
		item_add( id: any, next?: any ): any
		Found( ): $hyoo_meta_menu_items
		item_expanded( id: any, next?: boolean ): boolean
		Content( ): $hyoo_meta_menu_items
		transfer_adopt( next?: any ): any
		receive_end( next?: any ): any
		Drop_zone( ): $mol_view
		Drop_end( ): $mol_drop
		editable( ): boolean
		item_moved( id: any, next?: any ): any
		yard( ): $hyoo_sync_yard<any>
		item( id: any): $hyoo_meta_model
		list( ): $hyoo_crowd_list
		item_list( id: any): $hyoo_crowd_list
		drop_allow( ): readonly(any)[]
		Logo( ): $mol_avatar
		tools_ext( ): readonly(any)[]
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $.$$ {
    class $hyoo_page_side_menu extends $.$hyoo_page_side_menu {
        item_expanded(id: $mol_int62_string, next?: boolean): boolean;
        item_moved(what: $mol_int62_string, where: $mol_int62_string | null): void;
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__YROTSVDS = $mol_type_enforce<
		ReturnType< $hyoo_page_side_menu['side'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	export class $hyoo_page_side_menu extends $hyoo_meta_menu {
		title( ): ReturnType< ReturnType< $hyoo_page_side_menu['side'] >['title'] >
		side( ): $hyoo_page_side
		side_current( ): $hyoo_page_side
		Title( ): $hyoo_meta_link
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_minor__hint__FBPZM25Z = $mol_type_enforce<
		ReturnType< $mol_paginator['backward_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__D7LFED00 = $mol_type_enforce<
		ReturnType< $mol_paginator['backward'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__4997NLHP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__VRSWBZ1O = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__hint__2PXZC4LC = $mol_type_enforce<
		ReturnType< $mol_paginator['forward_hint'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__QIES5EMO = $mol_type_enforce<
		ReturnType< $mol_paginator['forward'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__DOQQ7T83 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_paginator extends $mol_bar {
		backward_hint( ): string
		backward( next?: any ): any
		Backward_icon( ): $mol_icon_chevron_left
		Backward( ): $mol_button_minor
		value( next?: number ): number
		Value( ): $mol_view
		forward_hint( ): string
		forward( next?: any ): any
		Forward_icon( ): $mol_icon_chevron_right
		Forward( ): $mol_button_minor
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paginator.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paginator extends $.$mol_paginator {
        backward(event: Event): void;
        forward(event: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_search_jumper_forward__DAUQQ0EP = $mol_type_enforce<
		Parameters< $mol_search_jumper['forward'] >[0]
		,
		Parameters< ReturnType< $mol_search_jumper['Index'] >['forward'] >[0]
	>
	type $mol_search_jumper_backward__LTB3L40U = $mol_type_enforce<
		Parameters< $mol_search_jumper['backward'] >[0]
		,
		Parameters< ReturnType< $mol_search_jumper['Index'] >['backward'] >[0]
	>
	type $mol_hotkey__mod_shift__1T1K8E11 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_shift'] >
	>
	type $mol_hotkey__key__KG568WLZ = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_search_jumper['backward'] > ): ReturnType< $mol_search_jumper['backward'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_hotkey__key__XI2HFOIS = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_search_jumper['forward'] > ): ReturnType< $mol_search_jumper['forward'] >,
			escape( next?: ReturnType< $mol_search_jumper['escape'] > ): ReturnType< $mol_search_jumper['escape'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_paginator__value__8B2RTM8S = $mol_type_enforce<
		ReturnType< $mol_search_jumper['index'] >
		,
		ReturnType< $mol_paginator['value'] >
	>
	export class $mol_search_jumper extends $mol_search {
		index( next?: number ): number
		forward( next?: ReturnType< ReturnType< $mol_search_jumper['Index'] >['forward'] > ): ReturnType< ReturnType< $mol_search_jumper['Index'] >['forward'] >
		backward( next?: ReturnType< ReturnType< $mol_search_jumper['Index'] >['backward'] > ): ReturnType< ReturnType< $mol_search_jumper['Index'] >['backward'] >
		Backward( ): $mol_hotkey
		escape( next?: any ): any
		Forward( ): $mol_hotkey
		Root( ): $mol_view
		Index( ): $mol_paginator
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=jumper.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search_jumper extends $.$mol_search_jumper {
        results(): $mol_view[][];
        index(next?: number): number;
        anchor_content(): ($mol_button_minor | $.$mol_string | $.$mol_paginator)[];
    }
}

declare namespace $ {

	export class $mol_icon_information extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=information.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_information_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_bookmark extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=bookmark.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_bookmark_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_page_side_view extends $.$hyoo_page_side_view {
        head(): ($mol_view | $.$mol_search_jumper)[];
        bookmark(next?: boolean): boolean;
        public(next?: boolean): boolean | undefined;
        Edit_toggle(): any;
        edit_toggle_label(): $mol_speck[];
        search_show(next?: boolean): boolean;
        search_start(event?: KeyboardEvent): void;
        search_stop(event?: KeyboardEvent): void;
        details(): string;
        Following(): $.$hyoo_meta_link;
        author_list(): $.$hyoo_meta_link[];
        slides_send(): void;
        history_mark(): void;
        author_link(id: $mol_int62_string): string;
    }
}

declare namespace $ {

	type $hyoo_page_side_view_title__NHLTC0L8 = $mol_type_enforce<
		Parameters< $hyoo_page_side_view['title'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_view['side'] >['title'] >[0]
	>
	type $hyoo_page_side_view_side_details__OI2M1YGD = $mol_type_enforce<
		Parameters< $hyoo_page_side_view['side_details'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_view['side'] >['details'] >[0]
	>
	type $mol_hotkey__key__HO77FY45 = $mol_type_enforce<
		({ 
			F( next?: ReturnType< $hyoo_page_side_view['search_start'] > ): ReturnType< $hyoo_page_side_view['search_start'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_hotkey__mod_ctrl__Y504W8WD = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_avatar__id__OMG7DHLS = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['id'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_check__checked__MBZBYDK8 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['menu_showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__hint__L5OD3FSY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__sub__N8BLT814 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_search_jumper__query__X5W242A8 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_query'] >
		,
		ReturnType< $mol_search_jumper['query'] >
	>
	type $mol_search_jumper__Root__IQ5NLDJP = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Details'] >
		,
		ReturnType< $mol_search_jumper['Root'] >
	>
	type $mol_search_jumper__clear__LE4WQ12O = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_stop'] >
		,
		ReturnType< $mol_search_jumper['clear'] >
	>
	type $mol_check_icon__hint__TOTK34Y7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__HHI1033P = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['editing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__9Q6EUJHO = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Edit_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__label__N608M4DD = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['edit_toggle_label'] >
		,
		ReturnType< $mol_check_icon['label'] >
	>
	type $mol_check_icon__hint__W3G3JYHL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__HQTG86TX = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_show'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__PAZDN44D = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Search_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint__X4Q09KWW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__3PJMNPEO = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['info'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__3W08FN8E = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Info_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__hint__LXA0MPNK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__5MQAV9MT = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['bookmark'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__L7LTEW4Y = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['Bookmark_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_text__text__WYDJTQNG = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['details'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight__9P53LECI = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['search_query'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_date__value_moment__AR73YDEF = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['changed_moment'] >
		,
		ReturnType< $mol_date['value_moment'] >
	>
	type $hyoo_meta_link__meta__MG4QL4TF = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['peer'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__uri__H7RSGY92 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['author_link'] >
		,
		ReturnType< $hyoo_meta_link['uri'] >
	>
	type $mol_view__sub__B6O54M1B = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['author_list'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $hyoo_meta_link__meta__5SRSSGWI = $mol_type_enforce<
		ReturnType< $hyoo_page_side_view['following'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $mol_view__sub__ML2CMVKA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $hyoo_page_side_view extends $mol_page {
		id( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['id'] >
		editable( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['editable'] >
		title( next?: ReturnType< ReturnType< $hyoo_page_side_view['side'] >['title'] > ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['title'] >
		side_details( next?: ReturnType< ReturnType< $hyoo_page_side_view['side'] >['details'] > ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['details'] >
		released( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['released'] >
		side_release( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['release'] >
		changed_moment( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['changed_moment'] >
		authors( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['authors'] >
		following( ): ReturnType< ReturnType< $hyoo_page_side_view['side'] >['following'] >
		search_start( next?: any ): any
		Search_start( ): $mol_hotkey
		slides_send( ): any
		history_mark( ): any
		menu_showed( next?: boolean ): boolean
		Avatar( ): $mol_avatar
		Menu_toggle( ): $mol_check
		search_query( next?: string ): string
		search_stop( next?: any ): any
		Search( ): $mol_search_jumper
		editing( next?: boolean ): boolean
		Edit_icon( ): $mol_icon_pencil_outline
		Unreleased( ): $mol_speck
		edit_toggle_label( ): readonly(any)[]
		Edit_toggle( ): $mol_check_icon
		search_show( next?: boolean ): boolean
		Search_icon( ): $mol_icon_magnify
		Search_toggle( ): $mol_check_icon
		info( next?: boolean ): boolean
		Info_icon( ): $mol_icon_information_outline
		Info_toggle( ): $mol_check_icon
		bookmark( next?: boolean ): boolean
		Bookmark_icon( ): $mol_icon_bookmark_outline
		Bookmark_toggle( ): $mol_check_icon
		details( ): string
		Details( ): $mol_text
		Changed( ): $mol_date
		author_link( id: any): string
		Author_link( id: any): $hyoo_meta_link
		author_list( ): readonly(any)[]
		Author_list( ): $mol_view
		Following( ): $hyoo_meta_link
		Signature( ): $mol_view
		profile( ): $hyoo_page_side
		peer( id: any): $hyoo_page_side
		book( ): $hyoo_page_side
		highlight( ): string
		side( ): $hyoo_page_side
		plugins( ): readonly(any)[]
		auto( ): readonly(any)[]
		Logo( ): ReturnType< $hyoo_page_side_view['Menu_toggle'] >
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_publish extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=publish.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_export extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=export.view.tree.d.ts.map
declare namespace $ {
    let $hyoo_marked_cut: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_line_content: $mol_regexp<{}>;
    let $hyoo_marked_line: $mol_regexp<{
        [x: string]: string;
        readonly inline: string;
        readonly code: string;
        readonly embed: string;
        readonly strong: string;
        readonly emphasis: string;
        readonly insertion: string;
        readonly deletion: string;
        readonly link: string;
        readonly marker: string;
        readonly uri: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_header: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_list_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_list_item: $mol_regexp<{
        [x: string]: string;
        readonly kids: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_list: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly kids: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_quote_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_quote: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_table_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
    let $hyoo_marked_table_row: $mol_regexp<{
        [x: string]: string;
        readonly content: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
    }>;
    let $hyoo_marked_table: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly indent: string;
        readonly marker: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_script_line: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
    }>;
    let $hyoo_marked_script: $mol_regexp<{
        [key: string]: string;
    } & {
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_paragraph: $mol_regexp<{
        [x: string]: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
    }>;
}

declare namespace $ {
    let $hyoo_marked_flow: $mol_regexp<{
        [x: string]: string;
        readonly header: string;
        readonly table: string;
        readonly list: string;
        readonly cut: string;
        readonly quote: string;
        readonly paragraph: string;
        readonly script: string;
        readonly win_end: string;
        readonly mac_end: string;
        readonly content: string;
        readonly marker: string;
        readonly indent: string;
        readonly kids: string;
    }>;
}

declare namespace $ {
    function $hyoo_marked_to_dom(this: $, marked: string): $mol_jsx.JSX.Element;
}

declare namespace $ {
    function $hyoo_marked_to_html(this: $, marked: string): string;
}

declare namespace $.$$ {
    class $hyoo_page_side_edit extends $.$hyoo_page_side_edit {
        publish(): void;
        permalink(): string;
        export_sign(): string;
        download_name(): string;
        copy_text(): string;
        download_blob(): Blob;
        copy_html(): string;
    }
}

declare namespace $ {

	type $hyoo_page_side_edit_title__M0OSQVUE = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['title'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['title'] >[0]
	>
	type $hyoo_page_side_edit_details__SZ233VTK = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['details'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['details'] >[0]
	>
	type $hyoo_page_side_edit_details_selection__Y5XL5IOW = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['details_selection'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['details_selection'] >[0]
	>
	type $hyoo_page_side_edit_aura__Y0727AIC = $mol_type_enforce<
		Parameters< $hyoo_page_side_edit['aura'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_edit['side'] >['aura'] >[0]
	>
	type $mol_link_iconed__hint__6LQ8XIUH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__GTCZ7CYB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__icon__VNDNLUYQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['icon'] >
	>
	type $mol_link_iconed__title__II777X2Y = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_button_minor__click__1XP8DCHD = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['publish'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__disabled__L7OJBB6Y = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['released'] >
		,
		ReturnType< $mol_button_minor['disabled'] >
	>
	type $mol_button_minor__hint__A61V175G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__sub__JRJXRGAV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_download__title__MPKHCCT1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_download['title'] >
	>
	type $mol_button_download__file_name__Q8MHAW9L = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['download_name'] >
		,
		ReturnType< $mol_button_download['file_name'] >
	>
	type $mol_button_download__blob__5OAMV4SJ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['download_blob'] >
		,
		ReturnType< $mol_button_download['blob'] >
	>
	type $mol_button_copy__title__EKEAIMWB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__text__OZWJEVWZ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['copy_text'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_button_copy__html__N8XB1P57 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['copy_html'] >
		,
		ReturnType< $mol_button_copy['html'] >
	>
	type $mol_pick__hint__15J9XOYK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_pick['hint'] >
	>
	type $mol_pick__trigger_content__Y5RNNTQO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['trigger_content'] >
	>
	type $mol_pick__bubble_content__MRHUJUTK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_pick['bubble_content'] >
	>
	type $mol_check_icon__hint__8GR2Y9Q4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked__YR6PKTF9 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['rights'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__TS8AXGIR = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['Rights_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_button_minor__click__BD22MDVD = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__IG4TDSTO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_textarea__hint__D5GTLAZE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_textarea['hint'] >
	>
	type $mol_textarea__value__BNBEMXO9 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['details'] >
		,
		ReturnType< $mol_textarea['value'] >
	>
	type $mol_textarea__selection__QXSG3VY5 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['details_selection'] >
		,
		ReturnType< $mol_textarea['selection'] >
	>
	type $mol_textarea__enabled__MP3YGA4B = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['editable'] >
		,
		ReturnType< $mol_textarea['enabled'] >
	>
	type $mol_string_button__hint__U8IHVALJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_button['hint'] >
	>
	type $mol_string_button__value__WPVEUQLE = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['aura'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_string_button__enabled__7ROWU98B = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['editable'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	type $mol_form_field__name__XFYNI77J = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__CIRWTB3R = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['Aura'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string_button__hint__9LJ59F4M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string_button['hint'] >
	>
	type $mol_string_button__value__337TDJAS = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['title'] >
		,
		ReturnType< $mol_string_button['value'] >
	>
	type $mol_string_button__enabled__Y8POMAR7 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_edit['editable'] >
		,
		ReturnType< $mol_string_button['enabled'] >
	>
	export class $hyoo_page_side_edit extends $mol_page {
		title( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['title'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['title'] >
		details( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details'] >
		details_selection( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details_selection'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['details_selection'] >
		content_full( ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['content_full'] >
		aura( next?: ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['aura'] > ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['aura'] >
		editable( ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['editable'] >
		released( ): ReturnType< ReturnType< $hyoo_page_side_edit['side'] >['released'] >
		Syntax( ): $mol_link_iconed
		publish( next?: any ): any
		Publish_icon( ): $mol_icon_publish
		Publish( ): $mol_button_minor
		Export_icon( ): $mol_icon_export
		download_name( ): string
		download_blob( ): $mol_blob
		Download( ): $mol_button_download
		copy_text( ): string
		copy_html( ): string
		Copy_html( ): $mol_button_copy
		Export( ): $mol_pick
		rights( next?: boolean ): boolean
		Rights_icon( ): $mol_icon_shield_account
		Rights_toggle( ): $mol_check_icon
		close( next?: any ): any
		Close_icon( ): $mol_icon_close
		Close( ): $mol_button_minor
		Details_edit( ): $mol_textarea
		Aura( ): $mol_string_button
		Aura_field( ): $mol_form_field
		side( ): $hyoo_page_side
		Title( ): $mol_string_button
		export_sign( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=edit.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_check_expand__checked__XIL5S7IO = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable__N44I35N9 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label__P3UFDBY4 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub__W8F8EWM7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__GX6TB1GQ = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {
    enum $mol_si_prefix {
        y = -8,
        z = -7,
        a = -6,
        f = -5,
        p = -4,
        n = -3,
        µ = -2,
        m = -1,
        '' = 0,
        k = 1,
        M = 2,
        G = 3,
        T = 4,
        P = 5,
        E = 6,
        Z = 7,
        Y = 8
    }
}

declare namespace $ {
    function $mol_si_short(numb: number, unit?: string): string;
}

declare namespace $ {
    function $mol_text_profile(text: string): Map<string, number>;
}

declare namespace $.$$ {
    class $hyoo_page_side_info extends $.$hyoo_page_side_info {
        slides_uri(): string;
        section_indexes(): number[];
        section_list(): $.$mol_link[];
        section_title(index: number): string;
        ref_list(): $mol_view[];
        ref_uri(uri: string): string;
        ref_stat(uri: string): number;
        weight(): string;
        word_stat(): Map<string, number>;
        word_list_items(): $mol_view[];
        word_item_text(word: string): string;
        word_item_stat(word: string): number;
        size(): string;
        chars(): string;
        words(): string;
    }
}

declare namespace $ {

	type $hyoo_page_side_info_text_header_title__61F3D8GY = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['text_header_title'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['Text'] >['block_text'] >[0]
	>
	type $hyoo_page_side_info_section_arg__WLPKW7M0 = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['section_arg'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['Text'] >['header_arg'] >[0]
	>
	type $hyoo_page_side_info_section_level__U7SZ3HNT = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['section_level'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['Text'] >['header_level'] >[0]
	>
	type $hyoo_page_side_info_referrers_stat__Q6Y18LSF = $mol_type_enforce<
		Parameters< $hyoo_page_side_info['referrers_stat'] >[0]
		,
		Parameters< ReturnType< $hyoo_page_side_info['side'] >['referrers_stat'] >[0]
	>
	type $mol_link_iconed__hint__0UR58JOM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__uri__IEUGR0A4 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['slides_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__VFPJ4FAO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_button_minor__click__QWDZHWZ4 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__4DW9I1R9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_labeler__title__P1YO1EUI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__QGDKQA0Y = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_labeler__title__50E9Q538 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__GTEUQAAX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_labeler__title__L6VT2WCK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__HBMXWPO6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_labeler__title__NZYIXG2R = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content__Z3EB6B8N = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_view__sub__N34TOO0G = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__arg__TNFAZX2Y = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__6PAHDE3D = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_title'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_expander__title__B3XCQ2JE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__U0UU25PC = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__content__3GYHS1XP = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['section_list'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_link_iconed__uri__47S8E774 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['ref_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_view__sub__P9NGEMRB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__R2GXAOKA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_expander__title__WE23KS9P = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__expanded__NDW2PSA5 = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['ref_expanded'] >
		,
		ReturnType< $mol_expander['expanded'] >
	>
	type $mol_expander__content__A6KBTOOG = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['ref_list'] >
		,
		ReturnType< $mol_expander['content'] >
	>
	type $mol_view__sub__J67M6JPF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_speck__value__7RB0GNAJ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['word_item_stat'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	type $mol_speck__theme__P8YDUSXN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_speck['theme'] >
	>
	type $mol_view__sub__MUEMYR6V = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_row__sub__VNYK3LKZ = $mol_type_enforce<
		ReturnType< $hyoo_page_side_info['word_list_items'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_expander__title__H5H5TUHD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_expander['title'] >
	>
	type $mol_expander__content__Y147O4ZA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $hyoo_page_side_info extends $mol_page {
		text_tokens( ): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['flow_tokens'] >
		text_header_title( id: any): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['block_text'] >
		section_arg( id: any): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['header_arg'] >
		section_level( id: any): ReturnType< ReturnType< $hyoo_page_side_info['Text'] >['header_level'] >
		details( ): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['details'] >
		details_node( ): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['details_node'] >
		referrers_list( ): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['referrers_list'] >
		referrers_stat( id: any): ReturnType< ReturnType< $hyoo_page_side_info['side'] >['referrers_stat'] >
		slides_uri( ): string
		Slides( ): $mol_link_iconed
		close( next?: any ): any
		Close_icon( ): $mol_icon_close
		Close( ): $mol_button_minor
		size( ): string
		Size( ): $mol_labeler
		chars( ): string
		Chars( ): $mol_labeler
		words( ): string
		Words( ): $mol_labeler
		weight( ): string
		Weight( ): $mol_labeler
		Stat( ): $mol_view
		section_expanded( next?: boolean ): boolean
		section_title( id: any): string
		Section_link( id: any): $mol_link
		section_list( ): readonly(any)[]
		Section_list( ): $mol_expander
		ref_expanded( next?: boolean ): boolean
		ref_uri( id: any): string
		Ref_item_link( id: any): $mol_link_iconed
		ref_stat( id: any): number
		Ref_item_stat( id: any): $mol_view
		Ref_item( id: any): $mol_view
		ref_list( ): readonly(any)[]
		Ref_list( ): $mol_expander
		word_item_text( id: any): string
		Word_item_text( id: any): $mol_view
		word_item_stat( id: any): number
		Word_item_stat( id: any): $mol_speck
		Word_item( id: any): $mol_view
		word_list_items( ): readonly(any)[]
		Word_list_items( ): $mol_row
		Word_list( ): $mol_expander
		Text( ): $mol_text
		side( ): $hyoo_page_side
		title( ): string
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=info.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_string__type__5LZ2V3TP = $mol_type_enforce<
		ReturnType< $mol_password['type'] >
		,
		ReturnType< $mol_string['type'] >
	>
	type $mol_string__hint__9HE8MJCH = $mol_type_enforce<
		ReturnType< $mol_password['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__value__FPC3DJO4 = $mol_type_enforce<
		ReturnType< $mol_password['value'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__submit__EXMPIX91 = $mol_type_enforce<
		ReturnType< $mol_password['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__5DDIOUQ4 = $mol_type_enforce<
		ReturnType< $mol_password['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_check_icon__checked__9GNWKJ04 = $mol_type_enforce<
		ReturnType< $mol_password['checked'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__GTOO5U5B = $mol_type_enforce<
		ReturnType< $mol_password['Show_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	export class $mol_password extends $mol_view {
		hint( ): string
		value( next?: string ): string
		submit( next?: any ): any
		enabled( ): boolean
		Pass( ): $mol_string
		checked( next?: boolean ): boolean
		Show_icon( ): $mol_icon_eye
		Show( ): $mol_check_icon
		content( ): readonly(any)[]
		type( next?: string ): string
		sub( ): ReturnType< $mol_password['content'] >
	}
	
}

//# sourceMappingURL=password.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_password extends $.$mol_password {
        checked(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_after_work extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_wait_rest_async(this: $): Promise<unknown>;
    function $mol_wait_rest(this: $): unknown;
}

declare namespace $.$$ {
    class $hyoo_meta_safe extends $.$hyoo_meta_safe {
        password_bid(): string;
        content(): $.$mol_list[];
        recall(next?: string): string;
        recall_enabled(): boolean;
        peer_current(): `${string}_${string}`;
        peer_new(): `${string}_${string}`;
        key_import(next?: string | null): string | null;
        key_new(): string | null;
        import_switch(): void;
        key_export(): string;
        export_rows(): ($.$mol_link | $.$mol_list)[];
        import_rows(): ($mol_button_minor | $.$mol_list)[];
        export_link(): string;
    }
}

declare namespace $ {

	type $mol_text__text__11WDPVYI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_password__value__VP9U5L4T = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['password'] >
		,
		ReturnType< $mol_password['value'] >
	>
	type $mol_form_field__name__3II1B4U1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__bids__LQCEUPIR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_form_field['bids'] >
	>
	type $mol_form_field__Content__VKBEV2ZU = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['Password'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_string__enabled__XGM7XVUA = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['recall_enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__value__VYRN3H4L = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['recall'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_form_field__name__OXM17QM4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_form_field['name'] >
	>
	type $mol_form_field__Content__XC078BZO = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['Recall'] >
		,
		ReturnType< $mol_form_field['Content'] >
	>
	type $mol_list__rows__A2KN072G = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_link__uri__LDC2T2IJ = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['export_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__title__QT2MREON = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__rows__QQ9WI3UY = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['export_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_text__text__HM1CHL6G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows__3PDVXYXT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_avatar__id__EY6R3E9U = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['peer_new'] >
		,
		ReturnType< $mol_avatar['id'] >
	>
	type $mol_button_minor__click__B447WTYQ = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['import_switch'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__6F2P6BUB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__KUEW3DAN = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['import_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows__LQB1QWXT = $mol_type_enforce<
		ReturnType< $hyoo_meta_safe['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $hyoo_meta_safe extends $mol_page {
		Expot_bid( ): $mol_text
		password_bid( ): string
		password( next?: string ): string
		Password( ): $mol_password
		Password_field( ): $mol_form_field
		recall_enabled( ): boolean
		recall( next?: string ): string
		Recall( ): $mol_string
		Recall_field( ): $mol_form_field
		Export_pass( ): $mol_list
		export_link( ): string
		Export_link( ): $mol_link
		export_rows( ): readonly(any)[]
		Export_block( ): $mol_list
		Iport_descr( ): $mol_text
		Import_pass( ): $mol_list
		import_switch( next?: any ): any
		peer_new( ): string
		Peer_new( ): $mol_avatar
		impot_switch_title( ): string
		Import_switch( ): $mol_button_minor
		import_rows( ): readonly(any)[]
		Import_block( ): $mol_list
		content( ): readonly(any)[]
		Content( ): $mol_list
		title( ): string
		yard( ): $hyoo_sync_yard<any>
		bid_pass_long( ): string
		key_size( ): number
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $mol_page['attr'] >
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=safe.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_image extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $hyoo_page_menu extends $.$hyoo_page_menu {
    }
}

declare namespace $ {

	type $hyoo_meta_link__meta__WPZRVN92 = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['side'] >
		,
		ReturnType< $hyoo_meta_link['meta'] >
	>
	type $hyoo_meta_link__hint__0WQARGTF = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_meta_link['hint'] >
	>
	type $hyoo_meta_link__Title__P3723L9O = $mol_type_enforce<
		any
		,
		ReturnType< $hyoo_meta_link['Title'] >
	>
	type $hyoo_meta_link__relation__Y70N9PBC = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_meta_link['relation'] >
	>
	type $hyoo_sync_online__yard__OKM99BT3 = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['yard'] >
		,
		ReturnType< $hyoo_sync_online['yard'] >
	>
	type $mol_check_icon__hint__8YNDI325 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__KWH5BJ9S = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['Safe_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__RZZIHIYN = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['safe_showing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_link_iconed__hint__6GDNDGLO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['hint'] >
	>
	type $mol_link_iconed__title__M9FCCWR8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__PNG88LF5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_check_icon__hint__EX4QZQMB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__Icon__RMJ5R655 = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['Aura_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__KMO3TU52 = $mol_type_enforce<
		ReturnType< $hyoo_page_menu['aura_showing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	export class $hyoo_page_menu extends $hyoo_meta_menu {
		side( ): $hyoo_page_side
		Profile( ): $hyoo_meta_link
		Online( ): $hyoo_sync_online
		Safe_icon( ): $mol_icon_key_variant
		safe_showing( next?: boolean ): boolean
		Safe_showing( ): $mol_check_icon
		About( ): $mol_link_iconed
		Aura_icon( ): $mol_icon_image
		aura_showing( next?: boolean ): boolean
		Aura_showing( ): $mol_check_icon
		Lights( ): $mol_lights_toggle
		title( ): string
		attr( ): ({ 
			'mol_theme': string,
		})  & ReturnType< $hyoo_meta_menu['attr'] >
		head( ): readonly(any)[]
		Logo( ): any
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=menu.view.tree.d.ts.map
declare namespace $ {
    function $mol_wire_stale<Res>(task: () => Res): Res | undefined;
}

declare namespace $.$$ {
    class $hyoo_page extends $.$hyoo_page {
        profile(): $hyoo_page_side;
        title(): string;
        aura_showing(next?: boolean): boolean;
        aura_image(): string;
        editing(next?: boolean): boolean;
        rights(next?: boolean): boolean;
        info(next?: boolean): boolean;
        safe(next?: boolean): boolean;
        edit_close(): void;
        rights_close(): void;
        info_close(): void;
        safe_close(): void;
        side(id: $mol_int62_string): $hyoo_page_side;
        side_uri(id: $mol_int62_string): string;
        side_current_id(): `${string}_${string}`;
        side_current(): $hyoo_page_side;
        side_current_book(): $hyoo_page_side;
        book_id(): "" | `${string}_${string}`;
        book_side(): $hyoo_page_side;
        book_pages_node(): $hyoo_crowd_list;
        side_menu_showed(next?: boolean): boolean;
        pages(): ($mol_view | $.$hyoo_meta_rights | $.$hyoo_page_side_menu | $.$hyoo_page_side_view | $.$hyoo_page_side_edit | $.$hyoo_page_side_info | $.$hyoo_meta_safe)[];
        page_add(): void;
        side_add(id: $mol_int62_string): void;
        ref_track(): void;
    }
}

declare namespace $ {

	type $hyoo_page_side_title__AGI8JUOS = $mol_type_enforce<
		Parameters< $hyoo_page['side_title'] >[0]
		,
		Parameters< $hyoo_page['side'] >[0]
	>
	type $hyoo_page_pages_node__87Y1QLX2 = $mol_type_enforce<
		Parameters< $hyoo_page['pages_node'] >[0]
		,
		Parameters< $hyoo_page['side'] >[0]
	>
	type $hyoo_page_side_news__side__KHPYBNPX = $mol_type_enforce<
		ReturnType< $hyoo_page['profile'] >
		,
		ReturnType< $hyoo_page_side_news['side'] >
	>
	type $hyoo_page_side_menu__yard__JQUIAORH = $mol_type_enforce<
		ReturnType< $hyoo_page['yard'] >
		,
		ReturnType< $hyoo_page_side_menu['yard'] >
	>
	type $hyoo_page_side_menu__side__OSQRHF9H = $mol_type_enforce<
		ReturnType< $hyoo_page['book_side'] >
		,
		ReturnType< $hyoo_page_side_menu['side'] >
	>
	type $hyoo_page_side_menu__side_current__I510HWI9 = $mol_type_enforce<
		ReturnType< $hyoo_page['side_current'] >
		,
		ReturnType< $hyoo_page_side_menu['side_current'] >
	>
	type $hyoo_page_side_menu__list__8HY10OE3 = $mol_type_enforce<
		ReturnType< $hyoo_page['book_pages_node'] >
		,
		ReturnType< $hyoo_page_side_menu['list'] >
	>
	type $hyoo_page_side_menu__item_list__YICUN9JT = $mol_type_enforce<
		ReturnType< $hyoo_page['pages_node'] >
		,
		ReturnType< $hyoo_page_side_menu['item_list'] >
	>
	type $hyoo_page_side_menu__item_uri__DY14D6GS = $mol_type_enforce<
		ReturnType< $hyoo_page['side_uri'] >
		,
		ReturnType< $hyoo_page_side_menu['item_uri'] >
	>
	type $hyoo_page_side_menu__item_add__4TDVDSNX = $mol_type_enforce<
		ReturnType< $hyoo_page['side_add'] >
		,
		ReturnType< $hyoo_page_side_menu['item_add'] >
	>
	type $hyoo_page_side_menu__tools_ext__0PYQEN7U = $mol_type_enforce<
		ReturnType< $hyoo_page['tools_ext'] >
		,
		ReturnType< $hyoo_page_side_menu['tools_ext'] >
	>
	type $hyoo_page_View_details__RYS6MAVK = $mol_type_enforce<
		Parameters< $hyoo_page['View_details'] >[0]
		,
		Parameters< $hyoo_page['View'] >[0]
	>
	type $hyoo_page_side_view__side__QIK97LC8 = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_view['side'] >
	>
	type $hyoo_page_side_view__peer__EB2RBRX5 = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_view['peer'] >
	>
	type $hyoo_page_side_view__profile__B6BHECFR = $mol_type_enforce<
		ReturnType< $hyoo_page['profile'] >
		,
		ReturnType< $hyoo_page_side_view['profile'] >
	>
	type $hyoo_page_side_view__menu_showed__1UMK7YVO = $mol_type_enforce<
		ReturnType< $hyoo_page['side_menu_showed'] >
		,
		ReturnType< $hyoo_page_side_view['menu_showed'] >
	>
	type $hyoo_page_side_view__editing__2U50KFIG = $mol_type_enforce<
		ReturnType< $hyoo_page['editing'] >
		,
		ReturnType< $hyoo_page_side_view['editing'] >
	>
	type $hyoo_page_side_view__info__D7DJXAYM = $mol_type_enforce<
		ReturnType< $hyoo_page['info'] >
		,
		ReturnType< $hyoo_page_side_view['info'] >
	>
	type $hyoo_page_side_view__highlight__EKVKV3Z0 = $mol_type_enforce<
		ReturnType< $hyoo_page['search'] >
		,
		ReturnType< $hyoo_page_side_view['highlight'] >
	>
	type $hyoo_page_side_edit__side__U4ZEQHKL = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_edit['side'] >
	>
	type $hyoo_page_side_edit__rights__TW2O7GXY = $mol_type_enforce<
		ReturnType< $hyoo_page['rights'] >
		,
		ReturnType< $hyoo_page_side_edit['rights'] >
	>
	type $hyoo_page_side_edit__close__YMEXB6ZD = $mol_type_enforce<
		ReturnType< $hyoo_page['edit_close'] >
		,
		ReturnType< $hyoo_page_side_edit['close'] >
	>
	type $hyoo_page_side_info__side__HL1DLRSP = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_page_side_info['side'] >
	>
	type $hyoo_page_side_info__close__4K34ZG8B = $mol_type_enforce<
		ReturnType< $hyoo_page['info_close'] >
		,
		ReturnType< $hyoo_page_side_info['close'] >
	>
	type $hyoo_page_side_info__Text__WMVMP0Z5 = $mol_type_enforce<
		ReturnType< $hyoo_page['View_details'] >
		,
		ReturnType< $hyoo_page_side_info['Text'] >
	>
	type $mol_button_minor__click__8F7F718D = $mol_type_enforce<
		ReturnType< $hyoo_page['rights_close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__GHGJ7FQ1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $hyoo_meta_rights__meta__NA4RI7D0 = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_meta_rights['meta'] >
	>
	type $hyoo_meta_rights__peer__ZWD2IRKJ = $mol_type_enforce<
		ReturnType< $hyoo_page['side'] >
		,
		ReturnType< $hyoo_meta_rights['peer'] >
	>
	type $hyoo_meta_rights__tools__P3XEOFL4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_rights['tools'] >
	>
	type $mol_button_minor__click__S5UJH3WQ = $mol_type_enforce<
		ReturnType< $hyoo_page['safe_close'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__957KNV44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $hyoo_meta_safe__yard__Q5UUKUHM = $mol_type_enforce<
		ReturnType< $hyoo_page['yard'] >
		,
		ReturnType< $hyoo_meta_safe['yard'] >
	>
	type $hyoo_meta_safe__tools__ZLUJV2ZF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_safe['tools'] >
	>
	type $hyoo_page_menu__yard__R1VUZDSR = $mol_type_enforce<
		ReturnType< $hyoo_page['yard'] >
		,
		ReturnType< $hyoo_page_menu['yard'] >
	>
	type $hyoo_page_menu__side__3LI44L3D = $mol_type_enforce<
		ReturnType< $hyoo_page['profile'] >
		,
		ReturnType< $hyoo_page_menu['side'] >
	>
	type $hyoo_page_menu__list__VQQS0WOX = $mol_type_enforce<
		ReturnType< $hyoo_page['bookmarks_node'] >
		,
		ReturnType< $hyoo_page_menu['list'] >
	>
	type $hyoo_page_menu__item_uri__086TKDD2 = $mol_type_enforce<
		ReturnType< $hyoo_page['side_uri'] >
		,
		ReturnType< $hyoo_page_menu['item_uri'] >
	>
	type $hyoo_page_menu__add__BSWPN3FK = $mol_type_enforce<
		ReturnType< $hyoo_page['page_add'] >
		,
		ReturnType< $hyoo_page_menu['add'] >
	>
	type $hyoo_page_menu__item_add__UIHDLAPZ = $mol_type_enforce<
		ReturnType< $hyoo_page['side_add'] >
		,
		ReturnType< $hyoo_page_menu['item_add'] >
	>
	type $hyoo_page_menu__aura_showing__YTJ00IQI = $mol_type_enforce<
		ReturnType< $hyoo_page['aura_showing'] >
		,
		ReturnType< $hyoo_page_menu['aura_showing'] >
	>
	type $hyoo_page_menu__safe_showing__USN5Q6K0 = $mol_type_enforce<
		ReturnType< $hyoo_page['safe'] >
		,
		ReturnType< $hyoo_page_menu['safe_showing'] >
	>
	export class $hyoo_page extends $mol_book2 {
		side_title( id: any): ReturnType< ReturnType< $hyoo_page['side'] >['title'] >
		pages_node( id: any): ReturnType< ReturnType< $hyoo_page['side'] >['pages_node'] >
		bookmarks_node( ): ReturnType< ReturnType< $hyoo_page['profile'] >['bookmarks_node'] >
		aura_image( ): string
		Theme( ): $mol_theme_auto
		ref_track( ): any
		News( ): $hyoo_page_side_news
		book_side( ): $hyoo_page_side
		book_pages_node( ): any
		side_uri( id: any): string
		side_add( id: any, next?: any ): any
		tools_ext( ): readonly(any)[]
		Side_menu( ): $hyoo_page_side_menu
		side_menu_showed( next?: boolean ): boolean
		editing( next?: boolean ): boolean
		info( next?: boolean ): boolean
		View_details( id: any): ReturnType< ReturnType< $hyoo_page['View'] >['Details'] >
		View( id: any): $hyoo_page_side_view
		rights( next?: boolean ): boolean
		edit_close( id: any, next?: any ): any
		Edit( id: any): $hyoo_page_side_edit
		info_close( id: any, next?: any ): any
		Info( id: any): $hyoo_page_side_info
		rights_close( next?: any ): any
		Close_icon( ): $mol_icon_close
		Rights_close( ): $mol_button_minor
		Rights( id: any): $hyoo_meta_rights
		safe_close( next?: any ): any
		Safe_icon( ): $mol_icon_close
		Safe_close( ): $mol_button_minor
		Safe( ): $hyoo_meta_safe
		page_add( next?: any ): any
		aura_showing( next?: boolean ): boolean
		safe( next?: boolean ): boolean
		search( ): ReturnType< ReturnType< $hyoo_page['Menu'] >['search'] >
		Menu( ): $hyoo_page_menu
		side_main_id( ): string
		yard( ): $hyoo_sync_client
		side( id: any): $hyoo_page_side
		side_current( ): $hyoo_page_side
		profile( ): $hyoo_page_side
		style( ): ({ 
			'backgroundImage': ReturnType< $hyoo_page['aura_image'] >,
		})  & ReturnType< $mol_book2['style'] >
		plugins( ): readonly(any)[]
		auto( ): readonly(any)[]
		pages( ): readonly(any)[]
		Placeholder( ): ReturnType< $hyoo_page['Menu'] >
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $piterjs_app_meetup__DBZQAHHB = $mol_type_enforce<
		Parameters< $piterjs_app['meetup'] >[0]
		,
		Parameters< ReturnType< $piterjs_app['Domain'] >['meetup'] >[0]
	>
	type $piterjs_app_meetup_public__ZKOL6RXB = $mol_type_enforce<
		Parameters< $piterjs_app['meetup_public'] >[0]
		,
		Parameters< ReturnType< $piterjs_app['Domain'] >['meetup_public'] >[0]
	>
	type $piterjs_app_meetup_public__RT3TMJNM = $mol_type_enforce<
		Parameters< $piterjs_app['meetup_public'] >[1]
		,
		Parameters< ReturnType< $piterjs_app['Domain'] >['meetup_public'] >[1]
	>
	type $mol_book2__pages__1PME46T2 = $mol_type_enforce<
		ReturnType< $piterjs_app['pages'] >
		,
		ReturnType< $mol_book2['pages'] >
	>
	type $mol_book2__Placeholder__5SKLUNTK = $mol_type_enforce<
		any
		,
		ReturnType< $mol_book2['Placeholder'] >
	>
	type $piterjs_screen__place__AM0C2VUQ = $mol_type_enforce<
		ReturnType< $piterjs_app['place'] >
		,
		ReturnType< $piterjs_screen['place'] >
	>
	type $piterjs_screen__Open__CPBNIYT8 = $mol_type_enforce<
		any
		,
		ReturnType< $piterjs_screen['Open'] >
	>
	type $piterjs_screen__Close__XVQT40YP = $mol_type_enforce<
		any
		,
		ReturnType< $piterjs_screen['Close'] >
	>
	type $piterjs_screen__content__KBTBK52L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $piterjs_screen['content'] >
	>
	type $mol_check__checked__BPGCAHAI = $mol_type_enforce<
		ReturnType< $piterjs_app['toggle_intro'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_button_minor__click__3FPELG2F = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup_add'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__4M4EB5JZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_link__arg__09FXUIIE = $mol_type_enforce<
		({ 
			'safe': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__NS2INBVS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $hyoo_sync_online__yard__RPKT9V6Y = $mol_type_enforce<
		ReturnType< $piterjs_app['Yard'] >
		,
		ReturnType< $hyoo_sync_online['yard'] >
	>
	type $mol_check_icon__Icon__175WRTN7 = $mol_type_enforce<
		ReturnType< $piterjs_app['Editing_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_check_icon__checked__WCEROOGQ = $mol_type_enforce<
		ReturnType< $piterjs_app['editing'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__checked__RCA2L1VT = $mol_type_enforce<
		ReturnType< $piterjs_app['rights'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon__RHZTONY2 = $mol_type_enforce<
		ReturnType< $piterjs_app['Rights_toggle_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_view__sub__RPCOETP4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__arg__447K9IWS = $mol_type_enforce<
		({ 
			'wiki': string,
			'meetup': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__C5TPW5IN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__rows__G5Q869VT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows__EXUX9JR2 = $mol_type_enforce<
		ReturnType< $piterjs_app['menu_meetups'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub__DO32E1KU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__HWRI5SBG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__uri__LSBKKGOC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__V31760JA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub__L1E1GNZ0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check__checked__98N6UBZ2 = $mol_type_enforce<
		ReturnType< $piterjs_app['rights'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__sub__I9CK4RXI = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__checked__566FIRJQ = $mol_type_enforce<
		ReturnType< $piterjs_app['rights_meetup'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__sub__EHN61WGP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_link__arg__YW6EC5DE = $mol_type_enforce<
		({ 
			'safe': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__sub__28BZXSJT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_page__title__KF0BGOVA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__YZ394LYD = $mol_type_enforce<
		ReturnType< $piterjs_app['tools'] >
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__foot__7QM7JAV2 = $mol_type_enforce<
		ReturnType< $piterjs_app['foot'] >
		,
		ReturnType< $mol_page['foot'] >
	>
	type $mol_page__body__FLF3YW3M = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $piterjs_meetup_page__meetup__UFVT6OCK = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup'] >
		,
		ReturnType< $piterjs_meetup_page['meetup'] >
	>
	type $piterjs_meetup_page__editing__VU1S2UWX = $mol_type_enforce<
		ReturnType< $piterjs_app['editing'] >
		,
		ReturnType< $piterjs_meetup_page['editing'] >
	>
	type $piterjs_meetup_page__meetup_public__EYF9W525 = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup_public'] >
		,
		ReturnType< $piterjs_meetup_page['meetup_public'] >
	>
	type $piterjs_meetup_page__rights__BICGTYA6 = $mol_type_enforce<
		ReturnType< $piterjs_app['rights_meetup'] >
		,
		ReturnType< $piterjs_meetup_page['rights'] >
	>
	type $piterjs_meetup_guests__meetup__MZM6VBEX = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup'] >
		,
		ReturnType< $piterjs_meetup_guests['meetup'] >
	>
	type $piterjs_meetup_stats__meetup__EI9UXTFD = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup'] >
		,
		ReturnType< $piterjs_meetup_stats['meetup'] >
	>
	type $piterjs_meetup_stats__meetup_prev__LNOR5Y5B = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup_prev'] >
		,
		ReturnType< $piterjs_meetup_stats['meetup_prev'] >
	>
	type $piterjs_speech_page__speech__BCM07PSN = $mol_type_enforce<
		ReturnType< $piterjs_app['speech'] >
		,
		ReturnType< $piterjs_speech_page['speech'] >
	>
	type $piterjs_speech_page__editing__2WAFTF3C = $mol_type_enforce<
		ReturnType< $piterjs_app['editing'] >
		,
		ReturnType< $piterjs_speech_page['editing'] >
	>
	type $piterjs_speech_page__speech_public__NPEKTX9F = $mol_type_enforce<
		ReturnType< $piterjs_app['speech_public'] >
		,
		ReturnType< $piterjs_speech_page['speech_public'] >
	>
	type $piterjs_meetup_snippet__meetup__J8MG2H3F = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup'] >
		,
		ReturnType< $piterjs_meetup_snippet['meetup'] >
	>
	type $piterjs_now__place__94YSXOL1 = $mol_type_enforce<
		ReturnType< $piterjs_app['place'] >
		,
		ReturnType< $piterjs_now['place'] >
	>
	type $piterjs_intro__meetup__3LJGPTF3 = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup_current'] >
		,
		ReturnType< $piterjs_intro['meetup'] >
	>
	type $piterjs_intro__page__908I5Y1Q = $mol_type_enforce<
		ReturnType< $piterjs_app['intro'] >
		,
		ReturnType< $piterjs_intro['page'] >
	>
	type $piterjs_video_page__source__A8UHYUF7 = $mol_type_enforce<
		ReturnType< $piterjs_app['video_uri'] >
		,
		ReturnType< $piterjs_video_page['source'] >
	>
	type $piterjs_video_page__editing__GL6K0KI5 = $mol_type_enforce<
		ReturnType< $piterjs_app['editing'] >
		,
		ReturnType< $piterjs_video_page['editing'] >
	>
	type $piterjs_place_page__place__FCJVQS22 = $mol_type_enforce<
		ReturnType< $piterjs_app['place'] >
		,
		ReturnType< $piterjs_place_page['place'] >
	>
	type $piterjs_place_page__editing__MIII3FYA = $mol_type_enforce<
		ReturnType< $piterjs_app['editing'] >
		,
		ReturnType< $piterjs_place_page['editing'] >
	>
	type $hyoo_meta_rights__theme__II3CPII9 = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_meta_rights['theme'] >
	>
	type $hyoo_meta_rights__meta__O0TJ8MUU = $mol_type_enforce<
		ReturnType< $piterjs_app['Domain'] >
		,
		ReturnType< $hyoo_meta_rights['meta'] >
	>
	type $hyoo_meta_rights__tools__F9OGC3WQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_rights['tools'] >
	>
	type $hyoo_meta_rights__theme__KZ2CKCUR = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_meta_rights['theme'] >
	>
	type $hyoo_meta_rights__meta__HVT7S6IT = $mol_type_enforce<
		ReturnType< $piterjs_app['meetup_current'] >
		,
		ReturnType< $hyoo_meta_rights['meta'] >
	>
	type $hyoo_meta_rights__tools__APHBECAQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_rights['tools'] >
	>
	type $hyoo_page__side_main_id__HJEN09FB = $mol_type_enforce<
		string
		,
		ReturnType< $hyoo_page['side_main_id'] >
	>
	type $hyoo_page__yard__6BHF8JJC = $mol_type_enforce<
		ReturnType< $piterjs_app['Yard'] >
		,
		ReturnType< $hyoo_page['yard'] >
	>
	type $hyoo_meta_safe__tools__GP6TOASU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $hyoo_meta_safe['tools'] >
	>
	export class $piterjs_app extends $mol_view {
		meetups( ): ReturnType< ReturnType< $piterjs_app['Domain'] >['meetups'] >
		meetup( id: any): ReturnType< ReturnType< $piterjs_app['Domain'] >['meetup'] >
		meetup_public( id: any, next?: ReturnType< ReturnType< $piterjs_app['Domain'] >['meetup_public'] > ): ReturnType< ReturnType< $piterjs_app['Domain'] >['meetup_public'] >
		editable( ): ReturnType< ReturnType< $piterjs_app['Domain'] >['editable'] >
		Theme( ): $mol_theme_auto
		place( ): $piterjs_place
		pages( ): readonly(any)[]
		Book( ): $mol_book2
		Screen( ): $piterjs_screen
		toggle_intro( next?: boolean ): boolean
		Toggle_intro( ): $mol_check
		meetup_add( next?: any ): any
		Meetup_add_icon( ): $mol_icon_plus
		Meetup_add( ): $mol_button_minor
		Safe_icon( ): $mol_icon_key_variant
		Safe_link( ): $mol_link
		tools( ): readonly(any)[]
		Yard( ): $hyoo_sync_client
		Online( ): $hyoo_sync_online
		Editing_icon( ): $mol_icon_settings_outline
		editing( next?: boolean ): boolean
		Editing( ): $mol_check_icon
		rights( next?: boolean ): boolean
		Rights_toggle_icon( ): $mol_icon_shield_account
		Rights_toggle( ): $mol_check_icon
		user_id( ): string
		User( ): $mol_view
		Lights( ): $mol_lights_toggle
		foot( ): readonly(any)[]
		Wiki_link( ): $mol_link
		Links( ): $mol_list
		menu_meetups( ): readonly(any)[]
		Meetups( ): $mol_list
		Conf_ext( ): $mol_icon_share_outline
		Conf_title( ): $mol_view
		Conf_date( ): $mol_view
		Conf( ): $mol_link
		Menu_content( ): $mol_view
		rights_meetup( next?: boolean ): boolean
		meetup_prev( id: any): $piterjs_meetup
		speech( id: any): $piterjs_speech
		speech_public( id: any, next?: boolean ): boolean
		meetup_current( ): $piterjs_meetup
		intro( next?: string ): string
		video_uri( next?: string ): string
		Rights_close_icon( ): $mol_icon_close
		Rights_close( ): $mol_check
		Rights_meetup_close_icon( ): $mol_icon_close
		Rights_meetup_close( ): $mol_check
		Safe_close_icon( ): $mol_icon_close
		Safe_close( ): $mol_link
		Domain( ): $piterjs_domain
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
		Menu( ): $mol_page
		Meetup( id: any): $piterjs_meetup_page
		Meetup_guests( id: any): $piterjs_meetup_guests
		Meetup_stats( id: any): $piterjs_meetup_stats
		Speech( id: any): $piterjs_speech_page
		Menu_meetup( id: any): $piterjs_meetup_snippet
		Now( ): $piterjs_now
		Intro( ): $piterjs_intro
		Video( ): $piterjs_video_page
		Place( ): $piterjs_place_page
		Others( ): $piterjs_others
		Rights( ): $hyoo_meta_rights
		Rights_meetup( ): $hyoo_meta_rights
		Wiki( ): $hyoo_page
		Safe( ): $hyoo_meta_safe
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
    class $piterjs_app extends $.$piterjs_app {
        Domain(): $piterjs_domain;
        now(next?: string | null): string | null;
        intro(next?: string | null): string;
        place_show(): boolean;
        others(): boolean;
        wiki(): boolean;
        guests(): boolean;
        stats(): boolean;
        safe(): boolean;
        meetup_id(next?: string | null): string | null;
        meetup_add(): void;
        speech_id(next?: string): string | null;
        speech(id: $mol_int62_string): $piterjs_speech;
        speaker_id(next?: string): string | null;
        pages(): any[];
        title(): string;
        meetup_current(): $piterjs_meetup;
        place(): $piterjs_place;
        menu_meetups(): $.$piterjs_meetup_snippet[];
        menu_meetup(id: string): $piterjs_meetup;
        menu_meetup_id(id: string): string;
        meetup_prev(id: $piterjs_meetup): $piterjs_meetup;
        toggle_intro(next?: boolean): boolean;
        video(): boolean;
        video_uri(next?: string): string;
        tools(): ($mol_button_minor | $.$mol_link)[];
        foot(): ($mol_view | $.$hyoo_sync_online)[];
        editing(next?: boolean): boolean;
        rights(next?: boolean): boolean;
        rights_meetup(next?: boolean): boolean;
        user_id(): `${string}_${string}`;
        speech_public(id: $mol_int62_string, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_email extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=email.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_button_major__title__TT2QK5HT = $mol_type_enforce<
		ReturnType< $piterjs_link['title'] >
		,
		ReturnType< $mol_button_major['title'] >
	>
	export class $piterjs_link extends $mol_link {
		Button( ): $mol_button_major
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=help.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help_circle extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=circle.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_help_circle_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_array_lottery<Value>(list: readonly Value[]): Value;
}

declare namespace $ {

	export class $mol_hint extends $mol_check {
		dictionary( ): Record<string, any>
		Icon( ): $mol_icon_help_circle_outline
		hint_close( ): string
		hint_open( ): string
	}
	
}

//# sourceMappingURL=hint.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_hint extends $.$mol_hint {
        keys_all(): string[];
        keys_hidden(next?: string[]): Set<string>;
        keys_allowed(): string[];
        key_picked(): string;
        title(): any;
        sub(): any[];
        hint(): string;
        checked(next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_link__uri__MRZXHLO6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub__6ST3KFD8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_link_iconed__uri__VF8X8LDX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__R7VXD4VC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__II75XARM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__0QD8ZY2K = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__NWVI00E1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__B8Y93RN1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__M8AK3W97 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__F13QHQRS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_link_iconed__uri__5G7HRMD9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__CKL96IF7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_view__sub__O2J8LQT5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_svg_path__geometry__WI55G4S0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry__0UYBAWOL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_root__view_box__ZYT0VNI8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_svg_root['view_box'] >
	>
	type $mol_svg_root__sub__CAE06T3V = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_svg_root['sub'] >
	>
	type $mol_paragraph__title__XF08X8IB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $piterjs_link__uri__IOJ9WUSO = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_link['uri'] >
	>
	type $piterjs_link__title__RO98LBMR = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_link['title'] >
	>
	type $piterjs_link__uri__GLUYJUAC = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_link['uri'] >
	>
	type $piterjs_link__title__OLRLRT4E = $mol_type_enforce<
		string
		,
		ReturnType< $piterjs_link['title'] >
	>
	type $mol_row__sub__QGDGSH8D = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_hint__dictionary__6HEN0W2P = $mol_type_enforce<
		({ 
			'menu': string,
		}) 
		,
		ReturnType< $mol_hint['dictionary'] >
	>
	type $piterjs_screen__place__RC1SOCQI = $mol_type_enforce<
		ReturnType< $piterjs_now['place'] >
		,
		ReturnType< $piterjs_screen['place'] >
	>
	type $piterjs_screen__content__0I5YC917 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $piterjs_screen['content'] >
	>
	export class $piterjs_now extends $mol_page {
		Mail_icon( ): $mol_icon_email
		Mail( ): $mol_link
		Youtube( ): $mol_link_iconed
		Vkontakte( ): $mol_link_iconed
		Habr( ): $mol_link_iconed
		Telegram( ): $mol_link_iconed
		Github( ): $mol_link_iconed
		Links( ): $mol_view
		place( ): $piterjs_place
		Logo_angles( ): $mol_svg_path
		Logo_image( ): $mol_svg_path
		Logo( ): $mol_svg_root
		Descr( ): $mol_paragraph
		Join( ): $piterjs_link
		Donate( ): $piterjs_link
		Bids( ): $mol_row
		Hint( ): $mol_hint
		Screen( ): $piterjs_screen
		title( ): string
		meetups( ): readonly(any)[]
		attr( ): ({ 
			'tabindex': any,
		})  & ReturnType< $mol_page['attr'] >
		tools( ): readonly(any)[]
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=now.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
