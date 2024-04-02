
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Data
 * 
 */
export type Data = $Result.DefaultSelection<Prisma.$DataPayload>
/**
 * Model WaittingTickets
 * 
 */
export type WaittingTickets = $Result.DefaultSelection<Prisma.$WaittingTicketsPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model PaymentMode
 * 
 */
export type PaymentMode = $Result.DefaultSelection<Prisma.$PaymentModePayload>
/**
 * Model Famille
 * 
 */
export type Famille = $Result.DefaultSelection<Prisma.$FamillePayload>
/**
 * Model Rayon
 * 
 */
export type Rayon = $Result.DefaultSelection<Prisma.$RayonPayload>
/**
 * Model Tva
 * 
 */
export type Tva = $Result.DefaultSelection<Prisma.$TvaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentEnum: {
  Cash: 'Cash',
  Card: 'Card',
  Cheque: 'Cheque'
};

export type PaymentEnum = (typeof PaymentEnum)[keyof typeof PaymentEnum]

}

export type PaymentEnum = $Enums.PaymentEnum

export const PaymentEnum: typeof $Enums.PaymentEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.data`: Exposes CRUD operations for the **Data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data
    * const data = await prisma.data.findMany()
    * ```
    */
  get data(): Prisma.DataDelegate<ExtArgs>;

  /**
   * `prisma.waittingTickets`: Exposes CRUD operations for the **WaittingTickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaittingTickets
    * const waittingTickets = await prisma.waittingTickets.findMany()
    * ```
    */
  get waittingTickets(): Prisma.WaittingTicketsDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.paymentMode`: Exposes CRUD operations for the **PaymentMode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentModes
    * const paymentModes = await prisma.paymentMode.findMany()
    * ```
    */
  get paymentMode(): Prisma.PaymentModeDelegate<ExtArgs>;

  /**
   * `prisma.famille`: Exposes CRUD operations for the **Famille** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Familles
    * const familles = await prisma.famille.findMany()
    * ```
    */
  get famille(): Prisma.FamilleDelegate<ExtArgs>;

  /**
   * `prisma.rayon`: Exposes CRUD operations for the **Rayon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rayons
    * const rayons = await prisma.rayon.findMany()
    * ```
    */
  get rayon(): Prisma.RayonDelegate<ExtArgs>;

  /**
   * `prisma.tva`: Exposes CRUD operations for the **Tva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tvas
    * const tvas = await prisma.tva.findMany()
    * ```
    */
  get tva(): Prisma.TvaDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.8.0
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Product: 'Product',
    Data: 'Data',
    WaittingTickets: 'WaittingTickets',
    Ticket: 'Ticket',
    Client: 'Client',
    PaymentMode: 'PaymentMode',
    Famille: 'Famille',
    Rayon: 'Rayon',
    Tva: 'Tva'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'product' | 'data' | 'waittingTickets' | 'ticket' | 'client' | 'paymentMode' | 'famille' | 'rayon' | 'tva'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Data: {
        payload: Prisma.$DataPayload<ExtArgs>
        fields: Prisma.DataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          findFirst: {
            args: Prisma.DataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          findMany: {
            args: Prisma.DataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload>[]
          }
          create: {
            args: Prisma.DataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          createMany: {
            args: Prisma.DataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          update: {
            args: Prisma.DataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          deleteMany: {
            args: Prisma.DataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataPayload>
          }
          aggregate: {
            args: Prisma.DataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateData>
          }
          groupBy: {
            args: Prisma.DataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DataGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataCountArgs<ExtArgs>,
            result: $Utils.Optional<DataCountAggregateOutputType> | number
          }
        }
      }
      WaittingTickets: {
        payload: Prisma.$WaittingTicketsPayload<ExtArgs>
        fields: Prisma.WaittingTicketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaittingTicketsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaittingTicketsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload>
          }
          findFirst: {
            args: Prisma.WaittingTicketsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaittingTicketsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload>
          }
          findMany: {
            args: Prisma.WaittingTicketsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload>[]
          }
          create: {
            args: Prisma.WaittingTicketsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload>
          }
          createMany: {
            args: Prisma.WaittingTicketsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WaittingTicketsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload>
          }
          update: {
            args: Prisma.WaittingTicketsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload>
          }
          deleteMany: {
            args: Prisma.WaittingTicketsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WaittingTicketsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WaittingTicketsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaittingTicketsPayload>
          }
          aggregate: {
            args: Prisma.WaittingTicketsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWaittingTickets>
          }
          groupBy: {
            args: Prisma.WaittingTicketsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WaittingTicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaittingTicketsCountArgs<ExtArgs>,
            result: $Utils.Optional<WaittingTicketsCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      PaymentMode: {
        payload: Prisma.$PaymentModePayload<ExtArgs>
        fields: Prisma.PaymentModeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentModeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentModeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload>
          }
          findFirst: {
            args: Prisma.PaymentModeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentModeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload>
          }
          findMany: {
            args: Prisma.PaymentModeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload>[]
          }
          create: {
            args: Prisma.PaymentModeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload>
          }
          createMany: {
            args: Prisma.PaymentModeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentModeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload>
          }
          update: {
            args: Prisma.PaymentModeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload>
          }
          deleteMany: {
            args: Prisma.PaymentModeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentModeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentModeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentModePayload>
          }
          aggregate: {
            args: Prisma.PaymentModeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentMode>
          }
          groupBy: {
            args: Prisma.PaymentModeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentModeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentModeCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentModeCountAggregateOutputType> | number
          }
        }
      }
      Famille: {
        payload: Prisma.$FamillePayload<ExtArgs>
        fields: Prisma.FamilleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          findFirst: {
            args: Prisma.FamilleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          findMany: {
            args: Prisma.FamilleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>[]
          }
          create: {
            args: Prisma.FamilleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          createMany: {
            args: Prisma.FamilleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FamilleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          update: {
            args: Prisma.FamilleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          deleteMany: {
            args: Prisma.FamilleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FamilleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FamilleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamillePayload>
          }
          aggregate: {
            args: Prisma.FamilleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFamille>
          }
          groupBy: {
            args: Prisma.FamilleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FamilleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilleCountArgs<ExtArgs>,
            result: $Utils.Optional<FamilleCountAggregateOutputType> | number
          }
        }
      }
      Rayon: {
        payload: Prisma.$RayonPayload<ExtArgs>
        fields: Prisma.RayonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RayonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RayonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload>
          }
          findFirst: {
            args: Prisma.RayonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RayonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload>
          }
          findMany: {
            args: Prisma.RayonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload>[]
          }
          create: {
            args: Prisma.RayonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload>
          }
          createMany: {
            args: Prisma.RayonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RayonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload>
          }
          update: {
            args: Prisma.RayonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload>
          }
          deleteMany: {
            args: Prisma.RayonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RayonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RayonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RayonPayload>
          }
          aggregate: {
            args: Prisma.RayonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRayon>
          }
          groupBy: {
            args: Prisma.RayonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RayonGroupByOutputType>[]
          }
          count: {
            args: Prisma.RayonCountArgs<ExtArgs>,
            result: $Utils.Optional<RayonCountAggregateOutputType> | number
          }
        }
      }
      Tva: {
        payload: Prisma.$TvaPayload<ExtArgs>
        fields: Prisma.TvaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TvaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TvaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload>
          }
          findFirst: {
            args: Prisma.TvaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TvaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload>
          }
          findMany: {
            args: Prisma.TvaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload>[]
          }
          create: {
            args: Prisma.TvaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload>
          }
          createMany: {
            args: Prisma.TvaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TvaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload>
          }
          update: {
            args: Prisma.TvaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload>
          }
          deleteMany: {
            args: Prisma.TvaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TvaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TvaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TvaPayload>
          }
          aggregate: {
            args: Prisma.TvaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTva>
          }
          groupBy: {
            args: Prisma.TvaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TvaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TvaCountArgs<ExtArgs>,
            result: $Utils.Optional<TvaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type WaittingTicketsCountOutputType
   */

  export type WaittingTicketsCountOutputType = {
    products: number
  }

  export type WaittingTicketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | WaittingTicketsCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * WaittingTicketsCountOutputType without action
   */
  export type WaittingTicketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTicketsCountOutputType
     */
    select?: WaittingTicketsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WaittingTicketsCountOutputType without action
   */
  export type WaittingTicketsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataWhereInput
  }



  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    products: number
    paymentModes: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | TicketCountOutputTypeCountProductsArgs
    paymentModes?: boolean | TicketCountOutputTypeCountPaymentModesArgs
  }

  // Custom InputTypes

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataWhereInput
  }


  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountPaymentModesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentModeWhereInput
  }



  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    tickets: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ClientCountOutputTypeCountTicketsArgs
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
  export type ClientCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }



  /**
   * Count Type FamilleCountOutputType
   */

  export type FamilleCountOutputType = {
    products: number
    Data: number
  }

  export type FamilleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | FamilleCountOutputTypeCountProductsArgs
    Data?: boolean | FamilleCountOutputTypeCountDataArgs
  }

  // Custom InputTypes

  /**
   * FamilleCountOutputType without action
   */
  export type FamilleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilleCountOutputType
     */
    select?: FamilleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FamilleCountOutputType without action
   */
  export type FamilleCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * FamilleCountOutputType without action
   */
  export type FamilleCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataWhereInput
  }



  /**
   * Count Type RayonCountOutputType
   */

  export type RayonCountOutputType = {
    famille: number
    products: number
  }

  export type RayonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    famille?: boolean | RayonCountOutputTypeCountFamilleArgs
    products?: boolean | RayonCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * RayonCountOutputType without action
   */
  export type RayonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RayonCountOutputType
     */
    select?: RayonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RayonCountOutputType without action
   */
  export type RayonCountOutputTypeCountFamilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilleWhereInput
  }


  /**
   * RayonCountOutputType without action
   */
  export type RayonCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type TvaCountOutputType
   */

  export type TvaCountOutputType = {
    products: number
    Data: number
  }

  export type TvaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | TvaCountOutputTypeCountProductsArgs
    Data?: boolean | TvaCountOutputTypeCountDataArgs
  }

  // Custom InputTypes

  /**
   * TvaCountOutputType without action
   */
  export type TvaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvaCountOutputType
     */
    select?: TvaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TvaCountOutputType without action
   */
  export type TvaCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * TvaCountOutputType without action
   */
  export type TvaCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    pvht: number | null
    rayon_code: number | null
    famille_code: number | null
    tva_code: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    pvht: number | null
    rayon_code: number | null
    famille_code: number | null
    tva_code: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    code: string | null
    code_interne: string | null
    libelle: string | null
    price: number | null
    pvht: number | null
    rayon_code: number | null
    famille_code: number | null
    tva_code: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    code: string | null
    code_interne: string | null
    libelle: string | null
    price: number | null
    pvht: number | null
    rayon_code: number | null
    famille_code: number | null
    tva_code: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    code: number
    code_interne: number
    libelle: number
    price: number
    pvht: number
    rayon_code: number
    famille_code: number
    tva_code: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    pvht?: true
    rayon_code?: true
    famille_code?: true
    tva_code?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    pvht?: true
    rayon_code?: true
    famille_code?: true
    tva_code?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    code?: true
    code_interne?: true
    libelle?: true
    price?: true
    pvht?: true
    rayon_code?: true
    famille_code?: true
    tva_code?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    code?: true
    code_interne?: true
    libelle?: true
    price?: true
    pvht?: true
    rayon_code?: true
    famille_code?: true
    tva_code?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    code?: true
    code_interne?: true
    libelle?: true
    price?: true
    pvht?: true
    rayon_code?: true
    famille_code?: true
    tva_code?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon_code: number | null
    famille_code: number | null
    tva_code: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    code_interne?: boolean
    libelle?: boolean
    price?: boolean
    pvht?: boolean
    rayon_code?: boolean
    famille_code?: boolean
    tva_code?: boolean
    rayon?: boolean | Product$rayonArgs<ExtArgs>
    famille?: boolean | Product$familleArgs<ExtArgs>
    tva?: boolean | Product$tvaArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    code?: boolean
    code_interne?: boolean
    libelle?: boolean
    price?: boolean
    pvht?: boolean
    rayon_code?: boolean
    famille_code?: boolean
    tva_code?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rayon?: boolean | Product$rayonArgs<ExtArgs>
    famille?: boolean | Product$familleArgs<ExtArgs>
    tva?: boolean | Product$tvaArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      rayon: Prisma.$RayonPayload<ExtArgs> | null
      famille: Prisma.$FamillePayload<ExtArgs> | null
      tva: Prisma.$TvaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      code_interne: string
      libelle: string
      price: number
      pvht: number
      rayon_code: number | null
      famille_code: number | null
      tva_code: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rayon<T extends Product$rayonArgs<ExtArgs> = {}>(args?: Subset<T, Product$rayonArgs<ExtArgs>>): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    famille<T extends Product$familleArgs<ExtArgs> = {}>(args?: Subset<T, Product$familleArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tva<T extends Product$tvaArgs<ExtArgs> = {}>(args?: Subset<T, Product$tvaArgs<ExtArgs>>): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly code: FieldRef<"Product", 'String'>
    readonly code_interne: FieldRef<"Product", 'String'>
    readonly libelle: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly pvht: FieldRef<"Product", 'Float'>
    readonly rayon_code: FieldRef<"Product", 'Int'>
    readonly famille_code: FieldRef<"Product", 'Int'>
    readonly tva_code: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.rayon
   */
  export type Product$rayonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    where?: RayonWhereInput
  }


  /**
   * Product.famille
   */
  export type Product$familleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    where?: FamilleWhereInput
  }


  /**
   * Product.tva
   */
  export type Product$tvaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    where?: TvaWhereInput
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Data
   */

  export type AggregateData = {
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  export type DataAvgAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    pvht: number | null
    total_pvht: number | null
    total: number | null
    ticketNumber: number | null
    waittingTicketsNumber: number | null
    famille_code: number | null
    tva_code: number | null
  }

  export type DataSumAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    pvht: number | null
    total_pvht: number | null
    total: number | null
    ticketNumber: number | null
    waittingTicketsNumber: number | null
    famille_code: number | null
    tva_code: number | null
  }

  export type DataMinAggregateOutputType = {
    id: number | null
    code: string | null
    code_interne: string | null
    libelle: string | null
    price: number | null
    quantity: number | null
    pvht: number | null
    total_pvht: number | null
    total: number | null
    ticketNumber: number | null
    waittingTicketsNumber: number | null
    famille_code: number | null
    tva_code: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataMaxAggregateOutputType = {
    id: number | null
    code: string | null
    code_interne: string | null
    libelle: string | null
    price: number | null
    quantity: number | null
    pvht: number | null
    total_pvht: number | null
    total: number | null
    ticketNumber: number | null
    waittingTicketsNumber: number | null
    famille_code: number | null
    tva_code: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataCountAggregateOutputType = {
    id: number
    code: number
    code_interne: number
    libelle: number
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber: number
    waittingTicketsNumber: number
    famille_code: number
    tva_code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    pvht?: true
    total_pvht?: true
    total?: true
    ticketNumber?: true
    waittingTicketsNumber?: true
    famille_code?: true
    tva_code?: true
  }

  export type DataSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    pvht?: true
    total_pvht?: true
    total?: true
    ticketNumber?: true
    waittingTicketsNumber?: true
    famille_code?: true
    tva_code?: true
  }

  export type DataMinAggregateInputType = {
    id?: true
    code?: true
    code_interne?: true
    libelle?: true
    price?: true
    quantity?: true
    pvht?: true
    total_pvht?: true
    total?: true
    ticketNumber?: true
    waittingTicketsNumber?: true
    famille_code?: true
    tva_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataMaxAggregateInputType = {
    id?: true
    code?: true
    code_interne?: true
    libelle?: true
    price?: true
    quantity?: true
    pvht?: true
    total_pvht?: true
    total?: true
    ticketNumber?: true
    waittingTicketsNumber?: true
    famille_code?: true
    tva_code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataCountAggregateInputType = {
    id?: true
    code?: true
    code_interne?: true
    libelle?: true
    price?: true
    quantity?: true
    pvht?: true
    total_pvht?: true
    total?: true
    ticketNumber?: true
    waittingTicketsNumber?: true
    famille_code?: true
    tva_code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Data to aggregate.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Data
    **/
    _count?: true | DataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataMaxAggregateInputType
  }

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
        [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>
  }




  export type DataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataWhereInput
    orderBy?: DataOrderByWithAggregationInput | DataOrderByWithAggregationInput[]
    by: DataScalarFieldEnum[] | DataScalarFieldEnum
    having?: DataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataCountAggregateInputType | true
    _avg?: DataAvgAggregateInputType
    _sum?: DataSumAggregateInputType
    _min?: DataMinAggregateInputType
    _max?: DataMaxAggregateInputType
  }

  export type DataGroupByOutputType = {
    id: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber: number | null
    waittingTicketsNumber: number | null
    famille_code: number | null
    tva_code: number | null
    createdAt: Date
    updatedAt: Date
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  type GetDataGroupByPayload<T extends DataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataGroupByOutputType[P]>
            : GetScalarType<T[P], DataGroupByOutputType[P]>
        }
      >
    >


  export type DataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    code_interne?: boolean
    libelle?: boolean
    price?: boolean
    quantity?: boolean
    pvht?: boolean
    total_pvht?: boolean
    total?: boolean
    ticketNumber?: boolean
    waittingTicketsNumber?: boolean
    famille_code?: boolean
    tva_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | Data$ticketArgs<ExtArgs>
    WaittingTickets?: boolean | Data$WaittingTicketsArgs<ExtArgs>
    famille?: boolean | Data$familleArgs<ExtArgs>
    tva?: boolean | Data$tvaArgs<ExtArgs>
  }, ExtArgs["result"]["data"]>

  export type DataSelectScalar = {
    id?: boolean
    code?: boolean
    code_interne?: boolean
    libelle?: boolean
    price?: boolean
    quantity?: boolean
    pvht?: boolean
    total_pvht?: boolean
    total?: boolean
    ticketNumber?: boolean
    waittingTicketsNumber?: boolean
    famille_code?: boolean
    tva_code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | Data$ticketArgs<ExtArgs>
    WaittingTickets?: boolean | Data$WaittingTicketsArgs<ExtArgs>
    famille?: boolean | Data$familleArgs<ExtArgs>
    tva?: boolean | Data$tvaArgs<ExtArgs>
  }


  export type $DataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Data"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs> | null
      WaittingTickets: Prisma.$WaittingTicketsPayload<ExtArgs> | null
      famille: Prisma.$FamillePayload<ExtArgs> | null
      tva: Prisma.$TvaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      code_interne: string
      libelle: string
      price: number
      quantity: number
      pvht: number
      total_pvht: number
      total: number
      ticketNumber: number | null
      waittingTicketsNumber: number | null
      famille_code: number | null
      tva_code: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["data"]>
    composites: {}
  }


  type DataGetPayload<S extends boolean | null | undefined | DataDefaultArgs> = $Result.GetResult<Prisma.$DataPayload, S>

  type DataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DataCountAggregateInputType | true
    }

  export interface DataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Data'], meta: { name: 'Data' } }
    /**
     * Find zero or one Data that matches the filter.
     * @param {DataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DataFindUniqueArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Data that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DataFindUniqueOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DataFindFirstArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstOrThrowArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     * 
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Data.
     * @param {DataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     * 
    **/
    create<T extends DataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DataCreateArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Data.
     *     @param {DataCreateManyArgs} args - Arguments to create many Data.
     *     @example
     *     // Create many Data
     *     const data = await prisma.data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Data.
     * @param {DataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     * 
    **/
    delete<T extends DataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DataDeleteArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Data.
     * @param {DataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DataUpdateArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Data.
     * @param {DataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Data.
     * @param {DataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
    **/
    upsert<T extends DataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DataUpsertArgs<ExtArgs>>
    ): Prisma__DataClient<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
    **/
    count<T extends DataCountArgs>(
      args?: Subset<T, DataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataAggregateArgs>(args: Subset<T, DataAggregateArgs>): Prisma.PrismaPromise<GetDataAggregateType<T>>

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGroupByArgs} args - Group by arguments.
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
      T extends DataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataGroupByArgs['orderBy'] }
        : { orderBy?: DataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Data model
   */
  readonly fields: DataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticket<T extends Data$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Data$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    WaittingTickets<T extends Data$WaittingTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Data$WaittingTicketsArgs<ExtArgs>>): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    famille<T extends Data$familleArgs<ExtArgs> = {}>(args?: Subset<T, Data$familleArgs<ExtArgs>>): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tva<T extends Data$tvaArgs<ExtArgs> = {}>(args?: Subset<T, Data$tvaArgs<ExtArgs>>): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Data model
   */ 
  interface DataFieldRefs {
    readonly id: FieldRef<"Data", 'Int'>
    readonly code: FieldRef<"Data", 'String'>
    readonly code_interne: FieldRef<"Data", 'String'>
    readonly libelle: FieldRef<"Data", 'String'>
    readonly price: FieldRef<"Data", 'Float'>
    readonly quantity: FieldRef<"Data", 'Int'>
    readonly pvht: FieldRef<"Data", 'Float'>
    readonly total_pvht: FieldRef<"Data", 'Float'>
    readonly total: FieldRef<"Data", 'Float'>
    readonly ticketNumber: FieldRef<"Data", 'Int'>
    readonly waittingTicketsNumber: FieldRef<"Data", 'Int'>
    readonly famille_code: FieldRef<"Data", 'Int'>
    readonly tva_code: FieldRef<"Data", 'Int'>
    readonly createdAt: FieldRef<"Data", 'DateTime'>
    readonly updatedAt: FieldRef<"Data", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Data findUnique
   */
  export type DataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput
  }


  /**
   * Data findUniqueOrThrow
   */
  export type DataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where: DataWhereUniqueInput
  }


  /**
   * Data findFirst
   */
  export type DataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }


  /**
   * Data findFirstOrThrow
   */
  export type DataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Data.
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Data.
     */
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }


  /**
   * Data findMany
   */
  export type DataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter, which Data to fetch.
     */
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     */
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Data.
     */
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     */
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }


  /**
   * Data create
   */
  export type DataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * The data needed to create a Data.
     */
    data: XOR<DataCreateInput, DataUncheckedCreateInput>
  }


  /**
   * Data createMany
   */
  export type DataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Data.
     */
    data: DataCreateManyInput | DataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Data update
   */
  export type DataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * The data needed to update a Data.
     */
    data: XOR<DataUpdateInput, DataUncheckedUpdateInput>
    /**
     * Choose, which Data to update.
     */
    where: DataWhereUniqueInput
  }


  /**
   * Data updateMany
   */
  export type DataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Data.
     */
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyInput>
    /**
     * Filter which Data to update
     */
    where?: DataWhereInput
  }


  /**
   * Data upsert
   */
  export type DataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * The filter to search for the Data to update in case it exists.
     */
    where: DataWhereUniqueInput
    /**
     * In case the Data found by the `where` argument doesn't exist, create a new Data with this data.
     */
    create: XOR<DataCreateInput, DataUncheckedCreateInput>
    /**
     * In case the Data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataUpdateInput, DataUncheckedUpdateInput>
  }


  /**
   * Data delete
   */
  export type DataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    /**
     * Filter which Data to delete.
     */
    where: DataWhereUniqueInput
  }


  /**
   * Data deleteMany
   */
  export type DataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Data to delete
     */
    where?: DataWhereInput
  }


  /**
   * Data.ticket
   */
  export type Data$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }


  /**
   * Data.WaittingTickets
   */
  export type Data$WaittingTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    where?: WaittingTicketsWhereInput
  }


  /**
   * Data.famille
   */
  export type Data$familleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    where?: FamilleWhereInput
  }


  /**
   * Data.tva
   */
  export type Data$tvaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    where?: TvaWhereInput
  }


  /**
   * Data without action
   */
  export type DataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
  }



  /**
   * Model WaittingTickets
   */

  export type AggregateWaittingTickets = {
    _count: WaittingTicketsCountAggregateOutputType | null
    _avg: WaittingTicketsAvgAggregateOutputType | null
    _sum: WaittingTicketsSumAggregateOutputType | null
    _min: WaittingTicketsMinAggregateOutputType | null
    _max: WaittingTicketsMaxAggregateOutputType | null
  }

  export type WaittingTicketsAvgAggregateOutputType = {
    number: number | null
    total: number | null
  }

  export type WaittingTicketsSumAggregateOutputType = {
    number: number | null
    total: number | null
  }

  export type WaittingTicketsMinAggregateOutputType = {
    number: number | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaittingTicketsMaxAggregateOutputType = {
    number: number | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaittingTicketsCountAggregateOutputType = {
    number: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaittingTicketsAvgAggregateInputType = {
    number?: true
    total?: true
  }

  export type WaittingTicketsSumAggregateInputType = {
    number?: true
    total?: true
  }

  export type WaittingTicketsMinAggregateInputType = {
    number?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaittingTicketsMaxAggregateInputType = {
    number?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaittingTicketsCountAggregateInputType = {
    number?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaittingTicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaittingTickets to aggregate.
     */
    where?: WaittingTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaittingTickets to fetch.
     */
    orderBy?: WaittingTicketsOrderByWithRelationInput | WaittingTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaittingTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaittingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaittingTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaittingTickets
    **/
    _count?: true | WaittingTicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaittingTicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaittingTicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaittingTicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaittingTicketsMaxAggregateInputType
  }

  export type GetWaittingTicketsAggregateType<T extends WaittingTicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateWaittingTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaittingTickets[P]>
      : GetScalarType<T[P], AggregateWaittingTickets[P]>
  }




  export type WaittingTicketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaittingTicketsWhereInput
    orderBy?: WaittingTicketsOrderByWithAggregationInput | WaittingTicketsOrderByWithAggregationInput[]
    by: WaittingTicketsScalarFieldEnum[] | WaittingTicketsScalarFieldEnum
    having?: WaittingTicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaittingTicketsCountAggregateInputType | true
    _avg?: WaittingTicketsAvgAggregateInputType
    _sum?: WaittingTicketsSumAggregateInputType
    _min?: WaittingTicketsMinAggregateInputType
    _max?: WaittingTicketsMaxAggregateInputType
  }

  export type WaittingTicketsGroupByOutputType = {
    number: number
    total: number
    createdAt: Date
    updatedAt: Date
    _count: WaittingTicketsCountAggregateOutputType | null
    _avg: WaittingTicketsAvgAggregateOutputType | null
    _sum: WaittingTicketsSumAggregateOutputType | null
    _min: WaittingTicketsMinAggregateOutputType | null
    _max: WaittingTicketsMaxAggregateOutputType | null
  }

  type GetWaittingTicketsGroupByPayload<T extends WaittingTicketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaittingTicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaittingTicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaittingTicketsGroupByOutputType[P]>
            : GetScalarType<T[P], WaittingTicketsGroupByOutputType[P]>
        }
      >
    >


  export type WaittingTicketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | WaittingTickets$productsArgs<ExtArgs>
    _count?: boolean | WaittingTicketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waittingTickets"]>

  export type WaittingTicketsSelectScalar = {
    number?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaittingTicketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | WaittingTickets$productsArgs<ExtArgs>
    _count?: boolean | WaittingTicketsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WaittingTicketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaittingTickets"
    objects: {
      products: Prisma.$DataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      number: number
      total: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waittingTickets"]>
    composites: {}
  }


  type WaittingTicketsGetPayload<S extends boolean | null | undefined | WaittingTicketsDefaultArgs> = $Result.GetResult<Prisma.$WaittingTicketsPayload, S>

  type WaittingTicketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaittingTicketsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaittingTicketsCountAggregateInputType | true
    }

  export interface WaittingTicketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaittingTickets'], meta: { name: 'WaittingTickets' } }
    /**
     * Find zero or one WaittingTickets that matches the filter.
     * @param {WaittingTicketsFindUniqueArgs} args - Arguments to find a WaittingTickets
     * @example
     * // Get one WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WaittingTicketsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WaittingTicketsFindUniqueArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WaittingTickets that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WaittingTicketsFindUniqueOrThrowArgs} args - Arguments to find a WaittingTickets
     * @example
     * // Get one WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WaittingTicketsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaittingTicketsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WaittingTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaittingTicketsFindFirstArgs} args - Arguments to find a WaittingTickets
     * @example
     * // Get one WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WaittingTicketsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WaittingTicketsFindFirstArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WaittingTickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaittingTicketsFindFirstOrThrowArgs} args - Arguments to find a WaittingTickets
     * @example
     * // Get one WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WaittingTicketsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaittingTicketsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WaittingTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaittingTicketsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.findMany()
     * 
     * // Get first 10 WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const waittingTicketsWithNumberOnly = await prisma.waittingTickets.findMany({ select: { number: true } })
     * 
    **/
    findMany<T extends WaittingTicketsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaittingTicketsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WaittingTickets.
     * @param {WaittingTicketsCreateArgs} args - Arguments to create a WaittingTickets.
     * @example
     * // Create one WaittingTickets
     * const WaittingTickets = await prisma.waittingTickets.create({
     *   data: {
     *     // ... data to create a WaittingTickets
     *   }
     * })
     * 
    **/
    create<T extends WaittingTicketsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WaittingTicketsCreateArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WaittingTickets.
     *     @param {WaittingTicketsCreateManyArgs} args - Arguments to create many WaittingTickets.
     *     @example
     *     // Create many WaittingTickets
     *     const waittingTickets = await prisma.waittingTickets.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WaittingTicketsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaittingTicketsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WaittingTickets.
     * @param {WaittingTicketsDeleteArgs} args - Arguments to delete one WaittingTickets.
     * @example
     * // Delete one WaittingTickets
     * const WaittingTickets = await prisma.waittingTickets.delete({
     *   where: {
     *     // ... filter to delete one WaittingTickets
     *   }
     * })
     * 
    **/
    delete<T extends WaittingTicketsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WaittingTicketsDeleteArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WaittingTickets.
     * @param {WaittingTicketsUpdateArgs} args - Arguments to update one WaittingTickets.
     * @example
     * // Update one WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WaittingTicketsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WaittingTicketsUpdateArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WaittingTickets.
     * @param {WaittingTicketsDeleteManyArgs} args - Arguments to filter WaittingTickets to delete.
     * @example
     * // Delete a few WaittingTickets
     * const { count } = await prisma.waittingTickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WaittingTicketsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaittingTicketsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaittingTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaittingTicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WaittingTicketsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WaittingTicketsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaittingTickets.
     * @param {WaittingTicketsUpsertArgs} args - Arguments to update or create a WaittingTickets.
     * @example
     * // Update or create a WaittingTickets
     * const waittingTickets = await prisma.waittingTickets.upsert({
     *   create: {
     *     // ... data to create a WaittingTickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaittingTickets we want to update
     *   }
     * })
    **/
    upsert<T extends WaittingTicketsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WaittingTicketsUpsertArgs<ExtArgs>>
    ): Prisma__WaittingTicketsClient<$Result.GetResult<Prisma.$WaittingTicketsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WaittingTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaittingTicketsCountArgs} args - Arguments to filter WaittingTickets to count.
     * @example
     * // Count the number of WaittingTickets
     * const count = await prisma.waittingTickets.count({
     *   where: {
     *     // ... the filter for the WaittingTickets we want to count
     *   }
     * })
    **/
    count<T extends WaittingTicketsCountArgs>(
      args?: Subset<T, WaittingTicketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaittingTicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaittingTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaittingTicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaittingTicketsAggregateArgs>(args: Subset<T, WaittingTicketsAggregateArgs>): Prisma.PrismaPromise<GetWaittingTicketsAggregateType<T>>

    /**
     * Group by WaittingTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaittingTicketsGroupByArgs} args - Group by arguments.
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
      T extends WaittingTicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaittingTicketsGroupByArgs['orderBy'] }
        : { orderBy?: WaittingTicketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaittingTicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaittingTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaittingTickets model
   */
  readonly fields: WaittingTicketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaittingTickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaittingTicketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends WaittingTickets$productsArgs<ExtArgs> = {}>(args?: Subset<T, WaittingTickets$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WaittingTickets model
   */ 
  interface WaittingTicketsFieldRefs {
    readonly number: FieldRef<"WaittingTickets", 'Int'>
    readonly total: FieldRef<"WaittingTickets", 'Float'>
    readonly createdAt: FieldRef<"WaittingTickets", 'DateTime'>
    readonly updatedAt: FieldRef<"WaittingTickets", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * WaittingTickets findUnique
   */
  export type WaittingTicketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * Filter, which WaittingTickets to fetch.
     */
    where: WaittingTicketsWhereUniqueInput
  }


  /**
   * WaittingTickets findUniqueOrThrow
   */
  export type WaittingTicketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * Filter, which WaittingTickets to fetch.
     */
    where: WaittingTicketsWhereUniqueInput
  }


  /**
   * WaittingTickets findFirst
   */
  export type WaittingTicketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * Filter, which WaittingTickets to fetch.
     */
    where?: WaittingTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaittingTickets to fetch.
     */
    orderBy?: WaittingTicketsOrderByWithRelationInput | WaittingTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaittingTickets.
     */
    cursor?: WaittingTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaittingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaittingTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaittingTickets.
     */
    distinct?: WaittingTicketsScalarFieldEnum | WaittingTicketsScalarFieldEnum[]
  }


  /**
   * WaittingTickets findFirstOrThrow
   */
  export type WaittingTicketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * Filter, which WaittingTickets to fetch.
     */
    where?: WaittingTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaittingTickets to fetch.
     */
    orderBy?: WaittingTicketsOrderByWithRelationInput | WaittingTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaittingTickets.
     */
    cursor?: WaittingTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaittingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaittingTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaittingTickets.
     */
    distinct?: WaittingTicketsScalarFieldEnum | WaittingTicketsScalarFieldEnum[]
  }


  /**
   * WaittingTickets findMany
   */
  export type WaittingTicketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * Filter, which WaittingTickets to fetch.
     */
    where?: WaittingTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaittingTickets to fetch.
     */
    orderBy?: WaittingTicketsOrderByWithRelationInput | WaittingTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaittingTickets.
     */
    cursor?: WaittingTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaittingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaittingTickets.
     */
    skip?: number
    distinct?: WaittingTicketsScalarFieldEnum | WaittingTicketsScalarFieldEnum[]
  }


  /**
   * WaittingTickets create
   */
  export type WaittingTicketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * The data needed to create a WaittingTickets.
     */
    data: XOR<WaittingTicketsCreateInput, WaittingTicketsUncheckedCreateInput>
  }


  /**
   * WaittingTickets createMany
   */
  export type WaittingTicketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaittingTickets.
     */
    data: WaittingTicketsCreateManyInput | WaittingTicketsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WaittingTickets update
   */
  export type WaittingTicketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * The data needed to update a WaittingTickets.
     */
    data: XOR<WaittingTicketsUpdateInput, WaittingTicketsUncheckedUpdateInput>
    /**
     * Choose, which WaittingTickets to update.
     */
    where: WaittingTicketsWhereUniqueInput
  }


  /**
   * WaittingTickets updateMany
   */
  export type WaittingTicketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaittingTickets.
     */
    data: XOR<WaittingTicketsUpdateManyMutationInput, WaittingTicketsUncheckedUpdateManyInput>
    /**
     * Filter which WaittingTickets to update
     */
    where?: WaittingTicketsWhereInput
  }


  /**
   * WaittingTickets upsert
   */
  export type WaittingTicketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * The filter to search for the WaittingTickets to update in case it exists.
     */
    where: WaittingTicketsWhereUniqueInput
    /**
     * In case the WaittingTickets found by the `where` argument doesn't exist, create a new WaittingTickets with this data.
     */
    create: XOR<WaittingTicketsCreateInput, WaittingTicketsUncheckedCreateInput>
    /**
     * In case the WaittingTickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaittingTicketsUpdateInput, WaittingTicketsUncheckedUpdateInput>
  }


  /**
   * WaittingTickets delete
   */
  export type WaittingTicketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
    /**
     * Filter which WaittingTickets to delete.
     */
    where: WaittingTicketsWhereUniqueInput
  }


  /**
   * WaittingTickets deleteMany
   */
  export type WaittingTicketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaittingTickets to delete
     */
    where?: WaittingTicketsWhereInput
  }


  /**
   * WaittingTickets.products
   */
  export type WaittingTickets$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    where?: DataWhereInput
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    cursor?: DataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }


  /**
   * WaittingTickets without action
   */
  export type WaittingTicketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaittingTickets
     */
    select?: WaittingTicketsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaittingTicketsInclude<ExtArgs> | null
  }



  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    number: number | null
    total: number | null
    clientId: number | null
  }

  export type TicketSumAggregateOutputType = {
    number: number | null
    total: number | null
    clientId: number | null
  }

  export type TicketMinAggregateOutputType = {
    number: number | null
    total: number | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    number: number | null
    total: number | null
    clientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    number: number
    total: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    number?: true
    total?: true
    clientId?: true
  }

  export type TicketSumAggregateInputType = {
    number?: true
    total?: true
    clientId?: true
  }

  export type TicketMinAggregateInputType = {
    number?: true
    total?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    number?: true
    total?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    number?: true
    total?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    number: number
    total: number
    clientId: number | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    total?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Ticket$productsArgs<ExtArgs>
    paymentModes?: boolean | Ticket$paymentModesArgs<ExtArgs>
    client?: boolean | Ticket$clientArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    number?: boolean
    total?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Ticket$productsArgs<ExtArgs>
    paymentModes?: boolean | Ticket$paymentModesArgs<ExtArgs>
    client?: boolean | Ticket$clientArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      products: Prisma.$DataPayload<ExtArgs>[]
      paymentModes: Prisma.$PaymentModePayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      number: number
      total: number
      clientId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }


  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const ticketWithNumberOnly = await prisma.ticket.findMany({ select: { number: true } })
     * 
    **/
    findMany<T extends TicketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
    **/
    create<T extends TicketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketCreateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tickets.
     *     @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
    **/
    delete<T extends TicketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
    **/
    upsert<T extends TicketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Ticket$productsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findMany'> | Null>;

    paymentModes<T extends Ticket$paymentModesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$paymentModesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'findMany'> | Null>;

    client<T extends Ticket$clientArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly number: FieldRef<"Ticket", 'Int'>
    readonly total: FieldRef<"Ticket", 'Float'>
    readonly clientId: FieldRef<"Ticket", 'Int'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }


  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }


  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket.products
   */
  export type Ticket$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    where?: DataWhereInput
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    cursor?: DataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }


  /**
   * Ticket.paymentModes
   */
  export type Ticket$paymentModesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    where?: PaymentModeWhereInput
    orderBy?: PaymentModeOrderByWithRelationInput | PaymentModeOrderByWithRelationInput[]
    cursor?: PaymentModeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentModeScalarFieldEnum | PaymentModeScalarFieldEnum[]
  }


  /**
   * Ticket.client
   */
  export type Ticket$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }


  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
  }



  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone_number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone_number?: true
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
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
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
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    address: string
    phone_number: string
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
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
    address?: boolean
    phone_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickets?: boolean | Client$ticketsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Client$ticketsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      phone_number: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends ClientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends ClientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends ClientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends ClientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends ClientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends ClientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends ClientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends ClientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends ClientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickets<T extends Client$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Client$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly phone_number: FieldRef<"Client", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * Client.tickets
   */
  export type Client$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude<ExtArgs> | null
  }



  /**
   * Model PaymentMode
   */

  export type AggregatePaymentMode = {
    _count: PaymentModeCountAggregateOutputType | null
    _avg: PaymentModeAvgAggregateOutputType | null
    _sum: PaymentModeSumAggregateOutputType | null
    _min: PaymentModeMinAggregateOutputType | null
    _max: PaymentModeMaxAggregateOutputType | null
  }

  export type PaymentModeAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    ticketNumber: number | null
  }

  export type PaymentModeSumAggregateOutputType = {
    id: number | null
    amount: number | null
    ticketNumber: number | null
  }

  export type PaymentModeMinAggregateOutputType = {
    id: number | null
    mode: $Enums.PaymentEnum | null
    amount: number | null
    ticketNumber: number | null
  }

  export type PaymentModeMaxAggregateOutputType = {
    id: number | null
    mode: $Enums.PaymentEnum | null
    amount: number | null
    ticketNumber: number | null
  }

  export type PaymentModeCountAggregateOutputType = {
    id: number
    mode: number
    amount: number
    ticketNumber: number
    _all: number
  }


  export type PaymentModeAvgAggregateInputType = {
    id?: true
    amount?: true
    ticketNumber?: true
  }

  export type PaymentModeSumAggregateInputType = {
    id?: true
    amount?: true
    ticketNumber?: true
  }

  export type PaymentModeMinAggregateInputType = {
    id?: true
    mode?: true
    amount?: true
    ticketNumber?: true
  }

  export type PaymentModeMaxAggregateInputType = {
    id?: true
    mode?: true
    amount?: true
    ticketNumber?: true
  }

  export type PaymentModeCountAggregateInputType = {
    id?: true
    mode?: true
    amount?: true
    ticketNumber?: true
    _all?: true
  }

  export type PaymentModeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMode to aggregate.
     */
    where?: PaymentModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentModes to fetch.
     */
    orderBy?: PaymentModeOrderByWithRelationInput | PaymentModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentModes
    **/
    _count?: true | PaymentModeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentModeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentModeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentModeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentModeMaxAggregateInputType
  }

  export type GetPaymentModeAggregateType<T extends PaymentModeAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMode[P]>
      : GetScalarType<T[P], AggregatePaymentMode[P]>
  }




  export type PaymentModeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentModeWhereInput
    orderBy?: PaymentModeOrderByWithAggregationInput | PaymentModeOrderByWithAggregationInput[]
    by: PaymentModeScalarFieldEnum[] | PaymentModeScalarFieldEnum
    having?: PaymentModeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentModeCountAggregateInputType | true
    _avg?: PaymentModeAvgAggregateInputType
    _sum?: PaymentModeSumAggregateInputType
    _min?: PaymentModeMinAggregateInputType
    _max?: PaymentModeMaxAggregateInputType
  }

  export type PaymentModeGroupByOutputType = {
    id: number
    mode: $Enums.PaymentEnum
    amount: number
    ticketNumber: number | null
    _count: PaymentModeCountAggregateOutputType | null
    _avg: PaymentModeAvgAggregateOutputType | null
    _sum: PaymentModeSumAggregateOutputType | null
    _min: PaymentModeMinAggregateOutputType | null
    _max: PaymentModeMaxAggregateOutputType | null
  }

  type GetPaymentModeGroupByPayload<T extends PaymentModeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentModeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentModeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentModeGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentModeGroupByOutputType[P]>
        }
      >
    >


  export type PaymentModeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    amount?: boolean
    ticketNumber?: boolean
    ticket?: boolean | PaymentMode$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["paymentMode"]>

  export type PaymentModeSelectScalar = {
    id?: boolean
    mode?: boolean
    amount?: boolean
    ticketNumber?: boolean
  }

  export type PaymentModeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | PaymentMode$ticketArgs<ExtArgs>
  }


  export type $PaymentModePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMode"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mode: $Enums.PaymentEnum
      amount: number
      ticketNumber: number | null
    }, ExtArgs["result"]["paymentMode"]>
    composites: {}
  }


  type PaymentModeGetPayload<S extends boolean | null | undefined | PaymentModeDefaultArgs> = $Result.GetResult<Prisma.$PaymentModePayload, S>

  type PaymentModeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentModeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentModeCountAggregateInputType | true
    }

  export interface PaymentModeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMode'], meta: { name: 'PaymentMode' } }
    /**
     * Find zero or one PaymentMode that matches the filter.
     * @param {PaymentModeFindUniqueArgs} args - Arguments to find a PaymentMode
     * @example
     * // Get one PaymentMode
     * const paymentMode = await prisma.paymentMode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentModeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentModeFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentMode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentModeFindUniqueOrThrowArgs} args - Arguments to find a PaymentMode
     * @example
     * // Get one PaymentMode
     * const paymentMode = await prisma.paymentMode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentModeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentModeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentMode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentModeFindFirstArgs} args - Arguments to find a PaymentMode
     * @example
     * // Get one PaymentMode
     * const paymentMode = await prisma.paymentMode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentModeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentModeFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentMode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentModeFindFirstOrThrowArgs} args - Arguments to find a PaymentMode
     * @example
     * // Get one PaymentMode
     * const paymentMode = await prisma.paymentMode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentModeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentModeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentModes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentModeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentModes
     * const paymentModes = await prisma.paymentMode.findMany()
     * 
     * // Get first 10 PaymentModes
     * const paymentModes = await prisma.paymentMode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentModeWithIdOnly = await prisma.paymentMode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentModeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentModeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentMode.
     * @param {PaymentModeCreateArgs} args - Arguments to create a PaymentMode.
     * @example
     * // Create one PaymentMode
     * const PaymentMode = await prisma.paymentMode.create({
     *   data: {
     *     // ... data to create a PaymentMode
     *   }
     * })
     * 
    **/
    create<T extends PaymentModeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentModeCreateArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentModes.
     *     @param {PaymentModeCreateManyArgs} args - Arguments to create many PaymentModes.
     *     @example
     *     // Create many PaymentModes
     *     const paymentMode = await prisma.paymentMode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentModeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentModeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentMode.
     * @param {PaymentModeDeleteArgs} args - Arguments to delete one PaymentMode.
     * @example
     * // Delete one PaymentMode
     * const PaymentMode = await prisma.paymentMode.delete({
     *   where: {
     *     // ... filter to delete one PaymentMode
     *   }
     * })
     * 
    **/
    delete<T extends PaymentModeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentModeDeleteArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentMode.
     * @param {PaymentModeUpdateArgs} args - Arguments to update one PaymentMode.
     * @example
     * // Update one PaymentMode
     * const paymentMode = await prisma.paymentMode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentModeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentModeUpdateArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentModes.
     * @param {PaymentModeDeleteManyArgs} args - Arguments to filter PaymentModes to delete.
     * @example
     * // Delete a few PaymentModes
     * const { count } = await prisma.paymentMode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentModeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentModeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentModeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentModes
     * const paymentMode = await prisma.paymentMode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentModeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentModeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentMode.
     * @param {PaymentModeUpsertArgs} args - Arguments to update or create a PaymentMode.
     * @example
     * // Update or create a PaymentMode
     * const paymentMode = await prisma.paymentMode.upsert({
     *   create: {
     *     // ... data to create a PaymentMode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMode we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentModeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentModeUpsertArgs<ExtArgs>>
    ): Prisma__PaymentModeClient<$Result.GetResult<Prisma.$PaymentModePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentModeCountArgs} args - Arguments to filter PaymentModes to count.
     * @example
     * // Count the number of PaymentModes
     * const count = await prisma.paymentMode.count({
     *   where: {
     *     // ... the filter for the PaymentModes we want to count
     *   }
     * })
    **/
    count<T extends PaymentModeCountArgs>(
      args?: Subset<T, PaymentModeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentModeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentModeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentModeAggregateArgs>(args: Subset<T, PaymentModeAggregateArgs>): Prisma.PrismaPromise<GetPaymentModeAggregateType<T>>

    /**
     * Group by PaymentMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentModeGroupByArgs} args - Group by arguments.
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
      T extends PaymentModeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentModeGroupByArgs['orderBy'] }
        : { orderBy?: PaymentModeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentModeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentModeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMode model
   */
  readonly fields: PaymentModeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentModeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticket<T extends PaymentMode$ticketArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMode$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentMode model
   */ 
  interface PaymentModeFieldRefs {
    readonly id: FieldRef<"PaymentMode", 'Int'>
    readonly mode: FieldRef<"PaymentMode", 'PaymentEnum'>
    readonly amount: FieldRef<"PaymentMode", 'Float'>
    readonly ticketNumber: FieldRef<"PaymentMode", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PaymentMode findUnique
   */
  export type PaymentModeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMode to fetch.
     */
    where: PaymentModeWhereUniqueInput
  }


  /**
   * PaymentMode findUniqueOrThrow
   */
  export type PaymentModeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMode to fetch.
     */
    where: PaymentModeWhereUniqueInput
  }


  /**
   * PaymentMode findFirst
   */
  export type PaymentModeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMode to fetch.
     */
    where?: PaymentModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentModes to fetch.
     */
    orderBy?: PaymentModeOrderByWithRelationInput | PaymentModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentModes.
     */
    cursor?: PaymentModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentModes.
     */
    distinct?: PaymentModeScalarFieldEnum | PaymentModeScalarFieldEnum[]
  }


  /**
   * PaymentMode findFirstOrThrow
   */
  export type PaymentModeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMode to fetch.
     */
    where?: PaymentModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentModes to fetch.
     */
    orderBy?: PaymentModeOrderByWithRelationInput | PaymentModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentModes.
     */
    cursor?: PaymentModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentModes.
     */
    distinct?: PaymentModeScalarFieldEnum | PaymentModeScalarFieldEnum[]
  }


  /**
   * PaymentMode findMany
   */
  export type PaymentModeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * Filter, which PaymentModes to fetch.
     */
    where?: PaymentModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentModes to fetch.
     */
    orderBy?: PaymentModeOrderByWithRelationInput | PaymentModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentModes.
     */
    cursor?: PaymentModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentModes.
     */
    skip?: number
    distinct?: PaymentModeScalarFieldEnum | PaymentModeScalarFieldEnum[]
  }


  /**
   * PaymentMode create
   */
  export type PaymentModeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMode.
     */
    data: XOR<PaymentModeCreateInput, PaymentModeUncheckedCreateInput>
  }


  /**
   * PaymentMode createMany
   */
  export type PaymentModeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentModes.
     */
    data: PaymentModeCreateManyInput | PaymentModeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentMode update
   */
  export type PaymentModeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMode.
     */
    data: XOR<PaymentModeUpdateInput, PaymentModeUncheckedUpdateInput>
    /**
     * Choose, which PaymentMode to update.
     */
    where: PaymentModeWhereUniqueInput
  }


  /**
   * PaymentMode updateMany
   */
  export type PaymentModeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentModes.
     */
    data: XOR<PaymentModeUpdateManyMutationInput, PaymentModeUncheckedUpdateManyInput>
    /**
     * Filter which PaymentModes to update
     */
    where?: PaymentModeWhereInput
  }


  /**
   * PaymentMode upsert
   */
  export type PaymentModeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMode to update in case it exists.
     */
    where: PaymentModeWhereUniqueInput
    /**
     * In case the PaymentMode found by the `where` argument doesn't exist, create a new PaymentMode with this data.
     */
    create: XOR<PaymentModeCreateInput, PaymentModeUncheckedCreateInput>
    /**
     * In case the PaymentMode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentModeUpdateInput, PaymentModeUncheckedUpdateInput>
  }


  /**
   * PaymentMode delete
   */
  export type PaymentModeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
    /**
     * Filter which PaymentMode to delete.
     */
    where: PaymentModeWhereUniqueInput
  }


  /**
   * PaymentMode deleteMany
   */
  export type PaymentModeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentModes to delete
     */
    where?: PaymentModeWhereInput
  }


  /**
   * PaymentMode.ticket
   */
  export type PaymentMode$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }


  /**
   * PaymentMode without action
   */
  export type PaymentModeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMode
     */
    select?: PaymentModeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentModeInclude<ExtArgs> | null
  }



  /**
   * Model Famille
   */

  export type AggregateFamille = {
    _count: FamilleCountAggregateOutputType | null
    _avg: FamilleAvgAggregateOutputType | null
    _sum: FamilleSumAggregateOutputType | null
    _min: FamilleMinAggregateOutputType | null
    _max: FamilleMaxAggregateOutputType | null
  }

  export type FamilleAvgAggregateOutputType = {
    code: number | null
    rayon_code: number | null
  }

  export type FamilleSumAggregateOutputType = {
    code: number | null
    rayon_code: number | null
  }

  export type FamilleMinAggregateOutputType = {
    code: number | null
    libelle: string | null
    rayon_code: number | null
  }

  export type FamilleMaxAggregateOutputType = {
    code: number | null
    libelle: string | null
    rayon_code: number | null
  }

  export type FamilleCountAggregateOutputType = {
    code: number
    libelle: number
    rayon_code: number
    _all: number
  }


  export type FamilleAvgAggregateInputType = {
    code?: true
    rayon_code?: true
  }

  export type FamilleSumAggregateInputType = {
    code?: true
    rayon_code?: true
  }

  export type FamilleMinAggregateInputType = {
    code?: true
    libelle?: true
    rayon_code?: true
  }

  export type FamilleMaxAggregateInputType = {
    code?: true
    libelle?: true
    rayon_code?: true
  }

  export type FamilleCountAggregateInputType = {
    code?: true
    libelle?: true
    rayon_code?: true
    _all?: true
  }

  export type FamilleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Famille to aggregate.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Familles
    **/
    _count?: true | FamilleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilleMaxAggregateInputType
  }

  export type GetFamilleAggregateType<T extends FamilleAggregateArgs> = {
        [P in keyof T & keyof AggregateFamille]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamille[P]>
      : GetScalarType<T[P], AggregateFamille[P]>
  }




  export type FamilleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilleWhereInput
    orderBy?: FamilleOrderByWithAggregationInput | FamilleOrderByWithAggregationInput[]
    by: FamilleScalarFieldEnum[] | FamilleScalarFieldEnum
    having?: FamilleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilleCountAggregateInputType | true
    _avg?: FamilleAvgAggregateInputType
    _sum?: FamilleSumAggregateInputType
    _min?: FamilleMinAggregateInputType
    _max?: FamilleMaxAggregateInputType
  }

  export type FamilleGroupByOutputType = {
    code: number
    libelle: string | null
    rayon_code: number | null
    _count: FamilleCountAggregateOutputType | null
    _avg: FamilleAvgAggregateOutputType | null
    _sum: FamilleSumAggregateOutputType | null
    _min: FamilleMinAggregateOutputType | null
    _max: FamilleMaxAggregateOutputType | null
  }

  type GetFamilleGroupByPayload<T extends FamilleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilleGroupByOutputType[P]>
            : GetScalarType<T[P], FamilleGroupByOutputType[P]>
        }
      >
    >


  export type FamilleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    libelle?: boolean
    rayon_code?: boolean
    rayon?: boolean | Famille$rayonArgs<ExtArgs>
    products?: boolean | Famille$productsArgs<ExtArgs>
    Data?: boolean | Famille$DataArgs<ExtArgs>
    _count?: boolean | FamilleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["famille"]>

  export type FamilleSelectScalar = {
    code?: boolean
    libelle?: boolean
    rayon_code?: boolean
  }

  export type FamilleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rayon?: boolean | Famille$rayonArgs<ExtArgs>
    products?: boolean | Famille$productsArgs<ExtArgs>
    Data?: boolean | Famille$DataArgs<ExtArgs>
    _count?: boolean | FamilleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FamillePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Famille"
    objects: {
      rayon: Prisma.$RayonPayload<ExtArgs> | null
      products: Prisma.$ProductPayload<ExtArgs>[]
      Data: Prisma.$DataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: number
      libelle: string | null
      rayon_code: number | null
    }, ExtArgs["result"]["famille"]>
    composites: {}
  }


  type FamilleGetPayload<S extends boolean | null | undefined | FamilleDefaultArgs> = $Result.GetResult<Prisma.$FamillePayload, S>

  type FamilleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamilleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FamilleCountAggregateInputType | true
    }

  export interface FamilleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Famille'], meta: { name: 'Famille' } }
    /**
     * Find zero or one Famille that matches the filter.
     * @param {FamilleFindUniqueArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FamilleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FamilleFindUniqueArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Famille that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FamilleFindUniqueOrThrowArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FamilleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Famille that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleFindFirstArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FamilleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilleFindFirstArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Famille that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleFindFirstOrThrowArgs} args - Arguments to find a Famille
     * @example
     * // Get one Famille
     * const famille = await prisma.famille.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FamilleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Familles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familles
     * const familles = await prisma.famille.findMany()
     * 
     * // Get first 10 Familles
     * const familles = await prisma.famille.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const familleWithCodeOnly = await prisma.famille.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends FamilleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Famille.
     * @param {FamilleCreateArgs} args - Arguments to create a Famille.
     * @example
     * // Create one Famille
     * const Famille = await prisma.famille.create({
     *   data: {
     *     // ... data to create a Famille
     *   }
     * })
     * 
    **/
    create<T extends FamilleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilleCreateArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Familles.
     *     @param {FamilleCreateManyArgs} args - Arguments to create many Familles.
     *     @example
     *     // Create many Familles
     *     const famille = await prisma.famille.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FamilleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Famille.
     * @param {FamilleDeleteArgs} args - Arguments to delete one Famille.
     * @example
     * // Delete one Famille
     * const Famille = await prisma.famille.delete({
     *   where: {
     *     // ... filter to delete one Famille
     *   }
     * })
     * 
    **/
    delete<T extends FamilleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FamilleDeleteArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Famille.
     * @param {FamilleUpdateArgs} args - Arguments to update one Famille.
     * @example
     * // Update one Famille
     * const famille = await prisma.famille.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FamilleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilleUpdateArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Familles.
     * @param {FamilleDeleteManyArgs} args - Arguments to filter Familles to delete.
     * @example
     * // Delete a few Familles
     * const { count } = await prisma.famille.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FamilleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familles
     * const famille = await prisma.famille.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FamilleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FamilleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Famille.
     * @param {FamilleUpsertArgs} args - Arguments to update or create a Famille.
     * @example
     * // Update or create a Famille
     * const famille = await prisma.famille.upsert({
     *   create: {
     *     // ... data to create a Famille
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Famille we want to update
     *   }
     * })
    **/
    upsert<T extends FamilleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FamilleUpsertArgs<ExtArgs>>
    ): Prisma__FamilleClient<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Familles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleCountArgs} args - Arguments to filter Familles to count.
     * @example
     * // Count the number of Familles
     * const count = await prisma.famille.count({
     *   where: {
     *     // ... the filter for the Familles we want to count
     *   }
     * })
    **/
    count<T extends FamilleCountArgs>(
      args?: Subset<T, FamilleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Famille.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilleAggregateArgs>(args: Subset<T, FamilleAggregateArgs>): Prisma.PrismaPromise<GetFamilleAggregateType<T>>

    /**
     * Group by Famille.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilleGroupByArgs} args - Group by arguments.
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
      T extends FamilleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilleGroupByArgs['orderBy'] }
        : { orderBy?: FamilleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Famille model
   */
  readonly fields: FamilleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Famille.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rayon<T extends Famille$rayonArgs<ExtArgs> = {}>(args?: Subset<T, Famille$rayonArgs<ExtArgs>>): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    products<T extends Famille$productsArgs<ExtArgs> = {}>(args?: Subset<T, Famille$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    Data<T extends Famille$DataArgs<ExtArgs> = {}>(args?: Subset<T, Famille$DataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Famille model
   */ 
  interface FamilleFieldRefs {
    readonly code: FieldRef<"Famille", 'Int'>
    readonly libelle: FieldRef<"Famille", 'String'>
    readonly rayon_code: FieldRef<"Famille", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Famille findUnique
   */
  export type FamilleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where: FamilleWhereUniqueInput
  }


  /**
   * Famille findUniqueOrThrow
   */
  export type FamilleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where: FamilleWhereUniqueInput
  }


  /**
   * Famille findFirst
   */
  export type FamilleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familles.
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familles.
     */
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }


  /**
   * Famille findFirstOrThrow
   */
  export type FamilleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Famille to fetch.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Familles.
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Familles.
     */
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }


  /**
   * Famille findMany
   */
  export type FamilleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter, which Familles to fetch.
     */
    where?: FamilleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Familles to fetch.
     */
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Familles.
     */
    cursor?: FamilleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Familles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Familles.
     */
    skip?: number
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }


  /**
   * Famille create
   */
  export type FamilleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * The data needed to create a Famille.
     */
    data: XOR<FamilleCreateInput, FamilleUncheckedCreateInput>
  }


  /**
   * Famille createMany
   */
  export type FamilleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Familles.
     */
    data: FamilleCreateManyInput | FamilleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Famille update
   */
  export type FamilleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * The data needed to update a Famille.
     */
    data: XOR<FamilleUpdateInput, FamilleUncheckedUpdateInput>
    /**
     * Choose, which Famille to update.
     */
    where: FamilleWhereUniqueInput
  }


  /**
   * Famille updateMany
   */
  export type FamilleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Familles.
     */
    data: XOR<FamilleUpdateManyMutationInput, FamilleUncheckedUpdateManyInput>
    /**
     * Filter which Familles to update
     */
    where?: FamilleWhereInput
  }


  /**
   * Famille upsert
   */
  export type FamilleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * The filter to search for the Famille to update in case it exists.
     */
    where: FamilleWhereUniqueInput
    /**
     * In case the Famille found by the `where` argument doesn't exist, create a new Famille with this data.
     */
    create: XOR<FamilleCreateInput, FamilleUncheckedCreateInput>
    /**
     * In case the Famille was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilleUpdateInput, FamilleUncheckedUpdateInput>
  }


  /**
   * Famille delete
   */
  export type FamilleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    /**
     * Filter which Famille to delete.
     */
    where: FamilleWhereUniqueInput
  }


  /**
   * Famille deleteMany
   */
  export type FamilleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Familles to delete
     */
    where?: FamilleWhereInput
  }


  /**
   * Famille.rayon
   */
  export type Famille$rayonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    where?: RayonWhereInput
  }


  /**
   * Famille.products
   */
  export type Famille$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Famille.Data
   */
  export type Famille$DataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    where?: DataWhereInput
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    cursor?: DataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }


  /**
   * Famille without action
   */
  export type FamilleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
  }



  /**
   * Model Rayon
   */

  export type AggregateRayon = {
    _count: RayonCountAggregateOutputType | null
    _avg: RayonAvgAggregateOutputType | null
    _sum: RayonSumAggregateOutputType | null
    _min: RayonMinAggregateOutputType | null
    _max: RayonMaxAggregateOutputType | null
  }

  export type RayonAvgAggregateOutputType = {
    code: number | null
  }

  export type RayonSumAggregateOutputType = {
    code: number | null
  }

  export type RayonMinAggregateOutputType = {
    code: number | null
    libelle: string | null
  }

  export type RayonMaxAggregateOutputType = {
    code: number | null
    libelle: string | null
  }

  export type RayonCountAggregateOutputType = {
    code: number
    libelle: number
    _all: number
  }


  export type RayonAvgAggregateInputType = {
    code?: true
  }

  export type RayonSumAggregateInputType = {
    code?: true
  }

  export type RayonMinAggregateInputType = {
    code?: true
    libelle?: true
  }

  export type RayonMaxAggregateInputType = {
    code?: true
    libelle?: true
  }

  export type RayonCountAggregateInputType = {
    code?: true
    libelle?: true
    _all?: true
  }

  export type RayonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rayon to aggregate.
     */
    where?: RayonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rayons to fetch.
     */
    orderBy?: RayonOrderByWithRelationInput | RayonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RayonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rayons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rayons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rayons
    **/
    _count?: true | RayonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RayonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RayonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RayonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RayonMaxAggregateInputType
  }

  export type GetRayonAggregateType<T extends RayonAggregateArgs> = {
        [P in keyof T & keyof AggregateRayon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRayon[P]>
      : GetScalarType<T[P], AggregateRayon[P]>
  }




  export type RayonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RayonWhereInput
    orderBy?: RayonOrderByWithAggregationInput | RayonOrderByWithAggregationInput[]
    by: RayonScalarFieldEnum[] | RayonScalarFieldEnum
    having?: RayonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RayonCountAggregateInputType | true
    _avg?: RayonAvgAggregateInputType
    _sum?: RayonSumAggregateInputType
    _min?: RayonMinAggregateInputType
    _max?: RayonMaxAggregateInputType
  }

  export type RayonGroupByOutputType = {
    code: number
    libelle: string | null
    _count: RayonCountAggregateOutputType | null
    _avg: RayonAvgAggregateOutputType | null
    _sum: RayonSumAggregateOutputType | null
    _min: RayonMinAggregateOutputType | null
    _max: RayonMaxAggregateOutputType | null
  }

  type GetRayonGroupByPayload<T extends RayonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RayonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RayonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RayonGroupByOutputType[P]>
            : GetScalarType<T[P], RayonGroupByOutputType[P]>
        }
      >
    >


  export type RayonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    libelle?: boolean
    famille?: boolean | Rayon$familleArgs<ExtArgs>
    products?: boolean | Rayon$productsArgs<ExtArgs>
    _count?: boolean | RayonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rayon"]>

  export type RayonSelectScalar = {
    code?: boolean
    libelle?: boolean
  }

  export type RayonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    famille?: boolean | Rayon$familleArgs<ExtArgs>
    products?: boolean | Rayon$productsArgs<ExtArgs>
    _count?: boolean | RayonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RayonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rayon"
    objects: {
      famille: Prisma.$FamillePayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: number
      libelle: string | null
    }, ExtArgs["result"]["rayon"]>
    composites: {}
  }


  type RayonGetPayload<S extends boolean | null | undefined | RayonDefaultArgs> = $Result.GetResult<Prisma.$RayonPayload, S>

  type RayonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RayonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RayonCountAggregateInputType | true
    }

  export interface RayonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rayon'], meta: { name: 'Rayon' } }
    /**
     * Find zero or one Rayon that matches the filter.
     * @param {RayonFindUniqueArgs} args - Arguments to find a Rayon
     * @example
     * // Get one Rayon
     * const rayon = await prisma.rayon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RayonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RayonFindUniqueArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rayon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RayonFindUniqueOrThrowArgs} args - Arguments to find a Rayon
     * @example
     * // Get one Rayon
     * const rayon = await prisma.rayon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RayonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RayonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rayon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RayonFindFirstArgs} args - Arguments to find a Rayon
     * @example
     * // Get one Rayon
     * const rayon = await prisma.rayon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RayonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RayonFindFirstArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rayon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RayonFindFirstOrThrowArgs} args - Arguments to find a Rayon
     * @example
     * // Get one Rayon
     * const rayon = await prisma.rayon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RayonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RayonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rayons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RayonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rayons
     * const rayons = await prisma.rayon.findMany()
     * 
     * // Get first 10 Rayons
     * const rayons = await prisma.rayon.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const rayonWithCodeOnly = await prisma.rayon.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends RayonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RayonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rayon.
     * @param {RayonCreateArgs} args - Arguments to create a Rayon.
     * @example
     * // Create one Rayon
     * const Rayon = await prisma.rayon.create({
     *   data: {
     *     // ... data to create a Rayon
     *   }
     * })
     * 
    **/
    create<T extends RayonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RayonCreateArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rayons.
     *     @param {RayonCreateManyArgs} args - Arguments to create many Rayons.
     *     @example
     *     // Create many Rayons
     *     const rayon = await prisma.rayon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RayonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RayonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rayon.
     * @param {RayonDeleteArgs} args - Arguments to delete one Rayon.
     * @example
     * // Delete one Rayon
     * const Rayon = await prisma.rayon.delete({
     *   where: {
     *     // ... filter to delete one Rayon
     *   }
     * })
     * 
    **/
    delete<T extends RayonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RayonDeleteArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rayon.
     * @param {RayonUpdateArgs} args - Arguments to update one Rayon.
     * @example
     * // Update one Rayon
     * const rayon = await prisma.rayon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RayonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RayonUpdateArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rayons.
     * @param {RayonDeleteManyArgs} args - Arguments to filter Rayons to delete.
     * @example
     * // Delete a few Rayons
     * const { count } = await prisma.rayon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RayonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RayonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rayons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RayonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rayons
     * const rayon = await prisma.rayon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RayonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RayonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rayon.
     * @param {RayonUpsertArgs} args - Arguments to update or create a Rayon.
     * @example
     * // Update or create a Rayon
     * const rayon = await prisma.rayon.upsert({
     *   create: {
     *     // ... data to create a Rayon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rayon we want to update
     *   }
     * })
    **/
    upsert<T extends RayonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RayonUpsertArgs<ExtArgs>>
    ): Prisma__RayonClient<$Result.GetResult<Prisma.$RayonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rayons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RayonCountArgs} args - Arguments to filter Rayons to count.
     * @example
     * // Count the number of Rayons
     * const count = await prisma.rayon.count({
     *   where: {
     *     // ... the filter for the Rayons we want to count
     *   }
     * })
    **/
    count<T extends RayonCountArgs>(
      args?: Subset<T, RayonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RayonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rayon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RayonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RayonAggregateArgs>(args: Subset<T, RayonAggregateArgs>): Prisma.PrismaPromise<GetRayonAggregateType<T>>

    /**
     * Group by Rayon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RayonGroupByArgs} args - Group by arguments.
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
      T extends RayonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RayonGroupByArgs['orderBy'] }
        : { orderBy?: RayonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RayonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRayonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rayon model
   */
  readonly fields: RayonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rayon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RayonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    famille<T extends Rayon$familleArgs<ExtArgs> = {}>(args?: Subset<T, Rayon$familleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamillePayload<ExtArgs>, T, 'findMany'> | Null>;

    products<T extends Rayon$productsArgs<ExtArgs> = {}>(args?: Subset<T, Rayon$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rayon model
   */ 
  interface RayonFieldRefs {
    readonly code: FieldRef<"Rayon", 'Int'>
    readonly libelle: FieldRef<"Rayon", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Rayon findUnique
   */
  export type RayonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * Filter, which Rayon to fetch.
     */
    where: RayonWhereUniqueInput
  }


  /**
   * Rayon findUniqueOrThrow
   */
  export type RayonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * Filter, which Rayon to fetch.
     */
    where: RayonWhereUniqueInput
  }


  /**
   * Rayon findFirst
   */
  export type RayonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * Filter, which Rayon to fetch.
     */
    where?: RayonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rayons to fetch.
     */
    orderBy?: RayonOrderByWithRelationInput | RayonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rayons.
     */
    cursor?: RayonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rayons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rayons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rayons.
     */
    distinct?: RayonScalarFieldEnum | RayonScalarFieldEnum[]
  }


  /**
   * Rayon findFirstOrThrow
   */
  export type RayonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * Filter, which Rayon to fetch.
     */
    where?: RayonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rayons to fetch.
     */
    orderBy?: RayonOrderByWithRelationInput | RayonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rayons.
     */
    cursor?: RayonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rayons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rayons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rayons.
     */
    distinct?: RayonScalarFieldEnum | RayonScalarFieldEnum[]
  }


  /**
   * Rayon findMany
   */
  export type RayonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * Filter, which Rayons to fetch.
     */
    where?: RayonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rayons to fetch.
     */
    orderBy?: RayonOrderByWithRelationInput | RayonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rayons.
     */
    cursor?: RayonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rayons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rayons.
     */
    skip?: number
    distinct?: RayonScalarFieldEnum | RayonScalarFieldEnum[]
  }


  /**
   * Rayon create
   */
  export type RayonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * The data needed to create a Rayon.
     */
    data: XOR<RayonCreateInput, RayonUncheckedCreateInput>
  }


  /**
   * Rayon createMany
   */
  export type RayonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rayons.
     */
    data: RayonCreateManyInput | RayonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rayon update
   */
  export type RayonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * The data needed to update a Rayon.
     */
    data: XOR<RayonUpdateInput, RayonUncheckedUpdateInput>
    /**
     * Choose, which Rayon to update.
     */
    where: RayonWhereUniqueInput
  }


  /**
   * Rayon updateMany
   */
  export type RayonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rayons.
     */
    data: XOR<RayonUpdateManyMutationInput, RayonUncheckedUpdateManyInput>
    /**
     * Filter which Rayons to update
     */
    where?: RayonWhereInput
  }


  /**
   * Rayon upsert
   */
  export type RayonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * The filter to search for the Rayon to update in case it exists.
     */
    where: RayonWhereUniqueInput
    /**
     * In case the Rayon found by the `where` argument doesn't exist, create a new Rayon with this data.
     */
    create: XOR<RayonCreateInput, RayonUncheckedCreateInput>
    /**
     * In case the Rayon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RayonUpdateInput, RayonUncheckedUpdateInput>
  }


  /**
   * Rayon delete
   */
  export type RayonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
    /**
     * Filter which Rayon to delete.
     */
    where: RayonWhereUniqueInput
  }


  /**
   * Rayon deleteMany
   */
  export type RayonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rayons to delete
     */
    where?: RayonWhereInput
  }


  /**
   * Rayon.famille
   */
  export type Rayon$familleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Famille
     */
    select?: FamilleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilleInclude<ExtArgs> | null
    where?: FamilleWhereInput
    orderBy?: FamilleOrderByWithRelationInput | FamilleOrderByWithRelationInput[]
    cursor?: FamilleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilleScalarFieldEnum | FamilleScalarFieldEnum[]
  }


  /**
   * Rayon.products
   */
  export type Rayon$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Rayon without action
   */
  export type RayonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rayon
     */
    select?: RayonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RayonInclude<ExtArgs> | null
  }



  /**
   * Model Tva
   */

  export type AggregateTva = {
    _count: TvaCountAggregateOutputType | null
    _avg: TvaAvgAggregateOutputType | null
    _sum: TvaSumAggregateOutputType | null
    _min: TvaMinAggregateOutputType | null
    _max: TvaMaxAggregateOutputType | null
  }

  export type TvaAvgAggregateOutputType = {
    taux: number | null
    code: number | null
  }

  export type TvaSumAggregateOutputType = {
    taux: number | null
    code: number | null
  }

  export type TvaMinAggregateOutputType = {
    libelle: string | null
    taux: number | null
    code: number | null
  }

  export type TvaMaxAggregateOutputType = {
    libelle: string | null
    taux: number | null
    code: number | null
  }

  export type TvaCountAggregateOutputType = {
    libelle: number
    taux: number
    code: number
    _all: number
  }


  export type TvaAvgAggregateInputType = {
    taux?: true
    code?: true
  }

  export type TvaSumAggregateInputType = {
    taux?: true
    code?: true
  }

  export type TvaMinAggregateInputType = {
    libelle?: true
    taux?: true
    code?: true
  }

  export type TvaMaxAggregateInputType = {
    libelle?: true
    taux?: true
    code?: true
  }

  export type TvaCountAggregateInputType = {
    libelle?: true
    taux?: true
    code?: true
    _all?: true
  }

  export type TvaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tva to aggregate.
     */
    where?: TvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tvas to fetch.
     */
    orderBy?: TvaOrderByWithRelationInput | TvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tvas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tvas
    **/
    _count?: true | TvaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TvaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TvaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TvaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TvaMaxAggregateInputType
  }

  export type GetTvaAggregateType<T extends TvaAggregateArgs> = {
        [P in keyof T & keyof AggregateTva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTva[P]>
      : GetScalarType<T[P], AggregateTva[P]>
  }




  export type TvaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TvaWhereInput
    orderBy?: TvaOrderByWithAggregationInput | TvaOrderByWithAggregationInput[]
    by: TvaScalarFieldEnum[] | TvaScalarFieldEnum
    having?: TvaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TvaCountAggregateInputType | true
    _avg?: TvaAvgAggregateInputType
    _sum?: TvaSumAggregateInputType
    _min?: TvaMinAggregateInputType
    _max?: TvaMaxAggregateInputType
  }

  export type TvaGroupByOutputType = {
    libelle: string | null
    taux: number | null
    code: number
    _count: TvaCountAggregateOutputType | null
    _avg: TvaAvgAggregateOutputType | null
    _sum: TvaSumAggregateOutputType | null
    _min: TvaMinAggregateOutputType | null
    _max: TvaMaxAggregateOutputType | null
  }

  type GetTvaGroupByPayload<T extends TvaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TvaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TvaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TvaGroupByOutputType[P]>
            : GetScalarType<T[P], TvaGroupByOutputType[P]>
        }
      >
    >


  export type TvaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    libelle?: boolean
    taux?: boolean
    code?: boolean
    products?: boolean | Tva$productsArgs<ExtArgs>
    Data?: boolean | Tva$DataArgs<ExtArgs>
    _count?: boolean | TvaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tva"]>

  export type TvaSelectScalar = {
    libelle?: boolean
    taux?: boolean
    code?: boolean
  }

  export type TvaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Tva$productsArgs<ExtArgs>
    Data?: boolean | Tva$DataArgs<ExtArgs>
    _count?: boolean | TvaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TvaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tva"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      Data: Prisma.$DataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      libelle: string | null
      taux: number | null
      code: number
    }, ExtArgs["result"]["tva"]>
    composites: {}
  }


  type TvaGetPayload<S extends boolean | null | undefined | TvaDefaultArgs> = $Result.GetResult<Prisma.$TvaPayload, S>

  type TvaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TvaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TvaCountAggregateInputType | true
    }

  export interface TvaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tva'], meta: { name: 'Tva' } }
    /**
     * Find zero or one Tva that matches the filter.
     * @param {TvaFindUniqueArgs} args - Arguments to find a Tva
     * @example
     * // Get one Tva
     * const tva = await prisma.tva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TvaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TvaFindUniqueArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tva that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TvaFindUniqueOrThrowArgs} args - Arguments to find a Tva
     * @example
     * // Get one Tva
     * const tva = await prisma.tva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TvaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TvaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvaFindFirstArgs} args - Arguments to find a Tva
     * @example
     * // Get one Tva
     * const tva = await prisma.tva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TvaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TvaFindFirstArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvaFindFirstOrThrowArgs} args - Arguments to find a Tva
     * @example
     * // Get one Tva
     * const tva = await prisma.tva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TvaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TvaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tvas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tvas
     * const tvas = await prisma.tva.findMany()
     * 
     * // Get first 10 Tvas
     * const tvas = await prisma.tva.findMany({ take: 10 })
     * 
     * // Only select the `libelle`
     * const tvaWithLibelleOnly = await prisma.tva.findMany({ select: { libelle: true } })
     * 
    **/
    findMany<T extends TvaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TvaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tva.
     * @param {TvaCreateArgs} args - Arguments to create a Tva.
     * @example
     * // Create one Tva
     * const Tva = await prisma.tva.create({
     *   data: {
     *     // ... data to create a Tva
     *   }
     * })
     * 
    **/
    create<T extends TvaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TvaCreateArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tvas.
     *     @param {TvaCreateManyArgs} args - Arguments to create many Tvas.
     *     @example
     *     // Create many Tvas
     *     const tva = await prisma.tva.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TvaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TvaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tva.
     * @param {TvaDeleteArgs} args - Arguments to delete one Tva.
     * @example
     * // Delete one Tva
     * const Tva = await prisma.tva.delete({
     *   where: {
     *     // ... filter to delete one Tva
     *   }
     * })
     * 
    **/
    delete<T extends TvaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TvaDeleteArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tva.
     * @param {TvaUpdateArgs} args - Arguments to update one Tva.
     * @example
     * // Update one Tva
     * const tva = await prisma.tva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TvaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TvaUpdateArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tvas.
     * @param {TvaDeleteManyArgs} args - Arguments to filter Tvas to delete.
     * @example
     * // Delete a few Tvas
     * const { count } = await prisma.tva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TvaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TvaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tvas
     * const tva = await prisma.tva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TvaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TvaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tva.
     * @param {TvaUpsertArgs} args - Arguments to update or create a Tva.
     * @example
     * // Update or create a Tva
     * const tva = await prisma.tva.upsert({
     *   create: {
     *     // ... data to create a Tva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tva we want to update
     *   }
     * })
    **/
    upsert<T extends TvaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TvaUpsertArgs<ExtArgs>>
    ): Prisma__TvaClient<$Result.GetResult<Prisma.$TvaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tvas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvaCountArgs} args - Arguments to filter Tvas to count.
     * @example
     * // Count the number of Tvas
     * const count = await prisma.tva.count({
     *   where: {
     *     // ... the filter for the Tvas we want to count
     *   }
     * })
    **/
    count<T extends TvaCountArgs>(
      args?: Subset<T, TvaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TvaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TvaAggregateArgs>(args: Subset<T, TvaAggregateArgs>): Prisma.PrismaPromise<GetTvaAggregateType<T>>

    /**
     * Group by Tva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvaGroupByArgs} args - Group by arguments.
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
      T extends TvaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TvaGroupByArgs['orderBy'] }
        : { orderBy?: TvaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TvaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTvaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tva model
   */
  readonly fields: TvaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TvaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Tva$productsArgs<ExtArgs> = {}>(args?: Subset<T, Tva$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    Data<T extends Tva$DataArgs<ExtArgs> = {}>(args?: Subset<T, Tva$DataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tva model
   */ 
  interface TvaFieldRefs {
    readonly libelle: FieldRef<"Tva", 'String'>
    readonly taux: FieldRef<"Tva", 'Float'>
    readonly code: FieldRef<"Tva", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Tva findUnique
   */
  export type TvaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * Filter, which Tva to fetch.
     */
    where: TvaWhereUniqueInput
  }


  /**
   * Tva findUniqueOrThrow
   */
  export type TvaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * Filter, which Tva to fetch.
     */
    where: TvaWhereUniqueInput
  }


  /**
   * Tva findFirst
   */
  export type TvaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * Filter, which Tva to fetch.
     */
    where?: TvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tvas to fetch.
     */
    orderBy?: TvaOrderByWithRelationInput | TvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tvas.
     */
    cursor?: TvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tvas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tvas.
     */
    distinct?: TvaScalarFieldEnum | TvaScalarFieldEnum[]
  }


  /**
   * Tva findFirstOrThrow
   */
  export type TvaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * Filter, which Tva to fetch.
     */
    where?: TvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tvas to fetch.
     */
    orderBy?: TvaOrderByWithRelationInput | TvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tvas.
     */
    cursor?: TvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tvas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tvas.
     */
    distinct?: TvaScalarFieldEnum | TvaScalarFieldEnum[]
  }


  /**
   * Tva findMany
   */
  export type TvaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * Filter, which Tvas to fetch.
     */
    where?: TvaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tvas to fetch.
     */
    orderBy?: TvaOrderByWithRelationInput | TvaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tvas.
     */
    cursor?: TvaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tvas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tvas.
     */
    skip?: number
    distinct?: TvaScalarFieldEnum | TvaScalarFieldEnum[]
  }


  /**
   * Tva create
   */
  export type TvaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tva.
     */
    data: XOR<TvaCreateInput, TvaUncheckedCreateInput>
  }


  /**
   * Tva createMany
   */
  export type TvaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tvas.
     */
    data: TvaCreateManyInput | TvaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tva update
   */
  export type TvaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tva.
     */
    data: XOR<TvaUpdateInput, TvaUncheckedUpdateInput>
    /**
     * Choose, which Tva to update.
     */
    where: TvaWhereUniqueInput
  }


  /**
   * Tva updateMany
   */
  export type TvaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tvas.
     */
    data: XOR<TvaUpdateManyMutationInput, TvaUncheckedUpdateManyInput>
    /**
     * Filter which Tvas to update
     */
    where?: TvaWhereInput
  }


  /**
   * Tva upsert
   */
  export type TvaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tva to update in case it exists.
     */
    where: TvaWhereUniqueInput
    /**
     * In case the Tva found by the `where` argument doesn't exist, create a new Tva with this data.
     */
    create: XOR<TvaCreateInput, TvaUncheckedCreateInput>
    /**
     * In case the Tva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TvaUpdateInput, TvaUncheckedUpdateInput>
  }


  /**
   * Tva delete
   */
  export type TvaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
    /**
     * Filter which Tva to delete.
     */
    where: TvaWhereUniqueInput
  }


  /**
   * Tva deleteMany
   */
  export type TvaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tvas to delete
     */
    where?: TvaWhereInput
  }


  /**
   * Tva.products
   */
  export type Tva$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Tva.Data
   */
  export type Tva$DataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Data
     */
    select?: DataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataInclude<ExtArgs> | null
    where?: DataWhereInput
    orderBy?: DataOrderByWithRelationInput | DataOrderByWithRelationInput[]
    cursor?: DataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataScalarFieldEnum | DataScalarFieldEnum[]
  }


  /**
   * Tva without action
   */
  export type TvaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tva
     */
    select?: TvaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TvaInclude<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    code: 'code',
    code_interne: 'code_interne',
    libelle: 'libelle',
    price: 'price',
    pvht: 'pvht',
    rayon_code: 'rayon_code',
    famille_code: 'famille_code',
    tva_code: 'tva_code'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const DataScalarFieldEnum: {
    id: 'id',
    code: 'code',
    code_interne: 'code_interne',
    libelle: 'libelle',
    price: 'price',
    quantity: 'quantity',
    pvht: 'pvht',
    total_pvht: 'total_pvht',
    total: 'total',
    ticketNumber: 'ticketNumber',
    waittingTicketsNumber: 'waittingTicketsNumber',
    famille_code: 'famille_code',
    tva_code: 'tva_code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataScalarFieldEnum = (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum]


  export const WaittingTicketsScalarFieldEnum: {
    number: 'number',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaittingTicketsScalarFieldEnum = (typeof WaittingTicketsScalarFieldEnum)[keyof typeof WaittingTicketsScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    number: 'number',
    total: 'total',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone_number: 'phone_number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const PaymentModeScalarFieldEnum: {
    id: 'id',
    mode: 'mode',
    amount: 'amount',
    ticketNumber: 'ticketNumber'
  };

  export type PaymentModeScalarFieldEnum = (typeof PaymentModeScalarFieldEnum)[keyof typeof PaymentModeScalarFieldEnum]


  export const FamilleScalarFieldEnum: {
    code: 'code',
    libelle: 'libelle',
    rayon_code: 'rayon_code'
  };

  export type FamilleScalarFieldEnum = (typeof FamilleScalarFieldEnum)[keyof typeof FamilleScalarFieldEnum]


  export const RayonScalarFieldEnum: {
    code: 'code',
    libelle: 'libelle'
  };

  export type RayonScalarFieldEnum = (typeof RayonScalarFieldEnum)[keyof typeof RayonScalarFieldEnum]


  export const TvaScalarFieldEnum: {
    libelle: 'libelle',
    taux: 'taux',
    code: 'code'
  };

  export type TvaScalarFieldEnum = (typeof TvaScalarFieldEnum)[keyof typeof TvaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PaymentEnum'
   */
  export type EnumPaymentEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentEnum'>
    


  /**
   * Reference to a field of type 'PaymentEnum[]'
   */
  export type ListEnumPaymentEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentEnum[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    code?: StringFilter<"Product"> | string
    code_interne?: StringFilter<"Product"> | string
    libelle?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    pvht?: FloatFilter<"Product"> | number
    rayon_code?: IntNullableFilter<"Product"> | number | null
    famille_code?: IntNullableFilter<"Product"> | number | null
    tva_code?: IntNullableFilter<"Product"> | number | null
    rayon?: XOR<RayonNullableRelationFilter, RayonWhereInput> | null
    famille?: XOR<FamilleNullableRelationFilter, FamilleWhereInput> | null
    tva?: XOR<TvaNullableRelationFilter, TvaWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    pvht?: SortOrder
    rayon_code?: SortOrderInput | SortOrder
    famille_code?: SortOrderInput | SortOrder
    tva_code?: SortOrderInput | SortOrder
    rayon?: RayonOrderByWithRelationInput
    famille?: FamilleOrderByWithRelationInput
    tva?: TvaOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    code?: StringFilter<"Product"> | string
    code_interne?: StringFilter<"Product"> | string
    libelle?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    pvht?: FloatFilter<"Product"> | number
    rayon_code?: IntNullableFilter<"Product"> | number | null
    famille_code?: IntNullableFilter<"Product"> | number | null
    tva_code?: IntNullableFilter<"Product"> | number | null
    rayon?: XOR<RayonNullableRelationFilter, RayonWhereInput> | null
    famille?: XOR<FamilleNullableRelationFilter, FamilleWhereInput> | null
    tva?: XOR<TvaNullableRelationFilter, TvaWhereInput> | null
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    pvht?: SortOrder
    rayon_code?: SortOrderInput | SortOrder
    famille_code?: SortOrderInput | SortOrder
    tva_code?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    code?: StringWithAggregatesFilter<"Product"> | string
    code_interne?: StringWithAggregatesFilter<"Product"> | string
    libelle?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    pvht?: FloatWithAggregatesFilter<"Product"> | number
    rayon_code?: IntNullableWithAggregatesFilter<"Product"> | number | null
    famille_code?: IntNullableWithAggregatesFilter<"Product"> | number | null
    tva_code?: IntNullableWithAggregatesFilter<"Product"> | number | null
  }

  export type DataWhereInput = {
    AND?: DataWhereInput | DataWhereInput[]
    OR?: DataWhereInput[]
    NOT?: DataWhereInput | DataWhereInput[]
    id?: IntFilter<"Data"> | number
    code?: StringFilter<"Data"> | string
    code_interne?: StringFilter<"Data"> | string
    libelle?: StringFilter<"Data"> | string
    price?: FloatFilter<"Data"> | number
    quantity?: IntFilter<"Data"> | number
    pvht?: FloatFilter<"Data"> | number
    total_pvht?: FloatFilter<"Data"> | number
    total?: FloatFilter<"Data"> | number
    ticketNumber?: IntNullableFilter<"Data"> | number | null
    waittingTicketsNumber?: IntNullableFilter<"Data"> | number | null
    famille_code?: IntNullableFilter<"Data"> | number | null
    tva_code?: IntNullableFilter<"Data"> | number | null
    createdAt?: DateTimeFilter<"Data"> | Date | string
    updatedAt?: DateTimeFilter<"Data"> | Date | string
    ticket?: XOR<TicketNullableRelationFilter, TicketWhereInput> | null
    WaittingTickets?: XOR<WaittingTicketsNullableRelationFilter, WaittingTicketsWhereInput> | null
    famille?: XOR<FamilleNullableRelationFilter, FamilleWhereInput> | null
    tva?: XOR<TvaNullableRelationFilter, TvaWhereInput> | null
  }

  export type DataOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pvht?: SortOrder
    total_pvht?: SortOrder
    total?: SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    waittingTicketsNumber?: SortOrderInput | SortOrder
    famille_code?: SortOrderInput | SortOrder
    tva_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    WaittingTickets?: WaittingTicketsOrderByWithRelationInput
    famille?: FamilleOrderByWithRelationInput
    tva?: TvaOrderByWithRelationInput
  }

  export type DataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataWhereInput | DataWhereInput[]
    OR?: DataWhereInput[]
    NOT?: DataWhereInput | DataWhereInput[]
    code?: StringFilter<"Data"> | string
    code_interne?: StringFilter<"Data"> | string
    libelle?: StringFilter<"Data"> | string
    price?: FloatFilter<"Data"> | number
    quantity?: IntFilter<"Data"> | number
    pvht?: FloatFilter<"Data"> | number
    total_pvht?: FloatFilter<"Data"> | number
    total?: FloatFilter<"Data"> | number
    ticketNumber?: IntNullableFilter<"Data"> | number | null
    waittingTicketsNumber?: IntNullableFilter<"Data"> | number | null
    famille_code?: IntNullableFilter<"Data"> | number | null
    tva_code?: IntNullableFilter<"Data"> | number | null
    createdAt?: DateTimeFilter<"Data"> | Date | string
    updatedAt?: DateTimeFilter<"Data"> | Date | string
    ticket?: XOR<TicketNullableRelationFilter, TicketWhereInput> | null
    WaittingTickets?: XOR<WaittingTicketsNullableRelationFilter, WaittingTicketsWhereInput> | null
    famille?: XOR<FamilleNullableRelationFilter, FamilleWhereInput> | null
    tva?: XOR<TvaNullableRelationFilter, TvaWhereInput> | null
  }, "id">

  export type DataOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pvht?: SortOrder
    total_pvht?: SortOrder
    total?: SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    waittingTicketsNumber?: SortOrderInput | SortOrder
    famille_code?: SortOrderInput | SortOrder
    tva_code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataCountOrderByAggregateInput
    _avg?: DataAvgOrderByAggregateInput
    _max?: DataMaxOrderByAggregateInput
    _min?: DataMinOrderByAggregateInput
    _sum?: DataSumOrderByAggregateInput
  }

  export type DataScalarWhereWithAggregatesInput = {
    AND?: DataScalarWhereWithAggregatesInput | DataScalarWhereWithAggregatesInput[]
    OR?: DataScalarWhereWithAggregatesInput[]
    NOT?: DataScalarWhereWithAggregatesInput | DataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Data"> | number
    code?: StringWithAggregatesFilter<"Data"> | string
    code_interne?: StringWithAggregatesFilter<"Data"> | string
    libelle?: StringWithAggregatesFilter<"Data"> | string
    price?: FloatWithAggregatesFilter<"Data"> | number
    quantity?: IntWithAggregatesFilter<"Data"> | number
    pvht?: FloatWithAggregatesFilter<"Data"> | number
    total_pvht?: FloatWithAggregatesFilter<"Data"> | number
    total?: FloatWithAggregatesFilter<"Data"> | number
    ticketNumber?: IntNullableWithAggregatesFilter<"Data"> | number | null
    waittingTicketsNumber?: IntNullableWithAggregatesFilter<"Data"> | number | null
    famille_code?: IntNullableWithAggregatesFilter<"Data"> | number | null
    tva_code?: IntNullableWithAggregatesFilter<"Data"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Data"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Data"> | Date | string
  }

  export type WaittingTicketsWhereInput = {
    AND?: WaittingTicketsWhereInput | WaittingTicketsWhereInput[]
    OR?: WaittingTicketsWhereInput[]
    NOT?: WaittingTicketsWhereInput | WaittingTicketsWhereInput[]
    number?: IntFilter<"WaittingTickets"> | number
    total?: FloatFilter<"WaittingTickets"> | number
    createdAt?: DateTimeFilter<"WaittingTickets"> | Date | string
    updatedAt?: DateTimeFilter<"WaittingTickets"> | Date | string
    products?: DataListRelationFilter
  }

  export type WaittingTicketsOrderByWithRelationInput = {
    number?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: DataOrderByRelationAggregateInput
  }

  export type WaittingTicketsWhereUniqueInput = Prisma.AtLeast<{
    number?: number
    AND?: WaittingTicketsWhereInput | WaittingTicketsWhereInput[]
    OR?: WaittingTicketsWhereInput[]
    NOT?: WaittingTicketsWhereInput | WaittingTicketsWhereInput[]
    total?: FloatFilter<"WaittingTickets"> | number
    createdAt?: DateTimeFilter<"WaittingTickets"> | Date | string
    updatedAt?: DateTimeFilter<"WaittingTickets"> | Date | string
    products?: DataListRelationFilter
  }, "number">

  export type WaittingTicketsOrderByWithAggregationInput = {
    number?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaittingTicketsCountOrderByAggregateInput
    _avg?: WaittingTicketsAvgOrderByAggregateInput
    _max?: WaittingTicketsMaxOrderByAggregateInput
    _min?: WaittingTicketsMinOrderByAggregateInput
    _sum?: WaittingTicketsSumOrderByAggregateInput
  }

  export type WaittingTicketsScalarWhereWithAggregatesInput = {
    AND?: WaittingTicketsScalarWhereWithAggregatesInput | WaittingTicketsScalarWhereWithAggregatesInput[]
    OR?: WaittingTicketsScalarWhereWithAggregatesInput[]
    NOT?: WaittingTicketsScalarWhereWithAggregatesInput | WaittingTicketsScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"WaittingTickets"> | number
    total?: FloatWithAggregatesFilter<"WaittingTickets"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WaittingTickets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WaittingTickets"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    number?: IntFilter<"Ticket"> | number
    total?: FloatFilter<"Ticket"> | number
    clientId?: IntNullableFilter<"Ticket"> | number | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    products?: DataListRelationFilter
    paymentModes?: PaymentModeListRelationFilter
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    number?: SortOrder
    total?: SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: DataOrderByRelationAggregateInput
    paymentModes?: PaymentModeOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    number?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    total?: FloatFilter<"Ticket"> | number
    clientId?: IntNullableFilter<"Ticket"> | number | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    products?: DataListRelationFilter
    paymentModes?: PaymentModeListRelationFilter
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
  }, "number">

  export type TicketOrderByWithAggregationInput = {
    number?: SortOrder
    total?: SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"Ticket"> | number
    total?: FloatWithAggregatesFilter<"Ticket"> | number
    clientId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    phone_number?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tickets?: TicketListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    phone_number?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    tickets?: TicketListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    phone_number?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type PaymentModeWhereInput = {
    AND?: PaymentModeWhereInput | PaymentModeWhereInput[]
    OR?: PaymentModeWhereInput[]
    NOT?: PaymentModeWhereInput | PaymentModeWhereInput[]
    id?: IntFilter<"PaymentMode"> | number
    mode?: EnumPaymentEnumFilter<"PaymentMode"> | $Enums.PaymentEnum
    amount?: FloatFilter<"PaymentMode"> | number
    ticketNumber?: IntNullableFilter<"PaymentMode"> | number | null
    ticket?: XOR<TicketNullableRelationFilter, TicketWhereInput> | null
  }

  export type PaymentModeOrderByWithRelationInput = {
    id?: SortOrder
    mode?: SortOrder
    amount?: SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type PaymentModeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentModeWhereInput | PaymentModeWhereInput[]
    OR?: PaymentModeWhereInput[]
    NOT?: PaymentModeWhereInput | PaymentModeWhereInput[]
    mode?: EnumPaymentEnumFilter<"PaymentMode"> | $Enums.PaymentEnum
    amount?: FloatFilter<"PaymentMode"> | number
    ticketNumber?: IntNullableFilter<"PaymentMode"> | number | null
    ticket?: XOR<TicketNullableRelationFilter, TicketWhereInput> | null
  }, "id">

  export type PaymentModeOrderByWithAggregationInput = {
    id?: SortOrder
    mode?: SortOrder
    amount?: SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    _count?: PaymentModeCountOrderByAggregateInput
    _avg?: PaymentModeAvgOrderByAggregateInput
    _max?: PaymentModeMaxOrderByAggregateInput
    _min?: PaymentModeMinOrderByAggregateInput
    _sum?: PaymentModeSumOrderByAggregateInput
  }

  export type PaymentModeScalarWhereWithAggregatesInput = {
    AND?: PaymentModeScalarWhereWithAggregatesInput | PaymentModeScalarWhereWithAggregatesInput[]
    OR?: PaymentModeScalarWhereWithAggregatesInput[]
    NOT?: PaymentModeScalarWhereWithAggregatesInput | PaymentModeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentMode"> | number
    mode?: EnumPaymentEnumWithAggregatesFilter<"PaymentMode"> | $Enums.PaymentEnum
    amount?: FloatWithAggregatesFilter<"PaymentMode"> | number
    ticketNumber?: IntNullableWithAggregatesFilter<"PaymentMode"> | number | null
  }

  export type FamilleWhereInput = {
    AND?: FamilleWhereInput | FamilleWhereInput[]
    OR?: FamilleWhereInput[]
    NOT?: FamilleWhereInput | FamilleWhereInput[]
    code?: IntFilter<"Famille"> | number
    libelle?: StringNullableFilter<"Famille"> | string | null
    rayon_code?: IntNullableFilter<"Famille"> | number | null
    rayon?: XOR<RayonNullableRelationFilter, RayonWhereInput> | null
    products?: ProductListRelationFilter
    Data?: DataListRelationFilter
  }

  export type FamilleOrderByWithRelationInput = {
    code?: SortOrder
    libelle?: SortOrderInput | SortOrder
    rayon_code?: SortOrderInput | SortOrder
    rayon?: RayonOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    Data?: DataOrderByRelationAggregateInput
  }

  export type FamilleWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    AND?: FamilleWhereInput | FamilleWhereInput[]
    OR?: FamilleWhereInput[]
    NOT?: FamilleWhereInput | FamilleWhereInput[]
    libelle?: StringNullableFilter<"Famille"> | string | null
    rayon_code?: IntNullableFilter<"Famille"> | number | null
    rayon?: XOR<RayonNullableRelationFilter, RayonWhereInput> | null
    products?: ProductListRelationFilter
    Data?: DataListRelationFilter
  }, "code">

  export type FamilleOrderByWithAggregationInput = {
    code?: SortOrder
    libelle?: SortOrderInput | SortOrder
    rayon_code?: SortOrderInput | SortOrder
    _count?: FamilleCountOrderByAggregateInput
    _avg?: FamilleAvgOrderByAggregateInput
    _max?: FamilleMaxOrderByAggregateInput
    _min?: FamilleMinOrderByAggregateInput
    _sum?: FamilleSumOrderByAggregateInput
  }

  export type FamilleScalarWhereWithAggregatesInput = {
    AND?: FamilleScalarWhereWithAggregatesInput | FamilleScalarWhereWithAggregatesInput[]
    OR?: FamilleScalarWhereWithAggregatesInput[]
    NOT?: FamilleScalarWhereWithAggregatesInput | FamilleScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"Famille"> | number
    libelle?: StringNullableWithAggregatesFilter<"Famille"> | string | null
    rayon_code?: IntNullableWithAggregatesFilter<"Famille"> | number | null
  }

  export type RayonWhereInput = {
    AND?: RayonWhereInput | RayonWhereInput[]
    OR?: RayonWhereInput[]
    NOT?: RayonWhereInput | RayonWhereInput[]
    code?: IntFilter<"Rayon"> | number
    libelle?: StringNullableFilter<"Rayon"> | string | null
    famille?: FamilleListRelationFilter
    products?: ProductListRelationFilter
  }

  export type RayonOrderByWithRelationInput = {
    code?: SortOrder
    libelle?: SortOrderInput | SortOrder
    famille?: FamilleOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type RayonWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    AND?: RayonWhereInput | RayonWhereInput[]
    OR?: RayonWhereInput[]
    NOT?: RayonWhereInput | RayonWhereInput[]
    libelle?: StringNullableFilter<"Rayon"> | string | null
    famille?: FamilleListRelationFilter
    products?: ProductListRelationFilter
  }, "code">

  export type RayonOrderByWithAggregationInput = {
    code?: SortOrder
    libelle?: SortOrderInput | SortOrder
    _count?: RayonCountOrderByAggregateInput
    _avg?: RayonAvgOrderByAggregateInput
    _max?: RayonMaxOrderByAggregateInput
    _min?: RayonMinOrderByAggregateInput
    _sum?: RayonSumOrderByAggregateInput
  }

  export type RayonScalarWhereWithAggregatesInput = {
    AND?: RayonScalarWhereWithAggregatesInput | RayonScalarWhereWithAggregatesInput[]
    OR?: RayonScalarWhereWithAggregatesInput[]
    NOT?: RayonScalarWhereWithAggregatesInput | RayonScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"Rayon"> | number
    libelle?: StringNullableWithAggregatesFilter<"Rayon"> | string | null
  }

  export type TvaWhereInput = {
    AND?: TvaWhereInput | TvaWhereInput[]
    OR?: TvaWhereInput[]
    NOT?: TvaWhereInput | TvaWhereInput[]
    libelle?: StringNullableFilter<"Tva"> | string | null
    taux?: FloatNullableFilter<"Tva"> | number | null
    code?: IntFilter<"Tva"> | number
    products?: ProductListRelationFilter
    Data?: DataListRelationFilter
  }

  export type TvaOrderByWithRelationInput = {
    libelle?: SortOrderInput | SortOrder
    taux?: SortOrderInput | SortOrder
    code?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    Data?: DataOrderByRelationAggregateInput
  }

  export type TvaWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    AND?: TvaWhereInput | TvaWhereInput[]
    OR?: TvaWhereInput[]
    NOT?: TvaWhereInput | TvaWhereInput[]
    libelle?: StringNullableFilter<"Tva"> | string | null
    taux?: FloatNullableFilter<"Tva"> | number | null
    products?: ProductListRelationFilter
    Data?: DataListRelationFilter
  }, "code">

  export type TvaOrderByWithAggregationInput = {
    libelle?: SortOrderInput | SortOrder
    taux?: SortOrderInput | SortOrder
    code?: SortOrder
    _count?: TvaCountOrderByAggregateInput
    _avg?: TvaAvgOrderByAggregateInput
    _max?: TvaMaxOrderByAggregateInput
    _min?: TvaMinOrderByAggregateInput
    _sum?: TvaSumOrderByAggregateInput
  }

  export type TvaScalarWhereWithAggregatesInput = {
    AND?: TvaScalarWhereWithAggregatesInput | TvaScalarWhereWithAggregatesInput[]
    OR?: TvaScalarWhereWithAggregatesInput[]
    NOT?: TvaScalarWhereWithAggregatesInput | TvaScalarWhereWithAggregatesInput[]
    libelle?: StringNullableWithAggregatesFilter<"Tva"> | string | null
    taux?: FloatNullableWithAggregatesFilter<"Tva"> | number | null
    code?: IntWithAggregatesFilter<"Tva"> | number
  }

  export type ProductCreateInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon?: RayonCreateNestedOneWithoutProductsInput
    famille?: FamilleCreateNestedOneWithoutProductsInput
    tva?: TvaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon_code?: number | null
    famille_code?: number | null
    tva_code?: number | null
  }

  export type ProductUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon?: RayonUpdateOneWithoutProductsNestedInput
    famille?: FamilleUpdateOneWithoutProductsNestedInput
    tva?: TvaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateManyInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon_code?: number | null
    famille_code?: number | null
    tva_code?: number | null
  }

  export type ProductUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DataCreateInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutProductsInput
    WaittingTickets?: WaittingTicketsCreateNestedOneWithoutProductsInput
    famille?: FamilleCreateNestedOneWithoutDataInput
    tva?: TvaCreateNestedOneWithoutDataInput
  }

  export type DataUncheckedCreateInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    waittingTicketsNumber?: number | null
    famille_code?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutProductsNestedInput
    WaittingTickets?: WaittingTicketsUpdateOneWithoutProductsNestedInput
    famille?: FamilleUpdateOneWithoutDataNestedInput
    tva?: TvaUpdateOneWithoutDataNestedInput
  }

  export type DataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataCreateManyInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    waittingTicketsNumber?: number | null
    famille_code?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaittingTicketsCreateInput = {
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataCreateNestedManyWithoutWaittingTicketsInput
  }

  export type WaittingTicketsUncheckedCreateInput = {
    number?: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataUncheckedCreateNestedManyWithoutWaittingTicketsInput
  }

  export type WaittingTicketsUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUpdateManyWithoutWaittingTicketsNestedInput
  }

  export type WaittingTicketsUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUncheckedUpdateManyWithoutWaittingTicketsNestedInput
  }

  export type WaittingTicketsCreateManyInput = {
    number?: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaittingTicketsUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaittingTicketsUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataCreateNestedManyWithoutTicketInput
    paymentModes?: PaymentModeCreateNestedManyWithoutTicketInput
    client?: ClientCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    number?: number
    total: number
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataUncheckedCreateNestedManyWithoutTicketInput
    paymentModes?: PaymentModeUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUpdateManyWithoutTicketNestedInput
    paymentModes?: PaymentModeUpdateManyWithoutTicketNestedInput
    client?: ClientUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUncheckedUpdateManyWithoutTicketNestedInput
    paymentModes?: PaymentModeUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    number?: number
    total: number
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    name: string
    address: string
    phone_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    phone_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    address: string
    phone_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentModeCreateInput = {
    mode: $Enums.PaymentEnum
    amount: number
    ticket?: TicketCreateNestedOneWithoutPaymentModesInput
  }

  export type PaymentModeUncheckedCreateInput = {
    id?: number
    mode: $Enums.PaymentEnum
    amount: number
    ticketNumber?: number | null
  }

  export type PaymentModeUpdateInput = {
    mode?: EnumPaymentEnumFieldUpdateOperationsInput | $Enums.PaymentEnum
    amount?: FloatFieldUpdateOperationsInput | number
    ticket?: TicketUpdateOneWithoutPaymentModesNestedInput
  }

  export type PaymentModeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mode?: EnumPaymentEnumFieldUpdateOperationsInput | $Enums.PaymentEnum
    amount?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentModeCreateManyInput = {
    id?: number
    mode: $Enums.PaymentEnum
    amount: number
    ticketNumber?: number | null
  }

  export type PaymentModeUpdateManyMutationInput = {
    mode?: EnumPaymentEnumFieldUpdateOperationsInput | $Enums.PaymentEnum
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentModeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mode?: EnumPaymentEnumFieldUpdateOperationsInput | $Enums.PaymentEnum
    amount?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FamilleCreateInput = {
    code: number
    libelle?: string | null
    rayon?: RayonCreateNestedOneWithoutFamilleInput
    products?: ProductCreateNestedManyWithoutFamilleInput
    Data?: DataCreateNestedManyWithoutFamilleInput
  }

  export type FamilleUncheckedCreateInput = {
    code: number
    libelle?: string | null
    rayon_code?: number | null
    products?: ProductUncheckedCreateNestedManyWithoutFamilleInput
    Data?: DataUncheckedCreateNestedManyWithoutFamilleInput
  }

  export type FamilleUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    rayon?: RayonUpdateOneWithoutFamilleNestedInput
    products?: ProductUpdateManyWithoutFamilleNestedInput
    Data?: DataUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductUncheckedUpdateManyWithoutFamilleNestedInput
    Data?: DataUncheckedUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleCreateManyInput = {
    code: number
    libelle?: string | null
    rayon_code?: number | null
  }

  export type FamilleUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FamilleUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RayonCreateInput = {
    code: number
    libelle?: string | null
    famille?: FamilleCreateNestedManyWithoutRayonInput
    products?: ProductCreateNestedManyWithoutRayonInput
  }

  export type RayonUncheckedCreateInput = {
    code: number
    libelle?: string | null
    famille?: FamilleUncheckedCreateNestedManyWithoutRayonInput
    products?: ProductUncheckedCreateNestedManyWithoutRayonInput
  }

  export type RayonUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    famille?: FamilleUpdateManyWithoutRayonNestedInput
    products?: ProductUpdateManyWithoutRayonNestedInput
  }

  export type RayonUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    famille?: FamilleUncheckedUpdateManyWithoutRayonNestedInput
    products?: ProductUncheckedUpdateManyWithoutRayonNestedInput
  }

  export type RayonCreateManyInput = {
    code: number
    libelle?: string | null
  }

  export type RayonUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RayonUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TvaCreateInput = {
    libelle?: string | null
    taux?: number | null
    code: number
    products?: ProductCreateNestedManyWithoutTvaInput
    Data?: DataCreateNestedManyWithoutTvaInput
  }

  export type TvaUncheckedCreateInput = {
    libelle?: string | null
    taux?: number | null
    code: number
    products?: ProductUncheckedCreateNestedManyWithoutTvaInput
    Data?: DataUncheckedCreateNestedManyWithoutTvaInput
  }

  export type TvaUpdateInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutTvaNestedInput
    Data?: DataUpdateManyWithoutTvaNestedInput
  }

  export type TvaUncheckedUpdateInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutTvaNestedInput
    Data?: DataUncheckedUpdateManyWithoutTvaNestedInput
  }

  export type TvaCreateManyInput = {
    libelle?: string | null
    taux?: number | null
    code: number
  }

  export type TvaUpdateManyMutationInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
  }

  export type TvaUncheckedUpdateManyInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type RayonNullableRelationFilter = {
    is?: RayonWhereInput | null
    isNot?: RayonWhereInput | null
  }

  export type FamilleNullableRelationFilter = {
    is?: FamilleWhereInput | null
    isNot?: FamilleWhereInput | null
  }

  export type TvaNullableRelationFilter = {
    is?: TvaWhereInput | null
    isNot?: TvaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    pvht?: SortOrder
    rayon_code?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    pvht?: SortOrder
    rayon_code?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    pvht?: SortOrder
    rayon_code?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    pvht?: SortOrder
    rayon_code?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    pvht?: SortOrder
    rayon_code?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type TicketNullableRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type WaittingTicketsNullableRelationFilter = {
    is?: WaittingTicketsWhereInput | null
    isNot?: WaittingTicketsWhereInput | null
  }

  export type DataCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pvht?: SortOrder
    total_pvht?: SortOrder
    total?: SortOrder
    ticketNumber?: SortOrder
    waittingTicketsNumber?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pvht?: SortOrder
    total_pvht?: SortOrder
    total?: SortOrder
    ticketNumber?: SortOrder
    waittingTicketsNumber?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
  }

  export type DataMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pvht?: SortOrder
    total_pvht?: SortOrder
    total?: SortOrder
    ticketNumber?: SortOrder
    waittingTicketsNumber?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    code_interne?: SortOrder
    libelle?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pvht?: SortOrder
    total_pvht?: SortOrder
    total?: SortOrder
    ticketNumber?: SortOrder
    waittingTicketsNumber?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    pvht?: SortOrder
    total_pvht?: SortOrder
    total?: SortOrder
    ticketNumber?: SortOrder
    waittingTicketsNumber?: SortOrder
    famille_code?: SortOrder
    tva_code?: SortOrder
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

  export type DataListRelationFilter = {
    every?: DataWhereInput
    some?: DataWhereInput
    none?: DataWhereInput
  }

  export type DataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaittingTicketsCountOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaittingTicketsAvgOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
  }

  export type WaittingTicketsMaxOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaittingTicketsMinOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaittingTicketsSumOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
  }

  export type PaymentModeListRelationFilter = {
    every?: PaymentModeWhereInput
    some?: PaymentModeWhereInput
    none?: PaymentModeWhereInput
  }

  export type ClientNullableRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type PaymentModeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    clientId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    number?: SortOrder
    total?: SortOrder
    clientId?: SortOrder
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPaymentEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentEnum | EnumPaymentEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentEnumFilter<$PrismaModel> | $Enums.PaymentEnum
  }

  export type PaymentModeCountOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    amount?: SortOrder
    ticketNumber?: SortOrder
  }

  export type PaymentModeAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    ticketNumber?: SortOrder
  }

  export type PaymentModeMaxOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    amount?: SortOrder
    ticketNumber?: SortOrder
  }

  export type PaymentModeMinOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    amount?: SortOrder
    ticketNumber?: SortOrder
  }

  export type PaymentModeSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    ticketNumber?: SortOrder
  }

  export type EnumPaymentEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentEnum | EnumPaymentEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentEnumWithAggregatesFilter<$PrismaModel> | $Enums.PaymentEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentEnumFilter<$PrismaModel>
    _max?: NestedEnumPaymentEnumFilter<$PrismaModel>
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilleCountOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
    rayon_code?: SortOrder
  }

  export type FamilleAvgOrderByAggregateInput = {
    code?: SortOrder
    rayon_code?: SortOrder
  }

  export type FamilleMaxOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
    rayon_code?: SortOrder
  }

  export type FamilleMinOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
    rayon_code?: SortOrder
  }

  export type FamilleSumOrderByAggregateInput = {
    code?: SortOrder
    rayon_code?: SortOrder
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

  export type FamilleListRelationFilter = {
    every?: FamilleWhereInput
    some?: FamilleWhereInput
    none?: FamilleWhereInput
  }

  export type FamilleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RayonCountOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type RayonAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type RayonMaxOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type RayonMinOrderByAggregateInput = {
    code?: SortOrder
    libelle?: SortOrder
  }

  export type RayonSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TvaCountOrderByAggregateInput = {
    libelle?: SortOrder
    taux?: SortOrder
    code?: SortOrder
  }

  export type TvaAvgOrderByAggregateInput = {
    taux?: SortOrder
    code?: SortOrder
  }

  export type TvaMaxOrderByAggregateInput = {
    libelle?: SortOrder
    taux?: SortOrder
    code?: SortOrder
  }

  export type TvaMinOrderByAggregateInput = {
    libelle?: SortOrder
    taux?: SortOrder
    code?: SortOrder
  }

  export type TvaSumOrderByAggregateInput = {
    taux?: SortOrder
    code?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RayonCreateNestedOneWithoutProductsInput = {
    create?: XOR<RayonCreateWithoutProductsInput, RayonUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RayonCreateOrConnectWithoutProductsInput
    connect?: RayonWhereUniqueInput
  }

  export type FamilleCreateNestedOneWithoutProductsInput = {
    create?: XOR<FamilleCreateWithoutProductsInput, FamilleUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FamilleCreateOrConnectWithoutProductsInput
    connect?: FamilleWhereUniqueInput
  }

  export type TvaCreateNestedOneWithoutProductsInput = {
    create?: XOR<TvaCreateWithoutProductsInput, TvaUncheckedCreateWithoutProductsInput>
    connectOrCreate?: TvaCreateOrConnectWithoutProductsInput
    connect?: TvaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RayonUpdateOneWithoutProductsNestedInput = {
    create?: XOR<RayonCreateWithoutProductsInput, RayonUncheckedCreateWithoutProductsInput>
    connectOrCreate?: RayonCreateOrConnectWithoutProductsInput
    upsert?: RayonUpsertWithoutProductsInput
    disconnect?: RayonWhereInput | boolean
    delete?: RayonWhereInput | boolean
    connect?: RayonWhereUniqueInput
    update?: XOR<XOR<RayonUpdateToOneWithWhereWithoutProductsInput, RayonUpdateWithoutProductsInput>, RayonUncheckedUpdateWithoutProductsInput>
  }

  export type FamilleUpdateOneWithoutProductsNestedInput = {
    create?: XOR<FamilleCreateWithoutProductsInput, FamilleUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FamilleCreateOrConnectWithoutProductsInput
    upsert?: FamilleUpsertWithoutProductsInput
    disconnect?: FamilleWhereInput | boolean
    delete?: FamilleWhereInput | boolean
    connect?: FamilleWhereUniqueInput
    update?: XOR<XOR<FamilleUpdateToOneWithWhereWithoutProductsInput, FamilleUpdateWithoutProductsInput>, FamilleUncheckedUpdateWithoutProductsInput>
  }

  export type TvaUpdateOneWithoutProductsNestedInput = {
    create?: XOR<TvaCreateWithoutProductsInput, TvaUncheckedCreateWithoutProductsInput>
    connectOrCreate?: TvaCreateOrConnectWithoutProductsInput
    upsert?: TvaUpsertWithoutProductsInput
    disconnect?: TvaWhereInput | boolean
    delete?: TvaWhereInput | boolean
    connect?: TvaWhereUniqueInput
    update?: XOR<XOR<TvaUpdateToOneWithWhereWithoutProductsInput, TvaUpdateWithoutProductsInput>, TvaUncheckedUpdateWithoutProductsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketCreateNestedOneWithoutProductsInput = {
    create?: XOR<TicketCreateWithoutProductsInput, TicketUncheckedCreateWithoutProductsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutProductsInput
    connect?: TicketWhereUniqueInput
  }

  export type WaittingTicketsCreateNestedOneWithoutProductsInput = {
    create?: XOR<WaittingTicketsCreateWithoutProductsInput, WaittingTicketsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WaittingTicketsCreateOrConnectWithoutProductsInput
    connect?: WaittingTicketsWhereUniqueInput
  }

  export type FamilleCreateNestedOneWithoutDataInput = {
    create?: XOR<FamilleCreateWithoutDataInput, FamilleUncheckedCreateWithoutDataInput>
    connectOrCreate?: FamilleCreateOrConnectWithoutDataInput
    connect?: FamilleWhereUniqueInput
  }

  export type TvaCreateNestedOneWithoutDataInput = {
    create?: XOR<TvaCreateWithoutDataInput, TvaUncheckedCreateWithoutDataInput>
    connectOrCreate?: TvaCreateOrConnectWithoutDataInput
    connect?: TvaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TicketUpdateOneWithoutProductsNestedInput = {
    create?: XOR<TicketCreateWithoutProductsInput, TicketUncheckedCreateWithoutProductsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutProductsInput
    upsert?: TicketUpsertWithoutProductsInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutProductsInput, TicketUpdateWithoutProductsInput>, TicketUncheckedUpdateWithoutProductsInput>
  }

  export type WaittingTicketsUpdateOneWithoutProductsNestedInput = {
    create?: XOR<WaittingTicketsCreateWithoutProductsInput, WaittingTicketsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: WaittingTicketsCreateOrConnectWithoutProductsInput
    upsert?: WaittingTicketsUpsertWithoutProductsInput
    disconnect?: WaittingTicketsWhereInput | boolean
    delete?: WaittingTicketsWhereInput | boolean
    connect?: WaittingTicketsWhereUniqueInput
    update?: XOR<XOR<WaittingTicketsUpdateToOneWithWhereWithoutProductsInput, WaittingTicketsUpdateWithoutProductsInput>, WaittingTicketsUncheckedUpdateWithoutProductsInput>
  }

  export type FamilleUpdateOneWithoutDataNestedInput = {
    create?: XOR<FamilleCreateWithoutDataInput, FamilleUncheckedCreateWithoutDataInput>
    connectOrCreate?: FamilleCreateOrConnectWithoutDataInput
    upsert?: FamilleUpsertWithoutDataInput
    disconnect?: FamilleWhereInput | boolean
    delete?: FamilleWhereInput | boolean
    connect?: FamilleWhereUniqueInput
    update?: XOR<XOR<FamilleUpdateToOneWithWhereWithoutDataInput, FamilleUpdateWithoutDataInput>, FamilleUncheckedUpdateWithoutDataInput>
  }

  export type TvaUpdateOneWithoutDataNestedInput = {
    create?: XOR<TvaCreateWithoutDataInput, TvaUncheckedCreateWithoutDataInput>
    connectOrCreate?: TvaCreateOrConnectWithoutDataInput
    upsert?: TvaUpsertWithoutDataInput
    disconnect?: TvaWhereInput | boolean
    delete?: TvaWhereInput | boolean
    connect?: TvaWhereUniqueInput
    update?: XOR<XOR<TvaUpdateToOneWithWhereWithoutDataInput, TvaUpdateWithoutDataInput>, TvaUncheckedUpdateWithoutDataInput>
  }

  export type DataCreateNestedManyWithoutWaittingTicketsInput = {
    create?: XOR<DataCreateWithoutWaittingTicketsInput, DataUncheckedCreateWithoutWaittingTicketsInput> | DataCreateWithoutWaittingTicketsInput[] | DataUncheckedCreateWithoutWaittingTicketsInput[]
    connectOrCreate?: DataCreateOrConnectWithoutWaittingTicketsInput | DataCreateOrConnectWithoutWaittingTicketsInput[]
    createMany?: DataCreateManyWaittingTicketsInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type DataUncheckedCreateNestedManyWithoutWaittingTicketsInput = {
    create?: XOR<DataCreateWithoutWaittingTicketsInput, DataUncheckedCreateWithoutWaittingTicketsInput> | DataCreateWithoutWaittingTicketsInput[] | DataUncheckedCreateWithoutWaittingTicketsInput[]
    connectOrCreate?: DataCreateOrConnectWithoutWaittingTicketsInput | DataCreateOrConnectWithoutWaittingTicketsInput[]
    createMany?: DataCreateManyWaittingTicketsInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type DataUpdateManyWithoutWaittingTicketsNestedInput = {
    create?: XOR<DataCreateWithoutWaittingTicketsInput, DataUncheckedCreateWithoutWaittingTicketsInput> | DataCreateWithoutWaittingTicketsInput[] | DataUncheckedCreateWithoutWaittingTicketsInput[]
    connectOrCreate?: DataCreateOrConnectWithoutWaittingTicketsInput | DataCreateOrConnectWithoutWaittingTicketsInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutWaittingTicketsInput | DataUpsertWithWhereUniqueWithoutWaittingTicketsInput[]
    createMany?: DataCreateManyWaittingTicketsInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutWaittingTicketsInput | DataUpdateWithWhereUniqueWithoutWaittingTicketsInput[]
    updateMany?: DataUpdateManyWithWhereWithoutWaittingTicketsInput | DataUpdateManyWithWhereWithoutWaittingTicketsInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type DataUncheckedUpdateManyWithoutWaittingTicketsNestedInput = {
    create?: XOR<DataCreateWithoutWaittingTicketsInput, DataUncheckedCreateWithoutWaittingTicketsInput> | DataCreateWithoutWaittingTicketsInput[] | DataUncheckedCreateWithoutWaittingTicketsInput[]
    connectOrCreate?: DataCreateOrConnectWithoutWaittingTicketsInput | DataCreateOrConnectWithoutWaittingTicketsInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutWaittingTicketsInput | DataUpsertWithWhereUniqueWithoutWaittingTicketsInput[]
    createMany?: DataCreateManyWaittingTicketsInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutWaittingTicketsInput | DataUpdateWithWhereUniqueWithoutWaittingTicketsInput[]
    updateMany?: DataUpdateManyWithWhereWithoutWaittingTicketsInput | DataUpdateManyWithWhereWithoutWaittingTicketsInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type DataCreateNestedManyWithoutTicketInput = {
    create?: XOR<DataCreateWithoutTicketInput, DataUncheckedCreateWithoutTicketInput> | DataCreateWithoutTicketInput[] | DataUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTicketInput | DataCreateOrConnectWithoutTicketInput[]
    createMany?: DataCreateManyTicketInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type PaymentModeCreateNestedManyWithoutTicketInput = {
    create?: XOR<PaymentModeCreateWithoutTicketInput, PaymentModeUncheckedCreateWithoutTicketInput> | PaymentModeCreateWithoutTicketInput[] | PaymentModeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaymentModeCreateOrConnectWithoutTicketInput | PaymentModeCreateOrConnectWithoutTicketInput[]
    createMany?: PaymentModeCreateManyTicketInputEnvelope
    connect?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTicketsInput
    connect?: ClientWhereUniqueInput
  }

  export type DataUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<DataCreateWithoutTicketInput, DataUncheckedCreateWithoutTicketInput> | DataCreateWithoutTicketInput[] | DataUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTicketInput | DataCreateOrConnectWithoutTicketInput[]
    createMany?: DataCreateManyTicketInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type PaymentModeUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<PaymentModeCreateWithoutTicketInput, PaymentModeUncheckedCreateWithoutTicketInput> | PaymentModeCreateWithoutTicketInput[] | PaymentModeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaymentModeCreateOrConnectWithoutTicketInput | PaymentModeCreateOrConnectWithoutTicketInput[]
    createMany?: PaymentModeCreateManyTicketInputEnvelope
    connect?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
  }

  export type DataUpdateManyWithoutTicketNestedInput = {
    create?: XOR<DataCreateWithoutTicketInput, DataUncheckedCreateWithoutTicketInput> | DataCreateWithoutTicketInput[] | DataUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTicketInput | DataCreateOrConnectWithoutTicketInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutTicketInput | DataUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: DataCreateManyTicketInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutTicketInput | DataUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: DataUpdateManyWithWhereWithoutTicketInput | DataUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type PaymentModeUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PaymentModeCreateWithoutTicketInput, PaymentModeUncheckedCreateWithoutTicketInput> | PaymentModeCreateWithoutTicketInput[] | PaymentModeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaymentModeCreateOrConnectWithoutTicketInput | PaymentModeCreateOrConnectWithoutTicketInput[]
    upsert?: PaymentModeUpsertWithWhereUniqueWithoutTicketInput | PaymentModeUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PaymentModeCreateManyTicketInputEnvelope
    set?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    disconnect?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    delete?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    connect?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    update?: PaymentModeUpdateWithWhereUniqueWithoutTicketInput | PaymentModeUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PaymentModeUpdateManyWithWhereWithoutTicketInput | PaymentModeUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PaymentModeScalarWhereInput | PaymentModeScalarWhereInput[]
  }

  export type ClientUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTicketsInput
    upsert?: ClientUpsertWithoutTicketsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTicketsInput, ClientUpdateWithoutTicketsInput>, ClientUncheckedUpdateWithoutTicketsInput>
  }

  export type DataUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<DataCreateWithoutTicketInput, DataUncheckedCreateWithoutTicketInput> | DataCreateWithoutTicketInput[] | DataUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTicketInput | DataCreateOrConnectWithoutTicketInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutTicketInput | DataUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: DataCreateManyTicketInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutTicketInput | DataUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: DataUpdateManyWithWhereWithoutTicketInput | DataUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type PaymentModeUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PaymentModeCreateWithoutTicketInput, PaymentModeUncheckedCreateWithoutTicketInput> | PaymentModeCreateWithoutTicketInput[] | PaymentModeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaymentModeCreateOrConnectWithoutTicketInput | PaymentModeCreateOrConnectWithoutTicketInput[]
    upsert?: PaymentModeUpsertWithWhereUniqueWithoutTicketInput | PaymentModeUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PaymentModeCreateManyTicketInputEnvelope
    set?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    disconnect?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    delete?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    connect?: PaymentModeWhereUniqueInput | PaymentModeWhereUniqueInput[]
    update?: PaymentModeUpdateWithWhereUniqueWithoutTicketInput | PaymentModeUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PaymentModeUpdateManyWithWhereWithoutTicketInput | PaymentModeUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PaymentModeScalarWhereInput | PaymentModeScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutClientInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutClientNestedInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutClientInput | TicketUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutClientInput | TicketUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutClientInput | TicketUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput> | TicketCreateWithoutClientInput[] | TicketUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientInput | TicketCreateOrConnectWithoutClientInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutClientInput | TicketUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TicketCreateManyClientInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutClientInput | TicketUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutClientInput | TicketUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutPaymentModesInput = {
    create?: XOR<TicketCreateWithoutPaymentModesInput, TicketUncheckedCreateWithoutPaymentModesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPaymentModesInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumPaymentEnumFieldUpdateOperationsInput = {
    set?: $Enums.PaymentEnum
  }

  export type TicketUpdateOneWithoutPaymentModesNestedInput = {
    create?: XOR<TicketCreateWithoutPaymentModesInput, TicketUncheckedCreateWithoutPaymentModesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPaymentModesInput
    upsert?: TicketUpsertWithoutPaymentModesInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutPaymentModesInput, TicketUpdateWithoutPaymentModesInput>, TicketUncheckedUpdateWithoutPaymentModesInput>
  }

  export type RayonCreateNestedOneWithoutFamilleInput = {
    create?: XOR<RayonCreateWithoutFamilleInput, RayonUncheckedCreateWithoutFamilleInput>
    connectOrCreate?: RayonCreateOrConnectWithoutFamilleInput
    connect?: RayonWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutFamilleInput = {
    create?: XOR<ProductCreateWithoutFamilleInput, ProductUncheckedCreateWithoutFamilleInput> | ProductCreateWithoutFamilleInput[] | ProductUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFamilleInput | ProductCreateOrConnectWithoutFamilleInput[]
    createMany?: ProductCreateManyFamilleInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type DataCreateNestedManyWithoutFamilleInput = {
    create?: XOR<DataCreateWithoutFamilleInput, DataUncheckedCreateWithoutFamilleInput> | DataCreateWithoutFamilleInput[] | DataUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: DataCreateOrConnectWithoutFamilleInput | DataCreateOrConnectWithoutFamilleInput[]
    createMany?: DataCreateManyFamilleInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutFamilleInput = {
    create?: XOR<ProductCreateWithoutFamilleInput, ProductUncheckedCreateWithoutFamilleInput> | ProductCreateWithoutFamilleInput[] | ProductUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFamilleInput | ProductCreateOrConnectWithoutFamilleInput[]
    createMany?: ProductCreateManyFamilleInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type DataUncheckedCreateNestedManyWithoutFamilleInput = {
    create?: XOR<DataCreateWithoutFamilleInput, DataUncheckedCreateWithoutFamilleInput> | DataCreateWithoutFamilleInput[] | DataUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: DataCreateOrConnectWithoutFamilleInput | DataCreateOrConnectWithoutFamilleInput[]
    createMany?: DataCreateManyFamilleInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RayonUpdateOneWithoutFamilleNestedInput = {
    create?: XOR<RayonCreateWithoutFamilleInput, RayonUncheckedCreateWithoutFamilleInput>
    connectOrCreate?: RayonCreateOrConnectWithoutFamilleInput
    upsert?: RayonUpsertWithoutFamilleInput
    disconnect?: RayonWhereInput | boolean
    delete?: RayonWhereInput | boolean
    connect?: RayonWhereUniqueInput
    update?: XOR<XOR<RayonUpdateToOneWithWhereWithoutFamilleInput, RayonUpdateWithoutFamilleInput>, RayonUncheckedUpdateWithoutFamilleInput>
  }

  export type ProductUpdateManyWithoutFamilleNestedInput = {
    create?: XOR<ProductCreateWithoutFamilleInput, ProductUncheckedCreateWithoutFamilleInput> | ProductCreateWithoutFamilleInput[] | ProductUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFamilleInput | ProductCreateOrConnectWithoutFamilleInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFamilleInput | ProductUpsertWithWhereUniqueWithoutFamilleInput[]
    createMany?: ProductCreateManyFamilleInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFamilleInput | ProductUpdateWithWhereUniqueWithoutFamilleInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFamilleInput | ProductUpdateManyWithWhereWithoutFamilleInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DataUpdateManyWithoutFamilleNestedInput = {
    create?: XOR<DataCreateWithoutFamilleInput, DataUncheckedCreateWithoutFamilleInput> | DataCreateWithoutFamilleInput[] | DataUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: DataCreateOrConnectWithoutFamilleInput | DataCreateOrConnectWithoutFamilleInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutFamilleInput | DataUpsertWithWhereUniqueWithoutFamilleInput[]
    createMany?: DataCreateManyFamilleInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutFamilleInput | DataUpdateWithWhereUniqueWithoutFamilleInput[]
    updateMany?: DataUpdateManyWithWhereWithoutFamilleInput | DataUpdateManyWithWhereWithoutFamilleInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutFamilleNestedInput = {
    create?: XOR<ProductCreateWithoutFamilleInput, ProductUncheckedCreateWithoutFamilleInput> | ProductCreateWithoutFamilleInput[] | ProductUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFamilleInput | ProductCreateOrConnectWithoutFamilleInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFamilleInput | ProductUpsertWithWhereUniqueWithoutFamilleInput[]
    createMany?: ProductCreateManyFamilleInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFamilleInput | ProductUpdateWithWhereUniqueWithoutFamilleInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFamilleInput | ProductUpdateManyWithWhereWithoutFamilleInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DataUncheckedUpdateManyWithoutFamilleNestedInput = {
    create?: XOR<DataCreateWithoutFamilleInput, DataUncheckedCreateWithoutFamilleInput> | DataCreateWithoutFamilleInput[] | DataUncheckedCreateWithoutFamilleInput[]
    connectOrCreate?: DataCreateOrConnectWithoutFamilleInput | DataCreateOrConnectWithoutFamilleInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutFamilleInput | DataUpsertWithWhereUniqueWithoutFamilleInput[]
    createMany?: DataCreateManyFamilleInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutFamilleInput | DataUpdateWithWhereUniqueWithoutFamilleInput[]
    updateMany?: DataUpdateManyWithWhereWithoutFamilleInput | DataUpdateManyWithWhereWithoutFamilleInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type FamilleCreateNestedManyWithoutRayonInput = {
    create?: XOR<FamilleCreateWithoutRayonInput, FamilleUncheckedCreateWithoutRayonInput> | FamilleCreateWithoutRayonInput[] | FamilleUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutRayonInput | FamilleCreateOrConnectWithoutRayonInput[]
    createMany?: FamilleCreateManyRayonInputEnvelope
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutRayonInput = {
    create?: XOR<ProductCreateWithoutRayonInput, ProductUncheckedCreateWithoutRayonInput> | ProductCreateWithoutRayonInput[] | ProductUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRayonInput | ProductCreateOrConnectWithoutRayonInput[]
    createMany?: ProductCreateManyRayonInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type FamilleUncheckedCreateNestedManyWithoutRayonInput = {
    create?: XOR<FamilleCreateWithoutRayonInput, FamilleUncheckedCreateWithoutRayonInput> | FamilleCreateWithoutRayonInput[] | FamilleUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutRayonInput | FamilleCreateOrConnectWithoutRayonInput[]
    createMany?: FamilleCreateManyRayonInputEnvelope
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutRayonInput = {
    create?: XOR<ProductCreateWithoutRayonInput, ProductUncheckedCreateWithoutRayonInput> | ProductCreateWithoutRayonInput[] | ProductUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRayonInput | ProductCreateOrConnectWithoutRayonInput[]
    createMany?: ProductCreateManyRayonInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type FamilleUpdateManyWithoutRayonNestedInput = {
    create?: XOR<FamilleCreateWithoutRayonInput, FamilleUncheckedCreateWithoutRayonInput> | FamilleCreateWithoutRayonInput[] | FamilleUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutRayonInput | FamilleCreateOrConnectWithoutRayonInput[]
    upsert?: FamilleUpsertWithWhereUniqueWithoutRayonInput | FamilleUpsertWithWhereUniqueWithoutRayonInput[]
    createMany?: FamilleCreateManyRayonInputEnvelope
    set?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    disconnect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    delete?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    update?: FamilleUpdateWithWhereUniqueWithoutRayonInput | FamilleUpdateWithWhereUniqueWithoutRayonInput[]
    updateMany?: FamilleUpdateManyWithWhereWithoutRayonInput | FamilleUpdateManyWithWhereWithoutRayonInput[]
    deleteMany?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutRayonNestedInput = {
    create?: XOR<ProductCreateWithoutRayonInput, ProductUncheckedCreateWithoutRayonInput> | ProductCreateWithoutRayonInput[] | ProductUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRayonInput | ProductCreateOrConnectWithoutRayonInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutRayonInput | ProductUpsertWithWhereUniqueWithoutRayonInput[]
    createMany?: ProductCreateManyRayonInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutRayonInput | ProductUpdateWithWhereUniqueWithoutRayonInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutRayonInput | ProductUpdateManyWithWhereWithoutRayonInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type FamilleUncheckedUpdateManyWithoutRayonNestedInput = {
    create?: XOR<FamilleCreateWithoutRayonInput, FamilleUncheckedCreateWithoutRayonInput> | FamilleCreateWithoutRayonInput[] | FamilleUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: FamilleCreateOrConnectWithoutRayonInput | FamilleCreateOrConnectWithoutRayonInput[]
    upsert?: FamilleUpsertWithWhereUniqueWithoutRayonInput | FamilleUpsertWithWhereUniqueWithoutRayonInput[]
    createMany?: FamilleCreateManyRayonInputEnvelope
    set?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    disconnect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    delete?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    connect?: FamilleWhereUniqueInput | FamilleWhereUniqueInput[]
    update?: FamilleUpdateWithWhereUniqueWithoutRayonInput | FamilleUpdateWithWhereUniqueWithoutRayonInput[]
    updateMany?: FamilleUpdateManyWithWhereWithoutRayonInput | FamilleUpdateManyWithWhereWithoutRayonInput[]
    deleteMany?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutRayonNestedInput = {
    create?: XOR<ProductCreateWithoutRayonInput, ProductUncheckedCreateWithoutRayonInput> | ProductCreateWithoutRayonInput[] | ProductUncheckedCreateWithoutRayonInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutRayonInput | ProductCreateOrConnectWithoutRayonInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutRayonInput | ProductUpsertWithWhereUniqueWithoutRayonInput[]
    createMany?: ProductCreateManyRayonInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutRayonInput | ProductUpdateWithWhereUniqueWithoutRayonInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutRayonInput | ProductUpdateManyWithWhereWithoutRayonInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutTvaInput = {
    create?: XOR<ProductCreateWithoutTvaInput, ProductUncheckedCreateWithoutTvaInput> | ProductCreateWithoutTvaInput[] | ProductUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTvaInput | ProductCreateOrConnectWithoutTvaInput[]
    createMany?: ProductCreateManyTvaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type DataCreateNestedManyWithoutTvaInput = {
    create?: XOR<DataCreateWithoutTvaInput, DataUncheckedCreateWithoutTvaInput> | DataCreateWithoutTvaInput[] | DataUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTvaInput | DataCreateOrConnectWithoutTvaInput[]
    createMany?: DataCreateManyTvaInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutTvaInput = {
    create?: XOR<ProductCreateWithoutTvaInput, ProductUncheckedCreateWithoutTvaInput> | ProductCreateWithoutTvaInput[] | ProductUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTvaInput | ProductCreateOrConnectWithoutTvaInput[]
    createMany?: ProductCreateManyTvaInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type DataUncheckedCreateNestedManyWithoutTvaInput = {
    create?: XOR<DataCreateWithoutTvaInput, DataUncheckedCreateWithoutTvaInput> | DataCreateWithoutTvaInput[] | DataUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTvaInput | DataCreateOrConnectWithoutTvaInput[]
    createMany?: DataCreateManyTvaInputEnvelope
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateManyWithoutTvaNestedInput = {
    create?: XOR<ProductCreateWithoutTvaInput, ProductUncheckedCreateWithoutTvaInput> | ProductCreateWithoutTvaInput[] | ProductUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTvaInput | ProductCreateOrConnectWithoutTvaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTvaInput | ProductUpsertWithWhereUniqueWithoutTvaInput[]
    createMany?: ProductCreateManyTvaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTvaInput | ProductUpdateWithWhereUniqueWithoutTvaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTvaInput | ProductUpdateManyWithWhereWithoutTvaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DataUpdateManyWithoutTvaNestedInput = {
    create?: XOR<DataCreateWithoutTvaInput, DataUncheckedCreateWithoutTvaInput> | DataCreateWithoutTvaInput[] | DataUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTvaInput | DataCreateOrConnectWithoutTvaInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutTvaInput | DataUpsertWithWhereUniqueWithoutTvaInput[]
    createMany?: DataCreateManyTvaInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutTvaInput | DataUpdateWithWhereUniqueWithoutTvaInput[]
    updateMany?: DataUpdateManyWithWhereWithoutTvaInput | DataUpdateManyWithWhereWithoutTvaInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutTvaNestedInput = {
    create?: XOR<ProductCreateWithoutTvaInput, ProductUncheckedCreateWithoutTvaInput> | ProductCreateWithoutTvaInput[] | ProductUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTvaInput | ProductCreateOrConnectWithoutTvaInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTvaInput | ProductUpsertWithWhereUniqueWithoutTvaInput[]
    createMany?: ProductCreateManyTvaInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTvaInput | ProductUpdateWithWhereUniqueWithoutTvaInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTvaInput | ProductUpdateManyWithWhereWithoutTvaInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type DataUncheckedUpdateManyWithoutTvaNestedInput = {
    create?: XOR<DataCreateWithoutTvaInput, DataUncheckedCreateWithoutTvaInput> | DataCreateWithoutTvaInput[] | DataUncheckedCreateWithoutTvaInput[]
    connectOrCreate?: DataCreateOrConnectWithoutTvaInput | DataCreateOrConnectWithoutTvaInput[]
    upsert?: DataUpsertWithWhereUniqueWithoutTvaInput | DataUpsertWithWhereUniqueWithoutTvaInput[]
    createMany?: DataCreateManyTvaInputEnvelope
    set?: DataWhereUniqueInput | DataWhereUniqueInput[]
    disconnect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    delete?: DataWhereUniqueInput | DataWhereUniqueInput[]
    connect?: DataWhereUniqueInput | DataWhereUniqueInput[]
    update?: DataUpdateWithWhereUniqueWithoutTvaInput | DataUpdateWithWhereUniqueWithoutTvaInput[]
    updateMany?: DataUpdateManyWithWhereWithoutTvaInput | DataUpdateManyWithWhereWithoutTvaInput[]
    deleteMany?: DataScalarWhereInput | DataScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumPaymentEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentEnum | EnumPaymentEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentEnumFilter<$PrismaModel> | $Enums.PaymentEnum
  }

  export type NestedEnumPaymentEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentEnum | EnumPaymentEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentEnum[] | ListEnumPaymentEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentEnumWithAggregatesFilter<$PrismaModel> | $Enums.PaymentEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentEnumFilter<$PrismaModel>
    _max?: NestedEnumPaymentEnumFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RayonCreateWithoutProductsInput = {
    code: number
    libelle?: string | null
    famille?: FamilleCreateNestedManyWithoutRayonInput
  }

  export type RayonUncheckedCreateWithoutProductsInput = {
    code: number
    libelle?: string | null
    famille?: FamilleUncheckedCreateNestedManyWithoutRayonInput
  }

  export type RayonCreateOrConnectWithoutProductsInput = {
    where: RayonWhereUniqueInput
    create: XOR<RayonCreateWithoutProductsInput, RayonUncheckedCreateWithoutProductsInput>
  }

  export type FamilleCreateWithoutProductsInput = {
    code: number
    libelle?: string | null
    rayon?: RayonCreateNestedOneWithoutFamilleInput
    Data?: DataCreateNestedManyWithoutFamilleInput
  }

  export type FamilleUncheckedCreateWithoutProductsInput = {
    code: number
    libelle?: string | null
    rayon_code?: number | null
    Data?: DataUncheckedCreateNestedManyWithoutFamilleInput
  }

  export type FamilleCreateOrConnectWithoutProductsInput = {
    where: FamilleWhereUniqueInput
    create: XOR<FamilleCreateWithoutProductsInput, FamilleUncheckedCreateWithoutProductsInput>
  }

  export type TvaCreateWithoutProductsInput = {
    libelle?: string | null
    taux?: number | null
    code: number
    Data?: DataCreateNestedManyWithoutTvaInput
  }

  export type TvaUncheckedCreateWithoutProductsInput = {
    libelle?: string | null
    taux?: number | null
    code: number
    Data?: DataUncheckedCreateNestedManyWithoutTvaInput
  }

  export type TvaCreateOrConnectWithoutProductsInput = {
    where: TvaWhereUniqueInput
    create: XOR<TvaCreateWithoutProductsInput, TvaUncheckedCreateWithoutProductsInput>
  }

  export type RayonUpsertWithoutProductsInput = {
    update: XOR<RayonUpdateWithoutProductsInput, RayonUncheckedUpdateWithoutProductsInput>
    create: XOR<RayonCreateWithoutProductsInput, RayonUncheckedCreateWithoutProductsInput>
    where?: RayonWhereInput
  }

  export type RayonUpdateToOneWithWhereWithoutProductsInput = {
    where?: RayonWhereInput
    data: XOR<RayonUpdateWithoutProductsInput, RayonUncheckedUpdateWithoutProductsInput>
  }

  export type RayonUpdateWithoutProductsInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    famille?: FamilleUpdateManyWithoutRayonNestedInput
  }

  export type RayonUncheckedUpdateWithoutProductsInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    famille?: FamilleUncheckedUpdateManyWithoutRayonNestedInput
  }

  export type FamilleUpsertWithoutProductsInput = {
    update: XOR<FamilleUpdateWithoutProductsInput, FamilleUncheckedUpdateWithoutProductsInput>
    create: XOR<FamilleCreateWithoutProductsInput, FamilleUncheckedCreateWithoutProductsInput>
    where?: FamilleWhereInput
  }

  export type FamilleUpdateToOneWithWhereWithoutProductsInput = {
    where?: FamilleWhereInput
    data: XOR<FamilleUpdateWithoutProductsInput, FamilleUncheckedUpdateWithoutProductsInput>
  }

  export type FamilleUpdateWithoutProductsInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    rayon?: RayonUpdateOneWithoutFamilleNestedInput
    Data?: DataUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleUncheckedUpdateWithoutProductsInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    Data?: DataUncheckedUpdateManyWithoutFamilleNestedInput
  }

  export type TvaUpsertWithoutProductsInput = {
    update: XOR<TvaUpdateWithoutProductsInput, TvaUncheckedUpdateWithoutProductsInput>
    create: XOR<TvaCreateWithoutProductsInput, TvaUncheckedCreateWithoutProductsInput>
    where?: TvaWhereInput
  }

  export type TvaUpdateToOneWithWhereWithoutProductsInput = {
    where?: TvaWhereInput
    data: XOR<TvaUpdateWithoutProductsInput, TvaUncheckedUpdateWithoutProductsInput>
  }

  export type TvaUpdateWithoutProductsInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
    Data?: DataUpdateManyWithoutTvaNestedInput
  }

  export type TvaUncheckedUpdateWithoutProductsInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
    Data?: DataUncheckedUpdateManyWithoutTvaNestedInput
  }

  export type TicketCreateWithoutProductsInput = {
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentModes?: PaymentModeCreateNestedManyWithoutTicketInput
    client?: ClientCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutProductsInput = {
    number?: number
    total: number
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentModes?: PaymentModeUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutProductsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutProductsInput, TicketUncheckedCreateWithoutProductsInput>
  }

  export type WaittingTicketsCreateWithoutProductsInput = {
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaittingTicketsUncheckedCreateWithoutProductsInput = {
    number?: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaittingTicketsCreateOrConnectWithoutProductsInput = {
    where: WaittingTicketsWhereUniqueInput
    create: XOR<WaittingTicketsCreateWithoutProductsInput, WaittingTicketsUncheckedCreateWithoutProductsInput>
  }

  export type FamilleCreateWithoutDataInput = {
    code: number
    libelle?: string | null
    rayon?: RayonCreateNestedOneWithoutFamilleInput
    products?: ProductCreateNestedManyWithoutFamilleInput
  }

  export type FamilleUncheckedCreateWithoutDataInput = {
    code: number
    libelle?: string | null
    rayon_code?: number | null
    products?: ProductUncheckedCreateNestedManyWithoutFamilleInput
  }

  export type FamilleCreateOrConnectWithoutDataInput = {
    where: FamilleWhereUniqueInput
    create: XOR<FamilleCreateWithoutDataInput, FamilleUncheckedCreateWithoutDataInput>
  }

  export type TvaCreateWithoutDataInput = {
    libelle?: string | null
    taux?: number | null
    code: number
    products?: ProductCreateNestedManyWithoutTvaInput
  }

  export type TvaUncheckedCreateWithoutDataInput = {
    libelle?: string | null
    taux?: number | null
    code: number
    products?: ProductUncheckedCreateNestedManyWithoutTvaInput
  }

  export type TvaCreateOrConnectWithoutDataInput = {
    where: TvaWhereUniqueInput
    create: XOR<TvaCreateWithoutDataInput, TvaUncheckedCreateWithoutDataInput>
  }

  export type TicketUpsertWithoutProductsInput = {
    update: XOR<TicketUpdateWithoutProductsInput, TicketUncheckedUpdateWithoutProductsInput>
    create: XOR<TicketCreateWithoutProductsInput, TicketUncheckedCreateWithoutProductsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutProductsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutProductsInput, TicketUncheckedUpdateWithoutProductsInput>
  }

  export type TicketUpdateWithoutProductsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentModes?: PaymentModeUpdateManyWithoutTicketNestedInput
    client?: ClientUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutProductsInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentModes?: PaymentModeUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type WaittingTicketsUpsertWithoutProductsInput = {
    update: XOR<WaittingTicketsUpdateWithoutProductsInput, WaittingTicketsUncheckedUpdateWithoutProductsInput>
    create: XOR<WaittingTicketsCreateWithoutProductsInput, WaittingTicketsUncheckedCreateWithoutProductsInput>
    where?: WaittingTicketsWhereInput
  }

  export type WaittingTicketsUpdateToOneWithWhereWithoutProductsInput = {
    where?: WaittingTicketsWhereInput
    data: XOR<WaittingTicketsUpdateWithoutProductsInput, WaittingTicketsUncheckedUpdateWithoutProductsInput>
  }

  export type WaittingTicketsUpdateWithoutProductsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaittingTicketsUncheckedUpdateWithoutProductsInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilleUpsertWithoutDataInput = {
    update: XOR<FamilleUpdateWithoutDataInput, FamilleUncheckedUpdateWithoutDataInput>
    create: XOR<FamilleCreateWithoutDataInput, FamilleUncheckedCreateWithoutDataInput>
    where?: FamilleWhereInput
  }

  export type FamilleUpdateToOneWithWhereWithoutDataInput = {
    where?: FamilleWhereInput
    data: XOR<FamilleUpdateWithoutDataInput, FamilleUncheckedUpdateWithoutDataInput>
  }

  export type FamilleUpdateWithoutDataInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    rayon?: RayonUpdateOneWithoutFamilleNestedInput
    products?: ProductUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleUncheckedUpdateWithoutDataInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductUncheckedUpdateManyWithoutFamilleNestedInput
  }

  export type TvaUpsertWithoutDataInput = {
    update: XOR<TvaUpdateWithoutDataInput, TvaUncheckedUpdateWithoutDataInput>
    create: XOR<TvaCreateWithoutDataInput, TvaUncheckedCreateWithoutDataInput>
    where?: TvaWhereInput
  }

  export type TvaUpdateToOneWithWhereWithoutDataInput = {
    where?: TvaWhereInput
    data: XOR<TvaUpdateWithoutDataInput, TvaUncheckedUpdateWithoutDataInput>
  }

  export type TvaUpdateWithoutDataInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutTvaNestedInput
  }

  export type TvaUncheckedUpdateWithoutDataInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    taux?: NullableFloatFieldUpdateOperationsInput | number | null
    code?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutTvaNestedInput
  }

  export type DataCreateWithoutWaittingTicketsInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutProductsInput
    famille?: FamilleCreateNestedOneWithoutDataInput
    tva?: TvaCreateNestedOneWithoutDataInput
  }

  export type DataUncheckedCreateWithoutWaittingTicketsInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    famille_code?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataCreateOrConnectWithoutWaittingTicketsInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutWaittingTicketsInput, DataUncheckedCreateWithoutWaittingTicketsInput>
  }

  export type DataCreateManyWaittingTicketsInputEnvelope = {
    data: DataCreateManyWaittingTicketsInput | DataCreateManyWaittingTicketsInput[]
    skipDuplicates?: boolean
  }

  export type DataUpsertWithWhereUniqueWithoutWaittingTicketsInput = {
    where: DataWhereUniqueInput
    update: XOR<DataUpdateWithoutWaittingTicketsInput, DataUncheckedUpdateWithoutWaittingTicketsInput>
    create: XOR<DataCreateWithoutWaittingTicketsInput, DataUncheckedCreateWithoutWaittingTicketsInput>
  }

  export type DataUpdateWithWhereUniqueWithoutWaittingTicketsInput = {
    where: DataWhereUniqueInput
    data: XOR<DataUpdateWithoutWaittingTicketsInput, DataUncheckedUpdateWithoutWaittingTicketsInput>
  }

  export type DataUpdateManyWithWhereWithoutWaittingTicketsInput = {
    where: DataScalarWhereInput
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyWithoutWaittingTicketsInput>
  }

  export type DataScalarWhereInput = {
    AND?: DataScalarWhereInput | DataScalarWhereInput[]
    OR?: DataScalarWhereInput[]
    NOT?: DataScalarWhereInput | DataScalarWhereInput[]
    id?: IntFilter<"Data"> | number
    code?: StringFilter<"Data"> | string
    code_interne?: StringFilter<"Data"> | string
    libelle?: StringFilter<"Data"> | string
    price?: FloatFilter<"Data"> | number
    quantity?: IntFilter<"Data"> | number
    pvht?: FloatFilter<"Data"> | number
    total_pvht?: FloatFilter<"Data"> | number
    total?: FloatFilter<"Data"> | number
    ticketNumber?: IntNullableFilter<"Data"> | number | null
    waittingTicketsNumber?: IntNullableFilter<"Data"> | number | null
    famille_code?: IntNullableFilter<"Data"> | number | null
    tva_code?: IntNullableFilter<"Data"> | number | null
    createdAt?: DateTimeFilter<"Data"> | Date | string
    updatedAt?: DateTimeFilter<"Data"> | Date | string
  }

  export type DataCreateWithoutTicketInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    WaittingTickets?: WaittingTicketsCreateNestedOneWithoutProductsInput
    famille?: FamilleCreateNestedOneWithoutDataInput
    tva?: TvaCreateNestedOneWithoutDataInput
  }

  export type DataUncheckedCreateWithoutTicketInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    waittingTicketsNumber?: number | null
    famille_code?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataCreateOrConnectWithoutTicketInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutTicketInput, DataUncheckedCreateWithoutTicketInput>
  }

  export type DataCreateManyTicketInputEnvelope = {
    data: DataCreateManyTicketInput | DataCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type PaymentModeCreateWithoutTicketInput = {
    mode: $Enums.PaymentEnum
    amount: number
  }

  export type PaymentModeUncheckedCreateWithoutTicketInput = {
    id?: number
    mode: $Enums.PaymentEnum
    amount: number
  }

  export type PaymentModeCreateOrConnectWithoutTicketInput = {
    where: PaymentModeWhereUniqueInput
    create: XOR<PaymentModeCreateWithoutTicketInput, PaymentModeUncheckedCreateWithoutTicketInput>
  }

  export type PaymentModeCreateManyTicketInputEnvelope = {
    data: PaymentModeCreateManyTicketInput | PaymentModeCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type ClientCreateWithoutTicketsInput = {
    name: string
    address: string
    phone_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    address: string
    phone_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutTicketsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
  }

  export type DataUpsertWithWhereUniqueWithoutTicketInput = {
    where: DataWhereUniqueInput
    update: XOR<DataUpdateWithoutTicketInput, DataUncheckedUpdateWithoutTicketInput>
    create: XOR<DataCreateWithoutTicketInput, DataUncheckedCreateWithoutTicketInput>
  }

  export type DataUpdateWithWhereUniqueWithoutTicketInput = {
    where: DataWhereUniqueInput
    data: XOR<DataUpdateWithoutTicketInput, DataUncheckedUpdateWithoutTicketInput>
  }

  export type DataUpdateManyWithWhereWithoutTicketInput = {
    where: DataScalarWhereInput
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyWithoutTicketInput>
  }

  export type PaymentModeUpsertWithWhereUniqueWithoutTicketInput = {
    where: PaymentModeWhereUniqueInput
    update: XOR<PaymentModeUpdateWithoutTicketInput, PaymentModeUncheckedUpdateWithoutTicketInput>
    create: XOR<PaymentModeCreateWithoutTicketInput, PaymentModeUncheckedCreateWithoutTicketInput>
  }

  export type PaymentModeUpdateWithWhereUniqueWithoutTicketInput = {
    where: PaymentModeWhereUniqueInput
    data: XOR<PaymentModeUpdateWithoutTicketInput, PaymentModeUncheckedUpdateWithoutTicketInput>
  }

  export type PaymentModeUpdateManyWithWhereWithoutTicketInput = {
    where: PaymentModeScalarWhereInput
    data: XOR<PaymentModeUpdateManyMutationInput, PaymentModeUncheckedUpdateManyWithoutTicketInput>
  }

  export type PaymentModeScalarWhereInput = {
    AND?: PaymentModeScalarWhereInput | PaymentModeScalarWhereInput[]
    OR?: PaymentModeScalarWhereInput[]
    NOT?: PaymentModeScalarWhereInput | PaymentModeScalarWhereInput[]
    id?: IntFilter<"PaymentMode"> | number
    mode?: EnumPaymentEnumFilter<"PaymentMode"> | $Enums.PaymentEnum
    amount?: FloatFilter<"PaymentMode"> | number
    ticketNumber?: IntNullableFilter<"PaymentMode"> | number | null
  }

  export type ClientUpsertWithoutTicketsInput = {
    update: XOR<ClientUpdateWithoutTicketsInput, ClientUncheckedUpdateWithoutTicketsInput>
    create: XOR<ClientCreateWithoutTicketsInput, ClientUncheckedCreateWithoutTicketsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTicketsInput, ClientUncheckedUpdateWithoutTicketsInput>
  }

  export type ClientUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutClientInput = {
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataCreateNestedManyWithoutTicketInput
    paymentModes?: PaymentModeCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutClientInput = {
    number?: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataUncheckedCreateNestedManyWithoutTicketInput
    paymentModes?: PaymentModeUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutClientInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput>
  }

  export type TicketCreateManyClientInputEnvelope = {
    data: TicketCreateManyClientInput | TicketCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutClientInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutClientInput, TicketUncheckedUpdateWithoutClientInput>
    create: XOR<TicketCreateWithoutClientInput, TicketUncheckedCreateWithoutClientInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutClientInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutClientInput, TicketUncheckedUpdateWithoutClientInput>
  }

  export type TicketUpdateManyWithWhereWithoutClientInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutClientInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    number?: IntFilter<"Ticket"> | number
    total?: FloatFilter<"Ticket"> | number
    clientId?: IntNullableFilter<"Ticket"> | number | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type TicketCreateWithoutPaymentModesInput = {
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataCreateNestedManyWithoutTicketInput
    client?: ClientCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutPaymentModesInput = {
    number?: number
    total: number
    clientId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: DataUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutPaymentModesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPaymentModesInput, TicketUncheckedCreateWithoutPaymentModesInput>
  }

  export type TicketUpsertWithoutPaymentModesInput = {
    update: XOR<TicketUpdateWithoutPaymentModesInput, TicketUncheckedUpdateWithoutPaymentModesInput>
    create: XOR<TicketCreateWithoutPaymentModesInput, TicketUncheckedCreateWithoutPaymentModesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutPaymentModesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutPaymentModesInput, TicketUncheckedUpdateWithoutPaymentModesInput>
  }

  export type TicketUpdateWithoutPaymentModesInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUpdateManyWithoutTicketNestedInput
    client?: ClientUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutPaymentModesInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type RayonCreateWithoutFamilleInput = {
    code: number
    libelle?: string | null
    products?: ProductCreateNestedManyWithoutRayonInput
  }

  export type RayonUncheckedCreateWithoutFamilleInput = {
    code: number
    libelle?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutRayonInput
  }

  export type RayonCreateOrConnectWithoutFamilleInput = {
    where: RayonWhereUniqueInput
    create: XOR<RayonCreateWithoutFamilleInput, RayonUncheckedCreateWithoutFamilleInput>
  }

  export type ProductCreateWithoutFamilleInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon?: RayonCreateNestedOneWithoutProductsInput
    tva?: TvaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutFamilleInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon_code?: number | null
    tva_code?: number | null
  }

  export type ProductCreateOrConnectWithoutFamilleInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFamilleInput, ProductUncheckedCreateWithoutFamilleInput>
  }

  export type ProductCreateManyFamilleInputEnvelope = {
    data: ProductCreateManyFamilleInput | ProductCreateManyFamilleInput[]
    skipDuplicates?: boolean
  }

  export type DataCreateWithoutFamilleInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutProductsInput
    WaittingTickets?: WaittingTicketsCreateNestedOneWithoutProductsInput
    tva?: TvaCreateNestedOneWithoutDataInput
  }

  export type DataUncheckedCreateWithoutFamilleInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    waittingTicketsNumber?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataCreateOrConnectWithoutFamilleInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutFamilleInput, DataUncheckedCreateWithoutFamilleInput>
  }

  export type DataCreateManyFamilleInputEnvelope = {
    data: DataCreateManyFamilleInput | DataCreateManyFamilleInput[]
    skipDuplicates?: boolean
  }

  export type RayonUpsertWithoutFamilleInput = {
    update: XOR<RayonUpdateWithoutFamilleInput, RayonUncheckedUpdateWithoutFamilleInput>
    create: XOR<RayonCreateWithoutFamilleInput, RayonUncheckedCreateWithoutFamilleInput>
    where?: RayonWhereInput
  }

  export type RayonUpdateToOneWithWhereWithoutFamilleInput = {
    where?: RayonWhereInput
    data: XOR<RayonUpdateWithoutFamilleInput, RayonUncheckedUpdateWithoutFamilleInput>
  }

  export type RayonUpdateWithoutFamilleInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutRayonNestedInput
  }

  export type RayonUncheckedUpdateWithoutFamilleInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutRayonNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutFamilleInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutFamilleInput, ProductUncheckedUpdateWithoutFamilleInput>
    create: XOR<ProductCreateWithoutFamilleInput, ProductUncheckedCreateWithoutFamilleInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutFamilleInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutFamilleInput, ProductUncheckedUpdateWithoutFamilleInput>
  }

  export type ProductUpdateManyWithWhereWithoutFamilleInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutFamilleInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    code?: StringFilter<"Product"> | string
    code_interne?: StringFilter<"Product"> | string
    libelle?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    pvht?: FloatFilter<"Product"> | number
    rayon_code?: IntNullableFilter<"Product"> | number | null
    famille_code?: IntNullableFilter<"Product"> | number | null
    tva_code?: IntNullableFilter<"Product"> | number | null
  }

  export type DataUpsertWithWhereUniqueWithoutFamilleInput = {
    where: DataWhereUniqueInput
    update: XOR<DataUpdateWithoutFamilleInput, DataUncheckedUpdateWithoutFamilleInput>
    create: XOR<DataCreateWithoutFamilleInput, DataUncheckedCreateWithoutFamilleInput>
  }

  export type DataUpdateWithWhereUniqueWithoutFamilleInput = {
    where: DataWhereUniqueInput
    data: XOR<DataUpdateWithoutFamilleInput, DataUncheckedUpdateWithoutFamilleInput>
  }

  export type DataUpdateManyWithWhereWithoutFamilleInput = {
    where: DataScalarWhereInput
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyWithoutFamilleInput>
  }

  export type FamilleCreateWithoutRayonInput = {
    code: number
    libelle?: string | null
    products?: ProductCreateNestedManyWithoutFamilleInput
    Data?: DataCreateNestedManyWithoutFamilleInput
  }

  export type FamilleUncheckedCreateWithoutRayonInput = {
    code: number
    libelle?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutFamilleInput
    Data?: DataUncheckedCreateNestedManyWithoutFamilleInput
  }

  export type FamilleCreateOrConnectWithoutRayonInput = {
    where: FamilleWhereUniqueInput
    create: XOR<FamilleCreateWithoutRayonInput, FamilleUncheckedCreateWithoutRayonInput>
  }

  export type FamilleCreateManyRayonInputEnvelope = {
    data: FamilleCreateManyRayonInput | FamilleCreateManyRayonInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutRayonInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    famille?: FamilleCreateNestedOneWithoutProductsInput
    tva?: TvaCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutRayonInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    famille_code?: number | null
    tva_code?: number | null
  }

  export type ProductCreateOrConnectWithoutRayonInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRayonInput, ProductUncheckedCreateWithoutRayonInput>
  }

  export type ProductCreateManyRayonInputEnvelope = {
    data: ProductCreateManyRayonInput | ProductCreateManyRayonInput[]
    skipDuplicates?: boolean
  }

  export type FamilleUpsertWithWhereUniqueWithoutRayonInput = {
    where: FamilleWhereUniqueInput
    update: XOR<FamilleUpdateWithoutRayonInput, FamilleUncheckedUpdateWithoutRayonInput>
    create: XOR<FamilleCreateWithoutRayonInput, FamilleUncheckedCreateWithoutRayonInput>
  }

  export type FamilleUpdateWithWhereUniqueWithoutRayonInput = {
    where: FamilleWhereUniqueInput
    data: XOR<FamilleUpdateWithoutRayonInput, FamilleUncheckedUpdateWithoutRayonInput>
  }

  export type FamilleUpdateManyWithWhereWithoutRayonInput = {
    where: FamilleScalarWhereInput
    data: XOR<FamilleUpdateManyMutationInput, FamilleUncheckedUpdateManyWithoutRayonInput>
  }

  export type FamilleScalarWhereInput = {
    AND?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
    OR?: FamilleScalarWhereInput[]
    NOT?: FamilleScalarWhereInput | FamilleScalarWhereInput[]
    code?: IntFilter<"Famille"> | number
    libelle?: StringNullableFilter<"Famille"> | string | null
    rayon_code?: IntNullableFilter<"Famille"> | number | null
  }

  export type ProductUpsertWithWhereUniqueWithoutRayonInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutRayonInput, ProductUncheckedUpdateWithoutRayonInput>
    create: XOR<ProductCreateWithoutRayonInput, ProductUncheckedCreateWithoutRayonInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutRayonInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutRayonInput, ProductUncheckedUpdateWithoutRayonInput>
  }

  export type ProductUpdateManyWithWhereWithoutRayonInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutRayonInput>
  }

  export type ProductCreateWithoutTvaInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon?: RayonCreateNestedOneWithoutProductsInput
    famille?: FamilleCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutTvaInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon_code?: number | null
    famille_code?: number | null
  }

  export type ProductCreateOrConnectWithoutTvaInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTvaInput, ProductUncheckedCreateWithoutTvaInput>
  }

  export type ProductCreateManyTvaInputEnvelope = {
    data: ProductCreateManyTvaInput | ProductCreateManyTvaInput[]
    skipDuplicates?: boolean
  }

  export type DataCreateWithoutTvaInput = {
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutProductsInput
    WaittingTickets?: WaittingTicketsCreateNestedOneWithoutProductsInput
    famille?: FamilleCreateNestedOneWithoutDataInput
  }

  export type DataUncheckedCreateWithoutTvaInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    waittingTicketsNumber?: number | null
    famille_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataCreateOrConnectWithoutTvaInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutTvaInput, DataUncheckedCreateWithoutTvaInput>
  }

  export type DataCreateManyTvaInputEnvelope = {
    data: DataCreateManyTvaInput | DataCreateManyTvaInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutTvaInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutTvaInput, ProductUncheckedUpdateWithoutTvaInput>
    create: XOR<ProductCreateWithoutTvaInput, ProductUncheckedCreateWithoutTvaInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutTvaInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutTvaInput, ProductUncheckedUpdateWithoutTvaInput>
  }

  export type ProductUpdateManyWithWhereWithoutTvaInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutTvaInput>
  }

  export type DataUpsertWithWhereUniqueWithoutTvaInput = {
    where: DataWhereUniqueInput
    update: XOR<DataUpdateWithoutTvaInput, DataUncheckedUpdateWithoutTvaInput>
    create: XOR<DataCreateWithoutTvaInput, DataUncheckedCreateWithoutTvaInput>
  }

  export type DataUpdateWithWhereUniqueWithoutTvaInput = {
    where: DataWhereUniqueInput
    data: XOR<DataUpdateWithoutTvaInput, DataUncheckedUpdateWithoutTvaInput>
  }

  export type DataUpdateManyWithWhereWithoutTvaInput = {
    where: DataScalarWhereInput
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyWithoutTvaInput>
  }

  export type DataCreateManyWaittingTicketsInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    famille_code?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataUpdateWithoutWaittingTicketsInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutProductsNestedInput
    famille?: FamilleUpdateOneWithoutDataNestedInput
    tva?: TvaUpdateOneWithoutDataNestedInput
  }

  export type DataUncheckedUpdateWithoutWaittingTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUncheckedUpdateManyWithoutWaittingTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataCreateManyTicketInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    waittingTicketsNumber?: number | null
    famille_code?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentModeCreateManyTicketInput = {
    id?: number
    mode: $Enums.PaymentEnum
    amount: number
  }

  export type DataUpdateWithoutTicketInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WaittingTickets?: WaittingTicketsUpdateOneWithoutProductsNestedInput
    famille?: FamilleUpdateOneWithoutDataNestedInput
    tva?: TvaUpdateOneWithoutDataNestedInput
  }

  export type DataUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentModeUpdateWithoutTicketInput = {
    mode?: EnumPaymentEnumFieldUpdateOperationsInput | $Enums.PaymentEnum
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentModeUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    mode?: EnumPaymentEnumFieldUpdateOperationsInput | $Enums.PaymentEnum
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PaymentModeUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    mode?: EnumPaymentEnumFieldUpdateOperationsInput | $Enums.PaymentEnum
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyClientInput = {
    number?: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutClientInput = {
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUpdateManyWithoutTicketNestedInput
    paymentModes?: PaymentModeUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutClientInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: DataUncheckedUpdateManyWithoutTicketNestedInput
    paymentModes?: PaymentModeUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutClientInput = {
    number?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyFamilleInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon_code?: number | null
    tva_code?: number | null
  }

  export type DataCreateManyFamilleInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    waittingTicketsNumber?: number | null
    tva_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutFamilleInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon?: RayonUpdateOneWithoutProductsNestedInput
    tva?: TvaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutFamilleInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutFamilleInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DataUpdateWithoutFamilleInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutProductsNestedInput
    WaittingTickets?: WaittingTicketsUpdateOneWithoutProductsNestedInput
    tva?: TvaUpdateOneWithoutDataNestedInput
  }

  export type DataUncheckedUpdateWithoutFamilleInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUncheckedUpdateManyWithoutFamilleInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilleCreateManyRayonInput = {
    code: number
    libelle?: string | null
  }

  export type ProductCreateManyRayonInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    famille_code?: number | null
    tva_code?: number | null
  }

  export type FamilleUpdateWithoutRayonInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutFamilleNestedInput
    Data?: DataUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleUncheckedUpdateWithoutRayonInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutFamilleNestedInput
    Data?: DataUncheckedUpdateManyWithoutFamilleNestedInput
  }

  export type FamilleUncheckedUpdateManyWithoutRayonInput = {
    code?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutRayonInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    famille?: FamilleUpdateOneWithoutProductsNestedInput
    tva?: TvaUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutRayonInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutRayonInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    tva_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateManyTvaInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    pvht: number
    rayon_code?: number | null
    famille_code?: number | null
  }

  export type DataCreateManyTvaInput = {
    id?: number
    code: string
    code_interne: string
    libelle: string
    price: number
    quantity: number
    pvht: number
    total_pvht: number
    total: number
    ticketNumber?: number | null
    waittingTicketsNumber?: number | null
    famille_code?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutTvaInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon?: RayonUpdateOneWithoutProductsNestedInput
    famille?: FamilleUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutTvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutTvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    rayon_code?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DataUpdateWithoutTvaInput = {
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutProductsNestedInput
    WaittingTickets?: WaittingTicketsUpdateOneWithoutProductsNestedInput
    famille?: FamilleUpdateOneWithoutDataNestedInput
  }

  export type DataUncheckedUpdateWithoutTvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataUncheckedUpdateManyWithoutTvaInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    code_interne?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    pvht?: FloatFieldUpdateOperationsInput | number
    total_pvht?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waittingTicketsNumber?: NullableIntFieldUpdateOperationsInput | number | null
    famille_code?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WaittingTicketsCountOutputTypeDefaultArgs instead
     */
    export type WaittingTicketsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaittingTicketsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketCountOutputTypeDefaultArgs instead
     */
    export type TicketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilleCountOutputTypeDefaultArgs instead
     */
    export type FamilleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RayonCountOutputTypeDefaultArgs instead
     */
    export type RayonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RayonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TvaCountOutputTypeDefaultArgs instead
     */
    export type TvaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TvaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DataDefaultArgs instead
     */
    export type DataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaittingTicketsDefaultArgs instead
     */
    export type WaittingTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaittingTicketsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentModeDefaultArgs instead
     */
    export type PaymentModeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentModeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilleDefaultArgs instead
     */
    export type FamilleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RayonDefaultArgs instead
     */
    export type RayonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RayonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TvaDefaultArgs instead
     */
    export type TvaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TvaDefaultArgs<ExtArgs>

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