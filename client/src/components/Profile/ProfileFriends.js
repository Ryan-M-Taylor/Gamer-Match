import Accordion from 'react-bootstrap/Accordion';

function ProfileFriends() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Friends List</Accordion.Header>
        <Accordion.Body>
          <ul>Generic Friend List
            <li>Hard Coded Buddy Example</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Profile Stuff</Accordion.Header>
        <Accordion.Body>
        <ul>Generic Profile Stuff
            <li>Hard Coded Stuff Example</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Profile Stuff</Accordion.Header>
        <Accordion.Body>
        <ul>Generic Profile Stuff
            <li>Hard Coded Stuff Example</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ProfileFriends;