import { useState } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from "./styles";

export function Profile () {

   const { user, updateProfile } = useAuth();

   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [passwordOld, setPasswordOld] = useState();
   const [passwordNew, setPasswordNew] = useState();

   async function handleUpdate() {

      const user = {
         name,
         email,
         password: passwordNew,
         old_password: passwordOld,
      };

      await updateProfile({ user });
   }

   return (
      <Container>
         <header>
            <Link to="/">
               <FiArrowLeft />
            </Link>
         </header>

         <Form>
            <Avatar>
               <img 
                  src="https://github.com/gregoryAlvim.png" 
                  alt="Foto do usuário" 
               />

               <label htmlFor="avatar">
                  <FiCamera />

                  <input 
                     id="avatar" 
                     type="file"
                  />
               </label>
            </Avatar>

            <Input
               placeholder="Name"
               type="text"
               icon={FiUser}
               value={name}
               onChange={ event => setName(event.target.value) }
            />

            <Input
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               value={email}
               onChange={ event => setEmail(event.target.value) }
            />

            <Input
               placeholder="Senha atual"
               type="password"
               icon={FiLock}
               onChange={ event => setPasswordOld(event.target.value) }
            />

            <Input
               placeholder="Nova senha"
               type="password"
               icon={FiLock}
               onChange={ event => setPasswordNew(event.target.value) }
            />

            <Button 
               title="Salvar"
               onClick={handleUpdate}
            />
            
         </Form>
      </Container>
   );
}