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
          <Text size='2em' weight='bold'>
            Austin Jacobs
          </Text>
        </Grid>
        <Grid fluid={1}>
          <Switch
            bordered
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            size='lg'
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container>
        <Text>
          Hello
        </Text>
      </Grid.Container>
    </div>
  );
};

export default App;
