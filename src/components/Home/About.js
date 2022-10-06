import "./About.css";
import ContentWrapper from "../UI/ContentWrapper";

const About = () => {
  return (
    <ContentWrapper className="section">
      <h2  id="about" >Space Foods Company</h2>
      <div className="row">
        <p>
          Space Foods Company was an American business located in Baltimore,
          Maryland. An idea before it's time, the company developed a line
          called Galaxy Home Syrups... for Soft Drinks. The homemade soda kit
          collection consisted of 10 different ranks of the crew members with 8
          different colors. The bottles also had a screw-on cap with flavor
          label. The five flavors were Cherry, Raspberry, Lemon-lime, Grape and
          Orange. These awesome bottles were put into production and boxed in
          cases of 12. We don't know when the company planned to launch these
          kits to the public, but in 1953 Space Foods Company filed for
          bankruptcy and deemed the initial launch a failure.
          <br/>
          <br/>
          In 1971, our Space Ace's grandfather purchased a building for his
          manufacturing company. To his surprise, the building came with more
          than just factory floor space. The upstairs was home to thousands of
          these boxed crew members, who never had the chance to complete their
          launch. Space Ace's family has sold a few to collectors, but never
          found a way to tell the story of these bottles. Until now. Now, Space
          Foods Company has the opportunity to tell the story of these unique
          antique bottles. A story that we can bring to life as a community!
        </p>
        <img src="../../images/vintage_bottles.jpeg" alt="Space Foods Company vintage ad" />
      </div>
    </ContentWrapper>
  );
};

export default About;
