import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    // encontrando appointment em uma data especifica para fazer a validação de não ter dois agendamentos no mesmo horario
    // metodo: retorno do metodo ou nulo
    public async findByDate(date: Date): Promise<Appointment | null> {
        // verificar que dois agendamentos nao podem ser criados no mesmo horario
        // findAppointment: encontrar um agendamento na mesma data
        const findAppointment = await this.findOne({
            where: { date },
        });

        // se tiver o findAppointment retorna o valor, se não retorna null
        return findAppointment || null;
    }
}

export default AppointmentsRepository;
