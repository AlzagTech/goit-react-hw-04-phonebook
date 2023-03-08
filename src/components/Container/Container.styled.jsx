import styled from 'styled-components';

export const SectionContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  & + & {
    margin-bottom: 20px;
  }
`;
