import styled from 'styled-components';
import { BiBookBookmark } from 'react-icons/bi'

export const Container = styled.div`
  width: calc(330px * 3);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  width: 310px;
  margin: 10px;
  height: 120px;
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 16px;
  position: relative;
`;

export const Title = styled.a`
  color: #58a6e9;
  font-size: 15px;
  display: flex;
  word-break: break-all;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Language = styled.div`
  color: #8b949e;
  position: absolute;
  bottom: 12px;
  display: flex;
  align-items: center;
  font-size: 13px;

  .JavaScript {
    background-color: #f1e05a;
  }

  .CSS {
    background-color: #563d7c;
  }

  .HTML {
    background-color: #e34c26;
  }

  .Python {
    background-color: #3572a5;
  }
`;

export const Book = styled(BiBookBookmark)`
  color: #8b949e;
  margin-right: 8px;
  margin-top: -2px;
  font-size: 20px;
` 

export const Ball = styled.div`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 50%;  
  border: 0px solid #8b949e;
` 