// pacote utilizado para o id
import { uuid } from 'uuidv4';

// descrevendo um agendamento, declarando o tipo dos elementos
class Appointment {
    id: string;

    provider: string;

    date: Date;

    // recebendo todos os parametros menos id
    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointment;
