import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Custom500() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        500 - Помилка сервера
      </Typography>
      <Typography variant="body1">
        Вибачте, щось пішло не так.
      </Typography>
    </Container>
  );
}