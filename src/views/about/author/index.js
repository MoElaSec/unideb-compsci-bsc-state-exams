import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandTwitter, IconBrowser } from '@tabler/icons';
import contributors from 'content/Contributors';
import ContributorCard from 'views/contribution/ContributorCard';

// About Author card

export default function AboutAuthor() {
    return (
        <Wrapper>
            <SubCard title="About Author">
                <TopWrapper>
                    <Avatar src="/images/author.png" alt="dd:" width={200} size="xl" />
                    <Grid>
                        <h2>Abdulrahim Iliasu Illo</h2>
                        <h4>Bsc. Computer Science Graduate</h4>
                    </Grid>
                </TopWrapper>
                <BottomWrapper>
                    <p>
                        This site was developed to help students preparing for <b>state exams</b> find good and relavant materials to study.{' '}
                        I graduated from University of Debrecen on 11th January 2022, and this site contains everything about my experience
                        including how it was conducted, materials I used to study and overall tips I found important.
                    </p>
                    <p>
                        Feel free to contribute and update the site incase of change in topics or curriculum in the future. For more info
                        about how to contribute please check out <a href="/contribution">contribution</a> (Make sure to add your name and
                        contacts in list of contributors).
                    </p>
                </BottomWrapper>
                <h3>Contact Me</h3>
                <TopWrapper>
                    <CardSecondaryAction
                        title="LinkedIn"
                        link="https://www.linkedin.com/in/abdulrahimiliasu/"
                        icon={<IconBrandLinkedin />}
                    />
                    <CardSecondaryAction title="Github" link="https://github.com/abdulrahimiliasu" icon={<IconBrandGithub />} />
                    <CardSecondaryAction title="Twitter" link="https://twitter.com/illo_abdulrahim" icon={<IconBrandTwitter />} />
                    <CardSecondaryAction title="Instagram" link="https://instagram.com/abdulrahimiliasu" icon={<IconBrandInstagram />} />
                    <CardSecondaryAction title="Personal Website" link="https://abdulrahimiliasu.netlify.app" icon={<IconBrowser />} />
                </TopWrapper>
            </SubCard>
            <SubCard title="Contributors">
                {contributors.map((contributor, key) => (
                    <ContributorCard contributor={contributor} key={key} />
                ))}
            </SubCard>
            <b>PLEASE DO NOT LIMIT YOUR STUDYING TO CONTENT ONLY ON THIS SITE</b>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    gap: 15px;
    padding: 15px;
`;
const TopWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
`;
const BottomWrapper = styled.div``;
