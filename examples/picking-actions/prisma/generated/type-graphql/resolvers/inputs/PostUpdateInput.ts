import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UserUpdateOneWithoutPostsInput } from "../inputs/UserUpdateOneWithoutPostsInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

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

  @Field(_type => UserUpdateOneWithoutPostsInput, {
    nullable: true,
    description: undefined
  })
  author?: UserUpdateOneWithoutPostsInput | null;
}