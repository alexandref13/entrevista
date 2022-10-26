import styled from 'styled-components';

export const Container = styled.div`
  max-height: 400px;
  max-width: 516px;
  width: 516px;

  @media (max-width: 530px) {
    width: 350px;

  }

  border-radius: .5rem;
  background-color: #313131;
  
  padding: 1.5rem;
  margin: 1rem auto;

  div{
    display: flex;
    flex-direction: column;

    label{
      color: #f2f2f2;
    }

    input {
      margin: .5rem 0;
      padding: .75rem 1rem;
      border-radius: .5rem;
      background-color: #494949;
      color: #f2f2f2;
      border: none;
    }
  }
`;

export const Send = styled.button.attrs(
  (props: { isAbleToPost: boolean }) => props
)`

    margin: 1rem 0;

    color: ${(props) => (props.isAbleToPost ? 'white' : `#313131`)};
    background-color: ${(props) =>
      props.isAbleToPost ? `#71bb00` : `#5f5f5f`};
    border-radius: 8px;
    border: 0;
    padding: .75rem 1.5rem;
    font-size: 1rem;
    line-height: 1.29;
    letter-spacing: normal;
    cursor: ${(props) => (props.isAbleToPost ? `pointer`: `default` )};
    transition: background-color .3s;

    &:hover{
      background-color:${(props) =>
      props.isAbleToPost ? `#61A101` : `#5f5f5f`}
    }
`

export const ErrorMessage = styled.p`
  color: #D0342C;
  padding: .5rem 0
`