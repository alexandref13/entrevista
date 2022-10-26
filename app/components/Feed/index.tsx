import { Close, Container, Content, Message, Text, Title } from './styles';

import { format } from 'date-fns';

import { useContext } from 'react';
import { FeedContext } from '../../contexts/Feed';
import { SearchContext } from '../../contexts/Search';

export const Feed = () => {
  const { handleDeletePost } = useContext(FeedContext);
  const { filteredSearch } = useContext(SearchContext);

  return (
    <Container>
      {filteredSearch?.map((json) => {
        //NOTE -> Formatando as horas para mostrar ao usuário.
        var startHoursToDate = new Date(json.hoursStart);
        var endHoursToDate = new Date(json.hoursEnd);

        const formatedHoursStart = format(startHoursToDate, 'dd/MM/yyyy HH:mm');
        const formatedHoursEnd = format(endHoursToDate, 'dd/MM/yyyy HH:mm');

        return (
          <Content key={json.id}>
            <Close
              onClick={() => {
                handleDeletePost(json.id);
              }}
            >
              <img src="delete.svg" alt="Ícone de deleção" />
            </Close>
            <Message>
              <Title>{json.title}</Title>
              <div>
                <div>
                  <p>Hora de inicio</p>
                  <Text>{formatedHoursStart}</Text>
                </div>
                <div>
                  <p>Hora de término</p>
                  <Text>{formatedHoursEnd}</Text>
                </div>
              </div>
            </Message>
          </Content>
        );
      })}
    </Container>
  );
};
