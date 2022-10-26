import styled from "styled-components";

export const Container = styled.div`
  max-width: 516px;
  width: 516px;

  @media (max-width: 530px) {
    width: 350px;

  }
  
  padding-bottom: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;


  input {
      margin: .5rem 0;
      padding: .75rem 1rem;
      border-radius: .5rem;
      background-color: #494949;
      color: #f2f2f2;
      border: none;
    }
`

export const ClearFilter = styled.button`
  background-color: #D0342C;
  padding: 1rem .5rem;

  border: 0;
  border-radius: .5rem;

  color: #f2f2f2;
  
  transition: background-color .3s;


  &:hover{
    background-color: #AD2B24
  }
`

export const TitleSearch = styled.div``
export const StartDateSearch = styled.div``
export const EndDateSearch = styled.div``