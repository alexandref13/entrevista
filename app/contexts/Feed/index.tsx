import type {
  Dispatch,
  ReactNode,
  SetStateAction} from 'react';
import {
  createContext,
  useState,
  useEffect
} from 'react';

import { useLoaderData } from "@remix-run/react"
import { createClient } from "@supabase/supabase-js"
import type { loader } from '../../routes';


type FeedProviderProps = {
  children: ReactNode;
};

export interface JsonProps {
  id: number;
  title: string;
  hoursStart: string;
  hoursEnd: string;
}

type FeedContextData = {
  jsons: JsonProps[];
  id: number;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setJsons: Dispatch<SetStateAction<JsonProps[]>>;
  setId: Dispatch<SetStateAction<number>>;
  
  handleDeletePost: (id: number) => void;
};

export const FeedContext = createContext({} as FeedContextData);

export const FeedProvider = ({ children }: FeedProviderProps) => {
  // const { url, token } = useLoaderData<typeof loader>()
  const supabaseClient = createClient("https://dnojusyylyajcxrwxtsj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRub2p1c3l5bHlhamN4cnd4dHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2NTQ0MjQsImV4cCI6MTk4MjIzMDQyNH0.aN5Ol1x7OMh5eAEKkH8z5bzJiRl7NKrqhOecMedD8cs" )

  const [id, setId] = useState(1);
  const [jsons, setJsons] = useState<JsonProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  function handleDeletePost(id: number) {
    setJsons((current) =>
      current.filter((post) => {
        return post.id !== id;
      })
    );
  }

  useEffect(() => {
    setIsLoading(true);
    supabaseClient.from('appointments').select().then((response: any) => {
      
      if (response.error) {
        console.error('Error fetching appointments', response.error)
        return
      }

      if (!response.data) {
        console.error('No appointments found')
        return
      }

      setIsLoading(false)
      console.log(response.data);
    })

  }, [])

  return (
    <FeedContext.Provider
      value={{
        jsons,
        setJsons,
        id,
        setId,
        handleDeletePost, 
        isLoading, 
        setIsLoading
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};
