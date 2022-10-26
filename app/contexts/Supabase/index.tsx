
import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import type {
  Dispatch,
  ReactNode,
  SetStateAction} from 'react';
import {
  createContext,
  useState
} from 'react';

type SupabaseProviderProps = {
  children: ReactNode;
};

interface Appointment {
  id: number
}

type SupabaseContextData = {
  appointments: Appointment[];
  setAppointments: Dispatch<SetStateAction<Appointment[]>>;
  // supabaseClient: SupabaseClient
};

export const SupabaseContext = createContext({} as SupabaseContextData);


export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  return (
    <SupabaseContext.Provider
      value={{
        appointments,
        setAppointments, 
        // supabaseClient,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};
