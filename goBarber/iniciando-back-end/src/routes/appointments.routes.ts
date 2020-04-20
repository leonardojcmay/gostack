import { Router } from 'express';
// pacote utilizado para data
import { parseISO } from 'date-fns'; // parseISO converte do formato string para o formato date
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

// listar todos os agendamentos
appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
});

// Cadastrando agendamento
appointmentsRouter.post('/', async (request, response) => {
    try {
        const { provider, date } = request.body; // nome do cabeleireiro e a data

        // pegando a string e tranformando num objeto do javascript
        const parsedDate = parseISO(date);

        // conectando com o CreateAppointmentService(onde esta a regra de negocio), para efetuar o cadastro
        const createAppointment = new CreateAppointmentService();

        const appointment = await createAppointment.execute({
            provider,
            date: parsedDate,
        });

        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default appointmentsRouter;
