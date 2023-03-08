import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  margin-top: 20px;
`;

export const FilterInput = styled.input`
  width: 100%;
  margin-top: 4px;
  margin-bottom: 20px;
  padding: 10px;

  outline: none;
  border: none;
  border-radius: 4px;

  background-color: #efefef;
  &:focus {
    background-color: #e6e3e3;
  }
`;
