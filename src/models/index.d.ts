import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTest1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Test2 | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTest1 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test1, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Test2>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Test1 = LazyLoading extends LazyLoadingDisabled ? EagerTest1 : LazyTest1

export declare const Test1: (new (init: ModelInit<Test1>) => Test1) & {
  copyOf(source: Test1, mutator: (draft: MutableModel<Test1>) => MutableModel<Test1> | void): Test1;
}

type EagerTest2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog?: Test1 | null;
  readonly comments?: (Test3 | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly test1PostsId?: string | null;
}

type LazyTest2 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test2, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog: AsyncItem<Test1 | undefined>;
  readonly comments: AsyncCollection<Test3>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly test1PostsId?: string | null;
}

export declare type Test2 = LazyLoading extends LazyLoadingDisabled ? EagerTest2 : LazyTest2

export declare const Test2: (new (init: ModelInit<Test2>) => Test2) & {
  copyOf(source: Test2, mutator: (draft: MutableModel<Test2>) => MutableModel<Test2> | void): Test2;
}

type EagerTest3 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test3, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Test2 | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly test2CommentsId?: string | null;
}

type LazyTest3 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Test3, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Test2 | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly test2CommentsId?: string | null;
}

export declare type Test3 = LazyLoading extends LazyLoadingDisabled ? EagerTest3 : LazyTest3

export declare const Test3: (new (init: ModelInit<Test3>) => Test3) & {
  copyOf(source: Test3, mutator: (draft: MutableModel<Test3>) => MutableModel<Test3> | void): Test3;
}