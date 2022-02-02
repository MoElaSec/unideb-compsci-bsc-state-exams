import SubCard from 'ui-component/cards/SubCard';
import styled from 'styled-components';

// Details on State Exams

export default function AboutStateExams() {
    return (
        <Wrapper>
            <SubCard title="About State Exams">
                <TopWrapper>
                    <b>My State Exams Experience</b>
                    <p>
                        First you will need to register for the exam in Neptun Administration - Final Exams, After then the school will
                        update you about the date and the panel of your exam. My panel was:
                        <ul>
                            <li>Dr. Ispany Marton (Chairman)</li>
                            <li>Besenczi Renato</li>
                            <li>Bodrogne Dr. Zichar Mariana</li>
                            <li>Dr. Buchman Attila</li>
                            <li>Dr. Hovath Geza</li>
                            <li>Dr. Toth Adam</li>
                            <li>Dr. Kovacs Zsigmond</li>
                        </ul>
                    </p>
                    <p>
                        My state exams was onsite, depending on the covid situation it might change for you (feel free to add online
                        experience to the site if you have). Before the day, you will recieve your time and number via Neptun (Be sure to
                        arrive there atleast one hour before your time as they call you in arround that time).When I was called there were
                        only internationals in the room but other Hungarian students of BSc. Computer Science were arround and not everyone
                        was dressed in complete formals.{}
                    </p>
                    <p>
                        When I entered the room, the board members and one assistant sitting on the left were already in the room, the
                        assistant will explain what you need to do. The chairman of the board was mediating the whole thing.
                        <ul>
                            <li>
                                First, they asked me to choose two card randomly shuffled on the table, these card will be the topic number
                                you will have to explain about both in Mathematics & Computer Science and Informatics respectively. Then
                                they will write down your topics and give a sheet of paper to write about those topics.
                            </li>
                            <li>
                                Before you start writing you will need do your presentation about your thesis (Defence), the presentation
                                will be the one you already uploaded to the site using the pdf.After your presentation the chairman will ask
                                if anyone has questions about the presentation. If yes, they will ask you one or two simple questions about
                                the presentation, and then you can finish and go back to your seat to continue writing about the topics
                                meanwhile the person next in line will start his/her exam (you will have enough time to write about the
                                topics, roughly 1 hour).
                            </li>
                        </ul>
                    </p>
                    <p>
                        When its your turn, you will stand up and seat in front of the panel, you will give them your paper (stuff you
                        wrote) and they will go through it and start asking you questions about what you wrote, sometimes they ask questions
                        about something related to the topic but not in the paper or slides so be prepared. Try to answer the questions to
                        your best knowledge because they will ask you more if you do not know or cannot explain anything. When you are done
                        they tell you to leave and wait till 14:00 - 16:00 for the result if you want to.
                    </p>
                    <p>
                        When everyone is done and the result is ready, They will ask you to come into the room, everyone including the panel
                        will stand up. They will state announcing the result of the hungarian students first, then later annouce the result
                        of internationals. The result will be two grade, first your thesis defence and second your state exams e.g (5,4).
                        After that they will congratulate the ones that passed for finishing thier studies, everyone shakes hand and that is
                        it.
                    </p>
                    <p>
                        Overall, the teachers were nice, some were not from the Faculty of Informatics though. They will try their best to
                        make you pass the exams especially if you know what you are talking about, so it is not difficult really.
                    </p>
                    <p>I wish everyone goodluck in your exams and future endeavour you decide to pursue.</p>
                </TopWrapper>
            </SubCard>
            <SubCard>
                <BottomWrapper>
                    <b>Tips</b>
                    <ol>
                        <li>Prepare for your thesis presentation</li>
                        <li>Do not limit yourself to only the slides provided</li>
                        <li>Try yourbest to study all topics just to be on safe side</li>
                        <li>Do not write much details in your paper, leave room for questions for the panel</li>
                        <li>Dress in formal clothing if you can.</li>
                    </ol>
                </BottomWrapper>
            </SubCard>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    gap: 15px;
    padding: 15px;
`;
const TopWrapper = styled.div``;
const BottomWrapper = styled.div``;
