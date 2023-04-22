// Exemplo test E2E que peguei de um projeto pessoal para fins ilustrativos

// import * as request from 'supertest';
// import { Test } from '@nestjs/testing';
// import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
// import { UsersModule } from '../../src/users/users.module';
// import { ConfigModule } from '@nestjs/config';
// import { DatabaseModule } from '../../src/database/database.module';
// import { EventEmitterModule } from '@nestjs/event-emitter';
// import SendEmailUserCreatedListener from '../../src/users/application/handler/send-email-user-created.listener';
// import PublishMessageUserCreatedListener from '../../src/users/application/handler/publish-message-user-created.listener';

// describe('Users E2E', () => {
//   let app: INestApplication;

//   beforeAll(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [
//         ConfigModule.forRoot({
//           isGlobal: true,
//         }),
//         EventEmitterModule.forRoot(),
//         UsersModule,
//         DatabaseModule,
//       ],
//     })
//       .overrideProvider(SendEmailUserCreatedListener)
//       .useValue({
//         handle: jest.fn(),
//       })
//       .overrideProvider(PublishMessageUserCreatedListener)
//       .useValue({
//         handle: jest.fn(),
//       })
//       .compile();

//     app = moduleRef.createNestApplication();

//     app.useGlobalPipes(
//       new ValidationPipe({
//         forbidNonWhitelisted: true,
//         transform: true,
//         whitelist: true,
//       }),
//     );

//     await app.init();
//   });

//   describe('/POST users', () => {
//     it('it should create successfuly', async () => {
//       const payload = {
//         email: 'danillolsrios@gmail.com',
//       };

//       await request(app.getHttpServer())
//         .post('/api/users')
//         .send(payload)
//         .expect(HttpStatus.CREATED)
//         .then(({ body }) => {
//           expect(body).toEqual(payload);
//         });
//     });

//     it('it should return bad request when email is not valid', () => {
//       const payload = {
//         email: 'email',
//       };

//       return request(app.getHttpServer())
//         .post('/api/users')
//         .send(payload)
//         .expect(HttpStatus.BAD_REQUEST);
//     });
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });
