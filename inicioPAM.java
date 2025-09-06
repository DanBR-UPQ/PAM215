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

class inicioPAM{

    static void ReglamentoPOO(){
        System.out.println("reglamento");
    }

    static void LineamientosClassroom(){
        System.out.println("lineamientos");
    }

    static void FechasdeParciales(){
        System.out.println("fechas parciales");
    }

    static void PorcentajesporParcial(){
        System.out.println("porcentajes parcial");
    }


    public static void main(String[] args){
        Scanner teclado = new Scanner(System.in);

        System.out.println("1. Reglamento POO\n2. Lineamientos de Classroom\n3. Fechas de Parciales\n4. Porcentajes por Parcial");
        System.out.print("Seleccione una opción: ");
        int s = teclado.nextInt();

        switch(s){
            case 1:
                ReglamentoPOO();
                break;
            case 2:
                LineamientosClassroom();
                break;            
            case 3:
                FechasdeParciales();
                break;   
            case 4:
                PorcentajesporParcial();
                break;                  
            default:
                System.out.println("Número inválido");                           
        }

        teclado.close();
    }
}
