<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

---

## Modules in Nest Js

--

- A Module is a class annoted with a @Module() decorator.

- Each application has a root module which Nest uses as a starting point to resolve the application's structure and relationships.

- It's highly recommended to use multiple modules to organize your application components.

- The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

- When you create another modules need to register in the main modules

```js
cats / cats.module.ts;

import { Module } from '@nestjs/common';
import { CatsController } from './cats/controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModules {}
```

---

## Controllers in Nestjs

- A Controller's purpose is to recieve specific requests for the application.

- The controller then handles the request and returns the appropriate response.

```js

import {Controller, Get} from '@nestjs/common';

@Controller('cats')
export class CatsController{

  @Get()
  findAll(): string{
    return 'This action returns all cats'
  }
}

```

- user controllers

```ts
import { Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return { name: 'Ajeet', email: 'aj@gmail.com' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:delete')
  deleteUser(@Param() params: { userId: number }) {
    return 'user id deleted';
  }
}
```

---

## NEST CLI

-

```bash
nest g module modulename

# create module
nest g module user

# create controller
nest g controller user

#create service or provider
nest g s user


```

## Providers in Nestjs

---

- Providers are fundamental to Nestjs

- Providers are plain javascriptclasses that are declared as providers in a module.

- Classes such as services, repositories, or helpers can be treated as providers simply by adding Nest's "@injectable()" decorator.

- Providers can be injected into a class through the contructor and Nest will handle resolving the dependencies, making dependency management extremely easy.

Example of service class

```Ts
#cats.service.ts

import {Injectable} from '@nestjs/common';
import {Cat} './interfaces/cat.interface';

@Injectable()
export class CastService{

  private readonly cats: Cat[] = [];

  create(cat : Cat){
    this.cats.push(cat);
  }

  findAll():Cat[]{
    return this.cats;
  }
}

```

## What is Dependency Injection [DI] in NESTJS

---

- Dependency Injection (DI) is a design pattern used to make classes independent of their dependencies.
  Instead of a class creating its own instances, NestJS injects them for you.

- When class A uses some functionality of class B, then it is said that class A has a dependency of class B.

- To use class B we need to create its object first
- const b = new B();

- But what if B id also depends on class C, then we need another object and so on

- So, transferring the task of creating the object to someone else and directly using the depnedency is called dependency injection.

- According to the principes,

- A class should concentrate on fulfilling its responsibilities and not on creating objects that is requires.

- And that's where dependency injection comes into play: It provides the class with the required objects.

## Benifits of DI [Dependency Injection]

- Helps in unit testing.

- Boiler plate code is reduced, as initializing of dependencies is done by the injector component.

- Extending the application become easier.

- Helps to enable loose coupling, which is important in appliation programming.

# DTO [Data transfer Object]

- A DTO is a typescript class or interface that :
  - Describe Shape of the data (what field it has, their types)
  - Often includes validation rules using decorators from the class-validator and class-transformer package

📦 Example
Step 1: Install validation packages

```bash
npm install class-validator class-transformer
```

Step 2: Create a DTO

```ts
// create-user.dto.ts
import { IsString, IsEmail, IsInt, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  age: number;
}
```

⚙️ Step 3: Use the DTO in a Controller

```ts
// users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    // Nest automatically validates the input if ValidationPipe is enabled
    return {
      message: 'User created successfully!',
      data: createUserDto,
    };
  }
}
```

🧰 Step 4: Enable Global Validation

In your main entry file (main.ts):

```ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

### ✅ Benefits of Using DTOs

- Validation: Prevents invalid data from reaching your business logic.

- Type safety: Provides clear contracts for incoming/outgoing data.

- Cleaner code: Keeps controllers and services organized.

- Transformation: Converts input strings (like "42") to proper types (number).


🧠 Example: Update DTO (Partial fields)

When updating, you may not want all fields required:

```ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

```
