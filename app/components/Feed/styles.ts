import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  max-height: 300px;
  max-width: 516px;
  width: 516px;

  @media (max-width: 530px) {
    width: 350px;

  }

  font-size: 1rem;
  color: #ffffff;
`;

export const Content = styled.div`
  min-width: 300px;

  padding-left: 1.5rem;
  
  border-radius: .5rem;

  display: flex;
  flex-direction: column;

  background-color: #313131;

  margin-bottom: 1rem;

  @media (max-width: 530px) {
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 1.5rem;

  div{
    display: flex;
    flex-direction: column;

    padding-bottom: .5rem;

  }

  @media (max-width: 530px) {
    div {
      align-items: flex-start;
      margin-top: 40px;
    }
  }
`;

export const Title = styled.span`
  max-width: 80%;

  text-overflow: ellipsis;

  text-align: left;

  font-weight: bold;
  font-size: 1.5rem;

  padding-bottom: 0.5rem;

  @media (max-width: 530px) {
    text-align: left;
  }
`;

export const Text = styled.span`
  max-width: 80%;

  text-overflow: ellipsis;

  text-align: left;

  font-size: 1rem;
  font-weight: 400;

  @media (max-width: 530px) {
    text-align: left;
  }
`;


export const Close = styled.button`
  padding: 24px;

  display: flex;
  align-self: flex-end;

  background-color: #313131;
  border: 0;

  border-radius: 0.5rem;
`;

