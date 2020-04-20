import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1587410436837
    implements MigrationInterface {
    // Up: criar algum campo no bando de dados
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid', // gerando id automatico utilizando o uuid
                        default: 'uuid_generate_v4()', // é necessario que coloque default para o uuid funcionar
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                        isNullable: false, // nao é possivel ter este campo como nulo
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone', // salva o horario e o fuso horario
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    // Down: desfazer o que o metodo up fez
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }
}
