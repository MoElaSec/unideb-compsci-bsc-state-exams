import styled from 'styled-components';
import { videoLinks } from 'content/Links';
import SubCard from 'ui-component/cards/SubCard';
import YoutubeLinkCard from './YoutubeLinkCard';

// Youtube Links Section
export default function YoutubeLinks() {
    return (
        <Wrapper>
            <SubCard title="Useful Video Links">
                {videoLinks.map((item, key) => (
                    <YoutubeLinkCard data={item} key={key} />
                ))}
            </SubCard>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
