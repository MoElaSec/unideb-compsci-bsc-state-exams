import styled from 'styled-components';
import SubCard from 'ui-component/cards/SubCard';
import { Informatics } from 'content/Topics';

//  Informatical Science Topics Section

export default function StateExamsInformatics() {
    return (
        <Wrapper>
            <SubCard>
                <ContentWrapper>
                    {Informatics.map((item, index) => (
                        <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
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
