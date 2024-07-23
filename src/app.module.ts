import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'christ',
      database: 'books',
      autoLoadEntities: true,  // Pour auto-charger les entités enregistrées dans les modules
      synchronize: true,  // Synchroniser la base de données avec les entités à chaque démarrage de l'application
    }),
    BooksModule,
  ],
})
export class AppModule {}
