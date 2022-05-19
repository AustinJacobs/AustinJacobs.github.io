import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import {
  Container,
  Card,
  Row,
  Text,
  Grid,
  css,
  Image,
} from '@nextui-org/react';
import { SunIcon } from '../public/SunIcon';
import { MoonIcon } from '../public/MoonIcon';

const App = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div>
      <Grid.Container alignItems='center' gap={2} css={{ p: 20 }}>
        <Grid fluid={2}>
          <Text size='2em' color='primary' weight='bold'>
            Austin Jacobs
          </Text>
        </Grid>
        <Grid fluid={1} justify='right'>
          <Switch
            bordered
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            color='primary'
            size='lg'
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container>
        <Card color='primary'>
          <Row justify='center' align='center'>
            <Text h6 size={15} color='white' css={{ m: 0 }}>
              NextUI gives you the best developer experience with all the
              features you need for building beautiful and modern websites and
              applications.
            </Text>
          </Row>
        </Card>
      </Grid.Container>
    </div>
  );
};

export default App;
