---
layout: doc
title: Utility Types
titleTemplate: false
sidebar: false
aside: true
---

# Utility Types

## ExtractPartial\<T, K>

<<< ../src/index.ts#ExtractPartial

## ExtractRequired\<T, K>

<<< ../src/index.ts#ExtractRequired

## MaybeArray\<T>

<<< ../src/index.ts#MaybeArray

Something may or may not be an array.

## MaybePromise\<T>

<<< ../src/index.ts#MaybePromise

Something may or may not be a promise.

## Nullish\<T>

<<< ../src/index.ts#Nullish

Something may be nullish.

## PartialNullish\<T>

<<< ../src/index.ts#PartialNullish

Constructs a type where all properties of `T` may be nullish.

## PickByValue\<T, V>

<<< ../src/index.ts#PickByValue

```ts
interface Movie {
  title: string;
  description: string;
  stars: number;
}

type MovieWithoutStars = PickByValue<Movie, string>;

const movie: MovieWithoutStars = {
  title: 'Resident Evil',
  description: '2002 action horror film'
};
```

Like [`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys), but constructs the type based on the values.

## PickPartial<T, K>

<<< ../src/index.ts#PickPartial

Constructs a type by picking the set of properties `K` from a [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype) version of `T`.

## PickRequired<T, K>

<<< ../src/index.ts#PickRequired

Constructs a type by picking the set of properties `K` from a [`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype) version of `T`.

## WithPartial\<T, K>

<<< ../src/index.ts#WithPartial

Constructs a type consisting of some properties of `T` set to partial.

## WithRequired\<T, K>

<<< ../src/index.ts#WithRequired

Constructs a type consisting of some properties of `T` set to required.
