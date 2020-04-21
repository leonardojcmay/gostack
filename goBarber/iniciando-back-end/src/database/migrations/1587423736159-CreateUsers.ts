import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1587423736159 implements MigrationInterface {
    // Up: criar algum campo no bando de dados
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid', // gerando id automatico utilizando o uuid
                        default: 'uuid_generate_v4()', // é necessario que coloque default para o uuid funcionar
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar', // salva o horario e o fuso horario
                        isUnique: true, // garantindo que o e-mail é unico na tabela
                    },
                    {
                        name: 'password',
                        type: 'varchar', // salva o horario e o fuso horario
                    },
                    {
                        name: 'created_at', // data de criação do usuario
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at', // data de atualização do usuario
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    // Down: desfazer o que o metodo up fez
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
