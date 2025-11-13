
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Icon
 * 
 */
export type Icon = $Result.DefaultSelection<Prisma.$IconPayload>
/**
 * Model Bundle
 * 
 */
export type Bundle = $Result.DefaultSelection<Prisma.$BundlePayload>
/**
 * Model IconBundle
 * 
 */
export type IconBundle = $Result.DefaultSelection<Prisma.$IconBundlePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const IconType: {
  SVG: 'SVG',
  PNG: 'PNG'
};

export type IconType = (typeof IconType)[keyof typeof IconType]


export const IconStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type IconStatus = (typeof IconStatus)[keyof typeof IconStatus]


export const IconStyle: {
  OUTLINE: 'OUTLINE',
  FILL: 'FILL'
};

export type IconStyle = (typeof IconStyle)[keyof typeof IconStyle]


export const BundleStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type BundleStatus = (typeof BundleStatus)[keyof typeof BundleStatus]


export const CategoryStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type CategoryStatus = (typeof CategoryStatus)[keyof typeof CategoryStatus]


export const TaggableType: {
  ICON: 'ICON',
  BUNDLE: 'BUNDLE'
};

export type TaggableType = (typeof TaggableType)[keyof typeof TaggableType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type IconType = $Enums.IconType

export const IconType: typeof $Enums.IconType

export type IconStatus = $Enums.IconStatus

export const IconStatus: typeof $Enums.IconStatus

export type IconStyle = $Enums.IconStyle

export const IconStyle: typeof $Enums.IconStyle

export type BundleStatus = $Enums.BundleStatus

export const BundleStatus: typeof $Enums.BundleStatus

export type CategoryStatus = $Enums.CategoryStatus

export const CategoryStatus: typeof $Enums.CategoryStatus

export type TaggableType = $Enums.TaggableType

export const TaggableType: typeof $Enums.TaggableType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.icon`: Exposes CRUD operations for the **Icon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Icons
    * const icons = await prisma.icon.findMany()
    * ```
    */
  get icon(): Prisma.IconDelegate<ExtArgs>;

  /**
   * `prisma.bundle`: Exposes CRUD operations for the **Bundle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bundles
    * const bundles = await prisma.bundle.findMany()
    * ```
    */
  get bundle(): Prisma.BundleDelegate<ExtArgs>;

  /**
   * `prisma.iconBundle`: Exposes CRUD operations for the **IconBundle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IconBundles
    * const iconBundles = await prisma.iconBundle.findMany()
    * ```
    */
  get iconBundle(): Prisma.IconBundleDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Icon: 'Icon',
    Bundle: 'Bundle',
    IconBundle: 'IconBundle',
    Category: 'Category',
    Tag: 'Tag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "icon" | "bundle" | "iconBundle" | "category" | "tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Icon: {
        payload: Prisma.$IconPayload<ExtArgs>
        fields: Prisma.IconFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IconFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IconFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          findFirst: {
            args: Prisma.IconFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IconFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          findMany: {
            args: Prisma.IconFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>[]
          }
          create: {
            args: Prisma.IconCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          createMany: {
            args: Prisma.IconCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IconDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          update: {
            args: Prisma.IconUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          deleteMany: {
            args: Prisma.IconDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IconUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IconUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          aggregate: {
            args: Prisma.IconAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIcon>
          }
          groupBy: {
            args: Prisma.IconGroupByArgs<ExtArgs>
            result: $Utils.Optional<IconGroupByOutputType>[]
          }
          count: {
            args: Prisma.IconCountArgs<ExtArgs>
            result: $Utils.Optional<IconCountAggregateOutputType> | number
          }
        }
      }
      Bundle: {
        payload: Prisma.$BundlePayload<ExtArgs>
        fields: Prisma.BundleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BundleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BundleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          findFirst: {
            args: Prisma.BundleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BundleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          findMany: {
            args: Prisma.BundleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>[]
          }
          create: {
            args: Prisma.BundleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          createMany: {
            args: Prisma.BundleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BundleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          update: {
            args: Prisma.BundleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          deleteMany: {
            args: Prisma.BundleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BundleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BundleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BundlePayload>
          }
          aggregate: {
            args: Prisma.BundleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBundle>
          }
          groupBy: {
            args: Prisma.BundleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BundleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BundleCountArgs<ExtArgs>
            result: $Utils.Optional<BundleCountAggregateOutputType> | number
          }
        }
      }
      IconBundle: {
        payload: Prisma.$IconBundlePayload<ExtArgs>
        fields: Prisma.IconBundleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IconBundleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IconBundleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload>
          }
          findFirst: {
            args: Prisma.IconBundleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IconBundleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload>
          }
          findMany: {
            args: Prisma.IconBundleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload>[]
          }
          create: {
            args: Prisma.IconBundleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload>
          }
          createMany: {
            args: Prisma.IconBundleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IconBundleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload>
          }
          update: {
            args: Prisma.IconBundleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload>
          }
          deleteMany: {
            args: Prisma.IconBundleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IconBundleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IconBundleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconBundlePayload>
          }
          aggregate: {
            args: Prisma.IconBundleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIconBundle>
          }
          groupBy: {
            args: Prisma.IconBundleGroupByArgs<ExtArgs>
            result: $Utils.Optional<IconBundleGroupByOutputType>[]
          }
          count: {
            args: Prisma.IconBundleCountArgs<ExtArgs>
            result: $Utils.Optional<IconBundleCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type IconCountOutputType
   */

  export type IconCountOutputType = {
    iconBundles: number
    tags: number
  }

  export type IconCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    iconBundles?: boolean | IconCountOutputTypeCountIconBundlesArgs
    tags?: boolean | IconCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * IconCountOutputType without action
   */
  export type IconCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconCountOutputType
     */
    select?: IconCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IconCountOutputType without action
   */
  export type IconCountOutputTypeCountIconBundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconBundleWhereInput
  }

  /**
   * IconCountOutputType without action
   */
  export type IconCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type BundleCountOutputType
   */

  export type BundleCountOutputType = {
    iconBundles: number
    tags: number
  }

  export type BundleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    iconBundles?: boolean | BundleCountOutputTypeCountIconBundlesArgs
    tags?: boolean | BundleCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * BundleCountOutputType without action
   */
  export type BundleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundleCountOutputType
     */
    select?: BundleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BundleCountOutputType without action
   */
  export type BundleCountOutputTypeCountIconBundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconBundleWhereInput
  }

  /**
   * BundleCountOutputType without action
   */
  export type BundleCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    icons: number
    bundles: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icons?: boolean | CategoryCountOutputTypeCountIconsArgs
    bundles?: boolean | CategoryCountOutputTypeCountBundlesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountIconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundleWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    iconTags: number
    bundleTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    iconTags?: boolean | TagCountOutputTypeCountIconTagsArgs
    bundleTags?: boolean | TagCountOutputTypeCountBundleTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountIconTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountBundleTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    refreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    refreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    refreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    refreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    refreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    refreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    refreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshToken?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshToken?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
      refreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly refreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Icon
   */

  export type AggregateIcon = {
    _count: IconCountAggregateOutputType | null
    _avg: IconAvgAggregateOutputType | null
    _sum: IconSumAggregateOutputType | null
    _min: IconMinAggregateOutputType | null
    _max: IconMaxAggregateOutputType | null
  }

  export type IconAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    created_by: number | null
  }

  export type IconSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    created_by: number | null
  }

  export type IconMinAggregateOutputType = {
    id: number | null
    title: string | null
    path: string | null
    type: $Enums.IconType | null
    status: $Enums.IconStatus | null
    approved: boolean | null
    need_to_improve: boolean | null
    style: $Enums.IconStyle | null
    category_id: number | null
    created_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type IconMaxAggregateOutputType = {
    id: number | null
    title: string | null
    path: string | null
    type: $Enums.IconType | null
    status: $Enums.IconStatus | null
    approved: boolean | null
    need_to_improve: boolean | null
    style: $Enums.IconStyle | null
    category_id: number | null
    created_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type IconCountAggregateOutputType = {
    id: number
    title: number
    path: number
    type: number
    status: number
    approved: number
    need_to_improve: number
    style: number
    category_id: number
    created_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type IconAvgAggregateInputType = {
    id?: true
    category_id?: true
    created_by?: true
  }

  export type IconSumAggregateInputType = {
    id?: true
    category_id?: true
    created_by?: true
  }

  export type IconMinAggregateInputType = {
    id?: true
    title?: true
    path?: true
    type?: true
    status?: true
    approved?: true
    need_to_improve?: true
    style?: true
    category_id?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type IconMaxAggregateInputType = {
    id?: true
    title?: true
    path?: true
    type?: true
    status?: true
    approved?: true
    need_to_improve?: true
    style?: true
    category_id?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type IconCountAggregateInputType = {
    id?: true
    title?: true
    path?: true
    type?: true
    status?: true
    approved?: true
    need_to_improve?: true
    style?: true
    category_id?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type IconAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icon to aggregate.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Icons
    **/
    _count?: true | IconCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IconAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IconSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IconMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IconMaxAggregateInputType
  }

  export type GetIconAggregateType<T extends IconAggregateArgs> = {
        [P in keyof T & keyof AggregateIcon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIcon[P]>
      : GetScalarType<T[P], AggregateIcon[P]>
  }




  export type IconGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconWhereInput
    orderBy?: IconOrderByWithAggregationInput | IconOrderByWithAggregationInput[]
    by: IconScalarFieldEnum[] | IconScalarFieldEnum
    having?: IconScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IconCountAggregateInputType | true
    _avg?: IconAvgAggregateInputType
    _sum?: IconSumAggregateInputType
    _min?: IconMinAggregateInputType
    _max?: IconMaxAggregateInputType
  }

  export type IconGroupByOutputType = {
    id: number
    title: string
    path: string
    type: $Enums.IconType
    status: $Enums.IconStatus
    approved: boolean
    need_to_improve: boolean
    style: $Enums.IconStyle
    category_id: number | null
    created_by: number | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: IconCountAggregateOutputType | null
    _avg: IconAvgAggregateOutputType | null
    _sum: IconSumAggregateOutputType | null
    _min: IconMinAggregateOutputType | null
    _max: IconMaxAggregateOutputType | null
  }

  type GetIconGroupByPayload<T extends IconGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IconGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IconGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IconGroupByOutputType[P]>
            : GetScalarType<T[P], IconGroupByOutputType[P]>
        }
      >
    >


  export type IconSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    path?: boolean
    type?: boolean
    status?: boolean
    approved?: boolean
    need_to_improve?: boolean
    style?: boolean
    category_id?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    category?: boolean | Icon$categoryArgs<ExtArgs>
    iconBundles?: boolean | Icon$iconBundlesArgs<ExtArgs>
    tags?: boolean | Icon$tagsArgs<ExtArgs>
    _count?: boolean | IconCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["icon"]>


  export type IconSelectScalar = {
    id?: boolean
    title?: boolean
    path?: boolean
    type?: boolean
    status?: boolean
    approved?: boolean
    need_to_improve?: boolean
    style?: boolean
    category_id?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type IconInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Icon$categoryArgs<ExtArgs>
    iconBundles?: boolean | Icon$iconBundlesArgs<ExtArgs>
    tags?: boolean | Icon$tagsArgs<ExtArgs>
    _count?: boolean | IconCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IconPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Icon"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      iconBundles: Prisma.$IconBundlePayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      path: string
      type: $Enums.IconType
      status: $Enums.IconStatus
      approved: boolean
      need_to_improve: boolean
      style: $Enums.IconStyle
      category_id: number | null
      created_by: number | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["icon"]>
    composites: {}
  }

  type IconGetPayload<S extends boolean | null | undefined | IconDefaultArgs> = $Result.GetResult<Prisma.$IconPayload, S>

  type IconCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IconFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IconCountAggregateInputType | true
    }

  export interface IconDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Icon'], meta: { name: 'Icon' } }
    /**
     * Find zero or one Icon that matches the filter.
     * @param {IconFindUniqueArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IconFindUniqueArgs>(args: SelectSubset<T, IconFindUniqueArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Icon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IconFindUniqueOrThrowArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IconFindUniqueOrThrowArgs>(args: SelectSubset<T, IconFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Icon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindFirstArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IconFindFirstArgs>(args?: SelectSubset<T, IconFindFirstArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Icon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindFirstOrThrowArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IconFindFirstOrThrowArgs>(args?: SelectSubset<T, IconFindFirstOrThrowArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Icons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Icons
     * const icons = await prisma.icon.findMany()
     * 
     * // Get first 10 Icons
     * const icons = await prisma.icon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iconWithIdOnly = await prisma.icon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IconFindManyArgs>(args?: SelectSubset<T, IconFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Icon.
     * @param {IconCreateArgs} args - Arguments to create a Icon.
     * @example
     * // Create one Icon
     * const Icon = await prisma.icon.create({
     *   data: {
     *     // ... data to create a Icon
     *   }
     * })
     * 
     */
    create<T extends IconCreateArgs>(args: SelectSubset<T, IconCreateArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Icons.
     * @param {IconCreateManyArgs} args - Arguments to create many Icons.
     * @example
     * // Create many Icons
     * const icon = await prisma.icon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IconCreateManyArgs>(args?: SelectSubset<T, IconCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Icon.
     * @param {IconDeleteArgs} args - Arguments to delete one Icon.
     * @example
     * // Delete one Icon
     * const Icon = await prisma.icon.delete({
     *   where: {
     *     // ... filter to delete one Icon
     *   }
     * })
     * 
     */
    delete<T extends IconDeleteArgs>(args: SelectSubset<T, IconDeleteArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Icon.
     * @param {IconUpdateArgs} args - Arguments to update one Icon.
     * @example
     * // Update one Icon
     * const icon = await prisma.icon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IconUpdateArgs>(args: SelectSubset<T, IconUpdateArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Icons.
     * @param {IconDeleteManyArgs} args - Arguments to filter Icons to delete.
     * @example
     * // Delete a few Icons
     * const { count } = await prisma.icon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IconDeleteManyArgs>(args?: SelectSubset<T, IconDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Icons
     * const icon = await prisma.icon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IconUpdateManyArgs>(args: SelectSubset<T, IconUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Icon.
     * @param {IconUpsertArgs} args - Arguments to update or create a Icon.
     * @example
     * // Update or create a Icon
     * const icon = await prisma.icon.upsert({
     *   create: {
     *     // ... data to create a Icon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Icon we want to update
     *   }
     * })
     */
    upsert<T extends IconUpsertArgs>(args: SelectSubset<T, IconUpsertArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconCountArgs} args - Arguments to filter Icons to count.
     * @example
     * // Count the number of Icons
     * const count = await prisma.icon.count({
     *   where: {
     *     // ... the filter for the Icons we want to count
     *   }
     * })
    **/
    count<T extends IconCountArgs>(
      args?: Subset<T, IconCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IconCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Icon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IconAggregateArgs>(args: Subset<T, IconAggregateArgs>): Prisma.PrismaPromise<GetIconAggregateType<T>>

    /**
     * Group by Icon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IconGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IconGroupByArgs['orderBy'] }
        : { orderBy?: IconGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IconGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIconGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Icon model
   */
  readonly fields: IconFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Icon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IconClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Icon$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Icon$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    iconBundles<T extends Icon$iconBundlesArgs<ExtArgs> = {}>(args?: Subset<T, Icon$iconBundlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Icon$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Icon$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Icon model
   */ 
  interface IconFieldRefs {
    readonly id: FieldRef<"Icon", 'Int'>
    readonly title: FieldRef<"Icon", 'String'>
    readonly path: FieldRef<"Icon", 'String'>
    readonly type: FieldRef<"Icon", 'IconType'>
    readonly status: FieldRef<"Icon", 'IconStatus'>
    readonly approved: FieldRef<"Icon", 'Boolean'>
    readonly need_to_improve: FieldRef<"Icon", 'Boolean'>
    readonly style: FieldRef<"Icon", 'IconStyle'>
    readonly category_id: FieldRef<"Icon", 'Int'>
    readonly created_by: FieldRef<"Icon", 'Int'>
    readonly created_at: FieldRef<"Icon", 'DateTime'>
    readonly updated_at: FieldRef<"Icon", 'DateTime'>
    readonly deleted_at: FieldRef<"Icon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Icon findUnique
   */
  export type IconFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon findUniqueOrThrow
   */
  export type IconFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon findFirst
   */
  export type IconFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icons.
     */
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon findFirstOrThrow
   */
  export type IconFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icons.
     */
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon findMany
   */
  export type IconFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icons to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon create
   */
  export type IconCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * The data needed to create a Icon.
     */
    data: XOR<IconCreateInput, IconUncheckedCreateInput>
  }

  /**
   * Icon createMany
   */
  export type IconCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Icons.
     */
    data: IconCreateManyInput | IconCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Icon update
   */
  export type IconUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * The data needed to update a Icon.
     */
    data: XOR<IconUpdateInput, IconUncheckedUpdateInput>
    /**
     * Choose, which Icon to update.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon updateMany
   */
  export type IconUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Icons.
     */
    data: XOR<IconUpdateManyMutationInput, IconUncheckedUpdateManyInput>
    /**
     * Filter which Icons to update
     */
    where?: IconWhereInput
  }

  /**
   * Icon upsert
   */
  export type IconUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * The filter to search for the Icon to update in case it exists.
     */
    where: IconWhereUniqueInput
    /**
     * In case the Icon found by the `where` argument doesn't exist, create a new Icon with this data.
     */
    create: XOR<IconCreateInput, IconUncheckedCreateInput>
    /**
     * In case the Icon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IconUpdateInput, IconUncheckedUpdateInput>
  }

  /**
   * Icon delete
   */
  export type IconDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter which Icon to delete.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon deleteMany
   */
  export type IconDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icons to delete
     */
    where?: IconWhereInput
  }

  /**
   * Icon.category
   */
  export type Icon$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Icon.iconBundles
   */
  export type Icon$iconBundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    where?: IconBundleWhereInput
    orderBy?: IconBundleOrderByWithRelationInput | IconBundleOrderByWithRelationInput[]
    cursor?: IconBundleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IconBundleScalarFieldEnum | IconBundleScalarFieldEnum[]
  }

  /**
   * Icon.tags
   */
  export type Icon$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Icon without action
   */
  export type IconDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
  }


  /**
   * Model Bundle
   */

  export type AggregateBundle = {
    _count: BundleCountAggregateOutputType | null
    _avg: BundleAvgAggregateOutputType | null
    _sum: BundleSumAggregateOutputType | null
    _min: BundleMinAggregateOutputType | null
    _max: BundleMaxAggregateOutputType | null
  }

  export type BundleAvgAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: number | null
    created_by: number | null
  }

  export type BundleSumAggregateOutputType = {
    id: number | null
    category_id: number | null
    price: number | null
    created_by: number | null
  }

  export type BundleMinAggregateOutputType = {
    id: number | null
    title: string | null
    category_id: number | null
    description: string | null
    is_paid: boolean | null
    price: number | null
    status: $Enums.BundleStatus | null
    created_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BundleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    category_id: number | null
    description: string | null
    is_paid: boolean | null
    price: number | null
    status: $Enums.BundleStatus | null
    created_by: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type BundleCountAggregateOutputType = {
    id: number
    title: number
    category_id: number
    description: number
    is_paid: number
    price: number
    status: number
    created_by: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type BundleAvgAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
    created_by?: true
  }

  export type BundleSumAggregateInputType = {
    id?: true
    category_id?: true
    price?: true
    created_by?: true
  }

  export type BundleMinAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    description?: true
    is_paid?: true
    price?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BundleMaxAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    description?: true
    is_paid?: true
    price?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type BundleCountAggregateInputType = {
    id?: true
    title?: true
    category_id?: true
    description?: true
    is_paid?: true
    price?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type BundleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bundle to aggregate.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bundles
    **/
    _count?: true | BundleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BundleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BundleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BundleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BundleMaxAggregateInputType
  }

  export type GetBundleAggregateType<T extends BundleAggregateArgs> = {
        [P in keyof T & keyof AggregateBundle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBundle[P]>
      : GetScalarType<T[P], AggregateBundle[P]>
  }




  export type BundleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BundleWhereInput
    orderBy?: BundleOrderByWithAggregationInput | BundleOrderByWithAggregationInput[]
    by: BundleScalarFieldEnum[] | BundleScalarFieldEnum
    having?: BundleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BundleCountAggregateInputType | true
    _avg?: BundleAvgAggregateInputType
    _sum?: BundleSumAggregateInputType
    _min?: BundleMinAggregateInputType
    _max?: BundleMaxAggregateInputType
  }

  export type BundleGroupByOutputType = {
    id: number
    title: string
    category_id: number | null
    description: string | null
    is_paid: boolean
    price: number
    status: $Enums.BundleStatus
    created_by: number | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: BundleCountAggregateOutputType | null
    _avg: BundleAvgAggregateOutputType | null
    _sum: BundleSumAggregateOutputType | null
    _min: BundleMinAggregateOutputType | null
    _max: BundleMaxAggregateOutputType | null
  }

  type GetBundleGroupByPayload<T extends BundleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BundleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BundleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BundleGroupByOutputType[P]>
            : GetScalarType<T[P], BundleGroupByOutputType[P]>
        }
      >
    >


  export type BundleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category_id?: boolean
    description?: boolean
    is_paid?: boolean
    price?: boolean
    status?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    category?: boolean | Bundle$categoryArgs<ExtArgs>
    iconBundles?: boolean | Bundle$iconBundlesArgs<ExtArgs>
    tags?: boolean | Bundle$tagsArgs<ExtArgs>
    _count?: boolean | BundleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bundle"]>


  export type BundleSelectScalar = {
    id?: boolean
    title?: boolean
    category_id?: boolean
    description?: boolean
    is_paid?: boolean
    price?: boolean
    status?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type BundleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Bundle$categoryArgs<ExtArgs>
    iconBundles?: boolean | Bundle$iconBundlesArgs<ExtArgs>
    tags?: boolean | Bundle$tagsArgs<ExtArgs>
    _count?: boolean | BundleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BundlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bundle"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      iconBundles: Prisma.$IconBundlePayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      category_id: number | null
      description: string | null
      is_paid: boolean
      price: number
      status: $Enums.BundleStatus
      created_by: number | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["bundle"]>
    composites: {}
  }

  type BundleGetPayload<S extends boolean | null | undefined | BundleDefaultArgs> = $Result.GetResult<Prisma.$BundlePayload, S>

  type BundleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BundleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BundleCountAggregateInputType | true
    }

  export interface BundleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bundle'], meta: { name: 'Bundle' } }
    /**
     * Find zero or one Bundle that matches the filter.
     * @param {BundleFindUniqueArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BundleFindUniqueArgs>(args: SelectSubset<T, BundleFindUniqueArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bundle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BundleFindUniqueOrThrowArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BundleFindUniqueOrThrowArgs>(args: SelectSubset<T, BundleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bundle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleFindFirstArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BundleFindFirstArgs>(args?: SelectSubset<T, BundleFindFirstArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bundle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleFindFirstOrThrowArgs} args - Arguments to find a Bundle
     * @example
     * // Get one Bundle
     * const bundle = await prisma.bundle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BundleFindFirstOrThrowArgs>(args?: SelectSubset<T, BundleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bundles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bundles
     * const bundles = await prisma.bundle.findMany()
     * 
     * // Get first 10 Bundles
     * const bundles = await prisma.bundle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bundleWithIdOnly = await prisma.bundle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BundleFindManyArgs>(args?: SelectSubset<T, BundleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bundle.
     * @param {BundleCreateArgs} args - Arguments to create a Bundle.
     * @example
     * // Create one Bundle
     * const Bundle = await prisma.bundle.create({
     *   data: {
     *     // ... data to create a Bundle
     *   }
     * })
     * 
     */
    create<T extends BundleCreateArgs>(args: SelectSubset<T, BundleCreateArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bundles.
     * @param {BundleCreateManyArgs} args - Arguments to create many Bundles.
     * @example
     * // Create many Bundles
     * const bundle = await prisma.bundle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BundleCreateManyArgs>(args?: SelectSubset<T, BundleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bundle.
     * @param {BundleDeleteArgs} args - Arguments to delete one Bundle.
     * @example
     * // Delete one Bundle
     * const Bundle = await prisma.bundle.delete({
     *   where: {
     *     // ... filter to delete one Bundle
     *   }
     * })
     * 
     */
    delete<T extends BundleDeleteArgs>(args: SelectSubset<T, BundleDeleteArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bundle.
     * @param {BundleUpdateArgs} args - Arguments to update one Bundle.
     * @example
     * // Update one Bundle
     * const bundle = await prisma.bundle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BundleUpdateArgs>(args: SelectSubset<T, BundleUpdateArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bundles.
     * @param {BundleDeleteManyArgs} args - Arguments to filter Bundles to delete.
     * @example
     * // Delete a few Bundles
     * const { count } = await prisma.bundle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BundleDeleteManyArgs>(args?: SelectSubset<T, BundleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bundles
     * const bundle = await prisma.bundle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BundleUpdateManyArgs>(args: SelectSubset<T, BundleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bundle.
     * @param {BundleUpsertArgs} args - Arguments to update or create a Bundle.
     * @example
     * // Update or create a Bundle
     * const bundle = await prisma.bundle.upsert({
     *   create: {
     *     // ... data to create a Bundle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bundle we want to update
     *   }
     * })
     */
    upsert<T extends BundleUpsertArgs>(args: SelectSubset<T, BundleUpsertArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleCountArgs} args - Arguments to filter Bundles to count.
     * @example
     * // Count the number of Bundles
     * const count = await prisma.bundle.count({
     *   where: {
     *     // ... the filter for the Bundles we want to count
     *   }
     * })
    **/
    count<T extends BundleCountArgs>(
      args?: Subset<T, BundleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BundleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BundleAggregateArgs>(args: Subset<T, BundleAggregateArgs>): Prisma.PrismaPromise<GetBundleAggregateType<T>>

    /**
     * Group by Bundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BundleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BundleGroupByArgs['orderBy'] }
        : { orderBy?: BundleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BundleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBundleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bundle model
   */
  readonly fields: BundleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bundle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BundleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Bundle$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Bundle$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    iconBundles<T extends Bundle$iconBundlesArgs<ExtArgs> = {}>(args?: Subset<T, Bundle$iconBundlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Bundle$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Bundle$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bundle model
   */ 
  interface BundleFieldRefs {
    readonly id: FieldRef<"Bundle", 'Int'>
    readonly title: FieldRef<"Bundle", 'String'>
    readonly category_id: FieldRef<"Bundle", 'Int'>
    readonly description: FieldRef<"Bundle", 'String'>
    readonly is_paid: FieldRef<"Bundle", 'Boolean'>
    readonly price: FieldRef<"Bundle", 'Float'>
    readonly status: FieldRef<"Bundle", 'BundleStatus'>
    readonly created_by: FieldRef<"Bundle", 'Int'>
    readonly created_at: FieldRef<"Bundle", 'DateTime'>
    readonly updated_at: FieldRef<"Bundle", 'DateTime'>
    readonly deleted_at: FieldRef<"Bundle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bundle findUnique
   */
  export type BundleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where: BundleWhereUniqueInput
  }

  /**
   * Bundle findUniqueOrThrow
   */
  export type BundleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where: BundleWhereUniqueInput
  }

  /**
   * Bundle findFirst
   */
  export type BundleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bundles.
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bundles.
     */
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }

  /**
   * Bundle findFirstOrThrow
   */
  export type BundleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundle to fetch.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bundles.
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bundles.
     */
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }

  /**
   * Bundle findMany
   */
  export type BundleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter, which Bundles to fetch.
     */
    where?: BundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bundles to fetch.
     */
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bundles.
     */
    cursor?: BundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bundles.
     */
    skip?: number
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }

  /**
   * Bundle create
   */
  export type BundleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * The data needed to create a Bundle.
     */
    data: XOR<BundleCreateInput, BundleUncheckedCreateInput>
  }

  /**
   * Bundle createMany
   */
  export type BundleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bundles.
     */
    data: BundleCreateManyInput | BundleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bundle update
   */
  export type BundleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * The data needed to update a Bundle.
     */
    data: XOR<BundleUpdateInput, BundleUncheckedUpdateInput>
    /**
     * Choose, which Bundle to update.
     */
    where: BundleWhereUniqueInput
  }

  /**
   * Bundle updateMany
   */
  export type BundleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bundles.
     */
    data: XOR<BundleUpdateManyMutationInput, BundleUncheckedUpdateManyInput>
    /**
     * Filter which Bundles to update
     */
    where?: BundleWhereInput
  }

  /**
   * Bundle upsert
   */
  export type BundleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * The filter to search for the Bundle to update in case it exists.
     */
    where: BundleWhereUniqueInput
    /**
     * In case the Bundle found by the `where` argument doesn't exist, create a new Bundle with this data.
     */
    create: XOR<BundleCreateInput, BundleUncheckedCreateInput>
    /**
     * In case the Bundle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BundleUpdateInput, BundleUncheckedUpdateInput>
  }

  /**
   * Bundle delete
   */
  export type BundleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    /**
     * Filter which Bundle to delete.
     */
    where: BundleWhereUniqueInput
  }

  /**
   * Bundle deleteMany
   */
  export type BundleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bundles to delete
     */
    where?: BundleWhereInput
  }

  /**
   * Bundle.category
   */
  export type Bundle$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Bundle.iconBundles
   */
  export type Bundle$iconBundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    where?: IconBundleWhereInput
    orderBy?: IconBundleOrderByWithRelationInput | IconBundleOrderByWithRelationInput[]
    cursor?: IconBundleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IconBundleScalarFieldEnum | IconBundleScalarFieldEnum[]
  }

  /**
   * Bundle.tags
   */
  export type Bundle$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Bundle without action
   */
  export type BundleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
  }


  /**
   * Model IconBundle
   */

  export type AggregateIconBundle = {
    _count: IconBundleCountAggregateOutputType | null
    _avg: IconBundleAvgAggregateOutputType | null
    _sum: IconBundleSumAggregateOutputType | null
    _min: IconBundleMinAggregateOutputType | null
    _max: IconBundleMaxAggregateOutputType | null
  }

  export type IconBundleAvgAggregateOutputType = {
    icon_id: number | null
    bundle_id: number | null
  }

  export type IconBundleSumAggregateOutputType = {
    icon_id: number | null
    bundle_id: number | null
  }

  export type IconBundleMinAggregateOutputType = {
    icon_id: number | null
    bundle_id: number | null
  }

  export type IconBundleMaxAggregateOutputType = {
    icon_id: number | null
    bundle_id: number | null
  }

  export type IconBundleCountAggregateOutputType = {
    icon_id: number
    bundle_id: number
    _all: number
  }


  export type IconBundleAvgAggregateInputType = {
    icon_id?: true
    bundle_id?: true
  }

  export type IconBundleSumAggregateInputType = {
    icon_id?: true
    bundle_id?: true
  }

  export type IconBundleMinAggregateInputType = {
    icon_id?: true
    bundle_id?: true
  }

  export type IconBundleMaxAggregateInputType = {
    icon_id?: true
    bundle_id?: true
  }

  export type IconBundleCountAggregateInputType = {
    icon_id?: true
    bundle_id?: true
    _all?: true
  }

  export type IconBundleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IconBundle to aggregate.
     */
    where?: IconBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IconBundles to fetch.
     */
    orderBy?: IconBundleOrderByWithRelationInput | IconBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IconBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IconBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IconBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IconBundles
    **/
    _count?: true | IconBundleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IconBundleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IconBundleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IconBundleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IconBundleMaxAggregateInputType
  }

  export type GetIconBundleAggregateType<T extends IconBundleAggregateArgs> = {
        [P in keyof T & keyof AggregateIconBundle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIconBundle[P]>
      : GetScalarType<T[P], AggregateIconBundle[P]>
  }




  export type IconBundleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconBundleWhereInput
    orderBy?: IconBundleOrderByWithAggregationInput | IconBundleOrderByWithAggregationInput[]
    by: IconBundleScalarFieldEnum[] | IconBundleScalarFieldEnum
    having?: IconBundleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IconBundleCountAggregateInputType | true
    _avg?: IconBundleAvgAggregateInputType
    _sum?: IconBundleSumAggregateInputType
    _min?: IconBundleMinAggregateInputType
    _max?: IconBundleMaxAggregateInputType
  }

  export type IconBundleGroupByOutputType = {
    icon_id: number
    bundle_id: number
    _count: IconBundleCountAggregateOutputType | null
    _avg: IconBundleAvgAggregateOutputType | null
    _sum: IconBundleSumAggregateOutputType | null
    _min: IconBundleMinAggregateOutputType | null
    _max: IconBundleMaxAggregateOutputType | null
  }

  type GetIconBundleGroupByPayload<T extends IconBundleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IconBundleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IconBundleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IconBundleGroupByOutputType[P]>
            : GetScalarType<T[P], IconBundleGroupByOutputType[P]>
        }
      >
    >


  export type IconBundleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    icon_id?: boolean
    bundle_id?: boolean
    icon?: boolean | IconDefaultArgs<ExtArgs>
    bundle?: boolean | BundleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iconBundle"]>


  export type IconBundleSelectScalar = {
    icon_id?: boolean
    bundle_id?: boolean
  }

  export type IconBundleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icon?: boolean | IconDefaultArgs<ExtArgs>
    bundle?: boolean | BundleDefaultArgs<ExtArgs>
  }

  export type $IconBundlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IconBundle"
    objects: {
      icon: Prisma.$IconPayload<ExtArgs>
      bundle: Prisma.$BundlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      icon_id: number
      bundle_id: number
    }, ExtArgs["result"]["iconBundle"]>
    composites: {}
  }

  type IconBundleGetPayload<S extends boolean | null | undefined | IconBundleDefaultArgs> = $Result.GetResult<Prisma.$IconBundlePayload, S>

  type IconBundleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IconBundleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IconBundleCountAggregateInputType | true
    }

  export interface IconBundleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IconBundle'], meta: { name: 'IconBundle' } }
    /**
     * Find zero or one IconBundle that matches the filter.
     * @param {IconBundleFindUniqueArgs} args - Arguments to find a IconBundle
     * @example
     * // Get one IconBundle
     * const iconBundle = await prisma.iconBundle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IconBundleFindUniqueArgs>(args: SelectSubset<T, IconBundleFindUniqueArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IconBundle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IconBundleFindUniqueOrThrowArgs} args - Arguments to find a IconBundle
     * @example
     * // Get one IconBundle
     * const iconBundle = await prisma.iconBundle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IconBundleFindUniqueOrThrowArgs>(args: SelectSubset<T, IconBundleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IconBundle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconBundleFindFirstArgs} args - Arguments to find a IconBundle
     * @example
     * // Get one IconBundle
     * const iconBundle = await prisma.iconBundle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IconBundleFindFirstArgs>(args?: SelectSubset<T, IconBundleFindFirstArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IconBundle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconBundleFindFirstOrThrowArgs} args - Arguments to find a IconBundle
     * @example
     * // Get one IconBundle
     * const iconBundle = await prisma.iconBundle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IconBundleFindFirstOrThrowArgs>(args?: SelectSubset<T, IconBundleFindFirstOrThrowArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IconBundles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconBundleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IconBundles
     * const iconBundles = await prisma.iconBundle.findMany()
     * 
     * // Get first 10 IconBundles
     * const iconBundles = await prisma.iconBundle.findMany({ take: 10 })
     * 
     * // Only select the `icon_id`
     * const iconBundleWithIcon_idOnly = await prisma.iconBundle.findMany({ select: { icon_id: true } })
     * 
     */
    findMany<T extends IconBundleFindManyArgs>(args?: SelectSubset<T, IconBundleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IconBundle.
     * @param {IconBundleCreateArgs} args - Arguments to create a IconBundle.
     * @example
     * // Create one IconBundle
     * const IconBundle = await prisma.iconBundle.create({
     *   data: {
     *     // ... data to create a IconBundle
     *   }
     * })
     * 
     */
    create<T extends IconBundleCreateArgs>(args: SelectSubset<T, IconBundleCreateArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IconBundles.
     * @param {IconBundleCreateManyArgs} args - Arguments to create many IconBundles.
     * @example
     * // Create many IconBundles
     * const iconBundle = await prisma.iconBundle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IconBundleCreateManyArgs>(args?: SelectSubset<T, IconBundleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IconBundle.
     * @param {IconBundleDeleteArgs} args - Arguments to delete one IconBundle.
     * @example
     * // Delete one IconBundle
     * const IconBundle = await prisma.iconBundle.delete({
     *   where: {
     *     // ... filter to delete one IconBundle
     *   }
     * })
     * 
     */
    delete<T extends IconBundleDeleteArgs>(args: SelectSubset<T, IconBundleDeleteArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IconBundle.
     * @param {IconBundleUpdateArgs} args - Arguments to update one IconBundle.
     * @example
     * // Update one IconBundle
     * const iconBundle = await prisma.iconBundle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IconBundleUpdateArgs>(args: SelectSubset<T, IconBundleUpdateArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IconBundles.
     * @param {IconBundleDeleteManyArgs} args - Arguments to filter IconBundles to delete.
     * @example
     * // Delete a few IconBundles
     * const { count } = await prisma.iconBundle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IconBundleDeleteManyArgs>(args?: SelectSubset<T, IconBundleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IconBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconBundleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IconBundles
     * const iconBundle = await prisma.iconBundle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IconBundleUpdateManyArgs>(args: SelectSubset<T, IconBundleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IconBundle.
     * @param {IconBundleUpsertArgs} args - Arguments to update or create a IconBundle.
     * @example
     * // Update or create a IconBundle
     * const iconBundle = await prisma.iconBundle.upsert({
     *   create: {
     *     // ... data to create a IconBundle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IconBundle we want to update
     *   }
     * })
     */
    upsert<T extends IconBundleUpsertArgs>(args: SelectSubset<T, IconBundleUpsertArgs<ExtArgs>>): Prisma__IconBundleClient<$Result.GetResult<Prisma.$IconBundlePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IconBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconBundleCountArgs} args - Arguments to filter IconBundles to count.
     * @example
     * // Count the number of IconBundles
     * const count = await prisma.iconBundle.count({
     *   where: {
     *     // ... the filter for the IconBundles we want to count
     *   }
     * })
    **/
    count<T extends IconBundleCountArgs>(
      args?: Subset<T, IconBundleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IconBundleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IconBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconBundleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IconBundleAggregateArgs>(args: Subset<T, IconBundleAggregateArgs>): Prisma.PrismaPromise<GetIconBundleAggregateType<T>>

    /**
     * Group by IconBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconBundleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IconBundleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IconBundleGroupByArgs['orderBy'] }
        : { orderBy?: IconBundleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IconBundleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIconBundleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IconBundle model
   */
  readonly fields: IconBundleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IconBundle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IconBundleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icon<T extends IconDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IconDefaultArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bundle<T extends BundleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BundleDefaultArgs<ExtArgs>>): Prisma__BundleClient<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IconBundle model
   */ 
  interface IconBundleFieldRefs {
    readonly icon_id: FieldRef<"IconBundle", 'Int'>
    readonly bundle_id: FieldRef<"IconBundle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * IconBundle findUnique
   */
  export type IconBundleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * Filter, which IconBundle to fetch.
     */
    where: IconBundleWhereUniqueInput
  }

  /**
   * IconBundle findUniqueOrThrow
   */
  export type IconBundleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * Filter, which IconBundle to fetch.
     */
    where: IconBundleWhereUniqueInput
  }

  /**
   * IconBundle findFirst
   */
  export type IconBundleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * Filter, which IconBundle to fetch.
     */
    where?: IconBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IconBundles to fetch.
     */
    orderBy?: IconBundleOrderByWithRelationInput | IconBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IconBundles.
     */
    cursor?: IconBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IconBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IconBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IconBundles.
     */
    distinct?: IconBundleScalarFieldEnum | IconBundleScalarFieldEnum[]
  }

  /**
   * IconBundle findFirstOrThrow
   */
  export type IconBundleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * Filter, which IconBundle to fetch.
     */
    where?: IconBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IconBundles to fetch.
     */
    orderBy?: IconBundleOrderByWithRelationInput | IconBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IconBundles.
     */
    cursor?: IconBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IconBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IconBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IconBundles.
     */
    distinct?: IconBundleScalarFieldEnum | IconBundleScalarFieldEnum[]
  }

  /**
   * IconBundle findMany
   */
  export type IconBundleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * Filter, which IconBundles to fetch.
     */
    where?: IconBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IconBundles to fetch.
     */
    orderBy?: IconBundleOrderByWithRelationInput | IconBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IconBundles.
     */
    cursor?: IconBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IconBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IconBundles.
     */
    skip?: number
    distinct?: IconBundleScalarFieldEnum | IconBundleScalarFieldEnum[]
  }

  /**
   * IconBundle create
   */
  export type IconBundleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * The data needed to create a IconBundle.
     */
    data: XOR<IconBundleCreateInput, IconBundleUncheckedCreateInput>
  }

  /**
   * IconBundle createMany
   */
  export type IconBundleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IconBundles.
     */
    data: IconBundleCreateManyInput | IconBundleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IconBundle update
   */
  export type IconBundleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * The data needed to update a IconBundle.
     */
    data: XOR<IconBundleUpdateInput, IconBundleUncheckedUpdateInput>
    /**
     * Choose, which IconBundle to update.
     */
    where: IconBundleWhereUniqueInput
  }

  /**
   * IconBundle updateMany
   */
  export type IconBundleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IconBundles.
     */
    data: XOR<IconBundleUpdateManyMutationInput, IconBundleUncheckedUpdateManyInput>
    /**
     * Filter which IconBundles to update
     */
    where?: IconBundleWhereInput
  }

  /**
   * IconBundle upsert
   */
  export type IconBundleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * The filter to search for the IconBundle to update in case it exists.
     */
    where: IconBundleWhereUniqueInput
    /**
     * In case the IconBundle found by the `where` argument doesn't exist, create a new IconBundle with this data.
     */
    create: XOR<IconBundleCreateInput, IconBundleUncheckedCreateInput>
    /**
     * In case the IconBundle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IconBundleUpdateInput, IconBundleUncheckedUpdateInput>
  }

  /**
   * IconBundle delete
   */
  export type IconBundleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
    /**
     * Filter which IconBundle to delete.
     */
    where: IconBundleWhereUniqueInput
  }

  /**
   * IconBundle deleteMany
   */
  export type IconBundleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IconBundles to delete
     */
    where?: IconBundleWhereInput
  }

  /**
   * IconBundle without action
   */
  export type IconBundleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconBundle
     */
    select?: IconBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconBundleInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.CategoryStatus | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.CategoryStatus | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    status: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    status: $Enums.CategoryStatus
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    icons?: boolean | Category$iconsArgs<ExtArgs>
    bundles?: boolean | Category$bundlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>


  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icons?: boolean | Category$iconsArgs<ExtArgs>
    bundles?: boolean | Category$bundlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      icons: Prisma.$IconPayload<ExtArgs>[]
      bundles: Prisma.$BundlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.CategoryStatus
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icons<T extends Category$iconsArgs<ExtArgs> = {}>(args?: Subset<T, Category$iconsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findMany"> | Null>
    bundles<T extends Category$bundlesArgs<ExtArgs> = {}>(args?: Subset<T, Category$bundlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly status: FieldRef<"Category", 'CategoryStatus'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.icons
   */
  export type Category$iconsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    where?: IconWhereInput
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    cursor?: IconWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Category.bundles
   */
  export type Category$bundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    where?: BundleWhereInput
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    cursor?: BundleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    taggable_id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
    taggable_id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    taggable_id: number | null
    taggable_type: $Enums.TaggableType | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    taggable_id: number | null
    taggable_type: $Enums.TaggableType | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    taggable_id: number
    taggable_type: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    taggable_id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    taggable_id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    taggable_id?: true
    taggable_type?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    taggable_id?: true
    taggable_type?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    taggable_id?: true
    taggable_type?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taggable_id?: boolean
    taggable_type?: boolean
    name?: boolean
    iconTags?: boolean | Tag$iconTagsArgs<ExtArgs>
    bundleTags?: boolean | Tag$bundleTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>


  export type TagSelectScalar = {
    id?: boolean
    taggable_id?: boolean
    taggable_type?: boolean
    name?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    iconTags?: boolean | Tag$iconTagsArgs<ExtArgs>
    bundleTags?: boolean | Tag$bundleTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      iconTags: Prisma.$IconPayload<ExtArgs>[]
      bundleTags: Prisma.$BundlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taggable_id: number
      taggable_type: $Enums.TaggableType
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    iconTags<T extends Tag$iconTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$iconTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findMany"> | Null>
    bundleTags<T extends Tag$bundleTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$bundleTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BundlePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly taggable_id: FieldRef<"Tag", 'Int'>
    readonly taggable_type: FieldRef<"Tag", 'TaggableType'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.iconTags
   */
  export type Tag$iconTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    where?: IconWhereInput
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    cursor?: IconWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Tag.bundleTags
   */
  export type Tag$bundleTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bundle
     */
    select?: BundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BundleInclude<ExtArgs> | null
    where?: BundleWhereInput
    orderBy?: BundleOrderByWithRelationInput | BundleOrderByWithRelationInput[]
    cursor?: BundleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BundleScalarFieldEnum | BundleScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    refreshToken: 'refreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IconScalarFieldEnum: {
    id: 'id',
    title: 'title',
    path: 'path',
    type: 'type',
    status: 'status',
    approved: 'approved',
    need_to_improve: 'need_to_improve',
    style: 'style',
    category_id: 'category_id',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type IconScalarFieldEnum = (typeof IconScalarFieldEnum)[keyof typeof IconScalarFieldEnum]


  export const BundleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category_id: 'category_id',
    description: 'description',
    is_paid: 'is_paid',
    price: 'price',
    status: 'status',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type BundleScalarFieldEnum = (typeof BundleScalarFieldEnum)[keyof typeof BundleScalarFieldEnum]


  export const IconBundleScalarFieldEnum: {
    icon_id: 'icon_id',
    bundle_id: 'bundle_id'
  };

  export type IconBundleScalarFieldEnum = (typeof IconBundleScalarFieldEnum)[keyof typeof IconBundleScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    taggable_id: 'taggable_id',
    taggable_type: 'taggable_type',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'IconType'
   */
  export type EnumIconTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IconType'>
    


  /**
   * Reference to a field of type 'IconStatus'
   */
  export type EnumIconStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IconStatus'>
    


  /**
   * Reference to a field of type 'IconStyle'
   */
  export type EnumIconStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IconStyle'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'BundleStatus'
   */
  export type EnumBundleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BundleStatus'>
    


  /**
   * Reference to a field of type 'CategoryStatus'
   */
  export type EnumCategoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryStatus'>
    


  /**
   * Reference to a field of type 'TaggableType'
   */
  export type EnumTaggableTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaggableType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type IconWhereInput = {
    AND?: IconWhereInput | IconWhereInput[]
    OR?: IconWhereInput[]
    NOT?: IconWhereInput | IconWhereInput[]
    id?: IntFilter<"Icon"> | number
    title?: StringFilter<"Icon"> | string
    path?: StringFilter<"Icon"> | string
    type?: EnumIconTypeFilter<"Icon"> | $Enums.IconType
    status?: EnumIconStatusFilter<"Icon"> | $Enums.IconStatus
    approved?: BoolFilter<"Icon"> | boolean
    need_to_improve?: BoolFilter<"Icon"> | boolean
    style?: EnumIconStyleFilter<"Icon"> | $Enums.IconStyle
    category_id?: IntNullableFilter<"Icon"> | number | null
    created_by?: IntNullableFilter<"Icon"> | number | null
    created_at?: DateTimeFilter<"Icon"> | Date | string
    updated_at?: DateTimeFilter<"Icon"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Icon"> | Date | string | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    iconBundles?: IconBundleListRelationFilter
    tags?: TagListRelationFilter
  }

  export type IconOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    need_to_improve?: SortOrder
    style?: SortOrder
    category_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    iconBundles?: IconBundleOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type IconWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IconWhereInput | IconWhereInput[]
    OR?: IconWhereInput[]
    NOT?: IconWhereInput | IconWhereInput[]
    title?: StringFilter<"Icon"> | string
    path?: StringFilter<"Icon"> | string
    type?: EnumIconTypeFilter<"Icon"> | $Enums.IconType
    status?: EnumIconStatusFilter<"Icon"> | $Enums.IconStatus
    approved?: BoolFilter<"Icon"> | boolean
    need_to_improve?: BoolFilter<"Icon"> | boolean
    style?: EnumIconStyleFilter<"Icon"> | $Enums.IconStyle
    category_id?: IntNullableFilter<"Icon"> | number | null
    created_by?: IntNullableFilter<"Icon"> | number | null
    created_at?: DateTimeFilter<"Icon"> | Date | string
    updated_at?: DateTimeFilter<"Icon"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Icon"> | Date | string | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    iconBundles?: IconBundleListRelationFilter
    tags?: TagListRelationFilter
  }, "id">

  export type IconOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    need_to_improve?: SortOrder
    style?: SortOrder
    category_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: IconCountOrderByAggregateInput
    _avg?: IconAvgOrderByAggregateInput
    _max?: IconMaxOrderByAggregateInput
    _min?: IconMinOrderByAggregateInput
    _sum?: IconSumOrderByAggregateInput
  }

  export type IconScalarWhereWithAggregatesInput = {
    AND?: IconScalarWhereWithAggregatesInput | IconScalarWhereWithAggregatesInput[]
    OR?: IconScalarWhereWithAggregatesInput[]
    NOT?: IconScalarWhereWithAggregatesInput | IconScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Icon"> | number
    title?: StringWithAggregatesFilter<"Icon"> | string
    path?: StringWithAggregatesFilter<"Icon"> | string
    type?: EnumIconTypeWithAggregatesFilter<"Icon"> | $Enums.IconType
    status?: EnumIconStatusWithAggregatesFilter<"Icon"> | $Enums.IconStatus
    approved?: BoolWithAggregatesFilter<"Icon"> | boolean
    need_to_improve?: BoolWithAggregatesFilter<"Icon"> | boolean
    style?: EnumIconStyleWithAggregatesFilter<"Icon"> | $Enums.IconStyle
    category_id?: IntNullableWithAggregatesFilter<"Icon"> | number | null
    created_by?: IntNullableWithAggregatesFilter<"Icon"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Icon"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Icon"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Icon"> | Date | string | null
  }

  export type BundleWhereInput = {
    AND?: BundleWhereInput | BundleWhereInput[]
    OR?: BundleWhereInput[]
    NOT?: BundleWhereInput | BundleWhereInput[]
    id?: IntFilter<"Bundle"> | number
    title?: StringFilter<"Bundle"> | string
    category_id?: IntNullableFilter<"Bundle"> | number | null
    description?: StringNullableFilter<"Bundle"> | string | null
    is_paid?: BoolFilter<"Bundle"> | boolean
    price?: FloatFilter<"Bundle"> | number
    status?: EnumBundleStatusFilter<"Bundle"> | $Enums.BundleStatus
    created_by?: IntNullableFilter<"Bundle"> | number | null
    created_at?: DateTimeFilter<"Bundle"> | Date | string
    updated_at?: DateTimeFilter<"Bundle"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Bundle"> | Date | string | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    iconBundles?: IconBundleListRelationFilter
    tags?: TagListRelationFilter
  }

  export type BundleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    is_paid?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    iconBundles?: IconBundleOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type BundleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BundleWhereInput | BundleWhereInput[]
    OR?: BundleWhereInput[]
    NOT?: BundleWhereInput | BundleWhereInput[]
    title?: StringFilter<"Bundle"> | string
    category_id?: IntNullableFilter<"Bundle"> | number | null
    description?: StringNullableFilter<"Bundle"> | string | null
    is_paid?: BoolFilter<"Bundle"> | boolean
    price?: FloatFilter<"Bundle"> | number
    status?: EnumBundleStatusFilter<"Bundle"> | $Enums.BundleStatus
    created_by?: IntNullableFilter<"Bundle"> | number | null
    created_at?: DateTimeFilter<"Bundle"> | Date | string
    updated_at?: DateTimeFilter<"Bundle"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Bundle"> | Date | string | null
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    iconBundles?: IconBundleListRelationFilter
    tags?: TagListRelationFilter
  }, "id">

  export type BundleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    is_paid?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: BundleCountOrderByAggregateInput
    _avg?: BundleAvgOrderByAggregateInput
    _max?: BundleMaxOrderByAggregateInput
    _min?: BundleMinOrderByAggregateInput
    _sum?: BundleSumOrderByAggregateInput
  }

  export type BundleScalarWhereWithAggregatesInput = {
    AND?: BundleScalarWhereWithAggregatesInput | BundleScalarWhereWithAggregatesInput[]
    OR?: BundleScalarWhereWithAggregatesInput[]
    NOT?: BundleScalarWhereWithAggregatesInput | BundleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bundle"> | number
    title?: StringWithAggregatesFilter<"Bundle"> | string
    category_id?: IntNullableWithAggregatesFilter<"Bundle"> | number | null
    description?: StringNullableWithAggregatesFilter<"Bundle"> | string | null
    is_paid?: BoolWithAggregatesFilter<"Bundle"> | boolean
    price?: FloatWithAggregatesFilter<"Bundle"> | number
    status?: EnumBundleStatusWithAggregatesFilter<"Bundle"> | $Enums.BundleStatus
    created_by?: IntNullableWithAggregatesFilter<"Bundle"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Bundle"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bundle"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Bundle"> | Date | string | null
  }

  export type IconBundleWhereInput = {
    AND?: IconBundleWhereInput | IconBundleWhereInput[]
    OR?: IconBundleWhereInput[]
    NOT?: IconBundleWhereInput | IconBundleWhereInput[]
    icon_id?: IntFilter<"IconBundle"> | number
    bundle_id?: IntFilter<"IconBundle"> | number
    icon?: XOR<IconRelationFilter, IconWhereInput>
    bundle?: XOR<BundleRelationFilter, BundleWhereInput>
  }

  export type IconBundleOrderByWithRelationInput = {
    icon_id?: SortOrder
    bundle_id?: SortOrder
    icon?: IconOrderByWithRelationInput
    bundle?: BundleOrderByWithRelationInput
  }

  export type IconBundleWhereUniqueInput = Prisma.AtLeast<{
    icon_id_bundle_id?: IconBundleIcon_idBundle_idCompoundUniqueInput
    AND?: IconBundleWhereInput | IconBundleWhereInput[]
    OR?: IconBundleWhereInput[]
    NOT?: IconBundleWhereInput | IconBundleWhereInput[]
    icon_id?: IntFilter<"IconBundle"> | number
    bundle_id?: IntFilter<"IconBundle"> | number
    icon?: XOR<IconRelationFilter, IconWhereInput>
    bundle?: XOR<BundleRelationFilter, BundleWhereInput>
  }, "icon_id_bundle_id">

  export type IconBundleOrderByWithAggregationInput = {
    icon_id?: SortOrder
    bundle_id?: SortOrder
    _count?: IconBundleCountOrderByAggregateInput
    _avg?: IconBundleAvgOrderByAggregateInput
    _max?: IconBundleMaxOrderByAggregateInput
    _min?: IconBundleMinOrderByAggregateInput
    _sum?: IconBundleSumOrderByAggregateInput
  }

  export type IconBundleScalarWhereWithAggregatesInput = {
    AND?: IconBundleScalarWhereWithAggregatesInput | IconBundleScalarWhereWithAggregatesInput[]
    OR?: IconBundleScalarWhereWithAggregatesInput[]
    NOT?: IconBundleScalarWhereWithAggregatesInput | IconBundleScalarWhereWithAggregatesInput[]
    icon_id?: IntWithAggregatesFilter<"IconBundle"> | number
    bundle_id?: IntWithAggregatesFilter<"IconBundle"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    status?: EnumCategoryStatusFilter<"Category"> | $Enums.CategoryStatus
    icons?: IconListRelationFilter
    bundles?: BundleListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    icons?: IconOrderByRelationAggregateInput
    bundles?: BundleOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    status?: EnumCategoryStatusFilter<"Category"> | $Enums.CategoryStatus
    icons?: IconListRelationFilter
    bundles?: BundleListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    status?: EnumCategoryStatusWithAggregatesFilter<"Category"> | $Enums.CategoryStatus
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    taggable_id?: IntFilter<"Tag"> | number
    taggable_type?: EnumTaggableTypeFilter<"Tag"> | $Enums.TaggableType
    name?: StringFilter<"Tag"> | string
    iconTags?: IconListRelationFilter
    bundleTags?: BundleListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    taggable_id?: SortOrder
    taggable_type?: SortOrder
    name?: SortOrder
    iconTags?: IconOrderByRelationAggregateInput
    bundleTags?: BundleOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    taggable_id?: IntFilter<"Tag"> | number
    taggable_type?: EnumTaggableTypeFilter<"Tag"> | $Enums.TaggableType
    name?: StringFilter<"Tag"> | string
    iconTags?: IconListRelationFilter
    bundleTags?: BundleListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    taggable_id?: SortOrder
    taggable_type?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    taggable_id?: IntWithAggregatesFilter<"Tag"> | number
    taggable_type?: EnumTaggableTypeWithAggregatesFilter<"Tag"> | $Enums.TaggableType
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: string | null
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IconCreateInput = {
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    category?: CategoryCreateNestedOneWithoutIconsInput
    iconBundles?: IconBundleCreateNestedManyWithoutIconInput
    tags?: TagCreateNestedManyWithoutIconTagsInput
  }

  export type IconUncheckedCreateInput = {
    id?: number
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    category_id?: number | null
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleUncheckedCreateNestedManyWithoutIconInput
    tags?: TagUncheckedCreateNestedManyWithoutIconTagsInput
  }

  export type IconUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutIconsNestedInput
    iconBundles?: IconBundleUpdateManyWithoutIconNestedInput
    tags?: TagUpdateManyWithoutIconTagsNestedInput
  }

  export type IconUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUncheckedUpdateManyWithoutIconNestedInput
    tags?: TagUncheckedUpdateManyWithoutIconTagsNestedInput
  }

  export type IconCreateManyInput = {
    id?: number
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    category_id?: number | null
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type IconUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IconUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BundleCreateInput = {
    title: string
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    category?: CategoryCreateNestedOneWithoutBundlesInput
    iconBundles?: IconBundleCreateNestedManyWithoutBundleInput
    tags?: TagCreateNestedManyWithoutBundleTagsInput
  }

  export type BundleUncheckedCreateInput = {
    id?: number
    title: string
    category_id?: number | null
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleUncheckedCreateNestedManyWithoutBundleInput
    tags?: TagUncheckedCreateNestedManyWithoutBundleTagsInput
  }

  export type BundleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutBundlesNestedInput
    iconBundles?: IconBundleUpdateManyWithoutBundleNestedInput
    tags?: TagUpdateManyWithoutBundleTagsNestedInput
  }

  export type BundleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUncheckedUpdateManyWithoutBundleNestedInput
    tags?: TagUncheckedUpdateManyWithoutBundleTagsNestedInput
  }

  export type BundleCreateManyInput = {
    id?: number
    title: string
    category_id?: number | null
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type BundleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BundleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IconBundleCreateInput = {
    icon: IconCreateNestedOneWithoutIconBundlesInput
    bundle: BundleCreateNestedOneWithoutIconBundlesInput
  }

  export type IconBundleUncheckedCreateInput = {
    icon_id: number
    bundle_id: number
  }

  export type IconBundleUpdateInput = {
    icon?: IconUpdateOneRequiredWithoutIconBundlesNestedInput
    bundle?: BundleUpdateOneRequiredWithoutIconBundlesNestedInput
  }

  export type IconBundleUncheckedUpdateInput = {
    icon_id?: IntFieldUpdateOperationsInput | number
    bundle_id?: IntFieldUpdateOperationsInput | number
  }

  export type IconBundleCreateManyInput = {
    icon_id: number
    bundle_id: number
  }

  export type IconBundleUpdateManyMutationInput = {

  }

  export type IconBundleUncheckedUpdateManyInput = {
    icon_id?: IntFieldUpdateOperationsInput | number
    bundle_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    status?: $Enums.CategoryStatus
    icons?: IconCreateNestedManyWithoutCategoryInput
    bundles?: BundleCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    status?: $Enums.CategoryStatus
    icons?: IconUncheckedCreateNestedManyWithoutCategoryInput
    bundles?: BundleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    icons?: IconUpdateManyWithoutCategoryNestedInput
    bundles?: BundleUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    icons?: IconUncheckedUpdateManyWithoutCategoryNestedInput
    bundles?: BundleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    status?: $Enums.CategoryStatus
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
  }

  export type TagCreateInput = {
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
    iconTags?: IconCreateNestedManyWithoutTagsInput
    bundleTags?: BundleCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
    iconTags?: IconUncheckedCreateNestedManyWithoutTagsInput
    bundleTags?: BundleUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
    iconTags?: IconUpdateManyWithoutTagsNestedInput
    bundleTags?: BundleUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
    iconTags?: IconUncheckedUpdateManyWithoutTagsNestedInput
    bundleTags?: BundleUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
  }

  export type TagUpdateManyMutationInput = {
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumIconTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IconType | EnumIconTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IconType[]
    notIn?: $Enums.IconType[]
    not?: NestedEnumIconTypeFilter<$PrismaModel> | $Enums.IconType
  }

  export type EnumIconStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStatus | EnumIconStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IconStatus[]
    notIn?: $Enums.IconStatus[]
    not?: NestedEnumIconStatusFilter<$PrismaModel> | $Enums.IconStatus
  }

  export type EnumIconStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStyle | EnumIconStyleFieldRefInput<$PrismaModel>
    in?: $Enums.IconStyle[]
    notIn?: $Enums.IconStyle[]
    not?: NestedEnumIconStyleFilter<$PrismaModel> | $Enums.IconStyle
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type IconBundleListRelationFilter = {
    every?: IconBundleWhereInput
    some?: IconBundleWhereInput
    none?: IconBundleWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type IconBundleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IconCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    need_to_improve?: SortOrder
    style?: SortOrder
    category_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type IconAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    created_by?: SortOrder
  }

  export type IconMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    need_to_improve?: SortOrder
    style?: SortOrder
    category_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type IconMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    status?: SortOrder
    approved?: SortOrder
    need_to_improve?: SortOrder
    style?: SortOrder
    category_id?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type IconSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    created_by?: SortOrder
  }

  export type EnumIconTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IconType | EnumIconTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IconType[]
    notIn?: $Enums.IconType[]
    not?: NestedEnumIconTypeWithAggregatesFilter<$PrismaModel> | $Enums.IconType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIconTypeFilter<$PrismaModel>
    _max?: NestedEnumIconTypeFilter<$PrismaModel>
  }

  export type EnumIconStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStatus | EnumIconStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IconStatus[]
    notIn?: $Enums.IconStatus[]
    not?: NestedEnumIconStatusWithAggregatesFilter<$PrismaModel> | $Enums.IconStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIconStatusFilter<$PrismaModel>
    _max?: NestedEnumIconStatusFilter<$PrismaModel>
  }

  export type EnumIconStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStyle | EnumIconStyleFieldRefInput<$PrismaModel>
    in?: $Enums.IconStyle[]
    notIn?: $Enums.IconStyle[]
    not?: NestedEnumIconStyleWithAggregatesFilter<$PrismaModel> | $Enums.IconStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIconStyleFilter<$PrismaModel>
    _max?: NestedEnumIconStyleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumBundleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BundleStatus | EnumBundleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BundleStatus[]
    notIn?: $Enums.BundleStatus[]
    not?: NestedEnumBundleStatusFilter<$PrismaModel> | $Enums.BundleStatus
  }

  export type BundleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    is_paid?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type BundleAvgOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    created_by?: SortOrder
  }

  export type BundleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    is_paid?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type BundleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category_id?: SortOrder
    description?: SortOrder
    is_paid?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type BundleSumOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
    created_by?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumBundleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BundleStatus | EnumBundleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BundleStatus[]
    notIn?: $Enums.BundleStatus[]
    not?: NestedEnumBundleStatusWithAggregatesFilter<$PrismaModel> | $Enums.BundleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBundleStatusFilter<$PrismaModel>
    _max?: NestedEnumBundleStatusFilter<$PrismaModel>
  }

  export type IconRelationFilter = {
    is?: IconWhereInput
    isNot?: IconWhereInput
  }

  export type BundleRelationFilter = {
    is?: BundleWhereInput
    isNot?: BundleWhereInput
  }

  export type IconBundleIcon_idBundle_idCompoundUniqueInput = {
    icon_id: number
    bundle_id: number
  }

  export type IconBundleCountOrderByAggregateInput = {
    icon_id?: SortOrder
    bundle_id?: SortOrder
  }

  export type IconBundleAvgOrderByAggregateInput = {
    icon_id?: SortOrder
    bundle_id?: SortOrder
  }

  export type IconBundleMaxOrderByAggregateInput = {
    icon_id?: SortOrder
    bundle_id?: SortOrder
  }

  export type IconBundleMinOrderByAggregateInput = {
    icon_id?: SortOrder
    bundle_id?: SortOrder
  }

  export type IconBundleSumOrderByAggregateInput = {
    icon_id?: SortOrder
    bundle_id?: SortOrder
  }

  export type EnumCategoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[]
    notIn?: $Enums.CategoryStatus[]
    not?: NestedEnumCategoryStatusFilter<$PrismaModel> | $Enums.CategoryStatus
  }

  export type IconListRelationFilter = {
    every?: IconWhereInput
    some?: IconWhereInput
    none?: IconWhereInput
  }

  export type BundleListRelationFilter = {
    every?: BundleWhereInput
    some?: BundleWhereInput
    none?: BundleWhereInput
  }

  export type IconOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BundleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[]
    notIn?: $Enums.CategoryStatus[]
    not?: NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CategoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryStatusFilter<$PrismaModel>
    _max?: NestedEnumCategoryStatusFilter<$PrismaModel>
  }

  export type EnumTaggableTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaggableType | EnumTaggableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaggableType[]
    notIn?: $Enums.TaggableType[]
    not?: NestedEnumTaggableTypeFilter<$PrismaModel> | $Enums.TaggableType
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    taggable_id?: SortOrder
    taggable_type?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
    taggable_id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    taggable_id?: SortOrder
    taggable_type?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    taggable_id?: SortOrder
    taggable_type?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
    taggable_id?: SortOrder
  }

  export type EnumTaggableTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaggableType | EnumTaggableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaggableType[]
    notIn?: $Enums.TaggableType[]
    not?: NestedEnumTaggableTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaggableType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaggableTypeFilter<$PrismaModel>
    _max?: NestedEnumTaggableTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryCreateNestedOneWithoutIconsInput = {
    create?: XOR<CategoryCreateWithoutIconsInput, CategoryUncheckedCreateWithoutIconsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutIconsInput
    connect?: CategoryWhereUniqueInput
  }

  export type IconBundleCreateNestedManyWithoutIconInput = {
    create?: XOR<IconBundleCreateWithoutIconInput, IconBundleUncheckedCreateWithoutIconInput> | IconBundleCreateWithoutIconInput[] | IconBundleUncheckedCreateWithoutIconInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutIconInput | IconBundleCreateOrConnectWithoutIconInput[]
    createMany?: IconBundleCreateManyIconInputEnvelope
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutIconTagsInput = {
    create?: XOR<TagCreateWithoutIconTagsInput, TagUncheckedCreateWithoutIconTagsInput> | TagCreateWithoutIconTagsInput[] | TagUncheckedCreateWithoutIconTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutIconTagsInput | TagCreateOrConnectWithoutIconTagsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type IconBundleUncheckedCreateNestedManyWithoutIconInput = {
    create?: XOR<IconBundleCreateWithoutIconInput, IconBundleUncheckedCreateWithoutIconInput> | IconBundleCreateWithoutIconInput[] | IconBundleUncheckedCreateWithoutIconInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutIconInput | IconBundleCreateOrConnectWithoutIconInput[]
    createMany?: IconBundleCreateManyIconInputEnvelope
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutIconTagsInput = {
    create?: XOR<TagCreateWithoutIconTagsInput, TagUncheckedCreateWithoutIconTagsInput> | TagCreateWithoutIconTagsInput[] | TagUncheckedCreateWithoutIconTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutIconTagsInput | TagCreateOrConnectWithoutIconTagsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type EnumIconTypeFieldUpdateOperationsInput = {
    set?: $Enums.IconType
  }

  export type EnumIconStatusFieldUpdateOperationsInput = {
    set?: $Enums.IconStatus
  }

  export type EnumIconStyleFieldUpdateOperationsInput = {
    set?: $Enums.IconStyle
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CategoryUpdateOneWithoutIconsNestedInput = {
    create?: XOR<CategoryCreateWithoutIconsInput, CategoryUncheckedCreateWithoutIconsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutIconsInput
    upsert?: CategoryUpsertWithoutIconsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutIconsInput, CategoryUpdateWithoutIconsInput>, CategoryUncheckedUpdateWithoutIconsInput>
  }

  export type IconBundleUpdateManyWithoutIconNestedInput = {
    create?: XOR<IconBundleCreateWithoutIconInput, IconBundleUncheckedCreateWithoutIconInput> | IconBundleCreateWithoutIconInput[] | IconBundleUncheckedCreateWithoutIconInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutIconInput | IconBundleCreateOrConnectWithoutIconInput[]
    upsert?: IconBundleUpsertWithWhereUniqueWithoutIconInput | IconBundleUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: IconBundleCreateManyIconInputEnvelope
    set?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    disconnect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    delete?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    update?: IconBundleUpdateWithWhereUniqueWithoutIconInput | IconBundleUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: IconBundleUpdateManyWithWhereWithoutIconInput | IconBundleUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: IconBundleScalarWhereInput | IconBundleScalarWhereInput[]
  }

  export type TagUpdateManyWithoutIconTagsNestedInput = {
    create?: XOR<TagCreateWithoutIconTagsInput, TagUncheckedCreateWithoutIconTagsInput> | TagCreateWithoutIconTagsInput[] | TagUncheckedCreateWithoutIconTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutIconTagsInput | TagCreateOrConnectWithoutIconTagsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutIconTagsInput | TagUpsertWithWhereUniqueWithoutIconTagsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutIconTagsInput | TagUpdateWithWhereUniqueWithoutIconTagsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutIconTagsInput | TagUpdateManyWithWhereWithoutIconTagsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type IconBundleUncheckedUpdateManyWithoutIconNestedInput = {
    create?: XOR<IconBundleCreateWithoutIconInput, IconBundleUncheckedCreateWithoutIconInput> | IconBundleCreateWithoutIconInput[] | IconBundleUncheckedCreateWithoutIconInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutIconInput | IconBundleCreateOrConnectWithoutIconInput[]
    upsert?: IconBundleUpsertWithWhereUniqueWithoutIconInput | IconBundleUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: IconBundleCreateManyIconInputEnvelope
    set?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    disconnect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    delete?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    update?: IconBundleUpdateWithWhereUniqueWithoutIconInput | IconBundleUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: IconBundleUpdateManyWithWhereWithoutIconInput | IconBundleUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: IconBundleScalarWhereInput | IconBundleScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutIconTagsNestedInput = {
    create?: XOR<TagCreateWithoutIconTagsInput, TagUncheckedCreateWithoutIconTagsInput> | TagCreateWithoutIconTagsInput[] | TagUncheckedCreateWithoutIconTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutIconTagsInput | TagCreateOrConnectWithoutIconTagsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutIconTagsInput | TagUpsertWithWhereUniqueWithoutIconTagsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutIconTagsInput | TagUpdateWithWhereUniqueWithoutIconTagsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutIconTagsInput | TagUpdateManyWithWhereWithoutIconTagsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutBundlesInput = {
    create?: XOR<CategoryCreateWithoutBundlesInput, CategoryUncheckedCreateWithoutBundlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBundlesInput
    connect?: CategoryWhereUniqueInput
  }

  export type IconBundleCreateNestedManyWithoutBundleInput = {
    create?: XOR<IconBundleCreateWithoutBundleInput, IconBundleUncheckedCreateWithoutBundleInput> | IconBundleCreateWithoutBundleInput[] | IconBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutBundleInput | IconBundleCreateOrConnectWithoutBundleInput[]
    createMany?: IconBundleCreateManyBundleInputEnvelope
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutBundleTagsInput = {
    create?: XOR<TagCreateWithoutBundleTagsInput, TagUncheckedCreateWithoutBundleTagsInput> | TagCreateWithoutBundleTagsInput[] | TagUncheckedCreateWithoutBundleTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBundleTagsInput | TagCreateOrConnectWithoutBundleTagsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type IconBundleUncheckedCreateNestedManyWithoutBundleInput = {
    create?: XOR<IconBundleCreateWithoutBundleInput, IconBundleUncheckedCreateWithoutBundleInput> | IconBundleCreateWithoutBundleInput[] | IconBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutBundleInput | IconBundleCreateOrConnectWithoutBundleInput[]
    createMany?: IconBundleCreateManyBundleInputEnvelope
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutBundleTagsInput = {
    create?: XOR<TagCreateWithoutBundleTagsInput, TagUncheckedCreateWithoutBundleTagsInput> | TagCreateWithoutBundleTagsInput[] | TagUncheckedCreateWithoutBundleTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBundleTagsInput | TagCreateOrConnectWithoutBundleTagsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBundleStatusFieldUpdateOperationsInput = {
    set?: $Enums.BundleStatus
  }

  export type CategoryUpdateOneWithoutBundlesNestedInput = {
    create?: XOR<CategoryCreateWithoutBundlesInput, CategoryUncheckedCreateWithoutBundlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBundlesInput
    upsert?: CategoryUpsertWithoutBundlesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBundlesInput, CategoryUpdateWithoutBundlesInput>, CategoryUncheckedUpdateWithoutBundlesInput>
  }

  export type IconBundleUpdateManyWithoutBundleNestedInput = {
    create?: XOR<IconBundleCreateWithoutBundleInput, IconBundleUncheckedCreateWithoutBundleInput> | IconBundleCreateWithoutBundleInput[] | IconBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutBundleInput | IconBundleCreateOrConnectWithoutBundleInput[]
    upsert?: IconBundleUpsertWithWhereUniqueWithoutBundleInput | IconBundleUpsertWithWhereUniqueWithoutBundleInput[]
    createMany?: IconBundleCreateManyBundleInputEnvelope
    set?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    disconnect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    delete?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    update?: IconBundleUpdateWithWhereUniqueWithoutBundleInput | IconBundleUpdateWithWhereUniqueWithoutBundleInput[]
    updateMany?: IconBundleUpdateManyWithWhereWithoutBundleInput | IconBundleUpdateManyWithWhereWithoutBundleInput[]
    deleteMany?: IconBundleScalarWhereInput | IconBundleScalarWhereInput[]
  }

  export type TagUpdateManyWithoutBundleTagsNestedInput = {
    create?: XOR<TagCreateWithoutBundleTagsInput, TagUncheckedCreateWithoutBundleTagsInput> | TagCreateWithoutBundleTagsInput[] | TagUncheckedCreateWithoutBundleTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBundleTagsInput | TagCreateOrConnectWithoutBundleTagsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutBundleTagsInput | TagUpsertWithWhereUniqueWithoutBundleTagsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutBundleTagsInput | TagUpdateWithWhereUniqueWithoutBundleTagsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutBundleTagsInput | TagUpdateManyWithWhereWithoutBundleTagsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type IconBundleUncheckedUpdateManyWithoutBundleNestedInput = {
    create?: XOR<IconBundleCreateWithoutBundleInput, IconBundleUncheckedCreateWithoutBundleInput> | IconBundleCreateWithoutBundleInput[] | IconBundleUncheckedCreateWithoutBundleInput[]
    connectOrCreate?: IconBundleCreateOrConnectWithoutBundleInput | IconBundleCreateOrConnectWithoutBundleInput[]
    upsert?: IconBundleUpsertWithWhereUniqueWithoutBundleInput | IconBundleUpsertWithWhereUniqueWithoutBundleInput[]
    createMany?: IconBundleCreateManyBundleInputEnvelope
    set?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    disconnect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    delete?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    connect?: IconBundleWhereUniqueInput | IconBundleWhereUniqueInput[]
    update?: IconBundleUpdateWithWhereUniqueWithoutBundleInput | IconBundleUpdateWithWhereUniqueWithoutBundleInput[]
    updateMany?: IconBundleUpdateManyWithWhereWithoutBundleInput | IconBundleUpdateManyWithWhereWithoutBundleInput[]
    deleteMany?: IconBundleScalarWhereInput | IconBundleScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutBundleTagsNestedInput = {
    create?: XOR<TagCreateWithoutBundleTagsInput, TagUncheckedCreateWithoutBundleTagsInput> | TagCreateWithoutBundleTagsInput[] | TagUncheckedCreateWithoutBundleTagsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutBundleTagsInput | TagCreateOrConnectWithoutBundleTagsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutBundleTagsInput | TagUpsertWithWhereUniqueWithoutBundleTagsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutBundleTagsInput | TagUpdateWithWhereUniqueWithoutBundleTagsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutBundleTagsInput | TagUpdateManyWithWhereWithoutBundleTagsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type IconCreateNestedOneWithoutIconBundlesInput = {
    create?: XOR<IconCreateWithoutIconBundlesInput, IconUncheckedCreateWithoutIconBundlesInput>
    connectOrCreate?: IconCreateOrConnectWithoutIconBundlesInput
    connect?: IconWhereUniqueInput
  }

  export type BundleCreateNestedOneWithoutIconBundlesInput = {
    create?: XOR<BundleCreateWithoutIconBundlesInput, BundleUncheckedCreateWithoutIconBundlesInput>
    connectOrCreate?: BundleCreateOrConnectWithoutIconBundlesInput
    connect?: BundleWhereUniqueInput
  }

  export type IconUpdateOneRequiredWithoutIconBundlesNestedInput = {
    create?: XOR<IconCreateWithoutIconBundlesInput, IconUncheckedCreateWithoutIconBundlesInput>
    connectOrCreate?: IconCreateOrConnectWithoutIconBundlesInput
    upsert?: IconUpsertWithoutIconBundlesInput
    connect?: IconWhereUniqueInput
    update?: XOR<XOR<IconUpdateToOneWithWhereWithoutIconBundlesInput, IconUpdateWithoutIconBundlesInput>, IconUncheckedUpdateWithoutIconBundlesInput>
  }

  export type BundleUpdateOneRequiredWithoutIconBundlesNestedInput = {
    create?: XOR<BundleCreateWithoutIconBundlesInput, BundleUncheckedCreateWithoutIconBundlesInput>
    connectOrCreate?: BundleCreateOrConnectWithoutIconBundlesInput
    upsert?: BundleUpsertWithoutIconBundlesInput
    connect?: BundleWhereUniqueInput
    update?: XOR<XOR<BundleUpdateToOneWithWhereWithoutIconBundlesInput, BundleUpdateWithoutIconBundlesInput>, BundleUncheckedUpdateWithoutIconBundlesInput>
  }

  export type IconCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IconCreateWithoutCategoryInput, IconUncheckedCreateWithoutCategoryInput> | IconCreateWithoutCategoryInput[] | IconUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IconCreateOrConnectWithoutCategoryInput | IconCreateOrConnectWithoutCategoryInput[]
    createMany?: IconCreateManyCategoryInputEnvelope
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
  }

  export type BundleCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BundleCreateWithoutCategoryInput, BundleUncheckedCreateWithoutCategoryInput> | BundleCreateWithoutCategoryInput[] | BundleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutCategoryInput | BundleCreateOrConnectWithoutCategoryInput[]
    createMany?: BundleCreateManyCategoryInputEnvelope
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
  }

  export type IconUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IconCreateWithoutCategoryInput, IconUncheckedCreateWithoutCategoryInput> | IconCreateWithoutCategoryInput[] | IconUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IconCreateOrConnectWithoutCategoryInput | IconCreateOrConnectWithoutCategoryInput[]
    createMany?: IconCreateManyCategoryInputEnvelope
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
  }

  export type BundleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BundleCreateWithoutCategoryInput, BundleUncheckedCreateWithoutCategoryInput> | BundleCreateWithoutCategoryInput[] | BundleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutCategoryInput | BundleCreateOrConnectWithoutCategoryInput[]
    createMany?: BundleCreateManyCategoryInputEnvelope
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
  }

  export type EnumCategoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.CategoryStatus
  }

  export type IconUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<IconCreateWithoutCategoryInput, IconUncheckedCreateWithoutCategoryInput> | IconCreateWithoutCategoryInput[] | IconUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IconCreateOrConnectWithoutCategoryInput | IconCreateOrConnectWithoutCategoryInput[]
    upsert?: IconUpsertWithWhereUniqueWithoutCategoryInput | IconUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: IconCreateManyCategoryInputEnvelope
    set?: IconWhereUniqueInput | IconWhereUniqueInput[]
    disconnect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    delete?: IconWhereUniqueInput | IconWhereUniqueInput[]
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    update?: IconUpdateWithWhereUniqueWithoutCategoryInput | IconUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: IconUpdateManyWithWhereWithoutCategoryInput | IconUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: IconScalarWhereInput | IconScalarWhereInput[]
  }

  export type BundleUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BundleCreateWithoutCategoryInput, BundleUncheckedCreateWithoutCategoryInput> | BundleCreateWithoutCategoryInput[] | BundleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutCategoryInput | BundleCreateOrConnectWithoutCategoryInput[]
    upsert?: BundleUpsertWithWhereUniqueWithoutCategoryInput | BundleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BundleCreateManyCategoryInputEnvelope
    set?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    disconnect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    delete?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    update?: BundleUpdateWithWhereUniqueWithoutCategoryInput | BundleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BundleUpdateManyWithWhereWithoutCategoryInput | BundleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BundleScalarWhereInput | BundleScalarWhereInput[]
  }

  export type IconUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<IconCreateWithoutCategoryInput, IconUncheckedCreateWithoutCategoryInput> | IconCreateWithoutCategoryInput[] | IconUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IconCreateOrConnectWithoutCategoryInput | IconCreateOrConnectWithoutCategoryInput[]
    upsert?: IconUpsertWithWhereUniqueWithoutCategoryInput | IconUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: IconCreateManyCategoryInputEnvelope
    set?: IconWhereUniqueInput | IconWhereUniqueInput[]
    disconnect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    delete?: IconWhereUniqueInput | IconWhereUniqueInput[]
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    update?: IconUpdateWithWhereUniqueWithoutCategoryInput | IconUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: IconUpdateManyWithWhereWithoutCategoryInput | IconUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: IconScalarWhereInput | IconScalarWhereInput[]
  }

  export type BundleUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BundleCreateWithoutCategoryInput, BundleUncheckedCreateWithoutCategoryInput> | BundleCreateWithoutCategoryInput[] | BundleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutCategoryInput | BundleCreateOrConnectWithoutCategoryInput[]
    upsert?: BundleUpsertWithWhereUniqueWithoutCategoryInput | BundleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BundleCreateManyCategoryInputEnvelope
    set?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    disconnect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    delete?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    update?: BundleUpdateWithWhereUniqueWithoutCategoryInput | BundleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BundleUpdateManyWithWhereWithoutCategoryInput | BundleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BundleScalarWhereInput | BundleScalarWhereInput[]
  }

  export type IconCreateNestedManyWithoutTagsInput = {
    create?: XOR<IconCreateWithoutTagsInput, IconUncheckedCreateWithoutTagsInput> | IconCreateWithoutTagsInput[] | IconUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: IconCreateOrConnectWithoutTagsInput | IconCreateOrConnectWithoutTagsInput[]
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
  }

  export type BundleCreateNestedManyWithoutTagsInput = {
    create?: XOR<BundleCreateWithoutTagsInput, BundleUncheckedCreateWithoutTagsInput> | BundleCreateWithoutTagsInput[] | BundleUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutTagsInput | BundleCreateOrConnectWithoutTagsInput[]
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
  }

  export type IconUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<IconCreateWithoutTagsInput, IconUncheckedCreateWithoutTagsInput> | IconCreateWithoutTagsInput[] | IconUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: IconCreateOrConnectWithoutTagsInput | IconCreateOrConnectWithoutTagsInput[]
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
  }

  export type BundleUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<BundleCreateWithoutTagsInput, BundleUncheckedCreateWithoutTagsInput> | BundleCreateWithoutTagsInput[] | BundleUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutTagsInput | BundleCreateOrConnectWithoutTagsInput[]
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
  }

  export type EnumTaggableTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaggableType
  }

  export type IconUpdateManyWithoutTagsNestedInput = {
    create?: XOR<IconCreateWithoutTagsInput, IconUncheckedCreateWithoutTagsInput> | IconCreateWithoutTagsInput[] | IconUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: IconCreateOrConnectWithoutTagsInput | IconCreateOrConnectWithoutTagsInput[]
    upsert?: IconUpsertWithWhereUniqueWithoutTagsInput | IconUpsertWithWhereUniqueWithoutTagsInput[]
    set?: IconWhereUniqueInput | IconWhereUniqueInput[]
    disconnect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    delete?: IconWhereUniqueInput | IconWhereUniqueInput[]
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    update?: IconUpdateWithWhereUniqueWithoutTagsInput | IconUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: IconUpdateManyWithWhereWithoutTagsInput | IconUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: IconScalarWhereInput | IconScalarWhereInput[]
  }

  export type BundleUpdateManyWithoutTagsNestedInput = {
    create?: XOR<BundleCreateWithoutTagsInput, BundleUncheckedCreateWithoutTagsInput> | BundleCreateWithoutTagsInput[] | BundleUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutTagsInput | BundleCreateOrConnectWithoutTagsInput[]
    upsert?: BundleUpsertWithWhereUniqueWithoutTagsInput | BundleUpsertWithWhereUniqueWithoutTagsInput[]
    set?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    disconnect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    delete?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    update?: BundleUpdateWithWhereUniqueWithoutTagsInput | BundleUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: BundleUpdateManyWithWhereWithoutTagsInput | BundleUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: BundleScalarWhereInput | BundleScalarWhereInput[]
  }

  export type IconUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<IconCreateWithoutTagsInput, IconUncheckedCreateWithoutTagsInput> | IconCreateWithoutTagsInput[] | IconUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: IconCreateOrConnectWithoutTagsInput | IconCreateOrConnectWithoutTagsInput[]
    upsert?: IconUpsertWithWhereUniqueWithoutTagsInput | IconUpsertWithWhereUniqueWithoutTagsInput[]
    set?: IconWhereUniqueInput | IconWhereUniqueInput[]
    disconnect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    delete?: IconWhereUniqueInput | IconWhereUniqueInput[]
    connect?: IconWhereUniqueInput | IconWhereUniqueInput[]
    update?: IconUpdateWithWhereUniqueWithoutTagsInput | IconUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: IconUpdateManyWithWhereWithoutTagsInput | IconUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: IconScalarWhereInput | IconScalarWhereInput[]
  }

  export type BundleUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<BundleCreateWithoutTagsInput, BundleUncheckedCreateWithoutTagsInput> | BundleCreateWithoutTagsInput[] | BundleUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: BundleCreateOrConnectWithoutTagsInput | BundleCreateOrConnectWithoutTagsInput[]
    upsert?: BundleUpsertWithWhereUniqueWithoutTagsInput | BundleUpsertWithWhereUniqueWithoutTagsInput[]
    set?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    disconnect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    delete?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    connect?: BundleWhereUniqueInput | BundleWhereUniqueInput[]
    update?: BundleUpdateWithWhereUniqueWithoutTagsInput | BundleUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: BundleUpdateManyWithWhereWithoutTagsInput | BundleUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: BundleScalarWhereInput | BundleScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIconTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IconType | EnumIconTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IconType[]
    notIn?: $Enums.IconType[]
    not?: NestedEnumIconTypeFilter<$PrismaModel> | $Enums.IconType
  }

  export type NestedEnumIconStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStatus | EnumIconStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IconStatus[]
    notIn?: $Enums.IconStatus[]
    not?: NestedEnumIconStatusFilter<$PrismaModel> | $Enums.IconStatus
  }

  export type NestedEnumIconStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStyle | EnumIconStyleFieldRefInput<$PrismaModel>
    in?: $Enums.IconStyle[]
    notIn?: $Enums.IconStyle[]
    not?: NestedEnumIconStyleFilter<$PrismaModel> | $Enums.IconStyle
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumIconTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IconType | EnumIconTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IconType[]
    notIn?: $Enums.IconType[]
    not?: NestedEnumIconTypeWithAggregatesFilter<$PrismaModel> | $Enums.IconType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIconTypeFilter<$PrismaModel>
    _max?: NestedEnumIconTypeFilter<$PrismaModel>
  }

  export type NestedEnumIconStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStatus | EnumIconStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IconStatus[]
    notIn?: $Enums.IconStatus[]
    not?: NestedEnumIconStatusWithAggregatesFilter<$PrismaModel> | $Enums.IconStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIconStatusFilter<$PrismaModel>
    _max?: NestedEnumIconStatusFilter<$PrismaModel>
  }

  export type NestedEnumIconStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IconStyle | EnumIconStyleFieldRefInput<$PrismaModel>
    in?: $Enums.IconStyle[]
    notIn?: $Enums.IconStyle[]
    not?: NestedEnumIconStyleWithAggregatesFilter<$PrismaModel> | $Enums.IconStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIconStyleFilter<$PrismaModel>
    _max?: NestedEnumIconStyleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBundleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BundleStatus | EnumBundleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BundleStatus[]
    notIn?: $Enums.BundleStatus[]
    not?: NestedEnumBundleStatusFilter<$PrismaModel> | $Enums.BundleStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumBundleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BundleStatus | EnumBundleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BundleStatus[]
    notIn?: $Enums.BundleStatus[]
    not?: NestedEnumBundleStatusWithAggregatesFilter<$PrismaModel> | $Enums.BundleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBundleStatusFilter<$PrismaModel>
    _max?: NestedEnumBundleStatusFilter<$PrismaModel>
  }

  export type NestedEnumCategoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[]
    notIn?: $Enums.CategoryStatus[]
    not?: NestedEnumCategoryStatusFilter<$PrismaModel> | $Enums.CategoryStatus
  }

  export type NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[]
    notIn?: $Enums.CategoryStatus[]
    not?: NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CategoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryStatusFilter<$PrismaModel>
    _max?: NestedEnumCategoryStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaggableTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaggableType | EnumTaggableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaggableType[]
    notIn?: $Enums.TaggableType[]
    not?: NestedEnumTaggableTypeFilter<$PrismaModel> | $Enums.TaggableType
  }

  export type NestedEnumTaggableTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaggableType | EnumTaggableTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaggableType[]
    notIn?: $Enums.TaggableType[]
    not?: NestedEnumTaggableTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaggableType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaggableTypeFilter<$PrismaModel>
    _max?: NestedEnumTaggableTypeFilter<$PrismaModel>
  }

  export type CategoryCreateWithoutIconsInput = {
    name: string
    status?: $Enums.CategoryStatus
    bundles?: BundleCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutIconsInput = {
    id?: number
    name: string
    status?: $Enums.CategoryStatus
    bundles?: BundleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutIconsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutIconsInput, CategoryUncheckedCreateWithoutIconsInput>
  }

  export type IconBundleCreateWithoutIconInput = {
    bundle: BundleCreateNestedOneWithoutIconBundlesInput
  }

  export type IconBundleUncheckedCreateWithoutIconInput = {
    bundle_id: number
  }

  export type IconBundleCreateOrConnectWithoutIconInput = {
    where: IconBundleWhereUniqueInput
    create: XOR<IconBundleCreateWithoutIconInput, IconBundleUncheckedCreateWithoutIconInput>
  }

  export type IconBundleCreateManyIconInputEnvelope = {
    data: IconBundleCreateManyIconInput | IconBundleCreateManyIconInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutIconTagsInput = {
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
    bundleTags?: BundleCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutIconTagsInput = {
    id?: number
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
    bundleTags?: BundleUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutIconTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutIconTagsInput, TagUncheckedCreateWithoutIconTagsInput>
  }

  export type CategoryUpsertWithoutIconsInput = {
    update: XOR<CategoryUpdateWithoutIconsInput, CategoryUncheckedUpdateWithoutIconsInput>
    create: XOR<CategoryCreateWithoutIconsInput, CategoryUncheckedCreateWithoutIconsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutIconsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutIconsInput, CategoryUncheckedUpdateWithoutIconsInput>
  }

  export type CategoryUpdateWithoutIconsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    bundles?: BundleUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutIconsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    bundles?: BundleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type IconBundleUpsertWithWhereUniqueWithoutIconInput = {
    where: IconBundleWhereUniqueInput
    update: XOR<IconBundleUpdateWithoutIconInput, IconBundleUncheckedUpdateWithoutIconInput>
    create: XOR<IconBundleCreateWithoutIconInput, IconBundleUncheckedCreateWithoutIconInput>
  }

  export type IconBundleUpdateWithWhereUniqueWithoutIconInput = {
    where: IconBundleWhereUniqueInput
    data: XOR<IconBundleUpdateWithoutIconInput, IconBundleUncheckedUpdateWithoutIconInput>
  }

  export type IconBundleUpdateManyWithWhereWithoutIconInput = {
    where: IconBundleScalarWhereInput
    data: XOR<IconBundleUpdateManyMutationInput, IconBundleUncheckedUpdateManyWithoutIconInput>
  }

  export type IconBundleScalarWhereInput = {
    AND?: IconBundleScalarWhereInput | IconBundleScalarWhereInput[]
    OR?: IconBundleScalarWhereInput[]
    NOT?: IconBundleScalarWhereInput | IconBundleScalarWhereInput[]
    icon_id?: IntFilter<"IconBundle"> | number
    bundle_id?: IntFilter<"IconBundle"> | number
  }

  export type TagUpsertWithWhereUniqueWithoutIconTagsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutIconTagsInput, TagUncheckedUpdateWithoutIconTagsInput>
    create: XOR<TagCreateWithoutIconTagsInput, TagUncheckedCreateWithoutIconTagsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutIconTagsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutIconTagsInput, TagUncheckedUpdateWithoutIconTagsInput>
  }

  export type TagUpdateManyWithWhereWithoutIconTagsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutIconTagsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    taggable_id?: IntFilter<"Tag"> | number
    taggable_type?: EnumTaggableTypeFilter<"Tag"> | $Enums.TaggableType
    name?: StringFilter<"Tag"> | string
  }

  export type CategoryCreateWithoutBundlesInput = {
    name: string
    status?: $Enums.CategoryStatus
    icons?: IconCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBundlesInput = {
    id?: number
    name: string
    status?: $Enums.CategoryStatus
    icons?: IconUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBundlesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBundlesInput, CategoryUncheckedCreateWithoutBundlesInput>
  }

  export type IconBundleCreateWithoutBundleInput = {
    icon: IconCreateNestedOneWithoutIconBundlesInput
  }

  export type IconBundleUncheckedCreateWithoutBundleInput = {
    icon_id: number
  }

  export type IconBundleCreateOrConnectWithoutBundleInput = {
    where: IconBundleWhereUniqueInput
    create: XOR<IconBundleCreateWithoutBundleInput, IconBundleUncheckedCreateWithoutBundleInput>
  }

  export type IconBundleCreateManyBundleInputEnvelope = {
    data: IconBundleCreateManyBundleInput | IconBundleCreateManyBundleInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutBundleTagsInput = {
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
    iconTags?: IconCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutBundleTagsInput = {
    id?: number
    taggable_id: number
    taggable_type: $Enums.TaggableType
    name: string
    iconTags?: IconUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutBundleTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutBundleTagsInput, TagUncheckedCreateWithoutBundleTagsInput>
  }

  export type CategoryUpsertWithoutBundlesInput = {
    update: XOR<CategoryUpdateWithoutBundlesInput, CategoryUncheckedUpdateWithoutBundlesInput>
    create: XOR<CategoryCreateWithoutBundlesInput, CategoryUncheckedCreateWithoutBundlesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBundlesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBundlesInput, CategoryUncheckedUpdateWithoutBundlesInput>
  }

  export type CategoryUpdateWithoutBundlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    icons?: IconUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBundlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    icons?: IconUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type IconBundleUpsertWithWhereUniqueWithoutBundleInput = {
    where: IconBundleWhereUniqueInput
    update: XOR<IconBundleUpdateWithoutBundleInput, IconBundleUncheckedUpdateWithoutBundleInput>
    create: XOR<IconBundleCreateWithoutBundleInput, IconBundleUncheckedCreateWithoutBundleInput>
  }

  export type IconBundleUpdateWithWhereUniqueWithoutBundleInput = {
    where: IconBundleWhereUniqueInput
    data: XOR<IconBundleUpdateWithoutBundleInput, IconBundleUncheckedUpdateWithoutBundleInput>
  }

  export type IconBundleUpdateManyWithWhereWithoutBundleInput = {
    where: IconBundleScalarWhereInput
    data: XOR<IconBundleUpdateManyMutationInput, IconBundleUncheckedUpdateManyWithoutBundleInput>
  }

  export type TagUpsertWithWhereUniqueWithoutBundleTagsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutBundleTagsInput, TagUncheckedUpdateWithoutBundleTagsInput>
    create: XOR<TagCreateWithoutBundleTagsInput, TagUncheckedCreateWithoutBundleTagsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutBundleTagsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutBundleTagsInput, TagUncheckedUpdateWithoutBundleTagsInput>
  }

  export type TagUpdateManyWithWhereWithoutBundleTagsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutBundleTagsInput>
  }

  export type IconCreateWithoutIconBundlesInput = {
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    category?: CategoryCreateNestedOneWithoutIconsInput
    tags?: TagCreateNestedManyWithoutIconTagsInput
  }

  export type IconUncheckedCreateWithoutIconBundlesInput = {
    id?: number
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    category_id?: number | null
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    tags?: TagUncheckedCreateNestedManyWithoutIconTagsInput
  }

  export type IconCreateOrConnectWithoutIconBundlesInput = {
    where: IconWhereUniqueInput
    create: XOR<IconCreateWithoutIconBundlesInput, IconUncheckedCreateWithoutIconBundlesInput>
  }

  export type BundleCreateWithoutIconBundlesInput = {
    title: string
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    category?: CategoryCreateNestedOneWithoutBundlesInput
    tags?: TagCreateNestedManyWithoutBundleTagsInput
  }

  export type BundleUncheckedCreateWithoutIconBundlesInput = {
    id?: number
    title: string
    category_id?: number | null
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    tags?: TagUncheckedCreateNestedManyWithoutBundleTagsInput
  }

  export type BundleCreateOrConnectWithoutIconBundlesInput = {
    where: BundleWhereUniqueInput
    create: XOR<BundleCreateWithoutIconBundlesInput, BundleUncheckedCreateWithoutIconBundlesInput>
  }

  export type IconUpsertWithoutIconBundlesInput = {
    update: XOR<IconUpdateWithoutIconBundlesInput, IconUncheckedUpdateWithoutIconBundlesInput>
    create: XOR<IconCreateWithoutIconBundlesInput, IconUncheckedCreateWithoutIconBundlesInput>
    where?: IconWhereInput
  }

  export type IconUpdateToOneWithWhereWithoutIconBundlesInput = {
    where?: IconWhereInput
    data: XOR<IconUpdateWithoutIconBundlesInput, IconUncheckedUpdateWithoutIconBundlesInput>
  }

  export type IconUpdateWithoutIconBundlesInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutIconsNestedInput
    tags?: TagUpdateManyWithoutIconTagsNestedInput
  }

  export type IconUncheckedUpdateWithoutIconBundlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TagUncheckedUpdateManyWithoutIconTagsNestedInput
  }

  export type BundleUpsertWithoutIconBundlesInput = {
    update: XOR<BundleUpdateWithoutIconBundlesInput, BundleUncheckedUpdateWithoutIconBundlesInput>
    create: XOR<BundleCreateWithoutIconBundlesInput, BundleUncheckedCreateWithoutIconBundlesInput>
    where?: BundleWhereInput
  }

  export type BundleUpdateToOneWithWhereWithoutIconBundlesInput = {
    where?: BundleWhereInput
    data: XOR<BundleUpdateWithoutIconBundlesInput, BundleUncheckedUpdateWithoutIconBundlesInput>
  }

  export type BundleUpdateWithoutIconBundlesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutBundlesNestedInput
    tags?: TagUpdateManyWithoutBundleTagsNestedInput
  }

  export type BundleUncheckedUpdateWithoutIconBundlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: TagUncheckedUpdateManyWithoutBundleTagsNestedInput
  }

  export type IconCreateWithoutCategoryInput = {
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleCreateNestedManyWithoutIconInput
    tags?: TagCreateNestedManyWithoutIconTagsInput
  }

  export type IconUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleUncheckedCreateNestedManyWithoutIconInput
    tags?: TagUncheckedCreateNestedManyWithoutIconTagsInput
  }

  export type IconCreateOrConnectWithoutCategoryInput = {
    where: IconWhereUniqueInput
    create: XOR<IconCreateWithoutCategoryInput, IconUncheckedCreateWithoutCategoryInput>
  }

  export type IconCreateManyCategoryInputEnvelope = {
    data: IconCreateManyCategoryInput | IconCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BundleCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleCreateNestedManyWithoutBundleInput
    tags?: TagCreateNestedManyWithoutBundleTagsInput
  }

  export type BundleUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleUncheckedCreateNestedManyWithoutBundleInput
    tags?: TagUncheckedCreateNestedManyWithoutBundleTagsInput
  }

  export type BundleCreateOrConnectWithoutCategoryInput = {
    where: BundleWhereUniqueInput
    create: XOR<BundleCreateWithoutCategoryInput, BundleUncheckedCreateWithoutCategoryInput>
  }

  export type BundleCreateManyCategoryInputEnvelope = {
    data: BundleCreateManyCategoryInput | BundleCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type IconUpsertWithWhereUniqueWithoutCategoryInput = {
    where: IconWhereUniqueInput
    update: XOR<IconUpdateWithoutCategoryInput, IconUncheckedUpdateWithoutCategoryInput>
    create: XOR<IconCreateWithoutCategoryInput, IconUncheckedCreateWithoutCategoryInput>
  }

  export type IconUpdateWithWhereUniqueWithoutCategoryInput = {
    where: IconWhereUniqueInput
    data: XOR<IconUpdateWithoutCategoryInput, IconUncheckedUpdateWithoutCategoryInput>
  }

  export type IconUpdateManyWithWhereWithoutCategoryInput = {
    where: IconScalarWhereInput
    data: XOR<IconUpdateManyMutationInput, IconUncheckedUpdateManyWithoutCategoryInput>
  }

  export type IconScalarWhereInput = {
    AND?: IconScalarWhereInput | IconScalarWhereInput[]
    OR?: IconScalarWhereInput[]
    NOT?: IconScalarWhereInput | IconScalarWhereInput[]
    id?: IntFilter<"Icon"> | number
    title?: StringFilter<"Icon"> | string
    path?: StringFilter<"Icon"> | string
    type?: EnumIconTypeFilter<"Icon"> | $Enums.IconType
    status?: EnumIconStatusFilter<"Icon"> | $Enums.IconStatus
    approved?: BoolFilter<"Icon"> | boolean
    need_to_improve?: BoolFilter<"Icon"> | boolean
    style?: EnumIconStyleFilter<"Icon"> | $Enums.IconStyle
    category_id?: IntNullableFilter<"Icon"> | number | null
    created_by?: IntNullableFilter<"Icon"> | number | null
    created_at?: DateTimeFilter<"Icon"> | Date | string
    updated_at?: DateTimeFilter<"Icon"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Icon"> | Date | string | null
  }

  export type BundleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BundleWhereUniqueInput
    update: XOR<BundleUpdateWithoutCategoryInput, BundleUncheckedUpdateWithoutCategoryInput>
    create: XOR<BundleCreateWithoutCategoryInput, BundleUncheckedCreateWithoutCategoryInput>
  }

  export type BundleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BundleWhereUniqueInput
    data: XOR<BundleUpdateWithoutCategoryInput, BundleUncheckedUpdateWithoutCategoryInput>
  }

  export type BundleUpdateManyWithWhereWithoutCategoryInput = {
    where: BundleScalarWhereInput
    data: XOR<BundleUpdateManyMutationInput, BundleUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BundleScalarWhereInput = {
    AND?: BundleScalarWhereInput | BundleScalarWhereInput[]
    OR?: BundleScalarWhereInput[]
    NOT?: BundleScalarWhereInput | BundleScalarWhereInput[]
    id?: IntFilter<"Bundle"> | number
    title?: StringFilter<"Bundle"> | string
    category_id?: IntNullableFilter<"Bundle"> | number | null
    description?: StringNullableFilter<"Bundle"> | string | null
    is_paid?: BoolFilter<"Bundle"> | boolean
    price?: FloatFilter<"Bundle"> | number
    status?: EnumBundleStatusFilter<"Bundle"> | $Enums.BundleStatus
    created_by?: IntNullableFilter<"Bundle"> | number | null
    created_at?: DateTimeFilter<"Bundle"> | Date | string
    updated_at?: DateTimeFilter<"Bundle"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Bundle"> | Date | string | null
  }

  export type IconCreateWithoutTagsInput = {
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    category?: CategoryCreateNestedOneWithoutIconsInput
    iconBundles?: IconBundleCreateNestedManyWithoutIconInput
  }

  export type IconUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    category_id?: number | null
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleUncheckedCreateNestedManyWithoutIconInput
  }

  export type IconCreateOrConnectWithoutTagsInput = {
    where: IconWhereUniqueInput
    create: XOR<IconCreateWithoutTagsInput, IconUncheckedCreateWithoutTagsInput>
  }

  export type BundleCreateWithoutTagsInput = {
    title: string
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    category?: CategoryCreateNestedOneWithoutBundlesInput
    iconBundles?: IconBundleCreateNestedManyWithoutBundleInput
  }

  export type BundleUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    category_id?: number | null
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    iconBundles?: IconBundleUncheckedCreateNestedManyWithoutBundleInput
  }

  export type BundleCreateOrConnectWithoutTagsInput = {
    where: BundleWhereUniqueInput
    create: XOR<BundleCreateWithoutTagsInput, BundleUncheckedCreateWithoutTagsInput>
  }

  export type IconUpsertWithWhereUniqueWithoutTagsInput = {
    where: IconWhereUniqueInput
    update: XOR<IconUpdateWithoutTagsInput, IconUncheckedUpdateWithoutTagsInput>
    create: XOR<IconCreateWithoutTagsInput, IconUncheckedCreateWithoutTagsInput>
  }

  export type IconUpdateWithWhereUniqueWithoutTagsInput = {
    where: IconWhereUniqueInput
    data: XOR<IconUpdateWithoutTagsInput, IconUncheckedUpdateWithoutTagsInput>
  }

  export type IconUpdateManyWithWhereWithoutTagsInput = {
    where: IconScalarWhereInput
    data: XOR<IconUpdateManyMutationInput, IconUncheckedUpdateManyWithoutTagsInput>
  }

  export type BundleUpsertWithWhereUniqueWithoutTagsInput = {
    where: BundleWhereUniqueInput
    update: XOR<BundleUpdateWithoutTagsInput, BundleUncheckedUpdateWithoutTagsInput>
    create: XOR<BundleCreateWithoutTagsInput, BundleUncheckedCreateWithoutTagsInput>
  }

  export type BundleUpdateWithWhereUniqueWithoutTagsInput = {
    where: BundleWhereUniqueInput
    data: XOR<BundleUpdateWithoutTagsInput, BundleUncheckedUpdateWithoutTagsInput>
  }

  export type BundleUpdateManyWithWhereWithoutTagsInput = {
    where: BundleScalarWhereInput
    data: XOR<BundleUpdateManyMutationInput, BundleUncheckedUpdateManyWithoutTagsInput>
  }

  export type IconBundleCreateManyIconInput = {
    bundle_id: number
  }

  export type IconBundleUpdateWithoutIconInput = {
    bundle?: BundleUpdateOneRequiredWithoutIconBundlesNestedInput
  }

  export type IconBundleUncheckedUpdateWithoutIconInput = {
    bundle_id?: IntFieldUpdateOperationsInput | number
  }

  export type IconBundleUncheckedUpdateManyWithoutIconInput = {
    bundle_id?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutIconTagsInput = {
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
    bundleTags?: BundleUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutIconTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
    bundleTags?: BundleUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutIconTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IconBundleCreateManyBundleInput = {
    icon_id: number
  }

  export type IconBundleUpdateWithoutBundleInput = {
    icon?: IconUpdateOneRequiredWithoutIconBundlesNestedInput
  }

  export type IconBundleUncheckedUpdateWithoutBundleInput = {
    icon_id?: IntFieldUpdateOperationsInput | number
  }

  export type IconBundleUncheckedUpdateManyWithoutBundleInput = {
    icon_id?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutBundleTagsInput = {
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
    iconTags?: IconUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutBundleTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
    iconTags?: IconUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutBundleTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    taggable_id?: IntFieldUpdateOperationsInput | number
    taggable_type?: EnumTaggableTypeFieldUpdateOperationsInput | $Enums.TaggableType
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IconCreateManyCategoryInput = {
    id?: number
    title: string
    path: string
    type?: $Enums.IconType
    status?: $Enums.IconStatus
    approved?: boolean
    need_to_improve?: boolean
    style?: $Enums.IconStyle
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type BundleCreateManyCategoryInput = {
    id?: number
    title: string
    description?: string | null
    is_paid?: boolean
    price?: number
    status?: $Enums.BundleStatus
    created_by?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type IconUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUpdateManyWithoutIconNestedInput
    tags?: TagUpdateManyWithoutIconTagsNestedInput
  }

  export type IconUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUncheckedUpdateManyWithoutIconNestedInput
    tags?: TagUncheckedUpdateManyWithoutIconTagsNestedInput
  }

  export type IconUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BundleUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUpdateManyWithoutBundleNestedInput
    tags?: TagUpdateManyWithoutBundleTagsNestedInput
  }

  export type BundleUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUncheckedUpdateManyWithoutBundleNestedInput
    tags?: TagUncheckedUpdateManyWithoutBundleTagsNestedInput
  }

  export type BundleUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IconUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutIconsNestedInput
    iconBundles?: IconBundleUpdateManyWithoutIconNestedInput
  }

  export type IconUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUncheckedUpdateManyWithoutIconNestedInput
  }

  export type IconUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: EnumIconTypeFieldUpdateOperationsInput | $Enums.IconType
    status?: EnumIconStatusFieldUpdateOperationsInput | $Enums.IconStatus
    approved?: BoolFieldUpdateOperationsInput | boolean
    need_to_improve?: BoolFieldUpdateOperationsInput | boolean
    style?: EnumIconStyleFieldUpdateOperationsInput | $Enums.IconStyle
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BundleUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutBundlesNestedInput
    iconBundles?: IconBundleUpdateManyWithoutBundleNestedInput
  }

  export type BundleUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iconBundles?: IconBundleUncheckedUpdateManyWithoutBundleNestedInput
  }

  export type BundleUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_paid?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumBundleStatusFieldUpdateOperationsInput | $Enums.BundleStatus
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use IconCountOutputTypeDefaultArgs instead
     */
    export type IconCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IconCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BundleCountOutputTypeDefaultArgs instead
     */
    export type BundleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BundleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IconDefaultArgs instead
     */
    export type IconArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IconDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BundleDefaultArgs instead
     */
    export type BundleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BundleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IconBundleDefaultArgs instead
     */
    export type IconBundleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IconBundleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}