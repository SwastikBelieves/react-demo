import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Mission from '@site/src/components/Aboutpage/Mission';
import Reach from '@site/src/components/Aboutpage/Reach';
import Founder from '@site/src/components/Aboutpage/Founder';
import Layout from '@theme/Layout';
import Team from '../components/team/Team';


export default function Home() {
  return (
    <Layout
      title={`Kubesimplify`}  
      description="On a mission to simplify cloud-native">
      {/* <HomepageHeader /> */}
      <main>
        <HomepageFeatures />
      </main>
      <Mission/>
      <Reach />
      <Founder />
      <Team heading={"Kubesimplify Ambassadors"} slider={true} />
    </Layout>
  );
}
