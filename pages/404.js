import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Custom404() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        404 - Сторінка не знайдена
      </Typography>
      <Typography variant="body1">
        Вибачте, ми не змогли знайти цю сторінку.
      </Typography>
    </Container>
  );
}