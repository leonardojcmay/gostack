import { Router } from 'express';
// pacote utilizado para data
import { parseISO } from 'date-fns'; // parseISO converte do formato string para o formato date
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

// Aplicando o middleware de autenticação em todas as rotas de agendamentos
appointmentsRouter.use(ensureAuthenticated);

// listar todos os agendamentos
appointmentsRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
});

// Cadastrando agendamento
appointmentsRouter.post('/', async (request, response) => {
    const { provider_id, date } = request.body; // nome do cabeleireiro e a data

    // pegando a string e tranformando num objeto do javascript
    const parsedDate = parseISO(date);

    // conectando com o CreateAppointmentService(onde esta a regra de negocio), para efetuar o cadastro
    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
        provider_id,
        date: parsedDate,
    });

    return response.json(appointment);
});

export default appointmentsRouter;
