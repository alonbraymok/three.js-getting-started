import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  height: 60px;
  width: 260px;
  height: 46px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #496ed8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  cursor: pointer;
`;

const Text = styled.span`
  size: 15px;
  color: #fff;
`;

export default function EldritchButton({ onClick, title, style }) {
  return (
    <Wrapper onClick={onClick} style={{ ...style }}>
      <Text>{title}</Text>
    </Wrapper>
  );
}
