import { Mathematics } from 'content/Topics';
import styled from 'styled-components';
import SubCard from 'ui-component/cards/SubCard';

// Mathematical and Computer Science Section

export default function StateExamsMathematics() {
    return (
        <Wrapper>
            <SubCard>
                <ContentWrapper>
                    {Mathematics.map((item, index) => (
                        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    ))}
                </ContentWrapper>
            </SubCard>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
    display: grid;
    gap: 10px;
    & > a {
        color: green;
    }
`;
