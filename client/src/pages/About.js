// React & Redux
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Components


class About extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <h2>Summary</h2>
            <p>Big Red Planet (BRP) is a private network of individuals working on a set of projects. These projects share a portion of their equity with BRP. BRP’s income is split between investment in STEM education (50%) and investment / dividends, directed by BRP’s equity holders. Individuals gain a portion of BRP’s equity with each hour of work contributed to network projects. Each individual project’s equity generated and distributed using the same methodology. The result is a subtitute for traditional capital strucutres, using Labor Hour Tokens to replace owners equity and stock options. Instead, tokens (ownership shares) are generated at the time of labor investment.</p>

          <h2>Why</h2>
            <p>Our innovative capital structure was created in response to two key trends we see in the world.</p>
            <p><h4>Supply Change</h4> There has been a preference shift in labor supply. Blame Instagram, Fortnite, and “those damn kids” if you want. The fact remains that today’s workforce is the least engaged in history. Companies like Google have seen massive success resulting from programs to encourage side projects. We believe that that concept can be applied at scale to be the core business model.</p>
            <p><h4>Market Change</h4> The ability to build, launch, and grow a business has been democratized, and for highly-skilled individuals, the barriers to entry have never been lower.</p>

          <h2>How</h2>
            <p><h4>Open Governance</h4></p>
              <ul><li>Dynamic Token Rates The token rate is set by a project’s owners. This determines how many hours are needed for one token, going forward. This attempts to compensate early contributors to a project with a greater share of equity, fighting against inflation and stake dilution.</li>
              <li>Quadratic Voting Hours are converted to tokens based on a project’s current token rate, and tokens are converted into votes based on the equation <span className="equation">c(x) = x<sup>a</sup></span> where the variable <span className="equation"> a </span> is set during an initial vote. For that vote, we use <span className="equation">c(x) = x</span>. While dynamic token rates guard against dillution, quadratic voting guards against majority rule.<sup><a href="https://poseidon01.ssrn.com/delivery.php?ID=862024094122115088088082115004004007102003037074039062086004064064099081028067099031038026119061045028111106031004080083086020117075046037076117083084108070096118025001089067127024127025083001121091114084100103016073002073075024028096093028029073007083&amp;EXT=pdf" target="_blank" rel="noopener noreferrer">1</a></sup></li>
              <li>Project Level New tasks, features, and initiatives are proposed and approved democratically by the projects’ owners.</li>
              <li>Network Level Just as the projects adopt a radical democratic process, the network itself is directed by its members and their equity/tokens.</li></ul>
            <p><h4>Connecting and Building Talent</h4> By pooling our skills, STEM experts are able to apply their core competencies across a wide array of projects. Furthermore, by reinvesting in STEM education, we are able to further bolster our team and prospective talent pool.</p>
            <p><h4>Reinvesting in STEM education</h4> Half of all network profits are reinvested in STEM education programs like Girls Who Code, NASA’s robotics competition or BRP’s projects themselves, further increasing future profits for reinvestment.</p>

          <h2>What</h2>
            <p><h4>Project Management</h4> A streamlined project management solution, allowing project managers to post tasks and rewards for network members to claim.</p>
            <p><h4>Entity Governance</h4> A technocratic proxy for decision making, allowing members to vote for or against new members, initiatives, projects, divestitures, and other business activities, in proportion to their stake (time invested) and intensity of preference (quadratic voting).</p>
        </Container>
      </div>
    );
  }
}

export default About;
