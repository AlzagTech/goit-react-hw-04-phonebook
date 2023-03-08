import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }
`;

export const ContactName = styled.p`
  font-weight: bold;
`;

export const ContactNumber = styled.p`
  color: #867e7e;
`;

export const ContactBtn = styled.button`
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 8px;

  &:hover {
    background-color: #e6e3e3;
  }
`;
