// pacote para direcionar o banco de dados
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// descrevendo um agendamento, declarando o tipo dos elementos
@Entity('appointments') // nome da tabela do banco de dados
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('timestamp with time zone')
    date: Date;
}

export default Appointment;
