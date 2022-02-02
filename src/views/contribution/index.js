import styled from 'styled-components';
import SubCard from 'ui-component/cards/SubCard';

// How to Contribute Component

export default function Contribution() {
    return (
        <Wrapper>
            <SubCard title="How to Contribute">
                <b>
                    There might be grammatical errors, typos, or missing information, if you spot any such mistake, please make sure to
                    correct it by contributing using the follwoing steps:
                </b>
                <ol>
                    <li>
                        Fork the repository : <a href="https://github.com/abdulrahimiliasu/unideb-compsci-bsc-state-exams.git"> here </a>
                    </li>
                    <li>Create your feature branch with your Neptun Code e.g A12XXX</li>
                    <li>Make your changes in your branch</li>
                    <li>Add your name and contacts is src/content/Contributors</li>
                    <li>Create a production build</li>
                    <li>Commit (put details of change in commit message)</li>
                    <li>Push to remote</li>
                    <li>Make a Pull Request to main branch</li>
                </ol>
                <p>Refer to README.md for how to start and run project</p>
            </SubCard>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
