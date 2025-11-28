import { Usuario} from '../models/Usuario'
import DatabaseService from '../database/DatabaseService'

export class UsuarioController {
    constructor() {
        this.listeners = []
        
    }
    
    async initialize() {
        await DatabaseService.initialize()
    }
    
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll()
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion))
        } catch (error) {
            console.error('Error al obtener usuarios: ', error)
            throw new Error('No se pudieron cargar los usuarios')
        }
    }
    
    async crearUsuario(nombre) {
        try {
            //1. Validar datos
            Usuario.validar(nombre)
            
            //2. Insertar en la db
            const nuevoUsuario = await DatabaseService.add(nombre.trim())
            
            //3. Noificar a los observadores
            this.notifyListeners()
            
            //4. Retornar usuario creado
            return new Usuario(
            nuevoUsuario.id,
            nuevoUsuario.nombre,
            nuevoUsuario.fecha_creacion
            )
        } catch (error) {
            console.error('Error al crear usuario: ', error)
            throw error
        }
    }


    async actualizarUsuario(id, nuevoNombre) {
        try {

            //1. Validar datos
            Usuario.validar(nuevoNombre)

            //2. Insertar en la db
            const usuarioActualizado = await DatabaseService.update(id, nuevoNombre.trim())

            //3. Noificar a los observadores
            this.notifyListeners()

            //4. Retornar usuario actualizado
            return new Usuario(
                usuarioActualizado.id,
                usuarioActualizado.nombre,
                usuarioActualizado.fecha_creacion
            )
        } catch (error) {
            console.error('Error al actualizar usuario: ', error)
            throw error
        }
    }


    async eliminarUsuario(id) {
        try {
            
            await DatabaseService.delete(id)
            
            this.notifyListeners()

            return true
        } catch (error) {
            console.error('Error al eliminar usuario: ', error)
            throw new Error('No se pudo eliminar el usuario')
        }
    }


    
    // Sistema de observadores para actualizar la vista automáticamente
    addListener(callback) {
        this.listeners.push(callback)
    }
    
    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback)
    }
    
    notifyListeners() {
        this.listeners.forEach(callback => callback())
    }
}