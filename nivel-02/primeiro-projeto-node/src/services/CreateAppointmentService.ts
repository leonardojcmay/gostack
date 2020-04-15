// pacote utilizado para data
import { startOfHour } from 'date-fns'; // startOfHour vai iniciar min, segundo tudo zerado

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
    provider: string;
    date: Date;
}

// criando um agendamento
class CreateAppointmentService {
    // Dependency Inversion (SOLID)
    // const appointmentsRepository = new AppointmentsRepository(); pegando estes dados la do appointments.routes.ts para não acarretar em erros caso a aplicação cresça. Pois não é correto sempre criar um new Repository
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ provider, date }: Request): Appointment {
        // criando data
        const appointmentDate = startOfHour(date);

        // verificação se contem agendamento cadastado na data
        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameDate) {
            throw Error('This appointment is already booked');
        }

        // acessando metodo create do repository
        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
