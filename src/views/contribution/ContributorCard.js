import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandTwitter, IconBrowser } from '@tabler/icons';

// ContributorCard Component

export default function ContributorCard({ contributor }) {
    const { name, about, linkedin, instagram, twitter, github, personal } = contributor;
    return (
        <Wrapper>
            <TopWrapper>
                <b>{name}</b>
                <CardSecondaryAction title="LinkedIn" link={linkedin} icon={<IconBrandLinkedin />} size="badge" />
                <CardSecondaryAction title="Github" link={github} icon={<IconBrandGithub />} size="badge" />
                <CardSecondaryAction title="Twitter" link={twitter} icon={<IconBrandTwitter />} size="badge" />
                <CardSecondaryAction title="Instagram" link={instagram} icon={<IconBrandInstagram />} size="badge" />
                <CardSecondaryAction title="Personal Website" link={personal} icon={<IconBrowser />} size="badge" />
            </TopWrapper>
            <BottomWrapper>
                <p>{about}</p>
            </BottomWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 5px;
`;
const TopWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
const BottomWrapper = styled.div``;

ContributorCard.propTypes = {
    contributor: PropTypes.object,
    name: PropTypes.string
};
