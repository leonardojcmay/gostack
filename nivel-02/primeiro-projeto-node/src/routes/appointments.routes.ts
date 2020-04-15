import { Router } from 'express';
// pacote utilizado para data
import { parseISO } from 'date-fns'; // parseISO converte do formato string para o formato date

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// listar todos os agendamentos
appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
});

// Cadastrando agendamento
appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body; // nome do cabeleireiro e a data

        // pegando a string e tranformando num objeto do javascript
        const parsedDate = parseISO(date);

        // conectando com o CreateAppointmentService(onde esta a regra de negocio), para efetuar o cadastro
        const createAppointment = new CreateAppointmentService(
            appointmentsRepository,
        );

        const appointment = createAppointment.execute({
            provider,
            date: parsedDate,
        });

        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default appointmentsRouter;
