// React & Redux
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Component

class About extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <h2>Summary</h2>
          <p>
            Opensaurus is a project management and collaboration incentive
            platform for teams. It eleminates complexity and common flaws of
            traditional incentive models, like owners equity’, investor
            equity, and stock options. By avoiding common pitfalls and creating
            a streamlined governance system, Opensaurus’ token model allows
            teams to focus on their primary objective: creating.
          </p>
          <h2>Why Start or Join A Network?</h2>
          <ul>
            <li>Create or tap into a group experts to help launch your projects</li>
            <li>Easily place a cause or charity at the center of that group</li>
            <li>Simplify incentives (avoiding limitations, like exercise windows
                and vesting)</li>
            <li>Run your pojects with transparency and fairness</li>
            <li>Use Opensaurus governance tools to share project income as universally
            or as technocratically as its members want</li>
          </ul>

          <h2>Opensaurus’ Governance Tools</h2>

          <ul>

            <li><strong>Tokens:</strong> Tokens are the driving force behind
            Opensauru’s governance structure. A token is rewarded for one expert hour of work contributed to a project.
            A task is posted and given a token value. That value can be adjusted after the tasks completion based on
            how long the member believed the task should have taken. Token holders approve this change.</li>

            <li><strong>Voice Share:</strong> Project decisions are directed
            by members exercising their voice shares. Voice shares flow from
            tokens by the method described below.</li>

            <li><strong>Dynamic Token Rates:</strong> The token rate is set
            by a project’s token holders. This determines how many tokens
            are needed for one voice share, going forward. This attempts to
            compensate early contributors to a project with a greater voice
            share, fighting against inflation and stake dilution.</li>

            <li><strong>Quadratic Voting Hours:</strong> are converted to tokens based on a
            project’s current token rate, and tokens are converted into votes
            based on the equation:
            <span className="equation">c(x) = x<sup>a</sup></span> where the
            variable <span className="equation"> a </span> is set during an
            initial vote using <span className="equation">c(x) = x</span>.
            While dynamic token rates guard against dillution, quadratic voting
            guards against majority rule.
            <sup>
              <a href="https://poseidon01.ssrn.com/delivery.php?ID=862024094122115088088082115004004007102003037074039062086004064064099081028067099031038026119061045028111106031004080083086020117075046037076117083084108070096118025001089067127024127025083001121091114084100103016073002073075024028096093028029073007083&amp;EXT=pdf" target="_blank" rel="noopener noreferrer">
                1
              </a>
            </sup></li>

            <li><strong>Income Distribution:</strong>Opensaurus gives project token
            holders the tools to distribute the projects income in a variety of ways.
            For example, <a href="/networks/brp/about/">some newtworks </a>chooses to give a portion of each project’s tokens to every
            network member and to the network itself.</li>

            <li><strong>Project Level Governance:</strong> New tasks, features,
            initiatives, and project members are proposed and approved democratically
            by the projects’ token holders.</li>

            <li><strong>Network Level Governance:</strong> Just as the projects
            adopt a radical democratic process, the network itself is directed
            by its members and their equity/tokens. This includes any income
            contributed to the network and the admission of new network projects.</li>



          </ul>

        </Container>
      </div>
    );
  }
}

export default About;
