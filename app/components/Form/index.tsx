import { useContext } from 'react';
import { FormContext } from '../../contexts/Form';
import { Container, Send, ErrorMessage } from './styles';

export const Form = () => {
  const {
    title,
    setTitle,
    hoursStart,
    errorMessage,
    setHoursStart,
    hoursEnd,
    setHoursEnd,
    handlePost,
    isAbleToPost, 
    isLoading
  } = useContext(FormContext);

  function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleHoursStart(e: React.ChangeEvent<HTMLInputElement>) {
    setHoursStart(e.target.value);
  }

  function handleHoursEnd(e: React.ChangeEvent<HTMLInputElement>) {
    setHoursEnd(e.target.value);
  }

  return (
    <Container>
      {isLoading ? <div>
        <h1>Carregando...</h1>
      </div> : null}
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          placeholder="Digite o titulo do evento"
          value={title}
          onChange={handleTitle}
        />
      </div>

      <div>
        <label>Hora de inicio</label>
        <input
          type="datetime-local"
          value={hoursStart}
          onChange={handleHoursStart}
        />
      </div>

      <div>
        <label>Hora do término</label>
        <input
          type="datetime-local"
          value={hoursEnd}
          onChange={handleHoursEnd}
        />
      </div>

      <Send isAbleToPost={isAbleToPost} onClick={handlePost}>
        Adicionar
      </Send>

      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Container>
  );
};
