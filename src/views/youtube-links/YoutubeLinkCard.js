import styled from 'styled-components';
import { IconLink } from '@tabler/icons';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import PropTypes from 'prop-types';

//  Youtube Link Card Component

export default function YoutubeLinkCard({ data }) {
    const { title, url } = data;
    return (
        <Wrapper>
            <b>{title}</b>
            <CardSecondaryAction title="Go to Link" link={url} icon={<IconLink />} />
        </Wrapper>
    );
}

const Wrapper = styled.div``;

YoutubeLinkCard.propTypes = {
    data: PropTypes.object
};
