const meditationScript = `Welcome to this 5-minute guided meditation designed to reduce anxiety and promote mindfulness.

Begin by finding a comfortable seated position. Close your eyes gently and take a deep breath in through your nose... and slowly exhale through your mouth.

Feel the weight of your body grounding you to the surface beneath you. Notice the sensation of your feet touching the floor.

Now, bring your attention to your breath. Observe the natural rhythm of your inhalations and exhalations without trying to change it.

If your mind wanders, gently guide it back to the breath.

Take a slow, deep breath in... hold it for a moment... and exhale fully.

With each breath, feel yourself becoming more relaxed and centered.

Now, silently repeat to yourself: "I am safe. I am calm. I am present."

Allow these words to resonate within you.

As you continue to breathe, notice any tension in your body. With each exhale, imagine releasing that tension.

Feel a wave of calmness spreading from the top of your head, down through your shoulders, arms, and fingertips.

Let this calmness flow down your spine, through your legs, and out through your toes.

Take another deep breath in... and exhale slowly.

When you are ready, gently bring your awareness back to the room.

Wiggle your fingers and toes, and when you feel ready, open your eyes.

Carry this sense of calm and mindfulness with you throughout your day.

Thank you for taking this time for yourself.`;

const meditationTextElement = document.getElementById('meditation-text');
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => {
  meditationTextElement.textContent = meditationScript;
  startButton.disabled = true;
  startButton.textContent = 'Meditation in Progress...';
});
