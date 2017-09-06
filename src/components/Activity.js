import React, { Component } from 'react';
import { Card, Feed, Container, Header, Divider } from 'semantic-ui-react';
import moment from 'moment';
import { Timeline } from 'react-twitter-widgets';

class Activity extends Component {
  renderProjects = () =>
    this.props.repos.map((repo, i) => {
      return (
        <Feed.Event key={i}>
          <Feed.Content>
            <Feed.Date
              content={moment(repo.pushed_at)
                .endOf('day')
                .fromNow()}
            />
            <Feed.Summary>
              <a href={repo.html_url}>{repo.name}</a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      );
    });

  render() {
    return (
      <div
        style={{
          backgroundImage: `url('https://subtlepatterns.com/patterns/crossword.png')`,
          padding: 40
        }}
      >
        <Container textAlign="center" text>
          <Header as="h2" textAlign="center" content="Recent Activity" />
          <Divider section />
          <Card.Group style={{ marginRight: `-10.5em`, marginLeft: `-10.5em` }}>
            <Card>
              <Card.Content>
                <Card.Header>Projects In Progress</Card.Header>
              </Card.Content>
              <Card.Content>
                <Feed>{this.renderProjects()}</Feed>
              </Card.Content>
              <Card.Content extra>
                <a href="https://github.com/ryanefendy95?tab=repositories">
                  See All Projects
                </a>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Blog</Card.Header>
              </Card.Content>
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    <Feed.Content>
                      <Feed.Date content="1 day ago" />
                      <Feed.Summary>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis ab ratione, pariatur provident labore
                        hic amet aspernatur, nostrum impedit quia debitis nulla
                        maxime ipsum, culpa veniam dolores qui! Itaque, atque.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  <Feed.Event>
                    <Feed.Content>
                      <Feed.Date content="2 day ago" />
                      <Feed.Summary>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Blanditiis ab ratione, pariatur provident labore
                        hic amet aspernatur, nostrum impedit quia debitis nulla
                        maxime ipsum, culpa veniam dolores qui! Itaque, atque.
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Card.Content>
              <Card.Content extra>
                <a href="https://medium.com/@ryanefendy95">See All Stories</a>
              </Card.Content>
            </Card>

            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'ryandesprezzatu'
              }}
              options={{
                username: 'ryandesprezzatu',
                height: '500',
                width: '400'
              }}
              onLoad={() => console.log('Timeline is loaded!')}
            />
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default Activity;
