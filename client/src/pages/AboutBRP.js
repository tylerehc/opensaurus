// React & Redux
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Components


class AboutBRP extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          
          <h2>Summary</h2>

          <p>Big Red Planet (BRP) is an Opensaurus network, focused on STEM
          education. BRP’s projects share a portion of their equity with BRP.
          BRP’s income is split between investment in STEM education
          (50%) and investment / dividends, directed by BRP’s equity holders.
          Individuals gain a portion of BRP’s equity with each hour of work
          contributed to network projects. Each individual project’s equity
          generated and distributed using the same methodology. The result is
          a subtitute for traditional capital structures, using Labor Hour
          Tokens to replace owners equity and stock options. Instead,
          tokens (ownership shares) are generated at the time of labor investment.</p>

          <h2>Connecting and Building Talent</h2>

          <p>By pooling our skills, STEM experts are able to apply their core
          competencies across a wide array of projects. Furthermore, by
          reinvesting in STEM education, we are able to further bolster our
          team and prospective talent pool.</p>

          <h2>Reinvesting in STEM education</h2>

          <p>Half of all network profits are reinvested in STEM education programs,
          including Girls Who Code, NASA’s robotics competition or BRP’s projects
          themselves, further increasing future profits for reinvestment.</p>

        </Container>
      </div>
    );
  }
}

export default AboutBRP;
