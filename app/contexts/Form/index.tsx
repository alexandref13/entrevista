import type {
  Dispatch,
  ReactNode,
  SetStateAction} from 'react';
import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { isBefore, isAfter, isEqual } from 'date-fns';
import { FeedContext } from '../Feed';

type FormProviderProps = {
  children: ReactNode;
};

type FormContextData = {
  title: string;
  hoursStart: string;
  hoursEnd: string;
  isAbleToPost: boolean;
  errorMessage: string;
  isLoading: boolean;
  setIsAbleToPost: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setHoursStart: Dispatch<SetStateAction<string>>;
  setHoursEnd: Dispatch<SetStateAction<string>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  handlePost: () => void;
  handleClear: () => void;
};

export const FormContext = createContext({} as FormContextData);

export const FormProvider = ({ children }: FormProviderProps) => {
  const { id, jsons, setId, setJsons, isLoading, setIsLoading } = useContext(FeedContext);

  const [title, setTitle] = useState('');
  const [hoursStart, setHoursStart] = useState('');
  const [hoursEnd, setHoursEnd] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [isAbleToPost, setIsAbleToPost] = useState(false);

  useEffect(() => {
    if (title && hoursStart && hoursEnd) {
      setIsAbleToPost(true);
    } else {
      setIsAbleToPost(false);
    }
  }, [title, hoursStart, hoursEnd]);

  function handlePost() {
    var startHoursToDate = new Date(hoursStart);
    var endHoursToDate = new Date(hoursEnd);

    const IsAfterStartHours = isAfter(endHoursToDate, startHoursToDate);

    if (IsAfterStartHours) {
      console.log(jsons.length);

      var isAbleToPostInThisHour;

      // NOTE -> Comparando com as horas de início com outros agendamentos
      var isAfterStart;
      var isEqualStart;
      var isStartBeforeEnd;

      // NOTE -> Comparando com as horas de término com outros agendamentos
      var isAfterEnd;
      var isEndBeforeEnd;

      startHoursToDate = new Date(hoursStart);
      endHoursToDate = new Date(hoursEnd);

      if (jsons.length == 0) {
        isAbleToPostInThisHour = true;
      } else {
        jsons.forEach((json) => {
          const jsonStartHoursToDate = new Date(json.hoursStart);
          const jsonEndHoursToDate = new Date(json.hoursEnd);

          // NOTE -> Fazendo comparaçoes entre minha hora de inicio com horas de inicio de outros agendamentos
          isAfterStart = isAfter(startHoursToDate, jsonStartHoursToDate);
          isEqualStart = isEqual(startHoursToDate, jsonStartHoursToDate);
          isStartBeforeEnd = isBefore(startHoursToDate, jsonEndHoursToDate);

          // NOTE -> Fazendo comparaçoes entre minha hora de término com horas de término de outros agendamentos
          isAfterEnd = isAfter(endHoursToDate, jsonStartHoursToDate);
          isEndBeforeEnd = isBefore(endHoursToDate, jsonEndHoursToDate);

          console.log({
            isEqualStart,
            isAfterStart,
            isStartBeforeEnd,
            isAfterEnd,
            isEndBeforeEnd
          });

          if (isEqualStart) {
            isAbleToPostInThisHour = false;
          } else if (isAfterStart && isStartBeforeEnd) {
            isAbleToPostInThisHour = false;
          } else if (isAfterEnd && isEndBeforeEnd) {
            isAbleToPostInThisHour = false;
          } else if (!isAfterStart && !isEndBeforeEnd) {
            isAbleToPostInThisHour = false;
          } else {
            isAbleToPostInThisHour = true;
          }
        });
      }

      if (isAbleToPostInThisHour) {
        setErrorMessage('');
        setId(id + 1);
        setJsons([
          ...jsons,
          {
            id,
            title,
            hoursStart,
            hoursEnd
          }
        ]);

        handleClear();
      } else {
        setErrorMessage('Este horário já está reservado');
      }
    } else {
      setErrorMessage(
        'O horário de término precisa ser depois do horário de início'
      );
    }
  }

  function handleClear() {
    setTitle('');
    setHoursStart('');
    setHoursEnd('');
  }

  return (
    <FormContext.Provider
      value={{
        title,
        setTitle,
        hoursStart,
        setHoursStart,
        hoursEnd,
        errorMessage,
        setHoursEnd,
        handlePost,
        isAbleToPost,
        setIsAbleToPost,
        setErrorMessage,
        handleClear,
        isLoading, 
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
