import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export default class AlterProviderFieldToProviderId1587424874494
    implements MigrationInterface {
    // <void> significa retorno vazio
    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropColumn('appointments', 'provider');
        await queryRunner.addColumn(
            'appointments',
            new TableColumn({
                name: 'provider_id',
                type: 'uuid',
                isNullable: true, // para que quando o usuario queira excluir sua conta, não exclua este agendamento. Para conter um historico
            }),
        );

        await queryRunner.createForeignKey(
            'appointments',
            new TableForeignKey({
                name: 'AppointmentProvider',
                columnNames: ['provider_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL', // o que vai acontecer com este agendamento caso o usuario seja deletado
                onUpdate: 'CASCADE', // caso o usuario tenha seu id alterado
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // deletando foreignkey
        await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');

        // delatando coluna provider_id
        await queryRunner.dropColumn('appointments', 'provider_id');

        await queryRunner.addColumn(
            'appointments',
            new TableColumn({
                name: 'provider',
                type: 'varchar',
            }),
        );
    }
}
