export default function Home() {
  return (
    <main className="p-10 max-w-3xl mx-auto font-sans text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Владислав Іваненко</h1>
      <p className="text-lg mb-6">Молодший спеціаліст з кібербезпеки</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Контактна інформація</h2>
        <ul className="list-disc list-inside">
          <li>Email: ivanenko@example.com</li>
          <li>Телефон: +380 67 123 45 67</li>
          <li>LinkedIn: linkedin.com/in/ivanenko</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Освіта</h2>
        <p>Національний технічний університет України "КПІ", спеціальність "Кібербезпека"</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Навички</h2>
        <ul className="list-disc list-inside">
          <li>Мережева безпека</li>
          <li>Криптографія</li>
          <li>Linux, Kali, Metasploit</li>
          <li>Python, Bash</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Досвід</h2>
        <p><strong>Intern, SecureIT</strong> — Київ, 2024</p>
        <p>Допомагав у проведенні тестування на проникнення та аналізі вразливостей.</p>
      </section>
    </main>
  );
}