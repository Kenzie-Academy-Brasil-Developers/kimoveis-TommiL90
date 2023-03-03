import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({type:"date"})
  createdAt: string;

  @UpdateDateColumn({type:"date"})
  updatedAt: string;

  @DeleteDateColumn({type:"date"})
  deletedAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
      const isEncrypted = getRounds(this.password)
      if(!isEncrypted){
          this.password = hashSync(this.password, 10)
      }
  }
}

export { User };
