import styled from 'styled-components';
import SubCard from 'ui-component/cards/SubCard';
import OtherDocsCard from './OtherDocsCard';
import { otherDocsLinks } from 'content/Links';

//  Other Docs Component

export default function OtherDocs() {
    return (
        <Wrapper>
            <SubCard title="Useful Docs">
                {otherDocsLinks.map((item, key) => (
                    <OtherDocsCard data={item} key={key} />
                ))}
            </SubCard>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
