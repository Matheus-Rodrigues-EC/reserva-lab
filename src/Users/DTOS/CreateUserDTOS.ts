import {
  IsString,
  IsStrongPassword,
  IsNotEmpty,
  IsEmail,
  IsBoolean,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsString({ message: 'Todos os campos são obrigatórios' })
  username: string;

  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsEmail()
  @IsString({ message: 'Todos os campos são obrigatórios' })
  email: string;

  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsString({ message: 'Todos os campos são obrigatórios' })
  @IsStrongPassword()
  password: string;

  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsString({ message: 'Todos os campos são obrigatórios' })
  firstName: string;

  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsString({ message: 'Todos os campos são obrigatórios' })
  lastName: string;

  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsString({ message: 'Todos os campos são obrigatórios' })
  school: string;

  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsBoolean({ message: 'O tipo de usuário deve ser selecionado' })
  isHeadmaster: boolean;

  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsBoolean({ message: 'O tipo de usuário deve ser selecionado' })
  isTeacher: boolean;
}
