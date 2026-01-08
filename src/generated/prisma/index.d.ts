
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
 * Model Regulation
 * 
 */
export type Regulation = $Result.DefaultSelection<Prisma.$RegulationPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EDocumentType: {
  PERATURAN: 'PERATURAN',
  MONOGRAFI: 'MONOGRAFI',
  ARTIKEL: 'ARTIKEL',
  PUTUSAN: 'PUTUSAN'
};

export type EDocumentType = (typeof EDocumentType)[keyof typeof EDocumentType]


export const ENewsCategory: {
  SOSIALISASI: 'SOSIALISASI',
  PENGUMUMAN: 'PENGUMUMAN',
  WORKSHOP: 'WORKSHOP',
  EVALUASI: 'EVALUASI',
  LAINNYA: 'LAINNYA'
};

export type ENewsCategory = (typeof ENewsCategory)[keyof typeof ENewsCategory]

}

export type EDocumentType = $Enums.EDocumentType

export const EDocumentType: typeof $Enums.EDocumentType

export type ENewsCategory = $Enums.ENewsCategory

export const ENewsCategory: typeof $Enums.ENewsCategory

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regulation`: Exposes CRUD operations for the **Regulation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regulations
    * const regulations = await prisma.regulation.findMany()
    * ```
    */
  get regulation(): Prisma.RegulationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Regulation: 'Regulation',
    News: 'News'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "regulation" | "news"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Regulation: {
        payload: Prisma.$RegulationPayload<ExtArgs>
        fields: Prisma.RegulationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegulationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegulationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          findFirst: {
            args: Prisma.RegulationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegulationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          findMany: {
            args: Prisma.RegulationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>[]
          }
          create: {
            args: Prisma.RegulationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          createMany: {
            args: Prisma.RegulationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegulationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          update: {
            args: Prisma.RegulationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          deleteMany: {
            args: Prisma.RegulationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegulationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegulationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegulationPayload>
          }
          aggregate: {
            args: Prisma.RegulationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegulation>
          }
          groupBy: {
            args: Prisma.RegulationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegulationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegulationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegulationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RegulationCountArgs<ExtArgs>
            result: $Utils.Optional<RegulationCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NewsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NewsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    regulation?: RegulationOmit
    news?: NewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    news: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | UserCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    picture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    password: number
    picture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    picture?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string
    password: string
    picture: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    news?: boolean | User$newsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "password" | "picture" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | User$newsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      password: string
      picture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Regulation
   */

  export type AggregateRegulation = {
    _count: RegulationCountAggregateOutputType | null
    _avg: RegulationAvgAggregateOutputType | null
    _sum: RegulationSumAggregateOutputType | null
    _min: RegulationMinAggregateOutputType | null
    _max: RegulationMaxAggregateOutputType | null
  }

  export type RegulationAvgAggregateOutputType = {
    yearPublished: number | null
    accessCount: number | null
  }

  export type RegulationSumAggregateOutputType = {
    yearPublished: number | null
    accessCount: number | null
  }

  export type RegulationMinAggregateOutputType = {
    id: string | null
    documentType: $Enums.EDocumentType | null
    legalType: string | null
    title: string | null
    abbreviation: string | null
    yearPublished: number | null
    language: string | null
    location: string | null
    lawField: string | null
    accessCount: number | null
    regulationNumber: string | null
    placeIssued: string | null
    dateIssued: Date | null
    promulgationDate: Date | null
    status: string | null
    description: string | null
    governmentAffair: string | null
    signer: string | null
    callNumber: string | null
    editionPrint: string | null
    physicalDescription: string | null
    isbnIssn: string | null
    publisher: string | null
    publishingPlace: string | null
    source: string | null
    readingDate: Date | null
    decisionNumber: string | null
    courtPlace: string | null
    caseType: string | null
    decisionDate: Date | null
    abstractFileName: string | null
    abstractFileUrl: string | null
    regulationFileName: string | null
    regulationFileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegulationMaxAggregateOutputType = {
    id: string | null
    documentType: $Enums.EDocumentType | null
    legalType: string | null
    title: string | null
    abbreviation: string | null
    yearPublished: number | null
    language: string | null
    location: string | null
    lawField: string | null
    accessCount: number | null
    regulationNumber: string | null
    placeIssued: string | null
    dateIssued: Date | null
    promulgationDate: Date | null
    status: string | null
    description: string | null
    governmentAffair: string | null
    signer: string | null
    callNumber: string | null
    editionPrint: string | null
    physicalDescription: string | null
    isbnIssn: string | null
    publisher: string | null
    publishingPlace: string | null
    source: string | null
    readingDate: Date | null
    decisionNumber: string | null
    courtPlace: string | null
    caseType: string | null
    decisionDate: Date | null
    abstractFileName: string | null
    abstractFileUrl: string | null
    regulationFileName: string | null
    regulationFileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegulationCountAggregateOutputType = {
    id: number
    documentType: number
    legalType: number
    title: number
    abbreviation: number
    yearPublished: number
    language: number
    location: number
    lawField: number
    accessCount: number
    regulationNumber: number
    placeIssued: number
    dateIssued: number
    promulgationDate: number
    status: number
    description: number
    governmentAffair: number
    signer: number
    callNumber: number
    editionPrint: number
    physicalDescription: number
    isbnIssn: number
    publisher: number
    publishingPlace: number
    source: number
    readingDate: number
    decisionNumber: number
    courtPlace: number
    caseType: number
    decisionDate: number
    abstractFileName: number
    abstractFileUrl: number
    regulationFileName: number
    regulationFileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegulationAvgAggregateInputType = {
    yearPublished?: true
    accessCount?: true
  }

  export type RegulationSumAggregateInputType = {
    yearPublished?: true
    accessCount?: true
  }

  export type RegulationMinAggregateInputType = {
    id?: true
    documentType?: true
    legalType?: true
    title?: true
    abbreviation?: true
    yearPublished?: true
    language?: true
    location?: true
    lawField?: true
    accessCount?: true
    regulationNumber?: true
    placeIssued?: true
    dateIssued?: true
    promulgationDate?: true
    status?: true
    description?: true
    governmentAffair?: true
    signer?: true
    callNumber?: true
    editionPrint?: true
    physicalDescription?: true
    isbnIssn?: true
    publisher?: true
    publishingPlace?: true
    source?: true
    readingDate?: true
    decisionNumber?: true
    courtPlace?: true
    caseType?: true
    decisionDate?: true
    abstractFileName?: true
    abstractFileUrl?: true
    regulationFileName?: true
    regulationFileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegulationMaxAggregateInputType = {
    id?: true
    documentType?: true
    legalType?: true
    title?: true
    abbreviation?: true
    yearPublished?: true
    language?: true
    location?: true
    lawField?: true
    accessCount?: true
    regulationNumber?: true
    placeIssued?: true
    dateIssued?: true
    promulgationDate?: true
    status?: true
    description?: true
    governmentAffair?: true
    signer?: true
    callNumber?: true
    editionPrint?: true
    physicalDescription?: true
    isbnIssn?: true
    publisher?: true
    publishingPlace?: true
    source?: true
    readingDate?: true
    decisionNumber?: true
    courtPlace?: true
    caseType?: true
    decisionDate?: true
    abstractFileName?: true
    abstractFileUrl?: true
    regulationFileName?: true
    regulationFileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegulationCountAggregateInputType = {
    id?: true
    documentType?: true
    legalType?: true
    title?: true
    abbreviation?: true
    yearPublished?: true
    language?: true
    location?: true
    lawField?: true
    accessCount?: true
    regulationNumber?: true
    placeIssued?: true
    dateIssued?: true
    promulgationDate?: true
    status?: true
    description?: true
    governmentAffair?: true
    signer?: true
    callNumber?: true
    editionPrint?: true
    physicalDescription?: true
    isbnIssn?: true
    publisher?: true
    publishingPlace?: true
    source?: true
    readingDate?: true
    decisionNumber?: true
    courtPlace?: true
    caseType?: true
    decisionDate?: true
    abstractFileName?: true
    abstractFileUrl?: true
    regulationFileName?: true
    regulationFileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegulationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regulation to aggregate.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regulations
    **/
    _count?: true | RegulationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegulationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegulationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegulationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegulationMaxAggregateInputType
  }

  export type GetRegulationAggregateType<T extends RegulationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegulation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegulation[P]>
      : GetScalarType<T[P], AggregateRegulation[P]>
  }




  export type RegulationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegulationWhereInput
    orderBy?: RegulationOrderByWithAggregationInput | RegulationOrderByWithAggregationInput[]
    by: RegulationScalarFieldEnum[] | RegulationScalarFieldEnum
    having?: RegulationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegulationCountAggregateInputType | true
    _avg?: RegulationAvgAggregateInputType
    _sum?: RegulationSumAggregateInputType
    _min?: RegulationMinAggregateInputType
    _max?: RegulationMaxAggregateInputType
  }

  export type RegulationGroupByOutputType = {
    id: string
    documentType: $Enums.EDocumentType | null
    legalType: string | null
    title: string | null
    abbreviation: string | null
    yearPublished: number | null
    language: string | null
    location: string | null
    lawField: string | null
    accessCount: number | null
    regulationNumber: string | null
    placeIssued: string | null
    dateIssued: Date | null
    promulgationDate: Date | null
    status: string | null
    description: string | null
    governmentAffair: string | null
    signer: string | null
    callNumber: string | null
    editionPrint: string | null
    physicalDescription: string | null
    isbnIssn: string | null
    publisher: string | null
    publishingPlace: string | null
    source: string | null
    readingDate: Date | null
    decisionNumber: string | null
    courtPlace: string | null
    caseType: string | null
    decisionDate: Date | null
    abstractFileName: string | null
    abstractFileUrl: string | null
    regulationFileName: string | null
    regulationFileUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: RegulationCountAggregateOutputType | null
    _avg: RegulationAvgAggregateOutputType | null
    _sum: RegulationSumAggregateOutputType | null
    _min: RegulationMinAggregateOutputType | null
    _max: RegulationMaxAggregateOutputType | null
  }

  type GetRegulationGroupByPayload<T extends RegulationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegulationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegulationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegulationGroupByOutputType[P]>
            : GetScalarType<T[P], RegulationGroupByOutputType[P]>
        }
      >
    >


  export type RegulationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    legalType?: boolean
    title?: boolean
    abbreviation?: boolean
    yearPublished?: boolean
    language?: boolean
    location?: boolean
    lawField?: boolean
    accessCount?: boolean
    regulationNumber?: boolean
    placeIssued?: boolean
    dateIssued?: boolean
    promulgationDate?: boolean
    status?: boolean
    description?: boolean
    governmentAffair?: boolean
    signer?: boolean
    callNumber?: boolean
    editionPrint?: boolean
    physicalDescription?: boolean
    isbnIssn?: boolean
    publisher?: boolean
    publishingPlace?: boolean
    source?: boolean
    readingDate?: boolean
    decisionNumber?: boolean
    courtPlace?: boolean
    caseType?: boolean
    decisionDate?: boolean
    abstractFileName?: boolean
    abstractFileUrl?: boolean
    regulationFileName?: boolean
    regulationFileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regulation"]>



  export type RegulationSelectScalar = {
    id?: boolean
    documentType?: boolean
    legalType?: boolean
    title?: boolean
    abbreviation?: boolean
    yearPublished?: boolean
    language?: boolean
    location?: boolean
    lawField?: boolean
    accessCount?: boolean
    regulationNumber?: boolean
    placeIssued?: boolean
    dateIssued?: boolean
    promulgationDate?: boolean
    status?: boolean
    description?: boolean
    governmentAffair?: boolean
    signer?: boolean
    callNumber?: boolean
    editionPrint?: boolean
    physicalDescription?: boolean
    isbnIssn?: boolean
    publisher?: boolean
    publishingPlace?: boolean
    source?: boolean
    readingDate?: boolean
    decisionNumber?: boolean
    courtPlace?: boolean
    caseType?: boolean
    decisionDate?: boolean
    abstractFileName?: boolean
    abstractFileUrl?: boolean
    regulationFileName?: boolean
    regulationFileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegulationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentType" | "legalType" | "title" | "abbreviation" | "yearPublished" | "language" | "location" | "lawField" | "accessCount" | "regulationNumber" | "placeIssued" | "dateIssued" | "promulgationDate" | "status" | "description" | "governmentAffair" | "signer" | "callNumber" | "editionPrint" | "physicalDescription" | "isbnIssn" | "publisher" | "publishingPlace" | "source" | "readingDate" | "decisionNumber" | "courtPlace" | "caseType" | "decisionDate" | "abstractFileName" | "abstractFileUrl" | "regulationFileName" | "regulationFileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["regulation"]>

  export type $RegulationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regulation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentType: $Enums.EDocumentType | null
      legalType: string | null
      title: string | null
      abbreviation: string | null
      yearPublished: number | null
      language: string | null
      location: string | null
      lawField: string | null
      accessCount: number | null
      regulationNumber: string | null
      placeIssued: string | null
      dateIssued: Date | null
      promulgationDate: Date | null
      status: string | null
      description: string | null
      governmentAffair: string | null
      signer: string | null
      callNumber: string | null
      editionPrint: string | null
      physicalDescription: string | null
      isbnIssn: string | null
      publisher: string | null
      publishingPlace: string | null
      source: string | null
      readingDate: Date | null
      decisionNumber: string | null
      courtPlace: string | null
      caseType: string | null
      decisionDate: Date | null
      abstractFileName: string | null
      abstractFileUrl: string | null
      regulationFileName: string | null
      regulationFileUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["regulation"]>
    composites: {}
  }

  type RegulationGetPayload<S extends boolean | null | undefined | RegulationDefaultArgs> = $Result.GetResult<Prisma.$RegulationPayload, S>

  type RegulationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegulationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegulationCountAggregateInputType | true
    }

  export interface RegulationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regulation'], meta: { name: 'Regulation' } }
    /**
     * Find zero or one Regulation that matches the filter.
     * @param {RegulationFindUniqueArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegulationFindUniqueArgs>(args: SelectSubset<T, RegulationFindUniqueArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regulation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegulationFindUniqueOrThrowArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegulationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegulationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regulation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationFindFirstArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegulationFindFirstArgs>(args?: SelectSubset<T, RegulationFindFirstArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regulation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationFindFirstOrThrowArgs} args - Arguments to find a Regulation
     * @example
     * // Get one Regulation
     * const regulation = await prisma.regulation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegulationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegulationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regulations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regulations
     * const regulations = await prisma.regulation.findMany()
     * 
     * // Get first 10 Regulations
     * const regulations = await prisma.regulation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regulationWithIdOnly = await prisma.regulation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegulationFindManyArgs>(args?: SelectSubset<T, RegulationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regulation.
     * @param {RegulationCreateArgs} args - Arguments to create a Regulation.
     * @example
     * // Create one Regulation
     * const Regulation = await prisma.regulation.create({
     *   data: {
     *     // ... data to create a Regulation
     *   }
     * })
     * 
     */
    create<T extends RegulationCreateArgs>(args: SelectSubset<T, RegulationCreateArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regulations.
     * @param {RegulationCreateManyArgs} args - Arguments to create many Regulations.
     * @example
     * // Create many Regulations
     * const regulation = await prisma.regulation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegulationCreateManyArgs>(args?: SelectSubset<T, RegulationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Regulation.
     * @param {RegulationDeleteArgs} args - Arguments to delete one Regulation.
     * @example
     * // Delete one Regulation
     * const Regulation = await prisma.regulation.delete({
     *   where: {
     *     // ... filter to delete one Regulation
     *   }
     * })
     * 
     */
    delete<T extends RegulationDeleteArgs>(args: SelectSubset<T, RegulationDeleteArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regulation.
     * @param {RegulationUpdateArgs} args - Arguments to update one Regulation.
     * @example
     * // Update one Regulation
     * const regulation = await prisma.regulation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegulationUpdateArgs>(args: SelectSubset<T, RegulationUpdateArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regulations.
     * @param {RegulationDeleteManyArgs} args - Arguments to filter Regulations to delete.
     * @example
     * // Delete a few Regulations
     * const { count } = await prisma.regulation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegulationDeleteManyArgs>(args?: SelectSubset<T, RegulationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regulations
     * const regulation = await prisma.regulation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegulationUpdateManyArgs>(args: SelectSubset<T, RegulationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regulation.
     * @param {RegulationUpsertArgs} args - Arguments to update or create a Regulation.
     * @example
     * // Update or create a Regulation
     * const regulation = await prisma.regulation.upsert({
     *   create: {
     *     // ... data to create a Regulation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regulation we want to update
     *   }
     * })
     */
    upsert<T extends RegulationUpsertArgs>(args: SelectSubset<T, RegulationUpsertArgs<ExtArgs>>): Prisma__RegulationClient<$Result.GetResult<Prisma.$RegulationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regulations that matches the filter.
     * @param {RegulationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const regulation = await prisma.regulation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RegulationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Regulation.
     * @param {RegulationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const regulation = await prisma.regulation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RegulationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Regulations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationCountArgs} args - Arguments to filter Regulations to count.
     * @example
     * // Count the number of Regulations
     * const count = await prisma.regulation.count({
     *   where: {
     *     // ... the filter for the Regulations we want to count
     *   }
     * })
    **/
    count<T extends RegulationCountArgs>(
      args?: Subset<T, RegulationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegulationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegulationAggregateArgs>(args: Subset<T, RegulationAggregateArgs>): Prisma.PrismaPromise<GetRegulationAggregateType<T>>

    /**
     * Group by Regulation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegulationGroupByArgs} args - Group by arguments.
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
      T extends RegulationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegulationGroupByArgs['orderBy'] }
        : { orderBy?: RegulationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegulationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regulation model
   */
  readonly fields: RegulationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regulation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegulationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Regulation model
   */
  interface RegulationFieldRefs {
    readonly id: FieldRef<"Regulation", 'String'>
    readonly documentType: FieldRef<"Regulation", 'EDocumentType'>
    readonly legalType: FieldRef<"Regulation", 'String'>
    readonly title: FieldRef<"Regulation", 'String'>
    readonly abbreviation: FieldRef<"Regulation", 'String'>
    readonly yearPublished: FieldRef<"Regulation", 'Int'>
    readonly language: FieldRef<"Regulation", 'String'>
    readonly location: FieldRef<"Regulation", 'String'>
    readonly lawField: FieldRef<"Regulation", 'String'>
    readonly accessCount: FieldRef<"Regulation", 'Int'>
    readonly regulationNumber: FieldRef<"Regulation", 'String'>
    readonly placeIssued: FieldRef<"Regulation", 'String'>
    readonly dateIssued: FieldRef<"Regulation", 'DateTime'>
    readonly promulgationDate: FieldRef<"Regulation", 'DateTime'>
    readonly status: FieldRef<"Regulation", 'String'>
    readonly description: FieldRef<"Regulation", 'String'>
    readonly governmentAffair: FieldRef<"Regulation", 'String'>
    readonly signer: FieldRef<"Regulation", 'String'>
    readonly callNumber: FieldRef<"Regulation", 'String'>
    readonly editionPrint: FieldRef<"Regulation", 'String'>
    readonly physicalDescription: FieldRef<"Regulation", 'String'>
    readonly isbnIssn: FieldRef<"Regulation", 'String'>
    readonly publisher: FieldRef<"Regulation", 'String'>
    readonly publishingPlace: FieldRef<"Regulation", 'String'>
    readonly source: FieldRef<"Regulation", 'String'>
    readonly readingDate: FieldRef<"Regulation", 'DateTime'>
    readonly decisionNumber: FieldRef<"Regulation", 'String'>
    readonly courtPlace: FieldRef<"Regulation", 'String'>
    readonly caseType: FieldRef<"Regulation", 'String'>
    readonly decisionDate: FieldRef<"Regulation", 'DateTime'>
    readonly abstractFileName: FieldRef<"Regulation", 'String'>
    readonly abstractFileUrl: FieldRef<"Regulation", 'String'>
    readonly regulationFileName: FieldRef<"Regulation", 'String'>
    readonly regulationFileUrl: FieldRef<"Regulation", 'String'>
    readonly createdAt: FieldRef<"Regulation", 'DateTime'>
    readonly updatedAt: FieldRef<"Regulation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Regulation findUnique
   */
  export type RegulationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation findUniqueOrThrow
   */
  export type RegulationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation findFirst
   */
  export type RegulationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regulations.
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regulations.
     */
    distinct?: RegulationScalarFieldEnum | RegulationScalarFieldEnum[]
  }

  /**
   * Regulation findFirstOrThrow
   */
  export type RegulationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulation to fetch.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regulations.
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regulations.
     */
    distinct?: RegulationScalarFieldEnum | RegulationScalarFieldEnum[]
  }

  /**
   * Regulation findMany
   */
  export type RegulationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter, which Regulations to fetch.
     */
    where?: RegulationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regulations to fetch.
     */
    orderBy?: RegulationOrderByWithRelationInput | RegulationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regulations.
     */
    cursor?: RegulationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regulations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regulations.
     */
    skip?: number
    distinct?: RegulationScalarFieldEnum | RegulationScalarFieldEnum[]
  }

  /**
   * Regulation create
   */
  export type RegulationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The data needed to create a Regulation.
     */
    data: XOR<RegulationCreateInput, RegulationUncheckedCreateInput>
  }

  /**
   * Regulation createMany
   */
  export type RegulationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regulations.
     */
    data: RegulationCreateManyInput | RegulationCreateManyInput[]
  }

  /**
   * Regulation update
   */
  export type RegulationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The data needed to update a Regulation.
     */
    data: XOR<RegulationUpdateInput, RegulationUncheckedUpdateInput>
    /**
     * Choose, which Regulation to update.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation updateMany
   */
  export type RegulationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regulations.
     */
    data: XOR<RegulationUpdateManyMutationInput, RegulationUncheckedUpdateManyInput>
    /**
     * Filter which Regulations to update
     */
    where?: RegulationWhereInput
    /**
     * Limit how many Regulations to update.
     */
    limit?: number
  }

  /**
   * Regulation upsert
   */
  export type RegulationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * The filter to search for the Regulation to update in case it exists.
     */
    where: RegulationWhereUniqueInput
    /**
     * In case the Regulation found by the `where` argument doesn't exist, create a new Regulation with this data.
     */
    create: XOR<RegulationCreateInput, RegulationUncheckedCreateInput>
    /**
     * In case the Regulation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegulationUpdateInput, RegulationUncheckedUpdateInput>
  }

  /**
   * Regulation delete
   */
  export type RegulationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
    /**
     * Filter which Regulation to delete.
     */
    where: RegulationWhereUniqueInput
  }

  /**
   * Regulation deleteMany
   */
  export type RegulationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regulations to delete
     */
    where?: RegulationWhereInput
    /**
     * Limit how many Regulations to delete.
     */
    limit?: number
  }

  /**
   * Regulation findRaw
   */
  export type RegulationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Regulation aggregateRaw
   */
  export type RegulationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Regulation without action
   */
  export type RegulationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regulation
     */
    select?: RegulationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regulation
     */
    omit?: RegulationOmit<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    source: string | null
    category: $Enums.ENewsCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    source: string | null
    category: $Enums.ENewsCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    source: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    source?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    source?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    source?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    content: string
    authorId: string
    source: string | null
    category: $Enums.ENewsCategory | null
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    source?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>



  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    source?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "source" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      authorId: string
      source: string | null
      category: $Enums.ENewsCategory | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * @param {NewsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const news = await prisma.news.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NewsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a News.
     * @param {NewsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const news = await prisma.news.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NewsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly authorId: FieldRef<"News", 'String'>
    readonly source: FieldRef<"News", 'String'>
    readonly category: FieldRef<"News", 'ENewsCategory'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News findRaw
   */
  export type NewsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * News aggregateRaw
   */
  export type NewsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password',
    picture: 'picture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegulationScalarFieldEnum: {
    id: 'id',
    documentType: 'documentType',
    legalType: 'legalType',
    title: 'title',
    abbreviation: 'abbreviation',
    yearPublished: 'yearPublished',
    language: 'language',
    location: 'location',
    lawField: 'lawField',
    accessCount: 'accessCount',
    regulationNumber: 'regulationNumber',
    placeIssued: 'placeIssued',
    dateIssued: 'dateIssued',
    promulgationDate: 'promulgationDate',
    status: 'status',
    description: 'description',
    governmentAffair: 'governmentAffair',
    signer: 'signer',
    callNumber: 'callNumber',
    editionPrint: 'editionPrint',
    physicalDescription: 'physicalDescription',
    isbnIssn: 'isbnIssn',
    publisher: 'publisher',
    publishingPlace: 'publishingPlace',
    source: 'source',
    readingDate: 'readingDate',
    decisionNumber: 'decisionNumber',
    courtPlace: 'courtPlace',
    caseType: 'caseType',
    decisionDate: 'decisionDate',
    abstractFileName: 'abstractFileName',
    abstractFileUrl: 'abstractFileUrl',
    regulationFileName: 'regulationFileName',
    regulationFileUrl: 'regulationFileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegulationScalarFieldEnum = (typeof RegulationScalarFieldEnum)[keyof typeof RegulationScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    source: 'source',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EDocumentType'
   */
  export type EnumEDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EDocumentType'>
    


  /**
   * Reference to a field of type 'EDocumentType[]'
   */
  export type ListEnumEDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EDocumentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ENewsCategory'
   */
  export type EnumENewsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ENewsCategory'>
    


  /**
   * Reference to a field of type 'ENewsCategory[]'
   */
  export type ListEnumENewsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ENewsCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    news?: NewsListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RegulationWhereInput = {
    AND?: RegulationWhereInput | RegulationWhereInput[]
    OR?: RegulationWhereInput[]
    NOT?: RegulationWhereInput | RegulationWhereInput[]
    id?: StringFilter<"Regulation"> | string
    documentType?: EnumEDocumentTypeNullableFilter<"Regulation"> | $Enums.EDocumentType | null
    legalType?: StringNullableFilter<"Regulation"> | string | null
    title?: StringNullableFilter<"Regulation"> | string | null
    abbreviation?: StringNullableFilter<"Regulation"> | string | null
    yearPublished?: IntNullableFilter<"Regulation"> | number | null
    language?: StringNullableFilter<"Regulation"> | string | null
    location?: StringNullableFilter<"Regulation"> | string | null
    lawField?: StringNullableFilter<"Regulation"> | string | null
    accessCount?: IntNullableFilter<"Regulation"> | number | null
    regulationNumber?: StringNullableFilter<"Regulation"> | string | null
    placeIssued?: StringNullableFilter<"Regulation"> | string | null
    dateIssued?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    promulgationDate?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    status?: StringNullableFilter<"Regulation"> | string | null
    description?: StringNullableFilter<"Regulation"> | string | null
    governmentAffair?: StringNullableFilter<"Regulation"> | string | null
    signer?: StringNullableFilter<"Regulation"> | string | null
    callNumber?: StringNullableFilter<"Regulation"> | string | null
    editionPrint?: StringNullableFilter<"Regulation"> | string | null
    physicalDescription?: StringNullableFilter<"Regulation"> | string | null
    isbnIssn?: StringNullableFilter<"Regulation"> | string | null
    publisher?: StringNullableFilter<"Regulation"> | string | null
    publishingPlace?: StringNullableFilter<"Regulation"> | string | null
    source?: StringNullableFilter<"Regulation"> | string | null
    readingDate?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    decisionNumber?: StringNullableFilter<"Regulation"> | string | null
    courtPlace?: StringNullableFilter<"Regulation"> | string | null
    caseType?: StringNullableFilter<"Regulation"> | string | null
    decisionDate?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    abstractFileName?: StringNullableFilter<"Regulation"> | string | null
    abstractFileUrl?: StringNullableFilter<"Regulation"> | string | null
    regulationFileName?: StringNullableFilter<"Regulation"> | string | null
    regulationFileUrl?: StringNullableFilter<"Regulation"> | string | null
    createdAt?: DateTimeFilter<"Regulation"> | Date | string
    updatedAt?: DateTimeFilter<"Regulation"> | Date | string
  }

  export type RegulationOrderByWithRelationInput = {
    id?: SortOrder
    documentType?: SortOrder
    legalType?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    yearPublished?: SortOrder
    language?: SortOrder
    location?: SortOrder
    lawField?: SortOrder
    accessCount?: SortOrder
    regulationNumber?: SortOrder
    placeIssued?: SortOrder
    dateIssued?: SortOrder
    promulgationDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    governmentAffair?: SortOrder
    signer?: SortOrder
    callNumber?: SortOrder
    editionPrint?: SortOrder
    physicalDescription?: SortOrder
    isbnIssn?: SortOrder
    publisher?: SortOrder
    publishingPlace?: SortOrder
    source?: SortOrder
    readingDate?: SortOrder
    decisionNumber?: SortOrder
    courtPlace?: SortOrder
    caseType?: SortOrder
    decisionDate?: SortOrder
    abstractFileName?: SortOrder
    abstractFileUrl?: SortOrder
    regulationFileName?: SortOrder
    regulationFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegulationWhereInput | RegulationWhereInput[]
    OR?: RegulationWhereInput[]
    NOT?: RegulationWhereInput | RegulationWhereInput[]
    documentType?: EnumEDocumentTypeNullableFilter<"Regulation"> | $Enums.EDocumentType | null
    legalType?: StringNullableFilter<"Regulation"> | string | null
    title?: StringNullableFilter<"Regulation"> | string | null
    abbreviation?: StringNullableFilter<"Regulation"> | string | null
    yearPublished?: IntNullableFilter<"Regulation"> | number | null
    language?: StringNullableFilter<"Regulation"> | string | null
    location?: StringNullableFilter<"Regulation"> | string | null
    lawField?: StringNullableFilter<"Regulation"> | string | null
    accessCount?: IntNullableFilter<"Regulation"> | number | null
    regulationNumber?: StringNullableFilter<"Regulation"> | string | null
    placeIssued?: StringNullableFilter<"Regulation"> | string | null
    dateIssued?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    promulgationDate?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    status?: StringNullableFilter<"Regulation"> | string | null
    description?: StringNullableFilter<"Regulation"> | string | null
    governmentAffair?: StringNullableFilter<"Regulation"> | string | null
    signer?: StringNullableFilter<"Regulation"> | string | null
    callNumber?: StringNullableFilter<"Regulation"> | string | null
    editionPrint?: StringNullableFilter<"Regulation"> | string | null
    physicalDescription?: StringNullableFilter<"Regulation"> | string | null
    isbnIssn?: StringNullableFilter<"Regulation"> | string | null
    publisher?: StringNullableFilter<"Regulation"> | string | null
    publishingPlace?: StringNullableFilter<"Regulation"> | string | null
    source?: StringNullableFilter<"Regulation"> | string | null
    readingDate?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    decisionNumber?: StringNullableFilter<"Regulation"> | string | null
    courtPlace?: StringNullableFilter<"Regulation"> | string | null
    caseType?: StringNullableFilter<"Regulation"> | string | null
    decisionDate?: DateTimeNullableFilter<"Regulation"> | Date | string | null
    abstractFileName?: StringNullableFilter<"Regulation"> | string | null
    abstractFileUrl?: StringNullableFilter<"Regulation"> | string | null
    regulationFileName?: StringNullableFilter<"Regulation"> | string | null
    regulationFileUrl?: StringNullableFilter<"Regulation"> | string | null
    createdAt?: DateTimeFilter<"Regulation"> | Date | string
    updatedAt?: DateTimeFilter<"Regulation"> | Date | string
  }, "id">

  export type RegulationOrderByWithAggregationInput = {
    id?: SortOrder
    documentType?: SortOrder
    legalType?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    yearPublished?: SortOrder
    language?: SortOrder
    location?: SortOrder
    lawField?: SortOrder
    accessCount?: SortOrder
    regulationNumber?: SortOrder
    placeIssued?: SortOrder
    dateIssued?: SortOrder
    promulgationDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    governmentAffair?: SortOrder
    signer?: SortOrder
    callNumber?: SortOrder
    editionPrint?: SortOrder
    physicalDescription?: SortOrder
    isbnIssn?: SortOrder
    publisher?: SortOrder
    publishingPlace?: SortOrder
    source?: SortOrder
    readingDate?: SortOrder
    decisionNumber?: SortOrder
    courtPlace?: SortOrder
    caseType?: SortOrder
    decisionDate?: SortOrder
    abstractFileName?: SortOrder
    abstractFileUrl?: SortOrder
    regulationFileName?: SortOrder
    regulationFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegulationCountOrderByAggregateInput
    _avg?: RegulationAvgOrderByAggregateInput
    _max?: RegulationMaxOrderByAggregateInput
    _min?: RegulationMinOrderByAggregateInput
    _sum?: RegulationSumOrderByAggregateInput
  }

  export type RegulationScalarWhereWithAggregatesInput = {
    AND?: RegulationScalarWhereWithAggregatesInput | RegulationScalarWhereWithAggregatesInput[]
    OR?: RegulationScalarWhereWithAggregatesInput[]
    NOT?: RegulationScalarWhereWithAggregatesInput | RegulationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Regulation"> | string
    documentType?: EnumEDocumentTypeNullableWithAggregatesFilter<"Regulation"> | $Enums.EDocumentType | null
    legalType?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    title?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    abbreviation?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    yearPublished?: IntNullableWithAggregatesFilter<"Regulation"> | number | null
    language?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    location?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    lawField?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    accessCount?: IntNullableWithAggregatesFilter<"Regulation"> | number | null
    regulationNumber?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    placeIssued?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    dateIssued?: DateTimeNullableWithAggregatesFilter<"Regulation"> | Date | string | null
    promulgationDate?: DateTimeNullableWithAggregatesFilter<"Regulation"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    description?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    governmentAffair?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    signer?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    callNumber?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    editionPrint?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    physicalDescription?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    isbnIssn?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    publisher?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    publishingPlace?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    source?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    readingDate?: DateTimeNullableWithAggregatesFilter<"Regulation"> | Date | string | null
    decisionNumber?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    courtPlace?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    caseType?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    decisionDate?: DateTimeNullableWithAggregatesFilter<"Regulation"> | Date | string | null
    abstractFileName?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    abstractFileUrl?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    regulationFileName?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    regulationFileUrl?: StringNullableWithAggregatesFilter<"Regulation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Regulation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Regulation"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    source?: StringNullableFilter<"News"> | string | null
    category?: EnumENewsCategoryNullableFilter<"News"> | $Enums.ENewsCategory | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    source?: StringNullableFilter<"News"> | string | null
    category?: EnumENewsCategoryNullableFilter<"News"> | $Enums.ENewsCategory | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    authorId?: StringWithAggregatesFilter<"News"> | string
    source?: StringNullableWithAggregatesFilter<"News"> | string | null
    category?: EnumENewsCategoryNullableWithAggregatesFilter<"News"> | $Enums.ENewsCategory | null
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationCreateInput = {
    id?: string
    documentType?: $Enums.EDocumentType | null
    legalType?: string | null
    title?: string | null
    abbreviation?: string | null
    yearPublished?: number | null
    language?: string | null
    location?: string | null
    lawField?: string | null
    accessCount?: number | null
    regulationNumber?: string | null
    placeIssued?: string | null
    dateIssued?: Date | string | null
    promulgationDate?: Date | string | null
    status?: string | null
    description?: string | null
    governmentAffair?: string | null
    signer?: string | null
    callNumber?: string | null
    editionPrint?: string | null
    physicalDescription?: string | null
    isbnIssn?: string | null
    publisher?: string | null
    publishingPlace?: string | null
    source?: string | null
    readingDate?: Date | string | null
    decisionNumber?: string | null
    courtPlace?: string | null
    caseType?: string | null
    decisionDate?: Date | string | null
    abstractFileName?: string | null
    abstractFileUrl?: string | null
    regulationFileName?: string | null
    regulationFileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegulationUncheckedCreateInput = {
    id?: string
    documentType?: $Enums.EDocumentType | null
    legalType?: string | null
    title?: string | null
    abbreviation?: string | null
    yearPublished?: number | null
    language?: string | null
    location?: string | null
    lawField?: string | null
    accessCount?: number | null
    regulationNumber?: string | null
    placeIssued?: string | null
    dateIssued?: Date | string | null
    promulgationDate?: Date | string | null
    status?: string | null
    description?: string | null
    governmentAffair?: string | null
    signer?: string | null
    callNumber?: string | null
    editionPrint?: string | null
    physicalDescription?: string | null
    isbnIssn?: string | null
    publisher?: string | null
    publishingPlace?: string | null
    source?: string | null
    readingDate?: Date | string | null
    decisionNumber?: string | null
    courtPlace?: string | null
    caseType?: string | null
    decisionDate?: Date | string | null
    abstractFileName?: string | null
    abstractFileUrl?: string | null
    regulationFileName?: string | null
    regulationFileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegulationUpdateInput = {
    documentType?: NullableEnumEDocumentTypeFieldUpdateOperationsInput | $Enums.EDocumentType | null
    legalType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lawField?: NullableStringFieldUpdateOperationsInput | string | null
    accessCount?: NullableIntFieldUpdateOperationsInput | number | null
    regulationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    placeIssued?: NullableStringFieldUpdateOperationsInput | string | null
    dateIssued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promulgationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    governmentAffair?: NullableStringFieldUpdateOperationsInput | string | null
    signer?: NullableStringFieldUpdateOperationsInput | string | null
    callNumber?: NullableStringFieldUpdateOperationsInput | string | null
    editionPrint?: NullableStringFieldUpdateOperationsInput | string | null
    physicalDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isbnIssn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishingPlace?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    readingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    courtPlace?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstractFileName?: NullableStringFieldUpdateOperationsInput | string | null
    abstractFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileName?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationUncheckedUpdateInput = {
    documentType?: NullableEnumEDocumentTypeFieldUpdateOperationsInput | $Enums.EDocumentType | null
    legalType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lawField?: NullableStringFieldUpdateOperationsInput | string | null
    accessCount?: NullableIntFieldUpdateOperationsInput | number | null
    regulationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    placeIssued?: NullableStringFieldUpdateOperationsInput | string | null
    dateIssued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promulgationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    governmentAffair?: NullableStringFieldUpdateOperationsInput | string | null
    signer?: NullableStringFieldUpdateOperationsInput | string | null
    callNumber?: NullableStringFieldUpdateOperationsInput | string | null
    editionPrint?: NullableStringFieldUpdateOperationsInput | string | null
    physicalDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isbnIssn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishingPlace?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    readingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    courtPlace?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstractFileName?: NullableStringFieldUpdateOperationsInput | string | null
    abstractFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileName?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationCreateManyInput = {
    id?: string
    documentType?: $Enums.EDocumentType | null
    legalType?: string | null
    title?: string | null
    abbreviation?: string | null
    yearPublished?: number | null
    language?: string | null
    location?: string | null
    lawField?: string | null
    accessCount?: number | null
    regulationNumber?: string | null
    placeIssued?: string | null
    dateIssued?: Date | string | null
    promulgationDate?: Date | string | null
    status?: string | null
    description?: string | null
    governmentAffair?: string | null
    signer?: string | null
    callNumber?: string | null
    editionPrint?: string | null
    physicalDescription?: string | null
    isbnIssn?: string | null
    publisher?: string | null
    publishingPlace?: string | null
    source?: string | null
    readingDate?: Date | string | null
    decisionNumber?: string | null
    courtPlace?: string | null
    caseType?: string | null
    decisionDate?: Date | string | null
    abstractFileName?: string | null
    abstractFileUrl?: string | null
    regulationFileName?: string | null
    regulationFileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegulationUpdateManyMutationInput = {
    documentType?: NullableEnumEDocumentTypeFieldUpdateOperationsInput | $Enums.EDocumentType | null
    legalType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lawField?: NullableStringFieldUpdateOperationsInput | string | null
    accessCount?: NullableIntFieldUpdateOperationsInput | number | null
    regulationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    placeIssued?: NullableStringFieldUpdateOperationsInput | string | null
    dateIssued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promulgationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    governmentAffair?: NullableStringFieldUpdateOperationsInput | string | null
    signer?: NullableStringFieldUpdateOperationsInput | string | null
    callNumber?: NullableStringFieldUpdateOperationsInput | string | null
    editionPrint?: NullableStringFieldUpdateOperationsInput | string | null
    physicalDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isbnIssn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishingPlace?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    readingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    courtPlace?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstractFileName?: NullableStringFieldUpdateOperationsInput | string | null
    abstractFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileName?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegulationUncheckedUpdateManyInput = {
    documentType?: NullableEnumEDocumentTypeFieldUpdateOperationsInput | $Enums.EDocumentType | null
    legalType?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lawField?: NullableStringFieldUpdateOperationsInput | string | null
    accessCount?: NullableIntFieldUpdateOperationsInput | number | null
    regulationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    placeIssued?: NullableStringFieldUpdateOperationsInput | string | null
    dateIssued?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    promulgationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    governmentAffair?: NullableStringFieldUpdateOperationsInput | string | null
    signer?: NullableStringFieldUpdateOperationsInput | string | null
    callNumber?: NullableStringFieldUpdateOperationsInput | string | null
    editionPrint?: NullableStringFieldUpdateOperationsInput | string | null
    physicalDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isbnIssn?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    publishingPlace?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    readingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decisionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    courtPlace?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    decisionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    abstractFileName?: NullableStringFieldUpdateOperationsInput | string | null
    abstractFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileName?: NullableStringFieldUpdateOperationsInput | string | null
    regulationFileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    content: string
    source?: string | null
    category?: $Enums.ENewsCategory | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    source?: string | null
    category?: $Enums.ENewsCategory | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumENewsCategoryFieldUpdateOperationsInput | $Enums.ENewsCategory | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumENewsCategoryFieldUpdateOperationsInput | $Enums.ENewsCategory | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    content: string
    authorId: string
    source?: string | null
    category?: $Enums.ENewsCategory | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumENewsCategoryFieldUpdateOperationsInput | $Enums.ENewsCategory | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumENewsCategoryFieldUpdateOperationsInput | $Enums.ENewsCategory | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEDocumentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EDocumentType | EnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEDocumentTypeNullableFilter<$PrismaModel> | $Enums.EDocumentType | null
    isSet?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type RegulationCountOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    legalType?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    yearPublished?: SortOrder
    language?: SortOrder
    location?: SortOrder
    lawField?: SortOrder
    accessCount?: SortOrder
    regulationNumber?: SortOrder
    placeIssued?: SortOrder
    dateIssued?: SortOrder
    promulgationDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    governmentAffair?: SortOrder
    signer?: SortOrder
    callNumber?: SortOrder
    editionPrint?: SortOrder
    physicalDescription?: SortOrder
    isbnIssn?: SortOrder
    publisher?: SortOrder
    publishingPlace?: SortOrder
    source?: SortOrder
    readingDate?: SortOrder
    decisionNumber?: SortOrder
    courtPlace?: SortOrder
    caseType?: SortOrder
    decisionDate?: SortOrder
    abstractFileName?: SortOrder
    abstractFileUrl?: SortOrder
    regulationFileName?: SortOrder
    regulationFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationAvgOrderByAggregateInput = {
    yearPublished?: SortOrder
    accessCount?: SortOrder
  }

  export type RegulationMaxOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    legalType?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    yearPublished?: SortOrder
    language?: SortOrder
    location?: SortOrder
    lawField?: SortOrder
    accessCount?: SortOrder
    regulationNumber?: SortOrder
    placeIssued?: SortOrder
    dateIssued?: SortOrder
    promulgationDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    governmentAffair?: SortOrder
    signer?: SortOrder
    callNumber?: SortOrder
    editionPrint?: SortOrder
    physicalDescription?: SortOrder
    isbnIssn?: SortOrder
    publisher?: SortOrder
    publishingPlace?: SortOrder
    source?: SortOrder
    readingDate?: SortOrder
    decisionNumber?: SortOrder
    courtPlace?: SortOrder
    caseType?: SortOrder
    decisionDate?: SortOrder
    abstractFileName?: SortOrder
    abstractFileUrl?: SortOrder
    regulationFileName?: SortOrder
    regulationFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationMinOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    legalType?: SortOrder
    title?: SortOrder
    abbreviation?: SortOrder
    yearPublished?: SortOrder
    language?: SortOrder
    location?: SortOrder
    lawField?: SortOrder
    accessCount?: SortOrder
    regulationNumber?: SortOrder
    placeIssued?: SortOrder
    dateIssued?: SortOrder
    promulgationDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    governmentAffair?: SortOrder
    signer?: SortOrder
    callNumber?: SortOrder
    editionPrint?: SortOrder
    physicalDescription?: SortOrder
    isbnIssn?: SortOrder
    publisher?: SortOrder
    publishingPlace?: SortOrder
    source?: SortOrder
    readingDate?: SortOrder
    decisionNumber?: SortOrder
    courtPlace?: SortOrder
    caseType?: SortOrder
    decisionDate?: SortOrder
    abstractFileName?: SortOrder
    abstractFileUrl?: SortOrder
    regulationFileName?: SortOrder
    regulationFileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegulationSumOrderByAggregateInput = {
    yearPublished?: SortOrder
    accessCount?: SortOrder
  }

  export type EnumEDocumentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EDocumentType | EnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEDocumentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EDocumentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEDocumentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumEDocumentTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumENewsCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ENewsCategory | EnumENewsCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumENewsCategoryNullableFilter<$PrismaModel> | $Enums.ENewsCategory | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    source?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumENewsCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ENewsCategory | EnumENewsCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumENewsCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ENewsCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumENewsCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumENewsCategoryNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NullableEnumEDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EDocumentType | null
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumENewsCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ENewsCategory | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEDocumentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EDocumentType | EnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEDocumentTypeNullableFilter<$PrismaModel> | $Enums.EDocumentType | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumEDocumentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EDocumentType | EnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EDocumentType[] | ListEnumEDocumentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEDocumentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EDocumentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEDocumentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumEDocumentTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumENewsCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ENewsCategory | EnumENewsCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumENewsCategoryNullableFilter<$PrismaModel> | $Enums.ENewsCategory | null
    isSet?: boolean
  }

  export type NestedEnumENewsCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ENewsCategory | EnumENewsCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ENewsCategory[] | ListEnumENewsCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumENewsCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.ENewsCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumENewsCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumENewsCategoryNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NewsCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    source?: string | null
    category?: $Enums.ENewsCategory | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    source?: string | null
    category?: $Enums.ENewsCategory | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsCreateManyAuthorInputEnvelope = {
    data: NewsCreateManyAuthorInput | NewsCreateManyAuthorInput[]
  }

  export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    authorId?: StringFilter<"News"> | string
    source?: StringNullableFilter<"News"> | string | null
    category?: EnumENewsCategoryNullableFilter<"News"> | $Enums.ENewsCategory | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type UserCreateWithoutNewsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: string
    name: string
    username: string
    email: string
    password: string
    picture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    source?: string | null
    category?: $Enums.ENewsCategory | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumENewsCategoryFieldUpdateOperationsInput | $Enums.ENewsCategory | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumENewsCategoryFieldUpdateOperationsInput | $Enums.ENewsCategory | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableEnumENewsCategoryFieldUpdateOperationsInput | $Enums.ENewsCategory | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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