// Script de desenho no elemento <canvas id="desenho">
// Baseado no script fornecido, com variações de cor, posição e dimensão.

const ctx = document.getElementById('desenho').getContext('2d');

// --- Retângulo original (azul) ---
ctx.fillStyle = '#3498db';
ctx.fillRect(20, 20, 100, 60); // retângulo

// --- Círculo original (verde) ---
ctx.beginPath();
ctx.arc(200, 60, 40, 0, Math.PI * 2); // círculo
ctx.fillStyle = '#27ae60';
ctx.fill();

// --- Retângulo extra: cor, posição e dimensão diferentes ---
ctx.fillStyle = '#e67e22'; // laranja
ctx.fillRect(280, 15, 70, 90); // mais estreito e alto, mais à direita

// --- Círculo extra: cor, posição e raio diferentes ---
ctx.beginPath();
ctx.arc(100, 150, 25, 0, Math.PI * 2); // raio menor, posicionado mais abaixo
ctx.fillStyle = '#9b59b6'; // roxo
ctx.fill();

// --- Retângulo com borda (contorno), sem preenchimento total ---
ctx.strokeStyle = '#c0392b';
ctx.lineWidth = 3;
ctx.strokeRect(200, 120, 120, 60);
