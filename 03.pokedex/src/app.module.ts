import { join } from 'path'; //node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    
    ServeStaticModule.forRoot({ // ruta de nuestra pagina estatica
      rootPath: join(__dirname,'..','public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'), // conexion a base de datos
    PokemonModule, CommonModule // modulo de pokemon
  ],
  controllers: [],
  providers: [],
})
export class AppModule {};