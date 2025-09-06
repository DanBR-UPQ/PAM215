/*
1. Crea una clase llama inicioPAM
2. Esta clase debe contener 4 métodos que desplieguen la información
correspondiente a la materia:
• Reglamento POO
• LineamientosClassroom
• FechasdeParciales
• PorcentajesporParcial
3. Crea una interfaz que utilice y consuma la clase inicioPAM y sus
métodos usando la programación orientada a objetos
*/
import java.util.Scanner;

interface Interfaz{
    void ReglamentoPOO();
    void LineamientosClassroom();
    void FechasdeParciales();
    void PorcentajesporParcial();

}

class inicioPAM implements Interfaz{

    public void ReglamentoPOO(){
        System.out.println("1. Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase");
        System.out.println("2. Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m)");
        System.out.println("3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor(a), justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos. (De forma física deben ser presentados al tutor para ser validados y de forma posterior emitidos)");
        System.out.println("4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea. (Salvo previo justificante validado por el tutor)");
        System.out.println("5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan");
        System.out.println("6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom");
        System.out.println("7. El plagio o copia de trabajos y/o exámenes será condicionado a reprobar la asignatura y se reportará al área correspondiente");
        System.out.println("8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final");
        System.out.println("9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes, administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará una primera llamada de atención. Si el alumno hace caso omiso tendrá que abandonar el aula. Tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial");
        System.out.println("10. Uso de laptops y/o dispositivos móviles quedará limitado a uso exclusivo de las actividades que así lo requieran");
        System.out.println("11. Prohibido el uso de audífonos durante la clase");
        System.out.println("12. Prohibido comer y/o tomar líquidos en el salón");
        System.out.println("13. Prohibido sentarse encima de las mesas, así como columpiarse en las sillas");
        System.out.println("14. Todo tema académico debe ser revisado primeramente por parte del alumno con el docente. De no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación de tutores. En caso de no solucionarse, pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)");
        System.out.println("15. Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo");
        System.out.println("16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes. Ese día se entregarán exámenes y se brindará retroalimentación");
        System.out.println("17. Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia. Una vez firmado o aceptado por el 50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión");
    }

    public void LineamientosClassroom(){
        System.out.println("Cada reporte debe contener:");
        System.out.println("o PORTADA");
        System.out.println("o APUNTES TEORICOS");
        System.out.println("o PRACTICA GUIADA PASO A PASO");
        System.out.println("o CAPTURAS DE CADA PASO");
        System.out.println("o RESULTADO DE LA PRACTICA");
        System.out.println("o CONCLUSION DE APRENDIZAJE");
        System.out.println("\nCada entregable debe contener:");
        System.out.println("a. Reporte de práctica");
        System.out.println("b. Enlace de repositorio de GitHub");

    }

    public void FechasdeParciales(){
        System.out.println("1er parcial: 29-Sep-25");
        System.out.println("2do parcial: 03-Oct-25");
        System.out.println("3er parcial: 01-Dec-25");
        System.out.println("Final: 89-Dec-25");
    }

    public void PorcentajesporParcial(){
        System.out.println("                        1P      2P      3P");
        System.out.println("Conocimiento:           40%     40%     20%");
        System.out.println("Desempeño:              20%     20%     10%");
        System.out.println("Producto:               30%     20%     40%");
        System.out.println("Proyecto Integrador:    10%     20%     30%");

    }


    public static void main(String[] args){
        Scanner teclado = new Scanner(System.in);
        inicioPAM Obj = new inicioPAM();

        while(true){
            System.out.println("1. Reglamento POO\n2. Lineamientos de Classroom\n3. Fechas de Parciales\n4. Porcentajes por Parcial");
            System.out.print("Seleccione una opción: ");
            int s = teclado.nextInt();
            teclado.nextLine();

            switch(s){
                case 1:
                    Obj.ReglamentoPOO();
                    break;
                case 2:
                    Obj.LineamientosClassroom();
                    break;            
                case 3:
                    Obj.FechasdeParciales();
                    break;   
                case 4:
                    Obj.PorcentajesporParcial();
                    break;                  
                default:
                    System.out.println("Número inválido");                           
            }

            System.out.println("\nPara salir, ingrese 1. Para continuar, presione enter");
            String Continuar = teclado.nextLine();
            if(Continuar.equals("1")){
                break;
            }
        }

        teclado.close();
    }
}
