import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStoreInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
