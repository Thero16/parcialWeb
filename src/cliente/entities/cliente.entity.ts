import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrganosDisponible } from "src/organos-disponibles/entities/organos-disponible.entity";
import { Relocalizacion } from "src/relocalizacion/entities/relocalizacion.entity";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable:false})
    nombre: string;

    @Column({nullable:false})
    documento: string;

    @Column({nullable:false})
    tipoDocumento: string;

    @Column({nullable: false})
    correoElectronico: string;

    @Column()
    contrasena: string;

    @Column({type: Date, nullable:false})
    fechaNacimiento: Date;

    @OneToMany(() => Relocalizacion, relocalizacion=> relocalizacion.cliente)
    relocalizaciones: Relocalizacion[];

    @OneToMany(() => OrganosDisponible, organo => organo.cliente)
    organos: OrganosDisponible[];

}
