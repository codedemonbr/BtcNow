import styled from 'styled-components/native';

interface DashboardProps {
  isNegative: boolean;
}

export const Container = styled.View<DashboardProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ isNegative }) => (isNegative ? '#E62E4D' : '#33CC95')};
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

export const TopContainer = styled.View<DashboardProps>`
  flex: 3;
  width: 100%;
  align-items: center;
  justify-content: center;

  background: ${({ isNegative }) => (isNegative ? '#E62E4D' : '#33CC95')};
`;

export const MidContainer = styled.ScrollView`
  flex: 10;
  width: 100%;
  background: white;
  border-radius: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const BottomContainer = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const DonationButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  padding: 12px;
  border-radius: 12px;
`;

export const IconContainer = styled.View`
  margin-left: 12px;
`;

export const DonationText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;
