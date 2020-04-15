import { isEqual } from 'date-fns'; // isEqual verifica se duas datas são iguais
import Appointment from '../models/Appointment';

// Data Transfer Object
interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    // inicializando variavel appointments
    constructor() {
        this.appointments = [];
    }

    // listando todos os agendamento
    public all(): Appointment[] {
        return this.appointments;
    }

    // encontrando appointment em uma data especifica para fazer a validação de não ter dois agendamentos no mesmo horario
    // metodo: retorno do metodo ou nulo
    public findByDate(date: Date): Appointment | null {
        // verificar que dois agendamentos nao podem ser criados no mesmo horario
        // findAppointment: encontrar um agendamento na mesma data
        const findAppointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );

        // se tiver o findAppointment retorna o valor, se não retorna null
        return findAppointment || null;
    }

    // criando agendamentos
    // metodo: retorno que o metodo deverá trazer
    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        const appointment = new Appointment({ provider, date });

        // adicionando appointment na listagem
        this.appointments.push(appointment);

        return appointment;
    }
}

export default AppointmentsRepository;
