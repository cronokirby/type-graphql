import { registerEnumType, ObjectType, Field, Int, Float, ID, Resolver, FieldResolver, Root, Ctx, InputType, Query, Mutation } from "type-graphql";
import DataLoader from "dataloader";

/**
 * Role enum comment
 */
export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}
registerEnumType(Role, {
  name: "Role",
  description: "Role enum comment",
});

export enum PostKind {
  BLOG = "BLOG",
  ADVERT = "ADVERT"
}
registerEnumType(PostKind, {
  name: "PostKind",
  description: undefined,
});

export enum OrderByArg {
  asc = "asc",
  desc = "desc"
}
registerEnumType(OrderByArg, {
  name: "OrderByArg",
  description: undefined,
});

/**
 * User model comment
 */
@ObjectType({
  isAbstract: true,
  description: "User model comment",
})
export class BaseUser {
  /**
   * User model field comment
   */
  @Field(_type => Int, {
    nullable: false,
    description: "User model field comment",
  })
  id!: number;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null;

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  age!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined,
  })
  balance!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined,
  })
  amount!: number;

  posts?: BasePost[] | null;

  @Field(_type => Role, {
    nullable: false,
    description: undefined,
  })
  role!: keyof typeof Role;
}

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class BasePost {
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  uuid!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  createdAt!: string;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  updatedAt!: string;

  @Field(_type => Boolean, {
    nullable: false,
    description: undefined,
  })
  published!: boolean;

  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  title!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  content?: string | null;

  author?: BaseUser;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined,
  })
  kind?: keyof typeof PostKind | null;
}

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregateUser {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;
}

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregatePost {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;
}

@ObjectType({
  isAbstract: true,
  description: undefined,
})
export class BatchPayload {
  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  count!: number;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostWhereInput {
  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  uuid?: StringFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @Field(_type => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  published?: BooleanFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  content?: NullableStringFilter | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;

  @Field(_type => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PostWhereInput[] | null;

  @Field(_type => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PostWhereInput[] | null;

  @Field(_type => [PostWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PostWhereInput[] | null;

  @Field(_type => UserWhereInput, {
    nullable: true,
    description: undefined
  })
  author?: UserWhereInput | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserWhereInput {
  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  id?: IntFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  name?: NullableStringFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  age?: IntFilter | null;

  @Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  balance?: FloatFilter | null;

  @Field(_type => FloatFilter, {
    nullable: true,
    description: undefined
  })
  amount?: FloatFilter | null;

  @Field(_type => PostFilter, {
    nullable: true,
    description: undefined
  })
  posts?: PostFilter | null;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: UserWhereInput[] | null;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: UserWhereInput[] | null;

  @Field(_type => [UserWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: UserWhereInput[] | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostWhereUniqueInput {
  @Field(_type => ID, {
    nullable: true,
    description: undefined
  })
  uuid?: string | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutAuthorInput {
  @Field(_type => ID, {
    nullable: true,
    description: undefined
  })
  uuid?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  createdAt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  updatedAt?: string | null;

  @Field(_type => Boolean, {
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateManyWithoutPostsInput {
  @Field(_type => [PostCreateWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutAuthorInput[] | null;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput[] | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined
  })
  balance!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;

  @Field(_type => Role, {
    nullable: false,
    description: undefined
  })
  role!: keyof typeof Role;

  @Field(_type => PostCreateManyWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  posts?: PostCreateManyWithoutPostsInput | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateWithoutAuthorDataInput {
  @Field(_type => ID, {
    nullable: true,
    description: undefined
  })
  uuid?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  createdAt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  updatedAt?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published?: boolean | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutAuthorDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PostUpdateWithoutAuthorDataInput;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostScalarWhereInput {
  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  uuid?: StringFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @Field(_type => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  published?: BooleanFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  title?: StringFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  content?: NullableStringFilter | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PostScalarWhereInput[] | null;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PostScalarWhereInput[] | null;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PostScalarWhereInput[] | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyDataInput {
  @Field(_type => ID, {
    nullable: true,
    description: undefined
  })
  uuid?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  createdAt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  updatedAt?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published?: boolean | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyWithWhereNestedInput {
  @Field(_type => PostScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: PostScalarWhereInput;

  @Field(_type => PostUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PostUpdateManyDataInput;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(_type => PostWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PostWhereUniqueInput;

  @Field(_type => PostUpdateWithoutAuthorDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PostUpdateWithoutAuthorDataInput;

  @Field(_type => PostCreateWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  create!: PostCreateWithoutAuthorInput;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyWithoutAuthorInput {
  @Field(_type => [PostCreateWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutAuthorInput[] | null;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput[] | null;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: PostWhereUniqueInput[] | null;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: PostWhereUniqueInput[] | null;

  @Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: PostWhereUniqueInput[] | null;

  @Field(_type => [PostUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | null;

  @Field(_type => [PostUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: PostUpdateManyWithWhereNestedInput[] | null;

  @Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: PostScalarWhereInput[] | null;

  @Field(_type => [PostUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  age?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  balance?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  amount?: number | null;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null;

  @Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  posts?: PostUpdateManyWithoutAuthorInput | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateManyMutationInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  age?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  balance?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  amount?: number | null;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateWithoutPostsInput {
  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  email!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined
  })
  balance!: number;

  @Field(_type => Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;

  @Field(_type => Role, {
    nullable: false,
    description: undefined
  })
  role!: keyof typeof Role;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutAuthorInput {
  @Field(_type => UserCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutPostsInput | null;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateInput {
  @Field(_type => ID, {
    nullable: true,
    description: undefined
  })
  uuid?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  createdAt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  updatedAt?: string | null;

  @Field(_type => Boolean, {
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;

  @Field(_type => UserCreateOneWithoutAuthorInput, {
    nullable: false,
    description: undefined
  })
  author!: UserCreateOneWithoutAuthorInput;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateWithoutPostsDataInput {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  id?: number | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  age?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  balance?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  amount?: number | null;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutPostsInput {
  @Field(_type => UserUpdateWithoutPostsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutPostsDataInput;

  @Field(_type => UserCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutPostsInput;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneRequiredWithoutPostsInput {
  @Field(_type => UserCreateWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutPostsInput | null;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;

  @Field(_type => UserUpdateWithoutPostsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutPostsDataInput | null;

  @Field(_type => UserUpsertWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutPostsInput | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateInput {
  @Field(_type => ID, {
    nullable: true,
    description: undefined
  })
  uuid?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  createdAt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  updatedAt?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published?: boolean | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;

  @Field(_type => UserUpdateOneRequiredWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  author?: UserUpdateOneRequiredWithoutPostsInput | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyMutationInput {
  @Field(_type => ID, {
    nullable: true,
    description: undefined
  })
  uuid?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  createdAt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  updatedAt?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  published?: boolean | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  title?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | null;

  @Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof PostKind | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class StringFilter {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  equals?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  not?: string | null;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  in?: string[] | null;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  notIn?: string[] | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lte?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gte?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  contains?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  startsWith?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  endsWith?: string | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class DateTimeFilter {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  equals?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  not?: string | null;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  in?: string[] | null;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  notIn?: string[] | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lte?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gte?: string | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class BooleanFilter {
  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  equals?: boolean | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  not?: boolean | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NullableStringFilter {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  equals?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  not?: string | null;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  in?: string[] | null;

  @Field(_type => [String], {
    nullable: true,
    description: undefined
  })
  notIn?: string[] | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lte?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gt?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  gte?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  contains?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  startsWith?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  endsWith?: string | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class NullablePostKindFilter {
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class IntFilter {
  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  equals?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  not?: number | null;

  @Field(_type => [Int], {
    nullable: true,
    description: undefined
  })
  in?: number[] | null;

  @Field(_type => [Int], {
    nullable: true,
    description: undefined
  })
  notIn?: number[] | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  lt?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  lte?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  gt?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  gte?: number | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class FloatFilter {
  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  equals?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  not?: number | null;

  @Field(_type => [Float], {
    nullable: true,
    description: undefined
  })
  in?: number[] | null;

  @Field(_type => [Float], {
    nullable: true,
    description: undefined
  })
  notIn?: number[] | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  lt?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  lte?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  gt?: number | null;

  @Field(_type => Float, {
    nullable: true,
    description: undefined
  })
  gte?: number | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostFilter {
  @Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: PostWhereInput | null;

  @Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: PostWhereInput | null;

  @Field(_type => PostWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: PostWhereInput | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class RoleFilter {
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserOrderByInput {
  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  id?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  email?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  name?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  age?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  balance?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  amount?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof OrderByArg | null;
}

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostOrderByInput {
  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  uuid?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  createdAt?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  updatedAt?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  published?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  title?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  content?: keyof typeof OrderByArg | null;

  @Field(_type => OrderByArg, {
    nullable: true,
    description: undefined
  })
  kind?: keyof typeof OrderByArg | null;
}

function createUserPostsLoader(photon: any) {
  return new DataLoader<number, BasePost[] | null>(async keys => {
    const fetchedData: any[] = await photon.users.findMany({
      where: { id: { in: keys } },
      select: { id: true, posts: true },
    });
    return keys
      .map(key => fetchedData.find(data => data.id === key)!)
      .map(data => data.posts);
  });
}

@Resolver(_of => BaseUser)
export class UserRelationsResolver {
  @FieldResolver(_type => [BasePost], {
    nullable: true,
    description: undefined,
  })
  async posts(@Root() user: BaseUser, @Ctx() ctx: any): Promise<BasePost[] | null> {
    ctx.userPostsLoader = ctx.userPostsLoader || createUserPostsLoader(ctx.photon);
    return ctx.userPostsLoader.load(user.id);
  }
}

function createPostAuthorLoader(photon: any) {
  return new DataLoader<string, BaseUser>(async keys => {
    const fetchedData: any[] = await photon.posts.findMany({
      where: { uuid: { in: keys } },
      select: { uuid: true, author: true },
    });
    return keys
      .map(key => fetchedData.find(data => data.uuid === key)!)
      .map(data => data.author);
  });
}

@Resolver(_of => BasePost)
export class PostRelationsResolver {
  @FieldResolver(_type => BaseUser, {
    nullable: false,
    description: undefined,
  })
  async author(@Root() post: BasePost, @Ctx() ctx: any): Promise<BaseUser> {
    ctx.postAuthorLoader = ctx.postAuthorLoader || createPostAuthorLoader(ctx.photon);
    return ctx.postAuthorLoader.load(post.uuid);
  }
}

@Resolver(_of => BaseUser)
export class BaseUserCrudResolver {
  @Query(_type => BaseUser, {
    nullable: true,
    description: undefined
  })
  async findOneUser(): Promise<BaseUser | null> {
    throw new Error("Not implemented yet!");
  }

  @Query(_type => [BaseUser], {
    nullable: true,
    description: undefined
  })
  async findManyUser(): Promise<BaseUser[] | null> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BaseUser, {
    nullable: false,
    description: undefined
  })
  async createOneUser(): Promise<BaseUser> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BaseUser, {
    nullable: true,
    description: undefined
  })
  async deleteOneUser(): Promise<BaseUser | null> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BaseUser, {
    nullable: true,
    description: undefined
  })
  async updateOneUser(): Promise<BaseUser | null> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyUser(): Promise<BatchPayload> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BaseUser, {
    nullable: false,
    description: undefined
  })
  async upsertOneUser(): Promise<BaseUser> {
    throw new Error("Not implemented yet!");
  }

  @Query(_type => AggregateUser, {
    nullable: false,
    description: undefined
  })
  async aggregateUser(): Promise<AggregateUser> {
    throw new Error("Not implemented yet!");
  }
}

@Resolver(_of => BasePost)
export class BasePostCrudResolver {
  @Query(_type => BasePost, {
    nullable: true,
    description: undefined
  })
  async findOnePost(): Promise<BasePost | null> {
    throw new Error("Not implemented yet!");
  }

  @Query(_type => [BasePost], {
    nullable: true,
    description: undefined
  })
  async findManyPost(): Promise<BasePost[] | null> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BasePost, {
    nullable: false,
    description: undefined
  })
  async createOnePost(): Promise<BasePost> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BasePost, {
    nullable: true,
    description: undefined
  })
  async deleteOnePost(): Promise<BasePost | null> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BasePost, {
    nullable: true,
    description: undefined
  })
  async updateOnePost(): Promise<BasePost | null> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPost(): Promise<BatchPayload> {
    throw new Error("Not implemented yet!");
  }

  @Mutation(_type => BasePost, {
    nullable: false,
    description: undefined
  })
  async upsertOnePost(): Promise<BasePost> {
    throw new Error("Not implemented yet!");
  }

  @Query(_type => AggregatePost, {
    nullable: false,
    description: undefined
  })
  async aggregatePost(): Promise<AggregatePost> {
    throw new Error("Not implemented yet!");
  }
}
