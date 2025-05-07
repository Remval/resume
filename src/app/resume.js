
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Resume() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Іван Іванов
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          Фронтенд-розробник • Київ, Україна • ivan@example.com
        </Typography>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Про себе
          </Typography>
          <Typography>
            Я амбітний розробник із досвідом у React, Next.js та створенні адаптивних інтерфейсів. Шукаю можливості для розвитку в команді однодумців.
          </Typography>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Досвід роботи
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" fontWeight="bold">
                Frontend Developer — IT-компанія &quot;TechSoft&quot;
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2023 — 2025
              </Typography>
              <Typography>
                Розробляв і підтримував веб-додатки на React, працював з REST API, оптимізував продуктивність.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Освіта
          </Typography>
          <Typography>
                Національний університет &quot;Києво-Могилянська академія&quot;, Бакалавр з комп’ютерних наук (2021 — 2025)
            </Typography>

        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom>
            Навички
          </Typography>
          <Typography>
            JavaScript, React, Next.js, HTML, CSS, Git, Material UI
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}