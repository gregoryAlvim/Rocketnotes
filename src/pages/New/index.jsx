import { Container, Form } from './styles';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Header} from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function New () {
   return (
      <Container>
         <Header />

         <main>
            <Form>
               <header>
                  <h1> Criar nota </h1>
                  <a href="/">voltar</a>
               </header>

               <Input placeholder="Título" />

               <Textarea placeholder="Observações" />

               <Section title="Links úteis">
                  <NoteItem value="https://github.com/gregoryAlvim" />
                  <NoteItem isNew placeholder="Novo link" />
               </Section>

               <Section title="Marcadores">
                  <div className='tags'>
                     <NoteItem value="React" />
                     <NoteItem isNew placeholder="Novo tag" />
                  </div>
               </Section>

               <Button title="Salvar" />

            </Form>
         </main>
      </Container>
   );
}