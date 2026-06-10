// Altera o comportamento do cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Manipula o envio do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('formFeedback');
    
    // Mostra mensagem de sucesso
    feedback.textContent = `Obrigado pelo contato, ${name}! Nossa equipe de sustentabilidade responderá em breve.`;
    feedback.className = "success"; 
    feedback.classList.remove('hidden');

    // Reseta os campos do formulário
    document.getElementById('contactForm').reset();

    // Esconde o aviso após 5 segundos
    setTimeout(() => {
        feedback.classList.add('hidden');
    }, 5000);
});
