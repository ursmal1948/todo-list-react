import { Header, Title, StyledSection } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        <div className="section__body">
            {body}
        </div>
    </StyledSection>
);

export default Section;