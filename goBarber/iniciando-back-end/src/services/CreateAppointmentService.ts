// pacote utilizado para data
import { startOfHour } from 'date-fns'; // startOfHour vai iniciar min, segundo tudo zerado
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
    provider_id: string;
    date: Date;
}

// criando um agendamento
class CreateAppointmentService {
    // Dependency Inversion (SOLID)

    public async execute({ provider_id, date }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(
            AppointmentsRepository,
        );

        // criando data
        const appointmentDate = startOfHour(date);

        // verificação se contem agendamento cadastado na data
        const findAppointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameDate) {
            throw new Error('This appointment is already booked');
        }

        // acessando metodo create do repository. Ele apenas cria uma instancia e depois tem que rodar o save, para salvar no banco de dados
        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        });

        // salvando registro no banco de dados
        await appointmentsRepository.save(appointment);

        return appointment;
    }
}

export default CreateAppointmentService;
