
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model SiteAddress
 * 
 */
export type SiteAddress = $Result.DefaultSelection<Prisma.$SiteAddressPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model SiteProfile
 * 
 */
export type SiteProfile = $Result.DefaultSelection<Prisma.$SiteProfilePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model WorkforceWorker
 * 
 */
export type WorkforceWorker = $Result.DefaultSelection<Prisma.$WorkforceWorkerPayload>
/**
 * Model WorkForce
 * 
 */
export type WorkForce = $Result.DefaultSelection<Prisma.$WorkForcePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WorkerRoleEnum: {
  HELPER: 'HELPER',
  MISTRI: 'MISTRI',
  ELECTRICIAN: 'ELECTRICIAN',
  PLUMBER: 'PLUMBER',
  PAINTER: 'PAINTER',
  CARPENTER: 'CARPENTER',
  COOLY: 'COOLY'
};

export type WorkerRoleEnum = (typeof WorkerRoleEnum)[keyof typeof WorkerRoleEnum]

}

export type WorkerRoleEnum = $Enums.WorkerRoleEnum

export const WorkerRoleEnum: typeof $Enums.WorkerRoleEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteAddress`: Exposes CRUD operations for the **SiteAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteAddresses
    * const siteAddresses = await prisma.siteAddress.findMany()
    * ```
    */
  get siteAddress(): Prisma.SiteAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteProfile`: Exposes CRUD operations for the **SiteProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteProfiles
    * const siteProfiles = await prisma.siteProfile.findMany()
    * ```
    */
  get siteProfile(): Prisma.SiteProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workforceWorker`: Exposes CRUD operations for the **WorkforceWorker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkforceWorkers
    * const workforceWorkers = await prisma.workforceWorker.findMany()
    * ```
    */
  get workforceWorker(): Prisma.WorkforceWorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workForce`: Exposes CRUD operations for the **WorkForce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkForces
    * const workForces = await prisma.workForce.findMany()
    * ```
    */
  get workForce(): Prisma.WorkForceDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Client: 'Client',
    SiteAddress: 'SiteAddress',
    Site: 'Site',
    SiteProfile: 'SiteProfile',
    Address: 'Address',
    User: 'User',
    UserProfile: 'UserProfile',
    WorkforceWorker: 'WorkforceWorker',
    WorkForce: 'WorkForce'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "siteAddress" | "site" | "siteProfile" | "address" | "user" | "userProfile" | "workforceWorker" | "workForce"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      SiteAddress: {
        payload: Prisma.$SiteAddressPayload<ExtArgs>
        fields: Prisma.SiteAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          findFirst: {
            args: Prisma.SiteAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          findMany: {
            args: Prisma.SiteAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>[]
          }
          create: {
            args: Prisma.SiteAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          createMany: {
            args: Prisma.SiteAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>[]
          }
          delete: {
            args: Prisma.SiteAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          update: {
            args: Prisma.SiteAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          deleteMany: {
            args: Prisma.SiteAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>[]
          }
          upsert: {
            args: Prisma.SiteAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          aggregate: {
            args: Prisma.SiteAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteAddress>
          }
          groupBy: {
            args: Prisma.SiteAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteAddressCountArgs<ExtArgs>
            result: $Utils.Optional<SiteAddressCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      SiteProfile: {
        payload: Prisma.$SiteProfilePayload<ExtArgs>
        fields: Prisma.SiteProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>
          }
          findFirst: {
            args: Prisma.SiteProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>
          }
          findMany: {
            args: Prisma.SiteProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>[]
          }
          create: {
            args: Prisma.SiteProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>
          }
          createMany: {
            args: Prisma.SiteProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>[]
          }
          delete: {
            args: Prisma.SiteProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>
          }
          update: {
            args: Prisma.SiteProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>
          }
          deleteMany: {
            args: Prisma.SiteProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>[]
          }
          upsert: {
            args: Prisma.SiteProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteProfilePayload>
          }
          aggregate: {
            args: Prisma.SiteProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteProfile>
          }
          groupBy: {
            args: Prisma.SiteProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SiteProfileCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      WorkforceWorker: {
        payload: Prisma.$WorkforceWorkerPayload<ExtArgs>
        fields: Prisma.WorkforceWorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkforceWorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkforceWorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkforceWorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkforceWorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>
          }
          findMany: {
            args: Prisma.WorkforceWorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>[]
          }
          create: {
            args: Prisma.WorkforceWorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>
          }
          createMany: {
            args: Prisma.WorkforceWorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkforceWorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>[]
          }
          delete: {
            args: Prisma.WorkforceWorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>
          }
          update: {
            args: Prisma.WorkforceWorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkforceWorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkforceWorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkforceWorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>[]
          }
          upsert: {
            args: Prisma.WorkforceWorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkforceWorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkforceWorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkforceWorker>
          }
          groupBy: {
            args: Prisma.WorkforceWorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkforceWorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkforceWorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkforceWorkerCountAggregateOutputType> | number
          }
        }
      }
      WorkForce: {
        payload: Prisma.$WorkForcePayload<ExtArgs>
        fields: Prisma.WorkForceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkForceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkForceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>
          }
          findFirst: {
            args: Prisma.WorkForceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkForceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>
          }
          findMany: {
            args: Prisma.WorkForceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>[]
          }
          create: {
            args: Prisma.WorkForceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>
          }
          createMany: {
            args: Prisma.WorkForceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkForceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>[]
          }
          delete: {
            args: Prisma.WorkForceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>
          }
          update: {
            args: Prisma.WorkForceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>
          }
          deleteMany: {
            args: Prisma.WorkForceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkForceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkForceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>[]
          }
          upsert: {
            args: Prisma.WorkForceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkForcePayload>
          }
          aggregate: {
            args: Prisma.WorkForceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkForce>
          }
          groupBy: {
            args: Prisma.WorkForceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkForceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkForceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkForceCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    siteAddress?: SiteAddressOmit
    site?: SiteOmit
    siteProfile?: SiteProfileOmit
    address?: AddressOmit
    user?: UserOmit
    userProfile?: UserProfileOmit
    workforceWorker?: WorkforceWorkerOmit
    workForce?: WorkForceOmit
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    sites: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | ClientCountOutputTypeCountSitesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    clients: number
    workforceWorkers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | UserCountOutputTypeCountClientsArgs
    workforceWorkers?: boolean | UserCountOutputTypeCountWorkforceWorkersArgs
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
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkforceWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceWorkerWhereInput
  }


  /**
   * Count Type WorkForceCountOutputType
   */

  export type WorkForceCountOutputType = {
    workforceWorkers: number
  }

  export type WorkForceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workforceWorkers?: boolean | WorkForceCountOutputTypeCountWorkforceWorkersArgs
  }

  // Custom InputTypes
  /**
   * WorkForceCountOutputType without action
   */
  export type WorkForceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForceCountOutputType
     */
    select?: WorkForceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkForceCountOutputType without action
   */
  export type WorkForceCountOutputTypeCountWorkforceWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceWorkerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    mobile: string
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    sites?: boolean | Client$sitesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    sites?: boolean | Client$sitesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      sites: Prisma.$SitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mobile: string
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sites<T extends Client$sitesArgs<ExtArgs> = {}>(args?: Subset<T, Client$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly mobile: FieldRef<"Client", 'String'>
    readonly createdById: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.sites
   */
  export type Client$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model SiteAddress
   */

  export type AggregateSiteAddress = {
    _count: SiteAddressCountAggregateOutputType | null
    _min: SiteAddressMinAggregateOutputType | null
    _max: SiteAddressMaxAggregateOutputType | null
  }

  export type SiteAddressMinAggregateOutputType = {
    siteId: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteAddressMaxAggregateOutputType = {
    siteId: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteAddressCountAggregateOutputType = {
    siteId: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    pincode: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteAddressMinAggregateInputType = {
    siteId?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteAddressMaxAggregateInputType = {
    siteId?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteAddressCountAggregateInputType = {
    siteId?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteAddress to aggregate.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteAddresses
    **/
    _count?: true | SiteAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteAddressMaxAggregateInputType
  }

  export type GetSiteAddressAggregateType<T extends SiteAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteAddress[P]>
      : GetScalarType<T[P], AggregateSiteAddress[P]>
  }




  export type SiteAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteAddressWhereInput
    orderBy?: SiteAddressOrderByWithAggregationInput | SiteAddressOrderByWithAggregationInput[]
    by: SiteAddressScalarFieldEnum[] | SiteAddressScalarFieldEnum
    having?: SiteAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteAddressCountAggregateInputType | true
    _min?: SiteAddressMinAggregateInputType
    _max?: SiteAddressMaxAggregateInputType
  }

  export type SiteAddressGroupByOutputType = {
    siteId: string
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    _count: SiteAddressCountAggregateOutputType | null
    _min: SiteAddressMinAggregateOutputType | null
    _max: SiteAddressMaxAggregateOutputType | null
  }

  type GetSiteAddressGroupByPayload<T extends SiteAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteAddressGroupByOutputType[P]>
            : GetScalarType<T[P], SiteAddressGroupByOutputType[P]>
        }
      >
    >


  export type SiteAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    siteId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteProfiles?: boolean | SiteProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteAddress"]>

  export type SiteAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    siteId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteProfiles?: boolean | SiteProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteAddress"]>

  export type SiteAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    siteId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteProfiles?: boolean | SiteProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteAddress"]>

  export type SiteAddressSelectScalar = {
    siteId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"siteId" | "addressLine1" | "addressLine2" | "city" | "state" | "pincode" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["siteAddress"]>
  export type SiteAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siteProfiles?: boolean | SiteProfileDefaultArgs<ExtArgs>
  }
  export type SiteAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siteProfiles?: boolean | SiteProfileDefaultArgs<ExtArgs>
  }
  export type SiteAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siteProfiles?: boolean | SiteProfileDefaultArgs<ExtArgs>
  }

  export type $SiteAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteAddress"
    objects: {
      siteProfiles: Prisma.$SiteProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      siteId: string
      addressLine1: string | null
      addressLine2: string | null
      city: string | null
      state: string | null
      pincode: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteAddress"]>
    composites: {}
  }

  type SiteAddressGetPayload<S extends boolean | null | undefined | SiteAddressDefaultArgs> = $Result.GetResult<Prisma.$SiteAddressPayload, S>

  type SiteAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteAddressCountAggregateInputType | true
    }

  export interface SiteAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteAddress'], meta: { name: 'SiteAddress' } }
    /**
     * Find zero or one SiteAddress that matches the filter.
     * @param {SiteAddressFindUniqueArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteAddressFindUniqueArgs>(args: SelectSubset<T, SiteAddressFindUniqueArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteAddressFindUniqueOrThrowArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressFindFirstArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteAddressFindFirstArgs>(args?: SelectSubset<T, SiteAddressFindFirstArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressFindFirstOrThrowArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteAddresses
     * const siteAddresses = await prisma.siteAddress.findMany()
     * 
     * // Get first 10 SiteAddresses
     * const siteAddresses = await prisma.siteAddress.findMany({ take: 10 })
     * 
     * // Only select the `siteId`
     * const siteAddressWithSiteIdOnly = await prisma.siteAddress.findMany({ select: { siteId: true } })
     * 
     */
    findMany<T extends SiteAddressFindManyArgs>(args?: SelectSubset<T, SiteAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteAddress.
     * @param {SiteAddressCreateArgs} args - Arguments to create a SiteAddress.
     * @example
     * // Create one SiteAddress
     * const SiteAddress = await prisma.siteAddress.create({
     *   data: {
     *     // ... data to create a SiteAddress
     *   }
     * })
     * 
     */
    create<T extends SiteAddressCreateArgs>(args: SelectSubset<T, SiteAddressCreateArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteAddresses.
     * @param {SiteAddressCreateManyArgs} args - Arguments to create many SiteAddresses.
     * @example
     * // Create many SiteAddresses
     * const siteAddress = await prisma.siteAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteAddressCreateManyArgs>(args?: SelectSubset<T, SiteAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteAddresses and returns the data saved in the database.
     * @param {SiteAddressCreateManyAndReturnArgs} args - Arguments to create many SiteAddresses.
     * @example
     * // Create many SiteAddresses
     * const siteAddress = await prisma.siteAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteAddresses and only return the `siteId`
     * const siteAddressWithSiteIdOnly = await prisma.siteAddress.createManyAndReturn({
     *   select: { siteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteAddress.
     * @param {SiteAddressDeleteArgs} args - Arguments to delete one SiteAddress.
     * @example
     * // Delete one SiteAddress
     * const SiteAddress = await prisma.siteAddress.delete({
     *   where: {
     *     // ... filter to delete one SiteAddress
     *   }
     * })
     * 
     */
    delete<T extends SiteAddressDeleteArgs>(args: SelectSubset<T, SiteAddressDeleteArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteAddress.
     * @param {SiteAddressUpdateArgs} args - Arguments to update one SiteAddress.
     * @example
     * // Update one SiteAddress
     * const siteAddress = await prisma.siteAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteAddressUpdateArgs>(args: SelectSubset<T, SiteAddressUpdateArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteAddresses.
     * @param {SiteAddressDeleteManyArgs} args - Arguments to filter SiteAddresses to delete.
     * @example
     * // Delete a few SiteAddresses
     * const { count } = await prisma.siteAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteAddressDeleteManyArgs>(args?: SelectSubset<T, SiteAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteAddresses
     * const siteAddress = await prisma.siteAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteAddressUpdateManyArgs>(args: SelectSubset<T, SiteAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteAddresses and returns the data updated in the database.
     * @param {SiteAddressUpdateManyAndReturnArgs} args - Arguments to update many SiteAddresses.
     * @example
     * // Update many SiteAddresses
     * const siteAddress = await prisma.siteAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteAddresses and only return the `siteId`
     * const siteAddressWithSiteIdOnly = await prisma.siteAddress.updateManyAndReturn({
     *   select: { siteId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteAddress.
     * @param {SiteAddressUpsertArgs} args - Arguments to update or create a SiteAddress.
     * @example
     * // Update or create a SiteAddress
     * const siteAddress = await prisma.siteAddress.upsert({
     *   create: {
     *     // ... data to create a SiteAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteAddress we want to update
     *   }
     * })
     */
    upsert<T extends SiteAddressUpsertArgs>(args: SelectSubset<T, SiteAddressUpsertArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressCountArgs} args - Arguments to filter SiteAddresses to count.
     * @example
     * // Count the number of SiteAddresses
     * const count = await prisma.siteAddress.count({
     *   where: {
     *     // ... the filter for the SiteAddresses we want to count
     *   }
     * })
    **/
    count<T extends SiteAddressCountArgs>(
      args?: Subset<T, SiteAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteAddressAggregateArgs>(args: Subset<T, SiteAddressAggregateArgs>): Prisma.PrismaPromise<GetSiteAddressAggregateType<T>>

    /**
     * Group by SiteAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressGroupByArgs} args - Group by arguments.
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
      T extends SiteAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteAddressGroupByArgs['orderBy'] }
        : { orderBy?: SiteAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteAddress model
   */
  readonly fields: SiteAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    siteProfiles<T extends SiteProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteProfileDefaultArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SiteAddress model
   */
  interface SiteAddressFieldRefs {
    readonly siteId: FieldRef<"SiteAddress", 'String'>
    readonly addressLine1: FieldRef<"SiteAddress", 'String'>
    readonly addressLine2: FieldRef<"SiteAddress", 'String'>
    readonly city: FieldRef<"SiteAddress", 'String'>
    readonly state: FieldRef<"SiteAddress", 'String'>
    readonly pincode: FieldRef<"SiteAddress", 'String'>
    readonly country: FieldRef<"SiteAddress", 'String'>
    readonly createdAt: FieldRef<"SiteAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteAddress findUnique
   */
  export type SiteAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress findUniqueOrThrow
   */
  export type SiteAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress findFirst
   */
  export type SiteAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteAddresses.
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteAddresses.
     */
    distinct?: SiteAddressScalarFieldEnum | SiteAddressScalarFieldEnum[]
  }

  /**
   * SiteAddress findFirstOrThrow
   */
  export type SiteAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteAddresses.
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteAddresses.
     */
    distinct?: SiteAddressScalarFieldEnum | SiteAddressScalarFieldEnum[]
  }

  /**
   * SiteAddress findMany
   */
  export type SiteAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddresses to fetch.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteAddresses.
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    distinct?: SiteAddressScalarFieldEnum | SiteAddressScalarFieldEnum[]
  }

  /**
   * SiteAddress create
   */
  export type SiteAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteAddress.
     */
    data: XOR<SiteAddressCreateInput, SiteAddressUncheckedCreateInput>
  }

  /**
   * SiteAddress createMany
   */
  export type SiteAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteAddresses.
     */
    data: SiteAddressCreateManyInput | SiteAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteAddress createManyAndReturn
   */
  export type SiteAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * The data used to create many SiteAddresses.
     */
    data: SiteAddressCreateManyInput | SiteAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteAddress update
   */
  export type SiteAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteAddress.
     */
    data: XOR<SiteAddressUpdateInput, SiteAddressUncheckedUpdateInput>
    /**
     * Choose, which SiteAddress to update.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress updateMany
   */
  export type SiteAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteAddresses.
     */
    data: XOR<SiteAddressUpdateManyMutationInput, SiteAddressUncheckedUpdateManyInput>
    /**
     * Filter which SiteAddresses to update
     */
    where?: SiteAddressWhereInput
    /**
     * Limit how many SiteAddresses to update.
     */
    limit?: number
  }

  /**
   * SiteAddress updateManyAndReturn
   */
  export type SiteAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * The data used to update SiteAddresses.
     */
    data: XOR<SiteAddressUpdateManyMutationInput, SiteAddressUncheckedUpdateManyInput>
    /**
     * Filter which SiteAddresses to update
     */
    where?: SiteAddressWhereInput
    /**
     * Limit how many SiteAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteAddress upsert
   */
  export type SiteAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteAddress to update in case it exists.
     */
    where: SiteAddressWhereUniqueInput
    /**
     * In case the SiteAddress found by the `where` argument doesn't exist, create a new SiteAddress with this data.
     */
    create: XOR<SiteAddressCreateInput, SiteAddressUncheckedCreateInput>
    /**
     * In case the SiteAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteAddressUpdateInput, SiteAddressUncheckedUpdateInput>
  }

  /**
   * SiteAddress delete
   */
  export type SiteAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter which SiteAddress to delete.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress deleteMany
   */
  export type SiteAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteAddresses to delete
     */
    where?: SiteAddressWhereInput
    /**
     * Limit how many SiteAddresses to delete.
     */
    limit?: number
  }

  /**
   * SiteAddress without action
   */
  export type SiteAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    estimatedBudget: number | null
  }

  export type SiteSumAggregateOutputType = {
    estimatedBudget: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    estimatedBudget: number | null
    startDate: Date | null
    expectedEndDate: Date | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    estimatedBudget: number | null
    startDate: Date | null
    expectedEndDate: Date | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    estimatedBudget: number
    startDate: number
    expectedEndDate: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    estimatedBudget?: true
  }

  export type SiteSumAggregateInputType = {
    estimatedBudget?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    estimatedBudget?: true
    startDate?: true
    expectedEndDate?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    estimatedBudget?: true
    startDate?: true
    expectedEndDate?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    estimatedBudget?: true
    startDate?: true
    expectedEndDate?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    estimatedBudget: number | null
    startDate: Date | null
    expectedEndDate: Date | null
    clientId: string
    createdAt: Date
    updatedAt: Date
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estimatedBudget?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profile?: boolean | Site$profileArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estimatedBudget?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estimatedBudget?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    estimatedBudget?: boolean
    startDate?: boolean
    expectedEndDate?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "estimatedBudget" | "startDate" | "expectedEndDate" | "clientId" | "createdAt" | "updatedAt", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    profile?: boolean | Site$profileArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      profile: Prisma.$SiteProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      estimatedBudget: number | null
      startDate: Date | null
      expectedEndDate: Date | null
      clientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
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
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends Site$profileArgs<ExtArgs> = {}>(args?: Subset<T, Site$profileArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly estimatedBudget: FieldRef<"Site", 'Int'>
    readonly startDate: FieldRef<"Site", 'DateTime'>
    readonly expectedEndDate: FieldRef<"Site", 'DateTime'>
    readonly clientId: FieldRef<"Site", 'String'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.profile
   */
  export type Site$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    where?: SiteProfileWhereInput
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model SiteProfile
   */

  export type AggregateSiteProfile = {
    _count: SiteProfileCountAggregateOutputType | null
    _min: SiteProfileMinAggregateOutputType | null
    _max: SiteProfileMaxAggregateOutputType | null
  }

  export type SiteProfileMinAggregateOutputType = {
    siteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteProfileMaxAggregateOutputType = {
    siteId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteProfileCountAggregateOutputType = {
    siteId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteProfileMinAggregateInputType = {
    siteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteProfileMaxAggregateInputType = {
    siteId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteProfileCountAggregateInputType = {
    siteId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteProfile to aggregate.
     */
    where?: SiteProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteProfiles to fetch.
     */
    orderBy?: SiteProfileOrderByWithRelationInput | SiteProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteProfiles
    **/
    _count?: true | SiteProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteProfileMaxAggregateInputType
  }

  export type GetSiteProfileAggregateType<T extends SiteProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteProfile[P]>
      : GetScalarType<T[P], AggregateSiteProfile[P]>
  }




  export type SiteProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteProfileWhereInput
    orderBy?: SiteProfileOrderByWithAggregationInput | SiteProfileOrderByWithAggregationInput[]
    by: SiteProfileScalarFieldEnum[] | SiteProfileScalarFieldEnum
    having?: SiteProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteProfileCountAggregateInputType | true
    _min?: SiteProfileMinAggregateInputType
    _max?: SiteProfileMaxAggregateInputType
  }

  export type SiteProfileGroupByOutputType = {
    siteId: string
    createdAt: Date
    updatedAt: Date
    _count: SiteProfileCountAggregateOutputType | null
    _min: SiteProfileMinAggregateOutputType | null
    _max: SiteProfileMaxAggregateOutputType | null
  }

  type GetSiteProfileGroupByPayload<T extends SiteProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SiteProfileGroupByOutputType[P]>
        }
      >
    >


  export type SiteProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    siteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    address?: boolean | SiteProfile$addressArgs<ExtArgs>
  }, ExtArgs["result"]["siteProfile"]>

  export type SiteProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    siteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteProfile"]>

  export type SiteProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    siteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteProfile"]>

  export type SiteProfileSelectScalar = {
    siteId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"siteId" | "createdAt" | "updatedAt", ExtArgs["result"]["siteProfile"]>
  export type SiteProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    address?: boolean | SiteProfile$addressArgs<ExtArgs>
  }
  export type SiteProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type SiteProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $SiteProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteProfile"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      address: Prisma.$SiteAddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      siteId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteProfile"]>
    composites: {}
  }

  type SiteProfileGetPayload<S extends boolean | null | undefined | SiteProfileDefaultArgs> = $Result.GetResult<Prisma.$SiteProfilePayload, S>

  type SiteProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteProfileCountAggregateInputType | true
    }

  export interface SiteProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteProfile'], meta: { name: 'SiteProfile' } }
    /**
     * Find zero or one SiteProfile that matches the filter.
     * @param {SiteProfileFindUniqueArgs} args - Arguments to find a SiteProfile
     * @example
     * // Get one SiteProfile
     * const siteProfile = await prisma.siteProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteProfileFindUniqueArgs>(args: SelectSubset<T, SiteProfileFindUniqueArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteProfileFindUniqueOrThrowArgs} args - Arguments to find a SiteProfile
     * @example
     * // Get one SiteProfile
     * const siteProfile = await prisma.siteProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteProfileFindFirstArgs} args - Arguments to find a SiteProfile
     * @example
     * // Get one SiteProfile
     * const siteProfile = await prisma.siteProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteProfileFindFirstArgs>(args?: SelectSubset<T, SiteProfileFindFirstArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteProfileFindFirstOrThrowArgs} args - Arguments to find a SiteProfile
     * @example
     * // Get one SiteProfile
     * const siteProfile = await prisma.siteProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteProfiles
     * const siteProfiles = await prisma.siteProfile.findMany()
     * 
     * // Get first 10 SiteProfiles
     * const siteProfiles = await prisma.siteProfile.findMany({ take: 10 })
     * 
     * // Only select the `siteId`
     * const siteProfileWithSiteIdOnly = await prisma.siteProfile.findMany({ select: { siteId: true } })
     * 
     */
    findMany<T extends SiteProfileFindManyArgs>(args?: SelectSubset<T, SiteProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteProfile.
     * @param {SiteProfileCreateArgs} args - Arguments to create a SiteProfile.
     * @example
     * // Create one SiteProfile
     * const SiteProfile = await prisma.siteProfile.create({
     *   data: {
     *     // ... data to create a SiteProfile
     *   }
     * })
     * 
     */
    create<T extends SiteProfileCreateArgs>(args: SelectSubset<T, SiteProfileCreateArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteProfiles.
     * @param {SiteProfileCreateManyArgs} args - Arguments to create many SiteProfiles.
     * @example
     * // Create many SiteProfiles
     * const siteProfile = await prisma.siteProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteProfileCreateManyArgs>(args?: SelectSubset<T, SiteProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteProfiles and returns the data saved in the database.
     * @param {SiteProfileCreateManyAndReturnArgs} args - Arguments to create many SiteProfiles.
     * @example
     * // Create many SiteProfiles
     * const siteProfile = await prisma.siteProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteProfiles and only return the `siteId`
     * const siteProfileWithSiteIdOnly = await prisma.siteProfile.createManyAndReturn({
     *   select: { siteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteProfile.
     * @param {SiteProfileDeleteArgs} args - Arguments to delete one SiteProfile.
     * @example
     * // Delete one SiteProfile
     * const SiteProfile = await prisma.siteProfile.delete({
     *   where: {
     *     // ... filter to delete one SiteProfile
     *   }
     * })
     * 
     */
    delete<T extends SiteProfileDeleteArgs>(args: SelectSubset<T, SiteProfileDeleteArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteProfile.
     * @param {SiteProfileUpdateArgs} args - Arguments to update one SiteProfile.
     * @example
     * // Update one SiteProfile
     * const siteProfile = await prisma.siteProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteProfileUpdateArgs>(args: SelectSubset<T, SiteProfileUpdateArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteProfiles.
     * @param {SiteProfileDeleteManyArgs} args - Arguments to filter SiteProfiles to delete.
     * @example
     * // Delete a few SiteProfiles
     * const { count } = await prisma.siteProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteProfileDeleteManyArgs>(args?: SelectSubset<T, SiteProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteProfiles
     * const siteProfile = await prisma.siteProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteProfileUpdateManyArgs>(args: SelectSubset<T, SiteProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteProfiles and returns the data updated in the database.
     * @param {SiteProfileUpdateManyAndReturnArgs} args - Arguments to update many SiteProfiles.
     * @example
     * // Update many SiteProfiles
     * const siteProfile = await prisma.siteProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteProfiles and only return the `siteId`
     * const siteProfileWithSiteIdOnly = await prisma.siteProfile.updateManyAndReturn({
     *   select: { siteId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteProfile.
     * @param {SiteProfileUpsertArgs} args - Arguments to update or create a SiteProfile.
     * @example
     * // Update or create a SiteProfile
     * const siteProfile = await prisma.siteProfile.upsert({
     *   create: {
     *     // ... data to create a SiteProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteProfile we want to update
     *   }
     * })
     */
    upsert<T extends SiteProfileUpsertArgs>(args: SelectSubset<T, SiteProfileUpsertArgs<ExtArgs>>): Prisma__SiteProfileClient<$Result.GetResult<Prisma.$SiteProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteProfileCountArgs} args - Arguments to filter SiteProfiles to count.
     * @example
     * // Count the number of SiteProfiles
     * const count = await prisma.siteProfile.count({
     *   where: {
     *     // ... the filter for the SiteProfiles we want to count
     *   }
     * })
    **/
    count<T extends SiteProfileCountArgs>(
      args?: Subset<T, SiteProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteProfileAggregateArgs>(args: Subset<T, SiteProfileAggregateArgs>): Prisma.PrismaPromise<GetSiteProfileAggregateType<T>>

    /**
     * Group by SiteProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteProfileGroupByArgs} args - Group by arguments.
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
      T extends SiteProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteProfileGroupByArgs['orderBy'] }
        : { orderBy?: SiteProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteProfile model
   */
  readonly fields: SiteProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends SiteProfile$addressArgs<ExtArgs> = {}>(args?: Subset<T, SiteProfile$addressArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SiteProfile model
   */
  interface SiteProfileFieldRefs {
    readonly siteId: FieldRef<"SiteProfile", 'String'>
    readonly createdAt: FieldRef<"SiteProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteProfile findUnique
   */
  export type SiteProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * Filter, which SiteProfile to fetch.
     */
    where: SiteProfileWhereUniqueInput
  }

  /**
   * SiteProfile findUniqueOrThrow
   */
  export type SiteProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * Filter, which SiteProfile to fetch.
     */
    where: SiteProfileWhereUniqueInput
  }

  /**
   * SiteProfile findFirst
   */
  export type SiteProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * Filter, which SiteProfile to fetch.
     */
    where?: SiteProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteProfiles to fetch.
     */
    orderBy?: SiteProfileOrderByWithRelationInput | SiteProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteProfiles.
     */
    cursor?: SiteProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteProfiles.
     */
    distinct?: SiteProfileScalarFieldEnum | SiteProfileScalarFieldEnum[]
  }

  /**
   * SiteProfile findFirstOrThrow
   */
  export type SiteProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * Filter, which SiteProfile to fetch.
     */
    where?: SiteProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteProfiles to fetch.
     */
    orderBy?: SiteProfileOrderByWithRelationInput | SiteProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteProfiles.
     */
    cursor?: SiteProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteProfiles.
     */
    distinct?: SiteProfileScalarFieldEnum | SiteProfileScalarFieldEnum[]
  }

  /**
   * SiteProfile findMany
   */
  export type SiteProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * Filter, which SiteProfiles to fetch.
     */
    where?: SiteProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteProfiles to fetch.
     */
    orderBy?: SiteProfileOrderByWithRelationInput | SiteProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteProfiles.
     */
    cursor?: SiteProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteProfiles.
     */
    skip?: number
    distinct?: SiteProfileScalarFieldEnum | SiteProfileScalarFieldEnum[]
  }

  /**
   * SiteProfile create
   */
  export type SiteProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteProfile.
     */
    data: XOR<SiteProfileCreateInput, SiteProfileUncheckedCreateInput>
  }

  /**
   * SiteProfile createMany
   */
  export type SiteProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteProfiles.
     */
    data: SiteProfileCreateManyInput | SiteProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteProfile createManyAndReturn
   */
  export type SiteProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SiteProfiles.
     */
    data: SiteProfileCreateManyInput | SiteProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteProfile update
   */
  export type SiteProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteProfile.
     */
    data: XOR<SiteProfileUpdateInput, SiteProfileUncheckedUpdateInput>
    /**
     * Choose, which SiteProfile to update.
     */
    where: SiteProfileWhereUniqueInput
  }

  /**
   * SiteProfile updateMany
   */
  export type SiteProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteProfiles.
     */
    data: XOR<SiteProfileUpdateManyMutationInput, SiteProfileUncheckedUpdateManyInput>
    /**
     * Filter which SiteProfiles to update
     */
    where?: SiteProfileWhereInput
    /**
     * Limit how many SiteProfiles to update.
     */
    limit?: number
  }

  /**
   * SiteProfile updateManyAndReturn
   */
  export type SiteProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * The data used to update SiteProfiles.
     */
    data: XOR<SiteProfileUpdateManyMutationInput, SiteProfileUncheckedUpdateManyInput>
    /**
     * Filter which SiteProfiles to update
     */
    where?: SiteProfileWhereInput
    /**
     * Limit how many SiteProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SiteProfile upsert
   */
  export type SiteProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteProfile to update in case it exists.
     */
    where: SiteProfileWhereUniqueInput
    /**
     * In case the SiteProfile found by the `where` argument doesn't exist, create a new SiteProfile with this data.
     */
    create: XOR<SiteProfileCreateInput, SiteProfileUncheckedCreateInput>
    /**
     * In case the SiteProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteProfileUpdateInput, SiteProfileUncheckedUpdateInput>
  }

  /**
   * SiteProfile delete
   */
  export type SiteProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
    /**
     * Filter which SiteProfile to delete.
     */
    where: SiteProfileWhereUniqueInput
  }

  /**
   * SiteProfile deleteMany
   */
  export type SiteProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteProfiles to delete
     */
    where?: SiteProfileWhereInput
    /**
     * Limit how many SiteProfiles to delete.
     */
    limit?: number
  }

  /**
   * SiteProfile.address
   */
  export type SiteProfile$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    where?: SiteAddressWhereInput
  }

  /**
   * SiteProfile without action
   */
  export type SiteProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteProfile
     */
    select?: SiteProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteProfile
     */
    omit?: SiteProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteProfileInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    userProfileId: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    userProfileId: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    userProfileId: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    pincode: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    userProfileId?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    userProfileId?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    userProfileId?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    pincode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    userProfileId: string
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    pincode: string | null
    country: string | null
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userProfileId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userProfileId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userProfileId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    userProfileId?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userProfileId" | "addressLine1" | "addressLine2" | "city" | "state" | "pincode" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      userProfile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userProfileId: string
      addressLine1: string | null
      addressLine2: string | null
      city: string | null
      state: string | null
      pincode: string | null
      country: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `userProfileId`
     * const addressWithUserProfileIdOnly = await prisma.address.findMany({ select: { userProfileId: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `userProfileId`
     * const addressWithUserProfileIdOnly = await prisma.address.createManyAndReturn({
     *   select: { userProfileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `userProfileId`
     * const addressWithUserProfileIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { userProfileId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProfile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly userProfileId: FieldRef<"Address", 'String'>
    readonly addressLine1: FieldRef<"Address", 'String'>
    readonly addressLine2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly pincode: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


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
    firstName: string | null
    middleName: string | null
    lastName: string | null
    password: string | null
    countryCode: string | null
    mobile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    password: string | null
    countryCode: string | null
    mobile: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    middleName: number
    lastName: number
    password: number
    countryCode: number
    mobile: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    password?: true
    countryCode?: true
    mobile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    password?: true
    countryCode?: true
    mobile?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    middleName?: true
    lastName?: true
    password?: true
    countryCode?: true
    mobile?: true
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
    firstName: string
    middleName: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
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
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    password?: boolean
    countryCode?: boolean
    mobile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    workforceWorkers?: boolean | User$workforceWorkersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    password?: boolean
    countryCode?: boolean
    mobile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    password?: boolean
    countryCode?: boolean
    mobile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    password?: boolean
    countryCode?: boolean
    mobile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "middleName" | "lastName" | "password" | "countryCode" | "mobile" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    workforceWorkers?: boolean | User$workforceWorkersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      clients: Prisma.$ClientPayload<ExtArgs>[]
      workforceWorkers: Prisma.$WorkforceWorkerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      middleName: string | null
      lastName: string
      password: string
      countryCode: string
      mobile: string
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workforceWorkers<T extends User$workforceWorkersArgs<ExtArgs> = {}>(args?: Subset<T, User$workforceWorkersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly countryCode: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.workforceWorkers
   */
  export type User$workforceWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    where?: WorkforceWorkerWhereInput
    orderBy?: WorkforceWorkerOrderByWithRelationInput | WorkforceWorkerOrderByWithRelationInput[]
    cursor?: WorkforceWorkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceWorkerScalarFieldEnum | WorkforceWorkerScalarFieldEnum[]
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
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    addressId: string | null
    availableForWork: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    addressId: string | null
    availableForWork: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    addressId: number
    availableForWork: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    userId?: true
    addressId?: true
    availableForWork?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    addressId?: true
    availableForWork?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    addressId?: true
    availableForWork?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: string
    addressId: string | null
    availableForWork: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    addressId?: boolean
    availableForWork?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | UserProfile$addressArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    addressId?: boolean
    availableForWork?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    addressId?: boolean
    availableForWork?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    addressId?: boolean
    availableForWork?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "addressId" | "availableForWork" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | UserProfile$addressArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      addressId: string | null
      availableForWork: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends UserProfile$addressArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly addressId: FieldRef<"UserProfile", 'String'>
    readonly availableForWork: FieldRef<"UserProfile", 'Boolean'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.address
   */
  export type UserProfile$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model WorkforceWorker
   */

  export type AggregateWorkforceWorker = {
    _count: WorkforceWorkerCountAggregateOutputType | null
    _avg: WorkforceWorkerAvgAggregateOutputType | null
    _sum: WorkforceWorkerSumAggregateOutputType | null
    _min: WorkforceWorkerMinAggregateOutputType | null
    _max: WorkforceWorkerMaxAggregateOutputType | null
  }

  export type WorkforceWorkerAvgAggregateOutputType = {
    defaultWage: number | null
  }

  export type WorkforceWorkerSumAggregateOutputType = {
    defaultWage: number | null
  }

  export type WorkforceWorkerMinAggregateOutputType = {
    id: string | null
    defaultWage: number | null
    role: $Enums.WorkerRoleEnum | null
    workforceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceWorkerMaxAggregateOutputType = {
    id: string | null
    defaultWage: number | null
    role: $Enums.WorkerRoleEnum | null
    workforceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkforceWorkerCountAggregateOutputType = {
    id: number
    defaultWage: number
    role: number
    workforceId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkforceWorkerAvgAggregateInputType = {
    defaultWage?: true
  }

  export type WorkforceWorkerSumAggregateInputType = {
    defaultWage?: true
  }

  export type WorkforceWorkerMinAggregateInputType = {
    id?: true
    defaultWage?: true
    role?: true
    workforceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceWorkerMaxAggregateInputType = {
    id?: true
    defaultWage?: true
    role?: true
    workforceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkforceWorkerCountAggregateInputType = {
    id?: true
    defaultWage?: true
    role?: true
    workforceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkforceWorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceWorker to aggregate.
     */
    where?: WorkforceWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceWorkers to fetch.
     */
    orderBy?: WorkforceWorkerOrderByWithRelationInput | WorkforceWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkforceWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkforceWorkers
    **/
    _count?: true | WorkforceWorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkforceWorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkforceWorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkforceWorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkforceWorkerMaxAggregateInputType
  }

  export type GetWorkforceWorkerAggregateType<T extends WorkforceWorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkforceWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkforceWorker[P]>
      : GetScalarType<T[P], AggregateWorkforceWorker[P]>
  }




  export type WorkforceWorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkforceWorkerWhereInput
    orderBy?: WorkforceWorkerOrderByWithAggregationInput | WorkforceWorkerOrderByWithAggregationInput[]
    by: WorkforceWorkerScalarFieldEnum[] | WorkforceWorkerScalarFieldEnum
    having?: WorkforceWorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkforceWorkerCountAggregateInputType | true
    _avg?: WorkforceWorkerAvgAggregateInputType
    _sum?: WorkforceWorkerSumAggregateInputType
    _min?: WorkforceWorkerMinAggregateInputType
    _max?: WorkforceWorkerMaxAggregateInputType
  }

  export type WorkforceWorkerGroupByOutputType = {
    id: string
    defaultWage: number
    role: $Enums.WorkerRoleEnum
    workforceId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkforceWorkerCountAggregateOutputType | null
    _avg: WorkforceWorkerAvgAggregateOutputType | null
    _sum: WorkforceWorkerSumAggregateOutputType | null
    _min: WorkforceWorkerMinAggregateOutputType | null
    _max: WorkforceWorkerMaxAggregateOutputType | null
  }

  type GetWorkforceWorkerGroupByPayload<T extends WorkforceWorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkforceWorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkforceWorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkforceWorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkforceWorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkforceWorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defaultWage?: boolean
    role?: boolean
    workforceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workforce?: boolean | WorkForceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceWorker"]>

  export type WorkforceWorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defaultWage?: boolean
    role?: boolean
    workforceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workforce?: boolean | WorkForceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceWorker"]>

  export type WorkforceWorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    defaultWage?: boolean
    role?: boolean
    workforceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workforce?: boolean | WorkForceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workforceWorker"]>

  export type WorkforceWorkerSelectScalar = {
    id?: boolean
    defaultWage?: boolean
    role?: boolean
    workforceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkforceWorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "defaultWage" | "role" | "workforceId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["workforceWorker"]>
  export type WorkforceWorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workforce?: boolean | WorkForceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkforceWorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workforce?: boolean | WorkForceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkforceWorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workforce?: boolean | WorkForceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkforceWorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkforceWorker"
    objects: {
      workforce: Prisma.$WorkForcePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      defaultWage: number
      role: $Enums.WorkerRoleEnum
      workforceId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workforceWorker"]>
    composites: {}
  }

  type WorkforceWorkerGetPayload<S extends boolean | null | undefined | WorkforceWorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkforceWorkerPayload, S>

  type WorkforceWorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkforceWorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkforceWorkerCountAggregateInputType | true
    }

  export interface WorkforceWorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkforceWorker'], meta: { name: 'WorkforceWorker' } }
    /**
     * Find zero or one WorkforceWorker that matches the filter.
     * @param {WorkforceWorkerFindUniqueArgs} args - Arguments to find a WorkforceWorker
     * @example
     * // Get one WorkforceWorker
     * const workforceWorker = await prisma.workforceWorker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkforceWorkerFindUniqueArgs>(args: SelectSubset<T, WorkforceWorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkforceWorker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkforceWorkerFindUniqueOrThrowArgs} args - Arguments to find a WorkforceWorker
     * @example
     * // Get one WorkforceWorker
     * const workforceWorker = await prisma.workforceWorker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkforceWorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkforceWorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceWorker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceWorkerFindFirstArgs} args - Arguments to find a WorkforceWorker
     * @example
     * // Get one WorkforceWorker
     * const workforceWorker = await prisma.workforceWorker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkforceWorkerFindFirstArgs>(args?: SelectSubset<T, WorkforceWorkerFindFirstArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkforceWorker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceWorkerFindFirstOrThrowArgs} args - Arguments to find a WorkforceWorker
     * @example
     * // Get one WorkforceWorker
     * const workforceWorker = await prisma.workforceWorker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkforceWorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkforceWorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkforceWorkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceWorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkforceWorkers
     * const workforceWorkers = await prisma.workforceWorker.findMany()
     * 
     * // Get first 10 WorkforceWorkers
     * const workforceWorkers = await prisma.workforceWorker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workforceWorkerWithIdOnly = await prisma.workforceWorker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkforceWorkerFindManyArgs>(args?: SelectSubset<T, WorkforceWorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkforceWorker.
     * @param {WorkforceWorkerCreateArgs} args - Arguments to create a WorkforceWorker.
     * @example
     * // Create one WorkforceWorker
     * const WorkforceWorker = await prisma.workforceWorker.create({
     *   data: {
     *     // ... data to create a WorkforceWorker
     *   }
     * })
     * 
     */
    create<T extends WorkforceWorkerCreateArgs>(args: SelectSubset<T, WorkforceWorkerCreateArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkforceWorkers.
     * @param {WorkforceWorkerCreateManyArgs} args - Arguments to create many WorkforceWorkers.
     * @example
     * // Create many WorkforceWorkers
     * const workforceWorker = await prisma.workforceWorker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkforceWorkerCreateManyArgs>(args?: SelectSubset<T, WorkforceWorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkforceWorkers and returns the data saved in the database.
     * @param {WorkforceWorkerCreateManyAndReturnArgs} args - Arguments to create many WorkforceWorkers.
     * @example
     * // Create many WorkforceWorkers
     * const workforceWorker = await prisma.workforceWorker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkforceWorkers and only return the `id`
     * const workforceWorkerWithIdOnly = await prisma.workforceWorker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkforceWorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkforceWorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkforceWorker.
     * @param {WorkforceWorkerDeleteArgs} args - Arguments to delete one WorkforceWorker.
     * @example
     * // Delete one WorkforceWorker
     * const WorkforceWorker = await prisma.workforceWorker.delete({
     *   where: {
     *     // ... filter to delete one WorkforceWorker
     *   }
     * })
     * 
     */
    delete<T extends WorkforceWorkerDeleteArgs>(args: SelectSubset<T, WorkforceWorkerDeleteArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkforceWorker.
     * @param {WorkforceWorkerUpdateArgs} args - Arguments to update one WorkforceWorker.
     * @example
     * // Update one WorkforceWorker
     * const workforceWorker = await prisma.workforceWorker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkforceWorkerUpdateArgs>(args: SelectSubset<T, WorkforceWorkerUpdateArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkforceWorkers.
     * @param {WorkforceWorkerDeleteManyArgs} args - Arguments to filter WorkforceWorkers to delete.
     * @example
     * // Delete a few WorkforceWorkers
     * const { count } = await prisma.workforceWorker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkforceWorkerDeleteManyArgs>(args?: SelectSubset<T, WorkforceWorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceWorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkforceWorkers
     * const workforceWorker = await prisma.workforceWorker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkforceWorkerUpdateManyArgs>(args: SelectSubset<T, WorkforceWorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkforceWorkers and returns the data updated in the database.
     * @param {WorkforceWorkerUpdateManyAndReturnArgs} args - Arguments to update many WorkforceWorkers.
     * @example
     * // Update many WorkforceWorkers
     * const workforceWorker = await prisma.workforceWorker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkforceWorkers and only return the `id`
     * const workforceWorkerWithIdOnly = await prisma.workforceWorker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkforceWorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkforceWorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkforceWorker.
     * @param {WorkforceWorkerUpsertArgs} args - Arguments to update or create a WorkforceWorker.
     * @example
     * // Update or create a WorkforceWorker
     * const workforceWorker = await prisma.workforceWorker.upsert({
     *   create: {
     *     // ... data to create a WorkforceWorker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkforceWorker we want to update
     *   }
     * })
     */
    upsert<T extends WorkforceWorkerUpsertArgs>(args: SelectSubset<T, WorkforceWorkerUpsertArgs<ExtArgs>>): Prisma__WorkforceWorkerClient<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkforceWorkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceWorkerCountArgs} args - Arguments to filter WorkforceWorkers to count.
     * @example
     * // Count the number of WorkforceWorkers
     * const count = await prisma.workforceWorker.count({
     *   where: {
     *     // ... the filter for the WorkforceWorkers we want to count
     *   }
     * })
    **/
    count<T extends WorkforceWorkerCountArgs>(
      args?: Subset<T, WorkforceWorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkforceWorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkforceWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceWorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkforceWorkerAggregateArgs>(args: Subset<T, WorkforceWorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkforceWorkerAggregateType<T>>

    /**
     * Group by WorkforceWorker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkforceWorkerGroupByArgs} args - Group by arguments.
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
      T extends WorkforceWorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkforceWorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkforceWorkerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkforceWorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkforceWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkforceWorker model
   */
  readonly fields: WorkforceWorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkforceWorker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkforceWorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workforce<T extends WorkForceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkForceDefaultArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkforceWorker model
   */
  interface WorkforceWorkerFieldRefs {
    readonly id: FieldRef<"WorkforceWorker", 'String'>
    readonly defaultWage: FieldRef<"WorkforceWorker", 'Int'>
    readonly role: FieldRef<"WorkforceWorker", 'WorkerRoleEnum'>
    readonly workforceId: FieldRef<"WorkforceWorker", 'String'>
    readonly userId: FieldRef<"WorkforceWorker", 'String'>
    readonly createdAt: FieldRef<"WorkforceWorker", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkforceWorker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkforceWorker findUnique
   */
  export type WorkforceWorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceWorker to fetch.
     */
    where: WorkforceWorkerWhereUniqueInput
  }

  /**
   * WorkforceWorker findUniqueOrThrow
   */
  export type WorkforceWorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceWorker to fetch.
     */
    where: WorkforceWorkerWhereUniqueInput
  }

  /**
   * WorkforceWorker findFirst
   */
  export type WorkforceWorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceWorker to fetch.
     */
    where?: WorkforceWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceWorkers to fetch.
     */
    orderBy?: WorkforceWorkerOrderByWithRelationInput | WorkforceWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceWorkers.
     */
    cursor?: WorkforceWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceWorkers.
     */
    distinct?: WorkforceWorkerScalarFieldEnum | WorkforceWorkerScalarFieldEnum[]
  }

  /**
   * WorkforceWorker findFirstOrThrow
   */
  export type WorkforceWorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceWorker to fetch.
     */
    where?: WorkforceWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceWorkers to fetch.
     */
    orderBy?: WorkforceWorkerOrderByWithRelationInput | WorkforceWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkforceWorkers.
     */
    cursor?: WorkforceWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceWorkers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkforceWorkers.
     */
    distinct?: WorkforceWorkerScalarFieldEnum | WorkforceWorkerScalarFieldEnum[]
  }

  /**
   * WorkforceWorker findMany
   */
  export type WorkforceWorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * Filter, which WorkforceWorkers to fetch.
     */
    where?: WorkforceWorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkforceWorkers to fetch.
     */
    orderBy?: WorkforceWorkerOrderByWithRelationInput | WorkforceWorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkforceWorkers.
     */
    cursor?: WorkforceWorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkforceWorkers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkforceWorkers.
     */
    skip?: number
    distinct?: WorkforceWorkerScalarFieldEnum | WorkforceWorkerScalarFieldEnum[]
  }

  /**
   * WorkforceWorker create
   */
  export type WorkforceWorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkforceWorker.
     */
    data: XOR<WorkforceWorkerCreateInput, WorkforceWorkerUncheckedCreateInput>
  }

  /**
   * WorkforceWorker createMany
   */
  export type WorkforceWorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkforceWorkers.
     */
    data: WorkforceWorkerCreateManyInput | WorkforceWorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkforceWorker createManyAndReturn
   */
  export type WorkforceWorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * The data used to create many WorkforceWorkers.
     */
    data: WorkforceWorkerCreateManyInput | WorkforceWorkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceWorker update
   */
  export type WorkforceWorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkforceWorker.
     */
    data: XOR<WorkforceWorkerUpdateInput, WorkforceWorkerUncheckedUpdateInput>
    /**
     * Choose, which WorkforceWorker to update.
     */
    where: WorkforceWorkerWhereUniqueInput
  }

  /**
   * WorkforceWorker updateMany
   */
  export type WorkforceWorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkforceWorkers.
     */
    data: XOR<WorkforceWorkerUpdateManyMutationInput, WorkforceWorkerUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceWorkers to update
     */
    where?: WorkforceWorkerWhereInput
    /**
     * Limit how many WorkforceWorkers to update.
     */
    limit?: number
  }

  /**
   * WorkforceWorker updateManyAndReturn
   */
  export type WorkforceWorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * The data used to update WorkforceWorkers.
     */
    data: XOR<WorkforceWorkerUpdateManyMutationInput, WorkforceWorkerUncheckedUpdateManyInput>
    /**
     * Filter which WorkforceWorkers to update
     */
    where?: WorkforceWorkerWhereInput
    /**
     * Limit how many WorkforceWorkers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkforceWorker upsert
   */
  export type WorkforceWorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkforceWorker to update in case it exists.
     */
    where: WorkforceWorkerWhereUniqueInput
    /**
     * In case the WorkforceWorker found by the `where` argument doesn't exist, create a new WorkforceWorker with this data.
     */
    create: XOR<WorkforceWorkerCreateInput, WorkforceWorkerUncheckedCreateInput>
    /**
     * In case the WorkforceWorker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkforceWorkerUpdateInput, WorkforceWorkerUncheckedUpdateInput>
  }

  /**
   * WorkforceWorker delete
   */
  export type WorkforceWorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    /**
     * Filter which WorkforceWorker to delete.
     */
    where: WorkforceWorkerWhereUniqueInput
  }

  /**
   * WorkforceWorker deleteMany
   */
  export type WorkforceWorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkforceWorkers to delete
     */
    where?: WorkforceWorkerWhereInput
    /**
     * Limit how many WorkforceWorkers to delete.
     */
    limit?: number
  }

  /**
   * WorkforceWorker without action
   */
  export type WorkforceWorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
  }


  /**
   * Model WorkForce
   */

  export type AggregateWorkForce = {
    _count: WorkForceCountAggregateOutputType | null
    _avg: WorkForceAvgAggregateOutputType | null
    _sum: WorkForceSumAggregateOutputType | null
    _min: WorkForceMinAggregateOutputType | null
    _max: WorkForceMaxAggregateOutputType | null
  }

  export type WorkForceAvgAggregateOutputType = {
    maxMemberCount: number | null
  }

  export type WorkForceSumAggregateOutputType = {
    maxMemberCount: number | null
  }

  export type WorkForceMinAggregateOutputType = {
    id: string | null
    name: string | null
    maxMemberCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkForceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    maxMemberCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkForceCountAggregateOutputType = {
    id: number
    name: number
    maxMemberCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkForceAvgAggregateInputType = {
    maxMemberCount?: true
  }

  export type WorkForceSumAggregateInputType = {
    maxMemberCount?: true
  }

  export type WorkForceMinAggregateInputType = {
    id?: true
    name?: true
    maxMemberCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkForceMaxAggregateInputType = {
    id?: true
    name?: true
    maxMemberCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkForceCountAggregateInputType = {
    id?: true
    name?: true
    maxMemberCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkForceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkForce to aggregate.
     */
    where?: WorkForceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkForces to fetch.
     */
    orderBy?: WorkForceOrderByWithRelationInput | WorkForceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkForceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkForces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkForces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkForces
    **/
    _count?: true | WorkForceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkForceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkForceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkForceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkForceMaxAggregateInputType
  }

  export type GetWorkForceAggregateType<T extends WorkForceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkForce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkForce[P]>
      : GetScalarType<T[P], AggregateWorkForce[P]>
  }




  export type WorkForceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkForceWhereInput
    orderBy?: WorkForceOrderByWithAggregationInput | WorkForceOrderByWithAggregationInput[]
    by: WorkForceScalarFieldEnum[] | WorkForceScalarFieldEnum
    having?: WorkForceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkForceCountAggregateInputType | true
    _avg?: WorkForceAvgAggregateInputType
    _sum?: WorkForceSumAggregateInputType
    _min?: WorkForceMinAggregateInputType
    _max?: WorkForceMaxAggregateInputType
  }

  export type WorkForceGroupByOutputType = {
    id: string
    name: string
    maxMemberCount: number
    createdAt: Date
    updatedAt: Date
    _count: WorkForceCountAggregateOutputType | null
    _avg: WorkForceAvgAggregateOutputType | null
    _sum: WorkForceSumAggregateOutputType | null
    _min: WorkForceMinAggregateOutputType | null
    _max: WorkForceMaxAggregateOutputType | null
  }

  type GetWorkForceGroupByPayload<T extends WorkForceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkForceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkForceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkForceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkForceGroupByOutputType[P]>
        }
      >
    >


  export type WorkForceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maxMemberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workforceWorkers?: boolean | WorkForce$workforceWorkersArgs<ExtArgs>
    _count?: boolean | WorkForceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workForce"]>

  export type WorkForceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maxMemberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workForce"]>

  export type WorkForceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maxMemberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workForce"]>

  export type WorkForceSelectScalar = {
    id?: boolean
    name?: boolean
    maxMemberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkForceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "maxMemberCount" | "createdAt" | "updatedAt", ExtArgs["result"]["workForce"]>
  export type WorkForceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workforceWorkers?: boolean | WorkForce$workforceWorkersArgs<ExtArgs>
    _count?: boolean | WorkForceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkForceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkForceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkForcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkForce"
    objects: {
      workforceWorkers: Prisma.$WorkforceWorkerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      maxMemberCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workForce"]>
    composites: {}
  }

  type WorkForceGetPayload<S extends boolean | null | undefined | WorkForceDefaultArgs> = $Result.GetResult<Prisma.$WorkForcePayload, S>

  type WorkForceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkForceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkForceCountAggregateInputType | true
    }

  export interface WorkForceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkForce'], meta: { name: 'WorkForce' } }
    /**
     * Find zero or one WorkForce that matches the filter.
     * @param {WorkForceFindUniqueArgs} args - Arguments to find a WorkForce
     * @example
     * // Get one WorkForce
     * const workForce = await prisma.workForce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkForceFindUniqueArgs>(args: SelectSubset<T, WorkForceFindUniqueArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkForce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkForceFindUniqueOrThrowArgs} args - Arguments to find a WorkForce
     * @example
     * // Get one WorkForce
     * const workForce = await prisma.workForce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkForceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkForceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkForce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkForceFindFirstArgs} args - Arguments to find a WorkForce
     * @example
     * // Get one WorkForce
     * const workForce = await prisma.workForce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkForceFindFirstArgs>(args?: SelectSubset<T, WorkForceFindFirstArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkForce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkForceFindFirstOrThrowArgs} args - Arguments to find a WorkForce
     * @example
     * // Get one WorkForce
     * const workForce = await prisma.workForce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkForceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkForceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkForces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkForceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkForces
     * const workForces = await prisma.workForce.findMany()
     * 
     * // Get first 10 WorkForces
     * const workForces = await prisma.workForce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workForceWithIdOnly = await prisma.workForce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkForceFindManyArgs>(args?: SelectSubset<T, WorkForceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkForce.
     * @param {WorkForceCreateArgs} args - Arguments to create a WorkForce.
     * @example
     * // Create one WorkForce
     * const WorkForce = await prisma.workForce.create({
     *   data: {
     *     // ... data to create a WorkForce
     *   }
     * })
     * 
     */
    create<T extends WorkForceCreateArgs>(args: SelectSubset<T, WorkForceCreateArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkForces.
     * @param {WorkForceCreateManyArgs} args - Arguments to create many WorkForces.
     * @example
     * // Create many WorkForces
     * const workForce = await prisma.workForce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkForceCreateManyArgs>(args?: SelectSubset<T, WorkForceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkForces and returns the data saved in the database.
     * @param {WorkForceCreateManyAndReturnArgs} args - Arguments to create many WorkForces.
     * @example
     * // Create many WorkForces
     * const workForce = await prisma.workForce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkForces and only return the `id`
     * const workForceWithIdOnly = await prisma.workForce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkForceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkForceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkForce.
     * @param {WorkForceDeleteArgs} args - Arguments to delete one WorkForce.
     * @example
     * // Delete one WorkForce
     * const WorkForce = await prisma.workForce.delete({
     *   where: {
     *     // ... filter to delete one WorkForce
     *   }
     * })
     * 
     */
    delete<T extends WorkForceDeleteArgs>(args: SelectSubset<T, WorkForceDeleteArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkForce.
     * @param {WorkForceUpdateArgs} args - Arguments to update one WorkForce.
     * @example
     * // Update one WorkForce
     * const workForce = await prisma.workForce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkForceUpdateArgs>(args: SelectSubset<T, WorkForceUpdateArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkForces.
     * @param {WorkForceDeleteManyArgs} args - Arguments to filter WorkForces to delete.
     * @example
     * // Delete a few WorkForces
     * const { count } = await prisma.workForce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkForceDeleteManyArgs>(args?: SelectSubset<T, WorkForceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkForces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkForceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkForces
     * const workForce = await prisma.workForce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkForceUpdateManyArgs>(args: SelectSubset<T, WorkForceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkForces and returns the data updated in the database.
     * @param {WorkForceUpdateManyAndReturnArgs} args - Arguments to update many WorkForces.
     * @example
     * // Update many WorkForces
     * const workForce = await prisma.workForce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkForces and only return the `id`
     * const workForceWithIdOnly = await prisma.workForce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkForceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkForceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkForce.
     * @param {WorkForceUpsertArgs} args - Arguments to update or create a WorkForce.
     * @example
     * // Update or create a WorkForce
     * const workForce = await prisma.workForce.upsert({
     *   create: {
     *     // ... data to create a WorkForce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkForce we want to update
     *   }
     * })
     */
    upsert<T extends WorkForceUpsertArgs>(args: SelectSubset<T, WorkForceUpsertArgs<ExtArgs>>): Prisma__WorkForceClient<$Result.GetResult<Prisma.$WorkForcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkForces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkForceCountArgs} args - Arguments to filter WorkForces to count.
     * @example
     * // Count the number of WorkForces
     * const count = await prisma.workForce.count({
     *   where: {
     *     // ... the filter for the WorkForces we want to count
     *   }
     * })
    **/
    count<T extends WorkForceCountArgs>(
      args?: Subset<T, WorkForceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkForceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkForce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkForceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkForceAggregateArgs>(args: Subset<T, WorkForceAggregateArgs>): Prisma.PrismaPromise<GetWorkForceAggregateType<T>>

    /**
     * Group by WorkForce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkForceGroupByArgs} args - Group by arguments.
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
      T extends WorkForceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkForceGroupByArgs['orderBy'] }
        : { orderBy?: WorkForceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkForceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkForceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkForce model
   */
  readonly fields: WorkForceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkForce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkForceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workforceWorkers<T extends WorkForce$workforceWorkersArgs<ExtArgs> = {}>(args?: Subset<T, WorkForce$workforceWorkersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkforceWorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkForce model
   */
  interface WorkForceFieldRefs {
    readonly id: FieldRef<"WorkForce", 'String'>
    readonly name: FieldRef<"WorkForce", 'String'>
    readonly maxMemberCount: FieldRef<"WorkForce", 'Int'>
    readonly createdAt: FieldRef<"WorkForce", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkForce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkForce findUnique
   */
  export type WorkForceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * Filter, which WorkForce to fetch.
     */
    where: WorkForceWhereUniqueInput
  }

  /**
   * WorkForce findUniqueOrThrow
   */
  export type WorkForceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * Filter, which WorkForce to fetch.
     */
    where: WorkForceWhereUniqueInput
  }

  /**
   * WorkForce findFirst
   */
  export type WorkForceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * Filter, which WorkForce to fetch.
     */
    where?: WorkForceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkForces to fetch.
     */
    orderBy?: WorkForceOrderByWithRelationInput | WorkForceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkForces.
     */
    cursor?: WorkForceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkForces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkForces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkForces.
     */
    distinct?: WorkForceScalarFieldEnum | WorkForceScalarFieldEnum[]
  }

  /**
   * WorkForce findFirstOrThrow
   */
  export type WorkForceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * Filter, which WorkForce to fetch.
     */
    where?: WorkForceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkForces to fetch.
     */
    orderBy?: WorkForceOrderByWithRelationInput | WorkForceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkForces.
     */
    cursor?: WorkForceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkForces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkForces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkForces.
     */
    distinct?: WorkForceScalarFieldEnum | WorkForceScalarFieldEnum[]
  }

  /**
   * WorkForce findMany
   */
  export type WorkForceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * Filter, which WorkForces to fetch.
     */
    where?: WorkForceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkForces to fetch.
     */
    orderBy?: WorkForceOrderByWithRelationInput | WorkForceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkForces.
     */
    cursor?: WorkForceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkForces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkForces.
     */
    skip?: number
    distinct?: WorkForceScalarFieldEnum | WorkForceScalarFieldEnum[]
  }

  /**
   * WorkForce create
   */
  export type WorkForceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkForce.
     */
    data: XOR<WorkForceCreateInput, WorkForceUncheckedCreateInput>
  }

  /**
   * WorkForce createMany
   */
  export type WorkForceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkForces.
     */
    data: WorkForceCreateManyInput | WorkForceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkForce createManyAndReturn
   */
  export type WorkForceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * The data used to create many WorkForces.
     */
    data: WorkForceCreateManyInput | WorkForceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkForce update
   */
  export type WorkForceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkForce.
     */
    data: XOR<WorkForceUpdateInput, WorkForceUncheckedUpdateInput>
    /**
     * Choose, which WorkForce to update.
     */
    where: WorkForceWhereUniqueInput
  }

  /**
   * WorkForce updateMany
   */
  export type WorkForceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkForces.
     */
    data: XOR<WorkForceUpdateManyMutationInput, WorkForceUncheckedUpdateManyInput>
    /**
     * Filter which WorkForces to update
     */
    where?: WorkForceWhereInput
    /**
     * Limit how many WorkForces to update.
     */
    limit?: number
  }

  /**
   * WorkForce updateManyAndReturn
   */
  export type WorkForceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * The data used to update WorkForces.
     */
    data: XOR<WorkForceUpdateManyMutationInput, WorkForceUncheckedUpdateManyInput>
    /**
     * Filter which WorkForces to update
     */
    where?: WorkForceWhereInput
    /**
     * Limit how many WorkForces to update.
     */
    limit?: number
  }

  /**
   * WorkForce upsert
   */
  export type WorkForceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkForce to update in case it exists.
     */
    where: WorkForceWhereUniqueInput
    /**
     * In case the WorkForce found by the `where` argument doesn't exist, create a new WorkForce with this data.
     */
    create: XOR<WorkForceCreateInput, WorkForceUncheckedCreateInput>
    /**
     * In case the WorkForce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkForceUpdateInput, WorkForceUncheckedUpdateInput>
  }

  /**
   * WorkForce delete
   */
  export type WorkForceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
    /**
     * Filter which WorkForce to delete.
     */
    where: WorkForceWhereUniqueInput
  }

  /**
   * WorkForce deleteMany
   */
  export type WorkForceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkForces to delete
     */
    where?: WorkForceWhereInput
    /**
     * Limit how many WorkForces to delete.
     */
    limit?: number
  }

  /**
   * WorkForce.workforceWorkers
   */
  export type WorkForce$workforceWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkforceWorker
     */
    select?: WorkforceWorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkforceWorker
     */
    omit?: WorkforceWorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkforceWorkerInclude<ExtArgs> | null
    where?: WorkforceWorkerWhereInput
    orderBy?: WorkforceWorkerOrderByWithRelationInput | WorkforceWorkerOrderByWithRelationInput[]
    cursor?: WorkforceWorkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkforceWorkerScalarFieldEnum | WorkforceWorkerScalarFieldEnum[]
  }

  /**
   * WorkForce without action
   */
  export type WorkForceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkForce
     */
    select?: WorkForceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkForce
     */
    omit?: WorkForceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkForceInclude<ExtArgs> | null
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


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SiteAddressScalarFieldEnum: {
    siteId: 'siteId',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteAddressScalarFieldEnum = (typeof SiteAddressScalarFieldEnum)[keyof typeof SiteAddressScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    estimatedBudget: 'estimatedBudget',
    startDate: 'startDate',
    expectedEndDate: 'expectedEndDate',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SiteProfileScalarFieldEnum: {
    siteId: 'siteId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteProfileScalarFieldEnum = (typeof SiteProfileScalarFieldEnum)[keyof typeof SiteProfileScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    userProfileId: 'userProfileId',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    password: 'password',
    countryCode: 'countryCode',
    mobile: 'mobile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    addressId: 'addressId',
    availableForWork: 'availableForWork',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const WorkforceWorkerScalarFieldEnum: {
    id: 'id',
    defaultWage: 'defaultWage',
    role: 'role',
    workforceId: 'workforceId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkforceWorkerScalarFieldEnum = (typeof WorkforceWorkerScalarFieldEnum)[keyof typeof WorkforceWorkerScalarFieldEnum]


  export const WorkForceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    maxMemberCount: 'maxMemberCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkForceScalarFieldEnum = (typeof WorkForceScalarFieldEnum)[keyof typeof WorkForceScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WorkerRoleEnum'
   */
  export type EnumWorkerRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkerRoleEnum'>
    


  /**
   * Reference to a field of type 'WorkerRoleEnum[]'
   */
  export type ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkerRoleEnum[]'>
    


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


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    mobile?: StringFilter<"Client"> | string
    createdById?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    sites?: SiteListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    sites?: SiteOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    createdById?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    sites?: SiteListRelationFilter
  }, "id" | "mobile">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    mobile?: StringWithAggregatesFilter<"Client"> | string
    createdById?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type SiteAddressWhereInput = {
    AND?: SiteAddressWhereInput | SiteAddressWhereInput[]
    OR?: SiteAddressWhereInput[]
    NOT?: SiteAddressWhereInput | SiteAddressWhereInput[]
    siteId?: StringFilter<"SiteAddress"> | string
    addressLine1?: StringNullableFilter<"SiteAddress"> | string | null
    addressLine2?: StringNullableFilter<"SiteAddress"> | string | null
    city?: StringNullableFilter<"SiteAddress"> | string | null
    state?: StringNullableFilter<"SiteAddress"> | string | null
    pincode?: StringNullableFilter<"SiteAddress"> | string | null
    country?: StringNullableFilter<"SiteAddress"> | string | null
    createdAt?: DateTimeFilter<"SiteAddress"> | Date | string
    updatedAt?: DateTimeFilter<"SiteAddress"> | Date | string
    siteProfiles?: XOR<SiteProfileScalarRelationFilter, SiteProfileWhereInput>
  }

  export type SiteAddressOrderByWithRelationInput = {
    siteId?: SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteProfiles?: SiteProfileOrderByWithRelationInput
  }

  export type SiteAddressWhereUniqueInput = Prisma.AtLeast<{
    siteId?: string
    AND?: SiteAddressWhereInput | SiteAddressWhereInput[]
    OR?: SiteAddressWhereInput[]
    NOT?: SiteAddressWhereInput | SiteAddressWhereInput[]
    addressLine1?: StringNullableFilter<"SiteAddress"> | string | null
    addressLine2?: StringNullableFilter<"SiteAddress"> | string | null
    city?: StringNullableFilter<"SiteAddress"> | string | null
    state?: StringNullableFilter<"SiteAddress"> | string | null
    pincode?: StringNullableFilter<"SiteAddress"> | string | null
    country?: StringNullableFilter<"SiteAddress"> | string | null
    createdAt?: DateTimeFilter<"SiteAddress"> | Date | string
    updatedAt?: DateTimeFilter<"SiteAddress"> | Date | string
    siteProfiles?: XOR<SiteProfileScalarRelationFilter, SiteProfileWhereInput>
  }, "siteId">

  export type SiteAddressOrderByWithAggregationInput = {
    siteId?: SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteAddressCountOrderByAggregateInput
    _max?: SiteAddressMaxOrderByAggregateInput
    _min?: SiteAddressMinOrderByAggregateInput
  }

  export type SiteAddressScalarWhereWithAggregatesInput = {
    AND?: SiteAddressScalarWhereWithAggregatesInput | SiteAddressScalarWhereWithAggregatesInput[]
    OR?: SiteAddressScalarWhereWithAggregatesInput[]
    NOT?: SiteAddressScalarWhereWithAggregatesInput | SiteAddressScalarWhereWithAggregatesInput[]
    siteId?: StringWithAggregatesFilter<"SiteAddress"> | string
    addressLine1?: StringNullableWithAggregatesFilter<"SiteAddress"> | string | null
    addressLine2?: StringNullableWithAggregatesFilter<"SiteAddress"> | string | null
    city?: StringNullableWithAggregatesFilter<"SiteAddress"> | string | null
    state?: StringNullableWithAggregatesFilter<"SiteAddress"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"SiteAddress"> | string | null
    country?: StringNullableWithAggregatesFilter<"SiteAddress"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SiteAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteAddress"> | Date | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    estimatedBudget?: IntNullableFilter<"Site"> | number | null
    startDate?: DateTimeNullableFilter<"Site"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"Site"> | Date | string | null
    clientId?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    profile?: XOR<SiteProfileNullableScalarRelationFilter, SiteProfileWhereInput> | null
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    estimatedBudget?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    profile?: SiteProfileOrderByWithRelationInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    estimatedBudget?: IntNullableFilter<"Site"> | number | null
    startDate?: DateTimeNullableFilter<"Site"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"Site"> | Date | string | null
    clientId?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    profile?: XOR<SiteProfileNullableScalarRelationFilter, SiteProfileWhereInput> | null
  }, "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    estimatedBudget?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expectedEndDate?: SortOrderInput | SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    estimatedBudget?: IntNullableWithAggregatesFilter<"Site"> | number | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Site"> | Date | string | null
    expectedEndDate?: DateTimeNullableWithAggregatesFilter<"Site"> | Date | string | null
    clientId?: StringWithAggregatesFilter<"Site"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
  }

  export type SiteProfileWhereInput = {
    AND?: SiteProfileWhereInput | SiteProfileWhereInput[]
    OR?: SiteProfileWhereInput[]
    NOT?: SiteProfileWhereInput | SiteProfileWhereInput[]
    siteId?: StringFilter<"SiteProfile"> | string
    createdAt?: DateTimeFilter<"SiteProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SiteProfile"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    address?: XOR<SiteAddressNullableScalarRelationFilter, SiteAddressWhereInput> | null
  }

  export type SiteProfileOrderByWithRelationInput = {
    siteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    site?: SiteOrderByWithRelationInput
    address?: SiteAddressOrderByWithRelationInput
  }

  export type SiteProfileWhereUniqueInput = Prisma.AtLeast<{
    siteId?: string
    AND?: SiteProfileWhereInput | SiteProfileWhereInput[]
    OR?: SiteProfileWhereInput[]
    NOT?: SiteProfileWhereInput | SiteProfileWhereInput[]
    createdAt?: DateTimeFilter<"SiteProfile"> | Date | string
    updatedAt?: DateTimeFilter<"SiteProfile"> | Date | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    address?: XOR<SiteAddressNullableScalarRelationFilter, SiteAddressWhereInput> | null
  }, "siteId">

  export type SiteProfileOrderByWithAggregationInput = {
    siteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteProfileCountOrderByAggregateInput
    _max?: SiteProfileMaxOrderByAggregateInput
    _min?: SiteProfileMinOrderByAggregateInput
  }

  export type SiteProfileScalarWhereWithAggregatesInput = {
    AND?: SiteProfileScalarWhereWithAggregatesInput | SiteProfileScalarWhereWithAggregatesInput[]
    OR?: SiteProfileScalarWhereWithAggregatesInput[]
    NOT?: SiteProfileScalarWhereWithAggregatesInput | SiteProfileScalarWhereWithAggregatesInput[]
    siteId?: StringWithAggregatesFilter<"SiteProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteProfile"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    userProfileId?: StringFilter<"Address"> | string
    addressLine1?: StringNullableFilter<"Address"> | string | null
    addressLine2?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    pincode?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    userProfile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    userProfileId?: SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userProfile?: UserProfileOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    userProfileId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    addressLine1?: StringNullableFilter<"Address"> | string | null
    addressLine2?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    pincode?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    userProfile?: XOR<UserProfileScalarRelationFilter, UserProfileWhereInput>
  }, "userProfileId">

  export type AddressOrderByWithAggregationInput = {
    userProfileId?: SortOrder
    addressLine1?: SortOrderInput | SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    userProfileId?: StringWithAggregatesFilter<"Address"> | string
    addressLine1?: StringNullableWithAggregatesFilter<"Address"> | string | null
    addressLine2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringNullableWithAggregatesFilter<"Address"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    countryCode?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    clients?: ClientListRelationFilter
    workforceWorkers?: WorkforceWorkerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    clients?: ClientOrderByRelationAggregateInput
    workforceWorkers?: WorkforceWorkerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile_country_code?: UserMobile_country_codeCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    countryCode?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    clients?: ClientListRelationFilter
    workforceWorkers?: WorkforceWorkerListRelationFilter
  }, "id" | "mobile_country_code">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    countryCode?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: StringFilter<"UserProfile"> | string
    addressId?: StringNullableFilter<"UserProfile"> | string | null
    availableForWork?: BoolFilter<"UserProfile"> | boolean
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    addressId?: SortOrderInput | SortOrder
    availableForWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    addressId?: StringNullableFilter<"UserProfile"> | string | null
    availableForWork?: BoolFilter<"UserProfile"> | boolean
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }, "userId">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    addressId?: SortOrderInput | SortOrder
    availableForWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    addressId?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    availableForWork?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type WorkforceWorkerWhereInput = {
    AND?: WorkforceWorkerWhereInput | WorkforceWorkerWhereInput[]
    OR?: WorkforceWorkerWhereInput[]
    NOT?: WorkforceWorkerWhereInput | WorkforceWorkerWhereInput[]
    id?: StringFilter<"WorkforceWorker"> | string
    defaultWage?: IntFilter<"WorkforceWorker"> | number
    role?: EnumWorkerRoleEnumFilter<"WorkforceWorker"> | $Enums.WorkerRoleEnum
    workforceId?: StringFilter<"WorkforceWorker"> | string
    userId?: StringFilter<"WorkforceWorker"> | string
    createdAt?: DateTimeFilter<"WorkforceWorker"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceWorker"> | Date | string
    workforce?: XOR<WorkForceScalarRelationFilter, WorkForceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkforceWorkerOrderByWithRelationInput = {
    id?: SortOrder
    defaultWage?: SortOrder
    role?: SortOrder
    workforceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workforce?: WorkForceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WorkforceWorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkforceWorkerWhereInput | WorkforceWorkerWhereInput[]
    OR?: WorkforceWorkerWhereInput[]
    NOT?: WorkforceWorkerWhereInput | WorkforceWorkerWhereInput[]
    defaultWage?: IntFilter<"WorkforceWorker"> | number
    role?: EnumWorkerRoleEnumFilter<"WorkforceWorker"> | $Enums.WorkerRoleEnum
    workforceId?: StringFilter<"WorkforceWorker"> | string
    userId?: StringFilter<"WorkforceWorker"> | string
    createdAt?: DateTimeFilter<"WorkforceWorker"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceWorker"> | Date | string
    workforce?: XOR<WorkForceScalarRelationFilter, WorkForceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkforceWorkerOrderByWithAggregationInput = {
    id?: SortOrder
    defaultWage?: SortOrder
    role?: SortOrder
    workforceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkforceWorkerCountOrderByAggregateInput
    _avg?: WorkforceWorkerAvgOrderByAggregateInput
    _max?: WorkforceWorkerMaxOrderByAggregateInput
    _min?: WorkforceWorkerMinOrderByAggregateInput
    _sum?: WorkforceWorkerSumOrderByAggregateInput
  }

  export type WorkforceWorkerScalarWhereWithAggregatesInput = {
    AND?: WorkforceWorkerScalarWhereWithAggregatesInput | WorkforceWorkerScalarWhereWithAggregatesInput[]
    OR?: WorkforceWorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkforceWorkerScalarWhereWithAggregatesInput | WorkforceWorkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkforceWorker"> | string
    defaultWage?: IntWithAggregatesFilter<"WorkforceWorker"> | number
    role?: EnumWorkerRoleEnumWithAggregatesFilter<"WorkforceWorker"> | $Enums.WorkerRoleEnum
    workforceId?: StringWithAggregatesFilter<"WorkforceWorker"> | string
    userId?: StringWithAggregatesFilter<"WorkforceWorker"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkforceWorker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkforceWorker"> | Date | string
  }

  export type WorkForceWhereInput = {
    AND?: WorkForceWhereInput | WorkForceWhereInput[]
    OR?: WorkForceWhereInput[]
    NOT?: WorkForceWhereInput | WorkForceWhereInput[]
    id?: StringFilter<"WorkForce"> | string
    name?: StringFilter<"WorkForce"> | string
    maxMemberCount?: IntFilter<"WorkForce"> | number
    createdAt?: DateTimeFilter<"WorkForce"> | Date | string
    updatedAt?: DateTimeFilter<"WorkForce"> | Date | string
    workforceWorkers?: WorkforceWorkerListRelationFilter
  }

  export type WorkForceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    maxMemberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workforceWorkers?: WorkforceWorkerOrderByRelationAggregateInput
  }

  export type WorkForceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkForceWhereInput | WorkForceWhereInput[]
    OR?: WorkForceWhereInput[]
    NOT?: WorkForceWhereInput | WorkForceWhereInput[]
    name?: StringFilter<"WorkForce"> | string
    maxMemberCount?: IntFilter<"WorkForce"> | number
    createdAt?: DateTimeFilter<"WorkForce"> | Date | string
    updatedAt?: DateTimeFilter<"WorkForce"> | Date | string
    workforceWorkers?: WorkforceWorkerListRelationFilter
  }, "id">

  export type WorkForceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    maxMemberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkForceCountOrderByAggregateInput
    _avg?: WorkForceAvgOrderByAggregateInput
    _max?: WorkForceMaxOrderByAggregateInput
    _min?: WorkForceMinOrderByAggregateInput
    _sum?: WorkForceSumOrderByAggregateInput
  }

  export type WorkForceScalarWhereWithAggregatesInput = {
    AND?: WorkForceScalarWhereWithAggregatesInput | WorkForceScalarWhereWithAggregatesInput[]
    OR?: WorkForceScalarWhereWithAggregatesInput[]
    NOT?: WorkForceScalarWhereWithAggregatesInput | WorkForceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkForce"> | string
    name?: StringWithAggregatesFilter<"WorkForce"> | string
    maxMemberCount?: IntWithAggregatesFilter<"WorkForce"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkForce"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkForce"> | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutClientsInput
    sites?: SiteCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    mobile: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sites?: SiteUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutClientsNestedInput
    sites?: SiteUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    mobile: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteAddressCreateInput = {
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    siteProfiles: SiteProfileCreateNestedOneWithoutAddressInput
  }

  export type SiteAddressUncheckedCreateInput = {
    siteId: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteAddressUpdateInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteProfiles?: SiteProfileUpdateOneRequiredWithoutAddressNestedInput
  }

  export type SiteAddressUncheckedUpdateInput = {
    siteId?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteAddressCreateManyInput = {
    siteId: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteAddressUpdateManyMutationInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteAddressUncheckedUpdateManyInput = {
    siteId?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutSitesInput
    profile?: SiteProfileCreateNestedOneWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SiteProfileUncheckedCreateNestedOneWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
    profile?: SiteProfileUpdateOneWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SiteProfileUncheckedUpdateOneWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutProfileInput
    address?: SiteAddressCreateNestedOneWithoutSiteProfilesInput
  }

  export type SiteProfileUncheckedCreateInput = {
    siteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: SiteAddressUncheckedCreateNestedOneWithoutSiteProfilesInput
  }

  export type SiteProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutProfileNestedInput
    address?: SiteAddressUpdateOneWithoutSiteProfilesNestedInput
  }

  export type SiteProfileUncheckedUpdateInput = {
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: SiteAddressUncheckedUpdateOneWithoutSiteProfilesNestedInput
  }

  export type SiteProfileCreateManyInput = {
    siteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteProfileUncheckedUpdateManyInput = {
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile: UserProfileCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    userProfileId: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    userProfileId?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    userProfileId: string
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    userProfileId?: StringFieldUpdateOperationsInput | string
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    clients?: ClientCreateNestedManyWithoutCreatedByInput
    workforceWorkers?: WorkforceWorkerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    workforceWorkers?: WorkforceWorkerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutCreatedByNestedInput
    workforceWorkers?: WorkforceWorkerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    workforceWorkers?: WorkforceWorkerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    addressId?: string | null
    availableForWork?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    address?: AddressCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    addressId?: string | null
    availableForWork?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUpdateInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    address?: AddressUpdateOneWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutUserProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    userId: string
    addressId?: string | null
    availableForWork?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceWorkerCreateInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    workforce: WorkForceCreateNestedOneWithoutWorkforceWorkersInput
    user: UserCreateNestedOneWithoutWorkforceWorkersInput
  }

  export type WorkforceWorkerUncheckedCreateInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    workforceId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceWorkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workforce?: WorkForceUpdateOneRequiredWithoutWorkforceWorkersNestedInput
    user?: UserUpdateOneRequiredWithoutWorkforceWorkersNestedInput
  }

  export type WorkforceWorkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    workforceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceWorkerCreateManyInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    workforceId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceWorkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceWorkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    workforceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkForceCreateInput = {
    id?: string
    name: string
    maxMemberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workforceWorkers?: WorkforceWorkerCreateNestedManyWithoutWorkforceInput
  }

  export type WorkForceUncheckedCreateInput = {
    id?: string
    name: string
    maxMemberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workforceWorkers?: WorkforceWorkerUncheckedCreateNestedManyWithoutWorkforceInput
  }

  export type WorkForceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMemberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workforceWorkers?: WorkforceWorkerUpdateManyWithoutWorkforceNestedInput
  }

  export type WorkForceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMemberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workforceWorkers?: WorkforceWorkerUncheckedUpdateManyWithoutWorkforceNestedInput
  }

  export type WorkForceCreateManyInput = {
    id?: string
    name: string
    maxMemberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkForceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMemberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkForceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMemberCount?: IntFieldUpdateOperationsInput | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    createdById?: SortOrder
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
  }

  export type SiteProfileScalarRelationFilter = {
    is?: SiteProfileWhereInput
    isNot?: SiteProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SiteAddressCountOrderByAggregateInput = {
    siteId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteAddressMaxOrderByAggregateInput = {
    siteId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteAddressMinOrderByAggregateInput = {
    siteId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type SiteProfileNullableScalarRelationFilter = {
    is?: SiteProfileWhereInput | null
    isNot?: SiteProfileWhereInput | null
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estimatedBudget?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    estimatedBudget?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estimatedBudget?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estimatedBudget?: SortOrder
    startDate?: SortOrder
    expectedEndDate?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    estimatedBudget?: SortOrder
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
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type SiteAddressNullableScalarRelationFilter = {
    is?: SiteAddressWhereInput | null
    isNot?: SiteAddressWhereInput | null
  }

  export type SiteProfileCountOrderByAggregateInput = {
    siteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteProfileMaxOrderByAggregateInput = {
    siteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteProfileMinOrderByAggregateInput = {
    siteId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileScalarRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    userProfileId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    userProfileId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    userProfileId?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type WorkforceWorkerListRelationFilter = {
    every?: WorkforceWorkerWhereInput
    some?: WorkforceWorkerWhereInput
    none?: WorkforceWorkerWhereInput
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkforceWorkerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMobile_country_codeCompoundUniqueInput = {
    mobile: string
    countryCode: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    countryCode?: SortOrder
    mobile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    addressId?: SortOrder
    availableForWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    addressId?: SortOrder
    availableForWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    addressId?: SortOrder
    availableForWork?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWorkerRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerRoleEnum | EnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerRoleEnumFilter<$PrismaModel> | $Enums.WorkerRoleEnum
  }

  export type WorkForceScalarRelationFilter = {
    is?: WorkForceWhereInput
    isNot?: WorkForceWhereInput
  }

  export type WorkforceWorkerCountOrderByAggregateInput = {
    id?: SortOrder
    defaultWage?: SortOrder
    role?: SortOrder
    workforceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceWorkerAvgOrderByAggregateInput = {
    defaultWage?: SortOrder
  }

  export type WorkforceWorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    defaultWage?: SortOrder
    role?: SortOrder
    workforceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceWorkerMinOrderByAggregateInput = {
    id?: SortOrder
    defaultWage?: SortOrder
    role?: SortOrder
    workforceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkforceWorkerSumOrderByAggregateInput = {
    defaultWage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumWorkerRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerRoleEnum | EnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.WorkerRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkerRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumWorkerRoleEnumFilter<$PrismaModel>
  }

  export type WorkForceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxMemberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkForceAvgOrderByAggregateInput = {
    maxMemberCount?: SortOrder
  }

  export type WorkForceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxMemberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkForceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxMemberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkForceSumOrderByAggregateInput = {
    maxMemberCount?: SortOrder
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type SiteCreateNestedManyWithoutClientInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type SiteUpdateManyWithoutClientNestedInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutClientInput | SiteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutClientInput | SiteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutClientInput | SiteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type SiteUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutClientInput | SiteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutClientInput | SiteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutClientInput | SiteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type SiteProfileCreateNestedOneWithoutAddressInput = {
    create?: XOR<SiteProfileCreateWithoutAddressInput, SiteProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SiteProfileCreateOrConnectWithoutAddressInput
    connect?: SiteProfileWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SiteProfileUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<SiteProfileCreateWithoutAddressInput, SiteProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SiteProfileCreateOrConnectWithoutAddressInput
    upsert?: SiteProfileUpsertWithoutAddressInput
    connect?: SiteProfileWhereUniqueInput
    update?: XOR<XOR<SiteProfileUpdateToOneWithWhereWithoutAddressInput, SiteProfileUpdateWithoutAddressInput>, SiteProfileUncheckedUpdateWithoutAddressInput>
  }

  export type ClientCreateNestedOneWithoutSitesInput = {
    create?: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSitesInput
    connect?: ClientWhereUniqueInput
  }

  export type SiteProfileCreateNestedOneWithoutSiteInput = {
    create?: XOR<SiteProfileCreateWithoutSiteInput, SiteProfileUncheckedCreateWithoutSiteInput>
    connectOrCreate?: SiteProfileCreateOrConnectWithoutSiteInput
    connect?: SiteProfileWhereUniqueInput
  }

  export type SiteProfileUncheckedCreateNestedOneWithoutSiteInput = {
    create?: XOR<SiteProfileCreateWithoutSiteInput, SiteProfileUncheckedCreateWithoutSiteInput>
    connectOrCreate?: SiteProfileCreateOrConnectWithoutSiteInput
    connect?: SiteProfileWhereUniqueInput
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

  export type ClientUpdateOneRequiredWithoutSitesNestedInput = {
    create?: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSitesInput
    upsert?: ClientUpsertWithoutSitesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSitesInput, ClientUpdateWithoutSitesInput>, ClientUncheckedUpdateWithoutSitesInput>
  }

  export type SiteProfileUpdateOneWithoutSiteNestedInput = {
    create?: XOR<SiteProfileCreateWithoutSiteInput, SiteProfileUncheckedCreateWithoutSiteInput>
    connectOrCreate?: SiteProfileCreateOrConnectWithoutSiteInput
    upsert?: SiteProfileUpsertWithoutSiteInput
    disconnect?: SiteProfileWhereInput | boolean
    delete?: SiteProfileWhereInput | boolean
    connect?: SiteProfileWhereUniqueInput
    update?: XOR<XOR<SiteProfileUpdateToOneWithWhereWithoutSiteInput, SiteProfileUpdateWithoutSiteInput>, SiteProfileUncheckedUpdateWithoutSiteInput>
  }

  export type SiteProfileUncheckedUpdateOneWithoutSiteNestedInput = {
    create?: XOR<SiteProfileCreateWithoutSiteInput, SiteProfileUncheckedCreateWithoutSiteInput>
    connectOrCreate?: SiteProfileCreateOrConnectWithoutSiteInput
    upsert?: SiteProfileUpsertWithoutSiteInput
    disconnect?: SiteProfileWhereInput | boolean
    delete?: SiteProfileWhereInput | boolean
    connect?: SiteProfileWhereUniqueInput
    update?: XOR<XOR<SiteProfileUpdateToOneWithWhereWithoutSiteInput, SiteProfileUpdateWithoutSiteInput>, SiteProfileUncheckedUpdateWithoutSiteInput>
  }

  export type SiteCreateNestedOneWithoutProfileInput = {
    create?: XOR<SiteCreateWithoutProfileInput, SiteUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SiteCreateOrConnectWithoutProfileInput
    connect?: SiteWhereUniqueInput
  }

  export type SiteAddressCreateNestedOneWithoutSiteProfilesInput = {
    create?: XOR<SiteAddressCreateWithoutSiteProfilesInput, SiteAddressUncheckedCreateWithoutSiteProfilesInput>
    connectOrCreate?: SiteAddressCreateOrConnectWithoutSiteProfilesInput
    connect?: SiteAddressWhereUniqueInput
  }

  export type SiteAddressUncheckedCreateNestedOneWithoutSiteProfilesInput = {
    create?: XOR<SiteAddressCreateWithoutSiteProfilesInput, SiteAddressUncheckedCreateWithoutSiteProfilesInput>
    connectOrCreate?: SiteAddressCreateOrConnectWithoutSiteProfilesInput
    connect?: SiteAddressWhereUniqueInput
  }

  export type SiteUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<SiteCreateWithoutProfileInput, SiteUncheckedCreateWithoutProfileInput>
    connectOrCreate?: SiteCreateOrConnectWithoutProfileInput
    upsert?: SiteUpsertWithoutProfileInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutProfileInput, SiteUpdateWithoutProfileInput>, SiteUncheckedUpdateWithoutProfileInput>
  }

  export type SiteAddressUpdateOneWithoutSiteProfilesNestedInput = {
    create?: XOR<SiteAddressCreateWithoutSiteProfilesInput, SiteAddressUncheckedCreateWithoutSiteProfilesInput>
    connectOrCreate?: SiteAddressCreateOrConnectWithoutSiteProfilesInput
    upsert?: SiteAddressUpsertWithoutSiteProfilesInput
    disconnect?: SiteAddressWhereInput | boolean
    delete?: SiteAddressWhereInput | boolean
    connect?: SiteAddressWhereUniqueInput
    update?: XOR<XOR<SiteAddressUpdateToOneWithWhereWithoutSiteProfilesInput, SiteAddressUpdateWithoutSiteProfilesInput>, SiteAddressUncheckedUpdateWithoutSiteProfilesInput>
  }

  export type SiteAddressUncheckedUpdateOneWithoutSiteProfilesNestedInput = {
    create?: XOR<SiteAddressCreateWithoutSiteProfilesInput, SiteAddressUncheckedCreateWithoutSiteProfilesInput>
    connectOrCreate?: SiteAddressCreateOrConnectWithoutSiteProfilesInput
    upsert?: SiteAddressUpsertWithoutSiteProfilesInput
    disconnect?: SiteAddressWhereInput | boolean
    delete?: SiteAddressWhereInput | boolean
    connect?: SiteAddressWhereUniqueInput
    update?: XOR<XOR<SiteAddressUpdateToOneWithWhereWithoutSiteProfilesInput, SiteAddressUpdateWithoutSiteProfilesInput>, SiteAddressUncheckedUpdateWithoutSiteProfilesInput>
  }

  export type UserProfileCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserProfileCreateWithoutAddressInput, UserProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAddressInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserProfileCreateWithoutAddressInput, UserProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAddressInput
    upsert?: UserProfileUpsertWithoutAddressInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutAddressInput, UserProfileUpdateWithoutAddressInput>, UserProfileUncheckedUpdateWithoutAddressInput>
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type ClientCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type WorkforceWorkerCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkforceWorkerCreateWithoutUserInput, WorkforceWorkerUncheckedCreateWithoutUserInput> | WorkforceWorkerCreateWithoutUserInput[] | WorkforceWorkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutUserInput | WorkforceWorkerCreateOrConnectWithoutUserInput[]
    createMany?: WorkforceWorkerCreateManyUserInputEnvelope
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type ClientUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type WorkforceWorkerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkforceWorkerCreateWithoutUserInput, WorkforceWorkerUncheckedCreateWithoutUserInput> | WorkforceWorkerCreateWithoutUserInput[] | WorkforceWorkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutUserInput | WorkforceWorkerCreateOrConnectWithoutUserInput[]
    createMany?: WorkforceWorkerCreateManyUserInputEnvelope
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCreatedByInput | ClientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCreatedByInput | ClientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCreatedByInput | ClientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type WorkforceWorkerUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkforceWorkerCreateWithoutUserInput, WorkforceWorkerUncheckedCreateWithoutUserInput> | WorkforceWorkerCreateWithoutUserInput[] | WorkforceWorkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutUserInput | WorkforceWorkerCreateOrConnectWithoutUserInput[]
    upsert?: WorkforceWorkerUpsertWithWhereUniqueWithoutUserInput | WorkforceWorkerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkforceWorkerCreateManyUserInputEnvelope
    set?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    disconnect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    delete?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    update?: WorkforceWorkerUpdateWithWhereUniqueWithoutUserInput | WorkforceWorkerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkforceWorkerUpdateManyWithWhereWithoutUserInput | WorkforceWorkerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkforceWorkerScalarWhereInput | WorkforceWorkerScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClientUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput> | ClientCreateWithoutCreatedByInput[] | ClientUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutCreatedByInput | ClientCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutCreatedByInput | ClientUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClientCreateManyCreatedByInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutCreatedByInput | ClientUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutCreatedByInput | ClientUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type WorkforceWorkerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkforceWorkerCreateWithoutUserInput, WorkforceWorkerUncheckedCreateWithoutUserInput> | WorkforceWorkerCreateWithoutUserInput[] | WorkforceWorkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutUserInput | WorkforceWorkerCreateOrConnectWithoutUserInput[]
    upsert?: WorkforceWorkerUpsertWithWhereUniqueWithoutUserInput | WorkforceWorkerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkforceWorkerCreateManyUserInputEnvelope
    set?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    disconnect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    delete?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    update?: WorkforceWorkerUpdateWithWhereUniqueWithoutUserInput | WorkforceWorkerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkforceWorkerUpdateManyWithWhereWithoutUserInput | WorkforceWorkerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkforceWorkerScalarWhereInput | WorkforceWorkerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<AddressCreateWithoutUserProfileInput, AddressUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserProfileInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<AddressCreateWithoutUserProfileInput, AddressUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserProfileInput
    connect?: AddressWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type AddressUpdateOneWithoutUserProfileNestedInput = {
    create?: XOR<AddressCreateWithoutUserProfileInput, AddressUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserProfileInput
    upsert?: AddressUpsertWithoutUserProfileInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserProfileInput, AddressUpdateWithoutUserProfileInput>, AddressUncheckedUpdateWithoutUserProfileInput>
  }

  export type AddressUncheckedUpdateOneWithoutUserProfileNestedInput = {
    create?: XOR<AddressCreateWithoutUserProfileInput, AddressUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserProfileInput
    upsert?: AddressUpsertWithoutUserProfileInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserProfileInput, AddressUpdateWithoutUserProfileInput>, AddressUncheckedUpdateWithoutUserProfileInput>
  }

  export type WorkForceCreateNestedOneWithoutWorkforceWorkersInput = {
    create?: XOR<WorkForceCreateWithoutWorkforceWorkersInput, WorkForceUncheckedCreateWithoutWorkforceWorkersInput>
    connectOrCreate?: WorkForceCreateOrConnectWithoutWorkforceWorkersInput
    connect?: WorkForceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkforceWorkersInput = {
    create?: XOR<UserCreateWithoutWorkforceWorkersInput, UserUncheckedCreateWithoutWorkforceWorkersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkforceWorkersInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWorkerRoleEnumFieldUpdateOperationsInput = {
    set?: $Enums.WorkerRoleEnum
  }

  export type WorkForceUpdateOneRequiredWithoutWorkforceWorkersNestedInput = {
    create?: XOR<WorkForceCreateWithoutWorkforceWorkersInput, WorkForceUncheckedCreateWithoutWorkforceWorkersInput>
    connectOrCreate?: WorkForceCreateOrConnectWithoutWorkforceWorkersInput
    upsert?: WorkForceUpsertWithoutWorkforceWorkersInput
    connect?: WorkForceWhereUniqueInput
    update?: XOR<XOR<WorkForceUpdateToOneWithWhereWithoutWorkforceWorkersInput, WorkForceUpdateWithoutWorkforceWorkersInput>, WorkForceUncheckedUpdateWithoutWorkforceWorkersInput>
  }

  export type UserUpdateOneRequiredWithoutWorkforceWorkersNestedInput = {
    create?: XOR<UserCreateWithoutWorkforceWorkersInput, UserUncheckedCreateWithoutWorkforceWorkersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkforceWorkersInput
    upsert?: UserUpsertWithoutWorkforceWorkersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkforceWorkersInput, UserUpdateWithoutWorkforceWorkersInput>, UserUncheckedUpdateWithoutWorkforceWorkersInput>
  }

  export type WorkforceWorkerCreateNestedManyWithoutWorkforceInput = {
    create?: XOR<WorkforceWorkerCreateWithoutWorkforceInput, WorkforceWorkerUncheckedCreateWithoutWorkforceInput> | WorkforceWorkerCreateWithoutWorkforceInput[] | WorkforceWorkerUncheckedCreateWithoutWorkforceInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutWorkforceInput | WorkforceWorkerCreateOrConnectWithoutWorkforceInput[]
    createMany?: WorkforceWorkerCreateManyWorkforceInputEnvelope
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
  }

  export type WorkforceWorkerUncheckedCreateNestedManyWithoutWorkforceInput = {
    create?: XOR<WorkforceWorkerCreateWithoutWorkforceInput, WorkforceWorkerUncheckedCreateWithoutWorkforceInput> | WorkforceWorkerCreateWithoutWorkforceInput[] | WorkforceWorkerUncheckedCreateWithoutWorkforceInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutWorkforceInput | WorkforceWorkerCreateOrConnectWithoutWorkforceInput[]
    createMany?: WorkforceWorkerCreateManyWorkforceInputEnvelope
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
  }

  export type WorkforceWorkerUpdateManyWithoutWorkforceNestedInput = {
    create?: XOR<WorkforceWorkerCreateWithoutWorkforceInput, WorkforceWorkerUncheckedCreateWithoutWorkforceInput> | WorkforceWorkerCreateWithoutWorkforceInput[] | WorkforceWorkerUncheckedCreateWithoutWorkforceInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutWorkforceInput | WorkforceWorkerCreateOrConnectWithoutWorkforceInput[]
    upsert?: WorkforceWorkerUpsertWithWhereUniqueWithoutWorkforceInput | WorkforceWorkerUpsertWithWhereUniqueWithoutWorkforceInput[]
    createMany?: WorkforceWorkerCreateManyWorkforceInputEnvelope
    set?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    disconnect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    delete?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    update?: WorkforceWorkerUpdateWithWhereUniqueWithoutWorkforceInput | WorkforceWorkerUpdateWithWhereUniqueWithoutWorkforceInput[]
    updateMany?: WorkforceWorkerUpdateManyWithWhereWithoutWorkforceInput | WorkforceWorkerUpdateManyWithWhereWithoutWorkforceInput[]
    deleteMany?: WorkforceWorkerScalarWhereInput | WorkforceWorkerScalarWhereInput[]
  }

  export type WorkforceWorkerUncheckedUpdateManyWithoutWorkforceNestedInput = {
    create?: XOR<WorkforceWorkerCreateWithoutWorkforceInput, WorkforceWorkerUncheckedCreateWithoutWorkforceInput> | WorkforceWorkerCreateWithoutWorkforceInput[] | WorkforceWorkerUncheckedCreateWithoutWorkforceInput[]
    connectOrCreate?: WorkforceWorkerCreateOrConnectWithoutWorkforceInput | WorkforceWorkerCreateOrConnectWithoutWorkforceInput[]
    upsert?: WorkforceWorkerUpsertWithWhereUniqueWithoutWorkforceInput | WorkforceWorkerUpsertWithWhereUniqueWithoutWorkforceInput[]
    createMany?: WorkforceWorkerCreateManyWorkforceInputEnvelope
    set?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    disconnect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    delete?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    connect?: WorkforceWorkerWhereUniqueInput | WorkforceWorkerWhereUniqueInput[]
    update?: WorkforceWorkerUpdateWithWhereUniqueWithoutWorkforceInput | WorkforceWorkerUpdateWithWhereUniqueWithoutWorkforceInput[]
    updateMany?: WorkforceWorkerUpdateManyWithWhereWithoutWorkforceInput | WorkforceWorkerUpdateManyWithWhereWithoutWorkforceInput[]
    deleteMany?: WorkforceWorkerScalarWhereInput | WorkforceWorkerScalarWhereInput[]
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
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWorkerRoleEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerRoleEnum | EnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerRoleEnumFilter<$PrismaModel> | $Enums.WorkerRoleEnum
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWorkerRoleEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkerRoleEnum | EnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    in?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkerRoleEnum[] | ListEnumWorkerRoleEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkerRoleEnumWithAggregatesFilter<$PrismaModel> | $Enums.WorkerRoleEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkerRoleEnumFilter<$PrismaModel>
    _max?: NestedEnumWorkerRoleEnumFilter<$PrismaModel>
  }

  export type UserCreateWithoutClientsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    workforceWorkers?: WorkforceWorkerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    workforceWorkers?: WorkforceWorkerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type SiteCreateWithoutClientInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SiteProfileCreateNestedOneWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: SiteProfileUncheckedCreateNestedOneWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutClientInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput>
  }

  export type SiteCreateManyClientInputEnvelope = {
    data: SiteCreateManyClientInput | SiteCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    workforceWorkers?: WorkforceWorkerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    workforceWorkers?: WorkforceWorkerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SiteUpsertWithWhereUniqueWithoutClientInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutClientInput, SiteUncheckedUpdateWithoutClientInput>
    create: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutClientInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutClientInput, SiteUncheckedUpdateWithoutClientInput>
  }

  export type SiteUpdateManyWithWhereWithoutClientInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutClientInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    estimatedBudget?: IntNullableFilter<"Site"> | number | null
    startDate?: DateTimeNullableFilter<"Site"> | Date | string | null
    expectedEndDate?: DateTimeNullableFilter<"Site"> | Date | string | null
    clientId?: StringFilter<"Site"> | string
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
  }

  export type SiteProfileCreateWithoutAddressInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    site: SiteCreateNestedOneWithoutProfileInput
  }

  export type SiteProfileUncheckedCreateWithoutAddressInput = {
    siteId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteProfileCreateOrConnectWithoutAddressInput = {
    where: SiteProfileWhereUniqueInput
    create: XOR<SiteProfileCreateWithoutAddressInput, SiteProfileUncheckedCreateWithoutAddressInput>
  }

  export type SiteProfileUpsertWithoutAddressInput = {
    update: XOR<SiteProfileUpdateWithoutAddressInput, SiteProfileUncheckedUpdateWithoutAddressInput>
    create: XOR<SiteProfileCreateWithoutAddressInput, SiteProfileUncheckedCreateWithoutAddressInput>
    where?: SiteProfileWhereInput
  }

  export type SiteProfileUpdateToOneWithWhereWithoutAddressInput = {
    where?: SiteProfileWhereInput
    data: XOR<SiteProfileUpdateWithoutAddressInput, SiteProfileUncheckedUpdateWithoutAddressInput>
  }

  export type SiteProfileUpdateWithoutAddressInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutProfileNestedInput
  }

  export type SiteProfileUncheckedUpdateWithoutAddressInput = {
    siteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateWithoutSitesInput = {
    id?: string
    name: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutClientsInput
  }

  export type ClientUncheckedCreateWithoutSitesInput = {
    id?: string
    name: string
    mobile: string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutSitesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
  }

  export type SiteProfileCreateWithoutSiteInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: SiteAddressCreateNestedOneWithoutSiteProfilesInput
  }

  export type SiteProfileUncheckedCreateWithoutSiteInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: SiteAddressUncheckedCreateNestedOneWithoutSiteProfilesInput
  }

  export type SiteProfileCreateOrConnectWithoutSiteInput = {
    where: SiteProfileWhereUniqueInput
    create: XOR<SiteProfileCreateWithoutSiteInput, SiteProfileUncheckedCreateWithoutSiteInput>
  }

  export type ClientUpsertWithoutSitesInput = {
    update: XOR<ClientUpdateWithoutSitesInput, ClientUncheckedUpdateWithoutSitesInput>
    create: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSitesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSitesInput, ClientUncheckedUpdateWithoutSitesInput>
  }

  export type ClientUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutClientsNestedInput
  }

  export type ClientUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteProfileUpsertWithoutSiteInput = {
    update: XOR<SiteProfileUpdateWithoutSiteInput, SiteProfileUncheckedUpdateWithoutSiteInput>
    create: XOR<SiteProfileCreateWithoutSiteInput, SiteProfileUncheckedCreateWithoutSiteInput>
    where?: SiteProfileWhereInput
  }

  export type SiteProfileUpdateToOneWithWhereWithoutSiteInput = {
    where?: SiteProfileWhereInput
    data: XOR<SiteProfileUpdateWithoutSiteInput, SiteProfileUncheckedUpdateWithoutSiteInput>
  }

  export type SiteProfileUpdateWithoutSiteInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: SiteAddressUpdateOneWithoutSiteProfilesNestedInput
  }

  export type SiteProfileUncheckedUpdateWithoutSiteInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: SiteAddressUncheckedUpdateOneWithoutSiteProfilesNestedInput
  }

  export type SiteCreateWithoutProfileInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutSitesInput
  }

  export type SiteUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    clientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteCreateOrConnectWithoutProfileInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutProfileInput, SiteUncheckedCreateWithoutProfileInput>
  }

  export type SiteAddressCreateWithoutSiteProfilesInput = {
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteAddressUncheckedCreateWithoutSiteProfilesInput = {
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteAddressCreateOrConnectWithoutSiteProfilesInput = {
    where: SiteAddressWhereUniqueInput
    create: XOR<SiteAddressCreateWithoutSiteProfilesInput, SiteAddressUncheckedCreateWithoutSiteProfilesInput>
  }

  export type SiteUpsertWithoutProfileInput = {
    update: XOR<SiteUpdateWithoutProfileInput, SiteUncheckedUpdateWithoutProfileInput>
    create: XOR<SiteCreateWithoutProfileInput, SiteUncheckedCreateWithoutProfileInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutProfileInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutProfileInput, SiteUncheckedUpdateWithoutProfileInput>
  }

  export type SiteUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
  }

  export type SiteUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteAddressUpsertWithoutSiteProfilesInput = {
    update: XOR<SiteAddressUpdateWithoutSiteProfilesInput, SiteAddressUncheckedUpdateWithoutSiteProfilesInput>
    create: XOR<SiteAddressCreateWithoutSiteProfilesInput, SiteAddressUncheckedCreateWithoutSiteProfilesInput>
    where?: SiteAddressWhereInput
  }

  export type SiteAddressUpdateToOneWithWhereWithoutSiteProfilesInput = {
    where?: SiteAddressWhereInput
    data: XOR<SiteAddressUpdateWithoutSiteProfilesInput, SiteAddressUncheckedUpdateWithoutSiteProfilesInput>
  }

  export type SiteAddressUpdateWithoutSiteProfilesInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteAddressUncheckedUpdateWithoutSiteProfilesInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateWithoutAddressInput = {
    addressId?: string | null
    availableForWork?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutAddressInput = {
    userId: string
    addressId?: string | null
    availableForWork?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutAddressInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutAddressInput, UserProfileUncheckedCreateWithoutAddressInput>
  }

  export type UserProfileUpsertWithoutAddressInput = {
    update: XOR<UserProfileUpdateWithoutAddressInput, UserProfileUncheckedUpdateWithoutAddressInput>
    create: XOR<UserProfileCreateWithoutAddressInput, UserProfileUncheckedCreateWithoutAddressInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutAddressInput, UserProfileUncheckedUpdateWithoutAddressInput>
  }

  export type UserProfileUpdateWithoutAddressInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutAddressInput = {
    userId?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateWithoutUserInput = {
    addressId?: string | null
    availableForWork?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    addressId?: string | null
    availableForWork?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateWithoutCreatedByInput = {
    id?: string
    name: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sites?: SiteCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sites?: SiteUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput>
  }

  export type ClientCreateManyCreatedByInputEnvelope = {
    data: ClientCreateManyCreatedByInput | ClientCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceWorkerCreateWithoutUserInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    workforce: WorkForceCreateNestedOneWithoutWorkforceWorkersInput
  }

  export type WorkforceWorkerUncheckedCreateWithoutUserInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    workforceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceWorkerCreateOrConnectWithoutUserInput = {
    where: WorkforceWorkerWhereUniqueInput
    create: XOR<WorkforceWorkerCreateWithoutUserInput, WorkforceWorkerUncheckedCreateWithoutUserInput>
  }

  export type WorkforceWorkerCreateManyUserInputEnvelope = {
    data: WorkforceWorkerCreateManyUserInput | WorkforceWorkerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    availableForWork?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutUserProfileNestedInput
  }

  export type ClientUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutCreatedByInput, ClientUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ClientCreateWithoutCreatedByInput, ClientUncheckedCreateWithoutCreatedByInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutCreatedByInput, ClientUncheckedUpdateWithoutCreatedByInput>
  }

  export type ClientUpdateManyWithWhereWithoutCreatedByInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    mobile?: StringFilter<"Client"> | string
    createdById?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type WorkforceWorkerUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkforceWorkerWhereUniqueInput
    update: XOR<WorkforceWorkerUpdateWithoutUserInput, WorkforceWorkerUncheckedUpdateWithoutUserInput>
    create: XOR<WorkforceWorkerCreateWithoutUserInput, WorkforceWorkerUncheckedCreateWithoutUserInput>
  }

  export type WorkforceWorkerUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkforceWorkerWhereUniqueInput
    data: XOR<WorkforceWorkerUpdateWithoutUserInput, WorkforceWorkerUncheckedUpdateWithoutUserInput>
  }

  export type WorkforceWorkerUpdateManyWithWhereWithoutUserInput = {
    where: WorkforceWorkerScalarWhereInput
    data: XOR<WorkforceWorkerUpdateManyMutationInput, WorkforceWorkerUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkforceWorkerScalarWhereInput = {
    AND?: WorkforceWorkerScalarWhereInput | WorkforceWorkerScalarWhereInput[]
    OR?: WorkforceWorkerScalarWhereInput[]
    NOT?: WorkforceWorkerScalarWhereInput | WorkforceWorkerScalarWhereInput[]
    id?: StringFilter<"WorkforceWorker"> | string
    defaultWage?: IntFilter<"WorkforceWorker"> | number
    role?: EnumWorkerRoleEnumFilter<"WorkforceWorker"> | $Enums.WorkerRoleEnum
    workforceId?: StringFilter<"WorkforceWorker"> | string
    userId?: StringFilter<"WorkforceWorker"> | string
    createdAt?: DateTimeFilter<"WorkforceWorker"> | Date | string
    updatedAt?: DateTimeFilter<"WorkforceWorker"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutCreatedByInput
    workforceWorkers?: WorkforceWorkerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
    workforceWorkers?: WorkforceWorkerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type AddressCreateWithoutUserProfileInput = {
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutUserProfileInput = {
    addressLine1?: string | null
    addressLine2?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutUserProfileInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserProfileInput, AddressUncheckedCreateWithoutUserProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutCreatedByNestedInput
    workforceWorkers?: WorkforceWorkerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
    workforceWorkers?: WorkforceWorkerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressUpsertWithoutUserProfileInput = {
    update: XOR<AddressUpdateWithoutUserProfileInput, AddressUncheckedUpdateWithoutUserProfileInput>
    create: XOR<AddressCreateWithoutUserProfileInput, AddressUncheckedCreateWithoutUserProfileInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserProfileInput, AddressUncheckedUpdateWithoutUserProfileInput>
  }

  export type AddressUpdateWithoutUserProfileInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutUserProfileInput = {
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkForceCreateWithoutWorkforceWorkersInput = {
    id?: string
    name: string
    maxMemberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkForceUncheckedCreateWithoutWorkforceWorkersInput = {
    id?: string
    name: string
    maxMemberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkForceCreateOrConnectWithoutWorkforceWorkersInput = {
    where: WorkForceWhereUniqueInput
    create: XOR<WorkForceCreateWithoutWorkforceWorkersInput, WorkForceUncheckedCreateWithoutWorkforceWorkersInput>
  }

  export type UserCreateWithoutWorkforceWorkersInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    clients?: ClientCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutWorkforceWorkersInput = {
    id?: string
    firstName: string
    middleName?: string | null
    lastName: string
    password: string
    countryCode: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutWorkforceWorkersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkforceWorkersInput, UserUncheckedCreateWithoutWorkforceWorkersInput>
  }

  export type WorkForceUpsertWithoutWorkforceWorkersInput = {
    update: XOR<WorkForceUpdateWithoutWorkforceWorkersInput, WorkForceUncheckedUpdateWithoutWorkforceWorkersInput>
    create: XOR<WorkForceCreateWithoutWorkforceWorkersInput, WorkForceUncheckedCreateWithoutWorkforceWorkersInput>
    where?: WorkForceWhereInput
  }

  export type WorkForceUpdateToOneWithWhereWithoutWorkforceWorkersInput = {
    where?: WorkForceWhereInput
    data: XOR<WorkForceUpdateWithoutWorkforceWorkersInput, WorkForceUncheckedUpdateWithoutWorkforceWorkersInput>
  }

  export type WorkForceUpdateWithoutWorkforceWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMemberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkForceUncheckedUpdateWithoutWorkforceWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMemberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutWorkforceWorkersInput = {
    update: XOR<UserUpdateWithoutWorkforceWorkersInput, UserUncheckedUpdateWithoutWorkforceWorkersInput>
    create: XOR<UserCreateWithoutWorkforceWorkersInput, UserUncheckedCreateWithoutWorkforceWorkersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkforceWorkersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkforceWorkersInput, UserUncheckedUpdateWithoutWorkforceWorkersInput>
  }

  export type UserUpdateWithoutWorkforceWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkforceWorkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type WorkforceWorkerCreateWithoutWorkforceInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkforceWorkersInput
  }

  export type WorkforceWorkerUncheckedCreateWithoutWorkforceInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceWorkerCreateOrConnectWithoutWorkforceInput = {
    where: WorkforceWorkerWhereUniqueInput
    create: XOR<WorkforceWorkerCreateWithoutWorkforceInput, WorkforceWorkerUncheckedCreateWithoutWorkforceInput>
  }

  export type WorkforceWorkerCreateManyWorkforceInputEnvelope = {
    data: WorkforceWorkerCreateManyWorkforceInput | WorkforceWorkerCreateManyWorkforceInput[]
    skipDuplicates?: boolean
  }

  export type WorkforceWorkerUpsertWithWhereUniqueWithoutWorkforceInput = {
    where: WorkforceWorkerWhereUniqueInput
    update: XOR<WorkforceWorkerUpdateWithoutWorkforceInput, WorkforceWorkerUncheckedUpdateWithoutWorkforceInput>
    create: XOR<WorkforceWorkerCreateWithoutWorkforceInput, WorkforceWorkerUncheckedCreateWithoutWorkforceInput>
  }

  export type WorkforceWorkerUpdateWithWhereUniqueWithoutWorkforceInput = {
    where: WorkforceWorkerWhereUniqueInput
    data: XOR<WorkforceWorkerUpdateWithoutWorkforceInput, WorkforceWorkerUncheckedUpdateWithoutWorkforceInput>
  }

  export type WorkforceWorkerUpdateManyWithWhereWithoutWorkforceInput = {
    where: WorkforceWorkerScalarWhereInput
    data: XOR<WorkforceWorkerUpdateManyMutationInput, WorkforceWorkerUncheckedUpdateManyWithoutWorkforceInput>
  }

  export type SiteCreateManyClientInput = {
    id?: string
    name: string
    estimatedBudget?: number | null
    startDate?: Date | string | null
    expectedEndDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SiteProfileUpdateOneWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: SiteProfileUncheckedUpdateOneWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estimatedBudget?: NullableIntFieldUpdateOperationsInput | number | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateManyCreatedByInput = {
    id?: string
    name: string
    mobile: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceWorkerCreateManyUserInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    workforceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceWorkerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workforce?: WorkForceUpdateOneRequiredWithoutWorkforceWorkersNestedInput
  }

  export type WorkforceWorkerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    workforceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceWorkerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    workforceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceWorkerCreateManyWorkforceInput = {
    id?: string
    defaultWage?: number
    role?: $Enums.WorkerRoleEnum
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkforceWorkerUpdateWithoutWorkforceInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkforceWorkersNestedInput
  }

  export type WorkforceWorkerUncheckedUpdateWithoutWorkforceInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkforceWorkerUncheckedUpdateManyWithoutWorkforceInput = {
    id?: StringFieldUpdateOperationsInput | string
    defaultWage?: IntFieldUpdateOperationsInput | number
    role?: EnumWorkerRoleEnumFieldUpdateOperationsInput | $Enums.WorkerRoleEnum
    userId?: StringFieldUpdateOperationsInput | string
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