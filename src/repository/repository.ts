/**
 * REPOSITORY PATTERN
 *
 * Cuándo usar este patrón:
 * - Cuando querés separar la lógica de acceso a datos del dominio.
 * - Cuando no querés que el resto de la app sepa si los datos vienen
 *   de una base de datos, API, memoria, etc.
 * - Cuando querés facilitar testing (mockear repositorios).
 *
 * Ejemplos reales:
 * - Acceso a base de datos (SQL, NoSQL)
 * - APIs REST
 * - Cualquier fuente de datos externa
 */


interface User {
    id: number;
    name: string;
}

interface UserRespository {
    getAll(): User[];
    getById(id: number): User | undefined;
}

class InMemoryUserRepository implements UserRespository {
    private users: User[] = [
        { id: 1, name: 'Milton' },
        { id: 2, name: 'Matias' }
    ];


    getAll(): User[] {
        return this.users;
    }

    getById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

//Servicio que usa el repositorio
class UserService {
    constructor(private userRepository: UserRespository) {
    }

    listUsers(): User[] {
        return this.userRepository.getAll();
    }

    getUser(id: number): User | undefined {
        return this.userRepository.getById(id);
    }
}

//Demostración
const repository = new InMemoryUserRepository();
const service = new UserService(repository);

console.log(service.getUser(1));
console.log(service.listUsers());