import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class EditUserDTO {
  @IsNotEmpty({ message: 'Todos os campos são obrigatórios' })
  @IsString({ message: 'Todos os campos são obrigatórios' })
  username: string;

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
