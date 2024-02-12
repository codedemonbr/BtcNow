import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  /* border: 1px solid black; */
  height: ${8 * 7}px;
  width: ${8 * 35}px;
  border-radius: ${8 * 2}px;
  background-color: #33cc95;
  align-items: center;
  justify-content: center;
  margin-bottom: ${8 * 3}px;
`;

export const Label = styled.Text`
  color: white;
  font-size: ${8 * 3}px;
  font-weight: 600;
`;
