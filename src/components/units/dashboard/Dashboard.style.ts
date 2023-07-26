import styled from "@emotion/styled";

export const Wrapper = styled.div``;

// PageSection
export const PageSection = styled.section`
  flex-direction: column;
  gap: 50px;
  display: flex;
`;

// Title
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 24px;
    font-weight: 700;
  }
`;
export const TitleIcon = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-left: auto;
  svg {
    width: 100%;
    height: 100%;
  }
`;

// Contents
export const FlexContents = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const Contents = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// Chart
export const ChartContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`;

export const Chart = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 12px;
  padding: 30px 20px;
`;

// Content
export const Content = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  padding: 30px 20px;
`;
